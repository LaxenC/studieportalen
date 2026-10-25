/* =====================================================================
   UPPGIFTER – Mikroorganismer
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
     id : unikt namn · kapitel : kapitlets id · avsnitt : avsnitt i texten
     nivaer : nivå [0]–[3] · nivaerPerArskurs : annan nivå per årskurs
     rullista : nivåer där eleven väljer i en rullista
   Avsnitt: vad, bakterier, virus, svampar, protister, mikrobiom, symbios
   ===================================================================== */
Portal.uppgifter([

    { id: "mio-grupper-para", kapitel: "mikroorganismer", avsnitt: ["vad"], titel: "Mikroorganismernas grupper – para ihop",
      typ: "para", nivaer: [0, 1],
      varianter: [
        { rubrik: "Para ihop mikroben med rätt beskrivning.",
          par: [["Svampar", "Varken växter eller djur – till exempel jäst och mögel"], ["Protozoer", "Encelliga organismer med cellkärna"],
                ["Alger", "Gör fotosyntes och lever oftast i vatten"], ["Arkéer", "Liknar bakterier och lever ofta i extrema miljöer"]] }
      ] },

    { id: "mik-protozoer-text", kapitel: "mikroorganismer", avsnitt: ["protister"], titel: "Protozoer, alger och arkéer – fyll i",
      typ: "lucktext", nivaer: [1], rullista: [1],
      ordlista: ["cellkärna", "fotosyntes", "malaria", "förkylning", "parasit", "värden", "extrema miljöer", "skogen"],
      varianter: [
        { text: "Protozoer är encelliga, men till skillnad från bakterier har de en [cellkärna]. En känd sjukdom som orsakas av en protozo är [malaria]." },
        { text: "En [parasit] lever på eller i en annan organism, som kallas [värden|värd]." },
        { text: "Alger gör [fotosyntes]. Arkéer lever ofta i [extrema miljöer|extrem miljö]." }
      ] },

    { id: "mik-eukaryot", kapitel: "mikroorganismer", avsnitt: ["protister"], titel: "Eukaryoter – välj rätt",
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
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["mikrobiomet", "immunförsvaret", "symbios", "pandemi", "matsmältningen", "andningen"],
      varianter: [
        { text: "Alla mikrober som lever i och på kroppen kallas tillsammans [mikrobiomet|mikrobiom]." },
        { text: "Tarmbakterierna hjälper oss bland annat med [matsmältningen]." },
        { text: "Ett nära och långvarigt samband mellan två olika arter kallas [symbios]." }
      ] },

    { id: "smi-symbios-para", kapitel: "mikroorganismer", avsnitt: ["symbios"], titel: "Typer av symbios – para ihop",
      typ: "para", nivaerPerArskurs: { 7: [2], 8: [1, 2], 9: [1] },
      varianter: [
        { rubrik: "Para ihop typen av symbios med vad som händer.",
          par: [["Mutualism", "Båda arterna gynnas"], ["Kommensalism", "Den ena gynnas, den andra påverkas inte"], ["Parasitism", "Den ena gynnas, den andra skadas"]] },
        { rubrik: "Para ihop exemplet med rätt typ av symbios.",
          par: [["Tarmbakterier som får mat och hjälper oss smälta maten", "Mutualism"], ["Malariaparasiten i människans blod", "Parasitism"],
                ["Hudbakterier som lever på oss utan att påverka oss", "Kommensalism"]] }
      ] },

    { id: "mio-sortera-karna", kapitel: "mikroorganismer", avsnitt: ["bakterier", "protister"], titel: "Med eller utan cellkärna? – sortera",
      typ: "sortera", nivaer: [1, 2],
      varianter: [
        { grupper: ["Utan cellkärna", "Med cellkärna", "Inga celler"],
          saker: [["Bakterier", 0], ["Arkéer", 0], ["Protozoer", 1], ["Alger", 1], ["Svampar", 1], ["Virus", 2]] }
      ] },

    { id: "mio-flerval", kapitel: "mikroorganismer", avsnitt: ["bakterier", "virus"], titel: "Mikroorganismer – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vilka organismer var de första på jorden?",
          alt: [ { t: "Bakterier och arkéer", s: "ratt", f: "de fanns redan för över 3 000 miljoner år sedan." },
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

    { id: "mio-svampar", kapitel: "mikroorganismer", avsnitt: ["svampar"], titel: "Svampar – välj rätt",
      typ: "flerval", nivaer: [0, 1],
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
