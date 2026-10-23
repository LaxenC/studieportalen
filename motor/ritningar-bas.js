/* Grundritningar: atom, notation, partiklar, spektrum. Rörs inte för innehåll. */
const star=on=>`<svg aria-hidden="true" fill="var(${on?"--star":"--star-off"})"><use href="#star"/></svg>`;
const KORTBILD={atom:"<div class=\"art\"><svg viewBox=\"0 0 120 100\" aria-hidden=\"true\">\n            <ellipse cx=\"60\" cy=\"50\" rx=\"48\" ry=\"22\" fill=\"none\" stroke=\"var(--electron)\" stroke-width=\"2\" opacity=\".55\" transform=\"rotate(-30 60 50)\"/>\n            <ellipse cx=\"60\" cy=\"50\" rx=\"48\" ry=\"22\" fill=\"none\" stroke=\"var(--electron)\" stroke-width=\"2\" opacity=\".55\" transform=\"rotate(30 60 50)\"/>\n            <circle cx=\"53\" cy=\"45\" r=\"10\" fill=\"url(#gP)\"/><circle cx=\"67\" cy=\"45\" r=\"10\" fill=\"url(#gN)\"/>\n            <circle cx=\"53\" cy=\"58\" r=\"10\" fill=\"url(#gN)\"/><circle cx=\"67\" cy=\"58\" r=\"10\" fill=\"url(#gP)\"/>\n            <circle cx=\"22\" cy=\"28\" r=\"6\" fill=\"url(#gE)\"/><circle cx=\"98\" cy=\"72\" r=\"6\" fill=\"url(#gE)\"/>\n            <circle cx=\"98\" cy=\"28\" r=\"6\" fill=\"url(#gE)\"/><circle cx=\"22\" cy=\"72\" r=\"6\" fill=\"url(#gE)\"/></svg></div>",notation:"<div class=\"art\"><span class=\"notation\"><span class=\"nums\"><span>12</span><span>6</span></span><span class=\"el\">C</span></span></div>",samband:"<div class=\"art trio\">\n            <div>Isotop<svg viewBox=\"0 0 70 70\" aria-hidden=\"true\"><circle cx=\"35\" cy=\"35\" r=\"32\" fill=\"var(--panel)\" stroke=\"var(--electron)\" stroke-width=\"2\"/>\n              <circle cx=\"29\" cy=\"31\" r=\"8\" fill=\"url(#gP)\"/><circle cx=\"41\" cy=\"31\" r=\"8\" fill=\"url(#gN)\"/><circle cx=\"29\" cy=\"42\" r=\"8\" fill=\"url(#gN)\"/><circle cx=\"41\" cy=\"42\" r=\"8\" fill=\"url(#gN)\"/></svg></div>\n            <div>\u00c4mne<svg viewBox=\"0 0 70 70\" aria-hidden=\"true\"><circle cx=\"35\" cy=\"35\" r=\"32\" fill=\"var(--panel)\" stroke=\"var(--electron)\" stroke-width=\"2\"/>\n              <circle cx=\"31\" cy=\"31\" r=\"8\" fill=\"url(#gP)\"/><circle cx=\"41\" cy=\"35\" r=\"8\" fill=\"url(#gN)\"/><circle cx=\"31\" cy=\"42\" r=\"8\" fill=\"url(#gP)\"/><circle cx=\"62\" cy=\"22\" r=\"5\" fill=\"url(#gE)\"/></svg></div>\n            <div>Jon<svg viewBox=\"0 0 70 70\" aria-hidden=\"true\"><circle cx=\"35\" cy=\"35\" r=\"32\" fill=\"var(--panel)\" stroke=\"var(--electron)\" stroke-width=\"2\"/>\n              <circle cx=\"35\" cy=\"35\" r=\"11\" fill=\"url(#gP)\"/><text x=\"35\" y=\"40\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"900\" fill=\"#fff\">+</text><circle cx=\"60\" cy=\"18\" r=\"5\" fill=\"url(#gE)\"/></svg></div>\n          </div>",stralning:"<div class=\"art\"><svg viewBox=\"0 0 140 100\" aria-hidden=\"true\">\n  <circle cx=\"34\" cy=\"50\" r=\"7\" fill=\"url(#gP)\"/><circle cx=\"44\" cy=\"44\" r=\"7\" fill=\"url(#gN)\"/><circle cx=\"42\" cy=\"56\" r=\"7\" fill=\"url(#gP)\"/><circle cx=\"30\" cy=\"40\" r=\"7\" fill=\"url(#gN)\"/><circle cx=\"28\" cy=\"58\" r=\"7\" fill=\"url(#gN)\"/><circle cx=\"38\" cy=\"48\" r=\"7\" fill=\"url(#gP)\"/>\n  <g fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\">\n    <path d=\"M56 38 L112 18\" stroke=\"var(--proton)\"/><path d=\"M56 50 L118 50\" stroke=\"var(--electron)\"/>\n    <path d=\"M56 62 q5 -7 10 0 t10 0 t10 0 t10 0 t10 0 t8 0\" stroke=\"var(--orange)\"/></g>\n  <g font-family=\"Noto Serif,Georgia,serif\" font-weight=\"700\" font-size=\"15\" fill=\"var(--ink)\">\n    <text x=\"118\" y=\"20\">\u03b1</text><text x=\"124\" y=\"55\">\u03b2</text><text x=\"124\" y=\"68\">\u03b3</text></g></svg></div>"};
const SYM={H:"väte",He:"helium",Li:"litium",C:"kol",N:"kväve",O:"syre"};
function nota(A,Z,X,ch="",cls="mid",color=false){
  const a=color?`<span class="c-mass">${A}</span>`:A, z=color?`<span class="c-z">${Z}</span>`:Z;
  const c=ch?`<span class="ch">${ch.replace("-","−")}</span>`:"<span></span>";
  return `<span class="nota ${cls}" aria-label="${X}, masstal ${A}, atomnummer ${Z}${ch?", laddning "+ch:""}"><span class="nums"><span>${a}</span><span>${z}</span></span><span>${X}</span>${c}</span>`;
}
function atom(p,n,e,opt={}){
  const N=p+n, r=10, pts=[], sp=opt.spread?12.5:8.2;
  for(let i=0;i<N;i++){const rr=N===1?0:sp*Math.sqrt(i+.5),t=i*2.39996;pts.push([rr*Math.cos(t),rr*Math.sin(t)])}
  // blanda protoner och neutroner jämnt
  const kinds=[];let pi=0,ni=0;for(let i=0;i<N;i++){(pi/p<=ni/(n||1)&&pi<p)||ni>=n?(kinds.push("p"),pi++):(kinds.push("n"),ni++)}
  const maxR=pts.reduce((m,[x,y])=>Math.max(m,Math.hypot(x,y)),0);
  const ring=Math.max(22,maxR+r+5), s1=ring+30, s2=ring+64, size=opt.tight?Math.ceil((e>2?s2:s1)+16):Math.max(132,Math.ceil(s2+14)), c=size;
  let g=`<svg viewBox="0 0 ${2*size} ${2*size}" aria-hidden="true">`;
  g+=`<circle cx="${c}" cy="${c}" r="${s1}" fill="none" stroke="var(--shell)" stroke-width="5"/>`;
  const KK=opt.shells?opt.shells[0]:Math.min(e,2), LL=opt.shells?opt.shells[1]:Math.max(e-2,0);
  if(LL>0||opt.alwaysL) g+=`<circle cx="${c}" cy="${c}" r="${s2}" fill="none" stroke="var(--shell)" stroke-width="5"/>`;
  g+=`<circle cx="${c}" cy="${c}" r="${ring}" fill="none" stroke="var(--ring)" stroke-width="3"/>`;
  // rita bakifrån och fram så att kärnan ser packad ut
  pts.map((q,i)=>[q,kinds[i]]).sort((a,b)=>Math.hypot(...b[0])-Math.hypot(...a[0])).forEach(([[x,y],k])=>{
    g+=`<circle cx="${c+x}" cy="${c+y}" r="${r}" fill="url(#g${k==="p"?"P":"N"})"/>`;
    if(k==="p") g+=`<text x="${c+x}" y="${c+y+4.5}" text-anchor="middle" font-size="13" font-weight="900" fill="#fff">+</text>`;
  });
  const shells=[[KK,s1,0],[LL,s2,-90]];
  shells.forEach(([k,R,off])=>{for(let i=0;i<k;i++){const t=(off+i*360/k)*Math.PI/180,x=c+R*Math.cos(t),y=c+R*Math.sin(t);
    g+=`<circle cx="${x}" cy="${y}" r="11" fill="url(#gE)"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="16" font-weight="900" fill="#fff">−</text>`}});
  return g+"</svg>";
}
function counts(p,n,e,showCharge){
  const q=p-e, qs=q===0?"0 (neutral)":(q>0?"+"+q:"−"+(-q));
  return `<ul class="counts-list"><li>Protoner: <b>${p}</b> st</li><li>Neutroner: <b>${n}</b> st</li><li>Elektroner: <b>${e}</b> st</li>${showCharge?`<li>Laddning: <b>${qs}</b></li>`:""}</ul>`;
}
function part(k){const t=k==="p"?"+":k==="e"?"−":"";
  return `<svg class="pic" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="url(#g${k.toUpperCase()})"/>${t?`<text x="20" y="27" text-anchor="middle" font-size="22" font-weight="900" fill="#fff">${t}</text>`:""}</svg>`;}
function mini(cls,title,alt,A,Z,X,ch,p,n,e,why,foot){
  return `<div class="mini ${cls}"><h4>${title}</h4>${alt?`<p class="alt">${alt}</p>`:""}${nota(A,Z,X,ch,"mid")}${atom(p,n,e)}${counts(p,n,e,true)}${why?`<p class="why">${why}</p>`:""}${foot?`<p class="foot">${foot}</p>`:""}</div>`;
}
function spektrum(){
  const band=[["Radiovågor","#e05a5f","längst"],["Mikrovågor","#f19a4b",""],["Infrarött (IR)","#e67e22",""],["Synligt ljus","rainbow","400–700 nm"],["Ultraviolett (UV)","#7a5ae0",""],["Röntgen","#3d8bd9",""],["Gamma","#2a9d8f","kortast"]];
  const W=700,bw=94,gap=7,x0=(W-(bw*7+gap*6))/2;
  let g=`<svg class="spek" viewBox="0 0 ${W} 210" role="img" aria-label="Det elektromagnetiska spektrumet från radiovågor till gammastrålning">
    <defs><linearGradient id="rainbow" x1="0" x2="1"><stop offset="0" stop-color="#e53935"/><stop offset=".2" stop-color="#fb8c00"/><stop offset=".4" stop-color="#fdd835"/><stop offset=".6" stop-color="#43a047"/><stop offset=".8" stop-color="#1e88e5"/><stop offset="1" stop-color="#8e24aa"/></linearGradient>
    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>
    <text x="${W/2}" y="18" text-anchor="middle" font-weight="900" font-size="15" fill="var(--ink)">Frekvens och energi</text>
    <line x1="${x0}" y1="32" x2="${W-x0}" y2="32" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#arr)"/>
    <text x="${x0}" y="50" font-size="12" fill="var(--muted)">lägre</text><text x="${W-x0}" y="50" text-anchor="end" font-size="12" fill="var(--muted)">högre</text>`;
  band.forEach(([n,c,w],i)=>{const x=x0+i*(bw+gap);
    g+=`<rect x="${x}" y="60" width="${bw}" height="70" rx="10" fill="${c==="rainbow"?"url(#rainbow)":c}"/>`;
    const parts=n.split(" ");g+=`<text x="${x+bw/2}" y="${parts.length>1?92:100}" text-anchor="middle" font-weight="900" font-size="13" fill="#fff" stroke="rgba(0,0,0,.25)" stroke-width="2.5" paint-order="stroke">${parts.map((t,j)=>`<tspan x="${x+bw/2}" dy="${j?16:0}">${t}</tspan>`).join("")}</text>`;
    if(w) g+=`<text x="${x+bw/2}" y="148" text-anchor="middle" font-size="12" fill="var(--muted)">${w}</text>`;});
  g+=`<line x1="${W-x0}" y1="165" x2="${x0}" y2="165" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#arr)"/>
    <text x="${x0}" y="184" font-size="12" fill="var(--muted)">längre</text><text x="${W-x0}" y="184" text-anchor="end" font-size="12" fill="var(--muted)">kortare</text>
    <text x="${W/2}" y="203" text-anchor="middle" font-weight="900" font-size="15" fill="var(--ink)">Våglängd</text></svg>`;
  return `<div class="tablewrap spekwrap">${g}</div>`;
}
