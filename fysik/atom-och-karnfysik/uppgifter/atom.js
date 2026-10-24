/* =====================================================================
   UPPGIFTER – Atomens uppbyggnad
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
      varianter: [{}] },   // numreringen i bilden blandas varje gång

    { id: "atom-bygg", kapitel: "atom", avsnitt: ["delar"], titel: "Atomens delar – skapa bild",
      typ: "bygg", nivaer: [1],
      varianter: [
        { namn: "väte",      p: 1, n: 0, e: 1 },
        { namn: "helium",    p: 2, n: 2, e: 2 }
      ] },

    { id: "atom-text", kapitel: "atom", avsnitt: ["delar"], titel: "Atomens delar – text",
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["protoner", "neutroner", "elektroner", "proton", "neutron", "elektron",
                 "atomkärnan", "kärna", "skal", "positiv", "negativ", "ingen"],
      varianter: [
        { text: "Atomkärnan består av [*protoner] och [*neutroner]. Utanför kärnan finns [elektroner] i olika skal." },
        { text: "[Atomkärnan/kärnan] består av protoner och neutroner. Utanför kärnan finns elektroner i olika [skal/elektronskal]." },
        { text: "En proton har [positiv/positivt/plus] laddning." },
        { text: "En neutron har [ingen/neutral] laddning." },
        { text: "En elektron har [negativ/negativt/minus] laddning." },
        { text: "Protoner och neutroner finns i atomens [kärna/atomkärna]." },
        { text: "Elektronerna finns i [skal/elektronskal] runt atomkärnan." },
        { text: "En [proton] är positivt laddad." },
        { text: "En [neutron] har ingen laddning." },
        { text: "En [elektron] är negativt laddad." },
        { text: "[*Protoner/proton] och [*neutroner/neutron] finns i atomkärnan." },
        { text: "[Elektroner/elektronerna] finns i skal runt atomkärnan." }
      ] },

    { id: "atom-para", kapitel: "atom", avsnitt: ["delar"], titel: "Atomens delar – para ihop",
      typ: "para", nivaer: [1],
      varianter: [
        { rubrik: "Para ihop partikeln med dess laddning.",
          par: [["Proton", "Positiv laddning (+1)"], ["Neutron", "Ingen laddning (0)"], ["Elektron", "Negativ laddning (−1)"]] },
        { rubrik: "Para ihop partikeln med var den finns.",
          par: [["Proton", "I atomkärnan"], ["Neutron", "I atomkärnan"], ["Elektron", "I skal runt atomkärnan"]] },
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Atomkärna", "Mitten av atomen, med protoner och neutroner"],
                ["Elektronskal", "Där elektronerna finns runt kärnan"],
                ["Nukleon", "Samlingsnamn för protoner och neutroner"]] }
      ] },

    { id: "atom-para-bild", kapitel: "atom", avsnitt: ["delar"], titel: "Atomens delar – bild och namn",
      typ: "para", nivaer: [0],
      varianter: [
        { rubrik: "Para ihop bilden med rätt namn.",
          par: [["bild:proton", "Proton"], ["bild:neutron", "Neutron"], ["bild:elektron", "Elektron"],
                ["bild:karna", "Atomkärna"], ["bild:skal", "Elektronskal"]] }
      ] },

    { id: "atom-modeller", kapitel: "atom", avsnitt: ["modeller"], titel: "Atommodeller – para ihop",
      typ: "dratabell", nivaer: [1],
      varianter: [
        { rubrik: "Dra rätt bild och rätt beskrivning till varje atommodell.",
          rubriker: ["Atommodell", "Bild", "Beskrivning"],
          rader: [["Daltons modell – massiv kula", "bild:dalton", "Ämnen reagerar alltid med varandra i bestämda proportioner. Därför måste materia vara uppbyggd av små odelbara partiklar – atomer."],
                  ["Thomsons modell – kula med positiva och negativa laddningar", "bild:thomson", "Atomen reagerar med andra laddade partiklar. Därför måste den vara uppbyggd av både positiva och negativa laddningar."],
                  ["Rutherfords modell – liten kärna och elektroner som cirkulerar runt den", "bild:rutherford", "De flesta alfapartiklar åkte rakt igenom en tunn guldfolie, men några studsade tillbaka. Därför måste atomen ha en liten, positivt laddad kärna och bestå mest av tomrum."],
                  ["Bohrs modell – elektroner i skal", "bild:bohr", "Atomer sänder bara ut ljus med vissa bestämda färger. Därför måste elektronerna finnas i bestämda energinivåer – skal."],
                  ["Schrödingers modell – elektronmoln", "bild:schrodinger", "Elektroner beter sig både som partiklar och som vågor. Därför går det inte att säga exakt var en elektron är, bara var den troligen finns – ett elektronmoln."]] }
      ] },

    { id: "atom-modeller-tid", kapitel: "atom", avsnitt: ["modeller"], titel: "Atommodeller – tidslinje",
      typ: "dratabell", nivaer: [1], tidslinje: true,
      varianter: [
        { rubrik: "Dra atommodellerna till rätt år på tidslinjen.", tidslinje: true,
          rubriker: ["År", "Atommodell"],
          rader: [["1807", "modell:dalton|Dalton"], ["1897", "modell:thomson|Thomson"], ["1911", "modell:rutherford|Rutherford"], ["1913", "modell:bohr|Bohr"], ["1926", "modell:schrodinger|Schrödinger"]] }
      ] },

    { id: "atom-tomrum-text", kapitel: "atom", avsnitt: ["delar"], titel: "Atomen är mest tomrum – fyll i begrepp",
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["tomrum", "luft", "vatten", "blåbär", "fotboll", "massa", "kärnan", "elektronerna", "elektroner"],
      varianter: [
        { text: "Atomen består nästan bara av [tomrum]. Om atomen var lika stor som Globen skulle kärnan vara stor som ett [blåbär]." },
        { text: "Nästan hela atomens [massa|vikt] finns i [kärnan|atomkärnan], eftersom protoner och neutroner är ungefär 2000 gånger tyngre än [elektroner|elektronerna|elektron]." }
      ] },

    { id: "atom-tomrum-mc", kapitel: "atom", avsnitt: ["delar"], titel: "Atomen är mest tomrum – välj rätt",
      typ: "flerval", nivaer: [1],
      varianter: [
        { fraga: "Om en atom var lika stor som Globen – hur stor skulle kärnan i mitten vara?",
          alt: [ { t: "Ett blåbär", s: "ratt", f: "kärnan är pytteliten jämfört med hela atomen. Resten är nästan bara tomrum." },
                 { t: "En fotboll", s: "fel", f: "kärnan är ännu mycket mindre än så." },
                 { t: "Ett hus", s: "fel", f: "kärnan är mycket, mycket mindre. Atomen består nästan bara av tomrum." },
                 { t: "Halva Globen", s: "fel", f: "då skulle atomen vara full av kärna – men atomen består nästan bara av tomrum." } ] },
        { fraga: "Var finns nästan all massa i en atom?",
          alt: [ { t: "I atomkärnan", s: "ratt", f: "protoner och neutroner är ungefär 2000 gånger tyngre än elektroner." },
                 { t: "I elektronskalen", s: "fel", f: "elektronerna är mycket lätta – ungefär 2000 gånger lättare än en proton." },
                 { t: "Jämnt fördelad i hela atomen", s: "fel", f: "nästan all massa är samlad i den lilla kärnan." },
                 { t: "I tomrummet mellan kärnan och elektronerna", s: "fel", f: "tomrum har ingen massa." } ] }
      ] },

    { id: "atom-tomrum-sf", kapitel: "atom", avsnitt: ["delar"], titel: "Atomen är mest tomrum – sant eller falskt",
      typ: "santfalskt", nivaer: [1],
      varianter: [
        { pst: [["Atomen består mest av tomrum.", true], ["Nästan hela atomens massa finns i kärnan.", true],
                ["Atomkärnan är ungefär lika stor som hela atomen.", false], ["Elektronerna fyller upp hela atomen.", false],
                ["En proton är ungefär 2000 gånger tyngre än en elektron.", true]] },
        { pst: [["Om atomen var stor som Globen skulle kärnan vara stor som ett blåbär.", true], ["Elektronerna står för det mesta av atomens massa.", false],
                ["Mellan kärnan och elektronerna finns luft.", false], ["Rutherford kom fram till att atomen har en liten kärna.", true],
                ["Atomkärnan är positivt laddad.", true]] }
      ] },

    { id: "atom-skal-max", kapitel: "atom", avsnitt: ["skal"], titel: "Elektronskal – namn och max antal",
      typ: "skal", nivaer: [2], treFragor: true,   // frågar även max om det INTE är yttersta skalet
      varianter: [{ skal: 1 }, { skal: 2 }, { skal: 3 }, { skal: 4 }, { skal: 5 }, { skal: 6 }] },

    { id: "atom-kvarktabell", kapitel: "atom", avsnitt: ["kvarkar"], titel: "Kvarkar – generationer",
      typ: "kvarktabell", nivaer: [2],
      varianter: [{}] },

    { id: "atom-kvark", kapitel: "atom", avsnitt: ["kvarkar"], titel: "Bygg med kvarkar",
      typ: "kvark", nivaer: [2],
      varianter: [{ visaLaddning: true }, { visaLaddning: false }] }
]);
