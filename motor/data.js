/* =====================================================================
   DATA – läser in ämnen, arbetsområden, texter och uppgifter.
   Rörs inte för att lägga till innehåll.
   ===================================================================== */
const ARSKURSER = [7, 8, 9];

const Portal = {
  inst: { titel: "Studieportalen", text: "" },
  amnenLista: [],
  omraden: {},          // id -> arbetsområde (med .amne, .kapitel, .texter, .uppgifter)
  nivaer: { standard: { 1: { 0: 50, 1: 50 }, 2: { 0: 15, 1: 70, 2: 15 }, 3: { 1: 75, 2: 25 }, 4: { 1: 30, 2: 70 }, 5: { 2: 30, 3: 70 } } },
  _amne: null, _omrade: null, _fel: [],

  /* --- anropas från konfig- och innehållsfilerna --- */
  installningar(o) { Object.assign(this.inst, o); },
  amnen(lista) { this.amnenLista = lista; },
  elevnivaer(o) { this.nivaer = o; },
  omrade(o) {
    o.amne = this._amne; o.kapitel = (o.kapitel || []); o.aktiviteter = o.aktiviteter || [];
    o.uppgifter = []; o.texter = {}; o.laddat = false;
    this.omraden[o.id] = o; this._senaste = o;
  },
  uppgifter(lista) {
    const o = this._omrade; if (!o) return;
    lista.forEach(t => { t._omrade = o.id; o.uppgifter.push(t); });
  }
};

/* --- inläsning --- */
function laddaSkript(src) {
  return new Promise(res => {
    const s = document.createElement("script"); s.src = src;
    const fil = src.split("?")[0];
    // Skrivfel i filen (t.ex. glömt kommatecken) fångas här
    const fel = e => { if (e.filename && e.filename.split("?")[0].endsWith(fil)) Portal._fel.push(`Skrivfel i ${fil} rad ${e.lineno}: ${e.message.replace(/^Uncaught /, "")}`); };
    window.addEventListener("error", fel);
    s.onload = () => { window.removeEventListener("error", fel); res(true); };
    s.onerror = () => { Portal._fel.push("Kunde inte läsa " + src); res(false); };
    document.head.appendChild(s);
  });
}
const sokvag = (o, fil) => `${o.amne}/${o.id}/${fil}`;

// Läser in alla arbetsområdens omrade.js (små filer)
async function laddaOmraden() {
  for (const a of Portal.amnenLista) {
    a.omradeObj = [];
    for (const id of a.omraden || []) {
      Portal._amne = a.id; Portal._senaste = null;
      await laddaSkript(`${a.id}/${id}/omrade.js?v=` + Date.now().toString(36).slice(0, -3));
      const o = Portal.omraden[id];
      if (o) a.omradeObj.push(o); else Portal._fel.push(`Arbetsområdet ${a.id}/${id} saknar omrade.js`);
    }
  }
}

// Läser in texter och uppgifter för ett arbetsområde
async function laddaInnehall(o) {
  if (o.laddat) return o;
  if (o._laddar) return o._laddar;
  o._laddar = (async () => {
    for (const k of o.kapitel) {
      Portal._omrade = o;
      if (k.uppgifter !== false) await laddaSkript(sokvag(o, `uppgifter/${k.id}.js`) + "?v=" + Date.now().toString(36).slice(0, -3));
      Portal._omrade = null;
      try {
        const r = await fetch(sokvag(o, `texter/${k.id}.md`), { cache: "no-cache" });
        if (r.ok) o.texter[k.id] = MD.parse(await r.text(), sokvag(o, ""));
      } catch (e) { /* ingen text */ }
    }
    o.laddat = true; return o;
  })();
  return o._laddar;
}
async function laddaAllt() { await laddaOmraden(); for (const o of Object.values(Portal.omraden)) await laddaInnehall(o); }

/* --- årskurs --- */
function hamtaAk() { try { const v = localStorage.getItem("arskurs"); return v && v !== "alla" ? +v : "alla"; } catch (e) { return "alla"; } }
function sparaAk(v) { try { localStorage.setItem("arskurs", String(v)); } catch (e) { } }
const passar = (lista, ak) => ak === "alla" || !lista || lista.includes(+ak);

/* --- uppslag --- */
const kapitelAv = (o, id) => o.kapitel.find(k => k.id === id);
const synligaKapitel = (o, ak) => o.kapitel.filter(k => !k.dold && passar(kapitelArskurs(o, k), ak));
function kapitelArskurs(o, k) { return k.arskurs || (o.texter[k.id] && o.texter[k.id].meta.arskurs) || o.arskurs || ARSKURSER; }
function avsnittAv(o, kapId, avId) { const t = o.texter[kapId]; return t && t.avsnitt.find(a => a.id === avId); }

// Vilka årskurser en uppgift gäller
function uppgiftArskurs(o, t) {
  if (t.arskurs) return t.arskurs;
  const k = kapitelAv(o, t.kapitel); const kap = k ? kapitelArskurs(o, k) : (o.arskurs || ARSKURSER);
  const av = (t.avsnitt || []).map(a => avsnittAv(o, t.kapitel, a)).filter(Boolean);
  if (av.length && av.every(a => a.ak)) return kap.filter(x => av.some(a => a.ak.includes(x)));
  return kap;
}

// Uppgiftens nivåer för en årskurs -> [{ niva, orig }]
function nivaerFor(o, t, ak) {
  if (ak !== "alla" && t.nivaerPerArskurs && t.nivaerPerArskurs[ak]) return t.nivaerPerArskurs[ak].map(n => ({ niva: n, orig: n }));
  const k = kapitelAv(o, t.kapitel) || {};
  const d = ak === "alla" ? 0 : ((k.nivaForskjutning || {})[ak] || 0);
  const ut = []; (t.nivaer || []).forEach(n => { const v = n >= 3 ? n : Math.max(0, Math.min(2, n + d)); if (!ut.some(x => x.niva === v)) ut.push({ niva: v, orig: n }); });
  return ut;
}

// Alla aktiva uppgifter i ett arbetsområde för en årskurs (valfritt: kapitel, avsnitt)
function aktivaUppgifter(o, ak, kapId, avId) {
  return o.uppgifter.filter(t => !t.dold && TYPER[t.typ]
    && (!kapId || t.kapitel === kapId)
    && (!avId || (t.avsnitt || []).includes(avId))
    && passar(uppgiftArskurs(o, t), ak)
    && (() => { const k = kapitelAv(o, t.kapitel); return k && !k.dold && passar(kapitelArskurs(o, k), ak); })());
}

// Stjärnornas fördelning för årskursen, som andelar (0–1)
function mixFor(stjarnor, ak) {
  const tab = (ak !== "alla" && Portal.nivaer[ak]) || Portal.nivaer.standard;
  const m = tab[stjarnor] || Portal.nivaer.standard[stjarnor]; const sum = Object.values(m).reduce((a, b) => a + b, 0) || 1;
  const ut = {}; Object.entries(m).forEach(([l, w]) => { if (w > 0) ut[l] = w / sum; }); return ut;
}

function amneAv(id) { return Portal.amnenLista.find(a => a.id === id); }
