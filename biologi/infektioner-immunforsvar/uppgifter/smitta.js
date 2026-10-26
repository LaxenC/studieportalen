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
    { id: "sjukdom-orsak-flerval", kapitel: "smitta", avsnitt: ["sjukdom"], titel: "Orsakar sjukdom – välj rätt",
      typ: "flerval", nivaer: [1], punkter:["sjukdom-orsak"],
      varianter:[
        {fraga: "Vad kallas bakterier, virus, svampar eller protozoer som orsakar sjukdomar?",
          alt: [
            { t: "Patogener", s: "ratt", f: "Mikrober som orsakar sjukdomar kallas patogener. Bakterier, virus, svampar och protozoer är mikrober som orsakar sjukdomar." },
            { t: "Symptom", s: "fel", f: "Symptom är tecken på sjukdom, till exempel feber, hosta eller utslag. Mikrober eller organismer som orsakar sjukdomar kalllas Patogener." },
            { t: "Diagnoser", s: "fel", f: "En diagnos är ett beslut om vilken sjukdom det är. Mikrober eller organismer som orsakar sjukdomar kalllas Patogener." }]},
        {fraga: "Orsakas alla sjukdomar av patogener?",
          alt: [
            { t: "Nej, till exempel diabetes, allergier och cancer orsakas inte av mikrober.", s: "ratt", f: "Alla sjukdomar orsakas inte av patogener. Patogener orsakar sjukdomar som smittar." },
            { t: "Ja, alla sjukdomar orsakas av bakterier eller virus.", s: "fel", f: "Alla sjukdomar orsakas inte av patgoner, endast de sjukdomar som smittar." },
            { t: "Nej, men alla sjukdomar orsakas av protozoer.", s: "fel", f: "Protozoer orsakar endast malaria." }]},
        {fraga: "Vilka av följande kan vara patogener?",
          alt: [
            { t: "Bakterier, virus och svampar.", s: "ratt", f: "Ja det stämmer dessa tre mikrober kan vara patogener och orsakar sjukdomar." },
            { t: "Feber, hosta och utslag.", s: "fel", f: "Feber, hosta och utslag är exempel på symptom-" },
            { t: "Diabetes, allergier och cancer.", s: "fel", f: "Det är exempel på sjukdomar som inte smittar inte och orsakas därmed inte av patogener." }]},
        {fraga: "Vilket påstående om patogener stämmer?",
          alt: [
            { t: "Patogener kan orsaka sjukdomar.", s: "ratt", f: "Patogener är mikrober (bakterier, virus eller svampar) som orsakar sjukdomar." },
            { t: "Patogener är tecken på sjukdom.", s: "fel", f: "Tecken på sjukdom kallas symptom. Patogener är mikrober (bakterier, virus eller svampar) som orsakar sjukdomar." },
            { t: "Patogener är tiden från smitta till sjukdom.", s: "fel", f: "Tiden från smitta till sjukdom kallas inkubationstid. Patogener är mikrober (bakterier, virus eller svampar) som orsakar sjukdomar." }]},
        {fraga: "Vilket av följande är ett exempel på en patogen?",
          alt: [
            { t: "En svamp som orsakar sjukdom.", s: "ratt", f: "Stämmer, svampar kan vara mikrober som orsakar sjukdomar de är därmed patogener." },
            { t: "Feber", s: "fel", f: "Feber är ett symptom på sjukdom. " },
            { t: "Inkubationstid", s: "fel", f: "Inkubationstid är tiden från att man blivit smittad till att man blir sjuk." }]}]},

       { id: "sjukdom-infek-flerval", kapitel: "smitta", avsnitt: ["sjukdom"], titel: "Infektion – välj rätt",
         typ: "flerval", nivaer: [1], punkter:["sjukdom-infek"],
         varianter:[
           {fraga: "Vad är en infektion?",
             alt: [
               { t: "När en patogen tar sig in i kroppen och börjar föröka sig.", s: "ratt", f: "En infektion uppstår när en patogen tar sig in i kroppen och börjar föröka sig." },
               { t: "När en sjukdom snabbt sprids till många människor.", s: "fel", f: "Det kallas en epidemi. En infektion uppstår när en patogen tar sig in i kroppen och börjar föröka sig." },
               { t: "När kroppen visar tecken på sjukdom, till exempel feber eller hosta.", s: "fel", f: "Tecken på sjukdom kallas symptom. En infektion uppstår när en patogen tar sig in i kroppen och börjar föröka sig." }]},
        {fraga: "Vad behöver en patogen göra för att det ska räknas som en infektion?",
          alt: [
            { t: "Ta sig in i kroppen och börja föröka sig.", s: "ratt", f: "Det är det som definierar en infektion." },
            { t: "Spridas över stora delar av världen.", s: "fel", f: "Det kallas en pandemi. Patogenen behöver börja föröka sig för att det ska bli en infektion." },
            { t: "Göra att läkaren ställer en diagnos.", s: "fel", f: "En diagnos är ett beslut om vilken sjukdom det är. Patogenen behöver börja föröka sig för att det ska bli en infektion." }]},
        {fraga: "Vilket påstående beskriver en infektion?",
          alt: [
            { t: "En patogen har tagit sig in i kroppen och förökar sig.", s: "ratt", f: "En infektion innebär att en patogen tar sig in i kroppen och börjar föröka sig." },
            { t: "En sjukdom sprids snabbt till många människor.", s: "fel", f: "Det beskriver en epidemi. En infektion innebär att en patogen tar sig in i kroppen och börjar föröka sig." },
            { t: "Tiden går från smitta till att personen blir sjuk.", s: "fel", f: "Den tiden kallas inkubationstid. En infektion innebär att en patogen tar sig in i kroppen och börjar föröka sig." }
          ]},
        { fraga: "Vad är det som förökar sig vid en infektion?",
          alt: [
            { t: "Patogenen som har tagit sig in i kroppen.", s: "ratt", f: "Vid en infektion har en patogen tagit sig in i kroppen och börjar föröka sig." },
            { t: "Symptomen.", s: "fel", f: "Symptom är tecken på sjukdom, till exempel feber, hosta eller utslag. Vid en infektion har en patogen tagit sig in i kroppen och börjar föröka sig." },
            { t: "Diagnosen.", s: "fel", f: "En diagnos är ett beslut om vilken sjukdom det är. Vid en infektion har en patogen tagit sig in i kroppen och börjar föröka sig." }
          ]}]},
   
          { id: "pat-mik-flerval", kapitel: "smitta", avsnitt: ["vadsmittar"], titel: "Vad är det som smittar – välj rätt",
            typ: "flerval", nivaer: [1], punkter:["pat-mik"],
            varianter: [              
            {fraga: "Vilka patogener orsakar de flesta infektioner?",
              alt: [
                { t: "Bakterier och virus", s: "ratt", f: "De flesta infektioner orsakas av bakterier och virus." },
                { t: "Svampar och protozoer", s: "fel", f: "Även svampar och protozoer kan göra oss sjuka, men de flesta infektioner orsakas av bakterier och virus." },
                { t: "Bara bakterier", s: "fel", f: "Virus orsakar också många infektioner, även svampar och protozoer kan göra oss sjuka men de orsakar inte flest sjukdomar" }]},
            {fraga: "Vilket påstående om svampar och protozoer stämmer?",
              alt: [
                { t: "Både svampar och protozoer kan göra människor sjuka.", s: "ratt", f: "Svampar kan orsaka exempelvis fotsvamp och protozoer kan orsaka malaria." },
                { t: "Bara svampar kan göra människor sjuka.", s: "fel", f: "Även protozoer kan göra människor sjuka." },
                { t: "Bara protozoer kan göra människor sjuka.", s: "fel", f: "Även svampar kan orsaka sjukdomar." }]},
            {fraga: "Vad kan orsakar infektioner?",
              alt: [
                { t: "Bakterier, virus, svampar och protozoer kan orsaka sjukdomar.", s: "ratt", f: "Bakterier kan exempelvis orsaka halsfluss, virus kan orsaka förkylning, svampar kan orsaka fotsvamp och protozoer kan orsaka malaria." },
                { t: "Kyla och dålig mat kan orsaka sjukdomar.", s: "fel", f: "Bakterier, virus, svampar och protozoer kan orsaka infektioner." },
                { t: "Bara bakterier och virus kan orsaka sjukdomar.", s: "fel", f: "Även svampar och protozoer kan göra oss sjuka." }
              ]}]},
             { id: "pat-mik-tre-saker", kapitel: "smitta", avsnitt: ["vadsmittar"], titel: "Orsakar sjukdomar",
               typ: "valjflera", nivaer: [1], punkter: ["pat-mik"],
               varianter: [
                 { fraga: "Vad förutom protozoer kan orsaka sjukdomar?",
                   ratt: ["Bakterier", "Virus", "Svampar"],
                   fel: ["Alger", "Kyla", "Dålig mat", "Brist på sömn", "Vind", "Brist på motion"],
                   forklaring: "Bakterier kan exempelvis orsaka halsfluss, virus kan orsaka förkylning, svampar kan orsaka fotsvamp och protozoer kan orsaka malaria." },
                  { fraga: "Vad förutom virus kan orsaka sjukdomar?",
                   ratt: ["Bakterier", "Protozoer", "Svampar"],
                   fel: ["Alger", "Kyla", "Dålig mat", "Brist på sömn", "Vind", "Brist på motion"],
                   forklaring: "Bakterier kan exempelvis orsaka halsfluss, virus kan orsaka förkylning, svampar kan orsaka fotsvamp och protozoer kan orsaka malaria." },
                  {fraga: "Vad förutom svampar kan orsaka sjukdomar?",
                   ratt: ["Bakterier", "Protozoer", "Virus"],
                   fel: ["Alger", "Kyla", "Dålig mat", "Brist på sömn", "Vind", "Brist på motion"],
                   forklaring: "Bakterier kan exempelvis orsaka halsfluss, virus kan orsaka förkylning, svampar kan orsaka fotsvamp och protozoer kan orsaka malaria." },
                  {fraga: "Vad förutom bakterier kan orsaka sjukdomar?",
                   ratt: ["virus", "Protozoer", "Svampar"],
                   fel: ["Alger", "Kyla", "Dålig mat", "Brist på sömn", "Vind", "Brist på motion"],
                   forklaring: "Bakterier kan exempelvis orsaka halsfluss, virus kan orsaka förkylning, svampar kan orsaka fotsvamp och protozoer kan orsaka malaria." }] },
         
               { id: "sprid-vag-text", kapitel: "smitta", avsnitt: ["smittspridning"], titel: "Smittvägar – fyll i",
                  typ: "lucktext", nivaer: [0, 1], rullista: [0], punkter: ["sprid-vag"],
                  ordlista: ["luften", "blod", "mat och vatten", "djur", "direktkontakt", "indirekt kontakt", "sexuell kontakt", "solljus", "kläder"],
                  varianter: [
                    { text: "Smitta kan spridas på många sätt, till exempel genom direktkontakt, indirekt kontakt, sexuell kontakt, [*luft|luften/blod/mat och vatten|mat|vatten|föda/djur|andra djur|insekter], [*luft|luften/blod/mat och vatten|mat|vatten|föda/djur|andra djur|insekter] och [*luft|luften/blod/mat och vatten|mat|vatten|föda/djur|andra djur|insekter]." },
                    { text: "Smitta kan spridas på många sätt, till exempel via luften, djur, blod, [*direktkontakt/sexuell kontakt|sex/mat och vatten|mat|vatten|föda/indirekt kontakt|indirekt], [*direktkontakt/sexuell kontakt|sex/mat och vatten|mat|vatten|föda/indirekt kontakt|indirekt] och [*direktkontakt/sexuell kontakt|sex/mat och vatten|mat|vatten|föda/indirekt kontakt|indirekt]." },
                    { text: "Smitta kan spridas på många sätt, till exempel via mat och vatten, direktkontakt, sexuell kontakt, [*luft|luften/blod/indirekt kontakt|indirekt/djur|andra djur|insekter], [*luft|luften/blod/indirekt kontakt|indirekt/djur|andra djur|insekter] och [*luft|luften/blod/indirekt kontakt|indirekt/djur|andra djur|insekter]." }
                  ] },
   
             { id: "sprid-stop-para", kapitel: "smitta", avsnitt: ["smittspridning"], titel: "Stoppa smittvägar – para ihop",
               typ: "para", nivaer: [0, 1, 2], punkter: ["sprid-stop"],
               varianter: [
                 { rubrik: "Para ihop sätt att stoppa smittväg med rätt smittväg.",
                   par: [["Städa ytor som många rör, exempelvis handtag", "Indirekt kontakt"], ["Hosta i armvecket", "Via luften"], ["Tillaga maten ordentligt", "Föda"],["Använda kondom vid sex", "Sexuell kontakt"], ["Använda rena sprutor", "Blod"],
                         ["Skydda sig mot myggor och fästingar", "Djur"], ["Använda handskar när man hanterar blod", "Blod"],["Tvätta händerna och undvika nära kontakt med någon som är sjuk", "Direktkontakt"]
  ] }
               ] },
               
         { id: "sjukdom-inkub-flerval", kapitel: "smitta", avsnitt: ["sjukdom"], titel: "Inkuvationstid – välj rätt",
            typ: "flerval", nivaer: [1], punkter:["sjukdom-inkub"],
            varianter:[
              {fraga: "Vad betyder inkubationstid?",
                alt: [
                  { t: "Tiden från att man blivit smittad till att man blir sjuk.", s: "ratt", f: "Inkubationstid är tiden från smitta till sjukdom." },
                  { t: "Tiden som en patogen förökar sig i kroppen.", s: "fel", f: "Inkubationstid beskriver tiden från att man blivit smittad till att man blir sjuk." },
                  { t: "Tiden det tar för en sjukdom att spridas över världen.", s: "fel", f: "Spridning över stora delar av världen kallas pandemi. Inkubationstid är tiden från smitta till sjukdom." }
                ]},
              {fraga: "När är starten för inkubationstiden?",
                alt: [
                  { t: "När man blivit smittad.", s: "ratt", f: "Inkubationstiden börjar när man blivit smittad." },
                  { t: "När man får symptom.", s: "fel", f: "Inkubationstiden är tiden från smitta till att man blir sjuk." },
                  { t: "När läkaren ställer en diagnos.", s: "fel", f: "En diagnos är ett beslut om vilken sjukdom det är. Inkubationstid är tiden från smitta till sjukdom." }]},
              {fraga: "När är slutet för inkubationstiden?",
                alt: [
                  { t: "När man blir sjuk.", s: "ratt", f: "Inkubationstiden sträcker sig från smitta till att man blir sjuk." },
                  { t: "När man blir smittad.", s: "fel", f: "Det är då inkubationstiden börjar. Inkubationstiden sträcker sig från smitta till att man blir sjuk." },
                  { t: "När sjukdomen sprids till många människor.", s: "fel", f: "Snabb spridning till många människor kallas epidemi. Inkubationstiden sträcker sig från smitta till att man blir sjuk." }]},
              {fraga: "Vilket alternativ beskriver inkubationstid?",
                alt: [
                  { t: "Tiden mellan smitta och sjukdom.", s: "ratt", f: "Inkubationstid är tiden från att man blivit smittad till att man blir sjuk." },
                  { t: "Tecken på sjukdom, till exempel feber eller hosta.", s: "fel", f: "Tecken på sjukdom kallas symptom. Inkubationstid är tiden från att man blivit smittad till att man blir sjuk." },
                  { t: "När en sjukdom sprids över stora delar av världen.", s: "fel", f: "Det kallas pandemi. Inkubationstid är tiden från att man blivit smittad till att man blir sjuk." }
                ]}]},
        
    { id: "sjukdom-sprid-flerval", kapitel: "smitta", avsnitt: ["sjukdom"], titel: "Spridning sjukdom – välj rätt",
      typ: "flerval", nivaer: [1], punkter:["sjukdom-sprid"],
      varianter:[
        {fraga: "Vad är en epidemi?",
          alt: [
            { t: "När en sjukdom snabbt sprids till många människor.", s: "ratt", f: "En epidemi innebär att en sjukdom snabbt sprids till många människor." },
            { t: "När en sjukdom sprids över stora delar av världen.", s: "fel", f: "Det kallas en pandemi. En epidemi innebär att en sjukdom snabbt sprids till många människor." },
            { t: "När en patogen tar sig in i kroppen och börjar föröka sig.", s: "fel", f: "Det kallas en infektion. En epidemi innebär att en sjukdom snabbt sprids till många människor." }]},
        {fraga: "Vad är en pandemi?",
          alt: [
            { t: "När en sjukdom sprids över stora delar av världen.", s: "ratt", f: "En pandemi innebär att en sjukdom sprids över stora delar av världen." },
            { t: "När en sjukdom snabbt sprids till många människor.", s: "fel", f: "Det beskriver en epidemi. En pandemi innebär att en sjukdom sprids över stora delar av världen." },
            { t: "När en patogen börjar föröka sig i kroppen.", s: "fel", f: "Det beskriver en infektion. En pandemi innebär att en sjukdom sprids över stora delar av världen." }]},
        {fraga: "Vad är skillnaden mellan en epidemi och en pandemi?",
          alt: [
            { t: "En epidemi sprids snabbt till många människor, medan en pandemi sprids över stora delar av världen.", s: "ratt", f: "Skillnaden handlar om hur långt sjukdomen sprids." },
            { t: "En epidemi orsakas av virus, medan en pandemi orsakas av bakterier.", s: "fel", f: "Skillnaden är inte vilken patogen som orsakar den. Skillnaden är hur långt sjukdomen sprids." },
            { t: "En epidemi är ett symptom, medan en pandemi är en infektion.", s: "fel", f: "Epidemi och pandemi beskriver hur långt en sjukdom sprids." }]},
        {fraga: "När kallas spridningen av en sjukdom för en pandemi?",
           alt: [
            { t: "När sjukdomen sprids över stora delar av världen.", s: "ratt", f: "Det är definitionen av en pandemi." },
            { t: "När sjukdomen snabbt sprids till många människor.", s: "fel", f: "Det är definitionen av en epidemi. Pandemi är när sjukdomen sprids över stora delar av världen." },
            { t: "När en person blir smittad.", s: "fel", f: "Det beskriver inte spridning över stora delar av världen. Pandemi är när sjukdomen sprids över stora delar av världen." }]},
        {fraga: "Vilket påstående om en epidemi stämmer?",
          alt: [
            { t: "En sjukdom sprids snabbt till många människor.", s: "ratt", f: "Det är vad en epidemi innebär." },
            { t: "En sjukdom sprids alltid över hela världen.", s: "fel", f: "Spridning över stora delar av världen kallas pandemi. Epidemi är när en sjukdom sprids snabbt till många människor, men inte stora delar av världen." },
            { t: "En patogen tar sig in i kroppen och börjar föröka sig.", s: "fel", f: "Det beskriver en infektion. Epidemi är när en sjukdom sprids snabbt till många människor, men inte stora delar av världen." }
          ]}]},
        
    { id: "smi-sjukdom-para", kapitel: "smitta", avsnitt: ["sjukdom"], titel: "Sjukdom och smitta – para ihop",
      typ: "para", nivaer: [0, 1],
      varianter: [
        { rubrik: "Para ihop begreppet med rätt förklaring.",
          par: [["Infektion", "En patogen tar sig in i kroppen och förökar sig"], ["Inkubationstid", "Tiden från att man blir smittad till att man blir sjuk"],
                ["Epidemi", "En sjukdom sprids snabbt till många människor"], ["Pandemi", "En sjukdom sprids över stora delar av världen"], ["Symptom", "Ett tecken på sjukdom, till exempel feber"]] }
      ] },

    { id: "smi-smitta-sortera", kapitel: "smitta", avsnitt: ["smittspridning"], titel: "Smittar eller smittar inte? – sortera",
      typ: "sortera", nivaer: [1],punkter:["pat-mik"],
      varianter: [
        { grupper: ["Kan smitta", "Smittar inte"],
          saker: [["Förkylning", 0], ["Influensa", 0], ["Malaria", 0], ["Halsfluss", 0], ["Diabetes", 1], ["Allergi", 1], ["Cancer", 1]] }
      ] },

    { id: "smi-smittvag-para", kapitel: "smitta", avsnitt: ["smittspridning"], titel: "Smittvägar – para ihop",
      typ: "para", nivaer: [0, 1, 2],punkter:["sprid-vag"],
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
      typ: "flerval", nivaer: [1, 2],punkter:{ 2: ["pat-ant"]},
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
      ] },
    { id: "smi-bast", kapitel: "smitta", avsnitt: ["sjukdom", "smittspridning"], titel: "Vad beskriver bäst? – smitta",
      typ: "flerval", nivaer: [2],
      varianter: [
        { fraga: "Vad beskriver bäst vad en infektion är?",
          alt: [ { t: "En patogen tar sig in i kroppen och förökar sig där", s: "ratt", f: "det är både att patogenen kommer in och att den förökar sig som gör det till en infektion." },
                 { t: "Man har feber", s: "delvis", f: "feber kan vara ett symptom på en infektion, men det beskriver inte vad en infektion är." },
                 { t: "Bakterier finns i kroppen", s: "delvis", f: "vi har alltid bakterier i kroppen – en infektion är när en patogen tar sig in och förökar sig." },
                 { t: "Man har fått en allergi", s: "fel", f: "en allergi smittar inte och är ingen infektion." } ] },
        { fraga: "Vad beskriver bäst varför handtvätt minskar smittspridning?",
          alt: [ { t: "Patogener på händerna tvättas bort innan de hinner föras vidare till munnen, näsan eller andra personer", s: "ratt", f: "handtvätt bryter smittvägen via händerna – både till dig själv och till andra." },
                 { t: "Händerna blir rena", s: "delvis", f: "stämmer, men förklarar inte varför det minskar smittspridningen." },
                 { t: "Tvål dödar bakterier", s: "delvis", f: "tvål hjälper till att få bort patogener, men svaret säger inte hur det stoppar smittan." },
                 { t: "Man blir immun mot sjukdomen", s: "fel", f: "immun blir man genom minnesceller – inte av att tvätta händerna." } ] },
        { fraga: "Vad beskriver bäst vad en pandemi är?",
          alt: [ { t: "En smittsam sjukdom som sprids över stora delar av världen", s: "ratt", f: "en pandemi är en epidemi som har spridits över flera länder och världsdelar." },
                 { t: "En sjukdom som många blir sjuka i", s: "delvis", f: "det gäller också en epidemi – det som gör det till en pandemi är att den sprids över världen." },
                 { t: "En sjukdom som orsakas av virus", s: "delvis", f: "många pandemier orsakas av virus, men digerdöden orsakades av en bakterie. Det avgörande är spridningen." },
                 { t: "En sjukdom som bara finns i ett land", s: "fel", f: "då är det ingen pandemi – en pandemi sprids över stora delar av världen." } ] }
      ] }
]);
