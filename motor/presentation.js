/* =====================================================================
   PRESENTATION – visar ett kapitel som bildspel för undervisning.
   Bilderna byggs automatiskt från kapitlets text:
     # rubrik + ingress  -> titelbild
     ## avsnitt          -> en eller flera bilder (### ger ny bild)
     Begrepp-rutor       -> begreppsbild (förklaringen visas vid klick)
     Exempel, tabeller,
     Viktigt, Fördjupning -> egna bilder
     ---                 -> tvinga ny bild
     ::: bara-text       -> visas bara i Läs
     ::: bara-presentation -> visas bara i presentationen
   En flervalsuppgift per avsnitt blir "Fråga till klassen".
   Rörs inte för att lägga till innehåll.
   ===================================================================== */
const PRES = { bilder: [], i: 0, steg: 0 };

function byggBilder(o, kapId, ak) {
  const k = kapitelAv(o, kapId), t = o.texter[kapId], kaps = synligaKapitel(o, ak).filter(x => o.texter[x.id]);
  const nr = kaps.findIndex(x => x.id === kapId) + 1;
  const bilder = [];
  bilder.push({ typ: "titel", html: `<div class="pr-titel">${k.bild ? `<div class="pr-kortbild">${MD.inline(k.bild)}</div>` : ""}
    <div><p class="pr-eyebrow">${esc(o.namn)} · Kapitel ${nr}${ak !== "alla" ? ` · åk ${ak}` : ""}</p><h1>${esc(t.titel || k.namn)}</h1>${t.ingress ? `<p class="pr-ingress">${t.ingress}</p>` : ""}</div></div>` });

  const delar = [];
  if (t.intro) delar.push({ rubrik: t.titel || k.namn, html: t.intro, id: null });
  t.avsnitt.filter(x => passar(x.ak, ak)).forEach(x => delar.push({ rubrik: x.rubrik, html: x.html, id: x.id }));

  delar.forEach(d => {
    const tmp = document.createElement("div"); tmp.innerHTML = d.html;
    MD.filtreraAk(tmp, ak);
    tmp.querySelectorAll(".bara-text").forEach(x => x.remove());
    const block = platta(tmp);
    let akt = null, rub = d.rubrik, under = "", fd = "";
    const ny = (typ) => { akt = { typ: typ || "innehall", rubrik: rub, under, fd, delar: [], begrepp: [] }; bilder.push(akt); return akt; };
    const vikt = b => b.textContent.length;
    const textMangd = () => akt ? akt.delar.reduce((s, b) => s + (b.matches("figure,.figur,.rad") ? 0 : vikt(b)), 0) : 0;
    const harFigur = () => akt && akt.delar.some(b => b.matches("figure,.figur,.rad,.tablewrap"));
    ny();
    block.forEach(b => {
      if (b.matches("hr.ny-bild")) { if (akt.delar.length) ny(); return; }
      if (b.matches("h3.pr-fd-start")) { fd = b.textContent; under = ""; if (akt.delar.length || akt.begrepp.length) ny(); else { akt.fd = fd; akt.under = ""; } return; }
      if (b.matches("hr.pr-fd-slut")) { fd = ""; under = ""; if (akt.delar.length || akt.begrepp.length) ny(); else { akt.fd = ""; akt.under = ""; } return; }
      if (b.matches("h3,h4")) { under = b.textContent; if (akt.delar.length || akt.begrepp.length) ny(); else akt.under = under; return; }
      if (b.matches("aside.begrepp")) { akt.begrepp.push(b); return; }
      if (b.matches(".exempel,.viktigt,details.fordjup,.callout")) {
        const typ = b.matches(".viktigt") ? "viktigt" : b.matches(".exempel") ? "exempel" : b.matches("details") ? "fordjup" : "ruta";
        if (akt.delar.length || akt.begrepp.length) ny(typ); else akt.typ = typ;
        akt.delar.push(b); ny(); return;
      }
      if (b.matches(".tablewrap")) { if (akt.delar.length) ny(); akt.delar.push(b); ny(); return; }
      if (b.matches("figure,.figur,.rad")) {
        if (harFigur() || textMangd() > 420 || akt.delar.length > 2) ny();
        akt.delar.push(b); return;
      }
      if (harFigur() || textMangd() + vikt(b) > 520) ny();
      akt.delar.push(b);
    });
    // fråga till klassen
    if (d.id) {
      const u = aktivaUppgifter(o, ak, kapId, d.id).find(x => x.typ === "flerval");
      if (u) { const v = u.varianter[0]; bilder.push({ typ: "fraga", rubrik: d.rubrik, fraga: v.fraga, bild: v.bild || u.bild, alt: shuffle(v.alt) }); }
    }
  });

  // gör om till html; begrepp blir en egen bild efter bilden de stod på
  const ut = [];
  bilder.forEach(b => {
    if (b.typ === "titel") { ut.push(b); return; }
    if (b.typ === "fraga") {
      ut.push({ typ: "fraga", html: `<header class="pr-huvud"><p class="pr-eyebrow">${esc(b.rubrik)}</p><h2>Fråga till klassen</h2></header>
        <div class="pr-kropp pr-fraga"><p class="pr-q">${esc(b.fraga)}</p>${b.bild ? `<div class="pr-qbild">${MD.inline(b.bild)}</div>` : ""}
        <ol class="pr-alt">${b.alt.map((a, i) => `<li class="${a.s === "ratt" ? "ratt" : ""}"><span>${"ABCD"[i]}</span>${esc(a.t)}</li>`).join("")}</ol>
        <p class="pr-svar steg">${esc(b.alt.find(a => a.s === "ratt").t)} – ${esc(b.alt.find(a => a.s === "ratt").f || "")}</p></div>` });
      return;
    }
    if (b.delar.length) {
      const fig = b.delar.filter(x => x.matches("figure,.figur,.rad")), text = b.delar.filter(x => !fig.includes(x));
      const sida = fig.length === 1 && text.length && !b.delar.some(x => x.matches(".tablewrap,.exempel,.viktigt,details,.callout"));
      const rubrik = b.typ === "viktigt" ? "Viktigt att komma ihåg" : b.typ === "exempel" ? "Exempel" : b.typ === "fordjup" ? "Fördjupning" : (b.under || b.rubrik);
      const kropp = sida ? `<div class="pr-sida"><div class="pr-text">${text.map(x => x.outerHTML).join("")}</div><div class="pr-fig">${fig[0].outerHTML}</div></div>`
                         : b.delar.map(x => x.outerHTML).join("");
      let eyebrow = b.under && rubrik === b.under ? b.rubrik : (b.typ === "innehall" ? "" : b.under || b.rubrik);
      if (b.fd) eyebrow = b.fd;
      ut.push({ typ: b.typ, fd: !!b.fd, html: `<header class="pr-huvud"><p class="pr-eyebrow">${esc(eyebrow)}</p><h2>${esc(b.fd && rubrik === b.rubrik ? b.under || b.rubrik : rubrik)}</h2></header>
        <div class="pr-kropp pr-${b.typ}">${kropp}</div>` });
    }
    if (b.begrepp.length) {
      const termer = []; b.begrepp.forEach(a => a.querySelectorAll("dt").forEach(dt => termer.push([dt.innerHTML, dt.nextElementSibling ? dt.nextElementSibling.innerHTML : ""])));
      ut.push({ typ: "begrepp", html: `<header class="pr-huvud"><p class="pr-eyebrow">${esc(b.rubrik)}</p><h2>Begrepp</h2></header>
        <div class="pr-kropp"><dl class="pr-begrepp">${termer.map(([t, d]) => `<div><dt>${t}</dt><dd class="steg">${d}</dd></div>`).join("")}</dl></div>` });
    }
  });
  return ut;
}

// Platta ut omslutande block så att innehållet kan delas upp på bilder
function platta(rot) {
  const ut = [];
  [...rot.children].forEach(el => {
    if (el.matches(".aktag,.fdtag")) return;
    if (el.matches(".med-begrepp")) { platta(el.querySelector(".mb-text")).forEach(x => ut.push(x)); el.querySelectorAll(".mb-sida > aside.begrepp").forEach(x => ut.push(x)); return; }
    if (el.matches(".ak-block,.fd-ak,.bara-presentation,.mb-text")) { platta(el).forEach(x => ut.push(x)); return; }
    if (el.matches("details.fordjup")) {
      const h = document.createElement("h3"); h.className = "pr-fd-start"; h.textContent = el.querySelector("summary").textContent; ut.push(h);
      platta(el.querySelector(".fd-inne") || el).forEach(x => ut.push(x));
      const slut = document.createElement("hr"); slut.className = "pr-fd-slut"; ut.push(slut); return;
    }
    ut.push(el);
  });
  return ut;
}

/* ---------- visning ---------- */
function oppnaPresentation(o, kapId) {
  PRES.bilder = byggBilder(o, kapId, AK()); PRES.i = 0; PRES.steg = 0;
  PRES.o = o; PRES.kap = kapId;
  let el = document.getElementById("pres");
  if (!el) {
    el = document.createElement("div"); el.id = "pres"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Presentation");
    el.innerHTML = `<div class="pr-scen"><div class="pr-bild" id="prBild"></div></div>
      <div class="pr-kontroll"><button type="button" data-pr="forra" aria-label="Föregående">←</button><span id="prRakn"></span><button type="button" data-pr="nasta" aria-label="Nästa">→</button>
      <span class="pr-luft"></span><button type="button" data-pr="hel" aria-label="Helskärm" title="Helskärm (F)">⛶</button><button type="button" data-pr="stang" aria-label="Stäng" title="Stäng (Esc)">×</button></div>`;
    document.body.appendChild(el);
    el.addEventListener("click", e => {
      const b = e.target.closest("[data-pr]");
      if (b) { const a = b.dataset.pr; if (a === "nasta") prNasta(); else if (a === "forra") prForra(); else if (a === "stang") stangPresentation(); else if (a === "hel") prHelskarm(); return; }
      if (e.target.closest("a,button,summary,select,input")) return;
      if (e.target.closest(".pr-scen")) prNasta();
    });
  }
  el.hidden = false; document.body.classList.add("pr-oppen");
  document.addEventListener("keydown", prTangent);
  prVisa();
}
function prVisa() {
  const b = PRES.bilder[PRES.i], yta = document.getElementById("prBild");
  yta.className = "pr-bild typ-" + b.typ + (b.fd ? " pr-fd" : ""); yta.innerHTML = b.html; yta.style.fontSize = "";
  yta.querySelectorAll("details.fordjup").forEach(d => d.open = true);
  PRES.stegLista = [...yta.querySelectorAll(".steg, .pr-viktigt li, .pr-exempel .exempel > :not(.et):not(:first-of-type)")];
  PRES.stegLista.forEach((s, i) => s.classList.toggle("dold-steg", i >= PRES.steg));
  yta.querySelectorAll(".pr-alt li.ratt").forEach(li => li.classList.toggle("visa", PRES.steg >= PRES.stegLista.length && PRES.stegLista.length > 0));
  // krymp texten om bilden blir för full
  yta.querySelectorAll(".dold-steg").forEach(x => x.style.visibility = "hidden");
  let f = 2.15; while (yta.scrollHeight > yta.clientHeight + 1 && f > 1.2) { f -= .1; yta.style.fontSize = f + "cqw"; }
  document.getElementById("prRakn").textContent = `${PRES.i + 1} / ${PRES.bilder.length}`;
}
function prNasta() {
  if (PRES.steg < (PRES.stegLista || []).length) { PRES.steg++; return prVisa(); }
  if (PRES.i < PRES.bilder.length - 1) { PRES.i++; PRES.steg = 0; prVisa(); }
}
function prForra() {
  if (PRES.i > 0) { PRES.i--; PRES.steg = 0; prVisa(); PRES.steg = PRES.stegLista.length; prVisa(); }  // föregående bild visas färdig
}
function prHelskarm() {
  const el = document.getElementById("pres");
  if (document.fullscreenElement) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen().catch(() => { });
}
function prTangent(e) {
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  const k = e.key;
  if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(k)) { e.preventDefault(); prNasta(); }
  else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(k)) { e.preventDefault(); prForra(); }
  else if (k === "Home") { PRES.i = 0; PRES.steg = 0; prVisa(); }
  else if (k === "End") { PRES.i = PRES.bilder.length - 1; PRES.steg = 0; prVisa(); }
  else if (k === "f" || k === "F") prHelskarm();
  else if (k === "Escape" && !document.fullscreenElement) stangPresentation();
}
function stangPresentation() {
  const el = document.getElementById("pres"); if (!el) return;
  if (document.fullscreenElement) document.exitFullscreen();
  el.hidden = true; document.body.classList.remove("pr-oppen");
  document.removeEventListener("keydown", prTangent);
}
