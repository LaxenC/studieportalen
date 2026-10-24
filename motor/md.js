/* =====================================================================
   TEXTFORMAT – gör om en kapiteltext (Markdown) till HTML.
   Beskrivning av skrivsättet finns i STRUKTUR.md och mallar.md.
   Rörs inte för att lägga till innehåll.
   ===================================================================== */
const MD = (() => {
  let VARN = [], BAS = "";
  const src = u => /^([a-z]+:|\/\/|#)/i.test(u) ? u : BAS + u.replace(/^\/+/, "");
  const AK_RE = /^(?:åk|ak)\s*=?\s*([\d,\s–-]+)$/i;
  const parseAk = s => {
    const out = new Set();
    String(s).split(",").forEach(d => {
      const m = d.trim().match(/^(\d+)\s*[–-]\s*(\d+)$/);
      if (m) for (let i = +m[1]; i <= +m[2]; i++) out.add(i); else if (d.trim()) out.add(+d.trim());
    });
    return [...out];
  };
  const slug = s => s.toLowerCase().replace(/[åä]/g, "a").replace(/ö/g, "o").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  /* ---------- text i en rad ---------- */
  function inline(s) {
    const spar = [];
    const hall = h => `\u0000${spar.push(h) - 1}\u0000`;
    s = String(s);
    s = s.replace(/\[\[([^\]]+)\]\]/g, (m, k) => hall(ritning(k.trim())));
    s = s.replace(/`([^`]+)`/g, (m, k) => hall(`<code>${esc(k)}</code>`));
    s = s.replace(/<(?=[a-zA-Z\/!])/g, "\u0001").replace(/</g, "&lt;").replace(/\u0001/g, "<");
    s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (m, alt, u0) => hall(`<img src="${esc(src(u0))}" alt="${esc(alt)}">`));
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) => hall(`<a href="${esc(u)}"${/^https?:/.test(u) ? ' target="_blank" rel="noopener"' : ""}>${t}</a>`));
    s = s.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    s = s.replace(/(^|[^*\w])\*([^*\s](?:[^*]*[^*\s])?)\*(?![*\w])/g, "$1<i>$2</i>");
    s = s.replace(/\^([^\^\s]+)\^/g, "<sup>$1</sup>").replace(/~([^~\s]+)~/g, "<sub>$1</sub>");
    return s.replace(/\u0000(\d+)\u0000/g, (m, i) => spar[+i]);
  }

  /* ---------- block ---------- */
  const isFig = l => /^\s*(\[\[[^\]]+\]\]|!\[[^\]]*\]\([^)]+\))(\s*\{[^}]*\})?\s*$/.test(l);
  const isList = l => /^\s*([-*]|\d+\.)\s+/.test(l);
  const startar = l => /^\s{0,3}(#{1,6}\s|>|\||:::|<)/.test(l) || isList(l) || isFig(l);

  function lista(rader) {
    const ord = /^\s*\d+\./.test(rader[0]);
    const items = [];
    rader.forEach(l => { const m = l.match(/^\s*(?:[-*]|\d+\.)\s+(.*)$/); if (m) items.push(m[1]); else if (items.length) items[items.length - 1] += " " + l.trim(); });
    const li = items.map(t => {
      const m = t.match(/^\((?:åk|ak)\s*([\d,\s–-]+)\)\s*(.*)$/i);
      return m ? `<li data-ak="${parseAk(m[1])}">${inline(m[2])}</li>` : `<li>${inline(t)}</li>`;
    }).join("");
    return ord ? `<ol>${li}</ol>` : `<ul>${li}</ul>`;
  }

  function tabell(rader) {
    const cells = l => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(c => c.trim());
    const head = cells(rader[0]), body = rader.slice(1).filter(l => !/^\s*\|?\s*:?-{2,}/.test(l)).map(cells);
    return `<div class="tablewrap"><table class="rules"><thead><tr>${head.map(c => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${body.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }

  function figur(rader, bildtext) {
    const delar = rader.map(l => {
      const kl = (l.match(/\{\.([\w-]+)\}\s*$/) || [])[1];
      l = l.replace(/\{[^}]*\}\s*$/, "").trim();
      const img = l.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (img) return { html: `<img src="${esc(src(img[2]))}" alt="${esc(img[1])}" loading="lazy">`, kl };
      return { html: ritning(l.slice(2, -2).trim()), kl };
    });
    const kl = delar.map(d => d.kl).filter(Boolean).map(k => "fig-" + k).join(" ");
    return `<figure class="figur ${kl}"><div class="figbilder">${delar.map(d => d.html).join("")}</div>${bildtext ? `<figcaption>${inline(bildtext)}</figcaption>` : ""}</figure>`;
  }

  function ruta(rader, ctx) {
    const forsta = rader[0].trim();
    const m = forsta.match(/^\*\*(.+?)\*\*\s*(.*?)\s*(?:\{\.([\w-]+)\})?\s*$/);
    if (!m) return { html: `<blockquote>${block(rader, ctx).map(b => b.html).join("")}</blockquote>` };
    const titel = m[1].replace(/:$/, ""), rest = m[2], farg = m[3], resten = rader.slice(1);
    const tl = titel.toLowerCase();
    if (tl === "begrepp") {
      const termer = resten.map(l => l.trim()).filter(Boolean).map(l => {
        const t = l.match(/^\*\*(.+?)\*\*\s*[–—:-]?\s*(.*)$/);
        return t ? { term: t[1], def: t[2] } : { term: "", def: l };
      });
      termer.forEach(t => t.term && ctx.begrepp.push(t));
      return { typ: "begrepp", html: `<aside class="begrepp"><p class="bt">Begrepp</p><dl>${termer.map(t => `<dt>${inline(t.term)}</dt><dd>${inline(t.def)}</dd>`).join("")}</dl></aside>` };
    }
    const inre = (rest ? [rest, ...resten] : resten);
    const innehall = block(inre, ctx).map(b => b.html).join("");
    if (tl.startsWith("exempel")) return { html: `<div class="exempel"><p class="et">${inline(titel)}</p>${innehall}</div>` };
    if (tl.startsWith("viktigt")) {
      const h = `<div class="viktigt"><p class="vt">⭐ ${inline(titel)}</p>${innehall}</div>`;
      ctx.viktigt.push(h); return { html: h };
    }
    if (tl.startsWith("fördjupning") || tl.startsWith("extra")) return { html: `<details class="fordjup"><summary>${inline(titel)}</summary><div class="fd-inne">${innehall}</div></details>` };
    return { html: `<div class="callout ${FARGKLASS[farg] || "c-blue"}"><h4>${inline(titel)}</h4>${innehall}</div>` };
  }

  // Delar upp rader i block. Returnerar [{html, typ}]
  function block(rader, ctx) {
    const ut = []; let i = 0;
    while (i < rader.length) {
      const l = rader[i];
      if (!l.trim()) { i++; continue; }
      let m;
      if ((m = l.match(/^:::\s*(.*)$/)) && m[1].trim()) {
        let djup = 1, j = i + 1;
        for (; j < rader.length; j++) { if (/^:::\s*\S/.test(rader[j])) djup++; else if (/^:::\s*$/.test(rader[j]) && !--djup) break; }
        if (j >= rader.length) VARN.push(`"::: ${m[1].trim()}" saknar en avslutande rad med bara :::`);
        const arg = m[1].trim(), inre = block(rader.slice(i + 1, j), ctx);
        const ak = arg.match(AK_RE);
        // ::: fördjupning åk 7 [Rubrik] – fördjupning för åk 7, vanlig text för övriga
        const fd = arg.match(/^(?:fördjupning|fordjupning|extra)\s+(?:åk|ak)\s*=?\s*([\d,–-]+(?:\s*,\s*\d+)*)\s*(.*)$/i);
        if (fd) ut.push({ html: `<div class="fd-ak" data-fdak="${parseAk(fd[1])}" data-titel="${esc(fd[2].trim() || "Fördjupning")}">${sattIhop(inre)}</div>` });
        else if (ak) ut.push({ html: `<div class="ak-block" data-ak="${parseAk(ak[1])}">${sattIhop(inre)}</div>` });
        else if (arg === "rad") ut.push({ html: `<div class="rad">${inre.map(b => `<div class="rad-cell">${b.html}</div>`).join("")}</div>` });
        else ut.push({ html: `<div class="${esc(arg)}">${sattIhop(inre)}</div>` });
        i = j + 1; continue;
      }
      if ((m = l.match(/^\s{0,3}(#{1,6})\s+(.*)$/))) {
        const n = Math.max(3, m[1].length); // # och ## hanteras utanför
        ut.push({ html: `<h${n}>${inline(m[2].replace(/\s*\{[^}]*\}\s*$/, ""))}</h${n}>` }); i++; continue;
      }
      if (/^\s{0,3}>/.test(l)) {
        const r = []; while (i < rader.length && /^\s{0,3}>/.test(rader[i])) r.push(rader[i++].replace(/^\s{0,3}>\s?/, ""));
        ut.push(ruta(r, ctx)); continue;
      }
      if (/^\s*\|/.test(l)) {
        const r = []; while (i < rader.length && /^\s*\|/.test(rader[i])) r.push(rader[i++]);
        ut.push({ html: tabell(r) }); continue;
      }
      if (isList(l)) {
        const r = [];
        while (i < rader.length && (isList(rader[i]) || (rader[i].trim() && /^\s+/.test(rader[i])) || (!rader[i].trim() && i + 1 < rader.length && isList(rader[i + 1])))) { if (rader[i].trim()) r.push(rader[i]); i++; }
        ut.push({ html: lista(r) }); continue;
      }
      if (isFig(l)) {
        const r = []; while (i < rader.length && isFig(rader[i])) r.push(rader[i++]);
        let bt = ""; if (i < rader.length && /^Bild:\s*/i.test(rader[i])) bt = rader[i++].replace(/^Bild:\s*/i, "");
        ut.push({ html: figur(r, bt) }); continue;
      }
      if (/^\s*</.test(l)) {
        const r = []; while (i < rader.length && rader[i].trim()) r.push(rader[i++]);
        ut.push({ html: r.join("\n") }); continue;
      }
      const r = []; while (i < rader.length && rader[i].trim() && !(r.length && startar(rader[i]))) r.push(rader[i++]);
      ut.push({ typ: "p", html: `<p>${inline(r.join(" "))}</p>` });
    }
    return ut;
  }

  // Begreppsrutor läggs bredvid blocket ovanför
  function sattIhop(bl) {
    const ut = [];
    bl.forEach(b => {
      if (b.typ === "begrepp") {
        const f = ut[ut.length - 1];
        if (f && f.mb) { f.sida.push(b.html); return; }
        if (f) { ut[ut.length - 1] = { mb: true, text: f.html, sida: [b.html] }; return; }
      }
      ut.push(b);
    });
    return ut.map(b => b.mb ? `<div class="med-begrepp"><div class="mb-text">${b.text}</div><div class="mb-sida">${b.sida.join("")}</div></div>` : b.html).join("");
  }

  function frontmatter(txt) {
    const meta = {};
    const m = txt.match(/^﻿?---\s*\n([\s\S]*?)\n---\s*\n?/);
    if (!m) return [meta, txt];
    m[1].split("\n").forEach(l => {
      const k = l.match(/^\s*([\wåäö]+)\s*:\s*(.*)$/i); if (!k) return;
      let v = k[2].trim();
      if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(",").map(x => x.trim()).filter(Boolean).map(x => isNaN(x) ? x.replace(/^["']|["']$/g, "") : +x);
      else if (v === "true" || v === "false") v = v === "true";
      meta[k[1]] = v;
    });
    return [meta, txt.slice(m[0].length)];
  }

  // Hela kapiteltexten -> { meta, titel, ingress, intro, avsnitt[] }
  function parse(txt, bas) {
    BAS = bas || "";
    const [meta, kropp] = frontmatter(txt.replace(/\r\n?/g, "\n"));
    const rader = kropp.split("\n");
    VARN = [];
    const res = { meta, titel: "", ingress: "", intro: "", introViktigt: [], avsnitt: [], begrepp: [], varningar: VARN };
    let akt = { rader: [] }; const delar = [akt];
    let iBlock = 0;
    rader.forEach(l => {
      if (/^:::\s*\S/.test(l)) iBlock++; else if (/^:::\s*$/.test(l)) iBlock = Math.max(0, iBlock - 1);
      const h = !iBlock && l.match(/^\s{0,3}##\s+(.*)$/);
      if (h) {
        let rub = h[1], id = "", ak = null, dold = false;
        const attr = rub.match(/\{([^}]*)\}\s*$/);
        if (attr) {
          rub = rub.slice(0, attr.index).trim();
          attr[1].trim().split(/\s+/).forEach(t => {
            if (t.startsWith("#")) id = t.slice(1);
            else if (/^(åk|ak)=/i.test(t)) ak = parseAk(t.split("=")[1]);
            else if (t === "dold") dold = true;
          });
        }
        akt = { rubrik: rub, id: id || slug(rub), ak, dold, rader: [] }; delar.push(akt); return;
      }
      const h1 = !iBlock && delar.length === 1 && l.match(/^\s{0,3}#\s+(.*)$/);
      if (h1) { res.titel = h1[1].trim(); return; }
      akt.rader.push(l);
    });
    const ctx0 = { viktigt: [], begrepp: res.begrepp };
    const intro = block(delar[0].rader, ctx0);
    const fp = intro.findIndex(b => b.typ === "p");
    if (fp === 0) { res.ingress = intro[0].html.replace(/^<p>|<\/p>$/g, ""); intro.shift(); }
    res.intro = sattIhop(intro); res.introViktigt = ctx0.viktigt;
    delar.slice(1).forEach(d => {
      if (d.dold) return;
      const ctx = { viktigt: [], begrepp: [] };
      const html = sattIhop(block(d.rader, ctx));
      res.begrepp.push(...ctx.begrepp);
      res.avsnitt.push({ id: d.id, rubrik: d.rubrik, ak: d.ak, html, viktigt: ctx.viktigt, begrepp: ctx.begrepp });
    });
    return res;
  }

  // Visa/dölj delar som bara gäller vissa årskurser
  function filtreraAk(root, ak) {
    root.querySelectorAll(".fd-ak[data-fdak]").forEach(el => {
      const lista = el.dataset.fdak.split(",").map(Number), titel = el.dataset.titel;
      el.removeAttribute("data-fdak");
      if (ak === "alla") el.insertAdjacentHTML("afterbegin", `<span class="aktag fdtag">fördjupning för åk ${akText(lista)}</span>`);
      else if (lista.includes(+ak)) el.innerHTML = `<details class="fordjup"><summary>${esc(/^fördjupning/i.test(titel) ? titel : "Fördjupning: " + titel)}</summary><div class="fd-inne">${el.innerHTML}</div></details>`;
    });
    root.querySelectorAll("[data-ak]").forEach(el => {
      const lista = el.dataset.ak.split(",").map(Number);
      if (ak === "alla") {
        el.classList.add("ak-extra");
        if (!el.querySelector(":scope > .aktag")) el.insertAdjacentHTML("afterbegin", `<span class="aktag">åk ${akText(lista)}</span>`);
      } else if (!lista.includes(+ak)) el.remove();
    });
    return root;
  }
  const akText = l => { l = [...l].sort((a, b) => a - b); return l.length > 1 && l[l.length - 1] - l[0] === l.length - 1 ? `${l[0]}–${l[l.length - 1]}` : l.join(", "); };

  return { parse, inline, filtreraAk, akText, parseAk, slug };
})();
