/* =====================================================================
   UPPGIFTER – Kroppens försvar
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
     id : unikt namn · kapitel : kapitlets id · avsnitt : avsnitt i texten
     nivaer : nivå [0]–[3] · nivaerPerArskurs : annan nivå per årskurs
     rullista : nivåer där eleven väljer i en rullista
   Avsnitt: oversikt, hud, inflammation, lymfsystemet, immunsvar, minne
   ===================================================================== */
Portal.uppgifter([

    { id: "for-oversikt-sortera", kapitel: "forsvar", avsnitt: ["oversikt"], titel: "Yttre, medfött eller förvärvat? – sortera",
      typ: "sortera", nivaer: [1, 2],
      varianter: [
        { grupper: ["Yttre försvar", "Medfött försvar", "Förvärvat försvar"],
          saker: [["Huden", 0], ["Slemhinnor", 0], ["Sur magsaft", 0], ["Inflammation", 1], ["Ätarceller", 1], ["Reagerar likadant mot alla mikrober", 1],
                  ["Antikroppar", 2], ["Minnesceller", 2], ["Känner igen en viss mikrob", 2]] }
      ] },

    { id: "for-oversikt-flerval", kapitel: "forsvar", avsnitt: ["oversikt"], titel: "Kroppens försvar – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad är kroppens inre försvar?",
          alt: [ { t: "Immunförsvaret", s: "ratt", f: "det inre försvaret bekämpar mikrober som har tagit sig in i kroppen." },
                 { t: "Huden", s: "fel", f: "huden är en del av det yttre försvaret." },
                 { t: "Slemhinnorna", s: "fel", f: "slemhinnorna är en del av det yttre försvaret." },
                 { t: "Vaccin", s: "fel", f: "vaccin tränar immunförsvaret, men det är inte kroppens eget försvar." } ] },
        { fraga: "Vad är skillnaden mellan det medfödda och det förvärvade försvaret?",
          alt: [ { t: "Det medfödda reagerar likadant mot alla mikrober – det förvärvade känner igen en viss mikrob", s: "ratt", f: "därför kallas de också ospecifikt och specifikt." },
                 { t: "Det medfödda finns i huden – det förvärvade i blodet", s: "fel", f: "båda är en del av det inre försvaret." },
                 { t: "Det förvärvade är snabbast", s: "fel", f: "det förvärvade tar några dagar första gången – det medfödda reagerar direkt." },
                 { t: "Det finns ingen skillnad", s: "fel", f: "det medfödda är ospecifikt, det förvärvade är specifikt." } ] }
      ] },

    { id: "for-ordning-para", kapitel: "forsvar", avsnitt: ["hud", "inflammation", "immunsvar"], titel: "Kroppens försvar i ordning – para ihop",
      typ: "para", nivaer: [0, 1, 2],
      varianter: [
        { rubrik: "Para ihop försvaret med vad det gör.",
          par: [["Huden och slemhinnorna", "Stänger ute mikroberna"], ["Ätarceller", "Äter upp mikrober och döda celler"],
                ["Antikroppar", "Fastnar på mikroberna och märker ut dem"], ["Minnesceller", "Kommer ihåg mikroben till nästa gång"]] }
      ] },

    { id: "for-hud-flerval", kapitel: "forsvar", avsnitt: ["hud", "inflammation"], titel: "Första försvaret – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vilket är kroppens första försvar mot mikrober?",
          alt: [ { t: "Huden och slemhinnorna", s: "ratt", f: "de stänger ute mikroberna innan de kommer in i kroppen." },
                 { t: "Antikropparna", s: "fel", f: "antikroppar bildas först när mikroberna redan har tagit sig in." },
                 { t: "Minnescellerna", s: "fel", f: "minnesceller bildas efter ett immunsvar." },
                 { t: "Vaccin", s: "fel", f: "vaccin är något vi tar – inte kroppens eget första försvar." } ] },
        { fraga: "Ett sår blir rött, svullet, varmt och ömt. Vad kallas det?",
          alt: [ { t: "Inflammation", s: "ratt", f: "mer blod strömmar till med vita blodkroppar som bekämpar mikroberna." },
                 { t: "Allergi", s: "fel", f: "allergi är när immunförsvaret överreagerar mot något ofarligt." },
                 { t: "Vaccination", s: "fel", f: "vaccination tränar immunförsvaret." },
                 { t: "Resistens", s: "fel", f: "resistens är när bakterier tål antibiotika." } ] }
      ] },

    { id: "for-lymf-text", kapitel: "forsvar", avsnitt: ["lymfsystemet"], titel: "Lymfsystemet – fyll i",
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["lymfa", "blod", "lymfknutorna", "vita blodkroppar", "röda blodkroppar", "vätskebalansen"],
      varianter: [
        { text: "Lymfsystemet transporterar en klar vätska som kallas [lymfa]." },
        { text: "I [lymfknutorna|lymfknutor] samlas [vita blodkroppar] som kontrollerar lymfan." },
        { text: "Lymfsystemet hjälper till att hålla [vätskebalansen] i kroppen." }
      ] },

    { id: "for-organ-para", kapitel: "forsvar", avsnitt: ["lymfsystemet"], titel: "Immunförsvarets organ – para ihop",
      typ: "para", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] },
      varianter: [
        { rubrik: "Para ihop organet med vad det gör.",
          par: [["Benmärgen", "Tillverkar vita blodkroppar"], ["Mjälten", "Filtrerar blodet"], ["Tonsillerna", "Fångar mikrober som kommer in genom munnen"],
                ["Brässen", "Här tränas T-cellerna"]] }
      ] },

    { id: "for-immunsvar-text", kapitel: "forsvar", avsnitt: ["immunsvar"], titel: "Immunsvaret – fyll i",
      typ: "lucktext", nivaer: [1], rullista: [1],
      ordlista: ["ätarceller", "antikroppar", "minnesceller", "röda blodkroppar", "antibiotika"],
      varianter: [
        { text: "Först äter [ätarceller|ätarcellerna] upp mikroberna. Sedan tillverkas [antikroppar] som märker ut dem. Till sist bildas [minnesceller] som kommer ihåg mikroben." }
      ] },

    { id: "for-immunsvar-flerval", kapitel: "forsvar", avsnitt: ["immunsvar", "minne"], titel: "Immunsvar och immunminne – välj rätt",
      typ: "flerval", nivaer: [1, 2],
      varianter: [
        { fraga: "Varför blir man oftast inte sjuk av vattkoppor en andra gång?",
          alt: [ { t: "Minnesceller känner igen viruset och försvaret slår till direkt", s: "ratt", f: "man har blivit immun." },
                 { t: "Viruset finns inte kvar i världen", s: "fel", f: "vattkoppor finns fortfarande – men kroppen känner igen viruset." },
                 { t: "Huden har blivit tjockare", s: "fel", f: "det är immunminnet – minnescellerna – som skyddar." },
                 { t: "Antibiotika skyddar en", s: "fel", f: "vattkoppor är ett virus, och antibiotika fungerar inte mot virus." } ] },
        { fraga: "Varför hinner man ofta bli sjuk första gången man smittas av en ny mikrob?",
          alt: [ { t: "Det tar några dagar för kroppen att tillverka rätt antikroppar", s: "ratt", f: "andra gången går det mycket snabbare tack vare minnescellerna." },
                 { t: "Kroppen har inga vita blodkroppar från början", s: "fel", f: "vita blodkroppar finns hela tiden – men rätt antikroppar måste tillverkas." },
                 { t: "Huden släpper alltid in mikrober första gången", s: "fel", f: "huden fungerar lika bra varje gång." },
                 { t: "Minnescellerna är trötta", s: "fel", f: "första gången finns det inga minnesceller mot just den mikroben." } ] },
        { fraga: "Varför kan man bli förkyld varje år?",
          alt: [ { t: "Förkylningsvirus förändrar sig, så minnescellerna känner inte igen dem", s: "ratt", f: "och det finns dessutom hundratals olika förkylningsvirus." },
                 { t: "Man blir aldrig immun mot något", s: "fel", f: "mot många sjukdomar blir man immun – men förkylningsvirus förändras." },
                 { t: "Förkylning orsakas av bakterier som blivit resistenta", s: "fel", f: "förkylning orsakas av virus." },
                 { t: "Minnesceller finns bara hos barn", s: "fel", f: "minnesceller finns hos alla." } ] }
      ] },

    { id: "for-celler-para", kapitel: "forsvar", avsnitt: ["immunsvar"], titel: "Immunsvarets celler – para ihop",
      typ: "para", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] },
      varianter: [
        { rubrik: "Para ihop cellen med vad den gör.",
          par: [["Makrofager (ätarceller)", "Äter mikroben och visar upp antigener"], ["T-hjälparceller", "Skickar signaler som startar försvaret"],
                ["B-celler", "Blir celler som tillverkar antikroppar"], ["T-mördarceller", "Förstör kroppens infekterade celler"], ["Minnesceller", "Kommer ihåg mikroben"]] }
      ] },

    { id: "for-sf", kapitel: "forsvar", titel: "Kroppens försvar – sant eller falskt",
      typ: "santfalskt", nivaer: [1, 2],
      varianter: [
        { pst: [["Huden är kroppens första försvar.", true], ["Ätarceller tillverkar antikroppar.", false], ["Minnesceller gör att man kan bli immun.", true],
                ["Lymfknutorna kan svullna när man är sjuk.", true], ["Det förvärvade (specifika) immunförsvaret reagerar likadant mot alla mikrober.", false]] }
      ] }
]);
