# Så här gör du – inställningar i konfigurationen

Korta instruktioner för allt man kan ställa in. Varje del säger **vilken fil** du ändrar och **vad** du skriver.
Mallar för texter och alla uppgiftstyper finns i [mallar.md](mallar.md). Hur allt hänger ihop står i [STRUKTUR.md](STRUKTUR.md).

## Innan du börjar – du behöver inte kunna koda

Allt du ändrar är **text i filer**. Tre regler räcker:

1. **Kopiera alltid något som redan finns** och ändra i kopian. Mallarna finns i [mallar.md](mallar.md).
2. **Ändra bara det som står inom citattecken** `"så här"` och siffror. Låt `{ } [ ] : ,` vara kvar.
3. **Kommatecken mellan saker i en lista.** Efter varje `}` som följs av en ny `{` ska det stå ett `,`.

Textfilerna (`.md`) är ännu enklare – där skriver du vanlig text, med några tecken för rubriker och rutor.

### Så ändrar du en fil på GitHub

1. Gå till repot på github.com och klicka dig fram till filen, t.ex. `fysik` → `atom-och-karnfysik` → `texter` → `stralning.md`.
2. Klicka på **pennan** uppe till höger (*Edit this file*).
3. Gör din ändring.
4. Klicka på den gröna knappen **Commit changes…** och sedan **Commit changes** igen.
5. Vänta en minut och ladda om portalen.

**Ny fil:** *Add file → Create new file*. Skriv hela sökvägen som namn, t.ex. `kemi/syror-och-baser/omrade.js` – mapparna skapas automatiskt.
**Bild:** gå till mappen `bilder` och välj *Add file → Upload files*.

### Kontrollera efteråt

Öppna `struktur.html` (lägg till `/struktur.html` efter portalens adress). Står det **Kunde inte läsa …** finns ett skrivfel i den filen – oftast ett glömt kommatecken. Ångra är alltid möjligt: varje ändring sparas i historiken (*History*).

---

## Innehåll

**Portalen**
1. [Byta portalens namn](#1-byta-portalens-namn)
2. [Lägga till eller ändra ett ämne](#2-lägga-till-eller-ändra-ett-ämne)

**Arbetsområden och kapitel**

3. [Skapa ett nytt arbetsområde](#3-skapa-ett-nytt-arbetsområde)
4. [Lägga till ett kapitel](#4-lägga-till-ett-kapitel)
5. [Ändra ordningen på kapitlen](#5-ändra-ordningen-på-kapitlen)
6. [Bestämma vilka årskurser något gäller](#6-bestämma-vilka-årskurser-något-gäller)
7. [Dölja något utan att ta bort det](#7-dölja-något-utan-att-ta-bort-det)
8. [Lägga till en aktivitet](#8-lägga-till-en-aktivitet)

**Nivåer**

9. [Ändra vad stjärnorna betyder](#9-ändra-vad-stjärnorna-betyder)
10. [Göra ett helt kapitel lättare eller svårare för en årskurs](#10-göra-ett-helt-kapitel-lättare-eller-svårare-för-en-årskurs)
11. [Ge en enskild uppgift en annan nivå för en årskurs](#11-ge-en-enskild-uppgift-en-annan-nivå-för-en-årskurs)

**Uppgifter**

12. [Lägga till en uppgift](#12-lägga-till-en-uppgift)
13. [Koppla en uppgift till ett avsnitt](#13-koppla-en-uppgift-till-ett-avsnitt)
14. [Bestämma vilka svar som räknas som rätt](#14-bestämma-vilka-svar-som-räknas-som-rätt)
15. [Rullista i stället för att skriva](#15-rullista-i-stället-för-att-skriva)
16. [Hur många gånger en uppgift får komma i en övning](#16-hur-många-gånger-en-uppgift-får-komma-i-en-övning)

**Texter**

17. [Skriva ett avsnitt](#17-skriva-ett-avsnitt)
18. [Rutor: begrepp, exempel, viktigt, fakta, fördjupning](#18-rutor)
19. [Bilder och ritningar](#19-bilder-och-ritningar)
20. [Text för en viss årskurs](#20-text-för-en-viss-årskurs)

**Övrigt**

21. [Länka direkt till ett kapitel eller en övning](#21-länka-direkt)
22. [Vanliga fel](#22-vanliga-fel)
23. [Snabböversikt: alla inställningar](#23-snabböversikt-alla-inställningar)

---

## 1. Byta portalens namn

**Fil:** `konfig/amnen.js`

```js
Portal.installningar({
  titel: "Studieportalen",
  text: "Läs, plugga och öva i NO och matematik."
});
```

`titel` visas uppe till vänster och på startsidan. `text` visas under rubriken på startsidan.

---

## 2. Lägga till eller ändra ett ämne

**Fil:** `konfig/amnen.js`

```js
Portal.amnen([
  { id: "fysik", namn: "Fysik", bild: "[[amne-fysik]]",
    text: "Atomer, strålning, krafter, energi och elektricitet.",
    omraden: ["atom-och-karnfysik"] },
  ...
]);
```

| Fält | Betyder |
|---|---|
| `id` | ämnets mapp, t.ex. `fysik` → mappen `fysik/` |
| `namn` | visas på startsidan |
| `text` | kort beskrivning på kortet |
| `bild` | `[[amne-fysik]]`, `[[amne-kemi]]`, `[[amne-biologi]]` eller `[[amne-matematik]]` |
| `omraden` | arbetsområdena i ämnet, i den ordning de ska visas = mappnamn |

Ett ämne med tom lista `omraden: []` visas som *Kommer snart*.

---

## 3. Skapa ett nytt arbetsområde

1. Skapa en mapp i ämnets mapp, t.ex. `kemi/syror-och-baser/`.
   *På GitHub: Add file → Create new file, och skriv `kemi/syror-och-baser/omrade.js` som namn – mapparna skapas automatiskt.*
2. Skriv i `omrade.js`:

```js
Portal.omrade({
  id: "syror-och-baser",
  namn: "Syror och baser",
  text: "pH, indikatorer och neutralisation.",
  bild: "[[amne-kemi]]",
  arskurs: [8, 9],
  kapitel: [
    { id: "ph", namn: "pH-skalan", farg: "blue", text: "Sura, neutrala och basiska lösningar." }
  ],
  aktiviteter: []
});
```

3. Lägg till mappnamnet i `konfig/amnen.js`: `omraden: ["syror-och-baser"]`.
4. Skapa texten `kemi/syror-och-baser/texter/ph.md` och uppgifterna `kemi/syror-och-baser/uppgifter/ph.js` (se 12 och 17).

| Fält | Betyder |
|---|---|
| `id` | samma som mappens namn – ändras aldrig |
| `namn`, `text` | visas för eleven |
| `bild` | (valfritt) ritning på kortet |
| `arskurs` | vilka årskurser arbetsområdet gäller, t.ex. `[7, 8, 9]` |
| `kapitel` | lista med kapitel (se 4) |
| `aktiviteter` | lista med aktiviteter (se 8) |
| `dold` | `true` = visas inte |

---

## 4. Lägga till ett kapitel

**Fil:** `<ämne>/<arbetsområde>/omrade.js` – lägg till en rad i `kapitel`.

```js
{ id: "ph", namn: "pH-skalan", farg: "blue", text: "Sura, neutrala och basiska lösningar." },
```

| Fält | Betyder |
|---|---|
| `id` | kapitlets id – styr filnamnen `texter/<id>.md` och `uppgifter/<id>.js` |
| `namn` | kapitlets namn |
| `text` | kort beskrivning på kortet i Öva |
| `farg` | `green`, `blue`, `yellow`, `orange` eller `purple` |
| `bild` | (valfritt) ritning på kortet, t.ex. `"[[kort-atom]]"` |
| `arskurs` | (valfritt) annars samma som arbetsområdet |
| `nivaForskjutning` | (valfritt) se 10 |
| `maxPerOvning` | (valfritt) se 16 |
| `dold` | `true` = visas inte |

Ett kapitel kan sakna text eller uppgifter. Då visas det bara där det finns innehåll.

---

## 5. Ändra ordningen på kapitlen

**Fil:** `omrade.js` – flytta raderna i `kapitel`. Ordningen i listan är ordningen på sidan.
Samma sak för arbetsområden: ordningen i `omraden` i `konfig/amnen.js`.

---

## 6. Bestämma vilka årskurser något gäller

Skriv `arskurs` med en lista. Det som inte har `arskurs` ärver från nivån ovanför.

| Vad | Var | Skriv |
|---|---|---|
| Arbetsområde | `omrade.js` | `arskurs: [7, 8, 9]` |
| Kapitel | `omrade.js`, raden i `kapitel` | `arskurs: [9]` |
| Avsnitt | textfilen, rubriken | `## Kvarkar {#kvarkar åk=9}` |
| Stycke | textfilen | `::: åk 7-8` … `:::` (se 20) |
| Punkt i en lista | textfilen | `- (åk 9) Texten` |
| Uppgift | uppgiftsfilen | `arskurs: [9]` |
| Aktivitet | `omrade.js`, raden i `aktiviteter` | `arskurs: [9]` |

En uppgift som är kopplad till ett avsnitt med årskurs gäller automatiskt bara den årskursen.
Elever som valt **Alla** ser allt, med en liten etikett på det som bara gäller vissa årskurser.

---

## 7. Dölja något utan att ta bort det

| Vad | Skriv |
|---|---|
| Arbetsområde, kapitel, uppgift | `dold: true` |
| Avsnitt i en text | `## Rubrik {#id dold}` |

Ta bort `dold: true` för att visa igen.

---

## 8. Lägga till en aktivitet

1. Lägg HTML-filen i `<ämne>/<arbetsområde>/aktiviteter/`, t.ex. `kol14.html`.
2. Lägg till en rad i `aktiviteter` i `omrade.js`:

```js
aktiviteter: [
  { id: "kol14", namn: "Kol-14-metoden", fil: "aktiviteter/kol14.html", arskurs: [9],
    text: "Hur gammalt är ett fynd? Använd halveringstiden för kol-14." }
]
```

Knappen **Aktiviteter** syns bara när det finns minst en aktivitet för elevens årskurs.

---

## 9. Ändra vad stjärnorna betyder

**Fil:** `konfig/elevnivaer.js`

Varje stjärna (1–4) drar uppgifter från nivå 0, 1 och 2 enligt procent. Summan ska bli 100.

```js
Portal.elevnivaer({
  standard: {
    1: { 0: 50, 1: 50 },          // 1 stjärna: hälften nivå 0, hälften nivå 1
    2: { 0: 15, 1: 70, 2: 15 },
    3: { 1: 75, 2: 25 },
    4: { 1: 30, 2: 70 }
  },
  7: {                            // egen fördelning för åk 7 (valfritt)
    1: { 0: 70, 1: 30 },
    2: { 0: 30, 1: 60, 2: 10 },
    3: { 1: 80, 2: 20 },
    4: { 1: 40, 2: 60 }
  }
});
```

`standard` gäller alla årskurser som inte har en egen del. *Bara kör* använder alltid 2 stjärnor.
Glöm inte kommatecknet efter `}` när du lägger till en årskurs.

---

## 10. Göra ett helt kapitel lättare eller svårare för en årskurs

**Fil:** `omrade.js`, raden för kapitlet.

```js
{ id: "atom", namn: "Atomens uppbyggnad", ..., nivaForskjutning: { 7: 1, 8: 1 } }
```

- `1` = en nivå svårare, `-1` = en nivå lättare.
- Exemplet: en uppgift på nivå 0 räknas som nivå 1 för åk 7 och 8.
- Nivån blir aldrig lägre än 0 eller högre än 2.

---

## 11. Ge en enskild uppgift en annan nivå för en årskurs

**Fil:** uppgiftsfilen, i uppgiften.

```js
{ id: "atom-kvark", ..., nivaer: [2], nivaerPerArskurs: { 8: [1] } }
```

`nivaerPerArskurs` gäller före kapitlets `nivaForskjutning`.
I `granska.html` står uppgiftens nivå för varje årskurs under rubriken.

---

## 12. Lägga till en uppgift

**Fil:** `<ämne>/<arbetsområde>/uppgifter/<kapitel>.js`

1. Välj typ i [mallar.md](mallar.md) och kopiera mallen.
2. Klistra in den i listan, efter en annan uppgift. Sätt **kommatecken** mellan uppgifterna.
3. Ge den ett nytt `id`, rätt `kapitel`, `titel`, `nivaer` och dina `varianter`.

```js
Portal.uppgifter([

  { id: "ph-sant", kapitel: "ph", avsnitt: ["sura"], titel: "Syror – sant eller falskt",
    typ: "santfalskt", nivaer: [1],
    varianter: [
      { pst: [["Citronsaft är sur.", true], ["Vatten har pH 1.", false]] }
    ] },

]);
```

Varje variant är en egen version av uppgiften. En slumpas varje gång.

---

## 13. Koppla en uppgift till ett avsnitt

Avsnittets id står i textfilen: `## Sura lösningar {#sura}`.
Skriv samma id i uppgiften: `avsnitt: ["sura"]`. Flera går bra: `avsnitt: ["sura", "basiska"]`.

Då händer tre saker:
- uppgiften räknas i knappen *Öva på det här* under avsnittet
- *Plugga* visar det avsnittets *Viktigt att komma ihåg*
- uppgiften gäller samma årskurser som avsnittet

Utan `avsnitt` hör uppgiften till hela kapitlet.

---

## 14. Bestämma vilka svar som räknas som rätt

**Lucktext** – svaret skrivs inom `[ ]` i texten:

| Skriv | Godkänns |
|---|---|
| `[proton]` | proton |
| `[protoner/proton]` | protoner eller proton (olika svar) |
| `[kärnan\|atomkärnan]` | samma svar skrivet på olika sätt |
| `[*protoner] och [*neutroner]` | i valfri ordning, men inte samma ord två gånger |

Stora och små bokstäver, punkt och kommatecken spelar ingen roll.

I en variant kan du också skriva:
- `inte: ["luft"]` – svar som aldrig godkänns
- `facit: "Text"` – det som visas som rätt svar, i stället för det första alternativet

**Flerval** – varje alternativ har `s: "ratt"`, `s: "fel"` eller `s: "delvis"`, och `f` = förklaringen eleven ser.

**Sant eller falskt** – `["påstående", true]` eller `false`.

Övriga typer: se [mallar.md](mallar.md).

---

## 15. Rullista i stället för att skriva

**Fil:** uppgiftsfilen (lucktext och märk ut i bild).

```js
{ id: "atom-text", ..., typ: "lucktext", nivaer: [0, 1], rullista: [0],
  ordlista: ["protoner", "neutroner", "elektroner", "kärna", "skal"], ... }
```

- `rullista: [0]` = på nivå 0 väljer eleven ur en lista, på nivå 1 skriver eleven själv.
- `ordlista` = orden i rullistan. Ta gärna med några fel ord.

---

## 16. Hur många gånger en uppgift får komma i en övning

En uppgift kommer normalt **en gång** per övning, och samma variant kommer aldrig två gånger.

| Vad | Var | Skriv |
|---|---|---|
| Alla uppgifter i ett kapitel | `omrade.js`, kapitlet | `maxPerOvning: 2` |
| En enskild uppgift | uppgiftsfilen | `maxPerOvning: 3` |
| Flera uppgifter som är för lika | uppgiftsfilen, i varje uppgift | `grupp: "valfritt-namn"` |

Uppgifter med samma `grupp` räknas som en och samma uppgift.

---

## 17. Skriva ett avsnitt

**Fil:** `<ämne>/<arbetsområde>/texter/<kapitel>.md`

```markdown
---
kapitel: ph
---

# pH-skalan

Första stycket blir ingress.

## Sura lösningar {#sura}

### Underrubrik

Vanlig text. **Fet**, *kursiv*, H~2~O, 10^3^.

- punkt
- punkt
```

- `#` = kapitlets rubrik (en gång, överst).
- `##` = nytt avsnitt. Blir en knapp i menyn. `{#sura}` är avsnittets id – ändras aldrig.
- Ett kapitel behöver inte ha avsnitt. Utan `##` blir hela texten ett avsnitt, och knappen **i** visar dess *Viktigt att komma ihåg*.
- `###` = underrubrik.
- Tom rad = nytt stycke.
- Tabell: `| Lösning | pH |`, sedan `|---|---|`, sedan en rad per rad i tabellen.

---

## 18. Rutor

Rutor skrivs med `>` först på varje rad.

```markdown
> **Begrepp**
> **syra** – ämne som gör en lösning sur
> **pH** – mått på hur sur en lösning är

> **Exempel:** Citronsaft har pH ungefär 2.

> **Viktigt att komma ihåg**
> - Det viktigaste i avsnittet.

> **Visste du?** {.gul}
> En faktaruta med egen rubrik.

> **Fördjupning: mer om pH**
> Visas hopfällt.
```

| Ruta | Hur den visas |
|---|---|
| **Begrepp** | bredvid stycket ovanför (dator), under stycket (mobil). Samlas i Ordlistan. Placera den direkt efter stycket den hör till. |
| **Exempel** | ruta med orange kant |
| **Viktigt att komma ihåg** | grön ruta. Visas också i *Plugga*. Skriv en i varje avsnitt. |
| **Annan rubrik** `{.färg}` | faktaruta. Färger: `.gron` `.bla` `.gul` `.rod` `.lila` `.orange` |
| **Fördjupning…** eller **Extra…** | hopfälld, eleven klickar för att läsa |

**Rutor bredvid varandra:**

```markdown
::: rad
> **Ruta 1** {.bla}
> Text

> **Ruta 2** {.gron}
> Text
:::
```

---

## 19. Bilder och ritningar

**Egen bild:**
1. Lägg bildfilen i `<ämne>/<arbetsområde>/bilder/`. *På GitHub: Add file → Upload files.*
2. Skriv i texten:

```markdown
![Kort beskrivning av bilden](bilder/ph-skala.png)
Bild: Bildtexten som syns under bilden.
```

Lägg till `{.liten}` efter bilden för en mindre bild. Krymp stora foton till högst ca 1600 px bredd innan du laddar upp.

**Inbyggda ritningar:** på egen rad, eller inne i en tabell eller mening.

| Skriv | Visar |
|---|---|
| `[[atom p=6 n=6 e=6]]` | atom med protoner, neutroner och elektroner |
| `[[atom p=6 n=5 e=6 skalnamn valens]]` | … med skalens namn (K-skal, L-skal) och pil till valenselektronerna. `valens="Yttre elektroner"` ger egen text |
| `[[nota 13 6 C]]` | atomnotation. `[[nota 12 6 C +]]` med laddning. Lägg till `stor` och/eller `farg` |
| `[[partikel p]]` | en proton (`p`), neutron (`n`) eller elektron (`e`) |
| `[[partiklar n → p + e]]` | rad med partiklar och tecken |
| `[[del bohr]]` | liten bild: `proton` `neutron` `elektron` `karna` `skal` `alfa` `foton` `dalton` `thomson` `rutherford` `bohr` `schrodinger` |
| `[[kvark u]]` | kvark: `u` `d` `c` `s` `t` `b` |
| `[[spektrum]]` | elektromagnetiska spektrumet |
| `[[spektrum vagor]]` | … med en våg som blir tätare mot gammastrålningen |
| `[[elektronhopp]]` | elektron hoppar till ett inre skal och skickar ut ljus. `[[elektronhopp upp]]` = ljus tas upp och elektronen hoppar ut. `farg=gul` `orange` `rod` `gron` `bla` `lila` = ljusets färg |
| `[[atomkort titel="Väte" A=1 Z=1 X=H p=1 n=0 e=1 text="..." farg=gron]]` | kort med notation, atom och antal partiklar |

Flera ritningar på rader direkt efter varandra blir en bild. Tom rad emellan gör dem till egna bilder.

---

## 20. Text för en viss årskurs

```markdown
## Kvarkar {#kvarkar åk=9}          ← hela avsnittet

::: åk 7-8                          ← ett eller flera stycken
Kärnan är mycket liten.
:::

::: åk 9
Kärnan är ungefär 100 000 gånger mindre än atomen.
:::

- (åk 9) En punkt bara för åk 9     ← en punkt i en lista
```

Skrivsätt för årskurser: `åk 9`, `åk 7-8`, `åk 7,9`.

---

## 21. Länka direkt

Kopiera adressen från webbläsaren, eller bygg den själv:

| Länk till | Adress (efter portalens adress) |
|---|---|
| Ämne | `#/fysik` |
| Arbetsområde | `#/fysik/atom-och-karnfysik` |
| Kapiteltext | `#/fysik/atom-och-karnfysik/las/stralning` |
| Avsnitt | `#/fysik/atom-och-karnfysik/las/stralning/partikel` |
| Öva på ett kapitel | `#/fysik/atom-och-karnfysik/ova?kapitel=stralning` |
| … med vald nivå | `#/fysik/atom-och-karnfysik/ova?kapitel=stralning&stjarnor=3` |
| Starta direkt (Bara kör) | `#/fysik/atom-och-karnfysik/ova?kapitel=stralning&avsnitt=partikel&kor` |
| Aktivitet | `#/fysik/atom-och-karnfysik/aktiviteter/kol14` |

---

## 22. Vanliga fel

| Det som händer | Troligt fel |
|---|---|
| Ett helt arbetsområde eller kapitel saknar uppgifter | Glömt kommatecken mellan två uppgifter, eller en `]` eller `}` som inte stängs. `struktur.html` visar *Kunde inte läsa …* |
| Texten visas inte | Filen heter inte exakt som kapitlets `id`, t.ex. `Stralning.md` i stället för `stralning.md` |
| Uppgiften syns inte under *Öva på det här* | `avsnitt: [...]` stämmer inte med `{#id}` i texten. `struktur.html` varnar |
| En ruta blir vanlig text | En rad i rutan saknar `>` först |
| Allt efter en bild eller ruta hamnar bredvid varandra i spalter | `::: rad` saknar en avslutande rad med bara `:::`. `struktur.html` varnar |
| Bilden syns inte | Fel filnamn eller sökväg. Stora och små bokstäver räknas: `Bild.PNG` ≠ `bild.png` |
| Arbetsområdet syns inte | Mappnamnet saknas i `omraden` i `konfig/amnen.js`, eller `arskurs` passar inte elevens val |
| Ändringen syns inte | Vänta en minut och ladda om sidan |

Citattecken: använd raka `"` i `.js`-filerna, inte typografiska `”`.

---

## 23. Snabböversikt: alla inställningar

**`konfig/amnen.js`**

| | |
|---|---|
| `Portal.installningar({ titel, text })` | portalens namn |
| `Portal.amnen([{ id, namn, text, bild, omraden }])` | ämnen och deras arbetsområden |

**`konfig/elevnivaer.js`**

| | |
|---|---|
| `Portal.elevnivaer({ standard: {...}, 7: {...} })` | procent per nivå för varje stjärna |

**`<ämne>/<arbetsområde>/omrade.js`**

| Arbetsområde | Kapitel | Aktivitet |
|---|---|---|
| `id` | `id` | `id` |
| `namn` | `namn` | `namn` |
| `text` | `text` | `text` |
| `bild` | `bild` | `bild` |
| `arskurs` | `arskurs` | `arskurs` |
| `kapitel` | `farg` | `fil` |
| `aktiviteter` | `nivaForskjutning` | |
| `dold` | `maxPerOvning` | |
| | `dold` | |

**`uppgifter/<kapitel>.js`** – varje uppgift

| Fält | Krävs |
|---|---|
| `id`, `kapitel`, `titel`, `typ`, `nivaer`, `varianter` | ja |
| `avsnitt`, `arskurs`, `nivaerPerArskurs`, `rullista`, `ordlista`, `maxPerOvning`, `grupp`, `dold` | nej |

**`texter/<kapitel>.md`**

| | |
|---|---|
| `#` · `##  {#id åk=9 dold}` · `###` | rubriker |
| `> **Begrepp**` · `> **Exempel:**` · `> **Viktigt att komma ihåg**` · `> **Rubrik** {.färg}` · `> **Fördjupning…**` | rutor |
| `::: rad` · `::: åk 7-8` | block |
| `![text](bilder/fil.png)` · `Bild:` · `[[ritning]]` | bilder |
| `- (åk 9)` · `H~2~O` · `10^3^` · `**fet**` · `*kursiv*` | i texten |
