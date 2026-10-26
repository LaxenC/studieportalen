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
      punkter: ["cell-minsta", "cell-encellig", "cell-arvsmassa"],
      typ: "para", nivaer: [1],
      varianter: [
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Cell", "Den minsta delen som kan leva själv"], ["Encellig", "Består av en enda cell"],
                ["Flercellig", "Består av många celler"], ["Cellkärna", "Del i cellen där arvsmassan finns."]] }
      ] },
   
   { id: "arvsmassa-flerval", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Arvsmassa(DNA) – välj rätt",
      punkter: { 0: ["cell-arvsmassa"]},
      typ: "flerval", nivaer: [1],
      varianter:[
        { fraga: "Vad är cellens arvsmassa (DNA)?",
          alt: [
            { t: "Cellens bränsle", s: "fel", f: "Cellen använder energi som bränsle till sina delar. Arvsmassan innehåller i stället recept för att skapa fler celler." },
            { t: "Recept för att skapa fler celler", s: "ratt", f: "Recept som cellen använder för att skapa fler celler." },
            { t: "Ämnen som cellen tar upp som näring", s: "fel", f: "Näring ger cellen ämnen som den behöver. Arvsmassan innehåller i stället recept för att skapa fler celler." },
            { t: "Cellens yttersta gräns", s: "fel", f: "Cellens yttersta gräns skiljer cellen från omgivningen. Arvsmassan innehåller i stället recept för att skapa fler celler." }]},
     {fraga: "Vad kan man likna cellens arvsmassa (DNA) vid?",
          alt: [
            { t: "Ett recept med instruktioner för att skapa fler celler", s: "ratt", f: "Arvsmassan kan liknas vid ett recept som innehåller instruktioner för att skapa fler celler." },
            { t: "En soptunna för cellen", s: "fel", f: "Arvsmassan samlar inte upp avfall. Den innehåller i stället recept för att skapa fler celler.." },
            { t: "En motor som driver cellen", s: "fel", f: "Arvsmassan är inte en motor. Den innehåller i stället recept för att skapa fler celler." },
            { t: "Ett skal som skyddar cellen", s: "fel", f: "Arvsmassan är inte cellens skal. innehåller i stället recept för att skapa fler celler." }]},
     {fraga: "Vad innehåller cellens arvsmassa (DNA)?",
          alt: [
            { t: "Bara vatten", s: "fel", f: "Vatten finns i celler, men arvsmassan innehåller instruktioner för att skapa fler celler." },
             { t: "Ett recept med instruktioner för att skapa fler celler", s: "ratt", f: "Arvsmassan kan liknas vid ett recept som innehåller instruktioner för att skapa fler celler." },
            { t: "Bara syre och socker", s: "fel", f: "Syre och socker kan användas i cellens ämnesomsättning. De är inte cellens arvsmassa." },
            { t: "Färdiga nya celler", s: "fel", f: "Arvsmassan innehåller instruktioner som används för att skapa nya celler, inte färdiga celler." }]},
     {fraga: "Vad använder cellen arvsmassan (DNA) till?",
          alt: [
            { t: "För att fånga upp syre från luften", s: "fel", f: "Arvsmassan fångar inte upp syre. Den innehåller instruktioner för att skapa fler celler." },
            { t: "För att få energi direkt från maten", s: "fel", f: "Cellen får användbar energi genom ämnesomsättningen. Arvsmassan innehåller instruktioner för att skapa fler celler." },
            { t: "För att få instruktioner när nya celler ska bildas", s: "ratt", f: "Arvsmassan innehåller instruktioner som cellen använder när den växer och delar sig." },
            { t: "För att göra cellen större utan näring", s: "fel", f: "Cellen behöver näring och energi för att växa. Arvsmassan innehåller instruktioner för att skapa fler celler." }]}] },
   
      { id: "organism-flerval", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Organism – välj rätt",
      punkter: { 0: ["cell-allt"]},
      typ: "flerval", nivaer: [1],
      varianter: [ 
         { fraga: "Vad består allt levande av?", 
          alt: [ { t: "Celler", s: "ratt", f: "allt som lever är uppbyggt av celler." },
                 { t: "Mikrober", s: "fel", f: "mikrober är levande, men allt levande är inte mikrober." },
                 { t: "Vatten", s: "fel", f: "levande organismer innehåller vatten, men de är uppbyggda av celler." },
                 { t: "Cellkärnor", s: "fel", f: "cellkärnan är bara en del av vissa celler." } ] },
        { fraga: "Vilket påstående beskriver bäst vad en organism är?",
          alt: [ { t: "En mycket liten levande varelse", s: "fel", f: "mikroorganism är något litet som lever, en organism behöver inte vara liten även vi männikor är organismer." },
                 { t: "En liten del av en cell", s: "fel", f: "en organism är uppbyggt av en eller flera celler" },
                 { t: "Något som lever och består av celler", s: "ratt", f: "en organism är något som lever och är uppbyggt av en eller flera celler." },
                 { t: "Något som har organ", s: "fel", f: "stora organismer som vi människor har organ men alla organismer har det inte, en organism är något som lever och är uppbyggt av en eller flera celler" } ] },
       ,
        {fraga: "Vilket av följande är en organism?",
          alt: [
                  { t: "En sten", s: "fel", f: "En sten lever inte och består inte av levande celler." },
                  { t: "En bakterie", s: "ratt", f: "En bakterie är en levande organism som består av en enda cell." },
                  { t: "Vatten", s: "fel", f: "Vatten är ett ämne, inte en levande organism." },
                  { t: "Syre", s: "fel", f: "Syre är ett ämne som levande celler kan använda, men det är ingen organism." }]},
      {fraga: "Vad har alla organismer gemensamt?",
          alt: [
            { t: "De består av en eller flera celler", s: "ratt", f: "Alla organismer är uppbyggda av celler, även om de kan ha väldigt olika antal celler." },
            { t: "De har en cellkärna", s: "fel", f: "Bakterier är organismer som saknar cellkärna." },
            { t: "De består av många celler", s: "fel", f: "En del organismer består av bara en enda cell." },
            { t: "De har ben eller rötter", s: "fel", f: "Organismer kan se mycket olika ut. Bakterier har varken ben eller rötter." }]},
     { fraga: "Vad är skillnaden mellan en organism och en cell?",
          alt: [
            { t: "En organism är alltid mindre än en cell", s: "fel", f: "En organism kan bestå av en enda cell eller av många celler." },
            { t: "En cell är alltid uppbyggd av många organismer", s: "fel", f: "Celler bygger upp organismer, inte tvärtom." },
            { t: "En organism är något levande som består av en eller flera celler", s: "ratt", f: "En cell är livets minsta levande enhet, medan en organism är en levande individ som består av celler." },
            { t: "Det finns ingen skillnad mellan orden", s: "fel", f: "En cell är en byggsten i livet. En organism är en levande individ som kan bestå av en eller flera celler." }]}
      ] }, 
   

    { id: "cell-flerval", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Celler – välj rätt",
      punkter: { 0: ["vad-mikrob"], 1: ["cell-encellig"], 2: ["cell-encellig"], 3: ["cell-arvsmassa"] },
      typ: "flerval", nivaer: [1],
      varianter: [
        { fraga: "Ordet mikroorganism består av mikro + organism. Vad betyder det?",
          alt: [ { t: "En mycket liten levande varelse", s: "ratt", f: "mikro = mycket liten, organism = något som lever." },
                 { t: "En liten del av en cell", s: "fel", f: "en organism är något som lever – mikro betyder mycket liten." },
                 { t: "Ett litet mikroskop", s: "fel", f: "mikroskopet behövs för att se dem – ordet betyder mycket liten levande varelse." },
                 { t: "Något som orsakar sjukdom", s: "fel", f: "det kallas patogen – de flesta mikroorganismer är ofarliga." } ] },
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

    { id: "cell-tre-saker", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Vad klarar en cell på egen hand?",
      typ: "valjflera", nivaer: [0, 1], punkter: ["cell-minsta"],
      varianter: [
        { fraga: "Vilka tre saker klarar en cell på egen hand?",
          ratt: ["Ta upp näring", "Växa", "Föröka sig"],
          fel: ["Tänka", "Sova", "Prata", "Bilda virus", "Andas med lungor", "Se med ögon"],
          forklaring: "det är därför en cell kan leva själv." }
      ] },

    { id: "cell-sortera", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Encellig eller flercellig? – sortera",
      punkter: ["cell-encellig", "svamp-en-fler"],
      typ: "sortera", nivaer: [1, 2],
      varianter: [
        { grupper: ["Encellig", "Flercellig"],
          saker: [["Bakterie", 0], ["Amöba", 0], ["Jästsvamp", 0], ["Människa", 1], ["Skogssvamp", 1], ["Träd", 1]] }
      ] },

    { id: "mik-begrepp-para", kapitel: "mikroorganismer", avsnitt: ["vad"], titel: "Mikrober – para ihop begrepp",
      punkter: ["vad-mikrob", "vad-patogen", "bakt-encellig", "virus-ingen-cell"],
      typ: "para", nivaer: [0, 1],
      varianter: [
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Mikrober", "Levande organismer som är för små för att synas utan mikroskop"], ["Patogen", "En organism som orsakar sjukdom"],
                ["Bakterier", "Encelliga organismer utan cellkärna"], ["Virus", "Arvsmassa i ett proteinhölje som behöver en värdcell"]] }
      ] },

    { id: "mik-vad-flerval", kapitel: "mikroorganismer", avsnitt: ["vad"], titel: "Vad är mikrober? – välj rätt",
      punkter: { 0: ["vad-patogen"], 1: ["vad-ofarliga"] },
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

    { id: "mio-grupper-skriv", kapitel: "mikroorganismer", avsnitt: ["vad"], titel: "De sex grupperna av mikrober – skriv",
      punkter: ["vad-grupper"],
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["bakterier", "virus", "svampar", "protozoer", "alger", "arkéer", "växter", "insekter", "maskar"],
      varianter: [
        { text: "Det finns sex grupper av mikrober: [*bakterier|bakterie], [*virus], [*svampar|svamp], [*protozoer|protozo|protozoa], [*alger|alg] och [*arkéer|arkeer|arké|arke]." }
      ] },

    { id: "mio-grupper-para", kapitel: "mikroorganismer", avsnitt: ["vad"], titel: "Mikroorganismernas grupper – para ihop",
      punkter: ["vad-grupper"],
      typ: "para", nivaer: [1],
      varianter: [
        { rubrik: "Para ihop gruppen med rätt beskrivning.",
          par: [["Bakterier", "En cell utan cellkärna – finns nästan överallt"], ["Virus", "Ingen cell – arvsmassa i ett hölje av protein"],
                ["Svampar", "Varken växter eller djur – till exempel jäst och mögel"], ["Protozoer", "En cell med cellkärna – liknar små djur som rör sig och äter"],
                ["Alger", "Gör fotosyntes och bildar syre"], ["Arkéer", "Liknar bakterier och lever ofta i extrema miljöer"]] }
      ] },

    { id: "mio-grupper-celler", kapitel: "mikroorganismer", avsnitt: ["vad", "cell"], titel: "Mikrobernas celler och arvsmassa – para ihop",
      punkter: ["vad-grupper", "cell-arvsmassa"],
      typ: "para", nivaer: [2],
      varianter: [
        { rubrik: "Välj hur många celler gruppen har och var arvsmassan finns.",
          rubriker: ["Grupp", "Celler", "Arvsmassan"],
          par: [["Bakterier", "En cell", "Ligger fritt i cellen"], ["Virus", "Ingen cell", "I ett hölje av protein"],
                ["Svampar", "En eller många", "I en cellkärna"], ["Protozoer", "En cell", "I en cellkärna"],
                ["Alger", "En eller många", "I en cellkärna"], ["Arkéer", "En cell", "Ligger fritt i cellen"]] }
      ] },

    { id: "mik-protozoer-text", kapitel: "mikroorganismer", avsnitt: ["vad"], titel: "Protozoer, alger och arkéer – fyll i",
      punkter: { 0: ["vad-grupper"], 2: ["vad-grupper"] },
      typ: "lucktext", nivaer: [1], rullista: [1],
      ordlista: ["cellkärna", "fotosyntes", "malaria", "förkylning", "parasit", "värden", "extrema miljöer", "skogen"],
      varianter: [
        { text: "Protozoer är encelliga, men till skillnad från bakterier har de en [cellkärna]. En känd sjukdom som orsakas av en protozo är [malaria]." },
        { text: "En [parasit] lever på eller i en annan organism, som kallas [värden|värd]." },
        { text: "Alger gör [fotosyntes]. Arkéer lever ofta i [extrema miljöer|extrem miljö]." }
      ] },

    { id: "mik-eukaryot", kapitel: "mikroorganismer", avsnitt: ["cell", "vad"], titel: "Eukaryoter – välj rätt",
      punkter: { 1: ["bakt-encellig"] },
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
      punkter: { 0: ["mbiom-vad"], 1: ["mbiom-hjalper"], 2: ["symb-vad"] },
      typ: "lucktext", nivaer: [1], rullista: [0],
      ordlista: ["mikrobiomet", "immunförsvaret", "symbios", "pandemi", "matsmältningen", "andningen"],
      varianter: [
        { text: "Alla mikrober som lever i och på kroppen kallas tillsammans [mikrobiomet|mikrobiom]." },
        { text: "Tarmbakterierna hjälper oss bland annat med [matsmältningen]." },
        { text: "Ett nära och långvarigt samband mellan två olika arter kallas [symbios]." }
      ] },

    { id: "smi-symbios-para", kapitel: "mikroorganismer", avsnitt: ["symbios"], titel: "Typer av symbios – para ihop",
      punkter: ["symb-typer"],
      typ: "para", nivaerPerArskurs: { 7: [1], 8: [1], 9: [1] },
      varianter: [
        { rubrik: "Para ihop typen av symbios med vad som händer.",
          par: [["Mutualism", "Båda arterna gynnas"], ["Kommensalism", "Den ena gynnas, den andra påverkas inte"], ["Parasitism", "Den ena gynnas, den andra skadas"]] },
        { rubrik: "Para ihop exemplet med rätt typ av symbios.",
          par: [["Tarmbakterier som får mat och hjälper oss smälta maten", "Mutualism"], ["Malariaparasiten i människans blod", "Parasitism"],
                ["Hudbakterier som lever på oss utan att påverka oss", "Kommensalism"]] }
      ] },

    { id: "mio-sortera-karna", kapitel: "mikroorganismer", avsnitt: ["vad"], titel: "Med eller utan cellkärna? – sortera",
      punkter: ["bakt-encellig", "virus-ingen-cell", "cell-arvsmassa"],
      typ: "sortera", nivaer: [1],
      varianter: [
        { grupper: ["Utan cellkärna", "Med cellkärna", "Inga celler"],
          saker: [["Bakterier", 0], ["Arkéer", 0], ["Protozoer", 1], ["Alger", 1], ["Svampar", 1], ["Virus", 2]] }
      ] },

    { id: "mio-flerval", kapitel: "mikroorganismer", avsnitt: ["vad", "bakterier"], titel: "Mikroorganismer – välj rätt",
      punkter: { 1: ["vad-grupper"] },
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
      punkter: ["vad-grupper", "virus-ingen-cell", "symb-typer"],
      typ: "santfalskt", nivaer: [1, 2],
      varianter: [
        { pst: [["Bakterier och arkéer saknar cellkärna.", true], ["Alger gör fotosyntes.", true], ["Arkéer orsakar många sjukdomar.", false],
                ["Virus består av celler.", false], ["Vid mutualism gynnas båda arterna.", true]] }
      ] },

    { id: "mio-virus", kapitel: "mikroorganismer", avsnitt: ["virus"], titel: "Virus – välj rätt",
      punkter: ["virus-ingen-cell"],
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
      punkter: { 0: ["svamp-nedbrytare"], 1: ["svamp-en-fler"] },
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
      ] },
    { id: "fk-cell-leva", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Förklara: vad gör att en cell kan leva själv?",
      typ: "forklara", nivaerPerArskurs: { 7: [1, 2], 8: [2], 9: [2] }, rullista: [1],
      varianter: [
        { fraga: "Förklara vad det är som gör att en cell kan leva själv.",
          begrepp: ["näring", "energi", "ämnesomsättning", "växa|växer", "föröka|förökar|dela|delar"],
          modell: "En cell klarar allt som behövs för att leva på egen hand. Den tar upp **näring** och gör om den till **energi** – det kallas **ämnesomsättning**. Energin använder cellen för att **växa** och bygga nya delar. När cellen har vuxit kan den **föröka sig** genom att dela sig i två nya celler." },
        { fraga: "En bakterie består bara av en enda cell. Förklara varför den ändå räknas som levande.",
          begrepp: ["encellig|en cell|en enda cell", "näring", "energi|ämnesomsättning", "växa|växer", "föröka|förökar|dela|delar"],
          modell: "En bakterie är **encellig** – den består av en enda cell. Cellen tar upp **näring** och får **energi** ur den. Med energin kan bakterien **växa**, och sedan **föröka sig** genom att dela sig. Den klarar allt detta själv, och därför räknas den som levande." },
        { fraga: "Förklara hur en cell kan bli till två nya celler. Använd orden arvsmassa och fabriker.",
          begrepp: ["växa|växer|vuxit", "arvsmassa|recept|DNA", "fabrik", "kopiera|kopi", "dela|delar"],
          modell: "Först **växer** cellen. Cellens **fabriker** följer receptet i **arvsmassan** och bygger nya delar. Arvsmassan **kopieras** så att det finns två recept. Sedan **delar** sig cellen, och båda nya cellerna får ett eget recept och egna fabriker." }
      ] },
    { id: "fk-virus-undantag", kapitel: "mikroorganismer", avsnitt: ["virus"], titel: "Förklara: varför är virus ett undantag?",
      typ: "forklara", nivaerPerArskurs: { 7: [1, 2], 8: [2], 9: [2] }, rullista: [1],
      varianter: [
        { fraga: "Virus räknas till mikroberna, men är ett undantag. Förklara varför.",
          begrepp: ["cell", "arvsmassa|recept|DNA|RNA", "protein|hölje", "ämnesomsättning", "värdcell|värd"],
          modell: "Alla andra mikrober består av minst en **cell**. Ett virus är ingen cell – det är bara **arvsmassa** i ett hölje av **protein**. Det har ingen **ämnesomsättning** och inga egna fabriker. Därför kan det bara föröka sig inne i en **värdcell**, och det räknas oftast inte som levande." },
        { fraga: "Förklara varför ett virus måste ta sig in i en annan cell för att kunna föröka sig.",
          begrepp: ["cell", "fabrik", "arvsmassa|recept", "värdcell|värd", "ämnesomsättning"],
          modell: "Ett virus är ingen **cell**. Det har **arvsmassa** – receptet för nya virus – men inga egna **fabriker** och ingen **ämnesomsättning**. Därför måste viruset ta sig in i en **värdcell** och använda cellens fabriker för att tillverka nya virus." }
      ] },
    { id: "fk-mikrobiom", kapitel: "mikroorganismer", avsnitt: ["mikrobiom"], titel: "Förklara: hur hjälper mikrobiomet oss?",
      typ: "forklara", nivaerPerArskurs: { 7: [1, 2], 8: [2], 9: [2] }, rullista: [1],
      varianter: [
        { fraga: "Förklara vad mikrobiomet är och hur det hjälper oss.",
          begrepp: ["mikrob|mikroorganism", "tarm|hud|mun", "matsmältning|smälta", "infektion|skydd|skyddar"],
          modell: "**Mikrobiomet** är alla **mikrober** som lever i och på kroppen, till exempel i **tarmen**, i munnen och på **huden**. Tarmbakterierna hjälper oss med **matsmältningen**. De nyttiga mikroberna **skyddar** oss också mot **infektioner**." },
        { fraga: "Förklara hur de nyttiga mikroberna i mikrobiomet gör det svårare för skadliga mikrober att göra oss sjuka.",
          begrepp: ["nyttiga", "plats", "näring", "skadliga", "infektion|sjuk"],
          modell: "De **nyttiga** mikroberna tar upp **plats** och **näring** i och på kroppen. Då finns det mindre plats och näring kvar till de **skadliga** mikroberna. Därför får de skadliga mikroberna svårare att föröka sig och orsaka **infektioner**." }
      ] },

    { id: "fk-symbios", kapitel: "mikroorganismer", avsnitt: ["symbios"], titel: "Förklara: vilken typ av symbios?",
      typ: "forklara", nivaerPerArskurs: { 7: [1, 2], 8: [2], 9: [2] }, rullista: [1],
      varianter: [
        { fraga: "Tarmbakterierna lever i symbios med oss. Förklara vilken typ av symbios det är och varför.",
          begrepp: ["mutualism", "båda", "gynnas|vinner", "mat|energi|näring", "smälta|matsmältning"],
          modell: "Det är **mutualism**. Tarmbakterierna får **energi** från maten vi äter, och vi får hjälp att **smälta** maten. **Båda** arterna **gynnas**." },
        { fraga: "Många hudbakterier lever på vår hud. Förklara vilken typ av symbios det är och varför.",
          begrepp: ["kommensalism", "gynnas|vinner", "näring", "påverkas inte|märker inte|märker vi inte|påverkar inte"],
          modell: "Det är **kommensalism**. Hudbakterierna **gynnas** eftersom de får **näring** från vår hud. Vi **påverkas inte** – vi märker inte ens av dem." },
        { fraga: "Malariaparasiten lever i människan. Förklara vilken typ av symbios det är och varför.",
          begrepp: ["parasitism", "gynnas|vinner", "skadas|skada", "sjuk"],
          modell: "Det är **parasitism**. Malariaparasiten **gynnas** eftersom den lever och förökar sig i människan. Människan **skadas** – hon blir **sjuk** i malaria." }
      ] },

    { id: "mik-bakterier-text", kapitel: "mikroorganismer", avsnitt: ["bakterier"], titel: "Bakterier – fyll i",
      punkter: { 0: ["bakt-encellig", "bakt-dela"], 2: ["bakt-ofarliga"] },
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["encelliga", "flercelliga", "cellkärna", "delning", "parning", "kocker", "baciller", "spiriller", "1 procent", "50 procent"],
      varianter: [
        { text: "Bakterier är [encelliga] och saknar [cellkärna]. De förökar sig genom [delning]." },
        { text: "Runda bakterier kallas [kocker], stavformade kallas [baciller] och spiralformade kallas [spiriller]." },
        { text: "De flesta bakterier är ofarliga – färre än [1 procent|1 %|1%|en procent] anses vara skadliga." }
      ] },

    { id: "mik-virus-ordning", kapitel: "mikroorganismer", avsnitt: ["virus"], titel: "Så förökar sig ett virus – para ihop",
      punkter: ["virus-ingen-cell"],
      typ: "para", nivaer: [1, 2], iOrdning: true,
      varianter: [
        { rubrik: "Para ihop steget med vad som händer.",
          par: [["Steg 1", "Viruset fäster på cellen"], ["Steg 2", "Virusets arvsmassa tar sig in i cellen"],
                ["Steg 3", "Cellen tillverkar nya virus"], ["Steg 4", "Cellen spricker och de nya virusen sprids"]] }
      ] },
    { id: "lar-cell-sf", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Celler – sant eller falskt",
      typ: "santfalskt", nivaer: [0, 1], punkter: ["cell-minsta", "cell-arvsmassa", "cell-amnes", "cell-encellig"],
      varianter: [
        { pst: [["Allt levande består av celler.", true], ["En cell är den minsta delen som kan leva själv.", true], ["Arvsmassan ligger alltid i en cellkärna.", false], ["Ämnesomsättning betyder att cellen tar upp näring och gör om den till energi.", true], ["En människa är encellig.", false]] }
      ] },
    { id: "lar-cell-flerval", kapitel: "mikroorganismer", avsnitt: ["cell"], titel: "Celler – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad kallas det när en cell tar upp näring och gör om den till energi?", punkter: ["cell-amnes"],
          alt: [ { t: "Ämnesomsättning", s: "ratt", f: "alla levande celler har ämnesomsättning." },
                 { t: "Fotosyntes", s: "delvis", f: "fotosyntes är ett sätt för vissa celler att tillverka näring – men att ta upp näring och få energi kallas ämnesomsättning." },
                 { t: "Celldelning", s: "fel", f: "celldelning är när cellen förökar sig." },
                 { t: "Arvsmassa", s: "fel", f: "arvsmassan är cellens recept." } ] },
        { fraga: "Var finns arvsmassan i en bakterie?", punkter: ["cell-arvsmassa", "bakt-encellig"],
          alt: [ { t: "Den ligger fritt i cellen", s: "ratt", f: "bakterier saknar cellkärna." },
                 { t: "I cellkärnan", s: "fel", f: "bakterier har ingen cellkärna." },
                 { t: "I ett hölje av protein", s: "fel", f: "det gäller virus." },
                 { t: "Bakterier har ingen arvsmassa", s: "fel", f: "alla celler har arvsmassa – receptet för nya celler." } ] }
      ] },
    { id: "lar-mikrob-sf", kapitel: "mikroorganismer", avsnitt: ["vad"], titel: "Mikrober – sant eller falskt",
      typ: "santfalskt", nivaer: [0, 1], punkter: ["vad-mikrob", "vad-ofarliga", "vad-patogen", "vad-grupper"],
      varianter: [
        { pst: [["Mikrober går att se utan mikroskop.", false], ["De flesta mikrober är ofarliga eller nyttiga.", true], ["En mikrob som orsakar sjukdom kallas patogen.", true], ["Det finns sex grupper av mikrober.", true], ["Alla mikrober gör oss sjuka.", false]] }
      ] },
    { id: "lar-bakt-flerval", kapitel: "mikroorganismer", avsnitt: ["bakterier"], titel: "Bakterier – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Hur förökar sig bakterier?", punkter: ["bakt-dela"],
          alt: [ { t: "De delar sig – en blir två", s: "ratt", f: "antalet fördubblas vid varje delning." },
                 { t: "De tar sig in i en värdcell", s: "fel", f: "så förökar sig virus." },
                 { t: "De lägger ägg", s: "fel", f: "bakterier är encelliga och delar sig." },
                 { t: "De bildar sporer", s: "fel", f: "sporer är ett skydd när det blir för kallt eller torrt – inte ett sätt att föröka sig." } ] },
        { fraga: "Vilken viktig uppgift har många bakterier i naturen?", punkter: ["bakt-nedbrytare"],
          alt: [ { t: "De bryter ner döda växter och djur", s: "ratt", f: "bakterier är viktiga nedbrytare – näringen kan användas igen." },
                 { t: "De gör oss sjuka", s: "fel", f: "de flesta bakterier är ofarliga – färre än 1 % är skadliga." },
                 { t: "De tillverkar antibiotika", s: "fel", f: "antibiotika används mot bakterier." },
                 { t: "De är mat åt svampar", s: "fel", f: "bakterier och svampar är båda nedbrytare." } ] },
        { fraga: "Hur stor del av bakterierna anses vara skadliga?", punkter: ["bakt-ofarliga"],
          alt: [ { t: "Färre än 1 procent", s: "ratt", f: "de flesta bakterier är ofarliga eller nyttiga." },
                 { t: "Ungefär hälften", s: "fel", f: "det är färre än 1 procent." },
                 { t: "Nästan alla", s: "fel", f: "de flesta är ofarliga eller nyttiga." },
                 { t: "Ingen", s: "fel", f: "några bakterier orsakar sjukdom – men färre än 1 procent." } ] }
      ] },
    { id: "lar-bakt-sf", kapitel: "mikroorganismer", avsnitt: ["bakterier"], titel: "Bakterier – sant eller falskt",
      typ: "santfalskt", nivaer: [0, 1], punkter: ["bakt-encellig", "bakt-dela", "bakt-nedbrytare", "bakt-ofarliga"],
      varianter: [
        { pst: [["Bakterier är encelliga.", true], ["Bakterier har en cellkärna.", false], ["En bakterie förökar sig genom att dela sig.", true], ["Bakterier bryter ner döda växter och djur.", true], ["De flesta bakterier är farliga.", false]] }
      ] },
    { id: "lar-virus-flerval", kapitel: "mikroorganismer", avsnitt: ["virus"], titel: "Virus – välj rätt",
      typ: "flerval", nivaer: [1, 2],
      varianter: [
        { fraga: "Varför säger man att virus är på gränsen till liv?", punkter: ["virus-ej-levande", "virus-ingen-cell"],
          alt: [ { t: "De har arvsmassa, men är ingen cell och kan bara föröka sig i en värdcell", s: "ratt", f: "de har något levande har, men saknar cell och ämnesomsättning." },
                 { t: "De är för små för att synas", s: "fel", f: "bakterier är också för små för att synas – och de är levande." },
                 { t: "De orsakar sjukdomar", s: "fel", f: "bakterier orsakar också sjukdomar – och de är levande." },
                 { t: "De har ingen arvsmassa", s: "fel", f: "virus har arvsmassa – DNA eller RNA." } ] }
      ] },
    { id: "lar-virus-sf", kapitel: "mikroorganismer", avsnitt: ["virus"], titel: "Virus – sant eller falskt",
      typ: "santfalskt", nivaer: [0, 1], punkter: ["virus-ingen-cell", "virus-ej-levande"],
      varianter: [
        { pst: [["Virus består av celler.", false], ["Ett virus behöver en värdcell för att föröka sig.", true], ["Virus har egen ämnesomsättning.", false], ["Virus räknas oftast som levande.", false], ["Ett virus är arvsmassa i ett hölje av protein.", true]] }
      ] },
    { id: "lar-svamp-sf", kapitel: "mikroorganismer", avsnitt: ["svampar"], titel: "Svampar – sant eller falskt",
      typ: "santfalskt", nivaer: [0, 1], punkter: ["svamp-grupp", "svamp-en-fler", "svamp-nedbrytare"],
      varianter: [
        { pst: [["Svampar är en sorts växter.", false], ["Jäst är en encellig svamp.", true], ["Svampar bryter ner döda växter och djur.", true], ["Alla svampar är flercelliga.", false], ["Svampar är varken växter eller djur.", true]] }
      ] },
    { id: "lar-mbiom-flerval", kapitel: "mikroorganismer", avsnitt: ["mikrobiom"], titel: "Mikrobiomet – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad är mikrobiomet?", punkter: ["mbiom-vad"],
          alt: [ { t: "Alla mikrober som lever i och på kroppen", s: "ratt", f: "bakterier, svampar, virus och andra mikrober i tarmen, munnen och på huden." },
                 { t: "Bakterierna i tarmen", s: "delvis", f: "de hör till mikrobiomet – men mikrobiomet är alla mikrober i och på kroppen." },
                 { t: "En sjukdom i magen", s: "fel", f: "mikrobiomet är mikroberna som lever i och på oss." },
                 { t: "Ett organ i kroppen", s: "fel", f: "mikrobiomet är mikroberna som lever i och på oss." } ] },
        { fraga: "Vad gör mikrobiomet för oss?", punkter: ["mbiom-hjalper"],
          alt: [ { t: "Hjälper till med matsmältningen och skyddar mot infektioner", s: "ratt", f: "de nyttiga mikroberna tar plats och näring från skadliga." },
                 { t: "Hjälper till med matsmältningen", s: "delvis", f: "stämmer – men mikrobiomet skyddar oss också mot infektioner." },
                 { t: "Gör oss sjuka", s: "fel", f: "mikrobiomet är mest nyttigt." },
                 { t: "Tillverkar syre", s: "fel", f: "det gör växter och alger." } ] }
      ] },
    { id: "lar-symb-flerval", kapitel: "mikroorganismer", avsnitt: ["symbios"], titel: "Symbios – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad är symbios?", punkter: ["symb-vad"],
          alt: [ { t: "Ett nära samband mellan två olika arter", s: "ratt", f: "sambandet kan vara bra, neutralt eller dåligt för arterna." },
                 { t: "När två arter lever på samma plats", s: "delvis", f: "de lever nära varandra – men symbios betyder att de påverkar varandra." },
                 { t: "När ett djur äter ett annat", s: "fel", f: "det kallas att vara rovdjur och byte." },
                 { t: "När en bakterie delar sig", s: "fel", f: "det är bakteriens sätt att föröka sig." } ] },
        { fraga: "Vid vilken typ av symbios gynnas båda arterna?", punkter: ["symb-typer"],
          alt: [ { t: "Mutualism", s: "ratt", f: "till exempel tarmbakterierna och vi." },
                 { t: "Kommensalism", s: "fel", f: "där gynnas bara den ena." },
                 { t: "Parasitism", s: "fel", f: "där skadas den ena." },
                 { t: "Fotosyntes", s: "fel", f: "det är ingen typ av symbios." } ] }
      ] },
    { id: "lar-svamp-flerval", kapitel: "mikroorganismer", avsnitt: ["svampar"], titel: "Svampar – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vilken grupp hör svampar till?", punkter: ["svamp-grupp"],
          alt: [ { t: "En egen grupp – varken växter eller djur", s: "ratt", f: "svampar gör inte fotosyntes som växter och är inte heller djur." },
                 { t: "Växter", s: "fel", f: "svampar gör inte fotosyntes – de är en egen grupp." },
                 { t: "Djur", s: "fel", f: "svampar är en egen grupp, varken växter eller djur." },
                 { t: "Bakterier", s: "fel", f: "svampar har celler med cellkärna – bakterier saknar cellkärna." } ] }
      ] }
]);
