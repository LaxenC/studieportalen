/* =====================================================================
   GRANSKA – alla uppgifter, för läraren. Sidan granska.html länkas
   inte från portalen; man hittar den bara med adressen.
   Rörs inte för att lägga till innehåll.
   ===================================================================== */
let AKTIV_AK = "alla"; const AK = () => AKTIV_AK;
const $ = id => document.getElementById(id);
let qCounter = 0;

// Nivåchips 0 1 2 – fyllda för de nivåer uppgiften har (för vald årskurs)
function nivaChips(o, t, ak) {
  const n = nivaerFor(o, t, ak).map(x => x.niva);
  return `<span class="gr-niv">${[0, 1, 2, 3].map(L => `<span class="${n.includes(L) ? "pa" : ""}" data-n="${L}">${L}</span>`).join("")}</span>`;
}
function rad(o, t, ak) {
  const avs = (t.avsnitt || []).map(a => { const x = avsnittAv(o, t.kapitel, a); return x ? esc(x.rubrik) : `<span class="gr-fel">#${esc(a)} saknas</span>`; }).join(", ");
  const n = nivaerFor(o, t, ak)[0], L = n ? n.niva : (grundNivaer(t)[0] || 0);
  const ovrigt = [];
  if (t.rullista) ovrigt.push("rullista på nivå " + t.rullista.join(", "));
  if (t.nivaerPerArskurs) ovrigt.push("egen nivå för åk " + Object.keys(t.nivaerPerArskurs).join(", "));
  if (t.grupp) ovrigt.push("grupp: " + esc(t.grupp));
  if (t.arskurs) ovrigt.push("åk " + MD.akText(t.arskurs));
  return `<tr id="u-${t.id}">
    <td class="gr-namn"><b>${esc(t.titel)}</b><small>${esc(t.id)}${RADER[t.id] ? ` · rad ${RADER[t.id].fran}` : ""}${ovrigt.length ? " · " + ovrigt.join(" · ") : ""}</small></td>
    <td>${TYPNAMN[t.typ] || t.typ}</td>
    <td>${avs || '<span class="gr-dim">hela kapitlet</span>'}</td>
    <td>${nivaChips(o, t, ak)}</td>
    <td class="gr-tal">${t.varianter.length}</td>
    <td class="gr-knapp"><button type="button" class="ghostbtn" data-prova="${o.id}|${t.id}|${L}">Prova</button>
      <button type="button" class="ghostbtn" data-svar="${t.id}" aria-expanded="false">Svar</button>${andraLank(o, t)}</td></tr>
    <tr class="gr-svar" id="s-${t.id}" hidden><td colspan="6"><ol>${t.varianter.map(v => `<li>${variantText(t, v)}</li>`).join("")}</ol></td></tr>`;
}

/* ---------- Borra ner: ämne › område › kapitel › avsnitt ---------- */
const VAL = { amne: "", omrade: "", kapitel: "", avsnitt: "" };
const synliga = (o, t) => !t.dold && TYPER[t.typ] && (AK() === "alla" || passar(uppgiftArskurs(o, t), AK()));
const passarAvsnitt = (t, av) => !av || (av === "_hela" ? !(t.avsnitt || []).length : (t.avsnitt || []).includes(av));
function antal(o, kapId, av) {
  return o.uppgifter.filter(t => (!kapId || t.kapitel === kapId) && synliga(o, t) && passarAvsnitt(t, av)).length;
}
function omradenI(amneId) { return Object.values(Portal.omraden).filter(o => !amneId || o.amne === amneId); }
function fyllVal() {
  const opt = (v, txt, valt) => `<option value="${esc(v)}"${valt ? " selected" : ""}>${txt}</option>`;
  const amnen = Portal.amnenLista.filter(a => omradenI(a.id).length);
  if (VAL.amne && !amnen.some(a => a.id === VAL.amne)) VAL.amne = "";
  $("fAmne").innerHTML = opt("", "Alla ämnen", !VAL.amne) + amnen.map(a =>
    opt(a.id, `${esc(a.namn)} (${omradenI(a.id).reduce((n, o) => n + antal(o), 0)})`, VAL.amne === a.id)).join("");
  const omr = omradenI(VAL.amne);
  if (VAL.omrade && !omr.some(o => o.id === VAL.omrade)) VAL.omrade = "";
  $("fOmrade").innerHTML = opt("", "Alla områden", !VAL.omrade) + omr.map(o => opt(o.id, `${esc(o.namn)} (${antal(o)})`, VAL.omrade === o.id)).join("");
  const o = Portal.omraden[VAL.omrade];
  $("fKapitel").disabled = !o;
  if (!o || !o.kapitel.some(k => k.id === VAL.kapitel)) VAL.kapitel = "";
  $("fKapitel").innerHTML = opt("", o ? "Alla kapitel" : "Kapitel – välj område först", !VAL.kapitel) +
    (o ? o.kapitel.map(k => opt(k.id, `${esc(k.namn)} (${antal(o, k.id)})`, VAL.kapitel === k.id)).join("") : "");
  const txt = o && VAL.kapitel && o.texter[VAL.kapitel];
  const avs = txt ? txt.avsnitt : [];
  $("fAvsnitt").disabled = !VAL.kapitel;
  if (VAL.avsnitt && VAL.avsnitt !== "_hela" && !avs.some(a => a.id === VAL.avsnitt)) VAL.avsnitt = "";
  $("fAvsnitt").innerHTML = opt("", VAL.kapitel ? "Alla avsnitt" : "Avsnitt – välj kapitel först", !VAL.avsnitt) +
    (VAL.kapitel ? avs.map(a => opt(a.id, `${esc(a.rubrik)} (${antal(o, VAL.kapitel, a.id)})`, VAL.avsnitt === a.id)).join("") +
      opt("_hela", `Hela kapitlet – inget avsnitt (${antal(o, VAL.kapitel, "_hela")})`, VAL.avsnitt === "_hela") : "");
}
function sparaVal() {
  try { localStorage.setItem("granskaVal", JSON.stringify(VAL)); } catch (e) { }
  const u = new URLSearchParams();
  if (VAL.omrade) u.set("kapitel", VAL.omrade + (VAL.kapitel ? "/" + VAL.kapitel : ""));
  else if (VAL.amne) u.set("amne", VAL.amne);
  if (VAL.avsnitt) u.set("avsnitt", VAL.avsnitt);
  history.replaceState(null, "", location.pathname + (u.toString() ? "?" + u.toString().replace(/%2F/g, "/") : ""));
}
function lasVal() {
  try { Object.assign(VAL, JSON.parse(localStorage.getItem("granskaVal") || "{}")); } catch (e) { }
  const u = new URLSearchParams(location.search);
  if (u.get("kapitel") || u.get("amne")) {
    const [om, kap] = (u.get("kapitel") || "").split("/");
    VAL.omrade = om || ""; VAL.kapitel = kap || ""; VAL.avsnitt = u.get("avsnitt") || "";
    VAL.amne = (Portal.omraden[VAL.omrade] || {}).amne || u.get("amne") || "";
  }
}

function visa() {
  fyllVal();
  const ak = AK(), body = $("ovBody"), out = [];
  for (const o of omradenI(VAL.amne)) {
    if (VAL.omrade && o.id !== VAL.omrade) continue;
    for (const k of o.kapitel) {
      if (VAL.kapitel && k.id !== VAL.kapitel) continue;
      const alla = o.uppgifter.filter(t => t.kapitel === k.id);
      let tasks = alla.filter(t => synliga(o, t) && passarAvsnitt(t, VAL.avsnitt));
      const dolda = alla.filter(t => t.dold || !TYPER[t.typ]);
      // samma ordning som i uppgiftsfilen
      const per = [0, 1, 2, 3].map(L => tasks.filter(t => nivaerFor(o, t, ak).some(x => x.niva === L)).length);
      out.push(`<section class="panel gr-kap"><div class="gr-rubrik"><h2>${esc(k.namn)}</h2><span class="gr-dim">${esc(o.namn)}</span>${VAL.avsnitt ? `<p class="gr-avrub">› ${VAL.avsnitt === "_hela" ? "Hela kapitlet (inget avsnitt)" : esc((avsnittAv(o, k.id, VAL.avsnitt) || {}).rubrik || VAL.avsnitt)}</p>` : ""}
        <span class="gr-sum">${tasks.length} uppgifter · nivå 0: ${per[0]} · nivå 1: ${per[1]} · nivå 2: ${per[2]}${per[3] ? ` · utmaning: ${per[3]}` : ""}</span></div>`);
      if (!tasks.length) out.push(`<p class="gr-dim">Inga uppgifter${VAL.avsnitt ? " i det här avsnittet" : ""}${ak === "alla" ? "" : " för åk " + ak}.</p>`);
      else out.push(`<div class="tablewrap"><table class="rules gr-tab"><thead><tr><th>Uppgift</th><th>Typ</th><th>Avsnitt</th><th>Nivå</th><th>Var.</th><th></th></tr></thead>
        <tbody>${tasks.map(t => rad(o, t, ak)).join("")}</tbody></table></div>`);
      if (dolda.length && !VAL.avsnitt) out.push(`<p class="gr-dim">Dolda eller okänd typ: ${dolda.map(t => `${esc(t.id)}${TYPER[t.typ] ? "" : ` (okänd typ "${esc(t.typ)}")`}`).join(", ")}</p>`);
      out.push(`</section>`);
    }
  }
  body.innerHTML = out.join("") || "<p>Inga uppgifter.</p>";
  if (location.hash.startsWith("#u-")) { const el = document.getElementById(location.hash.slice(1)); el && el.scrollIntoView(); }
}

/* Prova en uppgift i en ruta */
let PROVA = null;
function prova(oid, tid, L, vi) {
  const o = Portal.omraden[oid], t = o.uppgifter.find(x => x.id === tid), T = TYPER[t.typ];
  if (vi === undefined) vi = rnd(t.varianter.length);
  const q = { uid: "pr" + (++qCounter), task: t, v: t.varianter[vi], niva: +L, omrade: t.kapitel, rull: (t.rullista || []).includes(+L) };
  T.setup && T.setup(q); PROVA = { oid, tid, L, vi, q };
  $("prTitle").textContent = t.titel;
  $("prLead").textContent = `Nivå ${L} · variant ${vi + 1} av ${t.varianter.length}`;
  $("prBody").innerHTML = `<p class="instr">${typeof T.instr === "function" ? T.instr(q) : (T.instr || "")}</p><div class="qbody" id="prQ">${T.html(q)}</div><div class="fb" id="prFb" hidden></div>`;
  T.mount && T.mount($("prQ"), q);
  $("prRatta").hidden = false;
  if (!$("provaDlg").open) $("provaDlg").showModal();
}
document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.svar) { const r = $("s-" + b.dataset.svar); r.hidden = !r.hidden; b.setAttribute("aria-expanded", !r.hidden); return; }
  if (b.dataset.ak) { AKTIV_AK = b.dataset.ak === "alla" ? "alla" : +b.dataset.ak; document.querySelectorAll("#akval button").forEach(x => x.setAttribute("aria-checked", x === b)); visa(); return; }
  if (b.dataset.prova) { const [o, t, L] = b.dataset.prova.split("|"); prova(o, t, L); }
  else if (b.id === "prRatta") {
    const { q } = PROVA, r = TYPER[q.task.typ].grade($("prQ"), q), fb = $("prFb");
    fb.hidden = false; fb.className = "fb " + (r.ok ? "ok" : (r.right || r.part) ? "part" : "no");
    fb.innerHTML = `<p class="verdict">${r.verdict ? r.verdict : r.ok ? "Rätt!" : r.right ? `Delvis rätt – ${r.right} av ${r.total}.` : "Inte rätt."}</p><div class="facit"><p class="fl">Rätt svar</p>${r.facit}</div>`;
    b.hidden = true;
  }
  else if (b.id === "prNy") { const p = PROVA; const t = Portal.omraden[p.oid].uppgifter.find(x => x.id === p.tid); prova(p.oid, p.tid, p.L, (p.vi + 1) % t.varianter.length); }
  else if (b.id === "prStang" || b.id === "prX") $("provaDlg").close();
});

async function startaGranska() {
  laggTillSvgDefs();
  await laddaAllt();
  await hittaRader();
  lasVal();
  const andra = { fAmne: ["amne", "omrade", "kapitel", "avsnitt"], fOmrade: ["omrade", "kapitel", "avsnitt"], fKapitel: ["kapitel", "avsnitt"], fAvsnitt: ["avsnitt"] };
  Object.entries(andra).forEach(([id, nycklar]) => $(id).addEventListener("change", e => {
    nycklar.forEach(n => VAL[n] = ""); VAL[nycklar[0]] = e.target.value;
    if (id === "fOmrade" && VAL.omrade) VAL.amne = Portal.omraden[VAL.omrade].amne;
    sparaVal(); visa();
  }));
  $("akval").innerHTML = ["alla", ...ARSKURSER].map(v => `<button type="button" role="radio" data-ak="${v}" aria-checked="${v === "alla"}">${v === "alla" ? "Alla" : "Åk " + v}</button>`).join("");
  $("fel").innerHTML = Portal._fel.map(f => `<p class="err">${esc(f)}</p>`).join("");
  visa();
}

/* ---------- Ändra på GitHub ---------- */
const RADER = {};   // uppgifts-id -> { fil, fran, till }
async function hittaRader() {
  for (const o of Object.values(Portal.omraden)) for (const k of o.kapitel) {
    const fil = sokvag(o, `uppgifter/${k.id}.js`);
    try {
      const r = await fetch(fil + "?v=" + Date.now()); if (!r.ok) continue;
      const rader = (await r.text()).split("\n"), starter = [];
      rader.forEach((l, i) => { const m = l.match(/^\s*\{\s*id:\s*"([^"]+)"/); if (m) starter.push([m[1], i + 1]); });
      starter.forEach(([id, fran], j) => {
        let till = j + 1 < starter.length ? starter[j + 1][1] - 1 : rader.length;
        while (till > fran && !rader[till - 1].trim()) till--;
        RADER[id] = { fil, fran, till };
      });
    } catch (e) { }
  }
}
function andraLank(o, t) {
  const repo = githubRepo(), r = RADER[t.id];
  if (!repo || !r) return "";
  return `<a class="ghostbtn gr-andra" href="https://github.com/${repo}/edit/main/${r.fil}#L${r.fran}-L${r.till}" target="_blank" rel="noopener" title="Öppnar filen i GitHub. Uppgiften börjar på rad ${r.fran}. Sök på ${esc(t.id)} med Ctrl+F.">Ändra</a>`;
}
