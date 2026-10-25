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
      typ: "markera", nivaerPerArskurs: { 7: [1], 8: [0,1], 9: [0]}, rullista: [0],
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
      typ: "bygg", nivaerPerArskurs: { 7: [1], 8: [0,1], 9: [0]},
      varianter: [
        { namn: "väte",      p: 1, n: 0, e: 1 },
        { namn: "helium",    p: 2, n: 2, e: 2 }
      ] },

    { id: "atom-text", kapitel: "atom", avsnitt: ["delar"], titel: "Atomens delar – text",
      typ: "lucktext", nivaerPerArskurs: { 7: [1], 8: [0,1], 9: [0]}, rullista: [0],
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
      typ: "para",  nivaerPerArskurs: { 7: [1], 8: [0,1], 9: [0]},
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
      typ: "para",  nivaerPerArskurs: { 7: [1], 8: [0,1], 9: [0]},
      varianter: [
        { rubrik: "Para ihop bilden med rätt namn.",
          par: [["bild:proton", "Proton"], ["bild:neutron", "Neutron"], ["bild:elektron", "Elektron"],
                ["bild:karna", "Atomkärna"], ["bild:skal", "Elektronskal"]] }
      ] },

    { id: "atom-modeller", kapitel: "atom", avsnitt: ["modeller"], titel: "Atommodeller – para ihop",
      typ: "dratabell",  nivaerPerArskurs: { 7: [3], 8: [2,3], 9: [2]},
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
      typ: "dratabell",  nivaerPerArskurs: { 7: [3], 8: [2,3], 9: [2]}, tidslinje: true,
      varianter: [
        { rubrik: "Dra atommodellerna till rätt år på tidslinjen.", tidslinje: true,
          rubriker: ["År", "Atommodell"],
          rader: [["1807", "modell:dalton|Dalton"], ["1897", "modell:thomson|Thomson"], ["1911", "modell:rutherford|Rutherford"], ["1913", "modell:bohr|Bohr"], ["1926", "modell:schrodinger|Schrödinger"]] }
      ] },

    { id: "atom-modell-bild", kapitel: "atom", avsnitt: ["modeller"], titel: "En atommodell är en förenklad bild",
      typ: "flerval", nivaerPerArskurs: { 7: [1], 8: [0], 9: [0] },
      bild: "[[atom p=6 n=6 e=6]]",
      varianter: [
        { fraga: "Bilden visar en modell av en kolatom. Vad stämmer om bilden?",
          alt: [ { t: "Den är en förenklad bild av hur en atom är uppbyggd", s: "ratt", f: "en modell visar det viktigaste, men inte exakt hur verkligheten ser ut." },
                 { t: "Den visar exakt hur en atom ser ut", s: "fel", f: "ingen har kunnat se en atom så här. Bilden är en modell – en förenkling." },
                 { t: "Den är ett foto taget i ett mikroskop", s: "fel", f: "det är en ritad modell, inte ett foto." },
                 { t: "Elektronerna är i verkligheten lika stora som protonerna", s: "fel", f: "elektroner är mycket mindre än protoner. Storlekarna i bilden stämmer inte." } ] },
        { fraga: "Varför använder man modeller när man beskriver atomen?",
          alt: [ { t: "För att atomen är för liten för att se – modellen hjälper oss att förstå", s: "ratt", f: "en modell är en förenklad bild som förklarar hur något fungerar." },
                 { t: "För att modellen visar exakt hur atomen ser ut", s: "fel", f: "en modell är alltid en förenkling av verkligheten." },
                 { t: "För att alla atomer ser likadana ut", s: "fel", f: "atomer skiljer sig åt, t.ex. i antal protoner." },
                 { t: "För att forskarna inte vet något om atomen", s: "fel", f: "forskarna vet mycket från experiment – modellen sammanfattar det." } ] },
        { fraga: "På vilket sätt skiljer sig bilden från en riktig atom?",
          alt: [ { t: "Kärnan är ritad mycket större än den är jämfört med hela atomen", s: "ratt", f: "i verkligheten är kärnan pytteliten – atomen består nästan bara av tomrum." },
                 { t: "I en riktig atom finns inga neutroner i kärnan", s: "fel", f: "jo, kärnan består av protoner och neutroner – det stämmer i bilden." },
                 { t: "I en riktig atom finns elektronerna inne i kärnan", s: "fel", f: "nej, elektronerna finns i skal runt kärnan – precis som i bilden." },
                 { t: "En riktig atom har fler elektroner än protoner", s: "fel", f: "nej, en atom har lika många elektroner som protoner." } ] }
      ] },

    { id: "atom-tomrum-text", kapitel: "atom", avsnitt: ["delar"], titel: "Atomen är mest tomrum – fyll i begrepp",
      typ: "lucktext", nivaerPerArskurs:{ 7: [1], 8: [0,1], 9:[1]}, rullista: [0],
      ordlista: ["tomrum", "luft", "vatten", "blåbär", "fotboll", "massa", "kärnan", "elektronerna", "elektroner"],
      varianter: [
        { text: "Atomen består nästan bara av [tomrum]. Om atomen var lika stor som Globen skulle kärnan vara stor som ett [blåbär]." },
        { text: "Nästan hela atomens [massa|vikt] finns i [kärnan|atomkärnan], eftersom protoner och neutroner är ungefär 2000 gånger tyngre än [elektroner|elektronerna|elektron]." }
      ] },

    { id: "atom-tomrum-mc", kapitel: "atom", avsnitt: ["delar"], titel: "Atomen är mest tomrum – välj rätt",
      typ: "flerval", nivaerPerArskurs:{ 7: [1], 8: [0,1], 9: [1]},
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
      typ: "santfalskt",nivaerPerArskurs: { 7: [1], 8: [0,1], 9: [1]},
      varianter: [
        { pst: [["Atomen består mest av tomrum.", true], ["Nästan hela atomens massa finns i kärnan.", true],
                ["Atomkärnan är ungefär lika stor som hela atomen.", false], ["Elektronerna fyller upp hela atomen.", false],
                ["En proton är ungefär 2000 gånger tyngre än en elektron.", true]] },
        { pst: [["Om atomen var stor som Globen skulle kärnan vara stor som ett blåbär.", true], ["Elektronerna står för det mesta av atomens massa.", false],
                ["Mellan kärnan och elektronerna finns luft.", false], ["Rutherford kom fram till att atomen har en liten kärna.", true],
                ["Atomkärnan är positivt laddad.", true]] }
      ] },

    { id: "atom-skal-max", kapitel: "atom", avsnitt: ["skal"], titel: "Elektronskal – namn och max antal",
      typ: "skal", nivaerPerArskurs:{ 7: [3], 8: [2,3], 9: [2]}, treFragor: true,   // frågar även max om det INTE är yttersta skalet
      varianter: [{ skal: 1 }, { skal: 2 }, { skal: 3 }, { skal: 4 }, { skal: 5 }, { skal: 6 }] },

    { id: "skal-varfor", kapitel: "atom", avsnitt: ["skal"], titel: "Varför finns det flera elektronskal?",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1] },
      varianter: [
        { fraga: "Varför ligger inte alla elektroner i samma skal?",
          alt: [ { t: "Elektronerna har samma laddning och stöter bort varandra", s: "ratt", f: "lika laddningar stöter bort varandra, så det får bara plats ett visst antal elektroner i varje skal." },
                 { t: "Elektronerna har olika laddning", s: "fel", f: "alla elektroner har samma laddning – negativ (−1)." },
                 { t: "Elektronerna är olika stora", s: "fel", f: "alla elektroner är lika stora. Det är laddningen som gör att de stöter bort varandra." },
                 { t: "Kärnan stöter bort elektronerna", s: "fel", f: "kärnan är positiv och drar till sig de negativa elektronerna." } ] },
        { fraga: "Vad händer när ett elektronskal är fullt?",
          alt: [ { t: "Nästa elektron hamnar i ett skal längre ut", s: "ratt", f: "elektronerna stöter bort varandra, så när det är fullt får nästa elektron ta plats i nästa skal." },
                 { t: "Nästa elektron hamnar i kärnan", s: "fel", f: "elektroner finns i skal runt kärnan, aldrig i kärnan." },
                 { t: "Atomen kan inte få fler elektroner", s: "fel", f: "elektronen hamnar i nästa skal längre ut." },
                 { t: "Elektronerna trycks ihop så att fler får plats", s: "fel", f: "elektronerna har samma laddning och stöter bort varandra – de kan inte tryckas ihop." } ] }
      ] },

    { id: "skal-energi", kapitel: "atom", avsnitt: ["skal"], titel: "Elektronskal och energinivåer",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1] },
      varianter: [
        { fraga: "Vilka elektroner har högst energi?",
          alt: [ { t: "Elektronerna i skalen längst ut", s: "ratt", f: "ju längre ut från kärnan, desto högre energinivå har elektronen." },
                 { t: "Elektronerna i K-skalet närmast kärnan", s: "fel", f: "K-skalet har lägst energi. Energin ökar ju längre ut skalet ligger." },
                 { t: "Alla elektroner har lika mycket energi", s: "fel", f: "elektronerna har olika energi beroende på vilket skal de är i." },
                 { t: "Elektronerna i kärnan", s: "fel", f: "det finns inga elektroner i kärnan – de finns i skal runt den." } ] },
        { fraga: "Vad menas med att elektronskalen är energinivåer?",
          alt: [ { t: "Varje skal har en egen energi – längre ut betyder högre energi", s: "ratt", f: "elektronerna i K-skalet har lägst energi och elektronerna i det yttersta skalet har högst." },
                 { t: "Skalen innehåller energi i stället för elektroner", s: "fel", f: "skalen innehåller elektroner. Det är elektronerna som har olika energi." },
                 { t: "Skalen närmast kärnan har högst energi", s: "fel", f: "det är tvärtom – energin ökar ju längre ut skalet ligger." },
                 { t: "Alla skal har samma energi", s: "fel", f: "varje skal har sin egen energinivå." } ] },
        { fraga: "Elektroner i vilket skal har högst energi?",
          alt: [ { t: "N-skalet", s: "ratt", f: "N-skalet ligger längst ut av de här fyra, och ju längre ut desto högre energi." },
                 { t: "K-skalet", s: "fel", f: "K-skalet ligger närmast kärnan och har lägst energi." },
                 { t: "L-skalet", s: "fel", f: "L-skalet ligger näst närmast kärnan. Skal längre ut har högre energi." },
                 { t: "M-skalet", s: "fel", f: "M-skalet har högre energi än K och L, men N-skalet ligger ännu längre ut." } ] }
      ] },

    { id: "skal-valens", kapitel: "atom", avsnitt: ["skal"], titel: "Valenselektroner",
      typ: "flerval", nivaerPerArskurs: { 7: [2], 8: [1,2], 9: [1] },
      varianter: [
        { fraga: "Vad är valenselektroner?",
          alt: [ { t: "Elektronerna i det yttersta skalet", s: "ratt", f: "valenselektronerna finns i atomens yttersta skal." },
                 { t: "Elektronerna i K-skalet", s: "fel", f: "K-skalet är det innersta skalet. Valenselektronerna finns längst ut." },
                 { t: "Alla elektroner i atomen", s: "fel", f: "bara elektronerna i det yttersta skalet kallas valenselektroner." },
                 { t: "Elektronerna som finns i kärnan", s: "fel", f: "det finns inga elektroner i kärnan." } ] },
        { fraga: "En kolatom har 6 elektroner: 2 i K-skalet och 4 i L-skalet. Hur många valenselektroner har kol?",
          alt: [ { t: "4", s: "ratt", f: "L-skalet är kolets yttersta skal, och där finns 4 elektroner." },
                 { t: "2", s: "fel", f: "de 2 elektronerna finns i K-skalet, som är det innersta skalet." },
                 { t: "6", s: "fel", f: "6 är alla elektroner. Valenselektronerna är bara de i yttersta skalet." },
                 { t: "8", s: "fel", f: "8 är det största antalet som får plats i L-skalet, men kol har bara 4 där." } ] },
        { fraga: "En natriumatom har 11 elektroner: 2 i K-skalet, 8 i L-skalet och 1 i M-skalet. Hur många valenselektroner har natrium?",
          alt: [ { t: "1", s: "ratt", f: "M-skalet är natriums yttersta skal, och där finns 1 elektron." },
                 { t: "8", s: "fel", f: "L-skalet är inte det yttersta skalet hos natrium – det är M-skalet." },
                 { t: "11", s: "fel", f: "11 är alla elektroner. Valenselektronerna är bara de i yttersta skalet." },
                 { t: "2", s: "fel", f: "de 2 elektronerna finns i K-skalet, som är det innersta skalet." } ] }
      ] },

    { id: "atom-kvarktabell", kapitel: "atom", avsnitt: ["kvarkar"], titel: "Kvarkar – generationer",
      typ: "kvarktabell", nivaer: [3],
      varianter: [{}] },

    { id: "atom-kvark", kapitel: "atom", avsnitt: ["kvarkar"], titel: "Bygg med kvarkar",
      typ: "kvark", nivaer: [3],
      varianter: [{ visaLaddning: true }, { visaLaddning: false }] },

    /* ---------- Förklara med begrepp ---------- */

    { id: "fk-atom-massa", kapitel: "atom", avsnitt: ["delar"], titel: "Förklara: var finns atomens massa?",
      typ: "forklara", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] }, rullista: [1],
      varianter: [
        { fraga: "Förklara varför nästan hela atomens massa finns i atomkärnan.",
          begrepp: ["proton", "neutron", "elektron", "kärna|kärnan", "lätt|lättare|väger nästan ingenting|väger mycket lite"],
          modell: "I atomkärnan finns **protonerna** och **neutronerna**. De är ungefär 2000 gånger tyngre än **elektronerna**, som finns i skalen runt kärnan. Elektronerna är alltså så **lätta** att de nästan inte påverkar atomens massa. Därför finns nästan all massa i **kärnan**." }
      ] },

    { id: "fk-atom-skal", kapitel: "atom", avsnitt: ["skal"], titel: "Förklara: varför flera elektronskal?",
      typ: "forklara", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] }, rullista: [1],
      varianter: [
        { fraga: "Förklara varför alla elektroner inte kan ligga i samma elektronskal.",
          begrepp: ["negativ|laddning", "stöter bort|repeller|repellerar", "skal", "plats|rymmer|max"],
          modell: "Alla elektroner har samma **negativa laddning**. Lika laddningar **stöter bort** varandra, så det får bara **plats** ett visst antal elektroner i varje **skal** – K-skalet rymmer högst 2 och L-skalet högst 8. När ett skal är fullt hamnar nästa elektron i ett skal längre ut." }
      ] }
]);
