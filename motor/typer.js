/* Rörs inte för att lägga till innehåll. */
/* =====================================================================
   UPPGIFTSTYPER – hjälpfunktioner och alla typer av uppgifter.
   ===================================================================== */
const rnd = n => Math.floor(Math.random() * n);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const norm = s => String(s || "").toLowerCase().replace(/[.,!?:;"']/g, "").replace(/\s+/g, " ").trim();
const alts = s => s.split("/").map(norm);
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

/* ---- Små bilder av atomens delar ---- */
function delBild(k, size = 56) {
  const v = `viewBox="0 0 60 60" width="${size}" height="${size}" aria-hidden="true"`;
  if (k === "proton" || k === "p") return `<svg ${v}><circle cx="30" cy="30" r="20" fill="url(#gP)"/><text x="30" y="38" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">+</text></svg>`;
  if (k === "neutron" || k === "n") return `<svg ${v}><circle cx="30" cy="30" r="20" fill="url(#gN)"/></svg>`;
  if (k === "elektron" || k === "e") return `<svg ${v}><circle cx="30" cy="30" r="14" fill="url(#gE)"/><text x="30" y="36" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">−</text></svg>`;
  if (k === "karna") return `<svg ${v}><circle cx="30" cy="30" r="25" fill="none" stroke="var(--ring)" stroke-width="3"/>
    <circle cx="24" cy="24" r="9" fill="url(#gN)"/><circle cx="36" cy="24" r="9" fill="url(#gP)"/><circle cx="24" cy="36" r="9" fill="url(#gP)"/><circle cx="36" cy="36" r="9" fill="url(#gN)"/></svg>`;
  if (k === "alfa") return `<svg ${v}><circle cx="24" cy="24" r="10" fill="url(#gN)"/><circle cx="37" cy="25" r="10" fill="url(#gP)"/><circle cx="23" cy="37" r="10" fill="url(#gP)"/><circle cx="36" cy="37" r="10" fill="url(#gN)"/>
    <text x="37" y="30" text-anchor="middle" font-size="13" font-weight="900" fill="#fff">+</text><text x="23" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#fff">+</text></svg>`;
  if (k === "foton") return `<svg ${v}><path d="M6 30 q4 -12 8 0 t8 0 t8 0 t8 0 t8 0" fill="none" stroke="var(--orange)" stroke-width="3.5" stroke-linecap="round"/><path d="M46 30 L56 30 M51 25 L56 30 L51 35" fill="none" stroke="var(--orange)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  if (k === "dalton") return `<svg ${v}><circle cx="30" cy="30" r="22" fill="#2fbfbf"/><circle cx="23" cy="22" r="8" fill="#fff" opacity=".35"/></svg>`;
  if (k === "thomson") return `<svg ${v}><circle cx="30" cy="30" r="24" fill="#9fd3f0"/>${[[18,20,"+"],[34,16,"−"],[42,28,"+"],[22,36,"−"],[32,42,"+"],[44,40,"−"],[16,28,"−"],[28,28,"+"]].map(([x,y,t]) => `<circle cx="${x}" cy="${y}" r="4.6" fill="${t === "+" ? "var(--proton)" : "var(--green)"}"/>`).join("")}</svg>`;
  if (k === "rutherford") return `<svg ${v}><g fill="none" stroke="var(--shell)" stroke-width="1.6"><ellipse cx="30" cy="30" rx="26" ry="9"/><ellipse cx="30" cy="30" rx="26" ry="9" transform="rotate(60 30 30)"/><ellipse cx="30" cy="30" rx="26" ry="9" transform="rotate(-60 30 30)"/></g><circle cx="30" cy="30" r="3.5" fill="var(--proton)"/><circle cx="56" cy="30" r="3" fill="var(--green)"/><circle cx="17" cy="52" r="3" fill="var(--green)"/><circle cx="17" cy="8" r="3" fill="var(--green)"/></svg>`;
  if (k === "bohr") return `<svg ${v}><g fill="none" stroke="var(--shell)" stroke-width="2"><circle cx="30" cy="30" r="14"/><circle cx="30" cy="30" r="25"/></g><circle cx="30" cy="30" r="6" fill="var(--proton)"/><circle cx="16" cy="30" r="3" fill="var(--green)"/><circle cx="44" cy="30" r="3" fill="var(--green)"/><circle cx="30" cy="5" r="3" fill="var(--green)"/><circle cx="30" cy="55" r="3" fill="var(--green)"/><circle cx="5" cy="30" r="3" fill="var(--green)"/><circle cx="55" cy="30" r="3" fill="var(--green)"/></svg>`;
  if (k === "schrodinger") return `<svg ${v}><defs><radialGradient id="moln"><stop offset="0" stop-color="#3a2fd0"/><stop offset=".55" stop-color="#5b6cf0" stop-opacity=".7"/><stop offset="1" stop-color="#9fb4ff" stop-opacity="0"/></radialGradient></defs><circle cx="30" cy="30" r="28" fill="url(#moln)"/><circle cx="30" cy="30" r="2.5" fill="var(--proton)"/></svg>`;
  if (k === "skal") return `<svg ${v}><circle cx="30" cy="30" r="24" fill="none" stroke="var(--shell)" stroke-width="5"/><circle cx="30" cy="30" r="5" fill="var(--muted)" opacity=".35"/></svg>`;
  return "";
}

/* ---- Uppgiftstyper ----
   Varje typ har:
     setup(q)          slumpar det som ska varieras (valfritt)
     html(q)           uppgiftens innehåll
     mount(root, q)    kopplar knappar m.m. (valfritt)
     grade(root, q)    -> { ok, right, total, facit }  och markerar fälten
*/
const TYPER = {};

/* LUCKTEXT */
TYPER.lucktext = {
  instr: q => q.rull ? "Välj rätt ord i varje lucka." : "Skriv rätt ord i varje lucka.",
  parse(text) {
    const parts = []; let last = 0; const re = /\[([^\]]+)\]/g; let m;
    while ((m = re.exec(text))) {
      parts.push({ t: text.slice(last, m.index) });
      let a = m[1], group = false; if (a.startsWith("*")) { group = true; a = a.slice(1); }
      const items = a.split("/").map(it => it.split("|").map(norm));
      parts.push({ blank: true, raw: a.split("/")[0].split("|")[0], rawItems: a.split("/").map(x => x.split("|")[0]), alts: items.flat(), key: v => { const it = items.find(x => x.includes(v)); return it ? it[0] : v; }, group });
      last = re.lastIndex;
    }
    parts.push({ t: text.slice(last) });
    return parts;
  },
  setup(q) { q.parts = this.parse(q.v.text); q.opts = shuffle(q.task.ordlista || []); },
  html(q) {
    let i = 0;
    return `<p class="cloze">${q.parts.map(p => {
      if (!p.blank) return esc(p.t);
      const id = `b${i++}`;
      if (q.rull) return `<select class="blank" id="${q.uid}-${id}" aria-label="Lucka ${i}"><option value="">Välj …</option>${q.opts.map(o => `<option>${esc(o)}</option>`).join("")}</select>`;
      return `<input class="blank" id="${q.uid}-${id}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Lucka ${i}" size="${Math.max(8, p.raw.length + 2)}">`;
    }).join("")}</p>`;
  },
  grade(root, q) {
    const fields = [...root.querySelectorAll(".blank")];
    const blanks = q.parts.filter(p => p.blank);
    let right = 0; const used = new Set(), givna = new Set(), inte = (q.v.inte || []).map(norm);
    blanks.forEach((p, i) => {
      const val = norm(fields[i].value); let ok = false;
      if (p.group) {
        blanks.forEach((g, j) => { if (!ok && g.group && !used.has(j) && g.alts.includes(val)) { const k = g.key(val); if (!givna.has(k) && !inte.includes(k)) { ok = true; used.add(j); givna.add(k); g.match = k; } } });
      } else ok = p.alts.includes(val);
      fields[i].classList.add(ok ? "is-right" : "is-wrong"); if (ok) right++;
    });
    // I facit: grupp-luckor visar elevens rätta svar, övriga får ett svar som inte redan visas
    const visade = new Set(blanks.filter(b => b.group && b.match).map(b => b.match));
    blanks.forEach(b => {
      if (!b.group) { b.visa = b.raw; return; }
      if (b.match) { b.visa = b.rawItems.find(x => norm(x) === b.match) || b.match; return; }
      const fri = b.rawItems.find(x => !visade.has(norm(x)) && !inte.includes(norm(x))) || b.raw; visade.add(norm(fri)); b.visa = fri;
    });
    blanks.forEach(b => delete b.match);
    const facit = q.v.facit ? `<p>${q.v.facit}</p>` : `<p class="cloze">${q.parts.map(p => p.blank ? `<b class="ans">${esc(p.visa)}</b>` : esc(p.t)).join("")}</p>`;
    return { ok: right === blanks.length, right, total: blanks.length, facit };
  }
};

/* MARKERA – numrerad bild av en atom, eller av atomnotation (bild: "notation") */
TYPER.markera = {
  instr: q => q.rull ? "Välj rätt namn för varje nummer i bilden." : "Skriv rätt namn för varje nummer i bilden.",
  // Var i bilden varje del pekas ut, och var numret står
  punkter: {
    atomkärna:    { mal: [124, 124], etikett: [36, 36] },
    elektronskal: { mal: [203, 59],  etikett: [264, 36] },
    proton:       { mal: [133, 167], etikett: [36, 264] },
    neutron:      { mal: [167, 167], etikett: [264, 264] },
    elektron:     { mal: [45, 150],  etikett: [24, 206] }
  },
  // bild: "notation" – atomnotation med numrerade delar (varianter: { X, A, Z })
  notation: {
    svg(q) {
      const v = q.v, xs = 150, bred = 66 * v.X.length;            // xs = där bokstaven börjar
      const P = {
        masstal:             { mal: [xs - 14 - 23 * String(v.A).length, 64],  etikett: [26, 64] },
        atomnummer:          { mal: [xs - 14 - 23 * String(v.Z).length, 162], etikett: [26, 162] },
        "kemisk beteckning": { mal: [xs + 34, 174],                           etikett: [xs + 34, 222] },
        laddning:            { mal: [xs + bred + 12, 52],                     etikett: [300, 30] }
      };
      let g = `<svg class="labelatom" viewBox="0 0 330 240" role="img" aria-label="Atomnotation med numrerade delar">
        <text x="${xs - 10}" y="78" text-anchor="end" font-size="40" font-weight="800" fill="var(--ink)">${v.A}</text>
        <text x="${xs - 10}" y="176" text-anchor="end" font-size="40" font-weight="800" fill="var(--ink)">${v.Z}</text>
        <text x="${xs}" y="168" font-size="110" font-weight="800" fill="var(--ink)" font-family="Noto Serif, serif">${v.X}</text>
        ${v.ch ? `<text x="${xs + bred + 4}" y="66" font-size="36" font-weight="800" fill="var(--ink)">${String(v.ch).replace("-", "−")}</text>` : ""}`;
      q.ordning.forEach((k, i) => {
        const { mal: [mx, my], etikett: [ex, ey] } = P[k];
        g += `<line x1="${ex}" y1="${ey}" x2="${mx}" y2="${my}" stroke="var(--accent)" stroke-width="2"/><circle cx="${mx}" cy="${my}" r="3.5" fill="var(--accent)"/>
              <circle cx="${ex}" cy="${ey}" r="15" fill="var(--accent)"/><text x="${ex}" y="${ey + 6}" text-anchor="middle" font-size="17" font-weight="900" fill="var(--accent-ink)">${i + 1}</text>`;
      });
      return g + "</svg>";
    }
  },
  setup(q) { q.ordning = shuffle(q.task.delar.filter(k => k !== "laddning" || q.v.ch)); },
  svg(q) {
    if (q.task.bild === "notation") return this.notation.svg(q);
    const P = this.punkter;
    let g = `<svg class="labelatom" viewBox="0 0 300 300" role="img" aria-label="Atom med numrerade delar">
      <circle cx="150" cy="150" r="105" fill="none" stroke="var(--shell)" stroke-width="6"/>
      <circle cx="150" cy="150" r="36" fill="none" stroke="var(--ring)" stroke-width="3"/>
      <circle cx="139" cy="139" r="12" fill="url(#gN)"/><circle cx="161" cy="139" r="12" fill="url(#gP)"/>
      <circle cx="139" cy="161" r="12" fill="url(#gP)"/><circle cx="161" cy="161" r="12" fill="url(#gN)"/>
      <text x="161" y="144" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">+</text>
      <text x="139" y="166" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">+</text>
      ${[[45, 150], [255, 150]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="11" fill="url(#gE)"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="16" font-weight="900" fill="#fff">−</text>`).join("")}`;
    q.ordning.forEach((k, i) => {
      const { mal: [mx, my], etikett: [ex, ey] } = P[k];
      g += `<line x1="${ex}" y1="${ey}" x2="${mx}" y2="${my}" stroke="var(--ink)" stroke-width="2"/><circle cx="${mx}" cy="${my}" r="3.5" fill="var(--ink)"/>
            <circle cx="${ex}" cy="${ey}" r="15" fill="var(--accent)"/><text x="${ex}" y="${ey + 6}" text-anchor="middle" font-size="17" font-weight="900" fill="var(--accent-ink)">${i + 1}</text>`;
    });
    return g + "</svg>";
  },
  html(q) {
    const opts = shuffle(q.task.delar);
    return `<div class="markera">${this.svg(q)}<ol class="fields">${q.ordning.map((k, i) => `<li><label for="${q.uid}-m${i}">Nummer ${i + 1}</label>${
      q.rull ? `<select class="blank" id="${q.uid}-m${i}"><option value="">Välj …</option>${opts.map(o => `<option>${o}</option>`).join("")}</select>`
             : `<input class="blank" id="${q.uid}-m${i}" autocomplete="off" autocapitalize="off" spellcheck="false">`}</li>`).join("")}</ol></div>`;
  },
  grade(root, q) {
    const f = [...root.querySelectorAll(".blank")]; let right = 0;
    q.ordning.forEach((k, i) => { const ok = q.task.svar[k].includes(norm(f[i].value)); f[i].classList.add(ok ? "is-right" : "is-wrong"); if (ok) right++; });
    return { ok: right === q.ordning.length, right, total: q.ordning.length,
      facit: `<ol class="facit-list">${q.ordning.map(k => `<li>${cap(k)}</li>`).join("")}</ol>` };
  }
};

/* PARA IHOP */
TYPER.para = {
  instr: q => q.v.rubrik || "Para ihop rätt delar.",
  vansterHtml(x, sm) {
    if (x.startsWith("bild:")) return `<span class="pairpic${sm ? " sm" : ""}">${delBild(x.slice(5), sm ? 30 : 52)}</span>`;
    if (x.startsWith("not:")) { const [A, Z, X] = x.slice(4).split(","); return nota(+A, +Z, X, "", sm ? "" : "mid"); }
    if (x.startsWith("atom:")) { const [p, n, e] = x.slice(5).split(",").map(Number); return `<span class="pairatom${sm ? " sm" : ""}">${atom(p, n, e, { tight: true })}</span>`; }
    return sm ? esc(x) : `<b>${esc(x)}</b>`;
  },
  // par: [vänster, höger] eller [vänster, kolumn 2, kolumn 3] – då väljer eleven två saker per rad
  setup(q) { q.rader = shuffle(q.v.par); q.kol = q.v.par[0].length - 1; q.val = [0, 1].slice(0, q.kol).map(c => shuffle([...new Set(q.v.par.map(p => p[c + 1]))])); },
  html(q) {
    const head = q.v.rubriker ? `<div class="pair phead"><div>${esc(q.v.rubriker[0])}</div>${q.v.rubriker.slice(1).map(h => `<span class="arrow"></span><div>${esc(h)}</div>`).join("")}</div>` : "";
    return `<div class="pairs${q.kol > 1 ? " three" : ""}">${head}${q.rader.map(([l], i) => `<div class="pair"><div class="pl">${this.vansterHtml(l)}</div>${q.val.map((vals, c) => `<span class="arrow" aria-hidden="true">→</span>
      <select class="blank" id="${q.uid}-p${i}-${c}" aria-label="Rad ${i + 1}${q.v.rubriker ? ", " + esc(q.v.rubriker[c + 1]) : ""}"><option value="">Välj …</option>${vals.map(o => `<option>${esc(o)}</option>`).join("")}</select>`).join("")}</div>`).join("")}</div>`;
  },
  grade(root, q) {
    let right = 0, total = 0;
    q.rader.forEach((row, i) => q.val.forEach((v, c) => { const f = root.querySelector(`#${q.uid}-p${i}-${c}`), ok = f.value === row[c + 1]; f.classList.add(ok ? "is-right" : "is-wrong"); total++; if (ok) right++; }));
    return { ok: right === total, right, total,
      facit: `<ul class="facit-list">${q.rader.map(row => `<li>${this.vansterHtml(row[0], true)} → <b>${row.slice(1).map(esc).join("</b> → <b>")}</b></li>`).join("")}</ul>` };
  }
};

/* BYGG EN ATOM – pussel */
TYPER.bygg = {
  instr: q => `Bygg en ${q.v.namn}atom med <b>${q.v.p}</b> ${q.v.p === 1 ? "proton" : "protoner"}, <b>${q.v.n}</b> ${q.v.n === 1 ? "neutron" : "neutroner"} och <b>${q.v.e}</b> ${q.v.e === 1 ? "elektron" : "elektroner"}. Dra delarna till rätt plats, eller tryck på en del och sedan på platsen. Med Ångra tar du bort den senaste delen.`,
  setup(q) { q.plac = { karna: [], K: [], L: [] }; q.hist = []; q.vald = "p"; },
  html(q) {
    return `<div class="build"><div class="tray" role="group" aria-label="Delar">
      ${[["p", "Proton"], ["n", "Neutron"], ["e", "Elektron"]].map(([k, t]) => `<button type="button" class="piece" data-piece="${k}" aria-pressed="${q.vald === k}">${delBild(k, 40)}<span>${t}</span></button>`).join("")}
      <button type="button" class="piece clear" data-undo="1">Ångra</button><button type="button" class="piece clear" data-clear="1">Börja om</button></div>
      <div class="stage" id="${q.uid}-stage"></div><p class="hint" id="${q.uid}-hint">Vald del: proton. Tryck på kärnan eller ett skal.</p></div>`;
  },
  draw(root, q) {
    const c = 160, Rk = 48, RK = 98, RL = 140;
    let g = `<svg viewBox="0 0 320 320" class="buildsvg">
      <circle class="zone" data-zone="L" cx="${c}" cy="${c}" r="${RL}" fill="none" stroke="var(--shell)" stroke-width="30" stroke-opacity=".28" pointer-events="stroke"/>
      <circle cx="${c}" cy="${c}" r="${RL}" fill="none" stroke="var(--shell)" stroke-width="4" pointer-events="none"/>
      <circle class="zone" data-zone="K" cx="${c}" cy="${c}" r="${RK}" fill="none" stroke="var(--shell)" stroke-width="30" stroke-opacity=".28" pointer-events="stroke"/>
      <circle cx="${c}" cy="${c}" r="${RK}" fill="none" stroke="var(--shell)" stroke-width="4" pointer-events="none"/>
      <circle class="zone" data-zone="karna" cx="${c}" cy="${c}" r="${Rk}" fill="var(--ring)" fill-opacity=".14" stroke="var(--ring)" stroke-width="3"/>
      <text x="${c}" y="${c + Rk + 18}" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)" pointer-events="none">Kärna</text>
      <text x="${c}" y="${c - RK + 30}" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)" pointer-events="none">K-skal</text>
      <text x="${c}" y="${c - RL + 30}" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)" pointer-events="none">L-skal</text>`;
    q.plac.karna.forEach((k, i) => {
      const N = q.plac.karna.length, rr = N === 1 ? 0 : 7.5 * Math.sqrt(i + .5), t = i * 2.39996, x = c + rr * Math.cos(t), y = c + rr * Math.sin(t);
      g += this.partikel(k, x, y, "karna", i);
    });
    [["K", RK], ["L", RL]].forEach(([z, R]) => q.plac[z].forEach((k, i) => {
      const t = (-90 + i * 360 / q.plac[z].length) * Math.PI / 180; g += this.partikel(k, c + R * Math.cos(t), c + R * Math.sin(t), z, i);
    }));
    root.querySelector(".stage").innerHTML = g + "</svg>";
  },
  partikel(k, x, y, z, i) {
    const r = k === "e" ? 10 : 11, f = k === "p" ? "P" : k === "n" ? "N" : "E", t = k === "p" ? "+" : k === "e" ? "−" : "";
    return `<g class="placed" pointer-events="none"><circle cx="${x}" cy="${y}" r="${r}" fill="url(#g${f})"/>${t ? `<text x="${x}" y="${y + 5}" text-anchor="middle" font-size="15" font-weight="900" fill="#fff" pointer-events="none">${t}</text>` : ""}</g>`;
  },
  mount(root, q) {
    const namn = { p: "proton", n: "neutron", e: "elektron" };
    const hint = root.querySelector(".hint");
    const select = k => { q.vald = k; root.querySelectorAll("[data-piece]").forEach(b => b.setAttribute("aria-pressed", b.dataset.piece === k)); hint.textContent = `Vald del: ${namn[k]}. Tryck på kärnan eller ett skal.`; };
    const place = z => { if (q.locked || !q.vald) return; if (q.plac[z].length >= 12) { hint.textContent = "Det får inte plats fler där."; return; } q.plac[z].push(q.vald); q.hist.push(z); this.draw(root, q); };
    let drag = null;
    root.addEventListener("pointerdown", e => {
      if (q.locked) return;
      const p = e.target.closest("[data-piece]"); if (!p) return;
      select(p.dataset.piece);
      drag = { ghost: null, x: e.clientX, y: e.clientY };
    });
    window.addEventListener("pointermove", e => {
      if (!drag) return;
      if (!drag.ghost && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 6) {
        drag.ghost = document.createElement("div"); drag.ghost.className = "ghost"; drag.ghost.innerHTML = delBild(q.vald, 40); document.body.appendChild(drag.ghost);
      }
      if (drag.ghost) { drag.ghost.style.left = e.clientX + "px"; drag.ghost.style.top = e.clientY + "px"; }
    });
    window.addEventListener("pointerup", e => {
      if (!drag) return; const d = drag; drag = null;
      if (d.ghost) { d.ghost.remove(); const el = document.elementFromPoint(e.clientX, e.clientY); const z = el && el.closest && el.closest("[data-zone]"); if (z && root.contains(z)) place(z.dataset.zone); }
    });
    root.addEventListener("click", e => {
      if (q.locked) return;
      if (e.target.closest("[data-clear]")) { q.plac = { karna: [], K: [], L: [] }; q.hist = []; this.draw(root, q); return; }
      if (e.target.closest("[data-undo]")) { const z = q.hist.pop(); if (z) { q.plac[z].pop(); this.draw(root, q); } return; }
      const z = e.target.closest("[data-zone]"); if (z) place(z.dataset.zone);
    });
    this.draw(root, q);
  },
  grade(root, q) {
    q.locked = true;
    const cnt = (z, k) => q.plac[z].filter(x => x === k).length;
    const K = Math.min(q.v.e, 2), L = q.v.e - K;
    const checks = [
      ["Protoner i kärnan", cnt("karna", "p") === q.v.p && cnt("K", "p") + cnt("L", "p") === 0],
      ["Neutroner i kärnan", cnt("karna", "n") === q.v.n && cnt("K", "n") + cnt("L", "n") === 0],
      ["Elektroner i K-skalet", cnt("K", "e") === K && cnt("karna", "e") === 0],
      ["Elektroner i L-skalet", cnt("L", "e") === L]
    ];
    const right = checks.filter(c => c[1]).length;
    root.querySelector(".stage").classList.add(right === 4 ? "is-right" : "is-wrong");
    return { ok: right === 4, right, total: 4,
      facit: `<div class="facit-build">${atom(q.v.p, q.v.n, q.v.e)}<ul class="facit-list">${checks.map(([t, ok]) => `<li class="${ok ? "r" : "w"}">${ok ? "✓" : "✗"} ${t}</li>`).join("")}
        <li>Kärnan: ${q.v.p} p + ${q.v.n} n · K-skalet: ${K} e${L ? ` · L-skalet: ${L} e` : ""}</li></ul></div>` };
  }
};

/* NAMNGE SKAL */
TYPER.skal = {
  namn: ["K", "L", "M", "N", "O", "P"],
  // K-skalet kommer aldrig ensamt: då markeras även ett slumpat annat skal (A och B)
  setup(q) { const k = q.v.skal; q.lista = k === 1 ? [1, 2 + rnd(5)] : [k]; },
  instr: q => q.lista.length > 1 ? "Titta på atomen. Svara på frågorna om de två markerade skalen A och B." : "Titta på atomen. Svara på frågorna om det markerade skalet.",
  html(q) {
    const two = q.lista.length > 1, top = Math.max(...q.lista), n = Math.min(6, Math.max(top + 1, 3)), c = 150;
    const marks = [[45, 268, 22, "A"], [135, 32, 22, "B"]];
    let g = `<svg class="skalsvg" viewBox="0 0 300 300" role="img" aria-label="Atom med ${n} skal där ${two ? "två skal" : "ett skal"} är markerade">`;
    for (let i = 1; i <= n; i++) { const R = 30 + i * 19, on = q.lista.includes(i); g += `<circle cx="${c}" cy="${c}" r="${R}" fill="none" stroke="${on ? "var(--accent)" : "var(--shell)"}" stroke-width="${on ? 8 : 3}"/>`; }
    g += `<circle cx="${c}" cy="${c}" r="20" fill="url(#gP)"/><circle cx="${c - 6}" cy="${c - 5}" r="9" fill="url(#gN)"/><circle cx="${c + 7}" cy="${c + 6}" r="9" fill="url(#gN)"/>`;
    q.lista.forEach((k, j) => {
      const [ang, lx, ly, lab] = marks[j], R = 30 + k * 19, t = ang * Math.PI / 180;
      g += `<line x1="${c + R * Math.cos(t)}" y1="${c - R * Math.sin(t)}" x2="${lx}" y2="${ly}" stroke="var(--accent)" stroke-width="2.5"/><circle cx="${lx}" cy="${ly}" r="14" fill="var(--accent)"/><text x="${lx}" y="${ly + 6}" text-anchor="middle" font-size="16" font-weight="900" fill="var(--accent-ink)">${two ? lab : "?"}</text>`;
    });
    g += "</svg>";
    const tre = !!q.task.treFragor;
    const block = (j) => { const lab = two ? ` ${"AB"[j]}` : "", id = i => `${q.uid}-s${j}${i}`;
      return `${two ? `<li class="skalhead">Skal${lab}</li>` : ""}
      <li><label for="${id(0)}">Vad heter ${two ? "skal" + lab : "det markerade skalet"}?</label><input class="blank" id="${id(0)}" autocomplete="off" autocapitalize="off" spellcheck="false"></li>
      <li><label for="${id(1)}">Hur många elektroner får som mest plats i ${two ? "skal" + lab : "skalet"} om det är atomens yttersta skal?</label><input class="blank" id="${id(1)}" inputmode="numeric" autocomplete="off"></li>${tre ? `
      <li><label for="${id(2)}">Hur många elektroner får som mest plats i ${two ? "skal" + lab : "skalet"} om det <u>inte</u> är atomens yttersta skal?</label><input class="blank" id="${id(2)}" inputmode="numeric" autocomplete="off"></li>` : ""}`; };
    return `<div class="markera">${g}<ol class="fields plain">${q.lista.map((k, j) => block(j)).join("")}</ol></div>`;
  },
  grade(root, q) {
    const f = [...root.querySelectorAll(".blank")], tre = !!q.task.treFragor, per = tre ? 3 : 2, two = q.lista.length > 1;
    let right = 0; const txt = [];
    q.lista.forEach((k, j) => {
      const L = this.namn[k - 1], max = k === 1 ? 2 : 8, inre = 2 * k * k, ff = f.slice(j * per, j * per + per);
      const oks = [norm(ff[0].value).replace(/-?skal(et)?$/, "").trim() === L.toLowerCase(), norm(ff[1].value) === String(max)];
      if (tre) oks.push(norm(ff[2].value) === String(inre));
      oks.forEach((ok, i) => { ff[i].classList.add(ok ? "is-right" : "is-wrong"); if (ok) right++; });
      txt.push(`<p>${two ? `<b>Skal ${"AB"[j]}:</b> ` : ""}Skal nummer ${k} inifrån är <b>${L}-skalet</b>. Som yttersta skal rymmer det högst <b>${max}</b> elektroner.${tre ? ` Om det inte är yttersta skalet rymmer det högst <b>${inre}</b>.` : ""}</p>`);
    });
    return { ok: right === f.length, right, total: f.length, facit: txt.join("") };
  }
};

/* BYGG MED KVARKAR */
TYPER.kvark = {
  instr: q => `Bygg en <b>${q.mal}</b> av tre kvarkar. Tryck på en kvark för att lägga den i en ruta. Tryck på en ruta för att tömma den.`,
  setup(q) { q.mal = Math.random() < .5 ? "proton" : "neutron"; q.val = [null, null, null]; },
  ladd: { u: "+2/3", d: "−1/3" },
  html(q) {
    return `<div class="quarkbuild"><div class="slots">${[0, 1, 2].map(i => `<button type="button" class="slot" data-slot="${i}" aria-label="Ruta ${i + 1}">?</button>`).join("")}</div>
      ${q.v.visaLaddning ? `<p class="hint" data-sum>Laddning: 0</p>` : ""}
      <div class="tray">${["u", "d"].map(k => `<button type="button" class="qpick q q-${k}" data-quark="${k}"><b>${k}</b>${k === "u" ? "up" : "down"}${q.v.visaLaddning ? `<small>${this.ladd[k]}</small>` : ""}</button>`).join("")}</div></div>`;
  },
  mount(root, q) {
    const draw = () => {
      root.querySelectorAll(".slot").forEach((s, i) => { const k = q.val[i]; s.className = "slot" + (k ? ` q-${k} filled` : ""); s.innerHTML = k ? `<b>${k}</b>${q.v.visaLaddning ? `<small>${this.ladd[k]}</small>` : ""}` : "?"; });
      const sum = root.querySelector("[data-sum]");
      if (sum) { const t = q.val.reduce((a, k) => a + (k === "u" ? 2 : k === "d" ? -1 : 0), 0); sum.textContent = "Laddning: " + (t === 0 ? "0" : (t > 0 ? "+" : "−") + (t % 3 === 0 ? Math.abs(t / 3) : Math.abs(t) + "/3")); }
    };
    root.addEventListener("click", e => {
      if (q.locked) return;
      const p = e.target.closest("[data-quark]"); if (p) { const i = q.val.indexOf(null); if (i >= 0) { q.val[i] = p.dataset.quark; draw(); } return; }
      const s = e.target.closest("[data-slot]"); if (s) { q.val[+s.dataset.slot] = null; draw(); }
    });
    draw();
  },
  grade(root, q) {
    q.locked = true;
    const want = q.mal === "proton" ? "duu" : "ddu", got = q.val.map(x => x || "").sort().join("");
    const ok = got === want;
    root.querySelector(".slots").classList.add(ok ? "is-right" : "is-wrong");
    return { ok, right: ok ? 1 : 0, total: 1,
      facit: q.mal === "proton" ? `<p>En proton består av <b>två up och en down</b> (uud): +2/3 + 2/3 − 1/3 = +1.</p>` : `<p>En neutron består av <b>en up och två down</b> (udd): +2/3 − 1/3 − 1/3 = 0.</p>` };
  }
};


/* KVARKTABELL – pussel: symboler och namn till rätt generation och laddning */
TYPER.kvarktabell = {
  rad: [["u", "Uppkvark", "c", "Charmkvark", "t", "Toppkvark"], ["d", "Nedkvark", "s", "Särkvark", "b", "Bottenkvark"]],
  instr: () => "Dra kvarkarna och deras namn till rätt plats i tabellen, eller tryck på en bit och sedan på en ruta. Tryck på en ifylld ruta för att lägga tillbaka biten.",
  setup(q) {
    q.fyllt = {}; q.vald = null;
    q.sym = shuffle(["u", "d", "c", "s", "t", "b"]);
    q.namn = shuffle(["Uppkvark", "Nedkvark", "Charmkvark", "Särkvark", "Toppkvark", "Bottenkvark"]);
  },
  ratt(slot) { const [g, r, k] = slot.split("-"); return this.rad[+r][+g * 2 + (k === "s" ? 0 : 1)]; },
  bit(v) { return v.length === 1 ? `<span class="qsym q-${v}"><b>${v}</b></span>` : `<span class="qname">${v}</span>`; },
  html(q) {
    const gen = [["1:a generationen", "Lättast och mest stabil"], ["2:a generationen", "Tyngre och mindre stabil"], ["3:e generationen", "Tyngst och minst stabil"]];
    const cell = (g, r) => `<div class="qrow ${r ? "neg" : "pos"}"><div class="qch"><b>${r ? "Negativ" : "Positiv"} laddning</b><span class="frac">${r ? "−" : "+"}<span><i>${r ? 1 : 2}</i><i>3</i></span></span></div>
      <div class="qslots"><button type="button" class="qslot" data-qslot="${g}-${r}-s" aria-label="${gen[g][0]}, ${r ? "negativ" : "positiv"}, symbol">Symbol</button>
      <button type="button" class="qslot" data-qslot="${g}-${r}-n" aria-label="${gen[g][0]}, ${r ? "negativ" : "positiv"}, namn">Namn</button></div></div>`;
    return `<div class="qtab">
      <div class="qtray"><div><p class="fl">Kvarkar (symboler)</p><div class="qpool" data-pool="sym"></div></div>
        <div><p class="fl">Namn på kvarkar</p><div class="qpool" data-pool="namn"></div></div></div>
      <div class="qgens">${gen.map(([t, u], g) => `<div class="qgen g${g}"><h4>${t}</h4><p>${u}</p>${cell(g, 0)}${cell(g, 1)}</div>`).join("")}</div>
      <p class="hint" data-hint>Välj en bit.</p></div>`;
  },
  draw(root, q) {
    const placed = new Set(Object.values(q.fyllt));
    root.querySelector('[data-pool="sym"]').innerHTML = q.sym.filter(v => !placed.has(v)).map(v => `<button type="button" class="qbit" data-bit="${v}" aria-pressed="${q.vald === v}">${this.bit(v)}</button>`).join("") || '<span class="hint">Alla placerade</span>';
    root.querySelector('[data-pool="namn"]').innerHTML = q.namn.filter(v => !placed.has(v)).map(v => `<button type="button" class="qbit" data-bit="${v}" aria-pressed="${q.vald === v}">${this.bit(v)}</button>`).join("") || '<span class="hint">Alla placerade</span>';
    root.querySelectorAll("[data-qslot]").forEach(b => { const v = q.fyllt[b.dataset.qslot]; b.classList.toggle("filled", !!v); b.innerHTML = v ? this.bit(v) : (b.dataset.qslot.endsWith("s") ? "Symbol" : "Namn"); });
  },
  mount(root, q) {
    const hint = root.querySelector("[data-hint]");
    const place = slot => {
      if (q.locked || !q.vald) return false;
      const wantSym = slot.endsWith("-s"), isSym = q.vald.length === 1;
      if (wantSym !== isSym) { hint.textContent = isSym ? "Symboler ska i rutorna för symbol." : "Namn ska i rutorna för namn."; return false; }
      for (const k in q.fyllt) if (q.fyllt[k] === q.vald) delete q.fyllt[k];
      q.fyllt[slot] = q.vald; q.vald = null; hint.textContent = "Välj nästa bit."; this.draw(root, q); return true;
    };
    root.addEventListener("click", e => {
      if (q.locked) return;
      const bit = e.target.closest("[data-bit]");
      if (bit) { q.vald = q.vald === bit.dataset.bit ? null : bit.dataset.bit; hint.textContent = q.vald ? "Tryck på rutan där den ska ligga." : "Välj en bit."; this.draw(root, q); return; }
      const sl = e.target.closest("[data-qslot]"); if (!sl) return;
      if (q.vald) place(sl.dataset.qslot);
      else if (q.fyllt[sl.dataset.qslot]) { delete q.fyllt[sl.dataset.qslot]; this.draw(root, q); }
    });
    let drag = null;
    const move = e => {
      if (!drag) return;
      if (!drag.ghost && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 6) { drag.ghost = document.createElement("div"); drag.ghost.className = "ghost"; drag.ghost.innerHTML = this.bit(drag.v); document.body.appendChild(drag.ghost); }
      if (drag.ghost) { drag.ghost.style.left = e.clientX + "px"; drag.ghost.style.top = e.clientY + "px"; }
    };
    const up = e => {
      if (!drag) return; const d = drag; drag = null;
      if (!d.ghost) return; d.ghost.remove();
      const el = document.elementFromPoint(e.clientX, e.clientY), sl = el && el.closest && el.closest("[data-qslot]");
      if (sl && root.contains(sl)) { q.vald = d.v; place(sl.dataset.qslot); }
      root.dataset.justDragged = "1"; setTimeout(() => delete root.dataset.justDragged, 0);
    };
    root.addEventListener("pointerdown", e => { if (q.locked) return; const b = e.target.closest("[data-bit]"); if (b) drag = { v: b.dataset.bit, x: e.clientX, y: e.clientY }; });
    window.addEventListener("pointermove", move); window.addEventListener("pointerup", up);
    this.draw(root, q);
  },
  grade(root, q) {
    q.locked = true; let right = 0;
    const slots = [...root.querySelectorAll("[data-qslot]")];
    slots.forEach(b => { const ok = q.fyllt[b.dataset.qslot] === this.ratt(b.dataset.qslot); b.classList.add(ok ? "is-right" : "is-wrong"); if (ok) right++; });
    const g = ["1:a", "2:a", "3:e"];
    return { ok: right === 12, right, total: 12,
      facit: `<div class="tablewrap"><table class="rules qtable"><thead><tr><th>Laddning</th>${g.map(x => `<th>${x} gen.</th>`).join("")}</tr></thead><tbody>
        ${this.rad.map((r, i) => `<tr><td><b>${i ? "−1/3" : "+2/3"}</b></td>${[0, 1, 2].map(k => `<td><b>${r[k * 2]}</b> ${r[k * 2 + 1]}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` };
  }
};


/* ---------- Atomnotation: hjälpfunktioner ---------- */
const laddning = ch => { if (!ch) return 0; const m = String(ch).match(/^(\d*)([+-])$/); return m ? (m[2] === "+" ? 1 : -1) * (+m[1] || 1) : 0; };
const partiklar = v => ({ p: v.Z, n: v.A - v.Z, e: v.Z - laddning(v.ch) });
const chText = ch => ch ? String(ch).replace("-", "−") : "";
const etikett = v => v.ch ? (laddning(v.ch) > 0 ? "positiv jon" : "negativ jon") : `${v.namn}-${v.A}`;
function reglageRad(id, label, val, max, locked) {
  return `<div class="slider"><label for="${id}">${label}</label>
    <button type="button" class="stepb" data-step="-1" data-for="${id}" ${locked ? "disabled" : ""} aria-label="Minska ${label.toLowerCase()}">−</button>
    <input type="range" id="${id}" min="0" max="${max}" value="${val}" ${locked ? "disabled" : ""}>
    <button type="button" class="stepb" data-step="1" data-for="${id}" ${locked ? "disabled" : ""} aria-label="Öka ${label.toLowerCase()}">+</button>
    <output for="${id}">${val}</output></div>`;
}

/* REGLAGE – eleven ställer in antalet partiklar efter en given atomnotation */
TYPER.reglage = {
  instr: q => q.v.ch ? "Ställ in reglagen så att du bygger jonen i rutan." : q.task.skal
    ? "Ställ in reglagen så att du bygger atomen i rutan. Placera elektronerna i rätt skal."
    : "Ställ in reglagen så att du bygger atomen i rutan.",
  rader(q) { return q.task.skal ? [["p", "Protoner"], ["n", "Neutroner"], ["K", "Elektroner i K-skalet"], ["L", "Elektroner i L-skalet"]] : [["p", "Protoner"], ["n", "Neutroner"], ["e", "Elektroner"]]; },
  html(q) {
    return `<div class="regl"><div class="given"><p class="fl">Bygg</p>${nota(q.v.A, q.v.Z, q.v.X, q.v.ch || "", "big")}<p class="gname">${esc(etikett(q.v))}</p></div>
      <div class="sliders">${this.rader(q).map(([k, l]) => reglageRad(`${q.uid}-${k}`, l, 0, 12)).join("")}</div>
      <div class="livepic" aria-hidden="true"></div></div>`;
  },
  val(root, q) { const o = {}; this.rader(q).forEach(([k]) => o[k] = +root.querySelector(`#${q.uid}-${k}`).value); return o; },
  draw(root, q) {
    const v = this.val(root, q);
    root.querySelector(".livepic").innerHTML = q.task.skal ? atom(v.p, v.n, v.K + v.L, { shells: [v.K, v.L], alwaysL: true }) : atom(v.p, v.n, v.e);
    root.querySelectorAll(".slider").forEach(r => r.querySelector("output").textContent = r.querySelector("input").value);
  },
  mount(root, q) {
    root.addEventListener("input", () => this.draw(root, q));
    root.addEventListener("click", e => { const b = e.target.closest("[data-step]"); if (!b || q.locked) return; const i = root.querySelector("#" + b.dataset.for); i.value = Math.max(0, Math.min(+i.max, +i.value + +b.dataset.step)); this.draw(root, q); });
    this.draw(root, q);
  },
  grade(root, q) {
    q.locked = true; const t = partiklar(q.v), v = this.val(root, q);
    const want = q.task.skal ? { p: t.p, n: t.n, K: Math.min(t.e, 2), L: Math.max(t.e - 2, 0) } : t;
    let right = 0;
    this.rader(q).forEach(([k]) => { const ok = v[k] === want[k]; root.querySelector(`#${q.uid}-${k}`).closest(".slider").classList.add(ok ? "is-right" : "is-wrong"); if (ok) right++; });
    root.querySelectorAll("input,button").forEach(x => x.disabled = true);
    const rows = this.rader(q).map(([k, l]) => `<li>${l}: <b>${want[k]}</b></li>`).join("");
    return { ok: right === this.rader(q).length, right, total: this.rader(q).length,
      facit: `<div class="facit-build">${q.task.skal ? atom(t.p, t.n, t.e, { alwaysL: true }) : atom(t.p, t.n, t.e)}<div><ul class="facit-list">${rows}</ul>
        <p>Protoner = atomnummer (${q.v.Z}). Neutroner = masstal − atomnummer (${q.v.A} − ${q.v.Z} = ${t.n}).${q.v.ch ? ` Laddningen ${chText(q.v.ch)} betyder ${laddning(q.v.ch) > 0 ? `${laddning(q.v.ch)} elektron${laddning(q.v.ch) > 1 ? "er" : ""} färre` : `${-laddning(q.v.ch)} elektron${laddning(q.v.ch) < -1 ? "er" : ""} fler`} än protoner: ${t.e} elektroner.` : q.task.skal ? ` K-skalet rymmer högst 2 elektroner, resten hamnar i L-skalet.` : ` I en neutral atom är elektronerna lika många som protonerna.`}</p></div></div>` };
  }
};


/* Början av periodiska systemet (period 1–3) – visas där eleven ska hitta grundämnet */
const PERIODISKA = [
  [1,"H","Väte",1,1],[2,"He","Helium",1,18],
  [3,"Li","Litium",2,1],[4,"Be","Beryllium",2,2],[5,"B","Bor",2,13],[6,"C","Kol",2,14],[7,"N","Kväve",2,15],[8,"O","Syre",2,16],[9,"F","Fluor",2,17],[10,"Ne","Neon",2,18],
  [11,"Na","Natrium",3,1],[12,"Mg","Magnesium",3,2],[13,"Al","Aluminium",3,13],[14,"Si","Kisel",3,14],[15,"P","Fosfor",3,15],[16,"S","Svavel",3,16],[17,"Cl","Klor",3,17],[18,"Ar","Argon",3,18]
];
function periodiska() {
  return `<div class="ptab"><p class="fl">Periodiska systemet – början</p><div class="tablewrap"><div class="pgrid" role="table" aria-label="Periodiska systemet, period 1 till 3">
    ${PERIODISKA.map(([z, x, n, r, c]) => `<div class="pel" role="cell" style="grid-row:${r};grid-column:${c}"><span class="pz">${z}</span><b>${x}</b><span class="pn">${n}</span></div>`).join("")}
    <div class="pkey" style="grid-row:1;grid-column:3/13" aria-hidden="true"><span class="pel ex"><span class="pz">atomnummer</span><b>X</b><span class="pn">namn</span></span></div>
  </div></div></div>`;
}

/* SKRIV NOTATION – eleven ser atomen och skriver atomnotationen */
TYPER.skrivnotation = {
  instr: q => q.task.visaReglage ? "Titta på atomen och reglagen. Skriv atomens atomnotation." : "Räkna partiklarna i bilden. Protoner är +, elektroner är − och neutroner har ingen laddning. Skriv atomens atomnotation.",
  html(q) {
    const t = partiklar(q.v);
    return `<div class="regl"><div class="livepic big" aria-label="Bild av en atom">${atom(t.p, t.n, t.e, { spread: !q.task.visaReglage })}</div>
      ${q.task.visaReglage ? `<div class="sliders">${reglageRad(q.uid + "-p", "Protoner", t.p, 12, true)}${reglageRad(q.uid + "-n", "Neutroner", t.n, 12, true)}${reglageRad(q.uid + "-e", "Elektroner", t.e, 12, true)}</div>` : ""}
      <div class="notin"><p class="fl">Atomnotation</p><div class="notbox">
        <span class="nums"><input class="blank" id="${q.uid}-A" inputmode="numeric" autocomplete="off" aria-label="Masstal" placeholder="?"><input class="blank" id="${q.uid}-Z" inputmode="numeric" autocomplete="off" aria-label="Atomnummer" placeholder="?"></span>
        <input class="blank sym" id="${q.uid}-X" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Kemisk beteckning" placeholder="?"></div>
        <p class="hint">Masstal överst, atomnummer nederst, kemisk beteckning till höger.</p></div></div>${q.task.periodiska !== false ? periodiska() : ""}`;
  },
  grade(root, q) {
    const g = id => root.querySelector(`#${q.uid}-${id}`);
    const oks = [[g("A"), norm(g("A").value) === String(q.v.A)], [g("Z"), norm(g("Z").value) === String(q.v.Z)], [g("X"), g("X").value.trim().toLowerCase() === q.v.X.toLowerCase()]];
    let right = 0; oks.forEach(([el, ok]) => { el.classList.add(ok ? "is-right" : "is-wrong"); if (ok) right++; });
    const t = partiklar(q.v);
    return { ok: right === 3, right, total: 3,
      facit: `<div class="facit-build">${nota(q.v.A, q.v.Z, q.v.X, "", "mid", true)}<p>${t.p} protoner ger atomnummer <b>${q.v.Z}</b>, alltså <b>${q.v.X}</b> (${q.v.namn}). Masstalet är protoner + neutroner: ${t.p} + ${t.n} = <b>${q.v.A}</b>.</p></div>` };
  }
};


/* ÄNDRA ATOMEN – gör om en atom till en isotop, en jon eller ett annat ämne */
TYPER.andra = {
  malText: { isotop: "en <b>isotop</b> av samma ämne", "jon+": "en <b>positiv jon</b> av samma ämne", "jon-": "en <b>negativ jon</b> av samma ämne", amne: "ett <b>annat ämne</b>" },
  setup(q) { const st = q.task.start; q.a0 = st[rnd(st.length)]; q.p0 = partiklar(q.a0); },
  instr: q => `Här är en ${q.a0.namn}atom. Ändra den med reglagen så att den blir ${TYPER.andra.malText[q.v.mal]}.`,
  html(q) {
    const t = q.p0;
    return `<div class="regl"><div class="given"><p class="fl">Från början</p>${nota(q.a0.A, q.a0.Z, q.a0.X, "", "big")}<p class="gname">${q.a0.namn}-${q.a0.A}</p></div>
      <div class="sliders">${reglageRad(q.uid + "-p", "Protoner", t.p, 12)}${reglageRad(q.uid + "-n", "Neutroner", t.n, 12)}${reglageRad(q.uid + "-e", "Elektroner", t.e, 12)}</div>
      <div class="livepic" aria-hidden="true"></div></div>`;
  },
  val(root, q) { const g = k => +root.querySelector(`#${q.uid}-${k}`).value; return { p: g("p"), n: g("n"), e: g("e") }; },
  draw(root, q) {
    const v = this.val(root, q);
    root.querySelector(".livepic").innerHTML = atom(v.p, v.n, v.e);
    root.querySelectorAll(".slider").forEach(r => r.querySelector("output").textContent = r.querySelector("input").value);
  },
  mount(root, q) { TYPER.reglage.mount.call(this, root, q); },
  grade(root, q) {
    q.locked = true; const v = this.val(root, q), o = q.p0, m = q.v.mal;
    const krav = m === "isotop" ? [["Lika många protoner (samma ämne)", v.p === o.p], ["Annat antal neutroner", v.n !== o.n], ["Lika många elektroner som protoner (ingen laddning)", v.e === v.p]]
      : m === "jon+" ? [["Lika många protoner (samma ämne)", v.p === o.p], ["Lika många neutroner", v.n === o.n], ["Färre elektroner än protoner (positiv laddning)", v.e < v.p]]
      : m === "jon-" ? [["Lika många protoner (samma ämne)", v.p === o.p], ["Lika många neutroner", v.n === o.n], ["Fler elektroner än protoner (negativ laddning)", v.e > v.p]]
      : [["Annat antal protoner", v.p !== o.p && v.p > 0]];
    const right = krav.filter(k => k[1]).length;
    root.querySelector(".sliders").classList.add(right === krav.length ? "is-right" : "is-wrong");
    const forkl = m === "isotop" ? "En isotop har samma antal protoner men ett annat antal neutroner. Masstalet ändras, men ämnet är detsamma."
      : m === "jon+" ? "En positiv jon har förlorat elektroner. Den har färre elektroner än protoner och får därför positiv laddning. Ämnet och masstalet är detsamma."
      : m === "jon-" ? "En negativ jon har tagit upp elektroner. Den har fler elektroner än protoner och får därför negativ laddning. Ämnet och masstalet är detsamma."
      : "Antalet protoner bestämmer ämnet. Ändrar du antalet protoner blir det ett annat ämne.";
    return { ok: right === krav.length, right, total: krav.length,
      facit: `<ul class="facit-list">${krav.map(([t, ok]) => `<li class="${ok ? "r" : "w"}">${ok ? "✓" : "✗"} ${t}</li>`).join("")}</ul><p>${forkl}</p>` };
  }
};


/* ISOTOPTABELL – fyll i antalet partiklar för flera isotoper */
TYPER.isotoptabell = {
  rader: [["p", "Protoner", "st"], ["n", "Neutroner", "st"], ["e", "Elektroner", "st"], ["A", "Masstal", ""]],
  instr: () => "Fyll i antalet partiklar för varje isotop.",
  facitVarde(iso, k) { return k === "A" ? iso.A : partiklar(iso)[k]; },
  html(q) {
    const I = q.v.isotoper;
    return `<div class="tablewrap"><table class="isotab"><thead><tr><th></th>${I.map(i => `<th><span class="isoname">${esc(i.namn)}</span><span class="isosub">${esc(i.sub)}</span></th>`).join("")}</tr></thead>
      <tbody>${this.rader.map(([k, l, u]) => `<tr><th scope="row">${l}:</th>${I.map((i, j) => `<td><span class="isocell"><input class="blank" id="${q.uid}-${k}${j}" inputmode="numeric" autocomplete="off" aria-label="${l} för ${esc(i.sub)}">${u ? `<span>${u}</span>` : ""}</span></td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  },
  grade(root, q) {
    let right = 0, total = 0;
    this.rader.forEach(([k]) => q.v.isotoper.forEach((iso, j) => {
      const el = root.querySelector(`#${q.uid}-${k}${j}`), ok = norm(el.value) === String(this.facitVarde(iso, k));
      el.classList.add(ok ? "is-right" : "is-wrong"); total++; if (ok) right++;
    }));
    const I = q.v.isotoper;
    return { ok: right === total, right, total,
      facit: `<div class="tablewrap"><table class="rules isofacit"><thead><tr><th></th>${I.map(i => `<th>${esc(i.sub)}<br>${nota(i.A, i.Z, "H", "", "")}</th>`).join("")}</tr></thead><tbody>
        ${this.rader.map(([k, l]) => `<tr><td>${l}</td>${I.map(i => `<td><b>${this.facitVarde(i, k)}</b></td>`).join("")}</tr>`).join("")}</tbody></table></div>
        <p>Alla vätets isotoper har 1 proton och (som neutrala atomer) 1 elektron. Det som skiljer är antalet neutroner, och därför masstalet.</p>` };
  }
};


/* FLERVAL – välj det bästa alternativet. Varje alternativ: t = text, s = "ratt" | "delvis" | "fel", f = förklaring.
   Valfritt: bild: "[[atom p=6 n=6 e=6]]" på uppgiften eller på en variant visas ovanför alternativen. */
TYPER.flerval = {
  instr: q => esc(q.v.fraga),
  setup(q) { q.alt = shuffle(q.v.alt); q.val = null; },
  html(q) { const bild = q.v.bild || q.task.bild; return `${bild ? `<div class="mcbild">${MD.inline(bild)}</div>` : ""}<div class="mc" role="radiogroup">${q.alt.map((a, i) => `<button type="button" class="mcopt" role="radio" aria-checked="false" data-mc="${i}"><span class="mcl">${"ABCD"[i]}</span><span>${esc(a.t)}</span></button>`).join("")}</div>`; },
  mount(root, q) { root.addEventListener("click", e => { const b = e.target.closest("[data-mc]"); if (!b || q.locked) return; q.val = +b.dataset.mc; root.querySelectorAll("[data-mc]").forEach(x => x.setAttribute("aria-checked", x === b)); }); },
  grade(root, q) {
    q.locked = true; const a = q.val == null ? null : q.alt[q.val], r = q.alt.find(x => x.s === "ratt");
    root.querySelectorAll("[data-mc]").forEach((b, i) => { const x = q.alt[i]; if (x === r) b.classList.add("is-right"); else if (i === q.val) b.classList.add(x.s === "delvis" ? "is-part" : "is-wrong"); });
    const ok = a && a.s === "ratt";
    return { ok, right: ok ? 1 : 0, total: 1, verdict: !a ? "Du valde inget alternativ." : a.s === "delvis" ? "Delvis rätt." : null, part: !!a && a.s === "delvis",
      facit: `${a && !ok ? `<p>Ditt svar: ${esc(a.t)}${a.f ? ` – <i>${esc(a.f)}</i>` : ""}</p>` : ""}<p><b>${esc(r.t)}</b>${r.f ? ` – ${esc(r.f)}` : ""}</p>` };
  }
};

/* SANT ELLER FALSKT – lista med påståenden: [text, true/false] */
TYPER.santfalskt = {
  instr: () => "Är påståendena sanna eller falska?",
  setup(q) { q.rader = shuffle(q.v.pst); q.val = q.rader.map(() => null); },
  html(q) { return `<div class="sf">${q.rader.map(([t], i) => `<div class="sfrow" data-row="${i}"><span>${esc(t)}</span><span class="sfbtns"><button type="button" class="sfb" data-sf="${i}" data-v="1" aria-pressed="false">Sant</button><button type="button" class="sfb" data-sf="${i}" data-v="0" aria-pressed="false">Falskt</button></span></div>`).join("")}</div>`; },
  mount(root, q) { root.addEventListener("click", e => { const b = e.target.closest("[data-sf]"); if (!b || q.locked) return; const i = +b.dataset.sf; q.val[i] = b.dataset.v === "1"; root.querySelectorAll(`[data-sf="${i}"]`).forEach(x => x.setAttribute("aria-pressed", x === b)); }); },
  grade(root, q) {
    q.locked = true; let right = 0;
    q.rader.forEach(([, v], i) => { const ok = q.val[i] === v; root.querySelector(`[data-row="${i}"]`).classList.add(ok ? "is-right" : "is-wrong"); if (ok) right++; });
    return { ok: right === q.rader.length, right, total: q.rader.length,
      facit: `<ul class="facit-list">${q.rader.map(([t, v]) => `<li>${esc(t)} <b>${v ? "Sant" : "Falskt"}</b></li>`).join("")}</ul>` };
  }
};

/* VILKET PASSAR INTE IN – en variant har en eller flera frågor (fragor), var och en med ord, svar och förklaring f */
TYPER.udda = {
  instr: q => q.fr.length > 1 ? `Vilket begrepp passar inte in? Välj ett i varje grupp.` : "Vilket begrepp passar inte in? Välj ett.",
  setup(q) { q.fr = shuffle(q.v.fragor || [q.v]).map(f => ({ ...f, ord: shuffle(f.ord) })); q.val = q.fr.map(() => null); },
  html(q) { return `<div class="uddalist">${q.fr.map((f, k) => `<div class="uddagrp" data-grp="${k}">${q.fr.length > 1 ? `<p class="fl">Grupp ${k + 1}</p>` : ""}<div class="udda">${f.ord.map((o, i) => `<button type="button" class="uddab" data-ud="${k}-${i}" aria-pressed="false">${esc(o)}</button>`).join("")}</div></div>`).join("")}</div>`; },
  mount(root, q) { root.addEventListener("click", e => { const b = e.target.closest("[data-ud]"); if (!b || q.locked) return; const [k, i] = b.dataset.ud.split("-").map(Number); q.val[k] = i; root.querySelectorAll(`[data-ud^="${k}-"]`).forEach(x => x.setAttribute("aria-pressed", x === b)); }); },
  grade(root, q) {
    q.locked = true; let right = 0;
    q.fr.forEach((f, k) => {
      const ok = q.val[k] != null && f.ord[q.val[k]] === f.svar; if (ok) right++;
      f.ord.forEach((o, i) => { const b = root.querySelector(`[data-ud="${k}-${i}"]`); if (o === f.svar) b.classList.add("is-right"); else if (i === q.val[k]) b.classList.add("is-wrong"); });
    });
    return { ok: right === q.fr.length, right, total: q.fr.length,
      facit: q.fr.map((f, k) => `<p>${q.fr.length > 1 ? `Grupp ${k + 1}: ` : ""}<b>${esc(f.svar)}</b> – ${esc(f.f)}</p>`).join("") };
  }
};

/* SORTERA – lägg varje begrepp i rätt grupp. grupper: [namn, namn], saker: [[text, gruppindex]] */
TYPER.sortera = {
  instr: q => `Sortera begreppen. Tryck på rätt grupp för varje begrepp.`,
  setup(q) { q.rader = shuffle(q.v.saker); q.val = q.rader.map(() => null); },
  html(q) { return `<div class="sf">${q.rader.map(([t], i) => `<div class="sfrow" data-row="${i}"><span><b>${esc(t)}</b></span><span class="sfbtns">${q.v.grupper.map((g, k) => `<button type="button" class="sfb" data-so="${i}" data-v="${k}" aria-pressed="false">${esc(g)}</button>`).join("")}</span></div>`).join("")}</div>`; },
  mount(root, q) { root.addEventListener("click", e => { const b = e.target.closest("[data-so]"); if (!b || q.locked) return; const i = +b.dataset.so; q.val[i] = +b.dataset.v; root.querySelectorAll(`[data-so="${i}"]`).forEach(x => x.setAttribute("aria-pressed", x === b)); }); },
  grade(root, q) {
    q.locked = true; let right = 0;
    q.rader.forEach(([, g], i) => { const ok = q.val[i] === g; root.querySelector(`[data-row="${i}"]`).classList.add(ok ? "is-right" : "is-wrong"); if (ok) right++; });
    return { ok: right === q.rader.length, right, total: q.rader.length,
      facit: q.v.grupper.map((g, k) => `<p><b>${esc(g)}:</b> ${q.v.saker.filter(x => x[1] === k).map(x => esc(x[0])).join(", ")}</p>`).join("") };
  }
};


/* DRA TILL BESKRIVNING – varje begrepp dras till en beskrivning och kan bara användas en gång. par: [[begrepp, beskrivning]] */
TYPER.dra = {
  instr: q => esc(q.v.rubrik || "Dra varje begrepp till rätt beskrivning."),
  setup(q) { q.ord = shuffle(q.v.par.map(p => p[0])); q.rader = shuffle(q.v.par); q.fyllt = {}; q.vald = null; },
  html(q) {
    return `<div class="dra"><div class="drapool" data-pool></div>
      <div class="dralist">${q.rader.map(([, d], i) => `<div class="drarow"><button type="button" class="draslot" data-slot="${i}" aria-label="Lägg begrepp här: ${esc(d)}">Dra hit</button><span class="drad">${esc(d)}</span></div>`).join("")}</div>
      <p class="hint" data-hint>Dra ett begrepp till en beskrivning, eller tryck på begreppet och sedan på rutan.</p></div>`;
  },
  draw(root, q) {
    const lagda = new Set(Object.values(q.fyllt));
    root.querySelector("[data-pool]").innerHTML = q.ord.filter(o => !lagda.has(o)).map(o => `<button type="button" class="drabit" data-bit="${esc(o)}" aria-pressed="${q.vald === o}">${esc(o)}</button>`).join("") || `<span class="hint">Alla begrepp är placerade.</span>`;
    root.querySelectorAll("[data-slot]").forEach(b => { const v = q.fyllt[b.dataset.slot]; b.classList.toggle("filled", !!v); b.textContent = v || "Dra hit"; });
  },
  place(root, q, slot, ord) { for (const k in q.fyllt) if (q.fyllt[k] === ord) delete q.fyllt[k]; q.fyllt[slot] = ord; q.vald = null; this.draw(root, q); },
  mount(root, q) {
    root.addEventListener("click", e => {
      if (q.locked) return;
      const bit = e.target.closest("[data-bit]");
      if (bit) { q.vald = q.vald === bit.dataset.bit ? null : bit.dataset.bit; this.draw(root, q); return; }
      const sl = e.target.closest("[data-slot]"); if (!sl) return;
      if (q.vald) this.place(root, q, sl.dataset.slot, q.vald);
      else if (q.fyllt[sl.dataset.slot]) { delete q.fyllt[sl.dataset.slot]; this.draw(root, q); }
    });
    let drag = null;
    root.addEventListener("pointerdown", e => { if (q.locked) return; const b = e.target.closest("[data-bit]"); if (b) drag = { v: b.dataset.bit, x: e.clientX, y: e.clientY }; });
    window.addEventListener("pointermove", e => {
      if (!drag) return;
      if (!drag.g && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 6) { drag.g = document.createElement("div"); drag.g.className = "ghost drabit"; drag.g.textContent = drag.v; document.body.appendChild(drag.g); }
      if (drag.g) { drag.g.style.left = e.clientX + "px"; drag.g.style.top = e.clientY + "px"; }
    });
    window.addEventListener("pointerup", e => {
      if (!drag) return; const d = drag; drag = null; if (!d.g) return; d.g.remove();
      const el = document.elementFromPoint(e.clientX, e.clientY), row = el && el.closest && el.closest(".drarow");
      if (row && root.contains(row)) this.place(root, q, row.querySelector("[data-slot]").dataset.slot, d.v);
    });
    this.draw(root, q);
  },
  grade(root, q) {
    q.locked = true; let right = 0;
    q.rader.forEach(([b], i) => { const ok = q.fyllt[i] === b; root.querySelector(`[data-slot="${i}"]`).closest(".drarow").classList.add(ok ? "is-right" : "is-wrong"); if (ok) right++; });
    return { ok: right === q.rader.length, right, total: q.rader.length,
      facit: `<ul class="facit-list">${q.v.par.map(([b, d]) => `<li><b>${esc(b)}</b> → ${esc(d)}</li>`).join("")}</ul>` };
  }
};


/* DRA I TABELL – rader: [radnamn, kolumn 1, kolumn 2 …]. Eleven drar varje bit till rätt ruta; varje bit används en gång. */
TYPER.dratabell = {
  instr: q => esc(q.v.rubrik || "Dra varje bit till rätt ruta."),
  // "bild:x" = bara bild, "modell:x|Namn" = bild och namn
  visa(x, sm) {
    if (x.startsWith("bild:")) return delBild(x.slice(5), sm ? 30 : 46);
    if (x.startsWith("modell:")) { const [k, n] = x.slice(7).split("|"); return `<span class="mod">${delBild(k, sm ? 26 : 40)}<span>${esc(n)}</span></span>`; }
    return esc(x);
  },
  setup(q) { q.kol = q.v.rader[0].length - 1; q.rows = q.v.tidslinje ? q.v.rader.slice() : shuffle(q.v.rader); q.pool = [...Array(q.kol)].map((_, c) => shuffle(q.v.rader.map(r => r[c + 1]))); q.fyllt = {}; q.vald = null; },
  colOf(q, x) { return q.pool.findIndex(p => p.includes(x)); },
  html(q) {
    const h = q.v.rubriker || [];
    return `<div class="dra"><div class="drapools">${q.pool.map((p, c) => `<div class="drapool" data-pool="${c}" aria-label="${esc(h[c + 1] || "")}"></div>`).join("")}</div>
      ${q.v.tidslinje ? `<div class="tline" style="--n:${q.rows.length}">${q.rows.map((r, i) => `<div class="tlcol"><span class="tlyear">${esc(r[0])}</span><span class="tldot" aria-hidden="true"></span><button type="button" class="draslot" data-slot="${i}-0" aria-label="År ${esc(r[0])}">Dra hit</button></div>`).join("")}</div>`
      : `<div class="dtab" style="--k:${q.kol}"><div class="dthead">${h.map(x => `<span>${esc(x)}</span>`).join("")}</div>
      ${q.rows.map((r, i) => `<div class="dtrow"><b>${esc(r[0])}</b>${[...Array(q.kol)].map((_, c) => `<button type="button" class="draslot" data-slot="${i}-${c}" aria-label="${esc(r[0])}: ${esc(h[c + 1] || "")}">Dra hit</button>`).join("")}</div>`).join("")}</div>`}
      <p class="hint" data-hint>Dra en bit till rätt ruta, eller tryck på biten och sedan på rutan.</p></div>`;
  },
  draw(root, q) {
    const lagda = new Set(Object.values(q.fyllt));
    q.pool.forEach((p, c) => { root.querySelector(`[data-pool="${c}"]`).innerHTML = p.filter(x => !lagda.has(x)).map(x => `<button type="button" class="drabit${x.startsWith("bild:") ? " drapic" : x.length > 40 ? " long" : ""}" data-bit="${esc(x)}" aria-pressed="${q.vald === x}" aria-label="${esc(x.startsWith("modell:") ? x.split("|")[1] : x.replace("bild:", "bild av "))}">${this.visa(x)}</button>`).join("") || `<span class="hint">Klart</span>`; });
    root.querySelectorAll("[data-slot]").forEach(b => { const v = q.fyllt[b.dataset.slot]; b.classList.toggle("filled", !!v); b.classList.toggle("long", !!v && v.length > 40); b.innerHTML = v ? this.visa(v) : "Dra hit"; });
  },
  place(root, q, slot, x) {
    const hint = root.querySelector("[data-hint]");
    if (+slot.split("-")[1] !== this.colOf(q, x)) { hint.textContent = x.startsWith("bild:") ? "Bilder ska i bildkolumnen." : "Den biten hör till en annan kolumn."; return; }
    for (const k in q.fyllt) if (q.fyllt[k] === x) delete q.fyllt[k];
    q.fyllt[slot] = x; q.vald = null; hint.textContent = "Dra en bit till rätt ruta, eller tryck på biten och sedan på rutan."; this.draw(root, q);
  },
  mount(root, q) {
    root.addEventListener("click", e => {
      if (q.locked) return;
      const bit = e.target.closest("[data-bit]");
      if (bit) { q.vald = q.vald === bit.dataset.bit ? null : bit.dataset.bit; this.draw(root, q); return; }
      const sl = e.target.closest("[data-slot]"); if (!sl) return;
      if (q.vald) this.place(root, q, sl.dataset.slot, q.vald);
      else if (q.fyllt[sl.dataset.slot]) { delete q.fyllt[sl.dataset.slot]; this.draw(root, q); }
    });
    let drag = null;
    root.addEventListener("pointerdown", e => { if (q.locked) return; const b = e.target.closest("[data-bit]"); if (b) drag = { v: b.dataset.bit, x: e.clientX, y: e.clientY }; });
    window.addEventListener("pointermove", e => {
      if (!drag) return;
      if (!drag.g && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 6) { drag.g = document.createElement("div"); drag.g.className = "ghost drabit"; drag.g.innerHTML = this.visa(drag.v); document.body.appendChild(drag.g); }
      if (drag.g) { drag.g.style.left = e.clientX + "px"; drag.g.style.top = e.clientY + "px"; }
    });
    window.addEventListener("pointerup", e => {
      if (!drag) return; const d = drag; drag = null; if (!d.g) return; d.g.remove();
      const el = document.elementFromPoint(e.clientX, e.clientY), sl = el && el.closest && el.closest("[data-slot]");
      if (sl && root.contains(sl)) this.place(root, q, sl.dataset.slot, d.v);
    });
    this.draw(root, q);
  },
  grade(root, q) {
    q.locked = true; let right = 0, total = 0;
    q.rows.forEach((r, i) => r.slice(1).forEach((x, c) => { const b = root.querySelector(`[data-slot="${i}-${c}"]`), ok = q.fyllt[`${i}-${c}`] === x; b.classList.add(ok ? "is-right" : "is-wrong"); total++; if (ok) right++; }));
    return { ok: right === total, right, total,
      facit: `<ul class="facit-list">${q.v.rader.map(r => `<li><b>${esc(r[0])}</b> → ${r.slice(1).map(x => this.visa(x, true)).join(" → ")}</li>`).join("")}</ul>` };
  }
};


/* ---------- Namn på typerna och text för granskning ---------- */
const TYPNAMN = { dratabell: "Dra i tabell", dra: "Dra till beskrivning", flerval: "Flerval", santfalskt: "Sant eller falskt", udda: "Vilket passar inte in?", sortera: "Sortera", isotoptabell: "Fyll i tabell", andra: "Ändra med reglage", reglage: "Reglage", skrivnotation: "Skriva atomnotation", lucktext: "Lucktext", markera: "Märk ut i bild", para: "Para ihop", bygg: "Bygg atom", skal: "Elektronskal", kvark: "Bygg med kvarkar", kvarktabell: "Pussel" };
function variantText(t, v) {
  if (t.typ === "lucktext") return v.facit ? v.facit : esc(v.text).replace(/\[\*?([^\]]+)\]/g, (m, a) => `<b class="ans">${esc(a.split("/").map(x => x.split("|")[0]).join(" / "))}</b>`);
  if (t.typ === "para") return `${esc(v.rubrik || "")} ${v.par.map(([l, r]) => `${l.startsWith("bild:") ? "[bild: " + l.slice(5) + "]" : esc(l)} → <b>${esc(r)}</b>`).join(" · ")}`;
  if (t.typ === "bygg") return `${cap(v.namn)}: ${v.p} p, ${v.n} n, ${v.e} e`;
  if (t.typ === "skal") { const k = v.skal, L = "KLMNOP"[k - 1]; return `${L}-skalet${k === 1 ? " (alltid ihop med ett annat skal)" : ""} · max som yttersta: <b>${k === 1 ? 2 : 8}</b>${t.treFragor ? ` · annars: <b>${2 * k * k}</b>` : ""}`; }
  if (t.typ === "kvark") return v.visaLaddning ? "Laddningen står utskriven" : "Laddningen står inte utskriven";
  if (t.typ === "markera") return "Numreringen blandas varje gång";
  if (t.typ === "kvarktabell") return "Symboler och namn blandas varje gång";
  if (t.typ === "dratabell") return v.rader.map(r => `<b>${esc(r[0])}</b> → ${r.slice(1).map(x => TYPER.dratabell.visa(x, true)).join(" → ")}`).join(" · ");
  if (t.typ === "dra") return v.par.map(([b, d]) => `<b>${esc(b)}</b> → ${esc(d)}`).join(" · ");
  if (t.typ === "flerval") return `${esc(v.fraga)} Rätt: <b>${esc(v.alt.find(a => a.s === "ratt").t)}</b>`;
  if (t.typ === "santfalskt") return v.pst.map(([x, y]) => `${esc(x)} <b>${y ? "Sant" : "Falskt"}</b>`).join(" · ");
  if (t.typ === "udda") return (v.fragor || [v]).map(f => `${f.ord.map(esc).join(" · ")} → <b>${esc(f.svar)}</b>`).join("<br>");
  if (t.typ === "sortera") return v.grupper.map((g, k) => `${esc(g)}: <b>${v.saker.filter(x => x[1] === k).map(x => esc(x[0])).join(", ")}</b>`).join(" · ");
  if (t.typ === "isotoptabell") return v.isotoper.map(i => `${esc(i.sub)}: ${partiklar(i).p} p, ${partiklar(i).n} n, ${partiklar(i).e} e, masstal ${i.A}`).join(" · ");
  if (t.typ === "andra") return `Gör om atomen till ${TYPER.andra.malText[v.mal]} (startatomen slumpas)`;
  if (t.typ === "reglage" || t.typ === "skrivnotation") { const x = partiklar(v); return `${nota(v.A, v.Z, v.X, v.ch || "", "")} ${v.namn ? esc(v.namn) + " · " : ""}${x.p} p, ${x.n} n, ${x.e} e`; }
  return "";
}
