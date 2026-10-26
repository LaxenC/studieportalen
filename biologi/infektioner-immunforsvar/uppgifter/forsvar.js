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
          saker: [["Huden", 0], ["Slemhinnor", 0], ["Sur magsaft", 0], ["Inflammation", 1], ["Ätarceller", 1], ["Reagerar likadant mot alla patogener", 1],
                  ["Antikroppar", 2], ["Minnesceller", 2], ["Känner igen en viss patogen", 2]] }
      ] },

    { id: "for-oversikt-flerval", kapitel: "forsvar", avsnitt: ["oversikt"], titel: "Kroppens försvar – välj rätt",
      typ: "flerval", nivaer: [0, 1],
      varianter: [
        { fraga: "Vad är kroppens inre försvar?",
          alt: [ { t: "Immunförsvaret", s: "ratt", f: "det inre försvaret bekämpar patogener som har tagit sig in i kroppen." },
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
          par: [["Huden och slemhinnorna", "Stänger ute patogenerna"], ["Ätarceller", "Äter upp patogener och döda celler"],
                ["Antikroppar", "Fastnar på patogenerna och märker ut dem"], ["Minnesceller", "Kommer ihåg patogenen till nästa gång"]] }
      ] },

    { id: "for-hud-flerval", kapitel: "forsvar", avsnitt: ["hud", "inflammation"], titel: "Första försvaret – välj rätt",
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
        { text: "Först äter [ätarceller|ätarcellerna] upp patogenerna. Sedan tillverkas [antikroppar] som märker ut dem. Till sist bildas [minnesceller] som kommer ihåg patogenen." }
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
      typ: "para", nivaer: [0, 1], iOrdning: true,
      varianter: [
        { rubrik: "Para ihop steget i immunsvaret med vad som händer.",
          par: [["1. Upptäcka", "Ätarceller äter patogenen och visar upp antigener"], ["2. Larma", "Försvaret känner igen antigenerna och larmar"],
                ["3. Angripa", "Antikroppar märker ut patogenerna och infekterade celler förstörs"], ["4. Minnas", "Minnesceller kommer ihåg patogenen till nästa gång"]] }
      ] },
    { id: "for-bast", kapitel: "forsvar", avsnitt: ["oversikt", "inflammation", "immunsvar", "minne"], titel: "Vad beskriver bäst? – kroppens försvar",
      typ: "flerval", nivaer: [2],
      varianter: [
        { fraga: "Vad beskriver bäst vad antikroppar gör?",
          alt: [ { t: "De fastnar på en viss patogen, märker ut den och gör den ofarlig så att ätarcellerna kan förstöra den", s: "ratt", f: "antikroppar passar bara mot en viss patogen och hjälper resten av försvaret att hitta den." },
                 { t: "De bekämpar patogener", s: "delvis", f: "stämmer, men säger inte hur – de fastnar på och märker ut patogenen." },
                 { t: "De bildas av B-celler", s: "delvis", f: "stämmer, men beskriver var de kommer ifrån – inte vad de gör." },
                 { t: "De äter upp patogenerna", s: "fel", f: "det är ätarcellerna som äter upp patogenerna – antikropparna märker ut dem." } ] },
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
      typ: "lucktext", nivaer: [0, 1], rullista: [0],
      ordlista: ["förändrar", "minnescellerna", "förkyld", "antibiotikan", "växer", "immun"],
      varianter: [
        { text: "Förkylningsvirus [förändrar|förändras|ändrar] sig hela tiden. Då känner [minnescellerna|minnesceller|immunförsvaret] inte igen viruset, och därför kan man bli [förkyld|sjuk] igen och igen." }
      ] }
]);
