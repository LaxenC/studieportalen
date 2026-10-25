/* =====================================================================
   UPPGIFTER – Mikrober och människan
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
     id : unikt namn · kapitel : kapitlets id · avsnitt : avsnitt i texten
     nivaer : nivå [0]–[3] · nivaerPerArskurs : annan nivå per årskurs
     rullista : nivåer där eleven väljer i en rullista
   Avsnitt: mikrobiom, symbios, sjukdom, smittspridning
   ===================================================================== */
Portal.uppgifter([

    { id: "smi-mikrobiom-text", kapitel: "smitta", avsnitt: ["mikrobiom", "symbios"], titel: "Mikrobiom och symbios – fyll i",
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["mikrobiomet", "immunförsvaret", "symbios", "pandemi", "matsmältningen", "andningen"],
      varianter: [
        { text: "Alla mikrober som lever i och på kroppen kallas tillsammans [mikrobiomet|mikrobiom]." },
        { text: "Tarmbakterierna hjälper oss bland annat med [matsmältningen]." },
        { text: "Ett nära och långvarigt samband mellan två olika arter kallas [symbios]." }
      ] },

    { id: "smi-symbios-para", kapitel: "smitta", avsnitt: ["symbios"], titel: "Typer av symbios – para ihop",
      typ: "para", nivaerPerArskurs: { 7: [2], 8: [1, 2], 9: [1] },
      varianter: [
        { rubrik: "Para ihop typen av symbios med vad som händer.",
          par: [["Mutualism", "Båda arterna gynnas"], ["Kommensalism", "Den ena gynnas, den andra påverkas inte"], ["Parasitism", "Den ena gynnas, den andra skadas"]] },
        { rubrik: "Para ihop exemplet med rätt typ av symbios.",
          par: [["Tarmbakterier som får mat och hjälper oss smälta maten", "Mutualism"], ["Malariaparasiten i människans blod", "Parasitism"],
                ["Hudbakterier som lever på oss utan att påverka oss", "Kommensalism"]] }
      ] },

    { id: "smi-sjukdom-para", kapitel: "smitta", avsnitt: ["sjukdom"], titel: "Sjukdom och smitta – para ihop",
      typ: "para", nivaer: [0, 1],
      varianter: [
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Infektion", "En patogen tar sig in i kroppen och förökar sig"], ["Inkubationstid", "Tiden från att man blir smittad till att man blir sjuk"],
                ["Epidemi", "En sjukdom sprids snabbt till många människor"], ["Pandemi", "En sjukdom sprids över stora delar av världen"], ["Symptom", "Ett tecken på sjukdom, till exempel feber"]] }
      ] },

    { id: "smi-smitta-sortera", kapitel: "smitta", avsnitt: ["sjukdom"], titel: "Smittar eller smittar inte? – sortera",
      typ: "sortera", nivaer: [1],
      varianter: [
        { grupper: ["Kan smitta", "Smittar inte"],
          saker: [["Förkylning", 0], ["Influensa", 0], ["Malaria", 0], ["Halsfluss", 0], ["Diabetes", 1], ["Allergi", 1], ["Cancer", 1]] }
      ] },

    { id: "smi-smittvag-para", kapitel: "smitta", avsnitt: ["smittspridning"], titel: "Smittvägar – para ihop",
      typ: "para", nivaer: [0, 1, 2],
      varianter: [
        { rubrik: "Para ihop exemplet med rätt smittväg.",
          par: [["Någon nyser bredvid dig", "Via luften"], ["Du tar i ett dörrhandtag som en sjuk har rört", "Indirekt kontakt"],
                ["En mygga sticker dig", "Insekter"], ["Du äter dåligt tillagad kyckling", "Mat och vatten"], ["Du kramar en kompis som är sjuk", "Direktkontakt"],
                ["En hund med rabies biter dig", "Andra djur"]] }
      ] },

    { id: "smi-stoppa-flerval", kapitel: "smitta", avsnitt: ["smittspridning"], titel: "Stoppa smittspridning – välj rätt",
      typ: "flerval", nivaer: [1, 2],
      varianter: [
        { fraga: "Vilken smittväg stoppar du när du tvättar händerna innan du äter?",
          alt: [ { t: "Indirekt kontakt", s: "ratt", f: "mikrober från saker du rört fastnar på händerna och kan komma in via munnen." },
                 { t: "Insekter", s: "fel", f: "mot insekter skyddar man sig till exempel med myggnät." },
                 { t: "Via luften", s: "fel", f: "mot luftsmitta hjälper det att hosta i armvecket och hålla avstånd." },
                 { t: "Andra djur", s: "fel", f: "handtvätt handlar främst om smitta via saker och händer." } ] },
        { fraga: "Varför ska man hosta i armvecket?",
          alt: [ { t: "Så att färre droppar med mikrober sprids i luften och på händerna", s: "ratt", f: "då minskar både luftsmitta och smitta via händer och saker." },
                 { t: "Så att hostan går över snabbare", s: "fel", f: "det handlar om att skydda andra, inte om att bli frisk snabbare." },
                 { t: "Så att mikroberna dör i armvecket", s: "fel", f: "mikroberna dör inte – men de sprids inte lika lätt." },
                 { t: "Det spelar ingen roll var man hostar", s: "fel", f: "hostar man rakt ut sprids många droppar med mikrober." } ] }
      ] },

    { id: "smi-sf", kapitel: "smitta", titel: "Mikrober och människan – sant eller falskt",
      typ: "santfalskt", nivaer: [1, 2],
      varianter: [
        { pst: [["Mikrobiomet hjälper oss att smälta maten.", true], ["Vid parasitism gynnas båda arterna.", false],
                ["Alla sjukdomar smittar.", false], ["En pandemi sprids över stora delar av världen.", true], ["Myggor kan sprida sjukdomar.", true]] }
      ] }
]);
