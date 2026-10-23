/* =====================================================================
   GRANSKA – alla uppgifter, för läraren. Sidan granska.html länkas
   inte från portalen; man hittar den bara med adressen.
   Rörs inte för att lägga till innehåll.
   ===================================================================== */
let AKTIV_AK = "alla"; const AK = () => AKTIV_AK;
const $ = id => document.getElementById(id);
let qCounter = 0;
const PREV = [];

function nivaBeskrivning(o, t) {
  const k = kapitelAv(o, t.kapitel) || {}, delar = [`nivå ${t.nivaer.join(" och ")}`];
  ARSKURSER.forEach(ak => {
    if (!passar(uppgiftArskurs(o, t), ak)) return;
    const n = nivaerFor(o, t, ak).map(x => x.niva);
    if (n.join() !== t.nivaer.join()) delar.push(`åk ${ak}: ${n.join(" och ")}`);
  });
  const ak = uppgiftArskurs(o, t);
  return delar.join(" · ") + ` · åk ${MD.akText(ak)}` + (t.avsnitt ? ` · avsnitt: ${t.avsnitt.map(a => (avsnittAv(o, t.kapitel, a) || { rubrik: "⚠ " + a }).rubrik).join(", ")}` : "");
}

function kort(o, t, L) {
  const T = TYPER[t.typ];
  const q = { uid: "ov" + (++qCounter), task: t, v: t.varianter[0], niva: L, omrade: t.kapitel, rull: (t.rullista || []).includes(L), preview: true };
  T.setup && T.setup(q); PREV.push([q.uid, q]);
  return `<article class="ovcard" id="u-${t.id}"><div class="ovtop"><h4>${esc(t.titel)}</h4><span class="chip">${t.varianter.length} ${t.varianter.length === 1 ? "variant" : "varianter"}</span></div>
    <p class="ovmeta">${TYPNAMN[t.typ] || t.typ} · <code>${esc(t.id)}</code><br>${nivaBeskrivning(o, t)}${q.rull ? " · rullista" : ""}</p>
    <div class="ovprev" data-ov="${q.uid}" aria-hidden="true"><p class="instr">${T.instr ? (typeof T.instr === "function" ? T.instr(q) : T.instr) : ""}</p><div class="qbody">${T.html(q)}</div></div>
    <div class="gr-knappar"><button type="button" class="ghostbtn" data-prova="${o.id}|${t.id}|${L}">Prova</button></div>
    <details class="ovvar"><summary>Visa varianter och svar</summary><ol>${t.varianter.map(v => `<li>${variantText(t, v)}</li>`).join("")}</ol></details></article>`;
}

function visa() {
  const filt = $("filter").value, body = $("ovBody"), out = [];
  for (const o of Object.values(Portal.omraden)) {
    for (const k of o.kapitel) {
      if (filt && filt !== o.id + "/" + k.id && filt !== o.id) continue;
      const tasks = o.uppgifter.filter(t => t.kapitel === k.id && !t.dold && TYPER[t.typ]);
      const dolda = o.uppgifter.filter(t => t.kapitel === k.id && (t.dold || !TYPER[t.typ]));
      const unika = tasks.reduce((a, t) => a + t.varianter.length, 0);
      out.push(`<section class="ovarea"><h2>${esc(o.namn)} › ${esc(k.namn)} <span class="chip">${tasks.length} uppgifter · ${unika} varianter</span></h2>`);
      if (dolda.length) out.push(`<p class="ovnote">Dolda eller okänd typ: ${dolda.map(t => `<code>${esc(t.id)}</code>${TYPER[t.typ] ? "" : ` (okänd typ "${esc(t.typ)}")`}`).join(", ")}</p>`);
      if (!tasks.length) { out.push(`<p class="ovnote">Inga uppgifter inlagda än.</p></section>`); continue; }
      for (const L of [0, 1, 2]) {
        const lt = tasks.filter(t => t.nivaer.includes(L)); if (!lt.length) continue;
        out.push(`<h3 class="ovlevel"><span class="chip lvchip" data-n="${L}">Nivå ${L}</span>${lt.length} uppgifter</h3><div class="ovgrid">${lt.map(t => kort(o, t, L)).join("")}</div>`);
      }
      out.push(`</section>`);
    }
  }
  body.innerHTML = out.join("") || "<p>Inga uppgifter.</p>";
  PREV.splice(0).forEach(([uid, q]) => { const el = body.querySelector(`[data-ov="${uid}"] .qbody`); const T = TYPER[q.task.typ]; try { if (T.mount && el) { q.locked = true; T.mount(el, q); } } catch (e) { } el && el.querySelectorAll("input,select,button").forEach(x => { x.tabIndex = -1; }); });
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
  $("fel").innerHTML = Portal._fel.map(f => `<p class="err">${esc(f)}</p>`).join("");
  visa();
}
