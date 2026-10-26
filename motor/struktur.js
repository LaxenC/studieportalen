/* =====================================================================
   STRUKTUR – översikt över hela portalen, med varningar.
   Sidan struktur.html länkas inte från portalen.
   Rörs inte för att lägga till innehåll.
   ===================================================================== */
let AKTIV_AK = "alla"; const AK = () => AKTIV_AK;
const $ = id => document.getElementById(id);
const ok = b => b ? '<span class="st-ok">✔</span>' : '<span class="st-nej">✗</span>';
const nivaChips = (o, lista, ak) => [0, 1, 2, 3].map(L => { const n = lista.filter(t => nivaerFor(o, t, ak).some(x => x.niva === L)).length; return `<span class="st-niv ${n ? "" : "tom"}" title="${L === 3 ? "Utmaning" : "Nivå " + L}">${L === 3 ? "U" : L}:${n}</span>`; }).join("");

function bygg() {
  const ak = AK(), varn = [], rader = [];
  const varna = (txt, lank) => varn.push(lank ? `<li><a href="${lank}">${txt}</a></li>` : `<li>${txt}</li>`);
  Portal._fel.forEach(f => varna(esc(f)));
  const ids = {};
  for (const a of Portal.amnenLista) {
    const oms = (a.omradeObj || []).filter(o => passar(o.arskurs, ak));
    rader.push(`<li class="st-amne"><b>${esc(a.namn.toUpperCase())}</b> <span class="st-dim">${a.id}/</span>${oms.length ? "" : ' <span class="st-dim">– inga arbetsområden' + (ak === "alla" ? "" : " för åk " + ak) + "</span>"}<ul>`);
    for (const o of oms) {
      const L = (...d) => "index.html#/" + [o.amne, o.id, ...d].filter(Boolean).join("/");
      const alla = aktivaUppgifter(o, ak);
      rader.push(`<li class="st-omr"><a href="${L()}"><b>${esc(o.namn)}</b></a> <span class="st-ak">åk ${MD.akText(o.arskurs || ARSKURSER)}</span> <span class="st-dim">${alla.length} uppgifter</span> ${nivaChips(o, alla, ak)}<ul>`);
      for (const k of o.kapitel) {
        const kak = kapitelArskurs(o, k);
        if (!passar(kak, ak)) continue;
        const t = o.texter[k.id], upp = aktivaUppgifter(o, ak, k.id);
        const skift = k.nivaForskjutning ? " · nivå " + Object.entries(k.nivaForskjutning).map(([x, d]) => `åk ${x}: ${d > 0 ? "+" : ""}${d}`).join(", ") : "";
        rader.push(`<li class="st-kap${k.dold ? " st-dold" : ""}"><a href="${L("las", k.id)}">${esc(k.namn)}</a> <span class="st-dim">#${k.id}</span> <span class="st-ak">åk ${MD.akText(kak)}${skift}</span>
          text ${ok(t)} · <a href="granska.html?kapitel=${o.id}/${k.id}">${upp.length} uppgifter</a> ${nivaChips(o, upp, ak)}${k.dold ? " <b>dold</b>" : ""}
          <span class="st-tid" data-fil="${sokvag(o, `texter/${k.id}.md`)}" data-namn="text"></span><span class="st-tid" data-fil="${sokvag(o, `uppgifter/${k.id}.js`)}" data-namn="uppgifter"></span><ul>`);
        if (!t) varna(`${esc(o.namn)} › ${esc(k.namn)}: saknar text (texter/${k.id}.md)`);
        else {
          (t.varningar || []).forEach(v => varna(`${esc(k.namn)}: ${esc(v)}`, L("las", k.id)));
          if (!t.avsnitt.length) rader.push(`<li class="st-av st-dim">Inga avsnitt (##) – hela texten är ett avsnitt · viktigt ${ok(t.introViktigt.length)}</li>`);
          t.avsnitt.filter(av => passar(av.ak, ak)).forEach(av => {
            const n = aktivaUppgifter(o, ak, k.id, av.id).length;
            rader.push(`<li class="st-av"><a href="${L("las", k.id, av.id)}">${esc(av.rubrik)}</a> <span class="st-dim">#${av.id}</span>${av.ak ? ` <span class="st-ak">åk ${MD.akText(av.ak)}</span>` : ""}
              · viktigt ${av.viktigt.length ? ok(1) : '<span class="st-dim">–</span>'} · ${n ? `${n} uppgifter` : '<span class="st-nej">inga uppgifter</span>'}</li>`);
            if (!n) varna(`${esc(k.namn)} › ${esc(av.rubrik)}: inga uppgifter`, L("las", k.id, av.id));
          });
          if (!t.introViktigt.length && !t.avsnitt.some(av => av.viktigt.length)) varna(`${esc(k.namn)}: saknar ruta "Viktigt att komma ihåg"`, L("las", k.id));
          const utan = upp.filter(x => !(x.avsnitt || []).length).length;
          if (utan) rader.push(`<li class="st-av st-dim">${utan} uppgifter kopplade till hela kapitlet</li>`);
        }
        rader.push(`</ul></li>`);
        // få uppgifter per nivå
        (ak === "alla" ? kak : [ak]).forEach(x => [0, 1, 2].forEach(Lv => {
          const n = aktivaUppgifter(o, x, k.id).filter(u => nivaerFor(o, u, x).some(y => y.niva === Lv)).length;
          if (n > 0 && n < 3) varna(`${esc(k.namn)}: bara ${n} ${n === 1 ? "uppgift" : "uppgifter"} på nivå ${Lv} för åk ${x}`);
        }));
      }
      rader.push(`</ul></li>`);
      // uppgifter som pekar fel
      o.uppgifter.forEach(u => {
        if (ids[u.id]) varna(`Uppgifts-id <code>${esc(u.id)}</code> finns två gånger`); ids[u.id] = 1;
        if (u.dold) return;
        if (!TYPER[u.typ]) varna(`Uppgift <code>${esc(u.id)}</code>: okänd typ "${esc(u.typ)}"`);
        if (!kapitelAv(o, u.kapitel)) varna(`Uppgift <code>${esc(u.id)}</code>: kapitlet "${esc(u.kapitel)}" finns inte`);
        else (u.avsnitt || []).forEach(av => { if (o.texter[u.kapitel] && !avsnittAv(o, u.kapitel, av)) varna(`Uppgift <code>${esc(u.id)}</code>: avsnittet "#${esc(av)}" finns inte i ${esc(u.kapitel)}.md`, `granska.html?kapitel=${o.id}/${u.kapitel}#u-${u.id}`); });
        if (!grundNivaer(u).length) varna(`Uppgift <code>${esc(u.id)}</code>: har ingen nivå (nivaer eller nivaerPerArskurs)`);
        if (!(u.varianter || []).length) varna(`Uppgift <code>${esc(u.id)}</code>: har inga varianter`);
        const kanda = punkterFor(o, u.kapitel, null, "alla").map(p => p.id);
        (u.varianter || []).forEach((v, vi) => uppgiftPunkter(u, vi).forEach(id => { if (!kanda.includes(id)) varna(`Uppgift <code>${esc(u.id)}</code>: kunskapspunkten "${esc(id)}" finns inte i texten`, `granska.html?kapitel=${o.id}/${u.kapitel}#u-${u.id}`); }));
      });
      // kunskapspunkter som har för få uppgifter (Öva tills du kan behöver minst två)
      o.kapitel.forEach(k => punkterFor(o, k.id, null, "alla").forEach(p => {
        const n = o.uppgifter.filter(u => !u.dold && u.kapitel === k.id && u.typ !== "forklara").reduce((s, u) => s + u.varianter.filter((v, vi) => uppgiftPunkter(u, vi).includes(p.id)).length, 0);
        if (n < 2) varna(`${esc(k.namn)} › ${esc(p.rubrik)}: kunskapspunkten "${esc(p.id)}" har ${n} ${n === 1 ? "uppgift" : "uppgifter"} (minst 2 behövs)`, L("las", k.id, p.av));
      }));
    }
    rader.push(`</ul></li>`);
  }
  $("trad").innerHTML = `<ul class="st-trad">${rader.join("")}</ul>`;
  visaTider();
  $("varn").innerHTML = varn.length ? `<h2>⚠ ${varn.length} att titta på</h2><ul>${varn.join("")}</ul>` : `<h2>✔ Inga varningar</h2>`;
}

async function startaStruktur() {
  laggTillSvgDefs();
  await laddaAllt();
  $("akval").innerHTML = ["alla", ...ARSKURSER].map(v => `<button type="button" role="radio" data-ak="${v}" aria-checked="${String(v) === "alla"}">${v === "alla" ? "Alla" : "Åk " + v}</button>`).join("");
  $("akval").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    AKTIV_AK = b.dataset.ak === "alla" ? "alla" : +b.dataset.ak;
    $("akval").querySelectorAll("button").forEach(x => x.setAttribute("aria-checked", x === b)); bygg();
  });
  bygg();
}

/* ---------- Senast ändrad (hämtas från GitHub) ---------- */
const TIDCACHE = {};
async function ghHamta(url) {
  const nyckel = "gh:" + url;
  try { const c = JSON.parse(sessionStorage.getItem(nyckel) || "null"); if (c && Date.now() - c.t < 5 * 60e3) return c.d; } catch (e) { }
  const r = await fetch("https://api.github.com/repos/" + url, { headers: { Accept: "application/vnd.github+json" } });
  if (!r.ok) throw new Error(r.status);
  const d = await r.json();
  try { sessionStorage.setItem(nyckel, JSON.stringify({ t: Date.now(), d })); } catch (e) { }
  return d;
}
function tidText(iso) {
  const d = new Date(iso), nu = new Date(), dag = 864e5;
  const klock = d.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });
  const iDag = new Date(nu.getFullYear(), nu.getMonth(), nu.getDate());
  if (d >= iDag) return "idag " + klock;
  if (d >= iDag - dag) return "igår " + klock;
  return d.toLocaleDateString("sv-SE", { day: "numeric", month: "short", year: d.getFullYear() === nu.getFullYear() ? undefined : "numeric" }) + " " + klock;
}
const kortNamn = c => (c.author && c.author.login) || (c.commit.author && c.commit.author.name) || "";
async function visaTider() {
  const repo = githubRepo(), info = $("senast");
  if (!repo) { info.innerHTML = '<p class="st-dim">Senast ändrad visas när sidan ligger på GitHub Pages.</p>'; return; }
  try {
    const lista = await ghHamta(`${repo}/commits?per_page=8`);
    info.innerHTML = `<h2>Senaste ändringar</h2><ul class="st-logg">${lista.map(c => `<li><span class="st-dim">${tidText(c.commit.author.date)}</span> <b>${esc(kortNamn(c))}</b> – ${esc(c.commit.message.split("\n")[0])}</li>`).join("")}</ul>
      <p class="st-dim"><a href="https://github.com/${repo}/commits/main" target="_blank" rel="noopener">Alla ändringar på GitHub →</a></p>`;
  } catch (e) { info.innerHTML = '<p class="st-dim">Kunde inte hämta senaste ändringar från GitHub just nu.</p>'; return; }
  for (const el of document.querySelectorAll(".st-tid")) {
    const fil = el.dataset.fil;
    if (!(fil in TIDCACHE)) {
      try { const d = await ghHamta(`${repo}/commits?per_page=1&path=${encodeURIComponent(fil)}`); TIDCACHE[fil] = d[0] || null; } catch (e) { TIDCACHE[fil] = undefined; }
    }
    const c = TIDCACHE[fil];
    if (c) el.innerHTML = ` · ${el.dataset.namn} ändrad <span title="${esc(c.commit.message.split("\n")[0])}">${tidText(c.commit.author.date)}</span>${kortNamn(c) ? " av " + esc(kortNamn(c)) : ""}`;
  }
}
