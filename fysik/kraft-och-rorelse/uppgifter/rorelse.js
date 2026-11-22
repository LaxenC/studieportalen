/* =====================================================================
   UPPGIFTER – Kraft skapar rörelse
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
   Avsnitt: kraft-gor, motkraft, rorelser, medelhastighet, friktion, luftmotstand, troghet
   ===================================================================== */
Portal.uppgifter([
  { id: "ro-motkraft-lucka", kapitel: "rorelse", avsnitt: ["motkraft"], titel: "Motkraft – fyll i",
    typ: "lucktext", nivaer: [1], rullista: [1], punkter: ["motkraft"],
    ordlista: ["tillbaka", "motkraft", "bordet", "koppen", "tyngdkraft", "drar"],
    varianter: [
      { text: "Koppen trycker på [bordet].\nBordet trycker [tillbaka] på koppen lika mycket.\nDen kraften kallas [motkraft]." }
    ] },

  { id: "ro-motkraft-flerval", kapitel: "rorelse", avsnitt: ["motkraft"], titel: "Vem trycker tillbaka?",
    typ: "flerval", nivaer: [1, 2], punkter: ["motkraft"],
    varianter: [
      { bild: "![En kopp står på ett bord](bilder/kopp-bord.svg)",
        fraga: "Koppen trycker nedåt på bordet. Vad gör bordet?",
        alt: [ { t: "Bordet trycker uppåt på koppen lika mycket", s: "ratt", f: "när en kropp trycker på en annan, trycker den andra tillbaka lika mycket. Det är en motkraft." },
               { t: "Bordet trycker inte alls", s: "fel", f: "bordet trycker tillbaka på koppen – annars skulle koppen åka rakt igenom bordet." },
               { t: "Bordet drar koppen nedåt", s: "fel", f: "bordet trycker uppåt på koppen. Det är jorden som drar koppen nedåt." } ] },
      { fraga: "Du trycker handen mot en vägg. Vad händer?",
        alt: [ { t: "Väggen trycker tillbaka mot handen lika mycket", s: "ratt", f: "det är en motkraft. Du kan känna den i handen." },
               { t: "Väggen trycker tillbaka lite mindre", s: "fel", f: "motkraften är alltid lika stor som kraften du trycker med." },
               { t: "Bara du trycker – väggen gör ingenting", s: "fel", f: "väggen trycker tillbaka lika mycket. Det är därför du känner den i handen." } ] }
    ] },

  { id: "ro-motkraft-gang", kapitel: "rorelse", avsnitt: ["motkraft"], titel: "Förklara: hur kan du gå?",
    typ: "forklara", nivaer: [2, 3], rullista: [2], punkter: ["motkraft"],
    varianter: [
      { bild: "![En person går. Foten trycker marken bakåt och marken trycker foten framåt.](bilder/gang.svg)",
        fraga: "Förklara med ordet motkraft hur du kan gå framåt.",
        begrepp: ["trycker", "bakåt", "framåt", "motkraft"],
        modell: "Foten **trycker** marken **bakåt**. Marken trycker tillbaka lika mycket **framåt** på foten. Det är en **motkraft**. **Därför** kommer jag framåt." }
    ] },

  { id: "ro-motkraft-simning", kapitel: "rorelse", avsnitt: ["motkraft"], titel: "Förklara: hur kan du simma?",
    typ: "forklara", nivaer: [3], punkter: ["motkraft"],
    varianter: [
      { fraga: "När du simmar tar du armtag i vattnet. Förklara med ordet motkraft hur du kommer framåt.",
        begrepp: ["trycker", "bakåt", "framåt", "motkraft"],
        modell: "Handen **trycker** vattnet **bakåt**. Vattnet trycker tillbaka lika mycket **framåt** på handen. Det är en **motkraft**. **Därför** kommer jag framåt i vattnet." }
    ] },

  /* ---------- Vad en kraft gör ---------- */

  { id: "ro-kraft-gor-valj", kapitel: "rorelse", avsnitt: ["kraft-gor"], titel: "Vad kan en kraft göra?",
    typ: "valjflera", nivaer: [0, 1], punkter: ["kraft-gor"],
    varianter: [
      { fraga: "Vilka fyra saker kan en kraft göra?",
        ratt: ["Starta en rörelse", "Bromsa en rörelse", "Ändra riktning på en rörelse", "Ändra formen på en kropp"],
        fel: ["Ändra massan på en kropp", "Ändra färgen på en kropp", "Göra en kropp lättare", "Ta bort tyngdkraften"],
        forklaring: "en kraft kan starta, bromsa, ändra riktning och ändra form." }
    ] },

  { id: "ro-kraft-gor-flerval", kapitel: "rorelse", avsnitt: ["kraft-gor"], titel: "Vad gör kraften?",
    typ: "flerval", nivaer: [1], punkter: ["kraft-gor"],
    varianter: [
      { fraga: "Du sparkar på en boll som ligger still. Vad gör kraften?",
        alt: [ { t: "Startar en rörelse", s: "ratt", f: "bollen låg still och börjar röra sig." },
               { t: "Bromsar en rörelse", s: "fel", f: "bollen låg still, så det fanns ingen rörelse att bromsa. Kraften startar en rörelse." },
               { t: "Ändrar formen", s: "fel", f: "det viktiga här är att bollen börjar röra sig. Kraften startar en rörelse." } ] },
      { fraga: "Målvakten fångar bollen. Vad gör kraften?",
        alt: [ { t: "Bromsar en rörelse", s: "ratt", f: "bollen rörde sig och stannar." },
               { t: "Startar en rörelse", s: "fel", f: "bollen rörde sig redan. Målvakten får den att stanna – kraften bromsar." },
               { t: "Ändrar riktning", s: "fel", f: "bollen fortsätter inte åt ett annat håll – den stannar. Kraften bromsar." } ] },
      { fraga: "Bollen studsar mot väggen och åker tillbaka. Vad gör kraften från väggen?",
        alt: [ { t: "Ändrar riktning", s: "ratt", f: "bollen åker åt ett annat håll efter studsen." },
               { t: "Startar en rörelse", s: "fel", f: "bollen rörde sig redan. Väggen får den att byta håll." },
               { t: "Ändrar formen", s: "fel", f: "det som syns är att bollen byter håll. Kraften ändrar riktning." } ] },
      { fraga: "Du trycker ihop en svamp. Vad gör kraften?",
        alt: [ { t: "Ändrar formen", s: "ratt", f: "svampen får en annan form när du trycker på den." },
               { t: "Startar en rörelse", s: "fel", f: "svampen åker inte iväg. Den trycks ihop – kraften ändrar formen." },
               { t: "Ändrar riktning", s: "fel", f: "svampen trycks ihop och får en annan form." } ] }
    ] },

  /* ---------- Krafter tillsammans ---------- */

  { id: "ro-krafter-lucka", kapitel: "rorelse", avsnitt: ["kraft-gor"], titel: "Krafter tillsammans – fyll i",
    typ: "lucktext", nivaer: [1], rullista: [1], punkter: ["krafter-tillsammans"],
    ordlista: ["tar ut varandra", "ändras inte", "största", "samarbetar", "minsta", "ökar"],
    varianter: [
      { text: "Lika stora krafter åt olika håll [tar ut varandra]. Då [ändras inte] rörelsen.\nOlika stora krafter åt olika håll – den [största] kraften vinner.\nKrafter åt samma håll [samarbetar]." }
    ] },

  { id: "ro-lada-ror", kapitel: "rorelse", avsnitt: ["kraft-gor"], titel: "Står lådan kvar eller rör den sig?",
    typ: "flerval", nivaer: [1, 2], punkter: ["krafter-tillsammans"],
    varianter: [
      { bild: "![Lådan dras med 20 N åt vänster och 20 N åt höger](bilder/lada-krafter-1.svg)",
        fraga: "Lådan står still från början. Vad händer?",
        alt: [ { t: "Lådan står kvar", s: "ratt", f: "krafterna är lika stora och åt olika håll. De tar ut varandra." },
               { t: "Lådan rör sig åt vänster", s: "fel", f: "krafterna är lika stora, 20 N åt varje håll. De tar ut varandra." },
               { t: "Lådan rör sig åt höger", s: "fel", f: "krafterna är lika stora, 20 N åt varje håll. De tar ut varandra." } ] },
      { bild: "![Lådan dras med 10 N åt vänster och 30 N åt höger](bilder/lada-krafter-2.svg)",
        fraga: "Lådan står still från början. Vad händer?",
        alt: [ { t: "Lådan rör sig åt höger", s: "ratt", f: "30 N åt höger är större än 10 N åt vänster. Den största kraften vinner." },
               { t: "Lådan rör sig åt vänster", s: "fel", f: "kraften åt höger är störst, 30 N. Den största kraften vinner." },
               { t: "Lådan står kvar", s: "fel", f: "krafterna är olika stora. Den största kraften, 30 N åt höger, vinner." } ] },
      { bild: "![En hand trycker och en hand drar lådan åt höger, båda med 20 N](bilder/lada-krafter-3.svg)",
        fraga: "Lådan står still från början. Vad händer?",
        alt: [ { t: "Lådan rör sig åt höger", s: "ratt", f: "båda krafterna verkar åt höger. De samarbetar." },
               { t: "Lådan står kvar", s: "fel", f: "krafterna verkar åt samma håll, så de tar inte ut varandra. De samarbetar." },
               { t: "Lådan rör sig åt vänster", s: "fel", f: "båda krafterna verkar åt höger." } ] },
      { bild: "![Ett rep drar lådan med 30 N åt vänster och en hand trycker lådan med 30 N åt höger](bilder/lada-krafter-4.svg)",
        fraga: "Lådan står still från början. Vad händer?",
        alt: [ { t: "Lådan står kvar", s: "ratt", f: "repet drar 30 N åt vänster och handen trycker 30 N åt höger. Krafterna är lika stora och tar ut varandra." },
               { t: "Lådan rör sig åt vänster", s: "fel", f: "krafterna är lika stora, 30 N åt varje håll. De tar ut varandra." },
               { t: "Lådan rör sig åt höger", s: "fel", f: "krafterna är lika stora, 30 N åt varje håll. De tar ut varandra." } ] },
      { bild: "![Lådan dras med 15 N åt vänster, trycks med 20 N åt vänster och dras med 30 N åt höger](bilder/lada-krafter-5.svg)",
        fraga: "Lådan står still från början. Vad händer?",
        alt: [ { t: "Lådan rör sig åt vänster", s: "ratt", f: "åt vänster verkar 15 N + 20 N = 35 N. Åt höger verkar 30 N. Kraften åt vänster är störst." },
               { t: "Lådan rör sig åt höger", s: "fel", f: "räkna ihop krafterna åt vänster: 15 N + 20 N = 35 N. Det är mer än 30 N." },
               { t: "Lådan står kvar", s: "fel", f: "åt vänster blir det 15 N + 20 N = 35 N och åt höger 30 N. Krafterna är olika stora." } ] }
    ] },

  { id: "ro-krafter-summa", kapitel: "rorelse", avsnitt: ["kraft-gor"], titel: "Räkna ihop krafterna",
    typ: "lucktext", nivaer: [2], punkter: ["krafter-tillsammans"],
    varianter: [
      { rubrik: "Räkna ut hur stor den sammanlagda kraften blir och åt vilket håll den verkar.",
        text: "Lådan dras med 30 N åt höger och 10 N åt vänster.\nSammanlagd kraft: [20] N åt [höger]." },
      { rubrik: "Räkna ut hur stor den sammanlagda kraften blir och åt vilket håll den verkar.",
        text: "Lådan dras med 20 N åt höger och trycks med 20 N åt höger.\nSammanlagd kraft: [40] N åt [höger]." },
      { rubrik: "Räkna ut hur stor den sammanlagda kraften blir och åt vilket håll den verkar.",
        text: "Lådan dras med 15 N åt höger och 40 N åt vänster.\nSammanlagd kraft: [25] N åt [vänster]." }
    ] },

  { id: "ro-krafter-forklara", kapitel: "rorelse", avsnitt: ["kraft-gor"], titel: "Förklara: varför rör sig lådan?",
    typ: "forklara", nivaer: [2], rullista: [2], punkter: ["krafter-tillsammans"],
    varianter: [
      { bild: "![Lådan dras med 10 N åt vänster och 30 N åt höger](bilder/lada-krafter-2.svg)",
        fraga: "Lådan står still från början. Förklara åt vilket håll lådan rör sig och varför.",
        begrepp: ["olika stora", "största|störst", "vinner", "höger"],
        modell: "Lådan dras med 30 N åt höger och 10 N åt vänster. Krafterna är **olika stora**, **därför** **vinner** den **största** kraften. Lådan rör sig åt **höger**." },
      { bild: "![Lådan dras med 20 N åt vänster och 20 N åt höger](bilder/lada-krafter-1.svg)",
        fraga: "Lådan står still från början. Förklara varför lådan står kvar.",
        begrepp: ["lika stora", "olika håll", "tar ut varandra"],
        modell: "Lådan dras med 20 N åt varje håll. Krafterna är **lika stora** och verkar åt **olika håll**, **därför** **tar** de **ut varandra**. Lådan står kvar." }
    ] },

  /* ---------- Olika slags rörelser ---------- */

  { id: "ro-rorelse-dra", kapitel: "rorelse", avsnitt: ["rorelser"], titel: "Olika slags rörelser – para ihop",
    typ: "dra", nivaer: [0, 1], punkter: ["likformig", "olikformig", "accelererad", "retarderad"],
    varianter: [
      { rubrik: "Dra varje begrepp till rätt beskrivning.",
        par: [["Likformig rörelse", "Samma hastighet och samma riktning hela tiden"],
              ["Olikformig rörelse", "Hastigheten eller riktningen ändras"],
              ["Accelererad rörelse", "Hastigheten ökar"],
              ["Retarderad rörelse", "Hastigheten minskar"]] }
    ] },

  { id: "ro-rorelse-bild", kapitel: "rorelse", avsnitt: ["rorelser"], titel: "Vilken rörelse visar bilden?",
    typ: "flerval", nivaer: [1], punkter: ["likformig", "accelererad", "retarderad"],
    varianter: [
      { bild: "![Kalle cyklar 15 km/h hela tiden](bilder/cykel-likformig.svg)",
        fraga: "Vilken sorts rörelse har Kalle?",
        alt: [ { t: "Likformig rörelse", s: "ratt", f: "hastigheten är 15 km/h hela tiden, och han cyklar rakt fram." },
               { t: "Accelererad rörelse", s: "fel", f: "hastigheten ökar inte – den är 15 km/h hela tiden." },
               { t: "Retarderad rörelse", s: "fel", f: "hastigheten minskar inte – den är 15 km/h hela tiden." } ] },
      { bild: "![Kalles hastighet ökar från 15 km/h till 45 km/h](bilder/cykel-accelererad.svg)",
        fraga: "Vilken sorts rörelse har Kalle?",
        alt: [ { t: "Accelererad rörelse", s: "ratt", f: "hastigheten ökar från 15 km/h till 45 km/h." },
               { t: "Likformig rörelse", s: "fel", f: "hastigheten ändras, så rörelsen är inte likformig." },
               { t: "Retarderad rörelse", s: "fel", f: "hastigheten ökar – den minskar inte." } ] },
      { bild: "![Kalles hastighet minskar från 15 km/h till 0 km/h](bilder/cykel-retarderad.svg)",
        fraga: "Vilken sorts rörelse har Kalle?",
        alt: [ { t: "Retarderad rörelse", s: "ratt", f: "hastigheten minskar från 15 km/h tills han står still." },
               { t: "Accelererad rörelse", s: "fel", f: "hastigheten minskar – den ökar inte." },
               { t: "Likformig rörelse", s: "fel", f: "hastigheten ändras, så rörelsen är inte likformig." } ] }
    ] },

  { id: "ro-cykeltur", kapitel: "rorelse", avsnitt: ["rorelser"], titel: "Kalles cykeltur",
    typ: "flerval", nivaer: [1, 2], punkter: ["likformig", "olikformig", "accelererad", "retarderad"],
    bild: "![Kalles cykeltur från A till H. Hastigheten står vid varje punkt.](bilder/cykeltur.jpg)",
    varianter: [
      { fraga: "Kalle cyklar rakt fram från A till B. Vilken rörelse har han?",
        alt: [ { t: "Likformig", s: "ratt", f: "han har 15 km/h i både A och B och cyklar rakt fram." },
               { t: "Accelererad", s: "fel", f: "hastigheten är densamma, 15 km/h." },
               { t: "Retarderad", s: "fel", f: "hastigheten är densamma, 15 km/h." },
               { t: "Olikformig – riktningen ändras", s: "fel", f: "vägen är rak mellan A och B." } ] },
      { fraga: "Kalle cyklar uppför backen från B till C. Vilken rörelse har han?",
        alt: [ { t: "Retarderad", s: "ratt", f: "hastigheten minskar från 15 km/h till 6 km/h." },
               { t: "Accelererad", s: "fel", f: "hastigheten minskar, den ökar inte." },
               { t: "Likformig", s: "fel", f: "hastigheten ändras från 15 km/h till 6 km/h." },
               { t: "Olikformig – riktningen ändras", s: "fel", f: "det som ändras är framför allt hastigheten – den minskar." } ] },
      { fraga: "Kalle cyklar nerför backen från C till D. Vilken rörelse har han?",
        alt: [ { t: "Accelererad", s: "ratt", f: "hastigheten ökar från 6 km/h till 25 km/h." },
               { t: "Retarderad", s: "fel", f: "hastigheten ökar, den minskar inte." },
               { t: "Likformig", s: "fel", f: "hastigheten ändras från 6 km/h till 25 km/h." },
               { t: "Olikformig – riktningen ändras", s: "fel", f: "det som ändras är framför allt hastigheten – den ökar." } ] },
      { fraga: "Kalle cyklar genom kurvan från E till F. Hastigheten är 25 km/h hela tiden. Vilken rörelse har han?",
        alt: [ { t: "Olikformig – riktningen ändras", s: "ratt", f: "hastigheten är densamma, men riktningen ändras i kurvan." },
               { t: "Likformig", s: "fel", f: "riktningen ändras i kurvan. Då är rörelsen inte likformig." },
               { t: "Accelererad", s: "fel", f: "hastigheten ökar inte – den är 25 km/h hela tiden." },
               { t: "Retarderad", s: "fel", f: "hastigheten minskar inte – den är 25 km/h hela tiden." } ] },
      { fraga: "Kalle cyklar från G och stannar vid H. Vilken rörelse har han?",
        alt: [ { t: "Retarderad", s: "ratt", f: "hastigheten minskar från 25 km/h till 0 km/h." },
               { t: "Accelererad", s: "fel", f: "hastigheten minskar, den ökar inte." },
               { t: "Likformig", s: "fel", f: "hastigheten ändras från 25 km/h till 0 km/h." },
               { t: "Olikformig – riktningen ändras", s: "fel", f: "vägen är rak här. Det är hastigheten som minskar." } ] }
    ] },

  { id: "ro-vind-forklara", kapitel: "rorelse", avsnitt: ["kraft-gor", "rorelser"], titel: "Förklara: vad gör vinden?",
    typ: "forklara", nivaer: [2], rullista: [2], punkter: ["accelererad", "retarderad"],
    varianter: [
      { bild: "![Kalle cyklar i medvind. Kraften från vinden pekar framåt.](bilder/cykel-medvind.svg)",
        fraga: "Kalle trampar inte och har jämn hastighet. Det börjar blåsa bakifrån. Förklara vad som händer med hastigheten och vilken rörelse Kalle får.",
        begrepp: ["kraft", "samma riktning", "ökar", "accelererad"],
        modell: "Vinden ger en **kraft** i **samma riktning** som Kalle rör sig. **Därför** **ökar** hastigheten. Rörelsen blir **accelererad**." },
      { bild: "![Kalle cyklar i motvind. Kraften från vinden pekar bakåt.](bilder/cykel-motvind.svg)",
        fraga: "Kalle trampar inte och har jämn hastighet. Det börjar blåsa framifrån. Förklara vad som händer med hastigheten och vilken rörelse Kalle får.",
        begrepp: ["kraft", "mot|motsatt", "minskar", "retarderad"],
        modell: "Vinden ger en **kraft** **mot** Kalles rörelse. **Därför** **minskar** hastigheten. Rörelsen blir **retarderad**." }
    ] },

  /* ---------- Medelhastighet ---------- */

  { id: "ro-medel-rakna", kapitel: "rorelse", avsnitt: ["medelhastighet"], titel: "Räkna ut medelhastigheten",
    typ: "lucktext", nivaer: [1, 2], punkter: ["medel"],
    varianter: [
      { rubrik: "Räkna ut medelhastigheten. Fyll i sträckan, tiden, svaret och enheten.",
        text: "Moa cyklar 30 km på 2 h.\nMedelhastighet = [30] / [2] = [15] [km/h]" },
      { rubrik: "Räkna ut medelhastigheten. Fyll i sträckan, tiden, svaret och enheten.",
        text: "En bil kör 180 km på 3 h.\nMedelhastighet = [180] / [3] = [60] [km/h]" },
      { rubrik: "Räkna ut medelhastigheten. Fyll i sträckan, tiden, svaret och enheten.",
        text: "Elsa springer 400 m på 80 s.\nMedelhastighet = [400] / [80] = [5] [m/s]" },
      { rubrik: "Räkna ut medelhastigheten. Fyll i sträckan, tiden, svaret och enheten.",
        text: "Linnea cyklar 16 km på 4 h.\nMedelhastighet = [16] / [4] = [4] [km/h]" }
    ] },

  { id: "ro-medel-flerval", kapitel: "rorelse", avsnitt: ["medelhastighet"], titel: "Vad är medelhastighet?",
    typ: "flerval", nivaer: [1], punkter: ["medel"],
    varianter: [
      { fraga: "Vad betyder medelhastighet?",
        alt: [ { t: "Hastigheten i genomsnitt under hela sträckan", s: "ratt", f: "man delar hela sträckan med hela tiden." },
               { t: "Den högsta hastigheten under sträckan", s: "fel", f: "medelhastigheten är hastigheten i genomsnitt, inte den högsta." },
               { t: "Hastigheten precis i mitten av sträckan", s: "fel", f: "medelhastigheten gäller hela sträckan – hastigheten i genomsnitt." } ] },
      { bild: "![Kalle cyklar ibland 10 km och ibland 20 km på en timme. Efter 4 timmar har han cyklat 60 km.](bilder/medel-olika.svg)",
        fraga: "Kalle cyklar 60 km på 4 h. Ibland cyklar han fort och ibland långsamt. Vilken är hans medelhastighet?",
        alt: [ { t: "15 km/h", s: "ratt", f: "60 km / 4 h = 15 km/h." },
               { t: "20 km/h", s: "fel", f: "20 km/h är den högsta hastigheten. Medelhastigheten är 60 / 4 = 15 km/h." },
               { t: "240 km/h", s: "fel", f: "du ska dela sträckan med tiden, inte multiplicera: 60 / 4 = 15 km/h." } ] }
    ] },

  { id: "ro-medel-forklara", kapitel: "rorelse", avsnitt: ["medelhastighet"], titel: "Förklara: medelhastighet",
    typ: "forklara", nivaer: [2, 3], rullista: [2], punkter: ["medel"],
    varianter: [
      { bild: "![Kalle cyklar ibland 10 km och ibland 20 km på en timme. Efter 4 timmar har han cyklat 60 km.](bilder/medel-olika.svg)",
        fraga: "Kalle cyklar 60 km på 4 timmar. Han har inte farten 15 km/h hela tiden. Förklara hur hans medelhastighet ändå kan vara 15 km/h.",
        begrepp: ["medelhastighet", "genomsnitt|snitt", "sträcka", "tid"],
        modell: "**Medelhastigheten** är hastigheten i **genomsnitt** under hela sträckan. Man delar hela **sträckan** med hela **tiden**: 60 / 4 = 15 km/h. Kalle cyklar ibland fortare och ibland långsammare, men i genomsnitt blir det 15 km/h." }
    ] },

  /* ---------- Friktion ---------- */

  { id: "ro-friktion-flerval", kapitel: "rorelse", avsnitt: ["friktion"], titel: "Friktion",
    typ: "flerval", nivaer: [1], punkter: ["friktion"],
    varianter: [
      { fraga: "Lisa drar en låda åt höger över marken. Åt vilket håll verkar friktionen på lådan?",
        alt: [ { t: "Åt vänster", s: "ratt", f: "friktionen håller alltid emot rörelsen." },
               { t: "Åt höger", s: "fel", f: "friktionen håller emot rörelsen. Lådan rör sig åt höger, så friktionen verkar åt vänster." },
               { t: "Rakt nedåt", s: "fel", f: "det är tyngdkraften som drar nedåt. Friktionen håller emot rörelsen, åt vänster." } ] },
      { fraga: "Lisa drar samma låda över olika underlag. Var behövs störst kraft?",
        alt: [ { t: "På grus", s: "ratt", f: "grus är skrovligast. Ju skrovligare yta, desto större friktion." },
               { t: "På is", s: "fel", f: "is är mycket slät och har liten friktion." },
               { t: "På ett blankt golv", s: "fel", f: "ett blankt golv är slätt och har liten friktion." } ] },
      { fraga: "Två likadana lådor dras över samma golv. Den ena är tom och den andra är full med stenar. Vilken har störst friktion?",
        alt: [ { t: "Lådan med stenar", s: "ratt", f: "ju större massa, desto större friktion." },
               { t: "Den tomma lådan", s: "fel", f: "den tomma lådan har mindre massa och därför mindre friktion." },
               { t: "De har lika stor friktion", s: "fel", f: "massan påverkar friktionen. Lådan med stenar har störst friktion." } ] }
    ] },

  { id: "ro-friktion-sf", kapitel: "rorelse", avsnitt: ["friktion"], titel: "Friktion – sant eller falskt",
    typ: "santfalskt", nivaer: [1], punkter: ["friktion"],
    varianter: [
      { pst: [["Friktion är en kraft som håller emot rörelsen.", true],
              ["Friktion mäts i newton (N).", true],
              ["På is finns det ingen friktion alls.", false],
              ["Ju skrovligare yta, desto större friktion.", true],
              ["En tom låda har större friktion än samma låda full med stenar.", false]] },
      { pst: [["En boll som rullar på gräset stannar till slut på grund av friktion.", true],
              ["Friktionen verkar i samma riktning som rörelsen.", false],
              ["Man sandar isiga vägar för att öka friktionen.", true],
              ["Smörjer man ett lås med fett blir friktionen större.", false],
              ["Även ytor som ser släta ut har små ojämnheter.", true]] }
    ] },

  { id: "ro-friktion-sortera", kapitel: "rorelse", avsnitt: ["friktion"], titel: "Stor eller liten friktion?",
    typ: "sortera", nivaer: [1, 2], punkter: ["friktion"],
    varianter: [
      { grupper: ["Vi vill ha stor friktion", "Vi vill ha liten friktion"],
        saker: [["Bildäcken mot vägen", 0], ["Skosulorna när du går på is", 0], ["Händerna mot ett klätterrep", 0], ["Bromsen mot cykelhjulet", 0],
                ["Skidorna mot snön", 1], ["Delarna i ett dörrlås", 1], ["Hjulet mot axeln på en cykel", 1], ["Pulkan mot backen", 1]] }
    ] },

  { id: "ro-friktion-forklara", kapitel: "rorelse", avsnitt: ["friktion"], titel: "Förklara: varför stannar bollen?",
    typ: "forklara", nivaer: [2], rullista: [2], punkter: ["friktion"],
    varianter: [
      { fraga: "Du sparkar iväg en boll på gräset. Förklara varför bollen stannar till slut.",
        begrepp: ["friktion", "håller emot|bromsar|motverkar", "hastighet|fart"],
        modell: "Mellan bollen och gräset finns **friktion**. Friktionen **håller emot** rörelsen. **Därför** minskar bollens **hastighet** tills den stannar." }
    ] },

  { id: "ro-friktion-puck", kapitel: "rorelse", avsnitt: ["friktion"], titel: "Förklara: hockeypucken",
    typ: "forklara", nivaer: [3], punkter: ["friktion"],
    varianter: [
      { fraga: "En hockeypuck glider mycket längre på is än på asfalt. Förklara varför.",
        begrepp: ["friktion", "slät|släta", "skrovlig|ojämn", "mindre|liten"],
        modell: "Isen är mycket **slät**, medan asfalten är **skrovlig**. Ju skrovligare yta, desto större **friktion**. På isen blir friktionen **liten**. **Därför** bromsas pucken mindre och glider längre." }
    ] },

  /* ---------- Luftmotstånd ---------- */

  { id: "ro-luft-flerval", kapitel: "rorelse", avsnitt: ["luftmotstand"], titel: "Luftmotstånd",
    typ: "flerval", nivaer: [1], punkter: ["luftmotstand"],
    varianter: [
      { fraga: "Vad är luftmotstånd?",
        alt: [ { t: "En kraft från luften som håller emot en kropp som rör sig", s: "ratt", f: "kroppen krockar med luftens molekyler, och de håller emot." },
               { t: "En kraft från luften som drar kroppen nedåt", s: "fel", f: "det är tyngdkraften som drar nedåt. Luftmotståndet håller emot rörelsen." },
               { t: "En kraft som bara finns när det blåser", s: "fel", f: "luftmotstånd finns så fort kroppen rör sig genom luften, även när det inte blåser." } ] },
      { fraga: "Vilken fallskärm ger störst luftmotstånd?",
        alt: [ { t: "Den med störst yta", s: "ratt", f: "ju större yta, desto större luftmotstånd." },
               { t: "Den med minst yta", s: "fel", f: "en liten yta krockar med färre luftmolekyler och ger mindre luftmotstånd." },
               { t: "Alla fallskärmar ger lika stort luftmotstånd", s: "fel", f: "ytan spelar roll. Ju större yta, desto större luftmotstånd." } ] },
      { fraga: "Varför böjer sig tävlingscyklister framåt när de cyklar?",
        alt: [ { t: "För att få mindre luftmotstånd", s: "ratt", f: "när de böjer sig blir ytan mot luften mindre, och då blir luftmotståndet mindre." },
               { t: "För att få bättre balans", s: "fel", f: "de böjer sig för att ytan mot luften ska bli mindre. Då minskar luftmotståndet." },
               { t: "För att bli tyngre", s: "fel", f: "massan ändras inte. Det som ändras är ytan mot luften." } ] }
    ] },

  { id: "ro-luft-sf", kapitel: "rorelse", avsnitt: ["luftmotstand"], titel: "Luftmotstånd – sant eller falskt",
    typ: "santfalskt", nivaer: [1], punkter: ["luftmotstand"],
    varianter: [
      { pst: [["Luftmotstånd håller emot en kropp som rör sig.", true],
              ["Luftmotstånd finns bara när det blåser.", false],
              ["Ju större yta, desto större luftmotstånd.", true],
              ["En boll som ligger still på marken har luftmotstånd.", false],
              ["Ju fortare du cyklar, desto större luftmotstånd.", true]] }
    ] },

  { id: "ro-luft-forklara", kapitel: "rorelse", avsnitt: ["luftmotstand"], titel: "Förklara: fallskärmen",
    typ: "forklara", nivaer: [2], rullista: [2], punkter: ["luftmotstand"],
    varianter: [
      { fraga: "Förklara varför en fallskärmshoppare faller långsamt när fallskärmen har vecklats ut.",
        begrepp: ["luftmotstånd", "yta", "stor|större", "håller emot|bromsar"],
        modell: "Fallskärmen har en **stor** **yta** som krockar med luftens molekyler. **Därför** blir **luftmotståndet** stort, och det **håller emot** fallet." }
    ] },

  /* ---------- Tröghet ---------- */

  { id: "ro-troghet-flerval", kapitel: "rorelse", avsnitt: ["troghet"], titel: "Tröghet i bussen",
    typ: "flerval", nivaer: [1], punkter: ["troghet"],
    bild: "![Två bilder av en buss. När bussen startar faller personen bakåt. När bussen bromsar faller personen framåt.](bilder/buss-troghet.svg)",
    varianter: [
      { fraga: "Du står i en buss som kör. Bussen bromsar plötsligt. Åt vilket håll faller du?",
        alt: [ { t: "Framåt", s: "ratt", f: "din kropp har tröghet och vill fortsätta framåt med samma hastighet." },
               { t: "Bakåt", s: "fel", f: "du faller bakåt när bussen startar. När den bromsar vill kroppen fortsätta framåt." },
               { t: "Du står kvar utan att falla", s: "fel", f: "din kropp har tröghet och vill fortsätta framåt, så du faller framåt om du inte håller i dig." } ] },
      { fraga: "Du står i en buss som står still. Bussen startar plötsligt. Åt vilket håll faller du?",
        alt: [ { t: "Bakåt", s: "ratt", f: "din kropp har tröghet och vill stå kvar, medan bussen åker framåt." },
               { t: "Framåt", s: "fel", f: "du faller framåt när bussen bromsar. När den startar vill kroppen stå kvar." },
               { t: "Du står kvar utan att falla", s: "fel", f: "din kropp vill stå kvar när bussen åker iväg, så du faller bakåt om du inte håller i dig." } ] },
      { fraga: "Vad betyder tröghet?",
        alt: [ { t: "En kropp vill fortsätta som den gör", s: "ratt", f: "står den still vill den stå still. Rör den sig vill den fortsätta med samma hastighet och riktning." },
               { t: "En kropp vill alltid stanna", s: "fel", f: "en kropp som rör sig vill fortsätta röra sig. Den stannar bara om något bromsar den." },
               { t: "En kropp rör sig långsamt", s: "fel", f: "i fysiken betyder tröghet att en kropp vill fortsätta som den gör – inte att den är långsam." } ] }
    ] },

  { id: "ro-troghet-forklara", kapitel: "rorelse", avsnitt: ["troghet"], titel: "Förklara: bussen startar",
    typ: "forklara", nivaer: [2], rullista: [2], punkter: ["troghet"],
    varianter: [
      { fraga: "Du står i mittgången på en buss. När bussen åker iväg ramlar du baklänges. Förklara varför.",
        begrepp: ["tröghet", "stå still|stå kvar", "bussen", "bakåt|baklänges"],
        modell: "Min kropp har **tröghet**. Den vill **stå kvar** när **bussen** åker iväg. Bussen åker framåt men min kropp vill stå still. **Därför** ramlar jag **bakåt**." },
      { fraga: "Du står i mittgången på en buss. När bussen bromsar ramlar du framåt. Förklara varför.",
        begrepp: ["tröghet", "fortsätta", "bussen", "framåt"],
        modell: "Min kropp har **tröghet**. Den vill **fortsätta** **framåt** med samma hastighet. **Bussen** bromsar men min kropp fortsätter. **Därför** ramlar jag framåt." }
    ] },

  { id: "ro-troghet-massa", kapitel: "rorelse", avsnitt: ["troghet"], titel: "Tröghet och massa",
    typ: "flerval", nivaer: [2, 3], punkter: ["troghet"],
    varianter: [
      { fraga: "En kundvagn är tom och en annan är full med varor. Vilken är svårast att få igång och att stoppa?",
        alt: [ { t: "Den fulla kundvagnen", s: "ratt", f: "den har störst massa. Ju större massa, desto större tröghet." },
               { t: "Den tomma kundvagnen", s: "fel", f: "den tomma har mindre massa och därför mindre tröghet." },
               { t: "De är lika svåra", s: "fel", f: "massan spelar roll. Ju större massa, desto större tröghet." } ] },
      { fraga: "Varför behövs det en större kraft för att knuffa igång en riktig bil än en leksaksbil?",
        alt: [ { t: "Den riktiga bilen har större massa och därför större tröghet", s: "ratt", f: "ju större massa, desto större tröghet – och desto större kraft behövs för att ändra rörelsen." },
               { t: "Den riktiga bilen har mer luftmotstånd", s: "fel", f: "bilen står still, så luftmotståndet är inte förklaringen. Det är trögheten som är större." },
               { t: "Den riktiga bilen har mindre friktion", s: "fel", f: "mindre friktion skulle göra det lättare. Förklaringen är att den har större massa och större tröghet." } ] }
    ] },

  { id: "ro-troghet-kalle", kapitel: "rorelse", avsnitt: ["troghet", "friktion", "luftmotstand"], titel: "Förklara: Kalle slutar trampa",
    typ: "forklara", nivaer: [3], punkter: ["troghet"],
    varianter: [
      { bild: "![Kalle cyklar utan att trampa](bilder/cykel-likformig.svg)",
        fraga: "Kalle slutar trampa. Han fortsätter att rulla en lång bit, men till slut stannar han. Förklara varför han fortsätter – och varför han till slut stannar.",
        begrepp: ["tröghet", "fortsätta", "friktion", "luftmotstånd"],
        modell: "Kalle har **tröghet**, så han vill **fortsätta** med samma hastighet. **Därför** rullar han vidare fast han inte trampar. Men **friktion** mellan hjulen och vägen och **luftmotstånd** håller emot. **Därför** minskar hastigheten tills han stannar." }
    ] },


  // ATT GÖRA (avsnitt kraft-gor): uppgift där eleven väljer rätt kraftbild för en person som flyter –
  // tyngdkraft nedåt och lyftkraft uppåt, lika långa pilar. Krafter som tar ut varandra, normalkraft.
]);
