/* =====================================================================
   UPPGIFTER – Kärnenergi
   ---------------------------------------------------------------------
   En uppgift per objekt. Mallar för varje uppgiftstyp finns i mallar.md.

     id        : unikt namn – ändras aldrig
     kapitel   : kapitlets id
     avsnitt   : (valfritt) lista med avsnitt i texten, t.ex. ["fission"]
     titel     : rubriken eleven ser
     typ       : uppgiftstyp (se mallar.md)
     nivaerPerArskurs : nivå per årskurs, t.ex. { 7: [2], 8: [1], 9: [0, 1] }
     arskurs   : (valfritt) bara för vissa årskurser, t.ex. [8, 9]
     rullista  : (valfritt) nivåer där eleven väljer i en rullista
     varianter : lista – en slumpas varje gång

   Avsnitt i texten: fission, kedja, karnkraft, fusion, emc2
   ===================================================================== */
Portal.uppgifter([

    /* ---------- Fission ---------- */

    { id: "ke-fission-text", kapitel: "karnenergi", avsnitt: ["fission"], titel: "Fission – fyll i",
      typ: "lucktext", nivaerPerArskurs: { 7: [3], 8: [1], 9: [1] }, rullista: [0, 1],
      ordlista: ["neutron", "proton", "elektron", "klyvs", "slås ihop", "energi", "lättare", "tyngre", "fission", "fusion"],
      varianter: [
        { text: "Vid [fission] klyvs en tung atomkärna i två [lättare] kärnor." },
        { text: "Fissionen startar när en [neutron] träffar urankärnan. Kärnan [klyvs] och det frigörs mycket [energi]." },
        { text: "Otto Hahn trodde att urankärnan skulle bli [tyngre] när den tog upp en neutron. I stället bildades [lättare] ämnen." }
      ] },

    { id: "ke-fission-hahn", kapitel: "karnenergi", avsnitt: ["fission"], titel: "Fission – vad hände?",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [1], 9: [1] },
      varianter: [
        { fraga: "Otto Hahn sköt neutroner mot uran och fick lättare ämnen. Hur förklarade Meitner och Frisch det?",
          alt: [ { t: "Urankärnan hade delats i två delar", s: "ratt", f: "kärnan klyvdes – det kallas fission." },
                 { t: "Urankärnan hade tagit upp neutronen", s: "fel", f: "då hade kärnan blivit tyngre, inte lättare." },
                 { t: "Elektronerna hade försvunnit", s: "fel", f: "elektronerna väger nästan ingenting och förklarar inte de lättare ämnena." },
                 { t: "Neutronen hade blivit en proton", s: "fel", f: "det händer vid betasönderfall, men förklarar inte att kärnan blev mycket lättare." } ] },
        { fraga: "Vad betyder ordet fission?",
          alt: [ { t: "Klyvning", s: "ratt", f: "vid fission klyvs en tung kärna i två lättare." },
                 { t: "Sammanslagning", s: "fel", f: "sammanslagning av kärnor kallas fusion." },
                 { t: "Strålning", s: "fel", f: "fission betyder klyvning." },
                 { t: "Sönderfall", s: "fel", f: "sönderfall är när en instabil kärna gör sig av med partiklar eller energi av sig själv." } ] }
      ] },

    /* ---------- Kedjereaktion ---------- */

    { id: "ke-kedja-text", kapitel: "karnenergi", avsnitt: ["kedja"], titel: "Kedjereaktion – fyll i",
      typ: "lucktext", nivaerPerArskurs: { 7: [3], 8: [1], 9: [1] }, rullista: [0, 1],
      ordlista: ["neutroner", "elektroner", "kedjereaktion", "kontrollerad", "okontrollerad", "atombomb", "kärnkraftverk"],
      varianter: [
        { text: "När en urankärna klyvs skickas det ut nya [neutroner|neutron] som kan klyva fler kärnor. Det kallas en [kedjereaktion]." },
        { text: "I en atombomb är kedjereaktionen [okontrollerad]. I ett kärnkraftverk är den [kontrollerad]." }
      ] },

    { id: "ke-kedja-rakna", kapitel: "karnenergi", avsnitt: ["kedja"], titel: "Kedjereaktion – hur många?",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [1,2], 9: [1, 2] },
      varianter: [
        { fraga: "Varje klyvning ger 2 neutroner som klyver 2 nya kärnor. Första generationen har 1 klyvning. Hur många klyvningar är det i 4:e generationen?",
          alt: [ { t: "8", s: "ratt", f: "antalet fördubblas: 1 → 2 → 4 → 8." },
                 { t: "4", s: "fel", f: "4 klyvningar är det i 3:e generationen." },
                 { t: "6", s: "fel", f: "antalet fördubblas varje generation – det ökar inte med 2." },
                 { t: "16", s: "fel", f: "16 klyvningar är det i 5:e generationen." } ] },
        { fraga: "Varför ökar antalet klyvningar så snabbt i en kedjereaktion?",
          alt: [ { t: "Varje klyvning ger flera neutroner som kan klyva nya kärnor", s: "ratt", f: "1 klyvning ger 2–3 neutroner, som ger 2–3 nya klyvningar, och så vidare." },
                 { t: "Urankärnorna blir varmare och smälter", s: "fel", f: "det är neutronerna från varje klyvning som startar nya klyvningar." },
                 { t: "Elektronerna slår sönder kärnorna", s: "fel", f: "det är neutroner, inte elektroner, som klyver urankärnorna." },
                 { t: "Kärnorna sönderfaller av sig själva", s: "fel", f: "i en kedjereaktion är det neutronerna som orsakar klyvningarna." } ] }
      ] },

    { id: "ke-bomb-kraft-sortera", kapitel: "karnenergi", avsnitt: ["kedja", "karnkraft"], titel: "Atombomb eller kärnkraftverk? – sortera",
      typ: "sortera", nivaerPerArskurs: { 7: [3], 8: [1], 9: [1] },
      varianter: [
        { grupper: ["Atombomb", "Kärnkraftverk"],
          saker: [["Okontrollerad kedjereaktion", 0], ["All energi frigörs på en gång", 0], ["Användes mot Hiroshima och Nagasaki", 0],
                  ["Kontrollerad kedjereaktion", 1], ["Har styrstavar", 1], ["Gör el", 1]] }
      ] },

    /* ---------- Kärnkraftverk ---------- */

    { id: "ke-delar-para", kapitel: "karnenergi", avsnitt: ["karnkraft"], titel: "Kärnkraftverkets delar – para ihop",
      typ: "para", nivaerPerArskurs: { 7: [3], 8: [1, 2], 9: [1,2] },
      varianter: [
        { rubrik: "Para ihop delen med dess uppgift.",
          par: [["Kärnbränsle", "Uran som klyvs och ger värme"], ["Styrstavar", "Fångar neutroner och styr kedjereaktionen"],
                ["Vatten", "Kyler bränslet och blir till ånga"], ["Turbin och generator", "Gör om ångans rörelse till el"],
                ["Kondensor", "Kyler ångan så att den blir vatten igen"]] },
        { rubrik: "Para ihop delen med vad som händer om den saknas.",
          par: [["Kärnbränsle", "Ingen fission och ingen värme"], ["Styrstavar", "Kedjereaktionen kan inte kontrolleras"],
                ["Turbin och generator", "Värmen kan inte göras om till el"], ["Kondensor", "Ångan blir inte vatten igen"]] }
      ] },

    { id: "ke-styrstavar", kapitel: "karnenergi", avsnitt: ["karnkraft"], titel: "Kärnkraftverk – välj rätt",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [1,2], 9: [1, 2] },
      varianter: [
        { fraga: "Reaktorn blir för varm. Vad gör man för att minska antalet klyvningar?",
          alt: [ { t: "Skjuter in styrstavarna längre", s: "ratt", f: "styrstavarna fångar fler neutroner, så färre kärnor klyvs." },
                 { t: "Drar ut styrstavarna", s: "fel", f: "då fångas färre neutroner och antalet klyvningar ökar." },
                 { t: "Tillsätter mer uran", s: "fel", f: "mer bränsle ger fler klyvningar, inte färre." },
                 { t: "Stänger av generatorn", s: "fel", f: "generatorn gör el – den påverkar inte kedjereaktionen." } ] },
        { fraga: "I vilken ordning omvandlas energin i ett kärnkraftverk?",
          alt: [ { t: "Kärnenergi → värme → rörelseenergi → elenergi", s: "ratt", f: "fissionen ger värme, ångan snurrar turbinen och generatorn gör el." },
                 { t: "Elenergi → värme → kärnenergi", s: "fel", f: "kärnkraftverket gör el – det börjar med kärnenergi." },
                 { t: "Kärnenergi → elenergi direkt", s: "fel", f: "energin går via värme och rörelse (ånga och turbin)." },
                 { t: "Värme → kärnenergi → elenergi", s: "fel", f: "det börjar med kärnenergin i uranet, som blir värme." } ] }
      ] },

    /* ---------- Fusion ---------- */

    { id: "ke-fusion-text", kapitel: "karnenergi", avsnitt: ["fusion"], titel: "Fusion – fyll i",
      typ: "lucktext", nivaerPerArskurs: { 7: [3], 8: [1], 9: [1] }, rullista: [0, 1],
      ordlista: ["fusion", "fission", "lätta", "tunga", "väte", "uran", "helium", "solen", "månen", "hög temperatur", "låg temperatur"],
      varianter: [
        { text: "Vid [fusion] slås två [lätta] atomkärnor ihop till en tyngre kärna." },
        { text: "I [solen] slås kärnor av [väte] ihop till [helium]." },
        { text: "Fusion kräver mycket [hög temperatur], eftersom kärnorna är positivt laddade och stöter bort varandra." }
      ] },

    { id: "ke-fission-fusion-sortera", kapitel: "karnenergi", avsnitt: ["fusion"], titel: "Fission eller fusion? – sortera",
      typ: "sortera", nivaerPerArskurs: { 7: [3], 8: [1], 9: [1] },
      varianter: [
        { grupper: ["Fission", "Fusion"],
          saker: [["En tung kärna klyvs", 0], ["Uran", 0], ["Används i kärnkraftverk", 0], ["Startar med en neutron", 0],
                  ["Lätta kärnor slås ihop", 1], ["Väte blir helium", 1], ["Sker i solen", 1], ["Kräver miljontals grader", 1]] }
      ] },

    { id: "ke-solen", kapitel: "karnenergi", avsnitt: ["fusion"], titel: "Fusion och solen – välj rätt",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [1, 2], 9: [1,2] },
      varianter: [
        { fraga: "Varifrån får solen sin energi?",
          alt: [ { t: "Fusion – vätekärnor slås ihop till helium", s: "ratt", f: "i solens kärna är det cirka 15 miljoner grader, så vätekärnor kan slås ihop." },
                 { t: "Fission – urankärnor klyvs", s: "fel", f: "solen består nästan bara av väte och helium. Energin kommer från fusion." },
                 { t: "Solen brinner som en brasa", s: "fel", f: "det är ingen förbränning – energin kommer från fusion i kärnan." },
                 { t: "Radioaktivt sönderfall", s: "fel", f: "solens energi kommer från att lätta kärnor slås ihop, alltså fusion." } ] },
        { fraga: "Varför är det så svårt att få till fusion på jorden?",
          alt: [ { t: "Det krävs miljontals grader för att kärnorna ska slås ihop", s: "ratt", f: "kärnorna är positiva och stöter bort varandra, så de måste röra sig extremt snabbt." },
                 { t: "Det finns inget väte på jorden", s: "fel", f: "det finns gott om väte, till exempel i vatten." },
                 { t: "Fusion ger för lite energi", s: "fel", f: "fusion ger mycket energi – problemet är att starta och hålla igång den." },
                 { t: "Det behövs uran", s: "fel", f: "fusion använder lätta kärnor som väte, inte uran." } ] }
      ] },

    /* ---------- E = mc² ---------- */

    { id: "ke-emc2", kapitel: "karnenergi", avsnitt: ["emc2"], titel: "Massa blir energi – välj rätt",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [2], 9: [2] },
      varianter: [
        { fraga: "Efter en fission väger delarna lite mindre än innan. Vart tog massan vägen?",
          alt: [ { t: "Den blev energi", s: "ratt", f: "enligt E = mc² kan massa omvandlas till energi." },
                 { t: "Den försvann helt", s: "fel", f: "massan försvann inte – den blev energi." },
                 { t: "Den blev elektroner", s: "fel", f: "massan har omvandlats till energi, enligt E = mc²." },
                 { t: "Man vägde fel", s: "fel", f: "skillnaden är verklig – den har blivit energi." } ] },
        { fraga: "Varför ger lite massa så mycket energi enligt E = mc²?",
          alt: [ { t: "Ljusets hastighet är enormt stor och tas i kvadrat", s: "ratt", f: "c² är ett gigantiskt tal, så även lite massa ger mycket energi." },
                 { t: "Massan är alltid mycket stor", s: "fel", f: "det räcker med lite massa – det är c² som gör energin stor." },
                 { t: "E betyder elektroner", s: "fel", f: "E står för energi." },
                 { t: "Energin kommer från elektronerna", s: "fel", f: "energin kommer från att massa i kärnorna omvandlas." } ] }
      ] },

    /* ---------- Hela kapitlet ---------- */

    { id: "ke-sf", kapitel: "karnenergi", titel: "Kärnenergi – sant eller falskt",
      typ: "santfalskt", nivaerPerArskurs: { 7: [3], 8: [1], 9: [1] },
      varianter: [
        { pst: [["Vid fission klyvs en tung kärna.", true], ["Vid fusion slås lätta kärnor ihop.", true],
                ["Solen får sin energi från fission.", false], ["Styrstavar fångar upp neutroner.", true],
                ["I ett kärnkraftverk är kedjereaktionen okontrollerad.", false]] },
        { pst: [["En kedjereaktion startar med en neutron.", true], ["Ett kärnkraftverk gör el direkt av uran utan värme.", false],
                ["Fusion kräver mycket hög temperatur.", true], ["Lise Meitner och Otto Frisch förklarade fissionen.", true],
                ["Det finns många fusionskraftverk som ger el i dag.", false]] }
      ] }
]);
