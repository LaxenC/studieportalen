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

    /* ---------- Radioaktivitet upptäcks ---------- */

    { id: "rad-historia-tid", kapitel: "radioaktivitet", avsnitt: ["historia"], titel: "Radioaktivitet upptäcks – tidslinje",
      typ: "dratabell", nivaerPerArskurs: { 7: [1,2], 8: [1], 9: [1] },
      varianter: [
        { rubrik: "Dra rätt händelse till rätt år på tidslinjen.", tidslinje: true,
          rubriker: ["År", "Händelse"],
          rader: [["1896", "Becquerel upptäcker strålning från uran"], ["1898", "Makarna Curie ger strålningen namnet radioaktivitet"], ["1903", "Nobelpris till Becquerel och makarna Curie"]] }
      ] },

    { id: "rad-historia-flerval", kapitel: "radioaktivitet", avsnitt: ["historia"], titel: "Radioaktivitetens historia – välj rätt",
      typ: "flerval", nivaerPerArskurs: { 7:[1,2], 8: [1], 9: [1] },
      varianter: [
        { fraga: "Vem gav strålningen namnet radioaktivitet?",
          alt: [ { t: "Marie och Pierre Curie", s: "ratt", f: "de upptäckte polonium och radium 1898 och gav strålningen ett namn." },
                 { t: "Henri Becquerel", s: "fel", f: "Becquerel upptäckte strålningen 1896, men kunde inte förklara den." },
                 { t: "Albert Einstein", s: "fel", f: "Einstein är känd för E = mc², inte för att ha namngett radioaktiviteten." },
                 { t: "Otto Hahn", s: "fel", f: "Otto Hahn är känd för fissionen, flera decennier senare." } ] },
        { fraga: "Varför användes radioaktiva ämnen i tandkräm och dricksvatten i början av 1900-talet?",
          alt: [ { t: "Man visste inte att strålningen var farlig", s: "ratt", f: "radium lyste och ansågs nyttigt. Först senare förstod man att strålningen skadar celler." },
                 { t: "Det var förbjudet att använda annat", s: "fel", f: "det fanns inga sådana regler – man trodde att strålningen var hälsosam." },
                 { t: "Strålningen gör tänderna starkare", s: "fel", f: "joniserande strålning skadar celler. Den gör inte tänderna starkare." },
                 { t: "Det var för att döda bakterier i vattnet", s: "fel", f: "man trodde att strålningen gav energi och hälsa – inte att den skulle rena vattnet." } ] }
      ] },

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

    { id: "rad-skydd-flerval", kapitel: "radioaktivitet", avsnitt: ["mata"], titel: "Aktivitet och stråldos – vad händer?",
      typ: "flerval", nivaerPerArskurs: { 8: [1, 2], 9: [1] },
      varianter: [
        { fraga: "En strålkälla har aktiviteten 60 Bq. En person går längre bort från källan. Vad händer med aktiviteten?",
          alt: [ { t: "Den är densamma – 60 Bq", s: "ratt", f: "aktiviteten är hur många sönderfall som sker i källan per sekund. Den ändras inte av var personen står." },
                 { t: "Den minskar", s: "fel", f: "det är stråldosen som minskar. Källan sönderfaller lika mycket oavsett var personen står." },
                 { t: "Den ökar", s: "fel", f: "aktiviteten beror bara på källan, inte på personen." },
                 { t: "Den blir noll", s: "fel", f: "källan fortsätter sönderfalla – 60 sönderfall per sekund." } ] },
        { fraga: "En person går längre bort från en strålkälla. Vad händer med stråldosen personen får?",
          alt: [ { t: "Den minskar", s: "ratt", f: "strålningen sprids ut åt alla håll, så färre partiklar träffar personen." },
                 { t: "Den är densamma", s: "fel", f: "det är aktiviteten som är densamma. Stråldosen beror på avståndet." },
                 { t: "Den ökar", s: "fel", f: "längre bort träffar färre partiklar personen – dosen minskar." },
                 { t: "Den blir noll direkt", s: "fel", f: "dosen minskar, men blir inte noll bara för att man tar ett steg bakåt." } ] },
        { fraga: "En person står 1 m från en strålkälla i 4 sekunder och får 0,33 mSv. Hur stor blir dosen om personen står kvar i 8 sekunder?",
          alt: [ { t: "0,66 mSv", s: "ratt", f: "dubbelt så lång tid ger dubbelt så stor dos." },
                 { t: "0,33 mSv", s: "fel", f: "ju längre tid, desto fler partiklar hinner träffa personen." },
                 { t: "0,17 mSv", s: "fel", f: "dosen blir större, inte mindre, när tiden ökar." },
                 { t: "1,32 mSv", s: "fel", f: "dubbla tiden ger dubbla dosen – inte fyra gånger så mycket." } ] }
      ] },

    { id: "rad-skydd-sortera", kapitel: "radioaktivitet", avsnitt: ["mata"], titel: "Vad ändras när man går längre bort? – sortera",
      typ: "sortera", nivaerPerArskurs: { 8: [2], 9: [1, 2] },
      varianter: [
        { grupper: ["Ändras när personen går längre bort", "Ändras inte"],
          saker: [["Stråldosen", 0], ["Vad dosimetern visar", 0], ["Antal partiklar som träffar personen", 0],
                  ["Aktiviteten", 1], ["Antal sönderfall per sekund i källan", 1], ["Halveringstiden", 1]] }
      ] },

    { id: "rad-skydd-text", kapitel: "radioaktivitet", avsnitt: ["mata"], titel: "Skydda sig mot strålning – fyll i",
      typ: "lucktext", nivaerPerArskurs: { 8: [1], 9: [0, 1] }, rullista: [0, 1],
      ordlista: ["avstånd", "tid", "skärmning", "aktiviteten", "stråldosen", "bly", "papper"],
      varianter: [
        { text: "Man kan skydda sig mot strålning med [*avstånd/tid/skärmning], [*avstånd/tid/skärmning] och [*avstånd/tid/skärmning].",
          facit: "Man kan skydda sig mot strålning med <b>avstånd</b>, <b>tid</b> och <b>skärmning</b>." },
        { text: "När man går längre bort från en strålkälla minskar [stråldosen|dosen], men [aktiviteten] är densamma." },
        { text: "En vägg av [bly] stoppar det mesta av strålningen. Det kallas skärmning." }
      ] },

    /* ---------- Bakgrundsstrålning ---------- */

    { id: "rad-bakgrund-flerval", kapitel: "radioaktivitet", avsnitt: ["bakgrund"], titel: "Bakgrundsstrålning – välj rätt",
      typ: "flerval", nivaerPerArskurs: { 8: [1, 2], 9: [0, 1] },
      varianter: [
        { fraga: "Vad ger den största delen av stråldosen för de flesta i Sverige?",
          alt: [ { t: "Radon i inomhusluften", s: "ratt", f: "radon ger cirka 4 mSv per år vid den svenska medelhalten – mer än alla andra källor tillsammans." },
                 { t: "Kärnkraftverk", s: "fel", f: "kärnkraften ger en mycket liten del av vår stråldos." },
                 { t: "Tandröntgen", s: "fel", f: "en tandröntgen ger bara 0,005 mSv." },
                 { t: "Strålning från rymden", s: "fel", f: "kosmisk strålning ger cirka 0,3 mSv per år – mycket mindre än radon." } ] },
        { fraga: "Vad är radon?",
          alt: [ { t: "En radioaktiv gas som bildas när radium sönderfaller", s: "ratt", f: "radon syns inte, luktar inte och kan finnas i inomhusluften." },
                 { t: "En sorts röntgenstrålning", s: "fel", f: "radon är en gas – ett ämne – inte en sorts strålning." },
                 { t: "Ett mätinstrument för strålning", s: "fel", f: "mätinstrument är till exempel dosimeter och GM-mätare." },
                 { t: "Strålning från rymden", s: "fel", f: "strålning från rymden kallas kosmisk strålning." } ] },
        { fraga: "Vad är bakgrundsstrålning?",
          alt: [ { t: "Naturlig strålning som finns runt omkring oss hela tiden", s: "ratt", f: "den kommer från kroppen, marken, rymden och radon." },
                 { t: "Strålning som bara finns vid kärnkraftverk", s: "fel", f: "bakgrundsstrålning finns överallt, hela tiden." },
                 { t: "Strålning från röntgen", s: "fel", f: "röntgen kommer från sjukvården. Bakgrundsstrålningen är naturlig." },
                 { t: "Strålning som inte är joniserande", s: "fel", f: "bakgrundsstrålningen är joniserande, men dosen är oftast liten." } ] }
      ] },

    { id: "rad-bakgrund-sortera", kapitel: "radioaktivitet", avsnitt: ["bakgrund"], titel: "Naturlig eller från människan? – sortera",
      typ: "sortera", nivaerPerArskurs: { 8: [1, 2], 9: [1] },
      varianter: [
        { grupper: ["Naturlig bakgrundsstrålning", "Från människans verksamhet"],
          saker: [["Radon från marken", 0], ["Kosmisk strålning", 0], ["Kalium-40 i kroppen", 0], ["Uran i berggrunden", 0],
                  ["Tandröntgen", 1], ["Datortomografi", 1], ["Kärnkraftverk", 1]] }
      ] },

    { id: "rad-bakgrund-jamfor", kapitel: "radioaktivitet", avsnitt: ["bakgrund"], titel: "Jämför stråldoser",
      typ: "flerval", nivaerPerArskurs: { 8: [2, 3], 9: [2] },
      varianter: [
        { fraga: "En tandröntgen ger 0,005 mSv och en flygresa över Atlanten (tur och retur) ger 0,05 mSv. Hur många gånger större är dosen från flygresan?",
          alt: [ { t: "10 gånger", s: "ratt", f: "0,05 / 0,005 = 10." },
                 { t: "2 gånger", s: "fel", f: "räkna 0,05 / 0,005." },
                 { t: "100 gånger", s: "fel", f: "0,05 / 0,005 = 10, inte 100." },
                 { t: "Lika stor", s: "fel", f: "0,05 är tio gånger större än 0,005." } ] },
        { fraga: "Ungefär hur stor del av den totala årsdosen (cirka 5,3 mSv) kommer från radon (4 mSv)?",
          alt: [ { t: "Ungefär tre fjärdedelar", s: "ratt", f: "4 / 5,3 ≈ 0,75 = 75 %." },
                 { t: "Ungefär hälften", s: "fel", f: "4 av 5,3 är mer än hälften – cirka 75 %." },
                 { t: "Ungefär en fjärdedel", s: "fel", f: "radon är den största delen – cirka 75 %." },
                 { t: "Nästan allt – 99 %", s: "fel", f: "de andra källorna ger tillsammans cirka 1,3 mSv, så radon är cirka 75 %." } ] }
      ] },

    { id: "rad-radon-text", kapitel: "radioaktivitet", avsnitt: ["bakgrund"], titel: "Radon – fyll i",
      typ: "lucktext", nivaerPerArskurs: { 8: [1], 9: [0, 1] }, rullista: [0, 1],
      ordlista: ["radium", "uran", "gas", "vätska", "marken", "byggnadsmaterialet", "vattnet", "luften", "lungcancer", "ventilation"],
      varianter: [
        { text: "Radon är en radioaktiv [gas] som bildas när [radium] sönderfaller." },
        { text: "Radon kan komma in i hus från [*marken/byggnadsmaterialet/vattnet], [*marken/byggnadsmaterialet/vattnet] och [*marken/byggnadsmaterialet/vattnet].",
          facit: "Radon kan komma in i hus från <b>marken</b>, <b>byggnadsmaterialet</b> och <b>vattnet</b>." },
        { text: "Radon som andas in kan orsaka [lungcancer]. Radonhalten kan sänkas med bättre [ventilation]." }
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
