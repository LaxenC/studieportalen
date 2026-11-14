/* =====================================================================
   UPPGIFTER – Materia
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
   Avsnitt: kroppar, atomen, molekyler
   Öva tills du kan: atom-par, kropp-niva
   ===================================================================== */
Portal.uppgifter([

  /* ---------------- Kroppar och partiklar ---------------- */

  { id: "mat-kropp-sf", kapitel: "materia", avsnitt: ["kroppar"], titel: "Kropp och partikel – sant eller falskt",
    typ: "santfalskt", nivaer: [0, 1],
    varianter: [
      { pst: [["I fysiken är en sten en kropp.", true], ["Luft är inte materia eftersom man inte kan se den.", false],
              ["En atom är en partikel.", true], ["Materia är allt som har massa och volym.", true],
              ["Bara människor och djur kallas kroppar i fysiken.", false]] },
      { pst: [["En planet är en kropp.", true], ["En molekyl är en partikel.", true],
              ["Partiklar är så stora att man ser dem med ögat.", false], ["Vatten är materia.", true],
              ["Kropp och partikel betyder samma sak.", false]] }
    ] },

  { id: "mat-kropp-sortera", kapitel: "materia", avsnitt: ["kroppar"], titel: "Kropp eller partikel? – sortera",
    typ: "sortera", nivaer: [1],
    varianter: [
      { grupper: ["Kropp", "Partikel"],
        saker: [["en fotboll", 0], ["en sko", 0], ["jorden", 0], ["ett glas vatten", 0], ["en atom", 1], ["en molekyl", 1], ["en elektron", 1], ["en proton", 1]] }
    ] },

  /* ---------------- Atomen ---------------- */

  { id: "atom-bild", kapitel: "materia", avsnitt: ["atomen"], titel: "Atomens delar – bild",
    typ: "markera", nivaer: [0, 1], rullista: [0], punkter: ["atom-par"],
    delar: ["proton", "neutron", "elektron", "atomkärna"],
    svar: {
      proton: ["proton", "protoner", "protonen"],
      neutron: ["neutron", "neutroner", "neutronen"],
      elektron: ["elektron", "elektroner", "elektronen"],
      atomkärna: ["atomkärna", "atomkärnan", "kärna", "kärnan"]
    },
    varianter: [{}] },   // numreringen i bilden blandas varje gång

  { id: "atom-bygg", kapitel: "materia", avsnitt: ["atomen"], titel: "Atomens delar – skapa bild",
    typ: "bygg", nivaer: [1], punkter: ["atom-par"],
    varianter: [
      { namn: "väte",      p: 1, n: 0, e: 1 },
      { namn: "helium",    p: 2, n: 2, e: 2 }
    ] },

  { id: "atom-text", kapitel: "materia", avsnitt: ["atomen"], titel: "Atomens delar – text",
    typ: "lucktext", nivaer: [0, 1], rullista: [0],
    ordlista: ["protoner", "neutroner", "elektroner", "proton", "neutron", "elektron",
               "atomkärnan", "kärna", "positiv", "negativ", "ingen"],
    varianter: [
      { text: "Atomkärnan består av [*protoner] och [*neutroner]. Runt kärnan finns [elektroner]." },
      { text: "[Atomkärnan/kärnan] består av protoner och neutroner. Runt kärnan finns [elektroner|elektronerna]." },
      { text: "En proton har [positiv/positivt/plus] laddning." },
      { text: "En neutron har [ingen/neutral] laddning." },
      { text: "En elektron har [negativ/negativt/minus] laddning." },
      { text: "Protoner och neutroner finns i atomens [kärna/atomkärna]." },
      { text: "En [proton] är positivt laddad." },
      { text: "En [neutron] har ingen laddning." },
      { text: "En [elektron] är negativt laddad." },
      { text: "[*Protoner/proton] och [*neutroner/neutron] finns i atomkärnan." }
    ] },

  { id: "atom-para", kapitel: "materia", avsnitt: ["atomen"], titel: "Atomens delar – para ihop",
    typ: "para", nivaer: [0, 1],
    varianter: [
      { rubrik: "Para ihop partikeln med dess laddning.",
        par: [["Proton", "Positiv laddning (+)"], ["Neutron", "Ingen laddning (0)"], ["Elektron", "Negativ laddning (−)"]] },
      { rubrik: "Para ihop partikeln med var den finns.",
        par: [["Proton", "I atomkärnan"], ["Neutron", "I atomkärnan"], ["Elektron", "Runt atomkärnan"]] }
    ] },

  { id: "atom-para-bild", kapitel: "materia", avsnitt: ["atomen"], titel: "Atomens delar – bild och namn",
    typ: "para", nivaer: [0], punkter: ["atom-par"],
    varianter: [
      { rubrik: "Para ihop bilden med rätt namn.",
        par: [["bild:proton", "Proton"], ["bild:neutron", "Neutron"], ["bild:elektron", "Elektron"], ["bild:karna", "Atomkärna"]] }
    ] },

  { id: "mat-atom-laddning", kapitel: "materia", avsnitt: ["atomen"], titel: "Var finns den och vilken laddning?",
    typ: "dra", nivaer: [1], punkter: ["atom-par"],
    varianter: [
      { rubrik: "Dra varje partikel till rätt beskrivning.",
        par: [["Proton", "Finns i kärnan och är positiv (+)"], ["Neutron", "Finns i kärnan och har ingen laddning (0)"], ["Elektron", "Finns runt kärnan och är negativ (−)"]] }
    ] },

  { id: "mat-atom-sortera", kapitel: "materia", avsnitt: ["atomen"], titel: "I kärnan eller runt kärnan? – sortera",
    typ: "sortera", nivaer: [0, 1], punkter: ["atom-par"],
    varianter: [
      { grupper: ["I atomkärnan", "Runt atomkärnan"],
        saker: [["proton", 0], ["neutron", 0], ["elektron", 1], ["positiv laddning", 0], ["negativ laddning", 1]] }
    ] },

  { id: "mat-atom-flerval", kapitel: "materia", avsnitt: ["atomen"], titel: "Vilken partikel?",
    typ: "flerval", nivaer: [1], punkter: ["atom-par"],
    varianter: [
      { fraga: "Vilken partikel finns runt kärnan och har negativ laddning?",
        alt: [ { t: "Elektron", s: "ratt", f: "elektronerna rör sig runt kärnan och är negativa (−)." },
               { t: "Proton", s: "fel", f: "protonen finns i kärnan och är positiv (+)." },
               { t: "Neutron", s: "fel", f: "neutronen finns i kärnan och har ingen laddning." } ] },
      { fraga: "Vilken partikel finns i kärnan och har ingen laddning?",
        alt: [ { t: "Neutron", s: "ratt", f: "neutronen finns i kärnan och har ingen laddning (0)." },
               { t: "Proton", s: "fel", f: "protonen finns i kärnan, men den är positiv (+)." },
               { t: "Elektron", s: "fel", f: "elektronen finns runt kärnan och är negativ (−)." } ] },
      { fraga: "Vilken partikel finns i kärnan och har positiv laddning?",
        alt: [ { t: "Proton", s: "ratt", f: "protonen finns i kärnan och är positiv (+)." },
               { t: "Neutron", s: "fel", f: "neutronen finns i kärnan, men har ingen laddning." },
               { t: "Elektron", s: "fel", f: "elektronen finns runt kärnan och är negativ (−)." } ] },
      { fraga: "Vad finns i atomkärnan?",
        alt: [ { t: "Protoner och neutroner", s: "ratt", f: "kärnan består av protoner och neutroner." },
               { t: "Protoner och elektroner", s: "fel", f: "elektronerna finns runt kärnan, inte i den." },
               { t: "Bara elektroner", s: "fel", f: "elektronerna finns runt kärnan." } ] }
    ] },

  { id: "mat-atom-neutral", kapitel: "materia", avsnitt: ["atomen"], titel: "Varför är atomen neutral?",
    typ: "flerval", nivaer: [2],
    varianter: [
      { fraga: "En atom har 3 protoner, 4 neutroner och 3 elektroner. Varför är atomen elektriskt neutral?",
        alt: [ { t: "Den har lika många protoner (+) som elektroner (−), så laddningarna tar ut varandra.", s: "ratt", f: "3 plus och 3 minus blir ingen laddning totalt." },
               { t: "Neutronerna gör atomen neutral.", s: "fel", f: "neutronerna har ingen laddning och påverkar inte. Det är antalet protoner och elektroner som spelar roll." },
               { t: "Den har fler neutroner än protoner.", s: "fel", f: "neutronerna har ingen laddning. Det som spelar roll är att protoner och elektroner är lika många." } ] }
    ] },

  { id: "mat-atom-forklara", kapitel: "materia", avsnitt: ["atomen"], titel: "Förklara: atomens byggstenar",
    typ: "forklara", nivaer: [1, 2], rullista: [1], punkter: ["atom-par"],
    varianter: [
      { fraga: "Beskriv vad en atom består av. Berätta var de olika partiklarna finns och vilken laddning de har.",
        begrepp: ["kärna|kärnan|atomkärna", "proton", "neutron", "elektron", "positiv|+", "negativ|−|-"],
        modell: "Mitt i atomen finns **atomkärnan**. I kärnan finns **protoner**, som är **positiva** (+), och **neutroner**, som inte har någon laddning. Runt kärnan rör sig **elektroner**, som är **negativa** (−)." }
    ] },

  { id: "mat-atom-demokritos", kapitel: "materia", avsnitt: ["atomen"], titel: "Atomens historia",
    typ: "flerval", nivaer: [3],
    varianter: [
      { fraga: "Ordet atom kommer från grekiskan. Vad betyder det?",
        alt: [ { t: "Odelbar", s: "ratt", f: "Demokritos trodde att atomen var det minsta – något som inte går att dela." },
               { t: "Liten kula", s: "fel", f: "atomos betyder odelbar." },
               { t: "Laddad", s: "fel", f: "atomos betyder odelbar." } ] }
    ] },

  /* ---------------- Molekyler ---------------- */

  { id: "mat-niva-kedja", kapitel: "materia", avsnitt: ["molekyler"], titel: "Kedja: från kropp till atom",
    typ: "kedja", nivaer: [0, 1, 2], punkter: ["kropp-niva"],
    varianter: [
      { rubrik: "Fyll i de tomma stegen. Vi zoomar in på ett glas vatten.",
        steg: ["Vattnet i glaset (en kropp)", "Vattenmolekyler", "Atomer (syre och väte)", "Protoner, neutroner och elektroner"],
        luckor: { 0: [1], 1: [2], 2: [1, 2] },
        fel: ["Glasbitar", "Vattendroppar"] }
    ] },

  { id: "mat-niva-flerval", kapitel: "materia", avsnitt: ["molekyler"], titel: "Kropp, molekyl eller atom?",
    typ: "flerval", nivaer: [0, 1], punkter: ["kropp-niva"],
    varianter: [
      { fraga: "Vad består en vattenmolekyl av?",
        alt: [ { t: "Atomer – en syreatom och två väteatomer", s: "ratt", f: "en molekyl är atomer som sitter ihop." },
               { t: "Vattendroppar", s: "fel", f: "en vattendroppe består av massor av vattenmolekyler – inte tvärtom." },
               { t: "Kroppar", s: "fel", f: "en kropp är mycket större än en molekyl." } ] },
      { fraga: "Vad består vattnet i ett glas av?",
        alt: [ { t: "Massor av vattenmolekyler", s: "ratt", f: "vattnet är en kropp som består av vattenmolekyler." },
               { t: "En enda stor atom", s: "fel", f: "atomer är mycket små. Vattnet består av otroligt många molekyler." },
               { t: "Protoner", s: "fel", f: "protoner finns i atomkärnan – men först består vattnet av molekyler." } ] },
      { fraga: "Vilken ordning är rätt, från störst till minst?",
        alt: [ { t: "kropp → molekyl → atom", s: "ratt", f: "en kropp består av molekyler, och molekyler består av atomer." },
               { t: "molekyl → kropp → atom", s: "fel", f: "kroppen är störst. Den består av molekyler." },
               { t: "atom → molekyl → kropp", s: "fel", f: "det här är från minst till störst." } ] },
      { fraga: "Vad är en molekyl?",
        alt: [ { t: "Två eller flera atomer som sitter ihop", s: "ratt", f: "till exempel H₂O – en syreatom och två väteatomer." },
               { t: "En del av atomkärnan", s: "fel", f: "i atomkärnan finns protoner och neutroner." },
               { t: "En stor kropp", s: "fel", f: "en molekyl är en partikel – den är för liten för att se." } ] }
    ] },

  { id: "mat-niva-ordna", kapitel: "materia", avsnitt: ["molekyler"], titel: "Från störst till minst",
    typ: "dratabell", nivaer: [1], tidslinje: true, punkter: ["kropp-niva"],
    varianter: [
      { rubrik: "Dra delarna i ordning – från störst till minst.", tidslinje: true,
        rubriker: ["Ordning", "Del"],
        rader: [["1 – störst", "Kropp"], ["2", "Molekyl"], ["3", "Atom"], ["4 – minst", "Elektron"]] }
    ] },

  { id: "mat-niva-forklara", kapitel: "materia", avsnitt: ["molekyler"], titel: "Förklara: hur är vattnet uppbyggt?",
    typ: "forklara", nivaer: [1, 2], rullista: [1], punkter: ["kropp-niva"],
    varianter: [
      { fraga: "Beskriv hur vattnet i ett glas är uppbyggt. Använd orden kropp, molekyl och atom.",
        begrepp: ["kropp", "molekyl", "atom"],
        modell: "Vattnet i glaset är en **kropp**. Det består av väldigt många vatten**molekyler**. Varje molekyl består av tre **atomer**: en syreatom och två väteatomer." }
    ] }

]);
