/* =====================================================================
   RITNINGAR – bilder som kan användas i texter med [[namn ...]]
   ---------------------------------------------------------------------
   [[atom p=6 n=6 e=6]]            atom med protoner, neutroner, elektroner
   [[atom p=6 n=5 e=6 skalnamn valens]]  ... med skalens namn och pil till valenselektronerna
                                   (valens="Yttre elektroner" ger egen text)
   [[nota 13 6 C]]                 atomnotation (masstal, atomnummer, beteckning)
   [[nota 12 6 C +]]               ... med laddning.  Lägg till "stor" och/eller "farg"
   [[partikel p]]                  en partikel: p, n eller e
   [[partiklar p p n n]]           rad med partiklar. Även tecken: → + =
   [[del dalton]]                  liten bild: proton neutron elektron karna skal alfa
                                   foton dalton thomson rutherford bohr schrodinger
   [[kvark u]]                     kvark: u d c s t b
   [[spektrum]]                    elektromagnetiska spektrumet
   [[atomkort titel="Väte" A=1 Z=1 X=H p=1 n=0 e=1 text="..." farg=gron]]
   [[kort-atom]] [[kort-notation]] [[kort-samband]] [[kort-stralning]]
   [[amne-fysik]] [[amne-kemi]] [[amne-biologi]] [[amne-matematik]]
   ===================================================================== */
const FARGKLASS = { gron: "c-green", bla: "c-blue", gul: "c-yellow", rod: "c-red", lila: "c-purple", orange: "c-orange",
  green: "c-green", blue: "c-blue", yellow: "c-yellow", red: "c-red", purple: "c-purple" };

const AMNESBILD = {
  fysik: `<svg viewBox="0 0 120 100" aria-hidden="true"><g fill="none" stroke="var(--electron)" stroke-width="3" opacity=".7">
    <ellipse cx="60" cy="50" rx="46" ry="17"/><ellipse cx="60" cy="50" rx="46" ry="17" transform="rotate(60 60 50)"/><ellipse cx="60" cy="50" rx="46" ry="17" transform="rotate(-60 60 50)"/></g>
    <circle cx="60" cy="50" r="9" fill="url(#gP)"/></svg>`,
  kemi: `<svg viewBox="0 0 120 100" aria-hidden="true"><path d="M48 14h24M52 14v26L30 80a7 7 0 0 0 6 10h48a7 7 0 0 0 6-10L68 40V14" fill="var(--panel)" stroke="var(--purple)" stroke-width="4" stroke-linejoin="round"/>
    <path d="M38 68h44l7 13a5 5 0 0 1-4 7H35a5 5 0 0 1-4-7z" fill="var(--purple)" opacity=".55"/><circle cx="54" cy="58" r="4" fill="var(--purple)" opacity=".5"/><circle cx="66" cy="50" r="3" fill="var(--purple)" opacity=".5"/></svg>`,
  biologi: `<svg viewBox="0 0 120 100" aria-hidden="true"><path d="M60 88C60 60 64 36 92 16 96 46 84 74 60 88z" fill="var(--green)" opacity=".75"/><path d="M60 88C58 62 50 44 26 30c-4 28 8 50 34 58z" fill="var(--green)" opacity=".45"/>
    <path d="M60 88c2-24 10-46 26-62" fill="none" stroke="var(--panel)" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  matematik: `<svg viewBox="0 0 120 100" aria-hidden="true"><path d="M22 82L62 16l36 66z" fill="var(--yellow-bg)" stroke="var(--yellow)" stroke-width="4" stroke-linejoin="round"/>
    <g font-family="Noto Serif,Georgia,serif" font-weight="700" fill="var(--ink)"><text x="44" y="70" font-size="22">π</text><text x="62" y="70" font-size="20">√x</text></g></svg>`
};

const KVARKNAMN = { u: "up", d: "down", c: "charm", s: "strange", t: "top", b: "bottom" };

const RITNINGAR = {
  atom: (p, a) => `<div class="ritning${a.valens || p.includes("valens") ? " bred" : ""}">${atom(+a.p || 0, +a.n || 0, +a.e || 0, {
    skalnamn: p.includes("skalnamn"), valens: a.valens ? esc(a.valens) : p.includes("valens") }) }</div>`,
  nota: (p, a) => {
    const flaggor = p.filter(x => x === "stor" || x === "farg"), v = p.filter(x => !flaggor.includes(x));
    const A = a.A ?? v[0], Z = a.Z ?? v[1], X = a.X ?? v[2], ch = a.ch ?? (v[3] || "");
    return nota(A, Z, X, ch, flaggor.includes("stor") ? "big" : "mid", flaggor.includes("farg"));
  },
  partikel: p => part(p[0] || "p"),
  partiklar: p => `<span class="eq">${p.map(x => "pne".includes(x) && x.length === 1 ? part(x) : `<span>${esc(x)}</span>`).join("")}</span>`,
  del: (p, a) => delBild(p[0], +a.storlek || 56),
  kvark: p => `<span class="q q-${p[0]}"><b>${esc(p[0])}</b>${KVARKNAMN[p[0]] || ""}</span>`,
  spektrum: () => spektrum(),
  atomkort: (p, a) => mini(FARGKLASS[a.farg] || "c-blue", esc(a.titel || ""), a.under ? esc(a.under) : "", a.A, a.Z, a.X, a.ch || "",
    +a.p || 0, +a.n || 0, +a.e || 0, a.why ? MD.inline(a.why) : "", a.text ? MD.inline(a.text) : "")
};
Object.keys(KORTBILD).forEach(k => { RITNINGAR["kort-" + k] = () => KORTBILD[k]; });
Object.keys(AMNESBILD).forEach(k => { RITNINGAR["amne-" + k] = () => `<div class="art">${AMNESBILD[k]}</div>`; });

// Tolkar "namn a b x=1 y="två ord"" -> ritningens HTML
function ritning(kod) {
  const delar = [...kod.matchAll(/(\w+)=(?:"([^"]*)"|(\S+))|"([^"]*)"|(\S+)/g)];
  const namn = delar.length ? (delar[0][5] || delar[0][4]) : "";
  const pos = [], arg = {};
  delar.slice(1).forEach(m => { if (m[1]) arg[m[1]] = m[2] ?? m[3]; else pos.push(m[4] ?? m[5]); });
  const f = RITNINGAR[namn];
  return f ? f(pos, arg) : `<span class="saknas" title="Okänd ritning">[[${esc(kod)}]]</span>`;
}

// Gemensamma färgövergångar och stjärnsymbol – läggs in en gång per sida
function laggTillSvgDefs() {
  if (document.getElementById("svgdefs")) return;
  document.body.insertAdjacentHTML("afterbegin", `<svg id="svgdefs" width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <radialGradient id="gP" cx=".35" cy=".35"><stop offset="0" stop-color="#ff9a9e"/><stop offset="1" stop-color="var(--proton)"/></radialGradient>
    <radialGradient id="gN" cx=".35" cy=".35"><stop offset="0" stop-color="#f1f3f5"/><stop offset="1" stop-color="var(--neutron)"/></radialGradient>
    <radialGradient id="gE" cx=".35" cy=".35"><stop offset="0" stop-color="#8fb4ff"/><stop offset="1" stop-color="var(--electron)"/></radialGradient>
    <symbol id="star" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z"/></symbol></defs></svg>`);
}
