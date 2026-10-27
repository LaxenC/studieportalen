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
      punkter: ["forsvar-yttre", "forsvar-inre-del"],
      typ: "sortera", nivaer: [1, 2],
      varianter: [
        { grupper: ["Yttre försvar", "Medfött försvar", "Förvärvat försvar"],
          saker: [["Huden", 0], ["Slemhinnor", 0], ["Sur magsaft", 0], ["Inflammation", 1], ["Ätarceller", 1], ["Reagerar likadant mot alla patogener", 1],
                  ["Antikroppar", 2], ["Minnesceller", 2], ["Känner igen en viss patogen", 2]] }
      ] },

    { id: "for-oversikt-flerval", kapitel: "forsvar", avsnitt: ["oversikt"], titel: "Kroppens försvar – välj rätt",
      punkter: {0: ["forsvar-inre"], 1: ["forsvar-inre-del"]},
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad är kroppens försvar?",
          alt: [ { t: "Immunförsvaret", s: "ratt", f: "Kroppen försvar, immunförsvaret, hindrar patogener från att ta sig in i kroppen och bekämpar dom om de tar sig in." },
                 { t: "Huden", s: "fel", f: "huden är en del av det yttre försvaret." },
                 { t: "Slemhinnorna", s: "fel", f: "slemhinnorna är en del av det yttre försvaret." },
                 { t: "Vaccin", s: "fel", f: "vaccin tränar immunförsvaret, men det är inte kroppens eget försvar." } ] },
        { fraga: "Vad är skillnaden mellan det medfödda och det förvärvade försvaret?",
          alt: [ { t: "Det medfödda reagerar likadant mot alla patogener – det förvärvade känner igen en viss patogen", s: "ratt", f: "därför kallas de också ospecifikt och specifikt." },
                 { t: "Det medfödda finns i huden – det förvärvade i blodet", s: "fel", f: "båda är en del av det inre försvaret." },
                 { t: "Det förvärvade är snabbast", s: "fel", f: "det förvärvade tar några dagar första gången – det medfödda reagerar direkt." },
                 { t: "Det finns ingen skillnad", s: "fel", f: "det medfödda är ospecifikt, det förvärvade är specifikt." } ] }
      ] },

    { id: "for-ordning-para", kapitel: "forsvar", avsnitt: ["hud", "inflammation", "immunsvar"], titel: "Kroppens försvar i ordning – para ihop",
      typ: "para", nivaer: [0, 1, 2],
      varianter: [
        { rubrik: "Para ihop försvaret med vad det gör.",
          par: [["Huden och slemhinnorna", "Stänger ute patogenerna"], ["Ätarceller", "Äter upp patogener."],
                ["Antikroppar", "Fastnar på patogenerna och märker ut dem och hindrar dom från att ta sin in i cellen"], ["Minnesceller", "Kommer ihåg patogenen till nästa gång"]] }
      ] },

    { id: "for-hud-flerval", kapitel: "forsvar", avsnitt: ["hud", "inflammation"], titel: "Första försvaret – välj rätt",
      punkter: {0: ["forsvar-ytt-ex"], 1: ["forsvar-fodd-infl"]},
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vilket är kroppens första försvar mot patogener?",
          alt: [ { t: "Huden och slemhinnorna", s: "ratt", f: "de stänger ute patogenerna innan de kommer in i kroppen." },
                 { t: "Antikropparna", s: "fel", f: "antikroppar bildas först när patogenerna redan har tagit sig in." },
                 { t: "Minnescellerna", s: "fel", f: "minnesceller bildas efter ett immunsvar." },
                 { t: "Vaccin", s: "fel", f: "vaccin är något vi tar – inte kroppens eget första försvar." } ] },
        { fraga: "Ett sår blir rött, svullet, varmt och ömt. Vad kallas det?",
          alt: [ { t: "Inflammation", s: "ratt", f: "mer blod strömmar till med vita blodkroppar som bekämpar patogenerna." },
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
          par: [["Benmärgen", "Tillverkar vita blodkroppar"], ["Mjälten", "Filtrerar blodet"], ["Tonsillerna", "Fångar patogener som kommer in genom munnen"],
                ["Brässen", "Här tränas T-cellerna"]] }
      ] },

    { id: "for-immunsvar-text", kapitel: "forsvar", avsnitt: ["immunsvar"], titel: "Immunsvaret – fyll i",
      typ: "lucktext", nivaer: [1], rullista: [1],
      ordlista: ["ätarceller", "antikroppar", "minnesceller", "röda blodkroppar", "antibiotika"],
      varianter: [
        { text: "Först äter [ätarceller|ätarcellerna] upp patogenerna. Sedan tillverkas [antikroppar] som hindrar patogener från att ta sig in i celler. Till sist bildas [minnesceller] som kommer ihåg patogenen." }
      ] },

    { id: "for-immunsvar-flerval", kapitel: "forsvar", avsnitt: ["immunsvar", "minne"], titel: "Immunsvar och immunminne – välj rätt",
      typ: "flerval", nivaer: [1, 2],
      varianter: [
        { fraga: "Varför blir man oftast inte sjuk av vattkoppor en andra gång?",
          alt: [ { t: "Minnesceller känner igen viruset och försvaret slår till direkt", s: "ratt", f: "man har blivit immun." },
                 { t: "Viruset finns inte kvar i världen", s: "fel", f: "vattkoppor finns fortfarande – men kroppen känner igen viruset." },
                 { t: "Huden har blivit tjockare", s: "fel", f: "det är immunminnet – minnescellerna – som skyddar." },
                 { t: "Antibiotika skyddar en", s: "fel", f: "vattkoppor är ett virus, och antibiotika fungerar inte mot virus." } ] },
        { fraga: "Varför hinner man ofta bli sjuk första gången man smittas av en ny patogen?",
          alt: [ { t: "Det tar några dagar för kroppen att tillverka rätt antikroppar", s: "ratt", f: "andra gången går det mycket snabbare tack vare minnescellerna." },
                 { t: "Kroppen har inga vita blodkroppar från början", s: "fel", f: "vita blodkroppar finns hela tiden – men rätt antikroppar måste tillverkas." },
                 { t: "Huden släpper alltid in patogener första gången", s: "fel", f: "huden fungerar lika bra varje gång." },
                 { t: "Minnescellerna är trötta", s: "fel", f: "första gången finns det inga minnesceller mot just den patogenen." } ] },
        { fraga: "Varför kan man bli förkyld varje år?",
          alt: [ { t: "Förkylningsvirus förändrar sig, så minnescellerna känner inte igen dem", s: "ratt", f: "och det finns dessutom hundratals olika förkylningsvirus." },
                 { t: "Man blir aldrig immun mot något", s: "fel", f: "mot många sjukdomar blir man immun – men förkylningsvirus förändras." },
                 { t: "Förkylning orsakas av bakterier som blivit resistenta", s: "fel", f: "förkylning orsakas av virus." },
                 { t: "Minnesceller finns bara hos barn", s: "fel", f: "minnesceller finns hos alla." } ] }
      ] },

    { id: "for-celler-para", kapitel: "forsvar", avsnitt: ["immunsvar"], titel: "Immunsvarets celler – para ihop",
      punkter: ["forsvar-spec-detalj"],
      typ: "para", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] },
      varianter: [
        { rubrik: "Para ihop cellen med vad den gör.",
          par: [["Makrofager (ätarceller)", "Äter patogenen och visar upp antigener"], ["T-hjälparceller", "Skickar signaler som startar försvaret"],
                ["B-celler", "Blir celler som tillverkar antikroppar"], ["T-mördarceller", "Förstör kroppens infekterade celler"], ["Minnesceller", "Kommer ihåg patogenen"]] }
      ] },

    { id: "for-sf", kapitel: "forsvar", titel: "Kroppens försvar – sant eller falskt",
      typ: "santfalskt", nivaer: [1, 2],
      varianter: [
        { pst: [["Huden är kroppens första försvar.", true], ["Ätarceller tillverkar antikroppar.", false], ["Minnesceller gör att man kan bli immun.", true],
                ["Lymfknutorna kan svullna när man är sjuk.", true], ["Det förvärvade (specifika) immunförsvaret reagerar likadant mot alla patogener.", false]] }
      ] },
    { id: "for-feber", kapitel: "forsvar", avsnitt: ["inflammation"], titel: "Inflammation och feber – välj rätt",
      punkter: ["forsvar-fodd-infl"],
      typ: "flerval", nivaer: [1, 2],
      varianter: [
        { fraga: "Varför kan man få feber när man är sjuk?",
          alt: [ { t: "Ämnen från en kraftig inflammation påverkar hjärnans temperaturcentrum", s: "ratt", f: "då höjer hjärnan kroppens temperatur." },
                 { t: "Patogenerna värmer upp kroppen", s: "fel", f: "det är kroppen själv som höjer temperaturen – styrt av hjärnan." },
                 { t: "Antikropparna blir varma när de arbetar", s: "fel", f: "febern styrs av hjärnans temperaturcentrum." },
                 { t: "Huden släpper inte ut värmen", s: "fel", f: "febern styrs av hjärnans temperaturcentrum." } ] },
        { fraga: "Du får en sticka i fingret. Det blir rött och svullet. Vad stämmer?",
          alt: [ { t: "Det är en inflammation – den kan komma även av en skada", s: "ratt", f: "inflammation startar både vid infektioner och vid skador." },
                 { t: "Det är omöjligt – inflammation kommer bara av patogener", s: "fel", f: "även skador ger inflammation." },
                 { t: "Det är minnesceller som arbetar", s: "fel", f: "inflammationen hör till det medfödda försvaret." },
                 { t: "Det är en allergi", s: "fel", f: "rodnad och svullnad vid en skada är en inflammation." } ] }
      ] },
    { id: "for-fyra-steg", kapitel: "forsvar", avsnitt: ["immunsvar"], titel: "Upptäcka, larma, angripa, minnas – para ihop",
      punkter: ["forsvar-spec-steg"],
      typ: "para", nivaer: [0, 1], iOrdning: true,
      varianter: [
        { rubrik: "Para ihop steget i immunsvaret med vad som händer.",
          par: [["1. Upptäcka", "Ätarceller äter patogenen och visar upp antigener"], ["2. Larma", "Försvaret känner igen antigenerna och larmar"],
                ["3. Angripa", "Antikroppar bildas och hindrar patogener från att ta sig in i celler"], ["4. Minnas", "Minnesceller kommer ihåg patogenen till nästa gång"]] }
      ] },
    { id: "for-bast", kapitel: "forsvar", avsnitt: ["oversikt", "inflammation", "immunsvar", "minne"], titel: "Vad beskriver bäst? – kroppens försvar",
      typ: "flerval", nivaer: [2],
      varianter: [
        { fraga: "Vad beskriver bäst vad antikroppar gör?",
          alt: [ { t: "De fastnar på en viss patogen, och hindrar den från att ta sig in i celler. De märker också ut patogenen så att resten av försvaret känner igen den.", s: "ratt", f: "antikroppar passar bara mot en viss patogen och hjälper resten av försvaret att hitta den." },
                 { t: "De bekämpar patogener", s: "delvis", f: "stämmer, men säger inte hur – de fastnar på och märker ut patogenen." },
                 { t: "De bildas av B-celler", s: "delvis", f: "stämmer, men beskriver var de kommer ifrån – inte vad de gör." },
                 { t: "De äter upp patogenerna", s: "fel", f: "det är ätarcellerna som äter upp patogenerna – antikropparna märker ut dem och förhindrar att de tar sig in i cellen." } ] },
        { fraga: "Vad beskriver bäst varför man blir immun mot vattkoppor?",
          alt: [ { t: "Minnesceller finns kvar och känner igen viruset, så att försvaret går så snabbt att man inte blir sjuk igen", s: "ratt", f: "minnescellerna gör att antikroppar tillverkas direkt nästa gång." },
                 { t: "Kroppen har redan haft sjukdomen", s: "delvis", f: "stämmer, men förklarar inte vad det är i kroppen som gör att man inte blir sjuk igen." },
                 { t: "Man har antikroppar mot vattkoppor", s: "delvis", f: "nära – men det är minnescellerna som gör att antikroppar snabbt kan tillverkas igen." },
                 { t: "Vattkoppsviruset dör ut efter en tid", s: "fel", f: "viruset finns kvar i världen – det är kroppens minne som skyddar." } ] },
        { fraga: "Vad beskriver bäst vad som händer vid en inflammation?",
          alt: [ { t: "Mer blod strömmar till området med vita blodkroppar som bekämpar patogener och städar undan skadan – därför blir det rött, varmt och svullet", s: "ratt", f: "inflammation är det medfödda försvarets snabba reaktion." },
                 { t: "Det blir rött och svullet", s: "delvis", f: "det är tecknen på inflammation, men inte vad som händer i kroppen." },
                 { t: "Vita blodkroppar kommer till området", s: "delvis", f: "stämmer, men förklarar inte varför det blir rött, varmt och svullet." },
                 { t: "Antikroppar tillverkas för första gången", s: "fel", f: "antikroppar hör till det förvärvade försvaret – inflammationen är medfödd." } ] }
      ] },

    { id: "for-forkyld-flerval", kapitel: "forsvar", avsnitt: ["minne"], titel: "Varför blir man förkyld igen? – välj rätt",
      punkter: ["forsvar-imm-lura"],
      typ: "flerval", nivaer: [1, 2],
      varianter: [
        { fraga: "Varför kan man bli förkyld flera gånger, fast kroppen har minnesceller?",
          alt: [ { t: "Förkylningsviruset förändrar sig, så minnescellerna känner inte igen det nästa gång", s: "ratt", f: "ett förändrat virus ser nytt ut för immunförsvaret." },
                 { t: "Det finns många olika förkylningsvirus", s: "delvis", f: "det stämmer också – men det viktiga här är att virusen förändrar sig hela tiden." },
                 { t: "Minnescellerna försvinner efter en vecka", s: "fel", f: "minnesceller kan finnas kvar i många år – problemet är att viruset har förändrats." },
                 { t: "Man har tagit för lite antibiotika", s: "fel", f: "antibiotika fungerar inte mot virus." } ] },
        { fraga: "Mot vattkoppor blir man immun hela livet, men inte mot förkylning. Vad beskriver bäst varför?",
          alt: [ { t: "Förkylningsvirus förändrar sig hela tiden – vattkoppsviruset gör det inte på samma sätt", s: "ratt", f: "minnescellerna känner igen vattkoppsviruset, men inte ett förkylningsvirus som har förändrats." },
                 { t: "Förkylning är en lindrigare sjukdom", s: "delvis", f: "stämmer, men förklarar inte varför man kan bli sjuk igen." },
                 { t: "Vattkoppor orsakas av bakterier", s: "fel", f: "vattkoppor orsakas av ett virus." },
                 { t: "Man får bara minnesceller mot barnsjukdomar", s: "fel", f: "minnesceller bildas mot alla patogener kroppen har bekämpat." } ] }
      ] },

    { id: "for-forkyld-text", kapitel: "forsvar", avsnitt: ["minne"], titel: "Varför blir man förkyld igen? – fyll i",
      punkter: ["forsvar-imm-lura"],
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["förändrar", "minnescellerna", "förkyld", "antibiotikan", "växer", "immun"],
      varianter: [
        { text: "Förkylningsvirus [förändrar|förändras|ändrar] sig hela tiden. Då känner [minnescellerna|minnesceller|immunförsvaret] inte igen viruset, och därför kan man bli [förkyld|sjuk] igen och igen." }
      ] },
    { id: "lar-ovs-flerval", kapitel: "forsvar", avsnitt: ["oversikt"], titel: "Översikt – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad är immunförsvaret?", punkter: ["forsvar-imm"],
          alt: [ { t: "Kroppens försvar mot patogener", s: "ratt", f: "immunförsvaret bekämpar patogener som har tagit sig in i kroppen." },
                 { t: "Ett läkemedel mot bakterier", s: "fel", f: "det är antibiotika." },
                 { t: "En sorts vaccin", s: "fel", f: "vaccin tränar immunförsvaret, men det är inte immunförsvaret." },
                 { t: "Bakterierna i tarmen", s: "fel", f: "det är en del av mikrobiomet." } ] },
        { fraga: "Vad hör till det yttre försvaret?", punkter: ["forsvar-yttre"],
          alt: [ { t: "Huden och slemhinnorna", s: "ratt", f: "de stänger ute patogenerna." },
                 { t: "Antikroppar", s: "fel", f: "antikroppar hör till det inre försvaret." },
                 { t: "Minnesceller", s: "fel", f: "minnesceller hör till det inre, förvärvade försvaret." },
                 { t: "Ätarceller", s: "fel", f: "ätarceller hör till det inre, medfödda försvaret." } ] },
        { fraga: "Vilka två delar delas immunförsvaret in i?", punkter: ["forsvar-inre"],
          alt: [ { t: "Det medfödda och det förvärvade försvaret", s: "ratt", f: "det medfödda kallas också ospecifikt och det förvärvade specifikt." },
                 { t: "Det yttre och det inre försvaret", s: "delvis", f: "så delas kroppens hela försvar in – immunförsvaret är det inre försvaret, och det delas in i medfött och förvärvat." },
                 { t: "Bakterier och virus", s: "fel", f: "det är patogener, inte delar av försvaret." },
                 { t: "Vaccin och antibiotika", s: "fel", f: "det är läkemedel, inte delar av försvaret." } ] },
        { fraga: "Vad gör det förvärvade försvaret som det medfödda inte gör?", punkter: ["forsvar-inre-del"],
          alt: [ { t: "Det känner igen en viss patogen", s: "ratt", f: "det medfödda reagerar likadant mot alla patogener." },
                 { t: "Det reagerar på patogener", s: "delvis", f: "det gör båda – skillnaden är att det förvärvade känner igen en viss patogen." },
                 { t: "Det stänger ute patogenerna", s: "fel", f: "det gör det yttre försvaret." },
                 { t: "Det finns redan när vi föds", s: "fel", f: "det gäller det medfödda försvaret." } ] }
      ] },
    { id: "lar-ovs-sf", kapitel: "forsvar", avsnitt: ["oversikt"], titel: "Översikt – sant eller falskt",
      typ: "santfalskt", nivaer: [0, 1], punkter: ["forsvar-imm", "forsvar-yttre", "forsvar-inre", "forsvar-inre-del"],
      varianter: [
        { pst: [["Immunförsvaret är kroppens försvar mot patogener.", true], ["Huden hör till det yttre försvaret.", true], ["Det förvärvade försvaret kallas också det specifika försvaret.", true], ["Det medfödda försvaret känner igen en viss patogen.", false], ["Det inre försvaret stänger ute patogenerna.", false]] }
      ] },
    { id: "lar-hud-flerval", kapitel: "forsvar", avsnitt: ["hud"], titel: "Yttre försvar – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Hur skyddar huden kroppen mot patogener?", punkter: ["forsvar-ytt-satt"],
          alt: [ { t: "Den är en tät mur som stänger ute patogenerna", s: "ratt", f: "patogener har svårt att ta sig igenom huden." },
                 { t: "Nyttiga bakterier på huden konkurrerar med de skadliga", s: "delvis", f: "det stämmer också – men det viktigaste är att huden är en tät mur." },
                 { t: "Den tillverkar antikroppar", s: "fel", f: "antikroppar hör till det inre försvaret." },
                 { t: "Den äter upp patogenerna", s: "fel", f: "det gör ätarcellerna." } ] },
        { fraga: "Vilka två delar är kroppens första försvar?", punkter: ["forsvar-ytt-ex"],
          alt: [ { t: "Huden och slemhinnorna", s: "ratt", f: "det är det yttre försvaret." },
                 { t: "Antikroppar och minnesceller", s: "fel", f: "de hör till det inre försvaret." },
                 { t: "Lymfknutor och blod", s: "fel", f: "de hör till det inre försvaret." },
                 { t: "Ätarceller och feber", s: "fel", f: "de hör till det medfödda inre försvaret." } ] },
        { fraga: "Varför räknas magsaften till det yttre försvaret, fast den finns inuti kroppen?", punkter: ["forsvar-ytt-satt"],
          alt: [ { t: "Den dödar patogener i maten innan de tar sig vidare in i kroppen", s: "ratt", f: "den stoppar patogenerna innan de kommer in i kroppen." },
                 { t: "Den är sur", s: "delvis", f: "stämmer – men förklarar inte varför den räknas som yttre försvar." },
                 { t: "Den tillverkar vita blodkroppar", s: "fel", f: "magsaften är sur, men den tillverkar inga försvarsceller." },
                 { t: "Den finns i huden", s: "fel", f: "magsaften finns i magsäcken." } ] }
      ] },
    { id: "lar-hud-para", kapitel: "forsvar", avsnitt: ["hud"], titel: "Yttre försvar – para ihop",
      typ: "para", nivaer: [1], punkter: ["forsvar-ytt-ex", "forsvar-ytt-satt"],
      varianter: [
        { rubrik: "Para ihop delen av det yttre försvaret med vad den gör.",
          par: [["Huden", "En tät mur som patogener har svårt att ta sig igenom"], ["Slemhinnor", "Slem som fångar upp patogener"], ["Flimmerhår", "Små hår som för ut slemmet ur luftvägarna"], ["Tårar och saliv", "Innehåller ämnen som bryter ner bakterier"], ["Magsaft", "Så sur att de flesta patogener i maten dör"]] }
      ] },
    { id: "lar-hud-sf", kapitel: "forsvar", avsnitt: ["hud"], titel: "Yttre försvar – sant eller falskt",
      typ: "santfalskt", nivaer: [0, 1], punkter: ["forsvar-ytt-ex", "forsvar-ytt-satt"],
      varianter: [
        { pst: [["Huden och slemhinnorna är kroppens första försvar.", true], ["Flimmerhår finns i luftvägarna och för ut slemmet.", true], ["Tårar innehåller ämnen som bryter ner bakterier.", true], ["Om huden går sönder kan patogener ta sig in.", true], ["Slemhinnor finns bara i magen.", false]] }
      ] },
    { id: "lar-infl-flerval", kapitel: "forsvar", avsnitt: ["inflammation"], titel: "Medfött försvar – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad är typiskt för det medfödda försvaret?", punkter: ["forsvar-fodd-satt"],
          alt: [ { t: "Det startar direkt och reagerar likadant mot alla patogener", s: "ratt", f: "det kallas därför också det ospecifika försvaret." },
                 { t: "Det känner igen en viss patogen", s: "fel", f: "det gör det förvärvade försvaret." },
                 { t: "Det bildar minnesceller", s: "fel", f: "det gör det förvärvade försvaret." },
                 { t: "Det tar flera dagar att komma igång", s: "fel", f: "det medfödda försvaret startar direkt." } ] },
        { fraga: "Vilka tecken visar att ett område är inflammerat?", punkter: ["forsvar-fodd-infl"],
          alt: [ { t: "Rött, svullet, varmt och ömt", s: "ratt", f: "mer blod strömmar dit med vita blodkroppar." },
                 { t: "Rött och svullet", s: "delvis", f: "stämmer – men det blir också varmt och ömt." },
                 { t: "Blått och kallt", s: "fel", f: "en inflammation blir röd och varm." },
                 { t: "Det kliar och flagnar", s: "fel", f: "en inflammation blir röd, svullen, varm och öm." } ] },
        { fraga: "Vad gör ätarcellerna?", punkter: ["forsvar-fodd-at"],
          alt: [ { t: "De äter upp patogener och döda celler", s: "ratt", f: "ätarceller är en sorts vita blodkroppar." },
                 { t: "De bekämpar patogener", s: "delvis", f: "stämmer – men säger inte hur. De äter upp dem." },
                 { t: "De tillverkar antikroppar", s: "fel", f: "antikroppar hör till det förvärvade försvaret." },
                 { t: "De kommer ihåg patogenen till nästa gång", s: "fel", f: "ätarcellerna bildar inget minne." } ] }
      ] },
    { id: "lar-infl-sf", kapitel: "forsvar", avsnitt: ["inflammation"], titel: "Medfött försvar – sant eller falskt",
      typ: "santfalskt", nivaer: [0, 1], punkter: ["forsvar-fodd-satt", "forsvar-fodd-infl", "forsvar-fodd-at"],
      varianter: [
        { pst: [["Det medfödda försvaret reagerar likadant mot alla patogener.", true], ["Inflammation kan komma av en skada, som en sticka i fingret.", true], ["Vid en kraftig inflammation kan man få feber.", true], ["Ätarceller är en sorts vita blodkroppar.", true], ["Inflammation startar bara vid en infektion.", false]] }
      ] },
    { id: "lar-lymf-flerval", kapitel: "forsvar", avsnitt: ["lymfsystemet"], titel: "Lymfsystemet – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad transporterar lymfsystemet?", punkter: ["forsvar-lymf"],
          alt: [ { t: "Lymfa och vita blodkroppar", s: "ratt", f: "lymfan är en klar vätska som förs tillbaka till blodet." },
                 { t: "Vätska från kroppens vävnader", s: "delvis", f: "stämmer – men lymfsystemet transporterar också vita blodkroppar." },
                 { t: "Syre till musklerna", s: "fel", f: "det gör blodet." },
                 { t: "Mat från tarmen till hjärnan", s: "fel", f: "lymfsystemet transporterar lymfa och vita blodkroppar." } ] },
        { fraga: "Vad händer i lymfknutorna?", punkter: ["forsvar-lymfknut"],
          alt: [ { t: "Vita blodkroppar undersöker lymfan efter patogener", s: "ratt", f: "lymfknutorna är som kontrollstationer." },
                 { t: "De blir svullna när man är sjuk", s: "delvis", f: "stämmer – men beskriver inte vad som händer där." },
                 { t: "Där tillverkas magsaft", s: "fel", f: "magsaften bildas i magsäcken." },
                 { t: "Där syresätts blodet", s: "fel", f: "det sker i lungorna." } ] }
      ] },
    { id: "lar-lymf-sf", kapitel: "forsvar", avsnitt: ["lymfsystemet"], titel: "Lymfsystemet – sant eller falskt",
      typ: "santfalskt", nivaer: [0, 1], punkter: ["forsvar-lymf", "forsvar-lymfknut"],
      varianter: [
        { pst: [["Lymfsystemet är en del av immunförsvaret.", true], ["Lymfan är en klar vätska.", true], ["I lymfknutorna undersöker vita blodkroppar lymfan efter patogener.", true], ["Lymfknutorna på halsen kan bli svullna när man är sjuk.", true], ["Lymfsystemet pumpar blod till hjärtat.", false]] }
      ] },
    { id: "lar-isv-flerval", kapitel: "forsvar", avsnitt: ["immunsvar"], titel: "Förvärvat försvar – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Hur känner det förvärvade försvaret igen just den patogenen?", punkter: ["forsvar-spec-satt"],
          alt: [ { t: "På patogenens antigener", s: "ratt", f: "varje patogen har egna kännetecken på sin yta." },
                 { t: "På patogenens färg", s: "fel", f: "försvaret känner igen antigenerna." },
                 { t: "Det reagerar likadant mot alla patogener", s: "fel", f: "det gör det medfödda försvaret." },
                 { t: "Med hjälp av magsaften", s: "fel", f: "magsaften hör till det yttre försvaret." } ] },
        { fraga: "Vad är ett antigen?", punkter: ["forsvar-spec-anti"],
          alt: [ { t: "Ett kännetecken på en patogens yta som försvaret känner igen", s: "ratt", f: "antigenet fungerar som ett efterlysningsfoto." },
                 { t: "En del av patogenen", s: "delvis", f: "stämmer – men det viktiga är att försvaret känner igen den." },
                 { t: "En sorts vit blodkropp", s: "fel", f: "antigenet sitter på patogenen." },
                 { t: "Ett läkemedel", s: "fel", f: "antigenet sitter på patogenens yta." } ] },
        { fraga: "Vad gör B-cellerna?", punkter: ["forsvar-spec-detalj"],
          alt: [ { t: "De tillverkar antikroppar", s: "ratt", f: "antikropparna hindrar patogenerna från att ta sig in i celler och märker ut patogener så att resten av försvaret känner igen dom." },
                 { t: "De förstör infekterade celler", s: "fel", f: "det gör T-mördarcellerna." },
                 { t: "De visar upp antigener", s: "fel", f: "det gör ätarcellerna." },
                 { t: "De lugnar ner försvaret", s: "fel", f: "det gör de bromsande T-cellerna." } ] }
      ] },
    { id: "lar-isv-kedja", kapitel: "forsvar", avsnitt: ["immunsvar"], titel: "Immunsvarets fyra steg – kedja",
      typ: "kedja", nivaer: [0, 1, 2], punkter: ["forsvar-spec-steg"],
      varianter: [
        { rubrik: "Fyll i de tomma stegen i immunsvaret.",
          steg: ["Upptäcka – ätarceller äter patogenen och visar upp dess antigener",
                 "Larma – försvaret känner igen antigenerna och larmar resten av immunförsvaret",
                 "Angripa – antikroppar märker ut patogenerna och hindrar dom från att ta sig in i celler, och infekterade celler förstörs",
                 "Minnas – minnesceller kommer ihåg patogenen till nästa gång"],
          luckor: { 0: [1], 1: [1, 2], 2: [0, 1, 3] },
          fel: ["Stänga ute – huden stoppar patogenerna", "Värma – kroppen får feber"] }
      ] },
    { id: "lar-isv-para", kapitel: "forsvar", avsnitt: ["immunsvar"], titel: "Immunsvarets celler – para ihop",
      typ: "para", nivaer: [1, 2], punkter: ["forsvar-spec-detalj"],
      varianter: [
        { rubrik: "Para ihop cellen med vad den gör.",
          par: [["Ätarceller", "Visar upp antigener"], ["T-hjälparceller", "Känner igen antigenerna och larmar"], ["B-celler", "Tillverkar antikroppar"], ["T-mördarceller", "Förstör infekterade celler"], ["Bromsande T-celler", "Lugnar ner försvaret"]] }
      ] },
    { id: "lar-isv-sf", kapitel: "forsvar", avsnitt: ["immunsvar"], titel: "Förvärvat försvar – sant eller falskt",
      typ: "santfalskt", nivaer: [1], punkter: ["forsvar-spec-satt", "forsvar-spec-steg", "forsvar-spec-anti", "forsvar-spec-detalj"],
      varianter: [
        { pst: [["Ett antigen är ett kännetecken på en patogens yta.", true], ["Immunsvarets fyra steg är upptäcka, larma, angripa och minnas.", true], ["B-celler tillverkar antikroppar.", true], ["Ätarceller tillverkar antikroppar.", false], ["Det förvärvade försvaret reagerar likadant mot alla patogener.", false]] }
      ] },
    { id: "lar-minne-flerval", kapitel: "forsvar", avsnitt: ["minne"], titel: "Immunminnet – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad gör minnescellerna?", punkter: ["forsvar-imm-minn"],
          alt: [ { t: "De gör att försvaret går mycket snabbare andra gången", s: "ratt", f: "de känner igen patogenen direkt." },
                 { t: "De finns kvar i kroppen efter att man blivit frisk", s: "delvis", f: "stämmer – men säger inte vad de gör." },
                 { t: "De äter upp patogenerna", s: "fel", f: "det gör ätarcellerna." },
                 { t: "De stänger ute patogenerna", s: "fel", f: "det gör det yttre försvaret." } ] },
        { fraga: "Vad betyder det att man är immun mot en sjukdom?", punkter: ["forsvar-imm-imun"],
          alt: [ { t: "Försvaret reagerar så snabbt att man inte hinner bli sjuk", s: "ratt", f: "man kan bli smittad utan att märka det." },
                 { t: "Man har haft sjukdomen en gång", s: "delvis", f: "det är ofta så man blir immun – men det förklarar inte vad det betyder." },
                 { t: "Patogenen kan aldrig komma in i kroppen", s: "fel", f: "patogenen kan komma in – men försvaret stoppar den snabbt." },
                 { t: "Man har aldrig träffat på patogenen", s: "fel", f: "då finns inga minnesceller mot den." } ] },
        { fraga: "Varför kan influensavirus lura immunminnet?", punkter: ["forsvar-imm-lura"],
          alt: [ { t: "Viruset förändrar sig, så minnescellerna känner inte igen det", s: "ratt", f: "ett förändrat virus ser nytt ut för minnescellerna." },
                 { t: "Influensa är en farlig sjukdom", s: "fel", f: "det förklarar inte varför man kan bli sjuk igen." },
                 { t: "Minnescellerna försvinner efter en vecka", s: "fel", f: "minnesceller kan finnas kvar i många år." },
                 { t: "Influensa orsakas av bakterier", s: "fel", f: "influensa orsakas av virus." } ] }
      ] },
    { id: "lar-minne-sf", kapitel: "forsvar", avsnitt: ["minne"], titel: "Immunminnet – sant eller falskt",
      typ: "santfalskt", nivaer: [0, 1], punkter: ["forsvar-imm-minn", "forsvar-imm-imun", "forsvar-imm-lura"],
      varianter: [
        { pst: [["Minnescellerna stannar kvar i kroppen efter att man blivit frisk.", true], ["Om samma patogen kommer tillbaka tillverkas antikroppar snabbare.", true], ["Mot vattkoppor blir man immun hela livet.", true], ["Minnescellerna känner alltid igen influensavirus.", false], ["Immun betyder att patogenen aldrig kan komma in i kroppen.", false]] }
      ] }
]);
