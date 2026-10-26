/* =====================================================================
   ÖVA – val av kapitel och nivå, själva övningen och resultatet.
   Rörs inte för att lägga till innehåll.
   ===================================================================== */
const COUNTS = [5, 10, 15, 20, "loop"];
const $ = id => document.getElementById(id);
const OVA = { o: null, kapitel: "mix", avsnitt: null, level: 2, count: 10, feedback: "each" };
const OV = {};
let qCounter = 0;

function ovaHtml() {
  return `
<div id="startView" class="ova-start">
  <div class="ovarad1">
    <section class="panel">
      <h2>1. Välj kapitel</h2>
      <div id="avFilter"></div>
      <div class="areas kapgrid" role="radiogroup" aria-label="Kapitel" id="areas"></div>
    </section>
  </div>
  <div class="row2">
    <section class="panel">
      <h2>2. Välj nivå</h2>
      <div class="levels" id="levels" role="radiogroup" aria-label="Svårighetsgrad"></div>
      <p class="note" id="nivaNote"></p>
    </section>
    <section class="panel">
      <h2>3. Inställningar</h2>
      <p class="lbl">Antal uppgifter</p>
      <div class="counts" role="radiogroup" aria-label="Antal uppgifter" id="counts"></div>
      <p class="lbl">Rättning</p>
      <div class="opts" role="radiogroup" aria-label="Rättning">
        <button type="button" class="opt" role="radio" data-fb="each" aria-checked="true"><span class="radio"></span><span><strong>Efter varje uppgift</strong><span class="d">Få rättning och förklaring direkt.</span></span></button>
        <button type="button" class="opt" role="radio" data-fb="end" aria-checked="false"><span class="radio"></span><span><strong>I slutet</strong><span class="d">Se rättning när alla uppgifter är klara.</span></span></button>
      </div>
      <p class="note" id="note"></p>
    </section>
  </div>
  <div class="go">
    <p class="err" id="err" hidden></p>
    <div class="btns">
      <button type="button" class="quick lar" id="lar" hidden>🎯 Öva tills du kan</button>
      <button type="button" class="quick" id="quick">Bara kör</button>
      <button type="button" class="start" id="start">Starta uppgifter <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    </div>
    <p class="note">Bara kör = valt kapitel (eller blandat), två stjärnor, löpande, rättning efter varje uppgift.</p>
    <p class="note" id="larNote" hidden>🎯 Öva tills du kan = frågorna kommer tillbaka i nya former tills du kan allt i <span id="larVad"></span>. Du behöver inte ha läst först.</p>
  </div>
</div>

<div id="quizView" hidden>
  <div class="qtop">
    <button type="button" class="ghostbtn" id="qQuit">← Avsluta</button>
    <span class="qprog" id="qProg"></span>
    <button type="button" class="qinfo" id="qInfo"><span aria-hidden="true">i</span>Plugga</button>
  </div>
  <div class="bar"><span id="qBar"></span></div>
  <section class="panel qcard">
    <div class="qmeta"><span class="chip" id="qArea"></span><span class="chip lvchip" id="qLevel"></span></div>
    <h2 id="qTitle"></h2>
    <div class="nytt" id="qNytt" hidden></div>
    <p class="instr" id="qInstr"></p>
    <div class="qbody" id="qBody"></div>
    <div class="fb" id="qFb" hidden aria-live="polite"></div>
    <div class="qactions"><button type="button" class="start" id="qNext">Rätta</button></div>
  </section>
</div>

<div id="resultView" hidden>
  <section class="panel result">
    <p class="eyebrow">Resultat</p>
    <p class="score" id="rScore"></p>
    <p id="rText"></p>
    <div class="btns"><button type="button" class="quick" id="rHome">Ändra val</button><button type="button" class="start" id="rAgain">Öva igen</button></div>
  </section>
  <div class="rlist" id="rList"></div>
</div>`;
}

const LEVELCLS = { 1: "c-green", 2: "c-blue", 3: "c-yellow", 4: "c-orange", 5: "c-purple" };
const kapMedUppg = o => synligaKapitel(o, AK()).filter(k => aktivaUppgifter(o, AK(), k.id).length);

function renderOmraden() {
  const o = OVA.o, ak = AK(), el = $("areas");
  const kort = synligaKapitel(o, ak).map(k => {
    const n = aktivaUppgifter(o, ak, k.id).length;
    const art = k.bild ? (/^\s*\[\[/.test(k.bild) ? ritning(k.bild.trim().slice(2, -2)) : k.bild) : `<div class="art">${delBild("karna", 90)}</div>`;
    return `<div class="cell"><button type="button" class="card c-${k.farg || "blue"}" role="radio" data-area="${k.id}" aria-checked="false">
      ${art}<h3>${esc(k.namn)}</h3><p>${esc(k.text || "")}</p>${n ? "" : '<span class="soon">Uppgifter kommer snart</span>'}<span class="radio"></span></button>
      ${o.texter[k.id] ? `<button type="button" class="info" data-info="${k.id}" aria-label="Plugga: ${esc(k.namn)}" title="Plugga innan du börjar">i</button>` : ""}</div>`;
  });
  kort.push(`<div class="cell"><button type="button" class="card c-purple mix" role="radio" data-area="mix" aria-checked="false">
    <div class="art"><svg viewBox="0 0 90 90" aria-hidden="true"><circle cx="45" cy="45" r="42" fill="var(--purple-bd)" opacity=".55"/>
      <g fill="none" stroke="var(--purple)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 32h10c14 0 18 26 32 26h6"/><path d="M22 58h10c5 0 8-3 11-7"/><path d="M52 39c3-4 6-7 12-7h6"/>
      <path d="M63 25l7 7-7 7"/><path d="M63 51l7 7-7 7"/></g></svg></div>
    <h3>Blandade uppgifter</h3><p>Uppgifter från alla kapitel.</p><span class="radio"></span></button></div>`);
  el.innerHTML = kort.join("");
}

function renderOva() {
  const o = OVA.o, ak = AK();
  document.querySelectorAll("[data-area]").forEach(b => b.setAttribute("aria-checked", b.dataset.area === OVA.kapitel));
  const av = OVA.avsnitt && OVA.kapitel !== "mix" && avsnittAv(o, OVA.kapitel, OVA.avsnitt);
  $("avFilter").innerHTML = av ? `<p class="avfilter">Bara avsnittet <b>${esc(av.rubrik)}</b> <button type="button" class="ghostbtn" id="avBort">Visa hela kapitlet</button></p>` : "";
  $("levels").innerHTML = [1, 2, 3, 4].map(n => `<button type="button" class="card level ${LEVELCLS[n]}" role="radio" data-level="${n}" aria-checked="${OVA.level === n}" aria-label="${n} ${n === 1 ? "stjärna" : "stjärnor"}">
    <span class="stars">${[1, 2, 3, 4].map(i => star(i <= n)).join("")}</span><span class="radio"></span></button>`).join("")
    + `<button type="button" class="card level utmaning c-purple" role="radio" data-level="5" aria-checked="${OVA.level === 5}" aria-label="Utmaning – utanför kunskapskraven">
    <span class="utm-ic" aria-hidden="true">🚀</span><span class="utm-t">Utmaning</span><span class="radio"></span></button>`
    + `<button type="button" class="card level utmaning c-green" role="radio" data-level="6" aria-checked="${OVA.level === 6}" aria-label="Förklara med begrepp">
    <span class="utm-ic" aria-hidden="true">💬</span><span class="utm-t fk-t">Förklara</span><span class="radio"></span></button>`;
  $("nivaNote").textContent = OVA.level === 6 ? "Förklara med begrepp: skriv egna förklaringar. Gör detta när du känner dig trygg med faktafrågorna." : OVA.level === 5 ? "Utmaning: uppgifter utanför kunskapskraven – för dig som vill lite mer." : ak === "alla" ? "" : `Nivåerna är anpassade för åk ${ak}.`;
  $("counts").innerHTML = COUNTS.map(c => `<button type="button" role="radio" data-count="${c}" aria-checked="${OVA.count === c}" ${c === "loop" ? 'class="inf" title="Uppgifterna fortsätter tills du väljer att avsluta"' : ""}>${c === "loop" ? "Löpande" : c}</button>`).join("");
  const loop = OVA.count === "loop"; if (loop) OVA.feedback = "each";
  document.querySelectorAll("[data-fb]").forEach(b => { b.setAttribute("aria-checked", b.dataset.fb === OVA.feedback); b.setAttribute("aria-disabled", loop && b.dataset.fb === "end"); });
  $("note").textContent = loop ? "Löpande: nya uppgifter kommer tills du avslutar. Rättning sker efter varje uppgift." : "";
  const finns = OVA.kapitel === "mix" ? kapMedUppg(o).some(k => poolFor(k.id).length) : poolFor(OVA.kapitel).length > 0;
  $("start").disabled = !finns; $("quick").disabled = !finns; $("err").hidden = finns;
  const lp = OVA.kapitel !== "mix" ? larPunkter().length : 0;
  $("lar").hidden = !lp; $("larNote").hidden = !lp;
  if (lp) $("larVad").textContent = OVA.avsnitt ? "avsnittet" : "kapitlet";
  $("err").textContent = OVA.level === 6 ? "Det finns inga förklaringsuppgifter här än." : "Det finns inga uppgifter här för din årskurs än.";
}

/* ---------- urval ---------- */
// Förklara-uppgifter är en egen del (nivåkortet "Förklara") och blandas inte med de vanliga
const arFk = t => t.typ === "forklara";
const poolFor = kap => aktivaUppgifter(OVA.o, AK(), kap, OVA.avsnitt).filter(t => arFk(t) === (OVA.level === 6));

function nivaPlan(N, mix) {
  const ls = Object.keys(mix).map(Number), raw = ls.map(l => mix[l] * N);
  const c = raw.map(Math.floor); let rem = N - c.reduce((a, b) => a + b, 0);
  ls.map((l, i) => [raw[i] - c[i], i]).sort((a, b) => b[0] - a[0]).forEach(([, i]) => { if (rem > 0) { c[i]++; rem--; } });
  ls.forEach((l, i) => { if (c[i] === 0 && N > ls.length) { const big = c.indexOf(Math.max(...c)); c[big]--; c[i]++; } });
  return shuffle(ls.flatMap((l, i) => Array(c[i]).fill(l)));
}
function slumpNiva(mix) { let r = Math.random(); for (const [l, w] of Object.entries(mix)) { if ((r -= w) < 0) return +l; } return +Object.keys(mix).pop(); }

// Varje uppgift kommer högst maxPerOvning gånger (standard 1), aldrig samma variant två gånger.
function skapaFraga(kap, niva, used, senast) {
  const o = OVA.o, ak = AK(), pool = aktivaUppgifter(o, ak, kap, OV.avsnitt).filter(t => arFk(t) === !!OV.forklara); if (!pool.length) return null;
  const k = kapitelAv(o, kap) || {};
  const nyckel = t => t.grupp || t.id, anv = t => used.get(nyckel(t)) || [];
  const max = t => t.maxPerOvning || k.maxPerOvning || 1;
  const fria = t => anv(t).length >= max(t) ? [] : t.varianter.map((v, i) => i).filter(i => !anv(t).includes(t.id + "#" + i));
  for (const d of OV.forklara ? [0] : [0, -1, 1, -2, 2]) {
    const L = niva + d;
    if (!OV.forklara && OV.mix && !(OV.mix[L] > 0)) continue;   // håll dig till nivåerna som stjärnorna ger
    let kand = pool.filter(t => (OV.forklara || nivaerFor(o, t, ak).some(x => x.niva === L)) && fria(t).length);
    if (!kand.length) continue;
    if (kand.length > 1 && senast && kand.some(t => nyckel(t) !== senast)) kand = kand.filter(t => nyckel(t) !== senast);
    const task = kand[rnd(kand.length)], lediga = fria(task), vi = lediga[rnd(lediga.length)];
    used.set(nyckel(task), [...anv(task), task.id + "#" + vi]);
    const nv = OV.forklara ? nivaerFor(o, task, ak).slice(0, 1) : nivaerFor(o, task, ak).filter(x => x.niva === L);
    const orig = nv.map(x => x.orig), NL = OV.forklara ? (nv[0] ? nv[0].niva : 1) : L;
    const q = { uid: "q" + (++qCounter), task, v: task.varianter[vi], niva: NL, omrade: kap, rull: orig.some(n => (task.rullista || []).includes(n)) };
    TYPER[task.typ].setup && TYPER[task.typ].setup(q);
    return q;
  }
  return null;
}
function skapaFragaNagonstans(forst, omr, niva, used, senast) {
  for (const o of [forst, ...shuffle(omr.filter(x => x !== forst))]) { const q = skapaFraga(o, niva, used, senast); if (q) return q; }
  return null;
}

/* ---------- övningen ---------- */
function startQuiz() {
  const forklara = OVA.level === 6, mix = forklara ? { 1: 1 } : mixFor(OVA.level, AK()), loop = OVA.count === "loop";
  const omr = OVA.kapitel === "mix" ? kapMedUppg(OVA.o).map(k => k.id).filter(id => poolFor(id).length) : [OVA.kapitel];
  Object.assign(OV, { mix, loop, omr, forklara, list: [], idx: 0, used: new Map(), results: [], each: forklara || OVA.feedback === "each", slut: false,
    avsnitt: OVA.kapitel === "mix" ? null : OVA.avsnitt, aktiv: true });
  if (!loop) {
    const N = OVA.count, plan = nivaPlan(N, mix);
    const areas = shuffle(omr.slice(0, N)); while (areas.length < N) areas.push(omr[rnd(omr.length)]);
    const ordning = shuffle(areas); let senast = null;
    for (let i = 0; i < N; i++) { const q = skapaFragaNagonstans(ordning[i], omr, plan[i], OV.used, senast); if (q) { OV.list.push(q); senast = q.task.grupp || q.task.id; } }
    OV.slut = OV.list.length < N;
  }
  $("startView").hidden = true; $("resultView").hidden = true; $("quizView").hidden = false;
  visaFraga();
}
function nuvarande() {
  if (OV.lar && !OV.list[OV.idx]) { const q = larNasta(); if (!q) return null; OV.list.push(q); return q; }
  if (OV.loop && !OV.list[OV.idx]) {
    const prev = OV.list[OV.idx - 1];
    const q = skapaFragaNagonstans(OV.omr[rnd(OV.omr.length)], OV.omr, slumpNiva(OV.mix), OV.used, prev && (prev.task.grupp || prev.task.id));
    if (!q) { OV.slut = true; return null; }
    OV.list.push(q);
  }
  return OV.list[OV.idx];
}
function visaFraga() {
  const q = nuvarande(); if (!q) return visaResultat();
  const T = TYPER[q.task.typ], ratt = OV.results.filter(r => r && r.ok).length;
  $("qProg").textContent = OV.lar ? `🎯 Du kan ${larAntalKlara()} av ${OV.lar.pk.size} saker` : OV.loop ? `Uppgift ${OV.idx + 1} · ${ratt} rätt hittills` : `Uppgift ${OV.idx + 1} av ${OV.list.length}`;
  $("qBar").style.width = OV.lar ? `${100 * larAntalKlara() / OV.lar.pk.size}%` : OV.loop ? "100%" : `${(OV.idx / OV.list.length) * 100}%`;
  $("qBar").parentElement.hidden = OV.loop && !OV.lar;
  $("qArea").textContent = (kapitelAv(OVA.o, q.omrade) || {}).namn || q.omrade;
  $("qLevel").textContent = arFk(q.task) ? "Förklara" : q.niva >= 3 ? "Utmaning" : `Nivå ${q.niva}`; $("qLevel").dataset.n = arFk(q.task) ? "fk" : q.niva;
  $("qTitle").textContent = q.task.titel;
  $("qInstr").innerHTML = typeof T.instr === "function" ? T.instr(q) : "";
  const nya = OV.lar && q.larItem ? (q.nya || (q.nya = q.larItem.punkter.map(id => OV.lar.pk.get(id)).filter(p => p && !p.sett))) : [];
  $("qNytt").hidden = !nya.length;
  $("qNytt").innerHTML = nya.length ? `<p class="fl">💡 Nytt – läs först</p><ul>${nya.map(p => `<li>${p.html}</li>`).join("")}</ul>` : "";
  const body = $("qBody"); body.innerHTML = T.html(q);
  const fresh = body.cloneNode(true); body.replaceWith(fresh);
  T.mount && T.mount(fresh, q);
  $("qInfo").hidden = !OVA.o.texter[q.omrade];
  $("qFb").hidden = true; $("qFb").className = "fb";
  q.graded = false;
  $("qNext").textContent = OV.each ? "Rätta" : (!OV.loop && OV.idx === OV.list.length - 1 ? "Lämna in" : "Nästa uppgift");
  const first = fresh.querySelector("input,select"); if (first && matchMedia("(pointer:fine)").matches) first.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}
function rattaNu() {
  const q = OV.list[OV.idx], body = $("qBody");
  const r = TYPER[q.task.typ].grade(body, q);
  body.querySelectorAll("input,select").forEach(el => el.disabled = true);
  q.graded = true; OV.results[OV.idx] = { q, ...r };
  if (OV.lar) larEfterSvar(q, r);
  return r;
}
function nasta() {
  const q = OV.list[OV.idx];
  if (OV.each && !q.graded) {
    const r = rattaNu();
    const fb = $("qFb"); fb.hidden = false; fb.className = "fb " + (r.ok ? "ok" : (r.right || r.part) ? "part" : "no");
    fb.innerHTML = `<p class="verdict">${r.verdict ? r.verdict : r.ok ? "Rätt!" : r.right ? `Delvis rätt – ${r.right} av ${r.total}.` : "Inte rätt den här gången."}</p><div class="facit"><p class="fl">Rätt svar</p>${r.facit}</div>${komIhag(q, r)}`;
    $("qNext").textContent = OV.lar ? (larKlar() ? "Se resultat" : "Nästa uppgift") : !OV.loop && OV.idx === OV.list.length - 1 ? "Se resultat" : "Nästa uppgift";
    fb.scrollIntoView({ block: "nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    return;
  }
  if (!q.graded) rattaNu();
  if (!OV.loop && OV.idx >= OV.list.length - 1) return visaResultat();
  OV.idx++; visaFraga();
}
function visaResultat() {
  OV.aktiv = false;
  if (OV.lar) return larResultat();
  const res = OV.results.filter(Boolean), ok = res.filter(r => r.ok).length;
  $("quizView").hidden = true; $("resultView").hidden = false; window.scrollTo(0, 0);
  $("rScore").textContent = res.length ? `${ok} av ${res.length}` : "0";
  $("rText").textContent = !res.length ? "Du avslutade innan du hann rätta någon uppgift." : ok === res.length ? "Alla rätt – snyggt jobbat!" : ok / res.length >= .7 ? "Bra jobbat! Titta på det du missade nedan." : "Titta på rätt svar nedan och öva gärna igen.";
  if (OV.slut && res.length) $("rText").textContent += " Du har gjort alla uppgifter som finns för dina val.";
  $("rList").innerHTML = res.map((r, i) => `<details class="ritem ${r.ok ? "ok" : "no"}" ${r.ok ? "" : "open"}><summary><span class="mark">${r.ok ? "✓" : "✗"}</span><span>${i + 1}. ${esc(r.q.task.titel)}</span><span class="lv">${r.q.niva >= 3 ? "Utmaning" : "Nivå " + r.q.niva}</span></summary><div class="facit">${r.facit}</div></details>`).join("");
  sparaResultat(res.length, ok);
}
function sparaResultat(n, ok) {
  if (!n) return;
  try {
    const nyckel = `resultat:${OVA.o.id}:${OVA.kapitel}${OVA.avsnitt ? "#" + OVA.avsnitt : ""}:${OVA.level}`;
    const forra = JSON.parse(localStorage.getItem(nyckel) || "null");
    if (!forra || ok / n > forra.ok / forra.n) localStorage.setItem(nyckel, JSON.stringify({ ok, n }));
  } catch (e) { }
}
function tillStart() { OV.aktiv = false; $("quizView").hidden = true; $("resultView").hidden = true; $("startView").hidden = false; renderOva(); window.scrollTo(0, 0); }

/* ---------- Plugga ---------- */
function pluggaHtml(o, kapId, avIds) {
  const t = o.texter[kapId]; if (!t) return "<p>Det finns ingen text till det här kapitlet än.</p>";
  const ak = AK();
  let av = t.avsnitt.filter(a => passar(a.ak, ak));
  // Har uppgiftens avsnitt ingen egen Viktigt-ruta visas kapitlets rutor
  if (avIds && avIds.length) { const v = av.filter(a => avIds.includes(a.id)); if (v.length && v.some(a => a.viktigt.length || (a.forklara || []).length)) av = v; }
  const intro = t.introViktigt && t.introViktigt.length && !(avIds && avIds.length && av.some(a => avIds.includes(a.id)))
    ? `<section class="plugga-av">${t.introViktigt.join("")}${(t.introForklara || []).join("")}<details class="lasmer"><summary>Läs texten</summary><div class="lastext">${t.ingress ? `<p>${t.ingress}</p>` : ""}${t.intro}</div></details></section>` : "";
  return intro + av.filter(a => !(avIds && avIds.length) || avIds.includes(a.id) || !intro).map(a => `<section class="plugga-av"><h3 class="sub-h">${esc(a.rubrik)}</h3>
    ${a.viktigt.join("") || ""}${(a.forklara || []).join("")}
    <details class="lasmer"><summary>Läs hela avsnittet</summary><div class="lastext">${a.html}</div></details></section>`).join("");
}
function oppnaPlugga(kapId, avIds, iOvning) {
  const o = AKTUELLT.o || OVA.o, k = kapitelAv(o, kapId), t = o.texter[kapId];
  $("dlgTitle").textContent = k ? k.namn : "";
  $("dlgLead").textContent = t ? (t.ingress || "").replace(/<[^>]+>/g, "") : "";
  $("dlgBody").innerHTML = pluggaHtml(o, kapId, avIds);
  MD.filtreraAk($("dlgBody"), AK());
  $("dlgPractice").hidden = !!iOvning; $("dlgRead").hidden = !!iOvning; $("dlgPractice").dataset.kap = kapId;
  $("dlgRead").href = `#/${o.amne}/${o.id}/las/${kapId}${avIds && avIds.length === 1 ? "/" + avIds[0] : ""}`;
  $("infoDlg").showModal(); $("infoDlg").scrollTop = 0;
}

/* ---------- händelser ---------- */
function ovaKlick(e) {
  const b = e.target.closest("button"); if (!b || !$("startView")) return;
  if (b.dataset.info) { e.stopPropagation(); oppnaPlugga(b.dataset.info, null, false); return; }
  if (b.dataset.area) { if (b.dataset.area !== OVA.kapitel) OVA.avsnitt = null; OVA.kapitel = b.dataset.area; }
  else if (b.dataset.level) OVA.level = +b.dataset.level;
  else if (b.dataset.count) OVA.count = b.dataset.count === "loop" ? "loop" : +b.dataset.count;
  else if (b.dataset.fb) { if (b.getAttribute("aria-disabled") === "true") return; OVA.feedback = b.dataset.fb; }
  else if (b.id === "avBort") OVA.avsnitt = null;
  else if (b.id === "start") { OV.lar = null; startQuiz(); return; }
  else if (b.id === "quick") { OV.lar = null; OVA.level = 2; OVA.count = "loop"; OVA.feedback = "each"; renderOva(); startQuiz(); return; }
  else if (b.id === "qNext") { nasta(); return; }
  else if (b.id === "qQuit") { if (OV.loop || OV.results.filter(Boolean).length) visaResultat(); else tillStart(); return; }
  else if (b.id === "qInfo") { const q = OV.list[OV.idx]; oppnaPlugga(q.omrade, q.task.avsnitt, true); return; }
  else if (b.id === "rAgain") { OV.lar ? startLar() : startQuiz(); return; }
  else if (b.id === "lar") { startLar(); return; }
  else if (b.id === "rHome") { tillStart(); return; }
  else return;
  renderOva();
}
document.addEventListener("click", ovaKlick);
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && $("quizView") && !$("quizView").hidden && e.target.matches("input.blank")) { e.preventDefault(); nasta(); }
});

// Visar Öva-vyn. p = { kapitel, avsnitt, stjarnor, kor }
function visaOva(o, p, el) {
  OVA.o = o;
  if (p.kapitel && kapitelAv(o, p.kapitel)) { OVA.kapitel = p.kapitel; OVA.avsnitt = p.avsnitt || null; }
  else if (OVA.kapitel !== "mix" && !kapitelAv(o, OVA.kapitel)) { OVA.kapitel = "mix"; OVA.avsnitt = null; }
  if (p.stjarnor) OVA.level = Math.max(1, Math.min(6, +p.stjarnor));
  el.innerHTML = ovaHtml();
  renderOmraden(); renderOva();
  if (p.lar !== undefined && OVA.kapitel !== "mix" && larPunkter().length) { startLar(); return; }
  if (p.kor !== undefined) { OVA.count = "loop"; OVA.feedback = "each"; if (!p.stjarnor) OVA.level = 2; renderOva(); if (!$("start").disabled) startQuiz(); }
}

/* ---------- Öva tills du kan (lär-läget) ----------
   Varje kunskapspunkt (rad i Viktigt-rutan med {#id}) ska besvaras rätt två gånger,
   i två olika uppgifter/varianter. Fel svar kommer tillbaka efter några frågor. */
function larPunkter() {
  const o = OVA.o, ak = AK(), pk = punkterFor(o, OVA.kapitel, OVA.avsnitt, ak); if (!pk.length) return [];
  const items = larItems(pk.map(p => p.id));
  return pk.filter(p => items.some(it => it.punkter.includes(p.id)));
}
function larItems(ids) {
  const o = OVA.o, ak = AK();
  return aktivaUppgifter(o, ak, OVA.kapitel).filter(t => !arFk(t)).flatMap(t => t.varianter.map((v, vi) => ({ t, vi, key: t.id + "#" + vi,
    punkter: uppgiftPunkter(t, vi).filter(id => ids.includes(id)) }))).filter(it => it.punkter.length);
}
function startLar() {
  const pk = larPunkter(); if (!pk.length) return;
  const items = larItems(pk.map(p => p.id));
  OV.lar = { pk: new Map(pk.map(p => [p.id, { ...p, ratt: new Set(), typer: new Set(), due: 0, sett: false, fel: 0,
    antal: items.filter(it => it.punkter.includes(p.id)).length }])), items, n: 0 };
  Object.assign(OV, { mix: { 1: 1 }, loop: true, omr: [OVA.kapitel], forklara: false, list: [], idx: 0, used: new Map(), results: [], each: true, slut: false, avsnitt: OVA.avsnitt, aktiv: true });
  $("startView").hidden = true; $("resultView").hidden = true; $("quizView").hidden = false;
  visaFraga();
}
const larArKlar = p => p.ratt.size >= Math.min(2, p.antal);
const larAntalKlara = () => [...OV.lar.pk.values()].filter(larArKlar).length;
const larKlar = () => [...OV.lar.pk.values()].every(larArKlar);
function larNasta() {
  const L = OV.lar; if (larKlar()) return null;
  const kvar = [...L.pk.values()].filter(p => !larArKlar(p));
  // först punkter som eleven inte har mött (i textens ordning), sedan de som är på tur
  let p = kvar.find(x => !x.sett) || kvar.filter(x => x.due <= L.n).sort((a, b) => a.due - b.due)[0] || kvar.sort((a, b) => a.due - b.due)[0];
  const senast = OV.list.length ? OV.list[OV.list.length - 1].task.id : null;
  const nivaMin = t => Math.min(...nivaerFor(OVA.o, t, AK()).map(x => x.niva));
  let kand = L.items.filter(it => it.punkter.includes(p.id) && !p.ratt.has(it.key));
  if (!kand.length) kand = L.items.filter(it => it.punkter.includes(p.id));
  if (kand.length > 1 && kand.some(it => it.t.id !== senast)) kand = kand.filter(it => it.t.id !== senast);
  if (kand.some(it => !p.typer.has(it.t.typ))) kand = kand.filter(it => !p.typer.has(it.t.typ));
  if (!p.sett) { const m = Math.min(...kand.map(it => it.punkter.length)); kand = kand.filter(it => it.punkter.length === m); }   // första mötet: en sak i taget
  if (!p.ratt.size) { const m = Math.min(...kand.map(it => nivaMin(it.t))); kand = kand.filter(it => nivaMin(it.t) === m); }
  const it = kand[rnd(kand.length)], nv = nivaerFor(OVA.o, it.t, AK()).sort((a, b) => a.niva - b.niva)[0] || { niva: 1, orig: 1 };
  const q = { uid: "q" + (++qCounter), task: it.t, v: it.t.varianter[it.vi], niva: nv.niva, omrade: it.t.kapitel,
    rull: !p.ratt.size && (it.t.rullista || []).includes(nv.orig), larItem: it };
  TYPER[it.t.typ].setup && TYPER[it.t.typ].setup(q);
  return q;
}
function larEfterSvar(q, r) {
  const L = OV.lar; L.n++;
  (q.larItem ? q.larItem.punkter : []).forEach(id => { const p = L.pk.get(id); if (!p) return;
    p.sett = true;
    if (r.ok) { p.ratt.add(q.larItem.key); p.typer.add(q.task.typ); }
    else { p.fel++; p.due = L.n + 2; } });
}
function komIhag(q, r) {
  const ids = q.larItem ? q.larItem.punkter : uppgiftPunkter(q.task, q.task.varianter.indexOf(q.v));
  if (!ids.length || (r.ok && !OV.lar)) return "";
  const alla = punkterFor(OVA.o, q.task.kapitel, null, "alla"), pk = ids.map(id => alla.find(p => p.id === id)).filter(Boolean);
  return pk.length ? `<div class="komihag"><p class="fl">⭐ Kom ihåg</p><ul>${pk.map(p => `<li>${p.html}</li>`).join("")}</ul></div>` : "";
}
function larResultat() {
  const L = OV.lar, alla = [...L.pk.values()], klara = alla.filter(larArKlar);
  $("quizView").hidden = true; $("resultView").hidden = false; window.scrollTo(0, 0);
  $("rScore").textContent = `${klara.length} av ${alla.length}`;
  $("rText").textContent = klara.length === alla.length ? `Du kan allt i ${OVA.avsnitt ? "avsnittet" : "kapitlet"} – snyggt jobbat! 🎉` : "Det här kan du – och det här är kvar. Öva igen så kommer de som är kvar först.";
  $("rList").innerHTML = alla.map(p => `<details class="ritem ${larArKlar(p) ? "ok" : "no"}" ${larArKlar(p) ? "" : "open"}><summary><span class="mark">${larArKlar(p) ? "✓" : "✗"}</span><span>${p.html}</span><span class="lv">${esc(p.rubrik)}</span></summary></details>`).join("");
}
