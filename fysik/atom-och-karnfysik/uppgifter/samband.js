/* =====================================================================
   UPPGIFTER – Samband – isotop, ämne, jon
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

    { id: "sam-andra", kapitel: "samband", titel: "Ändra atomen",
      typ: "andra", nivaer: [1],
      // atomer som eleven kan få börja med (slumpas)
      start: [ { namn: "litium", X: "Li", A: 7, Z: 3 }, { namn: "beryllium", X: "Be", A: 9, Z: 4 },
               { namn: "bor", X: "B", A: 11, Z: 5 },    { namn: "kol", X: "C", A: 12, Z: 6 },
               { namn: "kväve", X: "N", A: 14, Z: 7 },  { namn: "syre", X: "O", A: 16, Z: 8 } ],
      varianter: [ { mal: "isotop" }, { mal: "jon+" }, { mal: "jon-" }, { mal: "amne" } ] },

    { id: "sam-vate", kapitel: "samband", avsnitt: ["isotop"], titel: "Vätets isotoper",
      typ: "isotoptabell", nivaer: [1],
      varianter: [
        { isotoper: [ { namn: "Protium", sub: "Väte-1", Z: 1, A: 1 },
                      { namn: "Deuterium", sub: "Väte-2", Z: 1, A: 2 },
                      { namn: "Tritium", sub: "Väte-3", Z: 1, A: 3 } ] }
      ] },

    { id: "sam-vate-namn", kapitel: "samband", avsnitt: ["isotop"], titel: "Vätets isotoper – namn",
      typ: "para", nivaer: [1],
      // vänsterled kan vara text, "bild:…", "not:masstal,atomnummer,beteckning" eller "atom:p,n,e"
      varianter: [
        { rubrik: "Para ihop atomnotationen med rätt namn.",
          par: [["not:1,1,H", "Protium (väte-1)"], ["not:2,1,H", "Deuterium (väte-2)"], ["not:3,1,H", "Tritium (väte-3)"]] },
        { rubrik: "Titta på atomerna. Para ihop varje atom med rätt namn.",
          par: [["atom:1,0,1", "Protium"], ["atom:1,1,1", "Deuterium"], ["atom:1,2,1", "Tritium"]] }
      ] },

    { id: "sam-begrepp", kapitel: "samband", titel: "Isotop, ämne, jon – fyll i begrepp",
      typ: "lucktext", nivaer: [1],
      varianter: [
        { text: "Antalet [*protoner/proton] och [*elektroner/elektron] är lika mellan isotoper av samma ämne. Antalet [neutroner/neutron] är olika mellan isotoper." },
        { text: "Antalet [*protoner/proton] och [*neutroner/neutron] är lika mellan en atom och en jon av samma ämne. Antalet [elektroner/elektron] är olika." },
        { text: "Antalet [protoner/proton] är alltid olika mellan två olika ämnen. Det är antalet protoner, alltså [atomnumret/atomnummer], som bestämmer vilket ämne det är." }
      ] }
]);
