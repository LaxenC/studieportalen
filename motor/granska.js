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
  const n = nivaerFor(o, t, ak)[0], L = n ? n.niva : t.nivaer[0];
  const ovrigt = [];
  if (t.rullista) ovrigt.push("rullista på nivå " + t.rullista.join(", "));
  if (t.nivaerPerArskurs) ovrigt.push("egen nivå för åk " + Object.keys(t.nivaerPerArskurs).join(", "));
  if (t.grupp) ovrigt.push("grupp: " + esc(t.grupp));
  if (t.arskurs) ovrigt.push("åk " + MD.akText(t.arskurs));
  return `<tr id="u-${t.id}">
    <td class="gr-namn"><b>${esc(t.titel)}</b><small>${esc(t.id)}${ovrigt.length ? " · " + ovrigt.join(" · ") : ""}</small></td>
    <td>${TYPNAMN[t.typ] || t.typ}</td>
    <td>${avs || '<span class="gr-dim">hela kapitlet</span>'}</td>
    <td>${nivaChips(o, t, ak)}</td>
    <td class="gr-tal">${t.varianter.length}</td>
    <td class="gr-knapp"><button type="button" class="ghostbtn" data-prova="${o.id}|${t.id}|${L}">Prova</button>
      <button type="button" class="ghostbtn" data-svar="${t.id}" aria-expanded="false">Svar</button></td></tr>
    <tr class="gr-svar" id="s-${t.id}" hidden><td colspan="6"><ol>${t.varianter.map(v => `<li>${variantText(t, v)}</li>`).join("")}</ol></td></tr>`;
}

function visa() {
  const filt = $("filter").value, ak = AK(), body = $("ovBody"), out = [];
  for (const o of Object.values(Portal.omraden)) {
    for (const k of o.kapitel) {
      if (filt && filt !== o.id + "/" + k.id && filt !== o.id) continue;
      const alla = o.uppgifter.filter(t => t.kapitel === k.id);
      let tasks = alla.filter(t => !t.dold && TYPER[t.typ]);
      if (ak !== "alla") tasks = tasks.filter(t => passar(uppgiftArskurs(o, t), ak));
      const dolda = alla.filter(t => t.dold || !TYPER[t.typ]);
      // sortera: avsnittens ordning i texten, sedan lägsta nivå
      const ordning = ((o.texter[k.id] || {}).avsnitt || []).map(a => a.id);
      const pos = t => { const i = ordning.indexOf((t.avsnitt || [])[0]); return i < 0 ? 999 : i; };
      const lag = t => Math.min(...nivaerFor(o, t, ak).map(x => x.niva));
      tasks.sort((x, y) => pos(x) - pos(y) || lag(x) - lag(y));
      const per = [0, 1, 2, 3].map(L => tasks.filter(t => nivaerFor(o, t, ak).some(x => x.niva === L)).length);
      out.push(`<section class="panel gr-kap"><div class="gr-rubrik"><h2>${esc(k.namn)}</h2><span class="gr-dim">${esc(o.namn)}</span>
        <span class="gr-sum">${tasks.length} uppgifter · nivå 0: ${per[0]} · nivå 1: ${per[1]} · nivå 2: ${per[2]}${per[3] ? ` · utmaning: ${per[3]}` : ""}</span></div>`);
      if (!tasks.length) out.push(`<p class="gr-dim">Inga uppgifter${ak === "alla" ? "" : " för åk " + ak}.</p>`);
      else out.push(`<div class="tablewrap"><table class="rules gr-tab"><thead><tr><th>Uppgift</th><th>Typ</th><th>Avsnitt</th><th>Nivå</th><th>Var.</th><th></th></tr></thead>
        <tbody>${tasks.map(t => rad(o, t, ak)).join("")}</tbody></table></div>`);
      if (dolda.length) out.push(`<p class="gr-dim">Dolda eller okänd typ: ${dolda.map(t => `${esc(t.id)}${TYPER[t.typ] ? "" : ` (okänd typ "${esc(t.typ)}")`}`).join(", ")}</p>`);
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
  const opt = ['<option value="">Alla kapitel</option>'];
  Object.values(Portal.omraden).forEach(o => { opt.push(`<option value="${o.id}">${esc(o.namn)} – alla</option>`); o.kapitel.forEach(k => opt.push(`<option value="${o.id}/${k.id}">   ${esc(k.namn)}</option>`)); });
  $("filter").innerHTML = opt.join("");
  try { $("filter").value = localStorage.getItem("granskaFilter") || ""; } catch (e) { }
  const pk = new URLSearchParams(location.search).get("kapitel"); if (pk) $("filter").value = pk;
  $("filter").addEventListener("change", () => { try { localStorage.setItem("granskaFilter", $("filter").value); } catch (e) { } visa(); });
  $("akval").innerHTML = ["alla", ...ARSKURSER].map(v => `<button type="button" role="radio" data-ak="${v}" aria-checked="${v === "alla"}">${v === "alla" ? "Alla" : "Åk " + v}</button>`).join("");
  $("fel").innerHTML = Portal._fel.map(f => `<p class="err">${esc(f)}</p>`).join("");
  visa();
}
