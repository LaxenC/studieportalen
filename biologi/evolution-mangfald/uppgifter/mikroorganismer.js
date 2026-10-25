/* =====================================================================
   UPPGIFTER – Mikroorganismer
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
     id : unikt namn · kapitel : kapitlets id · avsnitt : avsnitt i texten
     nivaer : nivå [0]–[3] · nivaerPerArskurs : annan nivå per årskurs
     rullista : nivåer där eleven väljer i en rullista
   Avsnitt: cell, vad, bakterier, virus, svampar, mikrobiom, symbios
   ===================================================================== */
Portal.uppgifter([

    { id: "cell-begrepp-para", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Celler – para ihop begrepp",
      typ: "para", nivaer: [1],
      varianter: [
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Cell", "Den minsta delen som kan leva själv"], ["Encellig", "Består av en enda cell"],
                ["Flercellig", "Består av många celler"], ["Cellkärna", "Del i cellen där arvsmassan finns."]] }
      ] },

    { id: "cell-flerval", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Celler – välj rätt",
      typ: "flerval", nivaer: [1],
      varianter: [
        { fraga: "Ordet mikroorganism består av mikro + organism. Vad betyder det?",
          alt: [ { t: "En mycket liten levande varelse", s: "ratt", f: "mikro = mycket liten, organism = något som lever." },
                 { t: "En liten del av en cell", s: "fel", f: "en organism är något som lever – mikro betyder mycket liten." },
                 { t: "Ett litet mikroskop", s: "fel", f: "mikroskopet behövs för att se dem – ordet betyder mycket liten levande varelse." },
                 { t: "Något som orsakar sjukdom", s: "fel", f: "det kallas patogen – de flesta mikroorganismer är ofarliga." } ] },
        { fraga: "Vilka tre saker klarar en cell på egen hand?",
          alt: [ { t: "Ta upp näring, växa och föröka sig", s: "ratt", f: "det är därför en cell kan leva själv." },
                 { t: "Tänka, röra sig och sova", s: "fel", f: "en cell tar upp näring, växer och förökar sig." },
                 { t: "Göra fotosyntes, simma och äta", s: "fel", f: "bara vissa celler gör fotosyntes – alla celler tar upp näring, växer och förökar sig." },
                 { t: "Bilda virus, växa och dö", s: "fel", f: "en cell tar upp näring, växer och förökar sig." } ] },
        { fraga: "Vad betyder det att en organism är encellig?",
          alt: [ { t: "Den består av en enda cell", s: "ratt", f: "en = en cell, till exempel en bakterie." },
                 { t: "Den består av många celler", s: "fel", f: "det kallas flercellig." },
                 { t: "Den har en cellkärna", s: "fel", f: "cellkärnan är en del i cellen – det säger inget om antalet celler." },
                 { t: "Den består inte av celler", s: "fel", f: "det gäller virus." } ] },
        { fraga: "Vilken av dessa är flercellig?",
          alt: [ { t: "En skogssvamp", s: "ratt", f: "skogssvampar består av många celler." },
                 { t: "En bakterie", s: "fel", f: "bakterier är encelliga." },
                 { t: "En amöba", s: "fel", f: "amöbor är encelliga protozoer." },
                 { t: "En jästsvamp", s: "fel", f: "jäst är en encellig svamp." } ] },
        { fraga: "Vad finns i cellkärnan?",
          alt: [ { t: "Arvsmassan (DNA)", s: "ratt", f: "cellkärnan innehåller cellens arvsmassa – dess ritning." },
                 { t: "Syre", s: "fel", f: "cellkärnan innehåller arvsmassan." },
                 { t: "Mat till cellen", s: "fel", f: "cellkärnan innehåller arvsmassan." },
                 { t: "Virus", s: "fel", f: "cellkärnan innehåller cellens egen arvsmassa." } ] }
      ] },

    { id: "cell-sortera", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Encellig eller flercellig? – sortera",
      typ: "sortera", nivaer: [1, 2],
      varianter: [
        { grupper: ["Encellig", "Flercellig"],
          saker: [["Bakterie", 0], ["Amöba", 0], ["Jästsvamp", 0], ["Människa", 1], ["Skogssvamp", 1], ["Träd", 1]] }
      ] },

    { id: "mio-grupper-para", kapitel: "mikroorganismer", avsnitt: ["vad"], titel: "Mikroorganismernas grupper – para ihop",
      typ: "para", nivaer: [1],
      varianter: [
        { rubrik: "Para ihop mikroben med rätt beskrivning.",
          par: [["Svampar", "Varken växter eller djur – till exempel jäst och mögel"], ["Protozoer", "Encelliga organismer med cellkärna"],
                ["Alger", "Gör fotosyntes och lever oftast i vatten"], ["Arkéer", "Liknar bakterier och lever ofta i extrema miljöer"]] }
      ] },

    { id: "mik-protozoer-text", kapitel: "mikroorganismer", avsnitt: ["vad"], titel: "Protozoer, alger och arkéer – fyll i",
      typ: "lucktext", nivaer: [1], rullista: [1],
      ordlista: ["cellkärna", "fotosyntes", "malaria", "förkylning", "parasit", "värden", "extrema miljöer", "skogen"],
      varianter: [
        { text: "Protozoer är encelliga, men till skillnad från bakterier har de en [cellkärna]. En känd sjukdom som orsakas av en protozo är [malaria]." },
        { text: "En [parasit] lever på eller i en annan organism, som kallas [värden|värd]." },
        { text: "Alger gör [fotosyntes]. Arkéer lever ofta i [extrema miljöer|extrem miljö]." }
      ] },

    { id: "mik-eukaryot", kapitel: "mikroorganismer", avsnitt: ["cell", "vad"], titel: "Eukaryoter – välj rätt",
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

    { id: "smi-mikrobiom-text", kapitel: "mikroorganismer", avsnitt: ["mikrobiom", "symbios"], titel: "Mikrobiom och symbios – fyll i",
      typ: "lucktext", nivaer: [1], rullista: [0],
      ordlista: ["mikrobiomet", "immunförsvaret", "symbios", "pandemi", "matsmältningen", "andningen"],
      varianter: [
        { text: "Alla mikrober som lever i och på kroppen kallas tillsammans [mikrobiomet|mikrobiom]." },
        { text: "Tarmbakterierna hjälper oss bland annat med [matsmältningen]." },
        { text: "Ett nära och långvarigt samband mellan två olika arter kallas [symbios]." }
      ] },

    { id: "smi-symbios-para", kapitel: "mikroorganismer", avsnitt: ["symbios"], titel: "Typer av symbios – para ihop",
      typ: "para", nivaerPerArskurs: { 7: [1], 8: [1], 9: [1] },
      varianter: [
        { rubrik: "Para ihop typen av symbios med vad som händer.",
          par: [["Mutualism", "Båda arterna gynnas"], ["Kommensalism", "Den ena gynnas, den andra påverkas inte"], ["Parasitism", "Den ena gynnas, den andra skadas"]] },
        { rubrik: "Para ihop exemplet med rätt typ av symbios.",
          par: [["Tarmbakterier som får mat och hjälper oss smälta maten", "Mutualism"], ["Malariaparasiten i människans blod", "Parasitism"],
                ["Hudbakterier som lever på oss utan att påverka oss", "Kommensalism"]] }
      ] },

    { id: "mio-sortera-karna", kapitel: "mikroorganismer", avsnitt: ["cell", "vad"], titel: "Med eller utan cellkärna? – sortera",
      typ: "sortera", nivaer: [1],
      varianter: [
        { grupper: ["Utan cellkärna", "Med cellkärna", "Inga celler"],
          saker: [["Bakterier", 0], ["Arkéer", 0], ["Protozoer", 1], ["Alger", 1], ["Svampar", 1], ["Virus", 2]] }
      ] },

    { id: "mio-flerval", kapitel: "mikroorganismer", avsnitt: ["vad", "bakterier"], titel: "Mikroorganismer – välj rätt",
      typ: "flerval", nivaer: [1],
      varianter: [
        { fraga: "Vilka organismer var de första på jorden?",
          alt: [ { t: "Bakterier", s: "ratt", f: "bakterier fanns redan för över 3 000 miljoner år sedan." },
                 { t: "Svampar", s: "fel", f: "svampar har celler med cellkärna och kom senare." },
                 { t: "Alger", s: "fel", f: "alger har cellkärna och kom senare än bakterierna." },
                 { t: "Virus", s: "fel", f: "virus behöver värdceller – de kan inte ha funnits före cellerna." } ] },
        { fraga: "Var lever många arkéer?",
          alt: [ { t: "I extrema miljöer, till exempel heta källor och mycket salt vatten", s: "ratt", f: "arkéer är livets hårdingar." },
                 { t: "Bara i människans tarm", s: "fel", f: "arkéer finns i många miljöer, särskilt extrema." },
                 { t: "Bara i skogen", s: "fel", f: "arkéer är kända för att klara extrema miljöer." },
                 { t: "I rymden", s: "fel", f: "inget liv är känt från rymden – men arkéer klarar extrema miljöer på jorden." } ] }
      ] },

    { id: "mio-sf", kapitel: "mikroorganismer", titel: "Mikroorganismer – sant eller falskt",
      typ: "santfalskt", nivaer: [1, 2],
      varianter: [
        { pst: [["Bakterier och arkéer saknar cellkärna.", true], ["Alger gör fotosyntes.", true], ["Arkéer orsakar många sjukdomar.", false],
                ["Virus består av celler.", false], ["Vid mutualism gynnas båda arterna.", true]] }
      ] },

    { id: "mio-virus", kapitel: "mikroorganismer", avsnitt: ["virus"], titel: "Virus – välj rätt",
      typ: "flerval", nivaer: [1],
      varianter: [
        { fraga: "Vad består ett virus av?",
          alt: [ { t: "Arvsmassa i ett hölje av protein", s: "ratt", f: "virus har ingen cell – bara arvsmassa i ett proteinhölje." },
                 { t: "En cell med cellkärna", s: "fel", f: "virus består inte av celler alls." },
                 { t: "En cell utan cellkärna", s: "fel", f: "det är en bakterie – virus har ingen cell." },
                 { t: "Många celler", s: "fel", f: "virus består inte av celler." } ] },
        { fraga: "Hur förökar sig ett virus?",
          alt: [ { t: "Det tar sig in i en värdcell som får tillverka nya virus", s: "ratt", f: "virus kan bara föröka sig inne i en annan cell." },
                 { t: "Det delar sig, precis som en bakterie", s: "fel", f: "virus kan inte dela sig själva – de behöver en värdcell." },
                 { t: "Det bildar sporer", s: "fel", f: "virus behöver en värdcell för att föröka sig." },
                 { t: "Det gör fotosyntes", s: "fel", f: "virus har ingen ämnesomsättning alls." } ] }
      ] },

    { id: "mio-svampar", kapitel: "mikroorganismer", avsnitt: ["svampar"], titel: "Svampar – välj rätt",
      typ: "flerval", nivaer: [1],
      varianter: [
        { fraga: "Vilken viktig uppgift har svampar i naturen?",
          alt: [ { t: "De bryter ner döda växter och djur", s: "ratt", f: "svampar är nedbrytare – näringen kan sedan användas igen." },
                 { t: "De gör fotosyntes", s: "fel", f: "svampar gör inte fotosyntes – de är varken växter eller djur." },
                 { t: "De orsakar alltid sjukdomar", s: "fel", f: "de flesta svampar är ofarliga eller nyttiga." },
                 { t: "De tillverkar syre", s: "fel", f: "syre bildas vid fotosyntes, till exempel av växter och alger." } ] },
        { fraga: "Vad är jäst?",
          alt: [ { t: "En encellig svamp", s: "ratt", f: "jästsvampar används till exempel när man bakar bröd." },
                 { t: "En bakterie", s: "fel", f: "jäst är en svamp, inte en bakterie." },
                 { t: "Ett virus", s: "fel", f: "jäst är en levande svamp." },
                 { t: "En alg", s: "fel", f: "jäst gör inte fotosyntes – det är en svamp." } ] }
      ] }
]);
