/* =====================================================================
   PORTAL – startsida, ämnen, arbetsområden, Läs och Aktiviteter.
   Adresser:
     #/                                   startsidan
     #/fysik                              ämnet
     #/fysik/atom-och-karnfysik           arbetsområdet
     #/fysik/atom-och-karnfysik/las/stralning/alfa
     #/fysik/atom-och-karnfysik/ova?kapitel=stralning&avsnitt=alfa&stjarnor=2&kor
     #/fysik/atom-och-karnfysik/aktiviteter/kol14
   Rörs inte för att lägga till innehåll.
   ===================================================================== */
let AKTIV_AK = hamtaAk();
const AK = () => AKTIV_AK;
const AKTUELLT = { o: null, nyckel: "" };
const vy = () => document.getElementById("vy");
const lank = (...d) => "#/" + d.filter(Boolean).join("/");

function akVal(stor) {
  return `<div class="akval ${stor ? "stor" : ""}" role="radiogroup" aria-label="Årskurs">${stor ? "" : '<span class="aklbl">Åk</span>'}
    ${["alla", ...ARSKURSER].map(v => `<button type="button" role="radio" data-ak="${v}" aria-checked="${String(AK()) === String(v)}">${v === "alla" ? "Alla" : (stor ? "Åk " : "") + v}</button>`).join("")}</div>`;
}
function topp(smulor) {
  document.getElementById("topp").innerHTML = `<div class="topp-in">
    <a class="logo" href="#/">${esc(Portal.inst.titel)}</a>
    <nav class="smulor" aria-label="Var du är">${smulor.map(([t, h]) => h ? `<a href="${h}">${esc(t)}</a>` : `<span>${esc(t)}</span>`).join('<span class="sep">›</span>')}</nav>
    ${akVal(false)}</div>`;
}
function flikar(o, akt) {
  const ak = AK(), nAkt = o.aktiviteter.filter(a => passar(a.arskurs, ak)).length;
  const f = [["las", "📖", "Läs"], ["ova", "✏️", "Öva"], ["aktiviteter", "🧪", "Aktiviteter"]];
  return `<nav class="flikar" aria-label="Del av arbetsområdet">${f.map(([id, ic, t]) =>
    id === "aktiviteter" && !nAkt ? "" : `<a href="${lank(o.amne, o.id, id)}" class="flik ${akt === id ? "on" : ""}" ${akt === id ? 'aria-current="page"' : ""}><span aria-hidden="true">${ic}</span>${t}</a>`).join("")}</nav>`;
}
const bildHtml = b => !b ? "" : /^\s*\[\[/.test(b) ? ritning(b.trim().slice(2, -2)) : b;
const synligaOmraden = (a, ak) => (a.omradeObj || []).filter(o => !o.dold && passar(o.arskurs, ak));
const tom = t => `<section class="panel tomt"><p>${t}</p></section>`;

/* ---------- startsida ---------- */
function visaStart() {
  topp([]); document.title = Portal.inst.titel;
  const ak = AK();
  vy().innerHTML = `<header class="hero"><h1>${esc(Portal.inst.titel)}</h1><p>${esc(Portal.inst.text || "")}</p></header>
    <section class="panel akpanel"><h2>Vilken årskurs går du i?</h2><p class="note">Då visas det som passar dig. Du kan ändra när du vill, uppe till höger.</p>${akVal(true)}</section>
    <div class="amnen">${Portal.amnenLista.map(a => {
      const n = synligaOmraden(a, ak).length;
      return `<a class="card amnekort" href="${lank(a.id)}">${bildHtml(a.bild)}<h3>${esc(a.namn)}</h3><p>${esc(a.text || "")}</p>
        ${n ? `<span class="chip">${n} ${n === 1 ? "arbetsområde" : "arbetsområden"}</span>` : '<span class="soon">Kommer snart</span>'}</a>`;
    }).join("")}</div>`;
}

/* ---------- ämne ---------- */
function visaAmne(a) {
  topp([[a.namn]]); document.title = `${a.namn} – ${Portal.inst.titel}`;
  const ak = AK(), lista = synligaOmraden(a, ak);
  vy().innerHTML = `<header class="hero"><h1>${esc(a.namn)}</h1><p>Välj arbetsområde</p></header>
    ${lista.length ? `<div class="omradeslista">${lista.map(o => `<a class="card omradekort" href="${lank(a.id, o.id)}">
      ${bildHtml(o.bild)}<div><h3>${esc(o.namn)}</h3><p>${esc(o.text || "")}</p><span class="chip">åk ${MD.akText(o.arskurs || ARSKURSER)}</span></div></a>`).join("")}</div>`
      : tom(ak === "alla" ? "Här finns inget innehåll än." : `Här finns inget innehåll för åk ${ak} än. Välj <b>Alla</b> uppe till höger för att se allt.`)}`;
}

/* ---------- arbetsområde ---------- */
function visaOmrade(o) {
  const a = amneAv(o.amne), ak = AK();
  topp([[a.namn, lank(a.id)], [o.namn]]); document.title = `${o.namn} – ${Portal.inst.titel}`;
  const kap = synligaKapitel(o, ak), nAkt = o.aktiviteter.filter(x => passar(x.arskurs, ak)).length;
  const nUpp = aktivaUppgifter(o, ak).length;
  vy().innerHTML = `<header class="hero"><h1>${esc(o.namn)}</h1><p>${esc(o.text || "")}</p></header>
    <div class="treval">
      <a class="card c-blue valkort" href="${lank(o.amne, o.id, "las")}"><span class="ic" aria-hidden="true">📖</span><h3>Läs</h3><p>Texter, begrepp och det viktigaste att komma ihåg.</p></a>
      <a class="card c-green valkort" href="${lank(o.amne, o.id, "ova")}"><span class="ic" aria-hidden="true">✏️</span><h3>Öva</h3><p>${nUpp} uppgifter på olika nivåer.</p></a>
      ${nAkt ? `<a class="card c-orange valkort" href="${lank(o.amne, o.id, "aktiviteter")}"><span class="ic" aria-hidden="true">🧪</span><h3>Aktiviteter</h3><p>${nAkt} ${nAkt === 1 ? "aktivitet" : "aktiviteter"}.</p></a>` : ""}
    </div>
    <section class="panel"><h2>Kapitel</h2>
      ${kap.length ? `<ol class="kaplista">${kap.map(k => { const n = aktivaUppgifter(o, ak, k.id).length; return `<li><div><b>${esc(k.namn)}</b><span>${esc(k.text || "")}</span></div>
        <span class="kapknapp">${o.texter[k.id] ? `<a class="ghostbtn" href="${lank(o.amne, o.id, "las", k.id)}">Läs</a>` : ""}${n ? `<a class="ghostbtn" href="${lank(o.amne, o.id, "ova")}?kapitel=${k.id}">Öva (${n})</a>` : ""}</span></li>`; }).join("")}</ol>`
        : `<p>Inga kapitel för åk ${ak}.</p>`}
    </section>`;
}

/* ---------- Läs ---------- */
function visaLasIndex(o) {
  const a = amneAv(o.amne), ak = AK();
  topp([[a.namn, lank(a.id)], [o.namn, lank(a.id, o.id)], ["Läs"]]); document.title = `Läs – ${o.namn}`;
  const kap = synligaKapitel(o, ak).filter(k => o.texter[k.id]);
  let senast = null; try { senast = JSON.parse(localStorage.getItem("senast:" + o.id) || "null"); } catch (e) { }
  const sk = senast && kapitelAv(o, senast.k) && o.texter[senast.k];
  const begrepp = [];
  kap.forEach(k => o.texter[k.id].avsnitt.filter(av => passar(av.ak, ak)).forEach(av => av.begrepp.forEach(b => begrepp.push({ ...b, k: k.id, av: av.id }))));
  begrepp.sort((x, y) => x.term.localeCompare(y.term, "sv"));
  vy().innerHTML = `${flikar(o, "las")}
    ${sk ? `<a class="fortsatt" href="${lank(o.amne, o.id, "las", senast.k, senast.a)}">Fortsätt läsa: <b>${esc(kapitelAv(o, senast.k).namn)}${senast.a && avsnittAv(o, senast.k, senast.a) ? " – " + esc(avsnittAv(o, senast.k, senast.a).rubrik) : ""}</b> →</a>` : ""}
    ${kap.length ? `<div class="laskort">${kap.map((k, i) => { const t = o.texter[k.id]; const av = t.avsnitt.filter(x => passar(x.ak, ak));
      return `<a class="card c-${k.farg || "blue"} laskap" href="${lank(o.amne, o.id, "las", k.id)}"><span class="kapnr">Kapitel ${i + 1}</span><h3>${esc(t.titel || k.namn)}</h3><p>${t.ingress ? t.ingress.replace(/<[^>]+>/g, "") : esc(k.text || "")}</p>
        <ul class="avlista">${av.map(x => `<li>${esc(x.rubrik)}</li>`).join("")}</ul></a>`; }).join("")}</div>` : tom("Det finns inga texter här än.")}
    ${begrepp.length ? `<details class="panel ordlista"><summary><h2>Ordlista</h2><span class="chip">${begrepp.length} begrepp</span></summary>
      <dl>${begrepp.map(b => `<div><dt><a href="${lank(o.amne, o.id, "las", b.k, b.av)}">${MD.inline(b.term)}</a></dt><dd>${MD.inline(b.def)}</dd></div>`).join("")}</dl></details>` : ""}`;
}

let LAS_SCROLL = null;
function visaKapitel(o, kapId, avId) {
  const a = amneAv(o.amne), ak = AK(), k = kapitelAv(o, kapId), t = o.texter[kapId];
  if (!k || !t) return visaLasIndex(o);
  topp([[a.namn, lank(a.id)], [o.namn, lank(a.id, o.id)], ["Läs", lank(a.id, o.id, "las")], [k.namn]]);
  document.title = `${t.titel || k.namn} – ${o.namn}`;
  const avs = t.avsnitt.filter(x => passar(x.ak, ak));
  const kaps = synligaKapitel(o, ak).filter(x => o.texter[x.id]), i = kaps.findIndex(x => x.id === kapId);
  const ovaLank = (av) => `${lank(o.amne, o.id, "ova")}?kapitel=${kapId}${av ? "&avsnitt=" + av : ""}&kor`;
  const nKap = aktivaUppgifter(o, ak, kapId).length;
  vy().innerHTML = `${flikar(o, "las")}
    <article class="lastext kapitel">
      <nav class="avmeny" aria-label="Avsnitt">${avs.map(x => `<a href="${lank(o.amne, o.id, "las", kapId, x.id)}" data-av="${x.id}">${esc(x.rubrik)}</a>`).join("")}</nav>
      <header class="kaphuvud"><p class="kapnr">Kapitel ${i + 1} av ${kaps.length}</p><h1>${esc(t.titel || k.namn)}</h1>${t.ingress ? `<p class="ingress">${t.ingress}</p>` : ""}${t.intro}</header>
      ${avs.map(x => { const n = aktivaUppgifter(o, ak, kapId, x.id).length;
        return `<section class="avsnitt" id="av-${x.id}" data-av="${x.id}" ${x.ak ? `data-ak="${x.ak}"` : ""}><h2>${esc(x.rubrik)}</h2>${x.html}
          ${n ? `<p class="ovahar"><a class="start" href="${ovaLank(x.id)}">Öva på det här <span>(${n} ${n === 1 ? "uppgift" : "uppgifter"})</span> →</a></p>` : ""}</section>`; }).join("")}
      <footer class="kapslut">
        ${nKap ? `<a class="start" href="${ovaLank()}">Öva på hela kapitlet (${nKap}) →</a>` : ""}
        <div class="kapnav">${i > 0 ? `<a class="ghostbtn" href="${lank(o.amne, o.id, "las", kaps[i - 1].id)}">← ${esc(kaps[i - 1].namn)}</a>` : "<span></span>"}
        ${i < kaps.length - 1 ? `<a class="ghostbtn" href="${lank(o.amne, o.id, "las", kaps[i + 1].id)}">${esc(kaps[i + 1].namn)} →</a>` : ""}</div>
      </footer>
    </article>`;
  MD.filtreraAk(vy(), ak);
  // Markera avsnittet som syns i menyn
  const meny = vy().querySelector(".avmeny"), sek = [...vy().querySelectorAll("section.avsnitt")];
  let forra = null;
  const markera = () => {
    if (!document.body.contains(meny)) { removeEventListener("scroll", LAS_SCROLL); return; }
    const grans = (document.getElementById("topp").offsetHeight || 0) + meny.offsetHeight + 40;
    let akt = sek[0];
    sek.forEach(x => { if (x.getBoundingClientRect().top <= grans) akt = x; });
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) akt = sek[sek.length - 1];
    if (!akt || akt === forra) return; forra = akt;
    const id = akt.dataset.av;
    meny.querySelectorAll("a").forEach(l => l.classList.toggle("on", l.dataset.av === id));
    const on = meny.querySelector("a.on"); if (on && meny.scrollWidth > meny.clientWidth) meny.scrollTo({ left: on.offsetLeft - 16, behavior: "smooth" });
    try { localStorage.setItem("senast:" + o.id, JSON.stringify({ k: kapId, a: id })); } catch (e) { }
  };
  let vantar = false;
  if (LAS_SCROLL) removeEventListener("scroll", LAS_SCROLL);
  LAS_SCROLL = () => { if (!vantar) { vantar = true; requestAnimationFrame(() => { vantar = false; markera(); }); } };
  addEventListener("scroll", LAS_SCROLL, { passive: true });
  scrollaTill(avId); markera();
}
function scrollaTill(avId) {
  const el = avId && document.getElementById("av-" + avId);
  if (el) { const y = el.getBoundingClientRect().top + scrollY - (document.querySelector(".avmeny")?.offsetHeight || 0) - (document.getElementById("topp").offsetHeight || 0) - 8; scrollTo({ top: y, behavior: "auto" }); }
  else scrollTo(0, 0);
}

/* ---------- Aktiviteter ---------- */
function visaAktiviteter(o, aktId) {
  const a = amneAv(o.amne), ak = AK(), lista = o.aktiviteter.filter(x => passar(x.arskurs, ak));
  const akt = aktId && o.aktiviteter.find(x => x.id === aktId);
  if (akt) {
    topp([[a.namn, lank(a.id)], [o.namn, lank(a.id, o.id)], ["Aktiviteter", lank(a.id, o.id, "aktiviteter")], [akt.namn]]);
    document.title = `${akt.namn} – ${o.namn}`;
    vy().innerHTML = `${flikar(o, "aktiviteter")}<p><a class="ghostbtn" href="${lank(o.amne, o.id, "aktiviteter")}">← Alla aktiviteter</a></p>
      <iframe class="aktram" src="${sokvag(o, akt.fil)}" title="${esc(akt.namn)}"></iframe>`;
    const f = vy().querySelector("iframe");
    f.addEventListener("load", () => {
      try {
        const d = f.contentDocument, satt = () => { f.style.height = d.documentElement.scrollHeight + "px"; };
        satt(); new ResizeObserver(satt).observe(d.body);
      } catch (e) { f.style.height = "90vh"; }
    });
    scrollTo(0, 0); return;
  }
  topp([[a.namn, lank(a.id)], [o.namn, lank(a.id, o.id)], ["Aktiviteter"]]); document.title = `Aktiviteter – ${o.namn}`;
  vy().innerHTML = `${flikar(o, "aktiviteter")}${lista.length ? `<div class="laskort">${lista.map(x => `<a class="card c-orange laskap" href="${lank(o.amne, o.id, "aktiviteter", x.id)}">
    ${bildHtml(x.bild)}<h3>${esc(x.namn)}</h3><p>${esc(x.text || "")}</p></a>`).join("")}</div>` : tom("Inga aktiviteter för din årskurs än.")}`;
}

/* ---------- router ---------- */
async function route() {
  const [vag, fraga] = location.hash.replace(/^#\/?/, "").split("?");
  const d = vag.split("/").filter(Boolean).map(decodeURIComponent);
  const p = Object.fromEntries(new URLSearchParams(fraga || ""));
  const nyckel = location.hash;
  // Samma kapitel – bara scrolla till avsnittet
  if (d[2] === "las" && d[3] && AKTUELLT.nyckel.startsWith(`las:${d[0]}/${d[1]}/${d[3]}:${AK()}`) && vy().querySelector(".avmeny")) { scrollaTill(d[4]); return; }
  if (!d.length) { AKTUELLT.nyckel = ""; return visaStart(); }
  const a = amneAv(d[0]); if (!a) { AKTUELLT.nyckel = ""; return visaStart(); }
  if (d.length === 1) { AKTUELLT.nyckel = ""; return visaAmne(a); }
  const o = Portal.omraden[d[1]]; if (!o || o.amne !== a.id) return visaAmne(a);
  if (!o.laddat) { vy().innerHTML = '<p class="laddar">Laddar …</p>'; await laddaInnehall(o); }
  AKTUELLT.o = o; AKTUELLT.nyckel = d[2] === "las" && d[3] ? `las:${d[0]}/${d[1]}/${d[3]}:${AK()}` : nyckel;
  if (!d[2]) return visaOmrade(o);
  if (d[2] === "las") return d[3] ? visaKapitel(o, d[3], d[4]) : visaLasIndex(o);
  if (d[2] === "ova") {
    topp([[a.namn, lank(a.id)], [o.namn, lank(a.id, o.id)], ["Öva"]]); document.title = `Öva – ${o.namn}`;
    vy().innerHTML = `${flikar(o, "ova")}<div id="ovaYta"></div>`;
    visaOva(o, p, document.getElementById("ovaYta")); scrollTo(0, 0); return;
  }
  if (d[2] === "aktiviteter") return visaAktiviteter(o, d[3]);
  visaOmrade(o);
}

/* ---------- gemensamma händelser ---------- */
document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.ak && b.closest(".akval")) {
    AKTIV_AK = b.dataset.ak === "alla" ? "alla" : +b.dataset.ak; sparaAk(AKTIV_AK);
    if (OV.aktiv && !confirmAk()) return;
    AKTUELLT.nyckel = ""; route();
  }
  else if (b.id === "dlgClose" || b.id === "dlgClose2") document.getElementById("infoDlg").close();
  else if (b.id === "dlgPractice") { const o = OVA.o || AKTUELLT.o; document.getElementById("infoDlg").close(); location.hash = `${lank(o.amne, o.id, "ova")}?kapitel=${b.dataset.kap}`; }
});
function confirmAk() { OV.aktiv = false; return true; }

async function startaPortal() {
  laggTillSvgDefs();
  const tp = document.getElementById("topp");
  new ResizeObserver(() => document.documentElement.style.setProperty("--toppH", tp.offsetHeight + "px")).observe(tp);
  await laddaOmraden();
  const dlg = document.getElementById("infoDlg");
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
  dlg.querySelector("#dlgRead").addEventListener("click", () => dlg.close());
  window.addEventListener("hashchange", route);
  route();
}
