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

    { id: "not-delar-bild", kapitel: "notation", titel: "Atomnotationens delar – bild",
      typ: "markera", bild: "notation", nivaerPerArskurs: { 7: [2], 8: [1], 9: [1] }, rullista: [0], grupp: "not-delar",
      delar: ["masstal", "atomnummer", "kemisk beteckning"],
      svar: {
        masstal: ["masstal", "masstalet"],
        atomnummer: ["atomnummer", "atomnumret", "atomnummret"],
        "kemisk beteckning": ["kemisk beteckning", "kemiska beteckningen", "beteckning", "kemisk symbol", "symbol"]
      },
      varianter: [ { X: "C", A: 14, Z: 6 }, { X: "O", A: 16, Z: 8 }, { X: "He", A: 4, Z: 2 }, { X: "N", A: 14, Z: 7 } ] },
                   // numreringen blandas varje gång

    { id: "not-delar-skriv", kapitel: "notation", titel: "Atomnotationens delar – skriv namnen",
      typ: "markera", bild: "notation", nivaerPerArskurs: { 7: [2], 8: [1], 9: [1] }, grupp: "not-delar",
      delar: ["masstal", "atomnummer", "kemisk beteckning"],
      svar: {
        masstal: ["masstal", "masstalet"],
        atomnummer: ["atomnummer", "atomnumret", "atomnummret"],
        "kemisk beteckning": ["kemisk beteckning", "kemiska beteckningen", "beteckning", "kemisk symbol", "symbol"]
      },
      varianter: [ { X: "Li", A: 7, Z: 3 }, { X: "Na", A: 23, Z: 11 }, { X: "Al", A: 27, Z: 13 }, { X: "B", A: 11, Z: 5 } ] },
                   // ingen rullista – eleven skriver alltid själv

    { id: "not-para", kapitel: "notation", titel: "Atomnotation – para ihop begrepp",
      typ: "para", nivaerPerArskurs: { 7: [2], 8: [1], 9: [1] },
      varianter: [
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Masstal", "Antalet protoner + neutroner"], ["Atomnummer", "Antalet protoner"], ["Kemisk beteckning", "En eller två bokstäver som visar grundämnet"]] },
        { rubrik: "Para ihop begreppet med var det står i atomnotationen.",
          par: [["Masstal", "Uppe till vänster"], ["Atomnummer", "Nere till vänster"], ["Kemisk beteckning", "Den stora bokstaven i mitten"]] },
        { rubrik: "Para ihop begreppet med vad det bestämmer.",
          par: [["Atomnummer", "Vilket grundämne det är"], ["Masstal", "Hur många partiklar som finns i kärnan"], ["Masstal − atomnummer", "Antalet neutroner"]] }
      ] },

    { id: "not-bygg", kapitel: "notation", titel: "Bygg atomen",
      typ: "reglage", nivaerPerArskurs: {7:[3],8:[1,2],9:[1]},
      varianter: [
        { namn: "väte", X: "H", A: 1, Z: 1 },     { namn: "helium", X: "He", A: 4, Z: 2 },
        { namn: "litium", X: "Li", A: 7, Z: 3 },  { namn: "beryllium", X: "Be", A: 9, Z: 4 },
        { namn: "bor", X: "B", A: 11, Z: 5 },     { namn: "kol", X: "C", A: 12, Z: 6 },
        { namn: "kväve", X: "N", A: 14, Z: 7 },   { namn: "syre", X: "O", A: 16, Z: 8 }
      ] },

    { id: "not-skriv-1", kapitel: "notation", titel: "Bygg atom – skriva atomnotation",
      typ: "skrivnotation", nivaerPerArskurs: {7:[3],8:[1,2],9:[1]}, visaReglage: true,   // reglagen visar antalet partiklar
      varianter: [
        { namn: "väte", X: "H", A: 2, Z: 1 },     { namn: "helium", X: "He", A: 3, Z: 2 },
        { namn: "litium", X: "Li", A: 6, Z: 3 },  { namn: "beryllium", X: "Be", A: 10, Z: 4 },
        { namn: "bor", X: "B", A: 10, Z: 5 },     { namn: "kol", X: "C", A: 13, Z: 6 },
        { namn: "kväve", X: "N", A: 15, Z: 7 },   { namn: "syre", X: "O", A: 18, Z: 8 }
      ] },

    { id: "not-skriv-2", kapitel: "notation", titel: "Räkna partiklarna – skriva atomnotation",
      typ: "skrivnotation", nivaerPerArskurs: {7:[3],8:[1,2],9:[1]}, visaReglage: false,  // bara bilden – eleven räknar själv
      varianter: [
        { namn: "väte", X: "H", A: 3, Z: 1 },     { namn: "helium", X: "He", A: 6, Z: 2 },
        { namn: "litium", X: "Li", A: 8, Z: 3 },  { namn: "bor", X: "B", A: 11, Z: 5 },
        { namn: "kol", X: "C", A: 14, Z: 6 },     { namn: "kväve", X: "N", A: 13, Z: 7 },
        { namn: "syre", X: "O", A: 17, Z: 8 }
      ] },

    { id: "not-jon", kapitel: "notation", titel: "Bygg jonen",
      typ: "reglage", nivaerPerArskurs: {7:[3],8:[2,3],9:[2]},
      varianter: [
        { X: "H", A: 1, Z: 1, ch: "+" },   { X: "H", A: 1, Z: 1, ch: "-" },
        { X: "Li", A: 7, Z: 3, ch: "+" },  { X: "Be", A: 9, Z: 4, ch: "2+" },
        { X: "N", A: 14, Z: 7, ch: "3-" }, { X: "O", A: 16, Z: 8, ch: "2-" }
      ] }
]);
