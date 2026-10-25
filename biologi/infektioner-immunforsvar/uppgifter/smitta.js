/* =====================================================================
   UPPGIFTER – Infektioner och smittspridning
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
     id : unikt namn · kapitel : kapitlets id · avsnitt : avsnitt i texten
     nivaer : nivå [0]–[3] · nivaerPerArskurs : annan nivå per årskurs
     rullista : nivåer där eleven väljer i en rullista
   Avsnitt: sjukdom, vadsmittar, smittspridning
   ===================================================================== */
Portal.uppgifter([

    { id: "smi-sjukdom-para", kapitel: "smitta", avsnitt: ["sjukdom"], titel: "Sjukdom och smitta – para ihop",
      typ: "para", nivaer: [0, 1],
      varianter: [
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Infektion", "En patogen tar sig in i kroppen och förökar sig"], ["Inkubationstid", "Tiden från att man blir smittad till att man blir sjuk"],
                ["Epidemi", "En sjukdom sprids snabbt till många människor"], ["Pandemi", "En sjukdom sprids över stora delar av världen"], ["Symptom", "Ett tecken på sjukdom, till exempel feber"]] }
      ] },

    { id: "smi-smitta-sortera", kapitel: "smitta", avsnitt: ["smittspridning"], titel: "Smittar eller smittar inte? – sortera",
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
        { pst: [["En infektion är när en patogen förökar sig i kroppen.", true], ["Inkubationstid är tiden det tar att bli frisk.", false],
                ["Alla sjukdomar smittar.", false], ["En pandemi sprids över stora delar av världen.", true], ["Myggor kan sprida sjukdomar.", true]] }
      ] },

    { id: "mik-sortera-typ", kapitel: "smitta", avsnitt: ["vadsmittar"], titel: "Bakterie, virus eller svamp? – sortera",
      typ: "sortera", nivaer: [1],
      varianter: [
        { grupper: ["Bakterier", "Virus", "Svampar"],
          saker: [["Har en cell utan cellkärna", 0], ["Kan bli resistenta mot antibiotika", 0], ["Kocker, baciller och spiriller", 0],
                  ["Arvsmassa i ett proteinhölje", 1], ["Måste ta över en värdcell för att föröka sig", 1], ["Orsakar förkylning", 1],
                  ["Jäst och mögel", 2], ["Viktiga nedbrytare i naturen", 2], ["Orsakar fotsvamp", 2]] }
      ] },

    { id: "mik-virus-flerval", kapitel: "smitta", avsnitt: ["vadsmittar"], titel: "Virus – välj rätt",
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

    { id: "mik-sf", kapitel: "smitta", avsnitt: ["vadsmittar"], titel: "Mikrober – sant eller falskt",
      typ: "santfalskt", nivaer: [1, 2],
      varianter: [
        { pst: [["Bakterier saknar cellkärna.", true], ["Alla bakterier är farliga.", false], ["Virus kan föröka sig utan värdcell.", false],
                ["Jäst är en svamp.", true], ["Svampinfektioner är oftast mycket allvarliga.", false]] },
        { pst: [["Malaria orsakas av en protozo.", true], ["En parasit lever på eller i en värd.", true], ["Virus är större än bakterier.", false],
                ["Svampar är en sorts växter.", false], ["Bakterier förökar sig genom delning.", true]] }
      ] }
]);
