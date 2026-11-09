/* =====================================================================
   UPPGIFTER – Strålning
   ---------------------------------------------------------------------
   En uppgift per objekt. Mallar för varje uppgiftstyp finns i mallar.md.

     id        : unikt namn – ändras aldrig
     kapitel   : kapitlets id
     avsnitt   : (valfritt) lista med avsnitt i texten, t.ex. ["alfa"]
     titel     : rubriken eleven ser
     typ       : uppgiftstyp (se mallar.md)
     nivaer    : uppgiftens nivå, t.ex. [1] eller [0, 1]
     nivaerPerArskurs : (valfritt) annan nivå för en årskurs, t.ex. { 7: [2] }
     arskurs   : (valfritt) bara för vissa årskurser, t.ex. [9]
     rullista  : (valfritt) nivåer där eleven väljer i en rullista
     maxPerOvning : (valfritt) högst så många varianter per övning (annars kapitlets värde, eller 1)
     grupp     : (valfritt) uppgifter i samma grupp räknas som varianter av varandra
     dold      : true = används inte (utan att tas bort)
     varianter : lista – en slumpas varje gång

   Svar i lucktext: [rätt] · [rätt/också rätt] · [*a] och [*b] = valfri ordning
   ===================================================================== */
// Godkända namn för elektromagnetisk strålning och partikelstrålning (används i Strålning).
// "/" skiljer olika svar, "|" skiljer olika sätt att skriva samma svar.
const EM = "radiovågor|radiovåg/mikrovågor|mikrovåg/infrarött|infraröd strålning|ir|ir-strålning|infrarödstrålning|värmestrålning/synligt ljus|ljus/uv-strålning|uv|uv strålning|ultraviolett|ultraviolett strålning|uvstrålning/röntgenstrålning|röntgen|röntgen strålning/gammastrålning|gamma|gamma strålning";
const PARTIKEL = "alfastrålning|alfa|alfa strålning/betastrålning|beta|beta strålning";

Portal.uppgifter([
    // [a|b] = samma svar skrivet på olika sätt. EM och PARTIKEL (överst i den här filen) är listor med godkända namn.

    { id: "str-begrepp", kapitel: "stralning", titel: "Strålning – fyll i begrepp",
      typ: "lucktext", nivaerPerArskurs: {7:2, 8:[1,2], 9:[1]}, rullista: [0],
      ordlista: ["energi", "vågor", "partiklar", "fotoner", "ljus"],
      varianter: [
        { text: "Strålning överför [energi] i form av vågor eller partiklar." },
        { text: "Strålning överför energi i form av [vågor|våg] eller partiklar." }
      ] },

    { id: "str-kategorier", kapitel: "stralning", titel: "Kategorier av strålning – fyll i begrepp",
      typ: "lucktext", nivaerPerArskurs: {7:2, 8:[1,2], 9:[1]}, rullista: [0],
      ordlista: ["elektromagnetisk", "partikel", "radioaktiv", "synlig"],
      varianter: [
        { text: "Det finns två kategorier av strålning: partikel- och [elektromagnetisk|elektromagnetiska|elektromagnetisk strålning]strålning.", facit: "Det finns två kategorier av strålning: <b>elektromagnetisk strålning</b> och <b>partikelstrålning</b>." },
        { text: "Det finns två kategorier av strålning: elektromagnetisk- och [partikel|partikelstrålning]strålning." },
        { text: "Det finns två kategorier av strålning: [*elektromagnetisk|elektromagnetiska|elektromagnetisk strålning/partikel|partikelstrålning]- och [*elektromagnetisk|elektromagnetiska|elektromagnetisk strålning/partikel|partikelstrålning]strålning.", facit: "Det finns två kategorier av strålning: <b>elektromagnetisk strålning</b> och <b>partikelstrålning</b>." }
      ] },

    { id: "str-overfor", kapitel: "stralning", titel: "Vad överför energin? – fyll i begrepp",
      typ: "lucktext", nivaerPerArskurs: {7:2, 8:[1,2], 9:[1]}, rullista: [0],
      ordlista: ["fotoner", "delar av atomkärnan", "elektromagnetisk strålning", "partikelstrålning", "elektroner i skalen"],
      varianter: [
        { text: "Vid elektromagnetisk strålning är det [fotoner|foton|elektromagnetiska vågor] som överför energin. Vid partikelstrålning är det [delar av atomkärnan|partiklar|delar av kärnan] som överför energin." },
        { text: "Vid [elektromagnetisk strålning|elektromagnetisk] är det fotoner som överför energin. Vid [partikelstrålning|partikel strålning] är det partiklar (delar av atomkärnan) som överför energin." }
      ] },

    { id: "str-bestar", kapitel: "stralning", titel: "Vad består strålningen av? – fyll i begrepp",
      typ: "lucktext", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]}, rullista: [0],
      ordlista: ["betapartiklar", "alfapartiklar", "fotoner", "elektroner", "heliumkärnor", "elektromagnetiska vågor"],
      varianter: [
        { text: "Betastrålning består av [betapartiklar|betapartikel] som är [elektroner|elektron] med hög energi. Alfastrålning består av [alfapartiklar|alfapartikel] som är [heliumkärnor|heliumkärna] med hög energi. Gammastrålning består av [fotoner|foton], alltså [elektromagnetiska vågor|elektromagnetisk våg] i partikelform, med hög energi." },
        { text: "Betastrålning består av betapartiklar som är [elektroner|elektron] med hög energi. Alfastrålning består av alfapartiklar som är [heliumkärnor|heliumkärna] med hög energi. Gammastrålning består av fotoner, alltså [elektromagnetiska vågor|elektromagnetisk våg] i partikelform, med hög energi." },
        { text: "Betastrålning består av [betapartiklar|betapartikel] som är elektroner med hög energi. Alfastrålning består av [alfapartiklar|alfapartikel] som är heliumkärnor med hög energi. Gammastrålning består av [fotoner|foton], alltså elektromagnetiska vågor i partikelform, med hög energi." }
      ] },

    { id: "str-para-overfor", kapitel: "stralning", titel: "Vad överför energin? – para ihop",
      typ: "para", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]}, grupp: "str-overfor-para",
      varianter: [
        { rubrik: "Välj vad som överför energin och vad det är, för varje sorts strålning.",
          rubriker: ["Strålning", "Överför energin", "Vad det är"],
          par: [["Alfastrålning", "Alfapartikel", "Heliumkärna med hög energi"],
                ["Betastrålning", "Betapartikel", "Elektron med hög energi"],
                ["Gammastrålning", "Foton", "Elektromagnetisk våg i partikelform med hög energi"]] }
      ] },

    { id: "str-dra-bild", kapitel: "stralning", titel: "Vad överför energin? – begrepp och bild",
      typ: "dratabell", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]}, grupp: "str-overfor-para",
      // rader: [strålning, begrepp, bild]. "bild:alfa", "bild:elektron" och "bild:foton" ritas av sidan.
      varianter: [
        { rubrik: "Dra rätt begrepp och rätt bild till varje sorts strålning.",
          rubriker: ["Strålning", "Vad överför energin?", "Bild"],
          rader: [["Alfastrålning", "Alfapartikel", "bild:alfa"], ["Betastrålning", "Betapartikel", "bild:elektron"], ["Gammastrålning", "Foton", "bild:foton"]] }
      ] },

    { id: "str-typer", kapitel: "stralning", titel: "Typer av strålning – fyll i begrepp",
      typ: "lucktext", nivaerPerArskurs: {7:2, 8:[1,2], 9:[1]}, rullista: [0],
      ordlista: ["synligt ljus", "UV-strålning", "röntgenstrålning", "gammastrålning", "alfastrålning", "betastrålning", "elektromagnetisk", "partikelstrålning"],
      varianter: [
        { text: `[*${EM}], [*${EM}], [*${EM}] och [*${EM}] är exempel på elektromagnetisk strålning. [*${PARTIKEL}] och [*${PARTIKEL}] är exempel på partikelstrålning.`,
          facit: "Till exempel <b>synligt ljus, UV-strålning, röntgenstrålning och gammastrålning</b> är elektromagnetisk strålning. <b>Alfastrålning och betastrålning</b> är partikelstrålning." },
        { text: "Synligt ljus, UV-strålning, röntgenstrålning och gammastrålning är exempel på [elektromagnetisk|elektromagnetiska|elektromagnetisk strålning] strålning. Alfastrålning och betastrålning är exempel på [partikelstrålning|partikel]." }
      ] },

    { id: "str-em", kapitel: "stralning", avsnitt: ["em"], titel: "Elektromagnetisk strålning – fyll i begrepp",
      typ: "lucktext", nivaerPerArskurs: {7:2, 8:[1,2], 9:[1]}, rullista: [0],
      ordlista: ["radiovågor", "mikrovågor", "infrarött", "synligt ljus", "UV-strålning", "röntgenstrålning", "gammastrålning", "alfastrålning", "betastrålning"],
      varianter: [
        { text: `Synligt ljus, [*${EM}], [*${EM}] och [*${EM}] är exempel på elektromagnetisk strålning.`, inte: ["synligt ljus"],
          facit: "Till exempel synligt ljus, <b>UV-strålning, röntgenstrålning och gammastrålning</b>. Radiovågor, mikrovågor och infrarött räknas också." },
        { text: `[*${EM}], UV-strålning, röntgenstrålning och gammastrålning är exempel på elektromagnetisk strålning.`, inte: ["uv-strålning", "röntgenstrålning", "gammastrålning"],
          facit: "Till exempel <b>synligt ljus</b>. Radiovågor, mikrovågor och infrarött räknas också." },
        { text: `[*${EM}], [*${EM}], röntgenstrålning och [*${EM}] är exempel på elektromagnetisk strålning.`, inte: ["röntgenstrålning"],
          facit: "Till exempel <b>synligt ljus, UV-strålning</b>, röntgenstrålning och <b>gammastrålning</b>. Radiovågor, mikrovågor och infrarött räknas också." },
        { text: `[*${EM}], [*${EM}], [*${EM}] och gammastrålning är exempel på elektromagnetisk strålning.`, inte: ["gammastrålning"],
          facit: "Till exempel <b>synligt ljus, UV-strålning, röntgenstrålning</b> och gammastrålning. Radiovågor, mikrovågor och infrarött räknas också." }
      ] },

    { id: "str-em-bast", kapitel: "stralning", avsnitt: ["em"], titel: "Elektromagnetisk strålning – bästa beskrivningen",
      punkter: ["emstral"],
      typ: "flerval", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]},
      varianter: [
        { fraga: "Vilken är den bästa beskrivningen av elektromagnetisk strålning?",
          alt: [ { t: "Strålning som består av energirika vågor, som i partikelform kallas fotoner", s: "ratt", f: "fotoner är elektromagnetiska vågor i partikelform." },
                 { t: "Strålning som består av elektroner", s: "delvis", f: "det beskriver bara betastrålning, och den är partikelstrålning." },
                 { t: "Strålning som består av heliumkärnor", s: "delvis", f: "det beskriver bara alfastrålning, och den är partikelstrålning." },
                 { t: "Strålning som består av delar av atomkärnan", s: "fel", f: "det beskriver partikelstrålning." } ] }
      ] },

    { id: "str-partikel", kapitel: "stralning", avsnitt: ["partikel"], titel: "Partikelstrålning – fyll i begrepp",
      typ: "lucktext", nivaerPerArskurs: {7:2, 8:[1,2], 9:[1]}, rullista: [0],
      ordlista: ["alfastrålning", "betastrålning", "gammastrålning", "röntgenstrålning"],
      varianter: [
        { text: "Alfastrålning och [betastrålning|beta|beta strålning] är exempel på partikelstrålning." },
        { text: "[Alfastrålning|alfa|alfa strålning] och betastrålning är exempel på partikelstrålning." }
      ] },

    { id: "str-partikel-bast", kapitel: "stralning", avsnitt: ["partikel"], titel: "Partikelstrålning – bästa beskrivningen",
      typ: "flerval", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]},
      varianter: [
        { fraga: "Vilken är den bästa beskrivningen av partikelstrålning?",
          alt: [ { t: "Strålning som består av energirika vågor, som i partikelform kallas fotoner", s: "fel", f: "det beskriver elektromagnetisk strålning." },
                 { t: "Strålning som bildas när atomen skickar ut energi, genom att elektroner hoppar till ett skal med lägre energinivå", s: "fel", f: "så bildas synligt ljus, och det är elektromagnetisk strålning." },
                 { t: "Strålning som kommer från solen", s: "delvis", f: "solen skickar ut strålning, men det beskriver inte vad partikelstrålning är." },
                 { t: "Strålning som består av delar av atomkärnan", s: "ratt", f: "alfapartiklar och betapartiklar sänds ut från atomkärnan." } ] }
      ] },

    { id: "str-beta-vad", kapitel: "stralning", avsnitt: ["partikel"], titel: "Betastrålning – vad strålar ut?",
      typ: "flerval", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]},
      varianter: [
        { fraga: "Vad beskriver bäst det som strålar ut vid betastrålning?",
          alt: [ { t: "En proton från kärnan", s: "fel", f: "protonen stannar kvar i kärnan." },
                 { t: "En elektron från skalet", s: "fel", f: "elektronen kommer från kärnan, inte från elektronskalen." },
                 { t: "En elektron från kärnan", s: "ratt", f: "en neutron i kärnan omvandlas till en proton och en elektron, och elektronen strålar ut." },
                 { t: "En foton från kärnan", s: "fel", f: "fotoner från kärnan är gammastrålning." } ] }
      ] },

    { id: "str-beta-text", kapitel: "stralning", avsnitt: ["partikel"], titel: "Betastrålning – fyll i begrepp",
      typ: "lucktext", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]}, rullista: [1],
      ordlista: ["neutron", "proton", "elektron", "elektronen", "foton", "heliumkärna"],
      varianter: [
        { text: "Vid betastrålning är det en [neutron] i atomkärnan som omvandlas till en [*proton] och en [*elektron]. Det är [elektronen|elektron|en elektron] som strålar ut." }
      ] },

    { id: "str-jon-text", kapitel: "stralning", avsnitt: ["jonis"], titel: "Joniserande strålning – fyll i begrepp",
      typ: "lucktext", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]}, rullista: [0], punkter:["jonstr-str"],
      ordlista: ["energi", "elektroner", "protoner", "jon", "isotop", "gammastrålning", "röntgenstrålning", "synligt ljus", "radiovågor"],
      varianter: [
        { text: "Joniserande strålning har tillräckligt hög [energi] för att slå loss [elektroner|elektron] från atomer." },
        { text: "När joniserande strålning slår loss elektroner från en atom bildas en [jon|joner]." },
        { text: "Alfastrålning, betastrålning, [*gammastrålning|gamma|gamma strålning/röntgenstrålning|röntgen|röntgen strålning] och [*gammastrålning|gamma|gamma strålning/röntgenstrålning|röntgen|röntgen strålning] är exempel på joniserande strålning.",
          facit: "Alfastrålning, betastrålning, <b>gammastrålning</b> och <b>röntgenstrålning</b> är exempel på joniserande strålning. Även viss UV-strålning är joniserande." }
      ] },

    { id: "str-jon-sortera", kapitel: "stralning", avsnitt: ["jonis"], titel: "Joniserande eller inte? – sortera",
      typ: "sortera", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]},punkter:["jonstr-str"],
      varianter: [
        { grupper: ["Joniserande", "Inte joniserande"],
          saker: [["Alfastrålning", 0], ["Gammastrålning", 0], ["Röntgenstrålning", 0], ["Synligt ljus", 1], ["Radiovågor", 1], ["Mikrovågor", 1]] },
        { grupper: ["Joniserande", "Inte joniserande"],
          saker: [["Betastrålning", 0], ["Gammastrålning", 0], ["Alfastrålning", 0], ["Infrarött", 1], ["Synligt ljus", 1], ["Radiovågor", 1]] }
      ] },

    { id: "str-jon-bast", kapitel: "stralning", avsnitt: ["jonis"], titel: "Joniserande strålning – bästa beskrivningen",
      typ: "flerval", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]},punkter:["jonstr"],
      varianter: [
        { fraga: "Vilken är den bästa beskrivningen av joniserande strålning?",
          alt: [ { t: "Strålning med tillräckligt hög energi för att slå loss elektroner från atomer", s: "ratt", f: "då bildas joner – därav namnet." },
                 { t: "Strålning som består av joner", s: "fel", f: "strålningen bildar joner när den träffar atomer, men den består inte av joner." },
                 { t: "Strålning som kommer från atomkärnan", s: "delvis", f: "alfa, beta och gamma kommer från atomkärnan, men röntgenstrålning gör det inte – och den är också joniserande." },
                 { t: "All elektromagnetisk strålning", s: "fel", f: "till exempel synligt ljus och radiovågor är inte joniserande." } ] }
      ] },

    { id: "str-jon-atom", kapitel: "stralning", avsnitt: ["jonis"], titel: "Joniserande strålning – vad händer med atomen?",
      typ: "flerval", nivaerPerArskurs: {7:3, 8:[3], 9:[2]}, punkter:["jonstr"],
      varianter: [
        { fraga: "Joniserande strålning träffar en neutral atom och slår loss en elektron. Vad blir atomen då?",
          alt: [ { t: "En positiv jon", s: "ratt", f: "atomen har nu fler protoner än elektroner, och får därför positiv laddning." },
                 { t: "En negativ jon", s: "fel", f: "atomen har förlorat en elektron, inte fått en till." },
                 { t: "En annan isotop", s: "fel", f: "antalet neutroner ändras inte." },
                 { t: "Ett annat ämne", s: "fel", f: "antalet protoner ändras inte, så det är samma ämne." } ] }
      ] },

    { id: "str-jon-text2", kapitel: "stralning", avsnitt: ["jonis"], titel: "Joniserande strålning – vad händer med atomen? (fyll i)",
      typ: "lucktext", nivaerPerArskurs: {7:3, 8:[3], 9:[2]},punkter:["jonstr-str"],
      varianter: [
        { text: "När joniserande strålning slår loss en [elektron] från en neutral atom får atomen fler [protoner|proton] än elektroner. Då blir atomen en [positiv|positivt laddad] jon." }
      ] },

    { id: "str-sortera", kapitel: "stralning", titel: "Typer av strålning – sortera begrepp",
      typ: "sortera", nivaerPerArskurs: {7:2, 8:[1,2], 9:[1]},
      varianter: [
        { grupper: ["Elektromagnetisk", "Partikelstrålning"],
          saker: [["Synligt ljus", 0], ["UV-strålning", 0], ["Röntgenstrålning", 0], ["Gammastrålning", 0], ["Radiovågor", 0], ["Alfastrålning", 1], ["Betastrålning", 1]] }
      ] },

    { id: "str-sf", kapitel: "stralning", titel: "Strålning – sant eller falskt",
      typ: "santfalskt", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]},
      varianter: [
        { pst: [["Synligt ljus är elektromagnetisk strålning.", true], ["Alfastrålning är elektromagnetisk strålning.", false],
                ["Betastrålning är partikelstrålning.", true], ["Fotoner överför energi vid elektromagnetisk strålning.", true],
                ["All elektromagnetisk strålning kan ses med ögonen.", false], ["Alfastrålning består av heliumkärnor.", true]] },
        { pst: [["Alfastrålning är elektromagnetisk strålning.", false], ["Röntgenstrålning är elektromagnetisk strålning.", true],
                ["Gammastrålning är partikelstrålning.", false], ["Delar av atomkärnan överför energi vid elektromagnetisk strålning.", false],
                ["All elektromagnetisk strålning kan ses med ögonen.", false], ["Betastrålning består av elektroner.", true]] },
        { pst: [["Gammastrålning är elektromagnetisk strålning.", true], ["En alfapartikel består av 2 protoner och 2 neutroner.", true],
                ["Betastrålning består av fotoner.", false], ["Radiovågor är partikelstrålning.", false],
                ["Vid betastrålning kommer elektronen från atomkärnan.", true], ["Fotoner har negativ laddning.", false]] },
        { pst: [["UV-strålning är elektromagnetisk strålning.", true], ["Röntgenstrålning har kortare våglängd än synligt ljus.", true],
                ["Radiovågor har högre energi än gammastrålning.", false], ["Kortare våglängd betyder högre frekvens.", true],
                ["Mikrovågor är partikelstrålning.", false], ["Infrarött har längre våglängd än UV-strålning.", true]] },
        { pst: [["Vid betastrålning omvandlas en neutron till en proton och en elektron.", true], ["Vid betastrålning kommer elektronen från ett elektronskal.", false],
                ["Alfastrålning består av elektroner.", false], ["En foton är en elektromagnetisk våg i partikelform.", true],
                ["Gammastrålning sänds ut från atomkärnan.", true], ["Partikelstrålning består av fotoner.", false]] },
        { pst: [["Joniserande strålning kan slå loss elektroner från atomer.", true], ["Synligt ljus är joniserande strålning.", false],
                ["Röntgenstrålning är joniserande strålning.", true], ["Alfastrålning är joniserande strålning.", true],
                ["Radiovågor är joniserande strålning.", false], ["När joniserande strålning träffar en atom kan det bildas en jon.", true]] }
      ] },

    { id: "str-udda", kapitel: "stralning", titel: "Strålning – vilket begrepp passar inte in?",
      typ: "udda", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]},
      // Varje variant har tre frågor: ord = fyra begrepp, svar = det som inte passar in, f = förklaring
      varianter: [
        { fragor: [
          { ord: ["Synligt ljus", "UV-strålning", "Röntgenstrålning", "Alfastrålning"], svar: "Alfastrålning", f: "de andra är elektromagnetisk strålning." },
          { ord: ["Proton", "Neutron", "Elektron", "Foton"], svar: "Foton", f: "de andra är delar av atomen." },
          { ord: ["Gammastrålning", "Alfastrålning", "Betastrålning", "Mikrovågor"], svar: "Mikrovågor", f: "de andra sänds ut från atomkärnan." } ] },
        { fragor: [
          { ord: ["Alfastrålning", "Betastrålning", "Gammastrålning", "Partikelstrålning"], svar: "Gammastrålning", f: "den är elektromagnetisk strålning. De andra hör till partikelstrålning." },
          { ord: ["Radiovågor", "Mikrovågor", "Infrarött", "Betastrålning"], svar: "Betastrålning", f: "de andra är elektromagnetisk strålning." },
          { ord: ["Heliumkärna", "Alfapartikel", "2 protoner och 2 neutroner", "Elektron"], svar: "Elektron", f: "de andra beskriver alfastrålning." } ] },
        { fragor: [
          { ord: ["Foton", "UV-strålning", "Synligt ljus", "Röntgenstrålning"], svar: "Foton", f: "de andra är namn på typer av elektromagnetisk strålning." },
          { ord: ["Röntgenstrålning", "Gammastrålning", "Alfastrålning", "Synligt ljus"], svar: "Synligt ljus", f: "de andra är joniserande strålning." },
          { ord: ["Betapartikel", "Elektron", "Betastrålning", "Heliumkärna"], svar: "Heliumkärna", f: "de andra hör till betastrålning." } ] },
        { fragor: [
          { ord: ["Elektron", "Alfapartikel", "Betastrålning", "Foton"], svar: "Foton", f: "de andra tre hör till partikelstrålning. Fotonen hör till elektromagnetisk strålning." },
          { ord: ["Foton", "Gammastrålning", "Elektromagnetisk strålning", "Alfapartikel"], svar: "Alfapartikel", f: "de andra hör till elektromagnetisk strålning." },
          { ord: ["Våglängd", "Frekvens", "Energi", "Laddning"], svar: "Laddning", f: "de andra används för att beskriva elektromagnetiska vågor. Fotoner har ingen laddning." } ] }
      ] },

    { id: "str-para", kapitel: "stralning", titel: "Strålning – para ihop begrepp",
      typ: "dra", nivaerPerArskurs: {7:3, 8:[1,2], 9:[1]},
      varianter: [
        { rubrik: "Dra varje begrepp till rätt beskrivning. Varje begrepp passar bara på ett ställe.",
          par: [["Elektromagnetisk strålning", "Strålning som består av fotoner"], ["Partikelstrålning", "Strålning som består av delar av atomkärnan"],
                ["Alfastrålning", "Består av heliumkärnor"], ["Betastrålning", "Består av elektroner"],
                ["Synligt ljus", "Elektromagnetisk strålning som ögat kan uppfatta"], ["Gammastrålning", "Elektromagnetisk strålning med mycket hög energi från atomkärnan"]] }
      ] },

    /* ---------- Förklara med begrepp ---------- */

    { id: "fk-str-bly", kapitel: "stralning", avsnitt: ["jonis"], titel: "Förklara: varför bly mot röntgen?",
      typ: "forklara", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] }, rullista: [1],
      varianter: [
        { fraga: "Förklara varför röntgenstrålning är farlig för kroppen och varför man använder bly för att skydda sig.",
          begrepp: ["joniserande", "elektron|joner|jonen", "cell|celler|DNA", "bly", "stoppar|absorber|tar upp|tät"],
          modell: "Röntgenstrålning är **joniserande** – den har så mycket energi att den kan slå loss **elektroner** från atomer så att det bildas **joner**. Då kan **celler och DNA** skadas, vilket kan leda till mutationer och cancer. **Bly** är ett tungt och tätt ämne med många elektroner som **stoppar (absorberar)** strålningen innan den når kroppen." }
      ] },

    { id: "fk-str-alfa-gamma", kapitel: "stralning", avsnitt: ["partikel"], titel: "Förklara: alfa och gamma",
      typ: "forklara", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] }, rullista: [1],
      varianter: [
        { fraga: "Förklara skillnaden mellan alfastrålning och gammastrålning.",
          begrepp: ["partikel|partiklar|heliumkärna", "foton|elektromagnetisk", "energi", "papper", "bly"],
          modell: "**Alfastrålning** är partikelstrålning – kärnan skickar ut en **heliumkärna** (2 protoner och 2 neutroner). Den stoppas redan av **papper**. **Gammastrålning** är elektromagnetisk strålning – **fotoner** med mycket hög **energi** – och tar sig igenom mycket mer. Den stoppas först av tjockt **bly**." }
      ] },

    { id: "str-sjukvard-para", kapitel: "stralning", avsnitt: ["sjukvard"], titel: "Strålning i sjukvården – para ihop",
      typ: "para", nivaerPerArskurs: { 7: [2], 8: [1, 2], 9: [1] },
      varianter: [
        { rubrik: "Para ihop användningen med vad den gör.",
          par: [["Röntgen", "Visar skelett och tänder på en bild"], ["Datortomografi", "Många röntgenbilder blir en 3D-bild"],
                ["Strålbehandling", "Skadar cancercellernas DNA så att de dör"], ["Spårämne", "Radioaktivt ämne som visar hur ett organ fungerar"],
                ["Sterilisering", "Dödar bakterier på sjukvårdsutrustning"]] }
      ] },

    { id: "str-sjukvard-flerval", kapitel: "stralning", avsnitt: ["sjukvard"], titel: "Strålning i sjukvården – välj rätt",
      typ: "flerval", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] },
      varianter: [
        { fraga: "Varför strålar man mot en tumör från flera olika håll vid strålbehandling?",
          alt: [ { t: "Så att tumören får en hög dos men de friska cellerna runt omkring en låg dos", s: "ratt", f: "strålarna möts i tumören. Där blir dosen hög, men varje del av den friska vävnaden träffas bara av en stråle." },
                 { t: "För att det går snabbare", s: "fel", f: "det handlar om att skona de friska cellerna." },
                 { t: "För att strålningen annars inte når fram", s: "fel", f: "gammastrålning tar sig lätt igenom kroppen. Syftet är att skona friska celler." },
                 { t: "För att döda bakterier runt tumören", s: "fel", f: "strålbehandling riktas mot cancercellerna." } ] },
        { fraga: "Varför bär röntgenpersonal dosimeter och står bakom en blyvägg?",
          alt: [ { t: "De utsätts för strålning varje dag och måste hålla sin stråldos låg", s: "ratt", f: "blyet stoppar strålningen och dosimetern visar hur stor dos de har fått." },
                 { t: "För att patienterna inte ska se dem", s: "fel", f: "blyväggen skyddar mot strålning." },
                 { t: "Dosimetern mäter patientens blodtryck", s: "fel", f: "en dosimeter mäter stråldos." },
                 { t: "För att röntgenstrålning kan explodera", s: "fel", f: "strålningen är farlig för att den är joniserande – den kan skada celler." } ] }
      ] },

    { id: "fk-str-sjukvard", kapitel: "stralning", avsnitt: ["sjukvard"], titel: "Förklara: strålning i sjukvården",
      typ: "forklara", nivaerPerArskurs: { 7: [3], 8: [2], 9: [1, 2] }, rullista: [1],
      varianter: [
        { fraga: "Ge ett exempel på hur strålning används i sjukvården. Förklara en möjlighet och en risk.",
          begrepp: ["röntgen|strålbehandling|datortomografi|spårämne", "möjlighet|kan se|bota|upptäcka", "risk|skada", "cell|celler|DNA", "dos"],
          modell: "**Strålbehandling** används mot cancer. **Möjligheten** är att strålningen skadar cancercellernas **DNA** så att de dör, och många kan **botas**. **Risken** är att strålningen också kan **skada** friska **celler** och ge en ökad risk för cancer senare. Därför används så låg **dos** som möjligt och man strålar från flera håll." }
      ] },
    { id: "em-lar-foton", kapitel: "stralning", avsnitt: ["em"], titel: "Fotoner – välj rätt",
      typ: "flerval", nivaerPerArskurs: {7: [1], 8: [1], 9: [0, 1]},
      varianter: [
        { fraga: "Vad överför energin i elektromagnetisk strålning?", punkter: ["emstral"],
          alt: [ { t: "Fotoner", s: "ratt", f: "fotonerna är små energipaket som för energin vidare." },
                 { t: "Atomkärnor", s: "fel", f: "det är fotoner som överför energin." },
                 { t: "Protoner", s: "fel", f: "det är fotoner som överför energin." },
                 { t: "Ljud", s: "fel", f: "det är fotoner som överför energin." } ] },
        { fraga: "Vad är en foton?", punkter: ["emstral-foton"],
          alt: [ { t: "En elektromagnetisk våg i partikelform", s: "ratt", f: "man kan tänka på den som ett litet energipaket." },
                 { t: "Ett litet energipaket", s: "delvis", f: "man kan tänka så – men en foton är en elektromagnetisk våg i partikelform." },
                 { t: "En partikel i atomkärnan", s: "fel", f: "atomkärnan består av protoner och neutroner." },
                 { t: "En elektron med hög energi", s: "fel", f: "en foton är en elektromagnetisk våg i partikelform." } ] },
        { fraga: "Vilken massa och laddning har en foton?", punkter: ["emstral-foton"],
          alt: [ { t: "Ingen massa och ingen laddning", s: "ratt", f: "fotonen är ett energipaket utan massa och laddning." },
                 { t: "Ingen laddning men massa", s: "delvis", f: "stämmer med laddningen – men en foton har heller ingen massa." },
                 { t: "Positiv laddning", s: "fel", f: "en foton har ingen laddning." },
                 { t: "Negativ laddning", s: "fel", f: "en foton har ingen laddning." } ] }
      ] },
    { id: "em-lar-energi", kapitel: "stralning", avsnitt: ["em"], titel: "Frekvens och energi – välj rätt",
      typ: "flerval", nivaerPerArskurs: {7: [1], 8: [1], 9: [0, 1]},
      varianter: [
        { fraga: "Vilken strålning har mest energi?", punkter: ["emstral-energi"],
          alt: [ { t: "Gammastrålning", s: "ratt", f: "den har högst frekvens i spektrumet." },
                 { t: "Synligt ljus", s: "fel", f: "gammastrålning har högre frekvens och mer energi." },
                 { t: "Radiovågor", s: "fel", f: "radiovågor har lägst frekvens och minst energi." },
                 { t: "Infrarött", s: "fel", f: "gammastrålning har högre frekvens och mer energi." } ] },
        { fraga: "Varför har gammastrålning mer energi än synligt ljus?", punkter: ["emstral-energi"],
          alt: [ { t: "Den har högre frekvens", s: "ratt", f: "hög frekvens innebär hög energi." },
                 { t: "Den ligger längre åt höger i spektrumet", s: "delvis", f: "stämmer – men förklaringen är att den har högre frekvens." },
                 { t: "Den har längre våglängd", s: "fel", f: "gammastrålning har kortare våglängd." },
                 { t: "Den består av partiklar från atomkärnan", s: "fel", f: "gammastrålning består av fotoner." } ] }
      ] },
    { id: "em-lar-ljus", kapitel: "stralning", avsnitt: ["em"], titel: "Synligt ljus – välj rätt",
      typ: "flerval", nivaerPerArskurs: {7: [1], 8: [1], 9: [0, 1]},
      varianter: [
        { fraga: "Hur bildas synligt ljus?", punkter: ["emstral-ljus"],
          alt: [ { t: "En elektron hoppar från ett yttre skal till ett inre och frigör energi", s: "ratt", f: "det yttre skalet har högre energinivå, så energi frigörs som en foton." },
                 { t: "En elektron hoppar mellan elektronskal", s: "delvis", f: "stämmer – men ljuset bildas när den hoppar inåt och frigör energi." },
                 { t: "En elektron tar upp energi och hoppar utåt", s: "fel", f: "då tar elektronen upp energi – ljuset bildas när den faller tillbaka." },
                 { t: "Atomkärnan skickar ut partiklar", s: "fel", f: "synligt ljus bildas i elektronskalen." } ] },
        { fraga: "Vilken färg får ljuset när mycket energi frigörs?",
          alt: [ { t: "Blått", s: "ratt", f: "mycket energi ger hög frekvens och blått ljus." },
                 { t: "Rött", s: "fel", f: "rött ljus kommer från mindre energi." },
                 { t: "Vitt", s: "fel", f: "mycket energi ger blått ljus." },
                 { t: "Svart", s: "fel", f: "mycket energi ger blått ljus." } ] }
      ] },
    { id: "em-lar-kedja", kapitel: "stralning", avsnitt: ["em"], titel: "Så bildas synligt ljus – kedja",
      typ: "kedja", nivaerPerArskurs: {7: [1, 2], 8: [1, 2], 9: [1, 2]}, punkter: ["emstral-ljus"],
      varianter: [
        { rubrik: "Fyll i de tomma stegen.",
          steg: ["Elektronen tar upp energi, till exempel från värme",
                 "Elektronen hoppar ut till ett skal med högre energinivå",
                 "Elektronen faller tillbaka till ett skal med lägre energinivå",
                 "Energin frigörs som en foton – synligt ljus"],
          luckor: { 1: [1], 2: [1, 2] },
          fel: ["Atomkärnan klyvs", "Elektronen lämnar atomen"] }
      ] },
    { id: "em-lar-rontgen", kapitel: "stralning", avsnitt: ["em"], titel: "Röntgenstrålning – välj rätt",
      typ: "flerval", nivaerPerArskurs: {7: [1], 8: [1], 9: [0, 1]},
      varianter: [
        { fraga: "Varför syns skelettet vitt på en röntgenbild?", punkter: ["emstral-rönt"],
          alt: [ { t: "Skelettet stoppar mer strålning än mjukdelarna", s: "ratt", f: "mindre strålning når bilden bakom skelettet." },
                 { t: "Skelettet är tätare", s: "delvis", f: "stämmer – och därför stoppar det mer av strålningen." },
                 { t: "Skelettet lyser när strålningen träffar", s: "fel", f: "skelettet stoppar strålningen." },
                 { t: "Strålningen går lättare igenom skelettet", s: "fel", f: "den går lättare igenom mjukdelarna." } ] },
        { fraga: "Vad används röntgenstrålning till i sjukvården?", punkter: ["emstral-rönt"],
          alt: [ { t: "Att ta bilder av kroppens inre", s: "ratt", f: "till exempel bilder av skelettet." },
                 { t: "Att värma upp kroppen", s: "fel", f: "röntgen används för att ta bilder." },
                 { t: "Att döda bakterier", s: "fel", f: "röntgen används för att ta bilder." },
                 { t: "Att mäta blodtrycket", s: "fel", f: "röntgen används för att ta bilder." } ] }
      ] },
    { id: "em-lar-gamma", kapitel: "stralning", avsnitt: ["em"], titel: "Gammastrålning – välj rätt",
      typ: "flerval", nivaerPerArskurs: {8: [1], 9: [0, 1]},
      varianter: [
        { fraga: "Var kommer gammastrålning ifrån?", punkter: ["emstral-gam"],
          alt: [ { t: "Från atomkärnan", s: "ratt", f: "den bildas ofta i samband med partikelstrålning." },
                 { t: "Från elektroner som hoppar mellan skal", s: "fel", f: "så bildas synligt ljus." },
                 { t: "Från radiosändare", s: "fel", f: "gammastrålning kommer från atomkärnan." },
                 { t: "Från skelettet", s: "fel", f: "gammastrålning kommer från atomkärnan." } ] },
        { fraga: "Vad används gammastrålning till inom sjukvården?", punkter: ["emstral-gam"],
          alt: [ { t: "Cancerbehandling", s: "ratt", f: "den mycket energirika strålningen kan döda cancerceller." },
                 { t: "Att ta bilder av skelettet", s: "fel", f: "det används röntgenstrålning till." },
                 { t: "Att värma upp mat", s: "fel", f: "gammastrålning används vid cancerbehandling." },
                 { t: "Att se i mörker", s: "fel", f: "gammastrålning används vid cancerbehandling." } ] }
      ] },
    { id: "em-lar-sf", kapitel: "stralning", avsnitt: ["em"], titel: "Elektromagnetisk strålning – sant eller falskt",
      typ: "santfalskt", nivaerPerArskurs: {7: [1], 8: [1], 9: [1]}, punkter: ["emstral", "emstral-foton", "emstral-energi", "emstral-ljus", "emstral-rönt"],
      varianter: [
        { pst: [["Fotoner överför energin i elektromagnetisk strålning.", true], ["En foton har ingen massa och ingen laddning.", true], ["Radiovågor har högre frekvens än gammastrålning.", false], ["Synligt ljus bildas när en elektron hoppar från ett yttre skal till ett inre.", true], ["Skelettet syns svart på en röntgenbild.", false]] }
      ] }
]);
