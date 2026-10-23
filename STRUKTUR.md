# STRUKTUR – Studieportalen

Det här dokumentet beskriver hur portalen är uppbyggd och hur innehållet styrs.
Allt innehåll (texter, uppgifter, årskurser, nivåer) ändras i konfig- och textfiler.
Koden i `motor/` behöver man inte röra för att lägga till innehåll.
Färdiga mallar att kopiera finns i [`mallar.md`](mallar.md).

Sidan är statisk och ligger på GitHub Pages. Repot är publikt – inget på sidan är hemligt.

---

## 1. Hierarki

```
Portal
└─ Ämne                 fysik, matematik, biologi, kemi
   └─ Arbetsområde      t.ex. Atom- och kärnfysik            [årskurs]
      ├─ Kapitel        t.ex. Strålning                       [årskurs]
      │  └─ Avsnitt     t.ex. Partikelstrålning (#partikel)   [årskurs]
      ├─ Uppgifter      kopplas till kapitel och/eller avsnitt
      └─ Aktiviteter    fristående lektioner, t.ex. Kol-14-metoden
```

- Årskurs kan sättas på arbetsområde, kapitel, avsnitt, stycken i texten och uppgifter.
  Det som inte är märkt ärver från nivån ovanför.
- Samma nivåsystem gäller i hela portalen. Ingen egen färg per ämne.

## 2. Sidor

| Sida | Innehåll |
|---|---|
| Startsida | Välj årskurs (Alla / 7 / 8 / 9) och ämne. Årskursen sparas i webbläsaren och kan ändras uppe till höger på alla sidor. |
| Ämnessida | Arbetsområden som gäller vald årskurs. |
| Arbetsområde | Tre knappar: **Läs**, **Öva**, **Aktiviteter**, och en lista med kapitlen. |
| Läs | Kapitlen som kort och en **ordlista** med alla begrepp. I ett kapitel: sticky meny över avsnitten, och efter varje avsnitt rutan *Viktigt att komma ihåg* och knappen *Öva på det här*. Sist: *Öva på hela kapitlet*. *Fortsätt läsa* visar var eleven var senast. |
| Öva | Välj kapitel (eller blandat), stjärnor, antal och rättning – eller *Bara kör*. Knappen *Plugga* visar *Viktigt*-rutorna för uppgiftens avsnitt och hela avsnittstexten. |
| Aktiviteter | Fristående lektioner (HTML). |
| `granska.html` | Dold sida (bara via adressen). Alla uppgifter med bild, varianter och svar. *Prova* öppnar uppgiften. |
| `struktur.html` | Dold sida. Automatisk översikt över hela portalen, med varningar (se avsnitt 9). |

## 3. Mappar

```
/index.html                     portalen
/granska.html                   dold granskningssida
/struktur.html                  dold översikt
/mallar.md                      mallar att kopiera
/STRUKTUR.md                    det här dokumentet
/.nojekyll                      gör att GitHub Pages visar filerna som de är

/motor/                         all kod – rörs inte för innehåll
/konfig/
   amnen.js                     portalens namn och vilka ämnen och arbetsområden som finns
   elevnivaer.js                fördelning av uppgiftsnivåer per stjärna och årskurs

/fysik/
   atom-och-karnfysik/
      omrade.js                 arbetsområdet och dess kapitel
      texter/                   en Markdown-fil per kapitel:  <kapitel-id>.md
      uppgifter/                en fil per kapitel:           <kapitel-id>.js
      aktiviteter/              HTML-filer
      bilder/
/kemi/  /biologi/  /matematik/  samma upplägg
```

Filnamnen styr kopplingen: kapitlet `stralning` har texten `texter/stralning.md`
och uppgifterna `uppgifter/stralning.js`.

## 4. Id-regler

- Allt har ett kort id utan mellanslag och å/ä/ö: `stralning`, `partikel`, `str-beta-vad`.
- **Id ändras aldrig.** Namn och rubriker kan bytas fritt.
- Länkar, kopplingar och elevens sparade läge bygger på id.
- `dold: true` döljer arbetsområde, kapitel eller uppgift. `{#id dold}` döljer ett avsnitt.

## 5. Ämnen, arbetsområden och kapitel

`konfig/amnen.js`:
```js
Portal.amnen([
  { id: "fysik", namn: "Fysik", bild: "[[amne-fysik]]", text: "...",
    omraden: ["atom-och-karnfysik"] },      // mappnamn inne i fysik/
  ...
]);
```

`fysik/atom-och-karnfysik/omrade.js`:
```js
Portal.omrade({
  id: "atom-och-karnfysik",
  namn: "Atom- och kärnfysik",
  arskurs: [7, 8, 9],
  kapitel: [
    { id: "atom",      namn: "Atomens uppbyggnad", farg: "green", arskurs: [7, 8, 9], nivaForskjutning: { 7: 1, 8: 1 } },
    { id: "notation",  namn: "Atomnotation",       farg: "blue",  arskurs: [9], maxPerOvning: 2 },
    { id: "samband",   namn: "Samband – isotop, ämne, jon", farg: "yellow", arskurs: [9] },
    { id: "stralning", namn: "Strålning",          farg: "orange", arskurs: [9] }
  ],
  aktiviteter: [
    { id: "kol14", namn: "Kol-14-metoden", fil: "aktiviteter/kol14.html", arskurs: [9] }
  ]
});
```

Avsnitten definieras i textfilen (rubriker med `##`), inte här.

## 6. Nivåer

**Uppgiftsnivå** – hur svår en uppgift är: 0, 1 eller 2.

**Elevnivå** – antal stjärnor eleven väljer: 1–4. Varje stjärna drar uppgifter från
uppgiftsnivåerna enligt en fördelning i procent. *Bara kör* = 2 stjärnor.

`konfig/elevnivaer.js`:
```js
Portal.elevnivaer({
  standard: {                       // används om årskursen saknas nedan
    1: { 0: 50, 1: 50 },
    2: { 0: 15, 1: 70, 2: 15 },
    3: { 1: 75, 2: 25 },
    4: { 1: 30, 2: 70 }
  },
  7: { /* egen fördelning för åk 7 */ }
});
```

**Samma uppgift kan ha olika nivå i olika årskurser.** Exempel: Atomens delar är nivå 0 för åk 9
men nivå 1 för åk 7 och 8. Det ställs in på två sätt:

1. **Kapitel som grund:** `nivaForskjutning: { 7: 1, 8: 1 }` – alla uppgifter i kapitlet blir en nivå
   svårare för åk 7 och 8 (aldrig under 0 eller över 2).
2. **Uppgift som undantag:** `nivaerPerArskurs: { 7: [2] }` – gäller före kapitlets inställning.

Med *Alla* vald används uppgifternas egna nivåer.
En duktig åk 7-elev får utmaning genom fler stjärnor, och en åk 9-elev som behöver det kan välja färre.

## 7. Uppgifter – `uppgifter/<kapitel>.js`

```js
Portal.uppgifter([
  { id: "str-beta-vad",
    titel: "Betastrålning – vad strålar ut?",
    kapitel: "stralning",
    avsnitt: ["partikel"],          // valfritt – en eller flera
    arskurs: [9],                   // valfritt – annars från avsnittet eller kapitlet
    nivaer: [1],
    nivaerPerArskurs: { 7: [2] },   // valfritt
    maxPerOvning: 1,                // valfritt – högst så många varianter per övning
    grupp: "beta",                  // valfritt – uppgifter i samma grupp räknas som varianter av varandra
    typ: "flerval",
    varianter: [ ... ] }
]);
```

**Urval i en övning:** ingen variant upprepas, `grupp` och `maxPerOvning` begränsar,
och om det tar slut på en nivå tas uppgifter från de andra nivåerna inom stjärnans fördelning.

**Rätta svar (lucktext):**

| Skrivsätt | Betyder |
|---|---|
| `[proton]` | rätt svar |
| `[protoner/proton]` | flera svar godkänns |
| `[proton\|protonen]` | samma svar skrivet på olika sätt |
| `[*protoner] och [*neutroner]` | luckorna får fyllas i valfri ordning, men olika svar |
| `inte: [...]` | svar som uttryckligen inte godkänns |
| `facit: "..."` | det som visas som rätt svar |

Alla 17 uppgiftstyper med exempel finns i `mallar.md`.
Matte och kemi kommer behöva fler typer, till exempel tal med marginal (3,14 = 3.14),
enheter, bråk och kemiska formler. De läggs till i `motor/typer.js` utan att ändra det som finns.

## 8. Texter – `texter/<kapitel>.md`

```markdown
---
kapitel: stralning
---

# Strålning
Första stycket blir ingress.

## Partikelstrålning {#partikel}
### Alfastrålning (α)
- Atomkärnan skickar ut en heliumkärna.

> **Begrepp**
> **alfapartikel** – heliumkärna som skickas ut från en atomkärna

[[partiklar p p n n]]
Bild: En alfapartikel.

![En brandvarnare](bilder/brandvarnare.jpg)
Bild: Bildtext under bilden.

> **Exempel:** I en brandvarnare finns americium-241.

> **Viktigt att komma ihåg**
> - En alfapartikel = 2 protoner + 2 neutroner.
```

| Skrivsätt | Blir |
|---|---|
| `#` | sidans rubrik; första stycket blir ingress |
| `## Rubrik {#id}` | avsnitt – rubrik och knapp i den sticky menyn |
| `###` | underrubrik i färg |
| `> **Begrepp**` | ruta bredvid stycket ovanför (dator), under stycket (mobil). Samlas också i Ordlistan. |
| `> **Exempel:**` | ruta med färgad kant |
| `> **Viktigt att komma ihåg**` | ruta sist i avsnittet – visas också vid *Plugga* i Öva |
| `> **Fördjupning: …**` | hopfälld ruta |
| `> **Annan rubrik** {.gul}` | faktaruta. Färger: `.gron .bla .gul .rod .lila .orange` |
| `::: rad` … `:::` | rutor och bilder bredvid varandra |
| `![text](bilder/fil.png)` | egen bild; raden `Bild:` direkt under blir bildtext |
| `[[atom p=2 n=2 e=0]]` | inbyggd ritning (lista i `mallar.md`) |
| `\| a \| b \|` | tabell |
| `H~2~O`, `10^3^` | nedsänkt och upphöjt |

*Öva på det här* och *Öva på hela kapitlet* skapas automatiskt utifrån uppgifternas `kapitel` och `avsnitt`.

**Text per årskurs:**

```markdown
## Kvarkar {#kvarkar åk=9}         ← helt avsnitt bara för åk 9

::: åk 7-8                         ← stycke bara för åk 7–8
Kärnan är mycket liten.
:::

::: åk 9
Kärnan är ungefär 100 000 gånger mindre än atomen.
:::

> - (åk 9) Det yttersta skalet har aldrig mer än 8 elektroner.   ← enskild punkt
```

- Omärkt text visas för alla årskurser som kapitlet gäller.
- Elev med vald årskurs ser bara sitt; menyn anpassas.
- Väljer eleven *Alla* visas allt, med en liten etikett (t.ex. "åk 9") på det som är extra.
- Uppgifter kopplade till ett avsnitt med årskurs gäller bara den årskursen.
- *Öva på det här* räknar bara uppgifter för elevens årskurs.

## 9. Översiktssidan – `struktur.html`

Byggs automatiskt från alla filer. Visar trädet ämne → arbetsområde → kapitel → avsnitt
med årskurs och antal uppgifter per nivå. Kan filtreras på årskurs och skrivas ut.

Varnar för:
- filer som inte kan läsas (t.ex. ett glömt kommatecken)
- avsnitt utan uppgifter
- kapitel utan text och avsnitt utan *Viktigt*-ruta
- uppgifter som pekar på ett kapitel eller avsnitt som inte finns, eller har okänd typ
- id som finns två gånger
- nivåer med färre än 3 uppgifter för en årskurs

Varje rad länkar till texten eller uppgiften.

## 10. Länkar

Varje del har en egen adress som kan delas, t.ex. i Classroom:

```
…/#/fysik
…/#/fysik/atom-och-karnfysik
…/#/fysik/atom-och-karnfysik/las/stralning
…/#/fysik/atom-och-karnfysik/las/stralning/partikel
…/#/fysik/atom-och-karnfysik/ova?kapitel=stralning
…/#/fysik/atom-och-karnfysik/ova?kapitel=stralning&avsnitt=partikel&kor        ← startar direkt (Bara kör)
…/#/fysik/atom-och-karnfysik/ova?kapitel=atom&stjarnor=3
…/#/fysik/atom-och-karnfysik/aktiviteter/kol14
```

## 11. Sparande

- Inget sparas på någon server och inga personuppgifter hanteras.
- Elevens webbläsare minns vald årskurs, senaste läsposition och bästa resultat per övning.
- Försvinner om eleven byter enhet eller rensar webbläsaren.
- Byggt så att inloggning och databas kan läggas till senare, om det behövs.

## 12. Bilder

- Läggs i `bilder/` i arbetsområdets mapp.
- Alltid med bildtext.
- Stora foton krymps innan de läggs in (max ca 1600 px bred).

## 13. Beslut

- **Kapitel återanvänds inte** mellan arbetsområden. Ämnen som finns i flera årskurser
  (t.ex. geometri i matte) löses med årskurs på kapitel, avsnitt och stycken i texten.
- **Kollegor kan bidra.** Till en början genom att skapa filer enligt den här strukturen
  (textfil, uppgiftsfil, bilder) med hjälp av `mallar.md`. Filerna läggs in i repot och
  kontrolleras på `struktur.html`. Direkt redigering i repot och automatisk kontroll kan läggas till senare.
- Tillgänglighet (uppläsning av text, kontrast, tangentbordsstyrning) tas med vid bygget.

## 14. Innehåll som flyttats hit

Fysik → Atom- och kärnfysik:
- kapitel `atom`, `notation`, `samband`, `stralning` med uppgifter och texter från första övningssidan
- `atom` gäller åk 7–9 och är en nivå svårare för åk 7 och 8; avsnittet Kvarkar gäller bara åk 9
- aktivitet `kol14`
