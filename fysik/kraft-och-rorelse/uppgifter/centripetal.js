/* =====================================================================
   UPPGIFTER – Centripetalkraft och fritt fall
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
   Avsnitt: centralrorelse, centripetal, centrifugal, fritt-fall, kast
   ===================================================================== */
Portal.uppgifter([

  /* ---------- Rotationsrörelse och centralrörelse ---------- */

  { id: "ce-rot-sortera", kapitel: "centripetal", avsnitt: ["centralrorelse"], titel: "Rotation eller central?",
    typ: "sortera", nivaer: [0, 1], punkter: ["rotation-central"],
    varianter: [
      { grupper: ["Rotationsrörelse", "Centralrörelse"],
        saker: [["En penna snurrar runt sin egen mitt", 0], ["Ett hjul snurrar på cykeln", 0], ["Jorden snurrar runt sig själv", 0],
                ["En boll i ett snöre åker runt handen", 1], ["Månen rör sig runt jorden", 1], ["En bil kör runt i en rondell", 1]] }
    ] },

  { id: "ce-rot-flerval", kapitel: "centripetal", avsnitt: ["centralrorelse"], titel: "Vad är skillnaden?",
    typ: "flerval", nivaer: [1], punkter: ["rotation-central"],
    varianter: [
      { bild: "![En penna snurrar runt sin egen mittpunkt](bilder/penna-rotation.gif)",
        fraga: "Pennan snurrar runt sin egen mitt. Vilken rörelse har den?",
        alt: [ { t: "Rotationsrörelse", s: "ratt", f: "mittpunkten ligger i pennan själv." },
               { t: "Centralrörelse", s: "fel", f: "vid en centralrörelse ligger mittpunkten utanför kroppen. Pennan snurrar runt en punkt i sig själv." },
               { t: "Likformig rörelse", s: "fel", f: "pennan ändrar riktning hela tiden. Den snurrar runt sin egen mitt – det är en rotationsrörelse." } ] },
      { bild: "![En tjej snurrar en boll i ett snöre över huvudet](bilder/snore-boll.svg)",
        fraga: "Bollen åker runt handen. Vilken rörelse har bollen?",
        alt: [ { t: "Centralrörelse", s: "ratt", f: "bollen rör sig runt en mittpunkt utanför sig själv – handen." },
               { t: "Rotationsrörelse", s: "fel", f: "vid en rotationsrörelse snurrar kroppen runt en punkt i sig själv. Bollen åker runt handen." },
               { t: "Likformig rörelse", s: "fel", f: "riktningen ändras hela tiden, så rörelsen är inte likformig." } ] },
      { fraga: "Vad är skillnaden mellan en rotationsrörelse och en centralrörelse?",
        alt: [ { t: "Var mittpunkten ligger – i kroppen eller utanför kroppen", s: "ratt", f: "rotation: mittpunkten i kroppen. Central: mittpunkten utanför." },
               { t: "Hur snabbt kroppen rör sig", s: "fel", f: "skillnaden är var mittpunkten ligger, inte hur snabbt det går." },
               { t: "Hur tung kroppen är", s: "fel", f: "skillnaden är var mittpunkten ligger – i kroppen eller utanför." } ] }
    ] },

  { id: "ce-jorden-forklara", kapitel: "centripetal", avsnitt: ["centralrorelse"], titel: "Förklara: jordens två rörelser",
    typ: "forklara", nivaer: [2, 3], rullista: [2], punkter: ["rotation-central"],
    varianter: [
      { fraga: "Jorden gör två rörelser samtidigt. Beskriv dem och förklara vilken som är en rotationsrörelse och vilken som är en centralrörelse.",
        begrepp: ["rotationsrörelse", "centralrörelse", "själv", "solen"],
        modell: "Jorden snurrar runt **sig själv**. Mittpunkten ligger i jorden, så det är en **rotationsrörelse**. Den ger dag och natt. Jorden rör sig också runt **solen**. Mittpunkten ligger utanför jorden, så det är en **centralrörelse**. Den tar ett år." }
    ] },

  /* ---------- Centripetalkraft ---------- */

  { id: "ce-centripetal-flerval", kapitel: "centripetal", avsnitt: ["centripetal"], titel: "Centripetalkraften",
    typ: "flerval", nivaer: [0, 1], punkter: ["centripetal"],
    varianter: [
      { fraga: "En boll åker runt i en cirkel. Åt vilket håll verkar centripetalkraften?",
        alt: [ { t: "In mot mitten av cirkeln", s: "ratt", f: "centripetalkraften drar hela tiden in mot mitten." },
               { t: "Ut från mitten av cirkeln", s: "fel", f: "centripetalkraften drar inåt. Det som känns som en kraft utåt är trögheten." },
               { t: "Framåt, i rörelseriktningen", s: "fel", f: "centripetalkraften drar in mot mitten, så att kroppen hela tiden ändrar riktning." } ] },
      { fraga: "Vad är centripetalkraften när en bil kör runt i en rondell?",
        alt: [ { t: "Friktionen mellan däcken och vägen", s: "ratt", f: "vägen trycker däcken in i svängen. Därför går det inte att svänga på blank is." },
               { t: "Kraften från motorn", s: "fel", f: "motorn får hjulen att snurra, men det är vägen som trycker bilen in i svängen – friktionen." },
               { t: "Luftmotståndet", s: "fel", f: "luftmotståndet bromsar bilen. Det är friktionen mellan däcken och vägen som får bilen att svänga." } ] },
      { fraga: "Vad är centripetalkraften när månen rör sig runt jorden?",
        alt: [ { t: "Jordens tyngdkraft", s: "ratt", f: "jordens tyngdkraft drar månen in mot jorden." },
               { t: "Ett osynligt snöre", s: "fel", f: "det finns inget snöre – det är jordens tyngdkraft som drar månen inåt." },
               { t: "Det finns ingen kraft", s: "fel", f: "utan en kraft skulle månen fortsätta rakt fram. Jordens tyngdkraft drar den inåt." } ] }
    ] },

  { id: "ce-snore-av", kapitel: "centripetal", avsnitt: ["centripetal"], titel: "Snöret går av",
    typ: "flerval", nivaer: [1, 2], punkter: ["centripetal"],
    varianter: [
      { bild: "![Bollen åker i en cirkel runt handen. En grön pil visar rörelseriktningen.](bilder/centripetal-pilar.svg)",
        fraga: "Snöret går av precis när bollen är där den är på bilden. Hur fortsätter bollen?",
        alt: [ { t: "Rakt fram, åt det håll den gröna pilen visar", s: "ratt", f: "bollen har tröghet och fortsätter rakt fram när centripetalkraften försvinner." },
               { t: "Rakt ut från handen", s: "fel", f: "det finns ingen kraft som drar bollen utåt. Den fortsätter rakt fram, åt det håll den var på väg." },
               { t: "Den fortsätter i en cirkel", s: "fel", f: "utan snöret finns ingen centripetalkraft. Då fortsätter bollen rakt fram." } ] }
    ] },

  { id: "ce-slagga", kapitel: "centripetal", avsnitt: ["centripetal"], titel: "Släggkastaren",
    typ: "flerval", nivaer: [2, 3], punkter: ["centripetal"],
    varianter: [
      { bild: "![En släggkastare ovanifrån. Släggan åker moturs i en cirkel. Fyra punkter A, B, C och D är utmärkta på cirkeln. Banan ligger uppåt.](bilder/slagga-abcd.svg)",
        fraga: "Släggan åker runt åt det håll som den orange pilen visar. Var ska hon släppa släggan för att den ska landa mitt på banan?",
        alt: [ { t: "B", s: "ratt", f: "i B är släggan på väg rakt uppåt, mot banan. Den fortsätter rakt fram eftersom den har tröghet." },
               { t: "A", s: "fel", f: "i A är släggan på väg åt vänster. Den flyger inte rakt utåt – den fortsätter rakt fram, åt vänster." },
               { t: "C", s: "fel", f: "i C är släggan på väg åt höger. Den fortsätter rakt fram åt höger." },
               { t: "D", s: "fel", f: "i D är släggan på väg nedåt, bort från banan." } ] }
    ] },

  { id: "ce-centripetal-forklara", kapitel: "centripetal", avsnitt: ["centripetal"], titel: "Förklara: bollen i snöret",
    typ: "forklara", nivaer: [2], rullista: [2], punkter: ["centripetal"],
    varianter: [
      { bild: "![Snöret går av. Bollen fortsätter rakt fram.](bilder/snoret-klipps.svg)",
        fraga: "Förklara varför bollen åker i en cirkel när du snurrar den – och vad som händer när snöret går av.",
        begrepp: ["centripetalkraft", "mitten|inåt", "tröghet", "rakt fram"],
        modell: "Snöret drar bollen **inåt**, mot **mitten**. Det är **centripetalkraften**. Den gör att bollen hela tiden ändrar riktning och åker i en cirkel. När snöret går av försvinner kraften. Bollen har **tröghet**, **därför** fortsätter den **rakt fram**." }
    ] },

  /* ---------- Centrifugalkraft ---------- */

  { id: "ce-centrifugal-sf", kapitel: "centripetal", avsnitt: ["centrifugal"], titel: "Centrifugalkraft – sant eller falskt",
    typ: "santfalskt", nivaer: [0, 1], punkter: ["centrifugal"],
    varianter: [
      { pst: [["Centrifugalkraften är en riktig kraft som trycker utåt.", false],
              ["Det som känns som en kraft utåt är trögheten.", true],
              ["Centripetalkraften drar in mot mitten.", true],
              ["När bilen svänger vänster fortsätter din kropp rakt fram.", true],
              ["Släpper man en boll som snurrar, flyger den rakt ut från mitten.", false]] }
    ] },

  { id: "ce-bil-kurva", kapitel: "centripetal", avsnitt: ["centrifugal"], titel: "I bilen i kurvan",
    typ: "flerval", nivaer: [1, 2], punkter: ["centrifugal"],
    varianter: [
      { fraga: "Du sitter i en bil som svänger till vänster. Åt vilket håll glider du?",
        alt: [ { t: "Åt höger, mot dörren", s: "ratt", f: "din kropp vill fortsätta rakt fram medan bilen svänger vänster. Då hamnar du mot högra dörren." },
               { t: "Åt vänster, in i svängen", s: "fel", f: "din kropp vill fortsätta rakt fram. Bilen svänger vänster under dig, så du hamnar åt höger." },
               { t: "Du glider inte alls", s: "fel", f: "din kropp har tröghet och vill fortsätta rakt fram. Därför glider du mot dörren om du inte har bälte." } ] },
      { bild: "![Bilen kör i en vänsterkurva. En grön streckad pil visar att du vill fortsätta rakt fram.](bilder/bil-kurva.svg)",
        fraga: "Det känns som att du trycks utåt när bilen svänger. Vad är det egentligen?",
        alt: [ { t: "Trögheten – kroppen vill fortsätta rakt fram", s: "ratt", f: "det finns ingen kraft som trycker utåt. Kroppen fortsätter rakt fram medan bilen svänger." },
               { t: "En kraft från motorn som trycker dig utåt", s: "fel", f: "motorn trycker inte på dig. Det är trögheten du känner – kroppen vill fortsätta rakt fram." },
               { t: "Tyngdkraften", s: "fel", f: "tyngdkraften drar nedåt. Det som känns som en kraft utåt är trögheten." } ] }
    ] },

  { id: "ce-centrifug-forklara", kapitel: "centripetal", avsnitt: ["centrifugal"], titel: "Förklara: centrifugen",
    typ: "forklara", nivaer: [2, 3], rullista: [2], punkter: ["centrifugal"],
    varianter: [
      { fraga: "I en centrifug åker kläderna runt i en trumma med hål. Förklara hur vattnet kommer ut ur kläderna.",
        begrepp: ["centripetalkraft", "tröghet", "rakt fram", "hål"],
        modell: "Trummans vägg trycker kläderna inåt – det är **centripetalkraften**. Vattnet har **tröghet** och vill fortsätta **rakt fram**. Där det finns **hål** finns ingen vägg som trycker vattnet inåt. **Därför** fortsätter vattnet rakt fram, ut genom hålen." }
    ] },

  /* ---------- Fritt fall ---------- */

  { id: "ce-fall-flerval", kapitel: "centripetal", avsnitt: ["fritt-fall"], titel: "Vilken landar först?",
    typ: "flerval", nivaer: [1], punkter: ["massa-fall", "fritt-fall"],
    varianter: [
      { fraga: "En cylinder av mässing och en av trä har samma form. Mässingen har mycket större massa. De släpps samtidigt. Vilken landar först?",
        alt: [ { t: "De landar samtidigt", s: "ratt", f: "massan spelar ingen roll för hur snabbt något faller. Formen är densamma, så luftmotståndet blir ungefär lika." },
               { t: "Mässingen", s: "fel", f: "massan spelar ingen roll för hur snabbt något faller. De landar samtidigt." },
               { t: "Trät", s: "fel", f: "de har samma form och får ungefär lika stort luftmotstånd. De landar samtidigt." } ] },
      { fraga: "En fjäder och en mutter släpps samtidigt i ett klassrum. Vilken landar först?",
        alt: [ { t: "Muttern", s: "ratt", f: "fjädern har stor yta och bromsas mycket av luftmotståndet." },
               { t: "Fjädern", s: "fel", f: "fjädern bromsas mycket av luftmotståndet, så den landar sist." },
               { t: "De landar samtidigt", s: "fel", f: "i luft bromsas fjädern av luftmotståndet. I vakuum hade de landat samtidigt." } ] },
      { bild: "![Två rör. I röret med vakuum faller fjädern och muttern lika snabbt.](bilder/fall-luft-vakuum.svg)",
        fraga: "En fjäder och en mutter släpps samtidigt i ett rör med vakuum. Vilken landar först?",
        alt: [ { t: "De landar samtidigt", s: "ratt", f: "i vakuum finns inget luftmotstånd. Då faller allt lika snabbt." },
               { t: "Muttern", s: "fel", f: "i vakuum finns inget luftmotstånd som bromsar fjädern. De landar samtidigt." },
               { t: "Fjädern", s: "fel", f: "i vakuum faller allt lika snabbt. De landar samtidigt." } ] }
    ] },

  { id: "ce-fall-sf", kapitel: "centripetal", avsnitt: ["fritt-fall"], titel: "Fritt fall – sant eller falskt",
    typ: "santfalskt", nivaer: [0, 1], punkter: ["massa-fall", "fritt-fall"],
    varianter: [
      { pst: [["I vakuum finns ingen luft.", true],
              ["En tung kropp faller alltid fortare än en lätt.", false],
              ["I ett fritt fall verkar bara tyngdkraften.", true],
              ["I ett fritt fall är hastigheten densamma hela tiden.", false],
              ["Formen spelar roll för hur stort luftmotståndet blir.", true]] }
    ] },

  { id: "ce-manen-forklara", kapitel: "centripetal", avsnitt: ["fritt-fall"], titel: "Förklara: hammaren och fjädern",
    typ: "forklara", nivaer: [2], rullista: [2], punkter: ["fritt-fall"],
    varianter: [
      { fraga: "En astronaut på månen släppte en hammare och en fjäder samtidigt. De landade samtidigt. På jorden landar hammaren först. Förklara varför.",
        begrepp: ["luft", "luftmotstånd", "vakuum|ingen luft", "lika snabbt"],
        modell: "På jorden finns **luft**. Fjädern har stor yta och bromsas av **luftmotståndet**. På månen finns **ingen luft** – det är **vakuum**. Där finns inget luftmotstånd. **Därför** faller allt **lika snabbt**, och hammaren och fjädern landar samtidigt." }
    ] },

  /* ---------- Kast rakt fram ---------- */

  { id: "ce-kast-flerval", kapitel: "centripetal", avsnitt: ["kast"], titel: "Släppt eller kastad?",
    typ: "flerval", nivaer: [1, 2], punkter: ["kast"],
    bild: "![Två bollar ligger på taket av ett höghus. Den orange ska släppas och den blå kastas rakt fram.](bilder/kastrorelse-start.svg)",
    varianter: [
      { fraga: "Den orange bollen släpps. Samtidigt kastas den blå bollen rakt fram. Vilken landar först?",
        alt: [ { t: "De landar samtidigt", s: "ratt", f: "tyngdkraften påverkar bara hastigheten nedåt. Båda faller lika fort." },
               { t: "Den orange", s: "fel", f: "den blå bollen faller lika fort nedåt. Den åker bara framåt samtidigt. De landar samtidigt." },
               { t: "Den blå", s: "fel", f: "kastet framåt påverkar inte fallet nedåt. De landar samtidigt." } ] },
      { fraga: "Den blå bollen kastas rakt fram. Vad händer med hastigheten framåt medan den faller?",
        alt: [ { t: "Den ändras inte", s: "ratt", f: "tyngdkraften drar bara nedåt. Framåt verkar ingen kraft, om vi bortser från luftmotståndet." },
               { t: "Den ökar", s: "fel", f: "det är hastigheten nedåt som ökar. Framåt verkar ingen kraft." },
               { t: "Den minskar till noll", s: "fel", f: "framåt verkar ingen kraft som bromsar, om vi bortser från luftmotståndet. Hastigheten framåt ändras inte." } ] }
    ] },

  { id: "ce-kast-forklara", kapitel: "centripetal", avsnitt: ["kast"], titel: "Förklara: kast rakt fram",
    typ: "forklara", nivaer: [2, 3], rullista: [2], punkter: ["kast"],
    varianter: [
      { bild: "![Den släppta bollen faller rakt ner. Den kastade bollen åker i en båge. De är på samma höjd varje sekund.](bilder/kastrorelse.svg)",
        fraga: "En boll släpps och en annan kastas rakt fram samtidigt. Förklara varför de landar samtidigt.",
        begrepp: ["tyngdkraft", "nedåt", "framåt", "samtidigt"],
        modell: "**Tyngdkraften** drar båda bollarna **nedåt** lika mycket. Den påverkar bara hastigheten nedåt. Hastigheten **framåt** ändras inte. **Därför** faller båda bollarna lika fort och landar **samtidigt**." }
    ] }
]);
