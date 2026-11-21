/* =====================================================================
   UPPGIFTER – Kraft, massa och tyngd
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
   Avsnitt: vad-kraft, tyngdkraft, massa-tyngd, tyngdpunkt
   Öva tills du kan: kraft-vad, krafter-kropp, tyngdkraft-ner, kraft-matt, tyngd-rakna, valta
   ===================================================================== */
Portal.uppgifter([

  /* ---------------- Vad är en kraft? ---------------- */

  { id: "kr-vad", kapitel: "kraft", avsnitt: ["vad-kraft"], titel: "Vad är en kraft?",
    typ: "flerval", nivaer: [0, 1], punkter: ["kraft-vad"],
    varianter: [
      { fraga: "Vad är en kraft i fysiken?",
        alt: [ { t: "Något som trycker eller drar i en kropp", s: "ratt", f: "en kraft trycker eller drar – och den kommer alltid från något." },
               { t: "Hur mycket ork man har", s: "fel", f: "så använder vi ordet i vardagen, men i fysiken betyder kraft något som trycker eller drar." },
               { t: "Hur mycket en kropp väger", s: "fel", f: "det är massan. En kraft trycker eller drar." },
               { t: "Hur snabbt en kropp rör sig", s: "fel", f: "det är farten. En kraft trycker eller drar." } ] },
      { fraga: "Varifrån kommer en kraft?",
        alt: [ { t: "Alltid från något – till exempel en hand, ett rep eller jorden", s: "ratt", f: "en kraft kommer alltid från något som trycker eller drar." },
               { t: "Den kan komma från ingenting", s: "fel", f: "en kraft kommer alltid från något – en hand, ett rep eller jorden." },
               { t: "Bara från människor", s: "fel", f: "jorden drar också i allt – det är tyngdkraften." } ] },
      { fraga: "En låda glider ner för en backe fast ingen puttar på den. Vad drar i lådan?",
        alt: [ { t: "Jorden", s: "ratt", f: "jorden drar i lådan – det är tyngdkraften." },
               { t: "Ingenting", s: "fel", f: "något måste dra i lådan, annars skulle den inte röra sig. Det är jorden." },
               { t: "Backen", s: "fel", f: "backen drar inte. Det är jorden som drar lådan nedåt." } ] }
    ] },

  { id: "kr-matt", kapitel: "kraft", avsnitt: ["tyngdkraft"], titel: "Mäta kraft",
    typ: "flerval", nivaer: [0, 1], punkter: ["kraft-matt"],
    varianter: [
      { fraga: "Vilken enhet har kraft?",
        alt: [ { t: "newton (N)", s: "ratt", f: "kraft mäts i newton." },
               { t: "kilogram (kg)", s: "fel", f: "kilogram är enheten för massa." },
               { t: "meter (m)", s: "fel", f: "meter är enheten för längd." },
               { t: "sekund (s)", s: "fel", f: "sekund är enheten för tid." } ] },
      { fraga: "Vad använder man för att mäta en kraft?",
        alt: [ { t: "En dynamometer", s: "ratt", f: "i dynamometern sträcks en fjäder ut – ju större kraft, desto mer." },
               { t: "En termometer", s: "fel", f: "en termometer mäter temperatur." },
               { t: "Ett måttband", s: "fel", f: "ett måttband mäter längd." },
               { t: "Ett tidtagarur", s: "fel", f: "ett tidtagarur mäter tid." } ] },
      { bild: "![Lisa drar lådan med en dynamometer som visar 30 N](bilder/lada-dynamometer.svg)",
        fraga: "Hur stor kraft visar dynamometern?",
        alt: [ { t: "30 N", s: "ratt", f: "den röda markeringen står vid 30 N." },
               { t: "30 kg", s: "fel", f: "kraft mäts i newton, inte i kilogram." },
               { t: "20 N", s: "fel", f: "titta var den röda markeringen står – vid 30." } ] }
    ] },

  { id: "kr-vad-lucka", kapitel: "kraft", avsnitt: ["vad-kraft", "tyngdkraft"], titel: "Kraft – fyll i",
    typ: "lucktext", nivaer: [1], rullista: [1], punkter: ["kraft-vad", "kraft-matt"],
    ordlista: ["trycker", "drar", "newton", "dynamometer", "kilogram", "termometer"],
    varianter: [
      { text: "En kraft [*trycker] eller [*drar] i en kropp.\nKraft mäts i enheten [newton|N].\nMan mäter kraft med en [dynamometer]." }
    ] },

  { id: "kr-sortera", kapitel: "kraft", avsnitt: ["vad-kraft"], titel: "Dragkraft, tryckkraft eller tyngdkraft?",
    typ: "sortera", nivaer: [0, 1], punkter: ["krafter-kropp"],
    varianter: [
      { grupper: ["Dragkraft", "Tryckkraft", "Tyngdkraft"],
        saker: [["Du drar en kälke i ett rep", 0], ["En hund drar i kopplet", 0], ["Du trycker upp en dörr", 1], ["Du puttar en kundvagn", 1],
                ["En penna faller mot golvet", 2], ["Ett äpple faller från trädet", 2]] },
      { grupper: ["Dragkraft", "Tryckkraft", "Tyngdkraft"],
        saker: [["En bil drar en släpvagn", 0], ["Du drar ut en låda ur byrån", 0], ["Du trycker på en knapp", 1], ["Du skjuter en bil som har fått motorstopp", 1],
                ["En boll rullar ner för en backe", 2], ["Regndroppar faller ner", 2]] }
    ] },

  { id: "kr-pil-vilken", kapitel: "kraft", avsnitt: ["vad-kraft"], titel: "Vilken kraft visar pilen?",
    typ: "flerval", nivaer: [0, 1], punkter: ["krafter-kropp"],
    varianter: [
      { bild: "![Låda med en pil som börjar vid vänster sida och pekar in i lådan](bilder/pil-tryck-hoger.svg)",
        fraga: "Pilen börjar vid lådans vänstra sida och pekar in i lådan. Vilken kraft är det?",
        alt: [ { t: "En tryckkraft åt höger", s: "ratt", f: "pilen pekar in i lådan – något trycker på den." },
               { t: "En dragkraft åt höger", s: "fel", f: "en dragkraft pekar ut från lådan. Den här pilen pekar in i lådan." },
               { t: "En tryckkraft åt vänster", s: "fel", f: "pilen pekar åt höger." } ] },
      { bild: "![Låda med en pil som börjar vid höger sida och pekar ut från lådan](bilder/pil-drag-hoger.svg)",
        fraga: "Pilen börjar vid lådans högra sida och pekar ut från lådan. Vilken kraft är det?",
        alt: [ { t: "En dragkraft åt höger", s: "ratt", f: "pilen pekar ut från lådan – något drar i den." },
               { t: "En tryckkraft åt höger", s: "fel", f: "en tryckkraft pekar in i lådan. Den här pilen pekar ut från lådan." },
               { t: "En dragkraft åt vänster", s: "fel", f: "pilen pekar åt höger." } ] },
      { bild: "![Låda med en pil som börjar vid höger sida och pekar in i lådan](bilder/pil-tryck-vanster.svg)",
        fraga: "Pilen börjar vid lådans högra sida och pekar in i lådan. Vilken kraft är det?",
        alt: [ { t: "En tryckkraft åt vänster", s: "ratt", f: "pilen pekar in i lådan och åt vänster – något trycker lådan åt vänster." },
               { t: "En dragkraft åt vänster", s: "fel", f: "en dragkraft pekar ut från lådan. Den här pilen pekar in i lådan." },
               { t: "En tryckkraft åt höger", s: "fel", f: "pilen pekar åt vänster." } ] },
      { bild: "![Låda med en pil som börjar vid vänster sida och pekar ut från lådan](bilder/pil-drag-vanster.svg)",
        fraga: "Pilen börjar vid lådans vänstra sida och pekar ut från lådan. Vilken kraft är det?",
        alt: [ { t: "En dragkraft åt vänster", s: "ratt", f: "pilen pekar ut från lådan och åt vänster – något drar lådan åt vänster." },
               { t: "En tryckkraft åt vänster", s: "fel", f: "en tryckkraft pekar in i lådan. Den här pilen pekar ut från lådan." },
               { t: "En dragkraft åt höger", s: "fel", f: "pilen pekar åt vänster." } ] }
    ] },

  { id: "kr-pil-storst", kapitel: "kraft", avsnitt: ["vad-kraft"], titel: "Vilken kraft är störst?",
    typ: "flerval", nivaer: [1], punkter: ["krafter-kropp"],
    varianter: [
      { bild: "![Två tryckkrafter på en låda. Pil A är lång och pil B är kort](bilder/pil-tva-tryck.svg)",
        fraga: "Två tryckkrafter verkar på lådan. Vilken kraft är störst?",
        alt: [ { t: "A", s: "ratt", f: "pil A är längst, och en längre pil betyder en större kraft." },
               { t: "B", s: "fel", f: "pil B är kortast. En längre pil betyder en större kraft." },
               { t: "De är lika stora", s: "fel", f: "pilarna är olika långa, alltså är krafterna olika stora." } ] },
      { bild: "![Två dragkrafter på en låda. Pil A är kort och pil B är lång](bilder/pil-tva-drag.svg)",
        fraga: "Två dragkrafter verkar på lådan. Vilken kraft är störst?",
        alt: [ { t: "B", s: "ratt", f: "pil B är längst, och en längre pil betyder en större kraft." },
               { t: "A", s: "fel", f: "pil A är kortast. En längre pil betyder en större kraft." },
               { t: "De är lika stora", s: "fel", f: "pilarna är olika långa, alltså är krafterna olika stora." } ] }
    ] },

  { id: "kr-vilka-krafter", kapitel: "kraft", avsnitt: ["vad-kraft"], titel: "Vilka krafter verkar?",
    typ: "valjflera", nivaer: [1, 2], punkter: ["krafter-kropp"],
    varianter: [
      { fraga: "Du drar en kälke i ett rep. Vilka två krafter verkar på kälken?",
        ratt: ["Dragkraft", "Tyngdkraft"], fel: ["Tryckkraft", "Ingen kraft"],
        forklaring: "repet drar i kälken, och jorden drar kälken rakt ner." },
      { fraga: "Du puttar en kundvagn framför dig. Vilka två krafter verkar på kundvagnen?",
        ratt: ["Tryckkraft", "Tyngdkraft"], fel: ["Dragkraft", "Ingen kraft"],
        forklaring: "dina händer trycker på kundvagnen, och jorden drar den rakt ner." },
      { fraga: "En låda står stilla på golvet. Ingen rör den. Vilken kraft från jorden verkar på lådan?",
        ratt: ["Tyngdkraft"], fel: ["Dragkraft", "Tryckkraft från en hand", "Ingen kraft"],
        forklaring: "jorden drar alltid i lådan – även när den står stilla." }
    ] },

  { id: "kr-forklara-krafter", kapitel: "kraft", avsnitt: ["vad-kraft"], titel: "Förklara: vilka krafter verkar på lådan?",
    typ: "forklara", nivaer: [2], rullista: [2], punkter: ["krafter-kropp"],
    varianter: [
      { bild: "![Repet drar i lådan: dragkraften pekar ut från lådan och tyngdkraften rakt ner](bilder/kraftpil-drag.svg)",
        fraga: "Ett rep drar lådan åt höger. Vilka krafter verkar på lådan, och åt vilket håll? Förklara varifrån krafterna kommer.",
        begrepp: ["dragkraft", "tyngdkraft", "höger", "ner|nedåt", "jorden"],
        modell: "Repet drar i lådan, så det verkar en **dragkraft** åt **höger**. **Jorden** drar i lådan, så det verkar också en **tyngdkraft** rakt **ner**." }
    ] },

  /* ---------------- Tyngdkraft och newton ---------------- */

  { id: "kr-tyngd-riktning", kapitel: "kraft", avsnitt: ["tyngdkraft"], titel: "Åt vilket håll drar tyngdkraften?",
    typ: "flerval", nivaer: [0, 1], punkter: ["tyngdkraft-ner"],
    varianter: [
      { fraga: "Åt vilket håll drar tyngdkraften?",
        alt: [ { t: "Rakt ner, mot jordens mitt", s: "ratt", f: "jorden drar allt mot sin mitt." },
               { t: "Åt det håll som kroppen rör sig", s: "fel", f: "tyngdkraften drar alltid rakt ner, hur kroppen än rör sig." },
               { t: "Rakt upp", s: "fel", f: "jorden drar, inte trycker – därför faller saker ner." } ] },
      { fraga: "En låda står i en backe. Åt vilket håll drar tyngdkraften lådan?",
        alt: [ { t: "Rakt ner", s: "ratt", f: "tyngdkraften drar alltid rakt ner, mot jordens mitt – även i en backe." },
               { t: "Snett nedför backen", s: "fel", f: "lådan glider nedför backen, men tyngdkraften pekar ändå rakt ner." },
               { t: "Vinkelrätt in mot backen", s: "fel", f: "tyngdkraften bryr sig inte om hur backen lutar – den drar rakt ner." } ] },
      { fraga: "En person står i Australien, på andra sidan jorden. Åt vilket håll drar tyngdkraften personen?",
        alt: [ { t: "Mot jordens mitt", s: "ratt", f: "tyngdkraften drar alltid mot jordens mitt – för personen i Australien är det också \"ner\"." },
               { t: "Mot Sverige", s: "fel", f: "tyngdkraften drar mot jordens mitt, inte mot ett land." },
               { t: "Bort från jorden", s: "fel", f: "då skulle personen falla ut i rymden. Tyngdkraften drar mot jordens mitt." } ] }
    ] },

  { id: "kr-tyngd-sf", kapitel: "kraft", avsnitt: ["tyngdkraft"], titel: "Tyngdkraft – sant eller falskt",
    typ: "santfalskt", nivaer: [1], punkter: ["tyngdkraft-ner", "kraft-matt"],
    varianter: [
      { pst: [["Tyngdkraften drar i en låda även när lådan står still.", true], ["Tyngdkraften drar alltid rakt ner, mot jordens mitt.", true],
              ["I en backe drar tyngdkraften snett längs backen.", false], ["Kraft mäts i kilogram.", false],
              ["En dynamometer mäter kraft.", true]] },
      { pst: [["Lådan i backen glider ner för att tyngdkraften drar i den.", true], ["Tyngdkraften finns bara när något faller.", false],
              ["Kraft mäts i newton.", true], ["Jorden drar i alla kroppar.", true],
              ["Tyngdkraften drar mot jordens mitt även i Australien.", true]] }
    ] },

  /* ---------------- Massa och tyngd ---------------- */

  { id: "kr-massa-tyngd-sortera", kapitel: "kraft", avsnitt: ["massa-tyngd"], titel: "Massa eller tyngd?",
    typ: "sortera", nivaer: [0, 1], punkter: ["tyngd-rakna"],
    varianter: [
      { grupper: ["Massa", "Tyngd"],
        saker: [["mäts i kilogram (kg)", 0], ["lika stor överallt", 0], ["hur mycket materia en kropp innehåller", 0],
                ["mäts i newton (N)", 1], ["mindre på månen än på jorden", 1], ["hur hårt jorden drar i kroppen", 1]] }
    ] },

  { id: "kr-tyngd-rakna", kapitel: "kraft", avsnitt: ["massa-tyngd"], titel: "Räkna ut tyngden",
    typ: "lucktext", nivaer: [1, 2], punkter: ["tyngd-rakna"],
    varianter: [
      { text: "En vattenmelon har massan 5 kg.\nTyngd = 5 · 10 = [50] N" },
      { text: "En cykel har massan 15 kg.\nTyngd = 15 · 10 = [150] N" },
      { text: "En hund har massan 20 kg.\nTyngd = 20 · 10 = [200] N" },
      { text: "En elev har massan 50 kg.\nTyngd = 50 · 10 = [500] N" },
      { text: "En liter mjölk har massan 1 kg.\nTyngd = 1 · 10 = [10] N" }
    ] },

  { id: "kr-manen-tabell", kapitel: "kraft", avsnitt: ["massa-tyngd"], titel: "Massa och tyngd på jorden och månen",
    typ: "lucktext", nivaer: [2], punkter: ["tyngd-rakna"],
    varianter: [
      { text: "En låda har massan 10 kg på jorden.\nPå månen är lådans massa [10] kg.\nPå jorden är tyngden 10 · 10 = [100] N.\nPå månen är tyngdfaktorn ungefär 1,6, så tyngden är 10 · 1,6 = [16] N." },
      { text: "En astronaut har massan 80 kg på jorden.\nPå månen är astronautens massa [80] kg.\nPå jorden är tyngden 80 · 10 = [800] N.\nPå månen är tyngdfaktorn ungefär 1,6, så tyngden är 80 · 1,6 = [128] N." }
    ] },

  { id: "kr-manen-flerval", kapitel: "kraft", avsnitt: ["massa-tyngd"], titel: "Vad händer på månen?",
    typ: "flerval", nivaer: [1], punkter: ["tyngd-rakna"],
    varianter: [
      { fraga: "En låda har massan 10 kg på jorden. Vad är lådans massa på månen?",
        alt: [ { t: "10 kg", s: "ratt", f: "massan är lika stor överallt." },
               { t: "Mindre än 10 kg", s: "fel", f: "det är tyngden som blir mindre på månen. Massan är densamma." },
               { t: "0 kg", s: "fel", f: "lådan innehåller lika mycket materia som förut, så massan är densamma." } ] },
      { fraga: "Varför blir tyngden mindre på månen?",
        alt: [ { t: "Månen drar svagare än jorden", s: "ratt", f: "månen har mycket mindre massa än jorden och drar därför svagare." },
               { t: "Kroppen innehåller mindre materia på månen", s: "fel", f: "kroppen innehåller lika mycket materia – massan är densamma." },
               { t: "Det finns ingen luft på månen", s: "fel", f: "det är inte luften som avgör tyngden, utan hur hårt månen drar." } ] }
    ] },

  { id: "kr-manen-forklara", kapitel: "kraft", avsnitt: ["massa-tyngd"], titel: "Förklara: blir massan mindre på månen?",
    typ: "forklara", nivaer: [2], rullista: [2], punkter: ["tyngd-rakna"],
    varianter: [
      { fraga: "Kalle säger: \"På månen blir man lättare, så ens massa blir mindre.\" Har Kalle rätt? Förklara.",
        begrepp: ["massa", "tyngd", "samma|lika stor|densamma", "månen drar|drar svagare|svagare"],
        modell: "Kalle har fel. **Massan** är **lika stor** överallt, eftersom kroppen innehåller lika mycket materia. Det som blir mindre är **tyngden**, **eftersom** månen **drar svagare** än jorden." }
    ] },

  /* ---------------- Tyngdpunkt, lodlinje och stödyta ---------------- */

  { id: "kr-begrepp-dra", kapitel: "kraft", avsnitt: ["tyngdpunkt"], titel: "Tyngdpunkt, lodlinje och stödyta",
    typ: "dra", nivaer: [0, 1], punkter: ["valta"],
    varianter: [
      { rubrik: "Dra varje begrepp till rätt beskrivning.",
        par: [["Tyngdpunkt", "Mitten av en kropps massa"], ["Lodlinje", "En linje rakt ner från tyngdpunkten"], ["Stödyta", "Ytan som en kropp står på"]] }
    ] },

  { id: "kr-valta", kapitel: "kraft", avsnitt: ["tyngdpunkt"], titel: "Faller den tillbaka eller välter den?",
    typ: "flerval", nivaer: [0, 1], punkter: ["valta"],
    varianter: [
      { bild: "![En kloss som lutar lite. Lodlinjen från tyngdpunkten hamnar innanför hörnet](bilder/valta-1.svg)",
        fraga: "Klossen släpps precis som på bilden. Vad händer?",
        alt: [ { t: "Den faller tillbaka", s: "ratt", f: "lodlinjen hamnar inom stödytan, därför faller klossen tillbaka." },
               { t: "Den välter", s: "fel", f: "klossen välter bara om lodlinjen hamnar utanför stödytan." } ] },
      { bild: "![En kloss som lutar mycket. Lodlinjen från tyngdpunkten hamnar utanför hörnet](bilder/valta-2.svg)",
        fraga: "Klossen släpps precis som på bilden. Vad händer?",
        alt: [ { t: "Den välter", s: "ratt", f: "lodlinjen hamnar utanför stödytan, därför välter klossen." },
               { t: "Den faller tillbaka", s: "fel", f: "klossen faller bara tillbaka om lodlinjen hamnar inom stödytan." } ] },
      { bild: "![En låg och bred kloss som lutar. Lodlinjen hamnar innanför hörnet](bilder/valta-3.svg)",
        fraga: "Klossen släpps precis som på bilden. Vad händer?",
        alt: [ { t: "Den faller tillbaka", s: "ratt", f: "lodlinjen hamnar inom stödytan, därför faller klossen tillbaka." },
               { t: "Den välter", s: "fel", f: "klossen välter bara om lodlinjen hamnar utanför stödytan." } ] },
      { bild: "![En hög och smal kloss som lutar. Lodlinjen hamnar utanför hörnet](bilder/valta-4.svg)",
        fraga: "Klossen släpps precis som på bilden. Vad händer?",
        alt: [ { t: "Den välter", s: "ratt", f: "lodlinjen hamnar utanför stödytan, därför välter klossen." },
               { t: "Den faller tillbaka", s: "fel", f: "klossen faller bara tillbaka om lodlinjen hamnar inom stödytan." } ] }
    ] },

  { id: "kr-valta-lucka", kapitel: "kraft", avsnitt: ["tyngdpunkt"], titel: "När välter en kropp?",
    typ: "lucktext", nivaer: [1, 2], rullista: [1], punkter: ["valta"],
    ordlista: ["inom", "utanför", "tyngdpunkten", "stödytan", "lodlinjen"],
    varianter: [
      { text: "Från [tyngdpunkten] drar man en linje rakt ner. Den kallas [lodlinjen|lodlinje].\nHamnar lodlinjen [inom] stödytan står kroppen kvar.\nHamnar lodlinjen [utanför] stödytan välter kroppen." }
    ] },

  { id: "kr-valta-forklara", kapitel: "kraft", avsnitt: ["tyngdpunkt"], titel: "Förklara: varför välter klossen?",
    typ: "forklara", nivaer: [2], rullista: [2], punkter: ["valta"],
    varianter: [
      { bild: "![En hög och smal kloss som lutar. Lodlinjen hamnar utanför hörnet](bilder/valta-4.svg)",
        fraga: "Förklara varför klossen välter.",
        begrepp: ["tyngdpunkt", "lodlinje", "stödyta", "utanför"],
        modell: "**Lodlinjen** från **tyngdpunkten** hamnar **utanför** **stödytan**. **Därför** välter klossen." }
    ] },

  { id: "kr-stadig", kapitel: "kraft", avsnitt: ["tyngdpunkt"], titel: "Vilken står stadigast?",
    typ: "flerval", nivaer: [3],
    varianter: [
      { fraga: "Två klossar lutar lika mycket. Den ena är hög och smal, den andra är låg och bred. Vilken välter lättast?",
        alt: [ { t: "Den höga och smala", s: "ratt", f: "den har hög tyngdpunkt och liten stödyta, så lodlinjen hamnar snabbt utanför stödytan." },
               { t: "Den låga och breda", s: "fel", f: "låg tyngdpunkt och stor stödyta gör att den står stadigt." },
               { t: "De välter lika lätt", s: "fel", f: "formen spelar roll – låg tyngdpunkt och stor stödyta gör en kropp stadigare." } ] },
      { fraga: "Var ligger tyngdpunkten i en badring?",
        alt: [ { t: "Mitt i hålet", s: "ratt", f: "ringen är likadan runt om, så mitten av massan hamnar i hålet – där det inte finns någon massa." },
               { t: "Inne i gummit", s: "fel", f: "ringen är likadan runt om, så tyngdpunkten hamnar mitt i hålet." },
               { t: "Längst ner, där ringen nuddar marken", s: "fel", f: "tyngdpunkten är mitten av massan, och den ligger mitt i hålet." } ] }
    ] }

]);
