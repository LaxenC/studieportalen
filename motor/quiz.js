/* =====================================================================
   QUIZ – ett quiz som läraren sätter ihop av utvalda uppgifter.
   Adress: #/quiz/<id>   (filen quiz/<id>.js)
   Alla elever får samma uppgifter, i samma ordning och med samma
   varianter. Rättningen visas först när hela quizet är klart.
   Rörs inte för att lägga till ett quiz – se HOWTO.md.
   ===================================================================== */
Portal.quizer = {};
Portal.quiz = function (q) { this.quizer[q.id] = q; };

// "ce-fall-flerval#2" eller { id, variant, niva } -> { id, variant (1-baserad), niva }
function quizPost(p) {
  if (typeof p === "string") { const [id, v] = p.split("#"); return { id: id.trim(), variant: v ? +v : 1 }; }
  return { variant: 1, ...p };
}

// Bygger frågorna. Returnerar { list, fel: [...] }
function quizFragor(o, quiz) {
  const ak = AK(), list = [], fel = [];
  quiz.uppgifter.map(quizPost).forEach(p => {
    const t = o.uppgifter.find(x => x.id === p.id);
    if (!t) { fel.push(`uppgiften "${p.id}" finns inte i ${o.namn}`); return; }
    if (!TYPER[t.typ]) { fel.push(`uppgiften "${p.id}" har okänd typ`); return; }
    const vi = p.variant - 1;
    if (!t.varianter[vi]) { fel.push(`uppgiften "${p.id}" har ingen variant ${p.variant}`); return; }
    const nv = nivaerFor(o, t, ak);
    const val = (p.niva != null && nv.find(x => x.orig === p.niva || x.niva === p.niva)) || nv[0] || { niva: 1, orig: 1 };
    const q = { uid: "q" + (++qCounter), task: t, v: t.varianter[vi], niva: val.niva, omrade: t.kapitel, rull: (t.rullista || []).includes(val.orig) };
    TYPER[t.typ].setup && TYPER[t.typ].setup(q);
    list.push(q);
  });
  return { list, fel };
}

async function visaQuiz(id) {
  AKTUELLT.nyckel = "";
  if (!Portal.quizer[id]) await laddaSkript(`quiz/${encodeURIComponent(id)}.js?v=` + Date.now().toString(36).slice(0, -3));
  const quiz = Portal.quizer[id];
  if (!quiz) { topp([["Quiz"]]); vy().innerHTML = tom("Det här quizet finns inte."); return; }
  const o = Portal.omraden[quiz.omrade];
  if (!o) { topp([["Quiz"]]); vy().innerHTML = tom(`Området "${esc(quiz.omrade)}" finns inte.`); return; }
  if (!o.laddat) { vy().innerHTML = '<p class="laddar">Laddar …</p>'; await laddaInnehall(o); }
  topp([["Quiz"], [quiz.titel]]); document.title = `${quiz.titel} – ${Portal.inst.titel}`;
  vy().innerHTML = `<div id="ovaYta"></div>`;
  const el = document.getElementById("ovaYta");
  el.innerHTML = ovaHtml();
  OVA.o = o; OVA.fran = null; OV.lar = null; OV.aktiv = false;
  OV.quiz = quiz;
  quizIntro();
  scrollTo(0, 0);
}

function quizIntro() {
  const quiz = OV.quiz, { list, fel } = quizFragor(OVA.o, quiz);
  $("startView").innerHTML = `<header class="hero"><p class="eyebrow">Quiz</p><h1>${esc(quiz.titel)}</h1>${quiz.text ? `<p>${esc(quiz.text)}</p>` : ""}</header>
    ${fel.length ? `<section class="panel"><ul>${fel.map(f => `<li class="plan-fel">⚠ ${esc(f)}</li>`).join("")}</ul></section>` : ""}
    <section class="panel quiz-intro">
      <p><b>${list.length} uppgifter.</b> Du ser vad som blev rätt först när du har gjort alla uppgifter.</p>
      <div class="btns"><button type="button" class="start" id="quizStart" ${list.length ? "" : "disabled"}>Starta quizet <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>
    </section>`;
  $("startView").hidden = false; $("quizView").hidden = true; $("resultView").hidden = true;
}

function startLararQuiz() {
  const { list } = quizFragor(OVA.o, OV.quiz);
  if (!list.length) return;
  Object.assign(OV, { mix: null, loop: false, omr: [], forklara: false, list, idx: 0, used: new Map(), results: [], each: false, slut: false, avsnitt: null, aktiv: true, lar: null });
  $("startView").hidden = true; $("resultView").hidden = true; $("quizView").hidden = false;
  visaFraga();
}

// Länk till avsnittet en uppgift hör till (visas vid fel svar i resultatet)
function quizLasLank(q) {
  const o = OVA.o, av = (q.task.avsnitt || [])[0];
  return `<p class="quiz-las"><a class="ghostbtn" href="${lank(o.amne, o.id, "las", q.task.kapitel)}${av ? "/" + encodeURIComponent(av) : ""}">📖 Läs om det här</a></p>`;
}

document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b || !OV.quiz) return;
  if (b.id === "quizStart") { e.stopImmediatePropagation(); startLararQuiz(); }
}, true);
