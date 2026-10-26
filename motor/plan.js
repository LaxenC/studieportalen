/* =====================================================================
   PLAN – en skräddarsydd studieplan som plockar avsnitt ur flera
   arbetsområden och ordnar dem efter lärarens mål.
   Adress: #/plan/<id>   (filen planer/<id>.js)
   Rörs inte för att lägga till en plan – se HOWTO.md.
   ===================================================================== */
Portal.planer = {};
Portal.plan = function (p) { this.planer[p.id] = p; };

// "omrade/kapitel/avsnitt" -> { o, kap, av } eller { fel }
function planDel(vag) {
  const [oid, kid, aid] = vag.split("/");
  const o = Portal.omraden[oid]; if (!o) return { fel: `området "${oid}" finns inte` };
  const kap = kapitelAv(o, kid); if (!kap) return { fel: `kapitlet "${kid}" finns inte i ${o.namn}` };
  const av = aid ? avsnittAv(o, kid, aid) : null; if (aid && !av) return { fel: `avsnittet "#${aid}" finns inte i ${kap.namn}` };
  return { o, kap, av, kid, aid };
}
const planNyckel = (id, i) => `plan:${id}:${i}`;
function planKlar(id, i) { try { return localStorage.getItem(planNyckel(id, i)) === "1"; } catch (e) { return false; } }

async function visaPlan(id) {
  AKTUELLT.nyckel = "";
  if (!Portal.planer[id]) await laddaSkript(`planer/${encodeURIComponent(id)}.js?v=` + Date.now().toString(36).slice(0, -3));
  const p = Portal.planer[id];
  if (!p) { topp([["Studieplan"]]); vy().innerHTML = tom("Den här studieplanen finns inte."); return; }
  // ladda innehållet i alla områden som planen använder
  const oids = [...new Set(p.mal.flatMap(m => (m.avsnitt || []).map(v => v.split("/")[0])))];
  vy().innerHTML = '<p class="laddar">Laddar …</p>';
  for (const oid of oids) if (Portal.omraden[oid]) await laddaInnehall(Portal.omraden[oid]);
  topp([["Studieplan"], [p.titel]]); document.title = `${p.titel} – ${Portal.inst.titel}`;
  const ak = AK(), klara = p.mal.filter((m, i) => planKlar(id, i)).length;
  const akTips = p.arskurs && String(ak) !== String(p.arskurs)
    ? `<p class="plan-ak">Planen är gjord för åk ${p.arskurs}. <button type="button" class="ghostbtn" data-plan-ak data-ak="${p.arskurs}">Visa för åk ${p.arskurs}</button></p>` : "";
  vy().innerHTML = `<header class="hero"><p class="eyebrow">Studieplan</p><h1>${esc(p.titel)}</h1>${p.text ? `<p>${esc(p.text)}</p>` : ""}</header>
    ${akTips}
    <section class="panel plan-status"><div class="plan-bar"><span style="width:${Math.round(100 * klara / p.mal.length)}%"></span></div>
      <p><b id="planAntal">${klara}</b> av ${p.mal.length} mål klara</p></section>
    <ol class="plan-mal">${p.mal.map((m, i) => planMal(p, m, i)).join("")}</ol>`;
  scrollTo(0, 0);
}

function planMal(p, m, i) {
  const delar = (m.avsnitt || []).map(planDel);
  const rader = delar.map((d, j) => {
    if (d.fel) return `<li class="plan-fel">⚠ ${esc(m.avsnitt[j])}: ${esc(d.fel)}</li>`;
    const { o, kap, av, kid, aid } = d;
    const las = `#/${o.amne}/${o.id}/las/${kid}${aid ? "/" + aid : ""}`;
    const ova = `#/${o.amne}/${o.id}/ova?kapitel=${kid}${aid ? "&avsnitt=" + aid : ""}&fran=${encodeURIComponent("#/plan/" + p.id)}`;
    const upp = aktivaUppgifter(o, AK(), kid, aid);
    const nFakta = upp.filter(t => t.typ !== "forklara").length, nFk = upp.filter(t => t.typ === "forklara").length;
    return `<li class="plan-av"><div class="plan-namn"><b>${esc(av ? av.rubrik : kap.namn)}</b><small>${esc(o.namn)} › ${esc(kap.namn)}</small></div>
      <div class="plan-knappar"><a class="ghostbtn" href="${las}">📖 Läs</a>
      <button type="button" class="ghostbtn" data-planplugga="${o.id}|${kid}|${aid || ""}">💡 Plugga</button>
      ${nFakta ? `<a class="ghostbtn" href="${ova}">✏️ Öva <small>(${nFakta})</small></a>` : ""}
      ${nFk ? `<a class="ghostbtn" href="${ova}&stjarnor=6">💬 Förklara <small>(${nFk})</small></a>` : ""}</div></li>`;
  }).join("");
  const klar = planKlar(p.id, i);
  return `<li class="panel plan-ett${klar ? " klar" : ""}">
    <div class="plan-rubrik"><span class="plan-nr">${i + 1}</span><h2>${esc(m.text)}</h2>
      <label class="plan-check"><input type="checkbox" data-planmal="${p.id}|${i}"${klar ? " checked" : ""}> Jag kan det här</label></div>
    ${rader ? `<ul class="plan-avlista">${rader}</ul>` : ""}
    ${m.saknas || !rader ? `<p class="plan-saknas">🚧 ${esc(m.saknas || "Det här finns inte i portalen än.")}</p>` : ""}</li>`;
}

document.addEventListener("click", e => {
  const a = e.target.closest("[data-plan-ak]");
  if (a) { AKTIV_AK = +a.dataset.ak; sparaAk(AKTIV_AK); route(); return; }
  const b = e.target.closest("[data-planplugga]");
  if (b) { const [oid, kid, aid] = b.dataset.planplugga.split("|"); AKTUELLT.o = Portal.omraden[oid]; oppnaPlugga(kid, aid ? [aid] : null, false); }
});
document.addEventListener("change", e => {
  const c = e.target.closest("[data-planmal]"); if (!c) return;
  const [id, i] = c.dataset.planmal.split("|");
  try { localStorage.setItem(planNyckel(id, i), c.checked ? "1" : "0"); } catch (err) { }
  c.closest(".plan-ett").classList.toggle("klar", c.checked);
  const p = Portal.planer[id], n = p.mal.filter((m, j) => planKlar(id, j)).length;
  document.getElementById("planAntal").textContent = n;
  document.querySelector(".plan-bar span").style.width = Math.round(100 * n / p.mal.length) + "%";
});
