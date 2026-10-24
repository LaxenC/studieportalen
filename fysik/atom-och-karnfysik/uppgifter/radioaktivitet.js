/* =====================================================================
   UPPGIFTER – Radioaktivitet – sönderfall
   ---------------------------------------------------------------------
   En uppgift per objekt. Mallar för varje uppgiftstyp finns i mallar.md.

     id        : unikt namn – ändras aldrig
     kapitel   : kapitlets id
     avsnitt   : (valfritt) lista med avsnitt i texten, t.ex. ["halvering"]
     titel     : rubriken eleven ser
     typ       : uppgiftstyp (se mallar.md)
     nivaer    : uppgiftens nivå, t.ex. [1] eller [0, 1]
     nivaerPerArskurs : (valfritt) annan nivå för en årskurs, t.ex. { 7: [2] }
     rullista  : (valfritt) nivåer där eleven väljer i en rullista
     grupp     : (valfritt) uppgifter i samma grupp räknas som varianter av varandra
     dold      : true = används inte (utan att tas bort)
     varianter : lista – en slumpas varje gång

   Avsnitt i texten: instabil, sonderfall, mata, halvering, kol14
   ===================================================================== */
Portal.uppgifter([

    /* ---------- Instabila atomkärnor ---------- */

    { id: "rad-instabil-tabell", kapitel: "radioaktivitet", avsnitt: ["instabil"], titel: "Instabil atomkärna – vad händer?",
      typ: "para", nivaerPerArskurs: { 7: [2], 8: [1], 9: [1] },
      varianter: [
        { rubrik: "Fyll i vad den instabila kärnan vill göra sig av med och vad den sänder ut.",
          rubriker: ["Instabil kärna", "Vill göra sig av med", "Sänder ut"],
          par: [["För mycket energi", "Energi", "Gammastrålning"], ["Obalans av partiklar i kärnan", "Partiklar", "Alfa- eller betastrålning"]] }
      ] },

    { id: "rad-instabil-text", kapitel: "radioaktivitet", avsnitt: ["instabil"], titel: "Instabila atomkärnor – fyll i",
      typ: "lucktext", nivaerPerArskurs: { 7: [2], 8: [1, 2], 9: [1] }, rullista: [0, 1],
      ordlista: ["stabil", "instabil", "energi", "partiklar", "gammastrålning", "alfastrålning", "betastrålning", "elektroner"],
      varianter: [
        { text: "En atomkärna som inte ändras kallas [stabil]. En atomkärna som vill göra sig av med energi eller partiklar kallas [instabil]." },
        { text: "En instabil kärna med för mycket [energi] gör sig av med den och sänder ut [gammastrålning|gamma]." },
        { text: "En instabil kärna med obalans mellan protoner och neutroner gör sig av med [partiklar|partikel] och sänder ut [*alfastrålning|alfa/betastrålning|beta] eller [*alfastrålning|alfa/betastrålning|beta].",
          facit: "En instabil kärna med obalans mellan protoner och neutroner gör sig av med <b>partiklar</b> och sänder ut <b>alfastrålning</b> eller <b>betastrålning</b>." }
      ] },

    /* ---------- Radioaktivt sönderfall ---------- */

    { id: "rad-begrepp-para", kapitel: "radioaktivitet", avsnitt: ["sonderfall"], titel: "Radioaktivitet – para ihop begrepp",
      typ: "para", nivaerPerArskurs: { 7: [2], 8: [1], 9: [1] },
      varianter: [
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Radioaktiv kärna", "En instabil kärna som kan sönderfalla"], ["Radioaktivt sönderfall", "När kärnan delar upp sig och sänder ut strålning"],
                ["Joniserande strålning", "Strålningen som skickas ut vid sönderfallet"], ["Stabil kärna", "En kärna som inte ändras"]] },
        { rubrik: "Para ihop bilden i sönderfallet med rätt beskrivning.",
          par: [["Instabil kärna", "Har för mycket energi eller för många partiklar"], ["Sönderfaller", "Delar upp sig och sänder ut strålning"], ["Stabil kärna", "Ändras inte mer"]] }
      ] },

    { id: "rad-stralning-namn", kapitel: "radioaktivitet", avsnitt: ["sonderfall"], titel: "Vad heter strålningen?",
      typ: "flerval", nivaerPerArskurs: { 7: [2], 8: [1, 2], 9: [1] },
      varianter: [
        { fraga: "Vad kallas strålningen som skickas ut när en radioaktiv kärna sönderfaller?",
          alt: [ { t: "Joniserande strålning", s: "ratt", f: "strålningen har så hög energi att den kan slå loss elektroner och bilda joner." },
                 { t: "Radioaktiv strålning", s: "fel", f: "det är kärnan som är radioaktiv – strålningen kallas joniserande strålning." },
                 { t: "Synligt ljus", s: "fel", f: "synligt ljus bildas när elektroner hoppar mellan skal, inte när kärnan sönderfaller." },
                 { t: "Radiovågor", s: "fel", f: "radiovågor har för lite energi och kommer inte från sönderfallande kärnor." } ] },
        { fraga: "Vad är det som är radioaktivt?",
          alt: [ { t: "Den instabila atomkärnan", s: "ratt", f: "en instabil kärna som kan sönderfalla kallas radioaktiv." },
                 { t: "Strålningen", s: "fel", f: "strålningen kallas joniserande strålning. Det är kärnan som är radioaktiv." },
                 { t: "Elektronerna i skalen", s: "fel", f: "radioaktivitet handlar om atomkärnan, inte elektronerna." },
                 { t: "Alla atomer", s: "fel", f: "de flesta atomkärnor är stabila och alltså inte radioaktiva." } ] }
      ] },

    { id: "rad-sonderfall-sf", kapitel: "radioaktivitet", avsnitt: ["instabil", "sonderfall"], titel: "Sönderfall – sant eller falskt",
      typ: "santfalskt", nivaerPerArskurs: { 7: [2], 8: [1, 2], 9: [1] },
      varianter: [
        { pst: [["De flesta atomkärnor är stabila.", true], ["En instabil kärna vill bli stabil.", true],
                ["Strålningen från en sönderfallande kärna kallas radioaktiv strålning.", false], ["En kärna med för mycket energi sänder ut gammastrålning.", true],
                ["Alla atomkärnor sönderfaller.", false]] },
        { pst: [["En radioaktiv kärna är instabil.", true], ["Vid ett sönderfall delar kärnan upp sig.", true],
                ["En stabil kärna sänder ut strålning hela tiden.", false], ["En kärna sänder ut strålning när den sönderfaller.", true],
                ["Elektronerna i skalen är radioaktiva.", false]] }
      ] },

    /* ---------- Mäta strålning ---------- */

    { id: "rad-mata-para", kapitel: "radioaktivitet", avsnitt: ["mata"], titel: "Mäta strålning – para ihop",
      typ: "para", nivaerPerArskurs: { 7: [3], 8: [1], 9: [1] },
      varianter: [
        { rubrik: "Para ihop mätaren med vad den mäter och vilken enhet den använder.",
          rubriker: ["Mätare", "Mäter", "Enhet"],
          par: [["Dosimeter", "Stråldos", "Sievert (Sv)"], ["GM-mätare", "Aktivitet", "Becquerel (Bq)"]] },
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Stråldos", "Hur mycket strålning en person utsätts för"], ["Aktivitet", "Antal sönderfall per sekund"],
                ["Sievert (Sv)", "Enheten för stråldos"], ["Becquerel (Bq)", "Enheten för aktivitet"]] }
      ] },

    { id: "rad-mata-sortera", kapitel: "radioaktivitet", avsnitt: ["mata"], titel: "Dosimeter eller GM-mätare? – sortera",
      typ: "sortera", nivaerPerArskurs: { 7: [3], 8: [1,2], 9: [1] },
      varianter: [
        { grupper: ["Dosimeter", "GM-mätare"],
          saker: [["Mäter stråldos", 0], ["Mäts i sievert", 0], ["Bärs av personal på kärnkraftverk", 0],
                  ["Mäter aktivitet", 1], ["Mäts i becquerel", 1], ["Klickar vid varje sönderfall", 1]] }
      ] },

    { id: "rad-mata-bq", kapitel: "radioaktivitet", avsnitt: ["mata"], titel: "Aktivitet – vad visar mätaren?",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [1,2], 9: [1] },
      varianter: [
        { fraga: "En GM-mätare klickar 50 gånger på en sekund. Vad är aktiviteten?",
          alt: [ { t: "50 Bq", s: "ratt", f: "aktivitet mäts i becquerel, och 1 Bq = ett sönderfall per sekund." },
                 { t: "50 Sv", s: "fel", f: "sievert är enheten för stråldos, inte aktivitet." },
                 { t: "1 Bq", s: "fel", f: "varje klick är ett sönderfall – 50 klick per sekund ger 50 Bq." },
                 { t: "50 mSv", s: "fel", f: "millisievert är enheten för stråldos, inte aktivitet." } ] },
        { fraga: "Du vill veta hur mycket strålning en röntgensjuksköterska utsätts för under ett år. Vad ska hon bära?",
          alt: [ { t: "En dosimeter", s: "ratt", f: "dosimetern mäter stråldosen i sievert." },
                 { t: "En GM-mätare", s: "fel", f: "GM-mätaren mäter aktivitet – sönderfall per sekund – inte hur mycket strålning en person får." },
                 { t: "En termometer", s: "fel", f: "en termometer mäter temperatur." },
                 { t: "Ingenting – strålning känns", s: "fel", f: "strålning syns, hörs och känns inte. Därför behövs mätinstrument." } ] }
      ] },

    /* ---------- Halveringstid ---------- */

    { id: "rad-halv-text", kapitel: "radioaktivitet", avsnitt: ["halvering"], titel: "Halveringstid – fyll i",
      typ: "lucktext", nivaerPerArskurs: { 7: [2], 8: [1], 9: [1] }, rullista: [0, 1],
      ordlista: ["hälften", "allt", "en fjärdedel", "halveringstid", "aktivitet", "slumpen"],
      varianter: [
        { text: "Tiden det tar tills [hälften|halva] av de radioaktiva kärnorna har sönderfallit kallas [halveringstid|halveringstiden]." },
        { text: "Efter två halveringstider är [en fjärdedel|25 %|25%|en fjärdedel kvar] av de radioaktiva kärnorna kvar." },
        { text: "Man kan inte veta när en enskild kärna sönderfaller – det styrs av [slumpen|slump]." }
      ] },

    { id: "rad-halv-rakna", kapitel: "radioaktivitet", avsnitt: ["halvering"], titel: "Halveringstid – räkna",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] },
      varianter: [
        { fraga: "Cesium-137 har halveringstiden 30 år. Du har 800 radioaktiva kärnor. Hur många är kvar efter 60 år?",
          alt: [ { t: "200", s: "ratt", f: "60 år är två halveringstider: 800 → 400 → 200." },
                 { t: "400", s: "fel", f: "400 är kvar efter 30 år. Efter 60 år har det halverats en gång till." },
                 { t: "0", s: "fel", f: "det som är kvar halveras varje gång – det tar aldrig slut efter två halveringstider." },
                 { t: "100", s: "fel", f: "100 är kvar efter 90 år, alltså tre halveringstider." } ] },
        { fraga: "Ett ämne har halveringstiden 8 dygn. Du har 100 g. Hur mycket radioaktivt ämne är kvar efter 16 dygn?",
          alt: [ { t: "25 g", s: "ratt", f: "16 dygn är två halveringstider: 100 g → 50 g → 25 g." },
                 { t: "50 g", s: "fel", f: "50 g är kvar efter 8 dygn." },
                 { t: "0 g", s: "fel", f: "efter två halveringstider är en fjärdedel kvar, inte noll." },
                 { t: "12,5 g", s: "fel", f: "12,5 g är kvar efter 24 dygn, alltså tre halveringstider." } ] },
        { fraga: "Hur stor andel av de radioaktiva kärnorna har sönderfallit efter två halveringstider?",
          alt: [ { t: "75 %", s: "ratt", f: "25 % är kvar, alltså har 75 % sönderfallit." },
                 { t: "100 %", s: "fel", f: "efter två halveringstider är en fjärdedel kvar." },
                 { t: "50 %", s: "fel", f: "50 % har sönderfallit efter en halveringstid." },
                 { t: "25 %", s: "fel", f: "25 % är det som är kvar – inte det som har sönderfallit." } ] },
        { fraga: "Ett ämne har halveringstiden 30 år. Hur lång tid tar det tills bara 12,5 % är kvar?",
          alt: [ { t: "90 år", s: "ratt", f: "100 % → 50 % → 25 % → 12,5 % är tre halveringstider: 3 · 30 = 90 år." },
                 { t: "60 år", s: "fel", f: "efter 60 år är 25 % kvar." },
                 { t: "120 år", s: "fel", f: "efter 120 år är 6,25 % kvar." },
                 { t: "30 år", s: "fel", f: "efter 30 år är 50 % kvar." } ] }
      ] },

    { id: "rad-halv-sf", kapitel: "radioaktivitet", avsnitt: ["halvering"], titel: "Halveringstid – sant eller falskt",
      typ: "santfalskt", nivaerPerArskurs: { 7: [3], 8: [1, 2], 9: [1] },
      varianter: [
        { pst: [["Efter en halveringstid har hälften av kärnorna sönderfallit.", true], ["Efter två halveringstider har alla kärnor sönderfallit.", false],
                ["Man kan räkna ut exakt när en enskild kärna sönderfaller.", false], ["Olika ämnen har olika halveringstid.", true],
                ["Efter tre halveringstider är 12,5 % kvar.", true]] }
      ] },

    /* ---------- Kol-14-metoden ---------- */

    { id: "rad-kol14-text", kapitel: "radioaktivitet", avsnitt: ["kol14"], titel: "Kol-14-metoden – fyll i",
      typ: "lucktext", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] }, rullista: [1],
      ordlista: ["kol-14", "kol-12", "kväve-14", "dör", "lever", "5 730 år", "30 år", "kosmisk strålning"],
      varianter: [
        { text: "Kol-14 bildas i atmosfären när [kosmisk strålning|kosmiska strålningen] ger neutroner som träffar [kväve-14|kväve]." },
        { text: "Allt som [lever] har samma andel kol-14 som luften. När organismen [dör] tas inget nytt kol upp och mängden [kol-14] minskar." },
        { text: "Halveringstiden för kol-14 är cirka [5 730 år|5730 år|5730|5 730]. Efter den tiden är hälften av kol-14 kvar." }
      ] },

    { id: "rad-kol14-flerval", kapitel: "radioaktivitet", avsnitt: ["kol14"], titel: "Kol-14-metoden – välj rätt",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [1,2], 9: [1] },
      varianter: [
        { fraga: "Varför minskar mängden kol-14 i ett träd efter att det har dött?",
          alt: [ { t: "Trädet tar inte upp nytt kol, och kol-14 sönderfaller", s: "ratt", f: "när trädet lever ersätts kol-14 hela tiden. När det dör sönderfaller kol-14 utan att nytt kommer till." },
                 { t: "Kol-14 avdunstar ur träet", s: "fel", f: "kol-14 försvinner för att kärnorna sönderfaller, inte för att de avdunstar." },
                 { t: "Trädet gör om kol-14 till syre", s: "fel", f: "kol-14 sönderfaller av sig självt. Det har inget med syre att göra." },
                 { t: "Kol-14 blir till kol-12", s: "fel", f: "kol-14 sönderfaller till kväve-14 genom betasönderfall." } ] },
        { fraga: "Ett träföremål har hälften så mycket kol-14 som ett levande träd. Hur gammalt är det ungefär?",
          alt: [ { t: "5 730 år", s: "ratt", f: "hälften kvar betyder att det har gått en halveringstid." },
                 { t: "11 460 år", s: "fel", f: "efter 11 460 år (två halveringstider) är en fjärdedel kvar." },
                 { t: "2 865 år", s: "fel", f: "det är en halv halveringstid – då är mer än hälften kvar." },
                 { t: "50 000 år", s: "fel", f: "efter 50 000 år finns nästan inget kol-14 kvar." } ] },
        { fraga: "Vilket fynd kan man åldersbestämma med kol-14-metoden?",
          alt: [ { t: "Ett ben från ett djur som levde för 3 000 år sedan", s: "ratt", f: "benet har varit levande och är yngre än cirka 50 000 år." },
                 { t: "En sten som är 1 miljon år gammal", s: "fel", f: "stenen har aldrig levt, och 1 miljon år är för gammalt för metoden." },
                 { t: "Ett dinosarieben som är 70 miljoner år", s: "fel", f: "efter cirka 50 000 år finns för lite kol-14 kvar att mäta." },
                 { t: "En plastleksak", s: "fel", f: "plast har inte varit levande på samma sätt och tar inte upp kol-14 från luften." } ] }
      ] },

    /* ---------- Hela kapitlet ---------- */

    { id: "rad-sf-blandat", kapitel: "radioaktivitet", titel: "Radioaktivitet – sant eller falskt", arskurs: [8, 9],
      typ: "santfalskt", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] },
      varianter: [
        { pst: [["En dosimeter mäter stråldos i sievert.", true], ["Aktivitet är antalet sönderfall per sekund.", true],
                ["Kol-14-metoden fungerar på stenar.", false], ["Halveringstiden för kol-14 är cirka 5 730 år.", true],
                ["En stabil kärna sänder ut gammastrålning.", false]] },
        { pst: [["En GM-mätare klickar vid varje sönderfall.", true], ["Becquerel är enheten för stråldos.", false],
                ["Allt som lever har samma andel kol-14 som luften.", true], ["Efter två halveringstider är hälften kvar.", false],
                ["En instabil kärna kallas också radioaktiv.", true]] }
      ] }
]);
