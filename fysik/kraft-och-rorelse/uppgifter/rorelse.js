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

  // ATT GÖRA (avsnitt kraft-gor): uppgift där eleven väljer rätt kraftbild för en person som flyter –
  // tyngdkraft nedåt och lyftkraft uppåt, lika långa pilar. Krafter som tar ut varandra, normalkraft.
]);
