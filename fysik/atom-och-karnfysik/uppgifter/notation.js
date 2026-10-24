/* =====================================================================
   UPPGIFTER – Atomnotation
   ---------------------------------------------------------------------
   En uppgift per objekt. Mallar för varje uppgiftstyp finns i mallar.md.

     id        : unikt namn – ändras aldrig
     kapitel   : kapitlets id
     avsnitt   : (valfritt) lista med avsnitt i texten, t.ex. ["alfa"]
     titel     : rubriken eleven ser
     typ       : uppgiftstyp (se mallar.md)
     nivaer    : uppgiftens nivå, t.ex. [1] eller [0, 1]
     nivaerPerArskurs : (valfritt) annan nivå för en årskurs, t.ex. { 7: [2] }
     arskurs   : (valfritt) bara för vissa årskurser, t.ex. [9]
     rullista  : (valfritt) nivåer där eleven väljer i en rullista
     maxPerOvning : (valfritt) högst så många varianter per övning (annars kapitlets värde, eller 1)
     grupp     : (valfritt) uppgifter i samma grupp räknas som varianter av varandra
     dold      : true = används inte (utan att tas bort)
     varianter : lista – en slumpas varje gång

   Svar i lucktext: [rätt] · [rätt/också rätt] · [*a] och [*b] = valfri ordning
   ===================================================================== */
Portal.uppgifter([
    // Varianter: X = kemisk beteckning, A = masstal, Z = atomnummer, ch = laddning ("+", "2+", "3-" …)

    { id: "not-bygg", kapitel: "notation", titel: "Bygg atomen",
      typ: "reglage", nivaer: [1],
      varianter: [
        { namn: "väte", X: "H", A: 1, Z: 1 },     { namn: "helium", X: "He", A: 4, Z: 2 },
        { namn: "litium", X: "Li", A: 7, Z: 3 },  { namn: "beryllium", X: "Be", A: 9, Z: 4 },
        { namn: "bor", X: "B", A: 11, Z: 5 },     { namn: "kol", X: "C", A: 12, Z: 6 },
        { namn: "kväve", X: "N", A: 14, Z: 7 },   { namn: "syre", X: "O", A: 16, Z: 8 }
      ] },

    { id: "not-skriv-1", kapitel: "notation", titel: "Bygg atom – skriva atomnotation",
      typ: "skrivnotation", nivaer: [1], visaReglage: true,   // reglagen visar antalet partiklar
      varianter: [
        { namn: "väte", X: "H", A: 2, Z: 1 },     { namn: "helium", X: "He", A: 3, Z: 2 },
        { namn: "litium", X: "Li", A: 6, Z: 3 },  { namn: "beryllium", X: "Be", A: 10, Z: 4 },
        { namn: "bor", X: "B", A: 10, Z: 5 },     { namn: "kol", X: "C", A: 13, Z: 6 },
        { namn: "kväve", X: "N", A: 15, Z: 7 },   { namn: "syre", X: "O", A: 18, Z: 8 }
      ] },

    { id: "not-skriv-2", kapitel: "notation", titel: "Räkna partiklarna – skriva atomnotation",
      typ: "skrivnotation", nivaer: [2], visaReglage: false,  // bara bilden – eleven räknar själv
      varianter: [
        { namn: "väte", X: "H", A: 3, Z: 1 },     { namn: "helium", X: "He", A: 6, Z: 2 },
        { namn: "litium", X: "Li", A: 8, Z: 3 },  { namn: "bor", X: "B", A: 11, Z: 5 },
        { namn: "kol", X: "C", A: 14, Z: 6 },     { namn: "kväve", X: "N", A: 13, Z: 7 },
        { namn: "syre", X: "O", A: 17, Z: 8 }
      ] },

    { id: "not-jon", kapitel: "notation", titel: "Bygg jonen",
      typ: "reglage", nivaer: [2],
      varianter: [
        { X: "H", A: 1, Z: 1, ch: "+" },   { X: "H", A: 1, Z: 1, ch: "-" },
        { X: "Li", A: 7, Z: 3, ch: "+" },  { X: "Be", A: 9, Z: 4, ch: "2+" },
        { X: "N", A: 14, Z: 7, ch: "3-" }, { X: "O", A: 16, Z: 8, ch: "2-" }
      ] }
]);
