/* =====================================================================
   EN UPPGIFT – visar en enda uppgift på en egen sida, t.ex. på tavlan.
   Adress: uppgift.html?id=kedja-kol14&niva=2
   Rörs inte för att lägga till innehåll.
   ===================================================================== */
const AK = () => "alla";
const $ = id => document.getElementById(id);
let qCounter = 0, UPP = null;

function hittaUppgift(id) {
  for (const o of Object.values(Portal.omraden)) { const t = o.uppgifter.find(x => x.id === id); if (t) return { o, t }; }
  return null;
}
function visaUppgift(vi) {
  const { o, t, L } = UPP, T = TYPER[t.typ];
  if (vi === undefined) vi = rnd(t.varianter.length);
  const q = { uid: "up" + (++qCounter), task: t, v: t.varianter[vi], niva: L, omrade: t.kapitel, rull: (t.rullista || []).includes(L) };
  T.setup && T.setup(q); UPP.vi = vi; UPP.q = q;
  const k = kapitelAv(o, t.kapitel), nivaer = [...new Set(nivaerFor(o, t, "alla").map(x => x.niva).concat(grundNivaer(t)))].sort();
  document.title = t.titel;
  $("up").innerHTML = `<header class="up-head"><h1>${esc(t.titel)}</h1>
      <div class="up-niva">${nivaer.length > 1 ? `<span class="up-meta">Nivå</span>${nivaer.map(n => `<button type="button" class="ghostbtn" data-niva="${n}" aria-pressed="${n === L}">${n === 3 ? "U" : n}</button>`).join("")}` : ""}</div></header>
    <p class="up-meta">${esc(o.namn)} › ${esc(k ? k.namn : t.kapitel)}${t.varianter.length > 1 ? ` · variant ${vi + 1} av ${t.varianter.length}` : ""}</p>
    <section class="panel"><p class="instr">${typeof T.instr === "function" ? T.instr(q) : (T.instr || "")}</p>
      <div class="qbody" id="upQ">${T.html(q)}</div><div class="fb" id="upFb" hidden></div>
      <div class="up-knappar">${t.varianter.length > 1 ? '<button type="button" class="sec" id="upNy">Nästa variant</button>' : '<button type="button" class="sec" id="upNy">Börja om</button>'}<button type="button" class="pri" id="upRatta">Rätta</button></div></section>`;
  T.mount && T.mount($("upQ"), q);
}
document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b || !UPP) return;
  if (b.dataset.niva) { UPP.L = +b.dataset.niva; history.replaceState(null, "", `?id=${UPP.t.id}&niva=${UPP.L}`); visaUppgift(UPP.vi); }
  else if (b.id === "upNy") visaUppgift(UPP.t.varianter.length > 1 ? (UPP.vi + 1) % UPP.t.varianter.length : 0);
  else if (b.id === "upRatta") {
    const q = UPP.q, r = TYPER[q.task.typ].grade($("upQ"), q), fb = $("upFb");
    fb.hidden = false; fb.className = "fb " + (r.ok ? "ok" : (r.right || r.part) ? "part" : "no");
    fb.innerHTML = `<p class="verdict">${r.verdict ? r.verdict : r.ok ? "Rätt!" : r.right ? `Delvis rätt – ${r.right} av ${r.total}.` : "Inte rätt."}</p><div class="facit"><p class="fl">Rätt svar</p>${r.facit}</div>`;
    b.hidden = true;
  }
});
async function startaUppgift() {
  laggTillSvgDefs();
  await laddaAllt();
  const p = new URLSearchParams(location.search), hit = hittaUppgift(p.get("id") || "");
  if (!hit) { $("up").innerHTML = `<section class="panel"><p>Uppgiften "${esc(p.get("id") || "")}" finns inte.</p></section>`; return; }
  const nivaer = grundNivaer(hit.t);
  UPP = { ...hit, L: p.has("niva") ? +p.get("niva") : (nivaer[0] || 0) };
  visaUppgift(p.has("variant") ? Math.max(0, +p.get("variant") - 1) % hit.t.varianter.length : undefined);
}
