# STRUKTUR – Studieportalen

Det här dokumentet beskriver hur portalen är uppbyggd och hur innehållet styrs.
Allt innehåll (texter, uppgifter, årskurser, nivåer) ändras i konfig- och textfiler.
Koden i `motor/` behöver man inte röra för att lägga till innehåll.

Sidan är statisk och ligger på GitHub Pages. Repot är publikt – inget på sidan är hemligt.

---

## 1. Hierarki

```
Portal
└─ Ämne                 fysik, matematik, biologi, kemi
   └─ Arbetsområde      t.ex. Atom- och kärnfysik            [årskurs]
      ├─ Kapitel        t.ex. Strålning                       [årskurs]
      │  └─ Avsnitt     t.ex. Alfastrålning (#alfa)           [årskurs]
      ├─ Uppgifter      kopplas till kapitel och/eller avsnitt
      └─ Aktiviteter    fristående lektioner, t.ex. Kol-14-datering
```

- Årskurs kan sättas på arbetsområde, kapitel, avsnitt, stycken i texten och uppgifter.
  Det som inte är märkt ärver från nivån ovanför.
- Samma nivåsystem gäller i hela portalen. Ingen egen färg per ämne.

## 2. Sidor

| Sida | Innehåll |
|---|---|
| Startsida | Välj ämne. Eleven väljer årskurs en gång: Alla / 7 / 8 / 9 (sparas i webbläsaren). |
| Ämnessida | Lista över arbetsområden som gäller vald årskurs. |
| Arbetsområde | Tre knappar: **Läs**, **Öva**, **Aktiviteter**. |
| Läs | Kapiteltext med sticky meny över avsnitten. Efter varje avsnitt: rutan *Viktigt att komma ihåg* och knappen *Öva på det här*. Sist: *Öva på hela kapitlet*. |
| Öva | Välj kapitel och nivå (stjärnor), eller *Bara kör*. Från en uppgift kan eleven öppna texten (*Plugga*) – visar samma *Viktigt*-ruta som i Läs. |
| Aktiviteter | Fristående lektioner (HTML). |
| `granska.html` | Dold sida (bara via länk). Alla uppgifter listade så att läraren snabbt kan prova dem. |
| `struktur.html` | Dold sida. Automatisk översikt över hela portalen, med varningar (se avsnitt 9). |

## 3. Mappar

```
/index.html                     startsida
/granska.html                   dold granskningssida
/struktur.html                  dold översikt
/mallar.md                      färdiga mallar att kopiera för varje uppgiftstyp
/STRUKTUR.md                    det här dokumentet

/motor/                         all kod – rörs inte för innehåll
   portal.js  las.js  ova.js  stil.css
   typer/                       en fil per uppgiftstyp

/konfig/
   amnen.js                     vilka ämnen som finns
   elevnivaer.js                fördelning av uppgiftsnivåer per stjärna och årskurs

/fysik/
   atom-och-karnfysik/
      omrade.js                 arbetsområdet och dess kapitel
      texter/                   en Markdown-fil per kapitel
         atom.md  notation.md  samband.md  stralning.md
      uppgifter/                en fil per kapitel
         atom.js  notation.js  samband.js  stralning.js
      aktiviteter/
         kol14.html
      bilder/
/matematik/  /biologi/  /kemi/  samma upplägg
```

## 4. Id-regler

- Allt har ett kort id utan mellanslag och å/ä/ö: `stralning`, `alfa`, `str-alfa-sf`.
- **Id ändras aldrig.** Namn och rubriker kan bytas fritt.
- Länkar, kopplingar och elevens sparade läge bygger på id.
- `dold: true` döljer arbetsområde, kapitel, avsnitt, text eller uppgift utan att ta bort den.

## 5. Arbetsområde och kapitel – `omrade.js`

```js
const OMRADE = {
  id: "atom-och-karnfysik",
  amne: "fysik",
  namn: "Atom- och kärnfysik",
  arskurs: [7, 8, 9],
  kapitel: [
    { id: "atom",      namn: "Atomens uppbyggnad", arskurs: [7, 8, 9], nivaForskjutning: { 9: -1 } },
    { id: "notation",  namn: "Atomnotation",       arskurs: [9] },
    { id: "samband",   namn: "Samband – isotop, ämne, jon", arskurs: [9] },
    { id: "stralning", namn: "Strålning",          arskurs: [9] }
  ],
  aktiviteter: [
    { id: "kol14", namn: "Kol-14-datering", fil: "aktiviteter/kol14.html", arskurs: [9] }
  ]
};
```

Avsnitten definieras i textfilen (rubriker med `##`), inte här.

## 6. Nivåer

**Uppgiftsnivå** – hur svår en uppgift är: 0, 1 eller 2.

**Elevnivå** – antal stjärnor eleven väljer: 1–4. Varje stjärna drar uppgifter från
uppgiftsnivåerna enligt en fördelning i procent. *Bara kör* = 2 stjärnor.

`konfig/elevnivaer.js`:
```js
const ELEVNIVAER = {
  standard: {                       // används om årskursen saknas nedan
    1: { 0: 50, 1: 50 },
    2: { 0: 15, 1: 70, 2: 15 },
    3: { 1: 75, 2: 25 },
    4: { 1: 30, 2: 70 }
  },
  7: { /* egen fördelning för åk 7 */ },
  9: { /* egen fördelning för åk 9 */ }
};
```

**Samma uppgift kan ha olika nivå i olika årskurser.** Exempel: Atomens delar är nivå 0 för åk 9
men nivå 1 för åk 7 och 8. Det ställs in på två sätt:

1. **Kapitel som grund:** `nivaForskjutning: { 9: -1 }` – alla uppgifter i kapitlet blir en nivå
   lättare för åk 9 (aldrig under 0 eller över 2).
2. **Uppgift som undantag:** `nivaerPerArskurs: { 9: [0] }` – gäller före kapitlets inställning.

En duktig åk 7-elev får utmaning genom fler stjärnor, och en åk 9-elev som behöver det kan välja färre.

## 7. Uppgifter – `uppgifter/<kapitel>.js`

```js
{ id: "str-alfa-sf",
  titel: "Alfastrålning – sant eller falskt",
  kapitel: "stralning",
  avsnitt: ["alfa"],              // valfritt – en eller flera
  arskurs: [9],                   // valfritt – annars från kapitlet
  nivaer: [1],
  nivaerPerArskurs: { 7: [2] },   // valfritt
  maxPerOvning: 1,                // högst så många varianter per övning
  grupp: "alfa-grund",            // valfritt – uppgifter i samma grupp räknas som varianter av varandra
  typ: "santfalskt",
  varianter: [ ... ] }
```

**Urval i en övning:** ingen variant upprepas, `grupp` och `maxPerOvning` begränsar,
och om det tar slut på en nivå tas uppgifter från de andra nivåerna inom stjärnans fördelning.

**Rätta svar (lucktext):**

| Skrivsätt | Betyder |
|---|---|
| `[proton]` | rätt svar |
| `[protoner/proton]` | flera svar godkänns |
| `[*protoner] och [*neutroner]` | luckorna får fyllas i valfri ordning, men olika svar |
| `inte: [...]` | svar som uttryckligen inte godkänns |
| `facit: "..."` | det som visas som rätt svar |

Matte och kemi kommer behöva fler sätt att ange svar, till exempel tal med marginal
(3,14 = 3.14), enheter, bråk och kemiska formler. De läggs till som nya typer utan att
ändra det som redan finns.

Färdiga mallar för varje typ finns i `mallar.md`.

## 8. Texter – `texter/<kapitel>.md`

```markdown
---
kapitel: stralning
arskurs: [9]
---

# Strålning
Första stycket blir ingress.

## Alfastrålning {#alfa}
### Vad är alfastrålning?
- Atomkärnan skickar ut en heliumkärna.

> **Begrepp**
> **alfapartikel** – heliumkärna som skickas ut från en atomkärna

![En alfapartikel](bilder/alfa.png)
Bild: Bildtext under bilden.

[[atom p=2 n=2 e=0]]
Bild: Inbyggd ritning med bildtext.

> **Exempel:** I en brandvarnare finns americium-241.

> **Viktigt att komma ihåg**
> - En alfapartikel = 2 protoner + 2 neutroner.
```

| Skrivsätt | Blir |
|---|---|
| `#` | sidans rubrik; första stycket blir ingress |
| `## Rubrik {#id}` | avsnitt – rubrik och knapp i den sticky menyn |
| `###` | underrubrik i färg |
| `> **Begrepp**` | ruta i marginalen bredvid stycket ovanför (dator), direkt under stycket ovanför (mobil). Begreppen samlas också till en ordlista per arbetsområde. |
| `> **Exempel:**` | ruta med färgad kant |
| `> **Viktigt att komma ihåg**` | ruta sist i avsnittet – visas också vid *Plugga* i Öva |
| `![text](bilder/fil.png)` | egen bild; raden `Bild:` direkt under blir bildtext |
| `[[atom ...]]` | inbyggd ritning |

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

> - (åk 9) Protoner består av tre kvarkar.   ← enskild punkt
```

- Omärkt text visas för alla årskurser som kapitlet gäller.
- Elev med vald årskurs ser bara sitt; menyn anpassas.
- Väljer eleven *Alla* visas allt, med en liten etikett (t.ex. "åk 9") på det som är extra.
- *Öva på det här* räknar bara uppgifter för elevens årskurs.

## 9. Översiktssidan – `struktur.html`

Byggs automatiskt från alla filer. Visar trädet ämne → arbetsområde → kapitel → avsnitt
med årskurs och antal uppgifter per nivå. Kan filtreras på årskurs.

Varnar för:
- avsnitt utan uppgifter
- kapitel utan text eller utan *Viktigt*-ruta
- uppgifter som pekar på ett kapitel eller avsnitt som inte finns
- nivåer med få uppgifter för en årskurs

Varje rad länkar till texten eller uppgiften. Kan skrivas ut.

## 10. Länkar

Varje del får en egen adress som kan delas, t.ex. i Classroom:

```
…/fysik/atom-och-karnfysik/las.html#alfa
…/fysik/atom-och-karnfysik/ova.html?kapitel=stralning&niva=2
…/fysik/atom-och-karnfysik/ova.html?avsnitt=alfa&arskurs=9
```

## 11. Sparande

- Inget sparas på någon server och inga personuppgifter hanteras.
- Elevens webbläsare minns vald årskurs, senaste läsposition och bästa resultat per övning.
- Försvinner om eleven byter enhet eller rensar webbläsaren.
- Byggs så att inloggning och databas kan läggas till senare, om det behövs.

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

## 14. Flytt av befintligt innehåll

Fysik → Atom- och kärnfysik:
- kapitel `atom`, `notation`, `samband`, `stralning` (uppgifter och sammanfattningar från nuvarande sida)
- aktivitet `kol14`
