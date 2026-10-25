/* =====================================================================
   UPPGIFTER – Mikrober
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
     id : unikt namn · kapitel : kapitlets id · avsnitt : avsnitt i texten
     nivaer : nivå [0]–[3] · nivaerPerArskurs : annan nivå per årskurs
     rullista : nivåer där eleven väljer i en rullista
   Avsnitt: vad, bakterier, virus, svampar, protozoer, alger
   ===================================================================== */
Portal.uppgifter([

    { id: "mik-begrepp-para", kapitel: "mikrober", avsnitt: ["vad"], titel: "Mikrober – para ihop begrepp",
      typ: "para", nivaer: [0, 1],
      varianter: [
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Mikrober", "Levande organismer som är för små för att synas utan mikroskop"], ["Patogen", "En organism som orsakar sjukdom"],
                ["Bakterier", "Encelliga organismer utan cellkärna"], ["Virus", "Arvsmassa i ett proteinhölje som behöver en värdcell"]] },
        { rubrik: "Para ihop mikroben med rätt beskrivning.",
          par: [["Svampar", "Varken växter eller djur – till exempel jäst och mögel"], ["Protozoer", "Encelliga organismer med cellkärna"],
                ["Alger", "Gör fotosyntes och lever oftast i vatten"], ["Arkéer", "Liknar bakterier och lever ofta i extrema miljöer"]] }
      ] },

    { id: "mik-vad-flerval", kapitel: "mikrober", avsnitt: ["vad"], titel: "Vad är mikrober? – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad kallas en mikrob som orsakar sjukdom?",
          alt: [ { t: "Patogen", s: "ratt", f: "en patogen är en organism som orsakar sjukdom hos sin värd." },
                 { t: "Parasit", s: "delvis", f: "en parasit skadar sin värd, men ordet för alla sjukdomsframkallande mikrober är patogen." },
                 { t: "Antibiotika", s: "fel", f: "antibiotika är ett läkemedel mot bakterier." },
                 { t: "Mikrobiom", s: "fel", f: "mikrobiomet är alla mikrober i och på kroppen." } ] },
        { fraga: "Vilket påstående om mikrober stämmer?",
          alt: [ { t: "De flesta mikrober är ofarliga eller nyttiga", s: "ratt", f: "bara en liten del av alla mikrober orsakar sjukdom." },
                 { t: "Alla mikrober orsakar sjukdom", s: "fel", f: "de flesta är neutrala eller nyttiga." },
                 { t: "Mikrober går att se med blotta ögat", s: "fel", f: "mikrober är för små – man behöver mikroskop." },
                 { t: "Mikrober finns bara på smutsiga ställen", s: "fel", f: "mikrober finns nästan överallt – även i och på din kropp." } ] }
      ] },

    { id: "mik-sortera-typ", kapitel: "mikrober", avsnitt: ["bakterier", "virus", "svampar", "protozoer"], titel: "Bakterie, virus eller svamp? – sortera",
      typ: "sortera", nivaer: [1],
      varianter: [
        { grupper: ["Bakterier", "Virus", "Svampar"],
          saker: [["Har en cell utan cellkärna", 0], ["Kan bli resistenta mot antibiotika", 0], ["Kocker, baciller och spiriller", 0],
                  ["Arvsmassa i ett proteinhölje", 1], ["Måste ta över en värdcell för att föröka sig", 1], ["Orsakar förkylning", 1],
                  ["Jäst och mögel", 2], ["Viktiga nedbrytare i naturen", 2], ["Orsakar fotsvamp", 2]] }
      ] },

    { id: "mik-bakterier-text", kapitel: "mikrober", avsnitt: ["bakterier"], titel: "Bakterier – fyll i",
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["encelliga", "flercelliga", "cellkärna", "delning", "parning", "kocker", "baciller", "spiriller", "1 procent", "50 procent"],
      varianter: [
        { text: "Bakterier är [encelliga] och saknar [cellkärna]. De förökar sig genom [delning]." },
        { text: "Runda bakterier kallas [kocker], stavformade kallas [baciller] och spiralformade kallas [spiriller]." },
        { text: "De flesta bakterier är ofarliga – färre än [1 procent|1 %|1%|en procent] anses vara skadliga." }
      ] },

    { id: "mik-virus-flerval", kapitel: "mikrober", avsnitt: ["virus"], titel: "Virus – välj rätt",
      typ: "flerval", nivaer: [1, 2],
      varianter: [
        { fraga: "Varför räknas virus oftast inte som levande?",
          alt: [ { t: "De består inte av celler och kan inte föröka sig själva", s: "ratt", f: "virus behöver en värdcell för att föröka sig och har ingen egen ämnesomsättning." },
                 { t: "De är för små för att synas", s: "fel", f: "bakterier är också för små för att synas, men de räknas som levande." },
                 { t: "De orsakar sjukdomar", s: "fel", f: "även bakterier orsakar sjukdomar, och de är levande." },
                 { t: "De saknar arvsmassa", s: "fel", f: "virus har arvsmassa – DNA eller RNA." } ] },
        { fraga: "Hur förökar sig ett virus?",
          alt: [ { t: "Det tar sig in i en cell och får cellen att tillverka nya virus", s: "ratt", f: "cellen tvingas göra kopior av viruset, och när den spricker sprids de nya virusen." },
                 { t: "Det delar sig, precis som en bakterie", s: "fel", f: "virus kan inte dela sig själva – de behöver en värdcell." },
                 { t: "Det bildar sporer", s: "fel", f: "sporer bildas av vissa bakterier och svampar." },
                 { t: "Det äter upp cellen och växer", s: "fel", f: "virus växer inte – de tar över cellen och får den att tillverka nya virus." } ] },
        { fraga: "Du är förkyld. Varför hjälper det inte att ta antibiotika?",
          alt: [ { t: "Förkylning orsakas av virus, och antibiotika fungerar bara mot bakterier", s: "ratt", f: "antibiotika angriper bakteriers celler. Virus har inga egna celler." },
                 { t: "Förkylning är för lindrig för antibiotika", s: "fel", f: "det spelar ingen roll hur lindrig den är – antibiotika biter inte på virus." },
                 { t: "Antibiotika fungerar bara mot svamp", s: "fel", f: "antibiotika fungerar mot bakterier." },
                 { t: "Antibiotika gör förkylningen värre", s: "fel", f: "antibiotika har ingen effekt på virus alls." } ] }
      ] },

    { id: "mik-virus-ordning", kapitel: "mikrober", avsnitt: ["virus"], titel: "Så förökar sig ett virus – para ihop",
      typ: "para", nivaer: [1, 2],
      varianter: [
        { rubrik: "Para ihop steget med vad som händer.",
          par: [["Steg 1", "Viruset fäster på cellen"], ["Steg 2", "Virusets arvsmassa tar sig in i cellen"],
                ["Steg 3", "Cellen tillverkar nya virus"], ["Steg 4", "Cellen spricker och de nya virusen sprids"]] }
      ] },

    { id: "mik-protozoer-text", kapitel: "mikrober", avsnitt: ["protozoer", "alger"], titel: "Protozoer, alger och arkéer – fyll i",
      typ: "lucktext", nivaer: [1], rullista: [1],
      ordlista: ["cellkärna", "fotosyntes", "malaria", "förkylning", "parasit", "värden", "extrema miljöer", "skogen"],
      varianter: [
        { text: "Protozoer är encelliga, men till skillnad från bakterier har de en [cellkärna]. En känd sjukdom som orsakas av en protozo är [malaria]." },
        { text: "En [parasit] lever på eller i en annan organism, som kallas [värden|värd]." },
        { text: "Alger gör [fotosyntes]. Arkéer lever ofta i [extrema miljöer|extrem miljö]." }
      ] },

    { id: "mik-eukaryot", kapitel: "mikrober", avsnitt: ["protozoer"], titel: "Eukaryoter – välj rätt",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] },
      varianter: [
        { fraga: "Vad betyder det att protozoer är eukaryota?",
          alt: [ { t: "Deras celler har en cellkärna", s: "ratt", f: "eukaryoter har cellkärna och andra organeller – precis som våra celler." },
                 { t: "De saknar cellkärna", s: "fel", f: "det gäller bakterier och arkéer." },
                 { t: "De är flercelliga", s: "fel", f: "protozoer är encelliga – eukaryot handlar om cellkärnan." },
                 { t: "De är virus", s: "fel", f: "virus har inga celler alls." } ] },
        { fraga: "Vilken av grupperna saknar cellkärna och är alltså inte eukaryot?",
          alt: [ { t: "Bakterier", s: "ratt", f: "bakterier saknar cellkärna." },
                 { t: "Svampar", s: "fel", f: "svampar har celler med cellkärna." },
                 { t: "Protozoer", s: "fel", f: "protozoer har cellkärna." },
                 { t: "Alger", s: "fel", f: "alger har celler med cellkärna." } ] }
      ] },

    { id: "mik-sf", kapitel: "mikrober", titel: "Mikrober – sant eller falskt",
      typ: "santfalskt", nivaer: [1, 2],
      varianter: [
        { pst: [["Bakterier saknar cellkärna.", true], ["Alla bakterier är farliga.", false], ["Virus kan föröka sig utan värdcell.", false],
                ["Jäst är en svamp.", true], ["Arkéer orsakar många sjukdomar hos människor.", false]] },
        { pst: [["Malaria orsakas av en protozo.", true], ["Alger gör fotosyntes.", true], ["Virus är större än bakterier.", false],
                ["Svampar är en sorts växter.", false], ["Bakterier förökar sig genom delning.", true]] }
      ] }
]);
