# Mallar

Kopiera en mall, klistra in den i rätt fil och ändra texten.
Allt innehåll ligger i ämnets mapp, t.ex. `fysik/atom-och-karnfysik/`.

Innehåll:
1. [Nytt arbetsområde](#1-nytt-arbetsområde)
2. [Nytt kapitel](#2-nytt-kapitel)
3. [Kapiteltext](#3-kapiteltext)
4. [Uppgifter – alla typer](#4-uppgifter)
5. [Kontrollera](#5-kontrollera)

---

## 1. Nytt arbetsområde

1. Skapa en mapp i ämnets mapp, t.ex. `kemi/syror-och-baser/`, med undermapparna `texter/`, `uppgifter/`, `bilder/` (och `aktiviteter/` om det behövs).
2. Skapa filen `omrade.js` i mappen:

```js
Portal.omrade({
  id: "syror-och-baser",              // samma som mappens namn
  namn: "Syror och baser",
  text: "pH, indikatorer och neutralisation.",
  arskurs: [8, 9],
  kapitel: [
    { id: "ph", namn: "pH-skalan", farg: "blue", text: "Sura, neutrala och basiska lösningar." }
  ],
  aktiviteter: []
});
```

3. Lägg till mappens namn i `konfig/amnen.js` under rätt ämne:

```js
{ id: "kemi", namn: "Kemi", ..., omraden: ["syror-och-baser"] },
```

## 2. Nytt kapitel

Lägg till en rad i `kapitel` i `omrade.js`:

```js
{ id: "ph", namn: "pH-skalan", farg: "blue", text: "Kort beskrivning.",
  arskurs: [8, 9],                // valfritt
  nivaForskjutning: { 8: 1 },     // valfritt: en nivå svårare för åk 8
  maxPerOvning: 1 }               // valfritt
```

Skapa sedan `texter/ph.md` och `uppgifter/ph.js`.
`farg` kan vara `green`, `blue`, `yellow`, `orange` eller `purple`.

## 3. Kapiteltext

Filen `texter/<kapitel>.md`:

````markdown
---
kapitel: ph
---

# pH-skalan

Första stycket blir ingress.

## Sura lösningar {#sura}

### Underrubrik

Vanlig text. **Fet**, *kursiv*, H~2~O (nedsänkt), 10^3^ (upphöjt).

- punkt
- (åk 9) punkt bara för åk 9

> **Begrepp**
> **syra** – ämne som gör en lösning sur
> **pH** – ett mått på hur sur en lösning är

> **Exempel:** Citronsaft har pH ungefär 2.

> **Faktaruta** {.gul}
> En ruta med egen rubrik. Färg: .gron .bla .gul .rod .lila .orange

> **Fördjupning: något extra**
> Visas hopfällt. Eleven klickar för att läsa.

![Beskrivning av bilden](bilder/ph-skala.png)
Bild: Bildtext under bilden.

| Lösning | pH |
|---|---|
| Citron | 2 |
| Vatten | 7 |

::: åk 7-8
Text bara för åk 7 och 8.
:::

::: åk 9
Text bara för åk 9.
:::

::: rad
> **Ruta 1** {.bla}
> Rutor och bilder i ett ::: rad-block hamnar bredvid varandra.

> **Ruta 2** {.gron}
> Tom rad mellan två bilder gör dem till egna rutor.
:::

> **Viktigt att komma ihåg**
> - Det viktigaste i avsnittet.
> - Den här rutan visas också när eleven trycker Plugga.

## Basiska lösningar {#basiska åk=9}

Ett avsnitt bara för åk 9.
````

**Regler**
- `## Rubrik {#id}` startar ett avsnitt. Id:t används för att koppla uppgifter: `avsnitt: ["sura"]`.
- *Begrepp* hamnar bredvid stycket ovanför (dator) eller under det (mobil). Alla begrepp samlas i Ordlistan.
- *Viktigt att komma ihåg* ska finnas i varje avsnitt.
- Knapparna *Öva på det här* skapas automatiskt.
- `{#id dold}` på ett avsnitt döljer det.

**Ritningar** – skrivs på en egen rad, eller i texten:

| Skriv | Visar |
|---|---|
| `[[atom p=6 n=6 e=6]]` | atom med partiklar och skal |
| `[[nota 13 6 C]]` | atomnotation. `[[nota 12 6 C +]]` med laddning. Lägg till `stor` och `farg` |
| `[[partikel p]]` | proton (p), neutron (n) eller elektron (e) |
| `[[partiklar n → p + e]]` | rad med partiklar och tecken |
| `[[del dalton]]` | liten bild: proton neutron elektron karna skal alfa foton dalton thomson rutherford bohr schrodinger |
| `[[kvark u]]` | kvark: u d c s t b |
| `[[spektrum]]` | elektromagnetiska spektrumet |
| `[[atomkort titel="Väte" A=1 Z=1 X=H p=1 n=0 e=1 text="..." farg=gron]]` | kort med notation, atom och antal |

---

## 4. Uppgifter

Filen `uppgifter/<kapitel>.js` innehåller en lista:

```js
Portal.uppgifter([

  { id: "ph-1", kapitel: "ph", avsnitt: ["sura"], titel: "...", typ: "flerval", nivaer: [1],
    varianter: [ ... ] },

  { id: "ph-2", ... }

]);
```

Gemensamt för alla typer:

| Fält | Betyder |
|---|---|
| `id` | unikt namn – ändras aldrig |
| `kapitel` | kapitlets id |
| `avsnitt` | (valfritt) lista med avsnitt, t.ex. `["sura"]` |
| `titel` | rubriken eleven ser |
| `typ` | se nedan |
| `nivaer` | `[0]`, `[1]`, `[2]` eller flera, t.ex. `[0, 1]` |
| `nivaerPerArskurs` | (valfritt) t.ex. `{ 7: [2] }` – gäller före kapitlets nivaForskjutning |
| `arskurs` | (valfritt) t.ex. `[9]` – annars samma som avsnittet/kapitlet |
| `rullista` | (valfritt) nivåer där eleven väljer i rullista, t.ex. `[0]` |
| `maxPerOvning` | (valfritt) högst så många varianter per övning |
| `grupp` | (valfritt) uppgifter med samma grupp räknas som en uppgift |
| `dold` | `true` = används inte |
| `varianter` | lista – en slumpas varje gång |

Glöm inte kommatecken mellan uppgifterna.

### Lucktext – `lucktext`

Text med luckor. Svaret skrivs inom hakparentes. Med `rullista` väljer eleven ord ur `ordlista` i stället för att skriva.

- `[proton]` = rätt svar
- `[protoner/proton]` = flera svar godkänns (olika svar)
- `[proton|protonen]` = samma svar skrivet på olika sätt
- `[*protoner] och [*neutroner]` = valfri ordning, men olika svar
- `inte: ["..."]` i en variant = svar som inte godkänns
- `facit: "..."` i en variant = det som visas som rätt svar

```js
{ id: "str-jon-text2", kapitel: "stralning", avsnitt: ["jonis"], titel: "Joniserande strålning – vad händer med atomen? (fyll i)",
  typ: "lucktext", nivaer: [2],
  varianter: [
    { text: "När joniserande strålning slår loss en [elektron] från en neutral atom får atomen fler [protoner|proton] än elektroner. Då blir atomen en [positiv|positivt laddad] jon." }
  ] },
```

### Flerval – `flerval`

En fråga med alternativ. `s: "ratt"`, `s: "fel"` eller `s: "delvis"` (delvis rätt). `f` är förklaringen eleven ser efter rättning.

```js
{ id: "str-beta-vad", kapitel: "stralning", avsnitt: ["partikel"], titel: "Betastrålning – vad strålar ut?",
  typ: "flerval", nivaer: [1],
  varianter: [
    { fraga: "Vad beskriver bäst det som strålar ut vid betastrålning?",
      alt: [ { t: "En proton från kärnan", s: "fel", f: "protonen stannar kvar i kärnan." },
             { t: "En elektron från skalet", s: "fel", f: "elektronen kommer från kärnan, inte från elektronskalen." },
             { t: "En elektron från kärnan", s: "ratt", f: "en neutron i kärnan omvandlas till en proton och en elektron, och elektronen strålar ut." },
             { t: "En foton från kärnan", s: "fel", f: "fotoner från kärnan är gammastrålning." } ] }
  ] },
```

### Sant eller falskt – `santfalskt`

Lista med påståenden: `["påstående", true]` eller `false`.

```js
{ id: "atom-tomrum-sf", kapitel: "atom", avsnitt: ["tomrum"], titel: "Atomen är mest tomrum – sant eller falskt",
  typ: "santfalskt", nivaer: [1],
  varianter: [
    { pst: [["Atomen består mest av tomrum.", true], ["Nästan hela atomens massa finns i kärnan.", true],
            ["Atomkärnan är ungefär lika stor som hela atomen.", false], ["Elektronerna fyller upp hela atomen.", false],
            ["En proton är ungefär 2000 gånger tyngre än en elektron.", true]] },
    { pst: [["Om atomen var stor som Globen skulle kärnan vara stor som ett blåbär.", true], ["Elektronerna står för det mesta av atomens massa.", false],
            ["Mellan kärnan och elektronerna finns luft.", false], ["Rutherford kom fram till att atomen har en liten kärna.", true],
            ["Atomkärnan är positivt laddad.", true]] }
  ] },
```

### Vilket passar inte in? – `udda`

Några ord där ett inte passar. `svar` är det udda ordet. Med `fragor: [...]` blir det flera grupper i samma uppgift.

```js
{ id: "str-udda", kapitel: "stralning", titel: "Strålning – vilket begrepp passar inte in?",
  typ: "udda", nivaer: [1],
  // Varje variant har tre frågor: ord = fyra begrepp, svar = det som inte passar in, f = förklaring
  varianter: [
    { fragor: [
      { ord: ["Synligt ljus", "UV-strålning", "Röntgenstrålning", "Alfastrålning"], svar: "Alfastrålning", f: "de andra är elektromagnetisk strålning." },
      { ord: ["Proton", "Neutron", "Elektron", "Foton"], svar: "Foton", f: "de andra är delar av atomen." },
      { ord: ["Gammastrålning", "Alfastrålning", "Betastrålning", "Mikrovågor"], svar: "Mikrovågor", f: "de andra sänds ut från atomkärnan." } ] },
    { fragor: [
      { ord: ["Alfastrålning", "Betastrålning", "Gammastrålning", "Partikelstrålning"], svar: "Gammastrålning", f: "den är elektromagnetisk strålning. De andra hör till partikelstrålning." },
      { ord: ["Radiovågor", "Mikrovågor", "Infrarött", "Betastrålning"], svar: "Betastrålning", f: "de andra är elektromagnetisk strålning." },
      { ord: ["Heliumkärna", "Alfapartikel", "2 protoner och 2 neutroner", "Elektron"], svar: "Elektron", f: "de andra beskriver alfastrålning." } ] },
    { fragor: [
      { ord: ["Foton", "UV-strålning", "Synligt ljus", "Röntgenstrålning"], svar: "Foton", f: "de andra är namn på typer av elektromagnetisk strålning." },
      { ord: ["Röntgenstrålning", "Gammastrålning", "Alfastrålning", "Synligt ljus"], svar: "Synligt ljus", f: "de andra är joniserande strålning." },
      { ord: ["Betapartikel", "Elektron", "Betastrålning", "Heliumkärna"], svar: "Heliumkärna", f: "de andra hör till betastrålning." } ] },
    { fragor: [
      { ord: ["Elektron", "Alfapartikel", "Betastrålning", "Foton"], svar: "Foton", f: "de andra tre hör till partikelstrålning. Fotonen hör till elektromagnetisk strålning." },
      { ord: ["Foton", "Gammastrålning", "Elektromagnetisk strålning", "Alfapartikel"], svar: "Alfapartikel", f: "de andra hör till elektromagnetisk strålning." },
      { ord: ["Våglängd", "Frekvens", "Energi", "Laddning"], svar: "Laddning", f: "de andra används för att beskriva elektromagnetiska vågor. Fotoner har ingen laddning." } ] }
  ] },
```

### Sortera – `sortera`

`grupper` är rubrikerna. Varje sak i `saker` får numret på sin grupp (0 = första gruppen).

```js
{ id: "str-sortera", kapitel: "stralning", titel: "Typer av strålning – sortera begrepp",
  typ: "sortera", nivaer: [1],
  varianter: [
    { grupper: ["Elektromagnetisk", "Partikelstrålning"],
      saker: [["Synligt ljus", 0], ["UV-strålning", 0], ["Röntgenstrålning", 0], ["Gammastrålning", 0], ["Radiovågor", 0], ["Alfastrålning", 1], ["Betastrålning", 1]] }
  ] },
```

### Dra till beskrivning – `dra`

Eleven drar begrepp till rätt beskrivning. `par: [[begrepp, beskrivning], ...]`.

```js
{ id: "str-para", kapitel: "stralning", titel: "Strålning – para ihop begrepp",
  typ: "dra", nivaer: [1],
  varianter: [
    { rubrik: "Dra varje begrepp till rätt beskrivning. Varje begrepp passar bara på ett ställe.",
      par: [["Elektromagnetisk strålning", "Strålning som består av fotoner"], ["Partikelstrålning", "Strålning som består av delar av atomkärnan"],
            ["Alfastrålning", "Består av heliumkärnor"], ["Betastrålning", "Består av elektroner"],
            ["Synligt ljus", "Elektromagnetisk strålning som ögat kan uppfatta"], ["Gammastrålning", "Elektromagnetisk strålning med mycket hög energi från atomkärnan"]] }
  ] },
```

### Para ihop – `para`

Två kolumner som ska paras ihop. `"bild:proton"` visar en bild i stället för text (proton, neutron, elektron, karna, skal, alfa, foton …).

```js
{ id: "atom-para-bild", kapitel: "atom", avsnitt: ["delar"], titel: "Atomens delar – bild och namn",
  typ: "para", nivaer: [0],
  varianter: [
    { rubrik: "Para ihop bilden med rätt namn.",
      par: [["bild:proton", "Proton"], ["bild:neutron", "Neutron"], ["bild:elektron", "Elektron"],
            ["bild:karna", "Atomkärna"], ["bild:skal", "Elektronskal"]] }
  ] },
```

### Dra i tabell – `dratabell`

En tabell där eleven drar bitar till rätt ruta. Första kolumnen står fast. `"bild:dalton"` = bild, `"modell:dalton|Dalton"` = bild med namn.

```js
{ id: "atom-modeller-tid", kapitel: "atom", avsnitt: ["modeller"], titel: "Atommodeller – tidslinje",
  typ: "dratabell", nivaer: [1], tidslinje: true,
  varianter: [
    { rubrik: "Dra atommodellerna till rätt år på tidslinjen.", tidslinje: true,
      rubriker: ["År", "Atommodell"],
      rader: [["1807", "modell:dalton|Dalton"], ["1897", "modell:thomson|Thomson"], ["1911", "modell:rutherford|Rutherford"], ["1913", "modell:bohr|Bohr"], ["1926", "modell:schrodinger|Schrödinger"]] }
  ] },
```

### Märk ut i bild – `markera`

Numrerad bild av en atom. `delar` = vilka delar som numreras, `svar` = godkända namn för varje del.

```js
{ id: "atom-bild", kapitel: "atom", avsnitt: ["delar"], titel: "Atomens delar – bild",
  typ: "markera", nivaer: [0, 1], rullista: [0],
  delar: ["proton", "neutron", "elektron", "atomkärna", "elektronskal"],
  svar: {
    proton: ["proton", "protoner", "protonen"],
    neutron: ["neutron", "neutroner", "neutronen"],
    elektron: ["elektron", "elektroner", "elektronen"],
    atomkärna: ["atomkärna", "atomkärnan", "kärna", "kärnan"],
    elektronskal: ["elektronskal", "elektronskalet", "skal", "skalet"]
  },
  varianter: [{}] },   // numreringen i bilden blandas varje gång,
```

### Bygg atom – `bygg`

Eleven bygger en atom med rätt antal protoner, neutroner och elektroner.

```js
{ id: "atom-bygg", kapitel: "atom", avsnitt: ["delar"], titel: "Atomens delar – skapa bild",
  typ: "bygg", nivaer: [1],
  varianter: [
    { namn: "väte",      p: 1, n: 0, e: 1 },
    { namn: "helium",    p: 2, n: 2, e: 2 }
  ] },
```

### Elektronskal – `skal`

Fråga om ett elektronskals namn och hur många elektroner det rymmer. `skal: 1` = K, 2 = L …

```js
{ id: "atom-skal-max", kapitel: "atom", avsnitt: ["skal"], titel: "Elektronskal – namn och max antal",
  typ: "skal", nivaer: [2], treFragor: true,   // frågar även max om det INTE är yttersta skalet
  varianter: [{ skal: 1 }, { skal: 2 }, { skal: 3 }, { skal: 4 }, { skal: 5 }, { skal: 6 }] },
```

### Bygg med kvarkar – `kvark`

Eleven bygger en proton eller neutron av kvarkar.

```js
{ id: "atom-kvark", kapitel: "atom", avsnitt: ["kvarkar"], titel: "Bygg med kvarkar",
  typ: "kvark", nivaer: [2],
  varianter: [{ visaLaddning: true }, { visaLaddning: false }] },
```

### Kvarktabell – `kvarktabell`

Pussel med kvarkarnas generationer. Inga inställningar.

```js
{ id: "atom-kvarktabell", kapitel: "atom", avsnitt: ["kvarkar"], titel: "Kvarkar – generationer",
  typ: "kvarktabell", nivaer: [2],
  varianter: [{}] },
```

### Reglage – `reglage`

Eleven ställer in protoner, neutroner och elektroner för atomen. `A` = masstal, `Z` = atomnummer, `X` = beteckning, `ch` = laddning (t.ex. "+" eller "2-").

```js
{ id: "not-jon", kapitel: "notation", titel: "Bygg jonen",
  typ: "reglage", nivaer: [2],
  varianter: [
    { X: "H", A: 1, Z: 1, ch: "+" },   { X: "H", A: 1, Z: 1, ch: "-" },
    { X: "Li", A: 7, Z: 3, ch: "+" },  { X: "Be", A: 9, Z: 4, ch: "2+" },
    { X: "N", A: 14, Z: 7, ch: "3-" }, { X: "O", A: 16, Z: 8, ch: "2-" }
  ] },
```

### Skriva atomnotation – `skrivnotation`

Eleven ser en atom och skriver dess atomnotation.

```js
{ id: "not-skriv-2", kapitel: "notation", avsnitt: ["rakna"], titel: "Räkna partiklarna – skriva atomnotation",
  typ: "skrivnotation", nivaer: [2], visaReglage: false,  // bara bilden – eleven räknar själv
  varianter: [
    { namn: "väte", X: "H", A: 3, Z: 1 },     { namn: "helium", X: "He", A: 6, Z: 2 },
    { namn: "litium", X: "Li", A: 8, Z: 3 },  { namn: "bor", X: "B", A: 11, Z: 5 },
    { namn: "kol", X: "C", A: 14, Z: 6 },     { namn: "kväve", X: "N", A: 13, Z: 7 },
    { namn: "syre", X: "O", A: 17, Z: 8 }
  ] },
```

### Ändra med reglage – `andra`

Eleven gör om en atom till en isotop, jon eller ett annat ämne.

```js
{ id: "sam-andra", kapitel: "samband", titel: "Ändra atomen",
  typ: "andra", nivaer: [1],
  // atomer som eleven kan få börja med (slumpas)
  start: [ { namn: "litium", X: "Li", A: 7, Z: 3 }, { namn: "beryllium", X: "Be", A: 9, Z: 4 },
           { namn: "bor", X: "B", A: 11, Z: 5 },    { namn: "kol", X: "C", A: 12, Z: 6 },
           { namn: "kväve", X: "N", A: 14, Z: 7 },  { namn: "syre", X: "O", A: 16, Z: 8 } ],
  varianter: [ { mal: "isotop" }, { mal: "jon+" }, { mal: "jon-" }, { mal: "amne" } ] },
```

### Fyll i tabell – `isotoptabell`

Eleven fyller i antal partiklar för isotoper.

```js
{ id: "sam-vate", kapitel: "samband", avsnitt: ["isotop"], titel: "Vätets isotoper",
  typ: "isotoptabell", nivaer: [1],
  varianter: [
    { isotoper: [ { namn: "Protium", sub: "Väte-1", Z: 1, A: 1 },
                  { namn: "Deuterium", sub: "Väte-2", Z: 1, A: 2 },
                  { namn: "Tritium", sub: "Väte-3", Z: 1, A: 3 } ] }
  ] },
```

---

## 5. Kontrollera

Öppna `struktur.html` (lägg till `/struktur.html` efter portalens adress). Där syns hela portalen och varningar, t.ex. avsnitt utan uppgifter eller uppgifter som pekar på ett avsnitt som inte finns.

Öppna `granska.html` för att se och prova alla uppgifter.

Om något saknas på sidan: titta efter ett glömt kommatecken eller en hakparentes som inte stängs. Varningen *Kunde inte läsa …* på översikten visar vilken fil som har felet.
