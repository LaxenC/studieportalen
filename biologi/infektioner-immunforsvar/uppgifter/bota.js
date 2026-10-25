/* =====================================================================
   UPPGIFTER – Bota och förebygga
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
     id : unikt namn · kapitel : kapitlets id · avsnitt : avsnitt i texten
     nivaer : nivå [0]–[3] · nivaerPerArskurs : annan nivå per årskurs
     rullista : nivåer där eleven väljer i en rullista
   Avsnitt: vaccin, antibiotika, starka
   ===================================================================== */
Portal.uppgifter([

    { id: "bot-vaccin-text", kapitel: "bota", avsnitt: ["vaccin"], titel: "Vaccin – fyll i",
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["immunförsvaret", "minnesceller", "antikroppar", "ofarliga", "farliga", "sjuk", "immun"],
      varianter: [
        { text: "Ett vaccin tränar [immunförsvaret] att bekämpa en sjukdom utan att man blir [sjuk]." },
        { text: "Vaccinet innehåller [ofarliga] delar av patogenen. Kroppen tillverkar [antikroppar] och bildar [minnesceller]." },
        { text: "Efter vaccinationen har man blivit [immun] mot sjukdomen." }
      ] },

    { id: "bot-vad-flerval", kapitel: "bota", avsnitt: ["vaccin", "antibiotika"], titel: "Vaccin och antibiotika – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad gör ett vaccin?",
          alt: [ { t: "Tränar immunförsvaret att känna igen en sjukdom", s: "ratt", f: "då är kroppen beredd om den riktiga smittan kommer." },
                 { t: "Dödar bakterier som redan finns i kroppen", s: "fel", f: "det gör antibiotika." },
                 { t: "Gör att man blir sjuk lite grann", s: "fel", f: "vaccinet innehåller ofarliga delar – man ska inte bli sjuk." },
                 { t: "Botar förkylning", s: "fel", f: "vaccin förebygger sjukdom – det botar inte." } ] },
        { fraga: "Vad fungerar antibiotika mot?",
          alt: [ { t: "Bakterier", s: "ratt", f: "antibiotika dödar bakterier eller hindrar dem från att växa." },
                 { t: "Virus", s: "fel", f: "antibiotika fungerar inte mot virus." },
                 { t: "Allergi", s: "fel", f: "allergi behandlas med andra mediciner." },
                 { t: "Alla sjukdomar", s: "fel", f: "bara sjukdomar som orsakas av bakterier." } ] }
      ] },

    { id: "bot-vaccin-steg", kapitel: "bota", avsnitt: ["vaccin"], titel: "Så fungerar ett vaccin – para ihop",
      typ: "para", nivaer: [1, 2],
      varianter: [
        { rubrik: "Para ihop steget med vad som händer.",
          par: [["Steg 1", "Ofarliga delar av patogenen sprutas in"], ["Steg 2", "Immunförsvaret tillverkar antikroppar"],
                ["Steg 3", "Minnesceller bildas"], ["Steg 4", "Den riktiga smittan känns igen direkt"]] }
      ] },

    { id: "bot-sortera", kapitel: "bota", avsnitt: ["vaccin", "antibiotika"], titel: "Vaccin eller antibiotika? – sortera",
      typ: "sortera", nivaer: [1, 2],
      varianter: [
        { grupper: ["Vaccin", "Antibiotika"],
          saker: [["Tas innan man blivit sjuk", 0], ["Tränar immunförsvaret", 0], ["Fungerar mot både virus och bakterier", 0],
                  ["Tas när man redan är sjuk", 1], ["Dödar bakterier", 1], ["Bakterier kan bli resistenta", 1]] }
      ] },

    { id: "bot-antibiotika-flerval", kapitel: "bota", avsnitt: ["antibiotika"], titel: "Antibiotika och resistens – välj rätt",
      typ: "flerval", nivaer: [1, 2],
      varianter: [
        { fraga: "Vad betyder det att bakterier har blivit resistenta?",
          alt: [ { t: "Antibiotika biter inte längre på dem", s: "ratt", f: "bakterierna har förändrats så att de överlever läkemedlet." },
                 { t: "De har blivit ofarliga", s: "fel", f: "resistenta bakterier kan vara mycket farliga, eftersom de är svåra att behandla." },
                 { t: "De har blivit virus", s: "fel", f: "bakterier blir aldrig virus." },
                 { t: "Kroppen är immun mot dem", s: "fel", f: "resistens handlar om bakterierna och antibiotikan – inte om kroppens immunitet." } ] },
        { fraga: "Hur kan vi minska problemet med resistenta bakterier?",
          alt: [ { t: "Bara använda antibiotika när det verkligen behövs", s: "ratt", f: "ju mer antibiotika används, desto fler bakterier hinner bli resistenta." },
                 { t: "Ta antibiotika mot förkylning", s: "fel", f: "antibiotika fungerar inte mot virus och ökar bara risken för resistens." },
                 { t: "Sluta ta antibiotikakuren när man mår bättre", s: "fel", f: "då kan de tåligaste bakterierna överleva. Man ska ta hela kuren." },
                 { t: "Använda mer antibiotika", s: "fel", f: "mer antibiotika ger fler resistenta bakterier." } ] }
      ] },

    { id: "bot-forskare", kapitel: "bota", avsnitt: ["vaccin", "antibiotika"], titel: "Forskarna bakom – para ihop",
      typ: "para", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] },
      varianter: [
        { rubrik: "Para ihop forskaren med upptäckten.",
          par: [["Edward Jenner", "Det första vaccinet – mot smittkoppor"], ["Alexander Fleming", "Penicillinet – det första antibiotikumet"]] }
      ] },

    { id: "bot-sf", kapitel: "bota", titel: "Bota och förebygga – sant eller falskt",
      typ: "santfalskt", nivaer: [1, 2],
      varianter: [
        { pst: [["Antibiotika fungerar mot virus.", false], ["Ett vaccin kan skydda mot sjukdomar orsakade av både virus och bakterier.", true],
                ["Man ska sluta ta antibiotika så fort man mår bättre.", false], ["Om många är vaccinerade skyddas även de som inte kan vaccinera sig.", true],
                ["Antibiotika dödar även kroppens nyttiga bakterier.", true]] }
      ] },
    { id: "bot-starka", kapitel: "bota", avsnitt: ["starka"], titel: "Stärk immunförsvaret – sortera",
      typ: "sortera", nivaer: [0, 1],
      varianter: [
        { grupper: ["Hjälper immunförsvaret", "Hjälper inte"],
          saker: [["Sova ordentligt", 0], ["Äta varierad mat", 0], ["Röra på sig", 0], ["Vaccinera sig", 0], ["Tvätta händerna", 0],
                  ["Sova för lite", 1], ["Ta antibiotika mot förkylning", 1], ["Sitta still hela dagarna", 1]] }
      ] },
    { id: "bot-resistens-hur", kapitel: "bota", avsnitt: ["antibiotika"], titel: "Hur blir bakterier resistenta? – välj rätt",
      typ: "flerval", nivaer: [1, 2],
      varianter: [
        { fraga: "Hur blir bakterier resistenta mot antibiotika?",
          alt: [ { t: "De känsliga bakterierna dör, men några tål antibiotikan, överlever och förökar sig", s: "ratt", f: "efter ett tag består nästan alla bakterier av sådana som tål antibiotikan." },
                 { t: "Bakterierna vänjer sig vid antibiotikan, precis som man vänjer sig vid kyla", s: "fel", f: "en enskild bakterie vänjer sig inte – det är de som redan tål antibiotikan som överlever och förökar sig." },
                 { t: "Människan blir resistent och då slutar antibiotikan fungera", s: "fel", f: "det är bakterierna som blir resistenta, inte människan." },
                 { t: "Antibiotikan gör bakterierna starkare", s: "fel", f: "antibiotikan dödar de känsliga bakterierna – kvar blir de som redan tålde den." } ] },
        { fraga: "Varför ökar risken för resistens om man använder mycket antibiotika?",
          alt: [ { t: "Fler gånger får de bakterier som tål antibiotikan överleva och föröka sig", s: "ratt", f: "ju oftare antibiotika används, desto fler resistenta bakterier blir det." },
                 { t: "Antibiotikan tar slut i kroppen", s: "fel", f: "det handlar om vilka bakterier som överlever och förökar sig." },
                 { t: "Virus blir resistenta", s: "fel", f: "antibiotika fungerar inte på virus – det är bakterier som blir resistenta." },
                 { t: "Immunförsvaret slutar fungera", s: "fel", f: "det är bakterierna som förändras, inte immunförsvaret." } ] }
      ] },

    { id: "fk-antibiotika-mojlighet-risk", kapitel: "bota", avsnitt: ["antibiotika"], titel: "Förklara: möjlighet och risk med antibiotika",
      typ: "forklara", nivaerPerArskurs: { 7: [1, 2], 8: [2], 9: [2] }, rullista: [1],
      varianter: [
        { fraga: "Ge en möjlighet och en risk med att vi använder antibiotika. Förklara vad de betyder för människors liv.",
          begrepp: ["bakterie", "bota|botas|behandla", "rädda|räddat|överlev|dö", "resistent|resistens", "farlig|fungera"],
          modell: "En **möjlighet** är att antibiotika kan **bota** infektioner som orsakas av **bakterier**, till exempel lunginflammation. Förr dog många av sådana infektioner – i dag **överlever** de flesta. En **risk** är att bakterierna blir **resistenta** om antibiotika används för mycket. Då slutar medicinen att **fungera**, och vanliga infektioner kan bli **farliga** igen." }
      ] },

    { id: "fk-vaccin-betydelse", kapitel: "bota", avsnitt: ["vaccin"], titel: "Förklara: vad har vaccin betytt för människors liv?",
      typ: "forklara", nivaerPerArskurs: { 7: [1, 2], 8: [2], 9: [2] }, rullista: [1],
      varianter: [
        { fraga: "Vad har vaccin betytt för människors liv? Förklara.",
          begrepp: ["minnesceller|immun|skydd|skyddar", "sjukdom", "dö|död|rädda|överlev", "utrot|smittkoppor", "flockimmunitet|sprids|spridas"],
          modell: "Ett vaccin gör att kroppen bildar **minnesceller**, så att man blir **immun** utan att först bli sjuk. Därför är **sjukdomar** som förr **dödade** många barn, till exempel mässling och polio, i dag ovanliga. **Smittkoppor** har till och med **utrotats** helt. När många är vaccinerade **sprids** sjukdomen dåligt – **flockimmunitet** – och då skyddas även de som inte kan vaccinera sig." }
      ] }
]);
