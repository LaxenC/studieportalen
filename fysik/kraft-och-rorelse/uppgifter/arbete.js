/* =====================================================================
   UPPGIFTER – Arbete och effekt
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
   Avsnitt: arbete, gyllene-regel, effekt
   ===================================================================== */
Portal.uppgifter([

  /* ---------- Fysikaliskt arbete ---------- */

  { id: "ar-arbete-sortera", kapitel: "arbete", avsnitt: ["arbete"], titel: "Arbete eller inget arbete?",
    typ: "sortera", nivaer: [0, 1], punkter: ["arbete-def"],
    varianter: [
      { grupper: ["Arbete", "Inget arbete"],
        saker: [["Du lyfter en väska från golvet", 0], ["Du skjuter en låda längs golvet", 0], ["Du bär böcker uppför en trappa", 0],
                ["Du bär en väska rakt fram", 1], ["Du håller en tung väska still", 1], ["Du trycker på en vägg som står kvar", 1]] }
    ] },

  { id: "ar-arbete-flerval", kapitel: "arbete", avsnitt: ["arbete"], titel: "Uträttas ett arbete?",
    typ: "flerval", nivaer: [1, 2], punkter: ["arbete-def"],
    varianter: [
      { bild: "![En tjej går framåt och bär en väska.](bilder/bara-vaska-utan.svg)",
        fraga: "Tjejen bär väskan rakt fram. Uträttar hon ett arbete på väskan?",
        alt: [ { t: "Nej – kraften är uppåt men rörelsen är framåt", s: "ratt", f: "kraften och rörelsen har olika riktning. Då uträttas inget arbete på väskan." },
               { t: "Ja – det känns jobbigt", s: "fel", f: "i fysiken räcker det inte att det känns jobbigt. Kraften måste verka i samma riktning som rörelsen." },
               { t: "Ja – väskan flyttas en sträcka", s: "fel", f: "väskan flyttas framåt, men handen drar uppåt. Kraften och rörelsen har olika riktning." } ] },
      { bild: "![En tjej lyfter en väska uppåt.](bilder/lyfta-vaska-utan.svg)",
        fraga: "Tjejen lyfter väskan från golvet. Uträttar hon ett arbete på väskan?",
        alt: [ { t: "Ja – kraften och rörelsen går båda uppåt", s: "ratt", f: "handen drar uppåt och väskan rör sig uppåt. Då uträttas ett arbete." },
               { t: "Nej – väskan är för lätt", s: "fel", f: "det spelar ingen roll hur tung väskan är. Kraften och rörelsen går åt samma håll, så ett arbete uträttas." },
               { t: "Nej – hon rör sig inte framåt", s: "fel", f: "rörelsen behöver vara i samma riktning som kraften. Här går båda uppåt." } ] },
      { fraga: "Elsa håller en tung kasse helt still i fem minuter. Hon blir trött i armen. Uträttar hon ett arbete på kassen?",
        alt: [ { t: "Nej – kassen flyttas ingen sträcka", s: "ratt", f: "det finns en kraft men ingen rörelse. Då uträttas inget arbete på kassen." },
               { t: "Ja – hon blir ju trött", s: "fel", f: "trött betyder inte arbete i fysiken. Kassen flyttas ingen sträcka." },
               { t: "Ja – hon drar uppåt med en stor kraft", s: "fel", f: "det behövs både en kraft och en rörelse i samma riktning. Kassen står still." } ] }
    ] },

  { id: "ar-arbete-sf", kapitel: "arbete", avsnitt: ["arbete"], titel: "Arbete – sant eller falskt",
    typ: "santfalskt", nivaer: [0, 1], punkter: ["arbete-def", "arbete-rakna"],
    varianter: [
      { pst: [["Ett arbete uträttas när en kraft verkar i samma riktning som rörelsen.", true],
              ["Bär du en väska rakt fram uträttar du ett arbete på väskan.", false],
              ["Arbete = kraft · sträcka", true],
              ["Arbete mäts i newton.", false],
              ["Arbete mäts i joule.", true]] }
    ] },

  { id: "ar-arbete-luck", kapitel: "arbete", avsnitt: ["arbete"], titel: "Arbete – fyll i",
    typ: "lucktext", nivaer: [0, 1], rullista: [0, 1], punkter: ["arbete-def", "arbete-rakna"],
    ordlista: ["samma", "kraft", "sträcka", "joule", "newton", "olika", "tid"],
    varianter: [
      { text: "Ett arbete uträttas när en kraft verkar i [samma] riktning som rörelsen.\nArbete = [kraft] · [sträcka]\nArbete mäts i [joule]." }
    ] },

  { id: "ar-arbete-rakna", kapitel: "arbete", avsnitt: ["arbete"], titel: "Räkna ut arbetet",
    typ: "lucktext", nivaer: [1, 2], punkter: ["arbete-rakna"],
    varianter: [
      { bild: "![Tjejen lyfter väskan 0,5 m. Dragkraften och tyngdkraften är båda 100 N.](bilder/rakna-arbete.svg)",
        rubrik: "Väskan väger 10 kg och lyfts 0,5 m. Räkna ut arbetet.",
        text: "Kraft: [100] N\nArbete = [100] · [0,5/0.5] = [50] J" },
      { bild: "![Ahmed står bredvid en hög med böcker som väger 3 kg. Bordet är 1 m högt.](bilder/bocker-1-hog.svg)",
        rubrik: "Böckerna väger 3 kg och lyfts upp på bordet som är 1 m högt. Räkna ut arbetet.",
        text: "Kraft: [30] N\nArbete = [30] · [1] = [30] J" },
      { rubrik: "Räkna ut arbetet.",
        text: "En låda som väger 20 kg lyfts upp på en hylla som är 2 m hög.\nKraft: [200] N\nArbete = [200] · [2] = [400] J" },
      { rubrik: "Räkna ut arbetet.",
        text: "Moa skjuter en låda 5 m längs golvet med kraften 40 N.\nArbete = [40] · [5] = [200] J" }
    ] },

  { id: "ar-arbete-forklara", kapitel: "arbete", avsnitt: ["arbete"], titel: "Förklara: väskan",
    typ: "forklara", nivaer: [2, 3], rullista: [2], punkter: ["arbete-def"],
    varianter: [
      { bild: "![En tjej går framåt och bär en väska.](bilder/bara-vaska-utan.svg)",
        fraga: "Du lyfter upp en väska från golvet och bär den sedan rakt fram genom korridoren. Förklara i vilket av fallen du uträttar ett arbete på väskan.",
        begrepp: ["arbete", "kraft", "rörelse", "riktning|håll"],
        modell: "När jag lyfter väskan drar handen uppåt och väskan rör sig uppåt. **Kraften** och **rörelsen** har samma **riktning**, så jag uträttar ett **arbete**. När jag bär väskan rakt fram drar handen fortfarande uppåt, men väskan rör sig framåt. Kraften och rörelsen har olika riktning. **Därför** uträttar jag inget arbete på väskan." }
    ] },

  /* ---------- Mekanikens gyllene regel och hävstång ---------- */

  { id: "ar-gyllene-flerval", kapitel: "arbete", avsnitt: ["gyllene-regel"], titel: "Mekanikens gyllene regel",
    typ: "flerval", nivaer: [0, 1], punkter: ["gyllene"],
    varianter: [
      { fraga: "Vad säger mekanikens gyllene regel?",
        alt: [ { t: "Det man vinner i kraft förlorar man i väg", s: "ratt", f: "mindre kraft betyder längre väg. Arbetet blir lika stort." },
               { t: "Ju mer kraft, desto kortare tid", s: "fel", f: "regeln handlar om kraft och väg: det man vinner i kraft förlorar man i väg." },
               { t: "Med en hävstång blir arbetet mindre", s: "fel", f: "arbetet blir lika stort. Man behöver mindre kraft, men får en längre väg." } ] },
      { fraga: "Ahmed lyfter upp böckerna på bordet i tre mindre högar i stället för en stor. Hur blir arbetet?",
        alt: [ { t: "Lika stort", s: "ratt", f: "kraften blir tre gånger mindre, men sträckan tre gånger längre. Arbetet blir lika stort." },
               { t: "Tre gånger mindre", s: "fel", f: "kraften blir tre gånger mindre, men han lyfter tre gånger. Arbetet blir lika stort." },
               { t: "Tre gånger större", s: "fel", f: "varje lyft är tre gånger lättare. Totalt blir arbetet lika stort." } ] }
    ] },

  { id: "ar-bocker-rakna", kapitel: "arbete", avsnitt: ["gyllene-regel"], titel: "Böckerna – räkna och jämför",
    typ: "lucktext", nivaer: [2, 3], punkter: ["gyllene", "arbete-rakna"],
    varianter: [
      { bild: "![Ahmed står bredvid tre högar med böcker som väger 1 kg var. Bordet är 1 m högt.](bilder/bocker-3-hogar.svg)",
        rubrik: "Ahmed lyfter först en hög som väger 3 kg upp på bordet. Sedan lyfter han tre högar som väger 1 kg var, en i taget. Bordet är 1 m högt.",
        text: "En hög: [30] N · 1 m = [30] J\nTre högar: [10] N · [3] m = [30] J" },
      { rubrik: "Lisa ska bära upp 4 kg ved till ett loft som är 2 m högt. Först bär hon allt på en gång. Sedan bär hon 1 kg i taget.",
        text: "Allt på en gång: [40] N · 2 m = [80] J\nEtt kilo i taget: [10] N · [8] m = [80] J" }
    ] },

  { id: "ar-havstang-dra", kapitel: "arbete", avsnitt: ["gyllene-regel"], titel: "Hävstångens delar",
    typ: "dra", nivaer: [0, 1], punkter: ["havstang"],
    varianter: [
      { rubrik: "Dra varje begrepp till rätt beskrivning.",
        par: [["Hävstång", "En stång som kan vrida sig runt en punkt"],
              ["Vridningspunkt", "Punkten som stången vrider sig runt"],
              ["Lång arm", "Liten kraft, men handen åker en lång väg"],
              ["Kort arm", "Stor kraft, men en kort väg"]] }
    ] },

  { id: "ar-spett-flerval", kapitel: "arbete", avsnitt: ["gyllene-regel"], titel: "Spettet",
    typ: "flerval", nivaer: [1, 2], punkter: ["havstang", "gyllene"],
    varianter: [
      { bild: "![Samma sten lyfts rakt upp och med ett spett. Med spettet åker handen 30 cm medan stenen lyfts 5 cm.](bilder/spett.svg)",
        fraga: "Varför behövs mindre kraft när man lyfter stenen med spettet?",
        alt: [ { t: "Handen åker en längre väg än stenen", s: "ratt", f: "det man vinner i kraft förlorar man i väg. Handen åker 30 cm, stenen bara 5 cm." },
               { t: "Stenen blir lättare", s: "fel", f: "stenen väger lika mycket. Men handen åker en längre väg, så det behövs mindre kraft." },
               { t: "Arbetet blir mindre", s: "fel", f: "arbetet blir lika stort. Kraften blir mindre, men vägen längre." } ] },
      { bild: "![Spettets arm är 0,2 m på stenens sida och 1,2 m på andra sidan.](bilder/spett.svg)",
        fraga: "Din arm är 1,2 m och stenens arm är 0,2 m. Hur många gånger mindre kraft behövs med spettet?",
        alt: [ { t: "6 gånger mindre", s: "ratt", f: "1,2 / 0,2 = 6. Din arm är 6 gånger längre, så det behövs 6 gånger mindre kraft." },
               { t: "1 gång mindre – samma kraft", s: "fel", f: "din arm är längre än stenens. Då behövs mindre kraft." },
               { t: "2 gånger mindre", s: "fel", f: "jämför armarna: 1,2 / 0,2 = 6. Det behövs 6 gånger mindre kraft." } ] }
    ] },

  { id: "ar-spett-rakna", kapitel: "arbete", avsnitt: ["gyllene-regel"], titel: "Hur många gånger?",
    typ: "lucktext", nivaer: [2, 3], punkter: ["havstang"],
    varianter: [
      { rubrik: "Räkna ut hur stor kraft som behövs med spettet.",
        text: "Stenen kräver 1200 N för att lyftas rakt upp. Din arm är 1,2 m och stenens arm är 0,2 m.\nDin arm är [6] gånger längre.\nDu behöver kraften 1200 / [6] = [200] N." },
      { rubrik: "Räkna ut hur stor kraft som behövs med spettet.",
        text: "Stenen kräver 800 N för att lyftas rakt upp. Din arm är 1 m och stenens arm är 0,25 m.\nDin arm är [4] gånger längre.\nDu behöver kraften 800 / [4] = [200] N." },
      { rubrik: "Räkna ut hur långt handen åker.",
        text: "Din arm är 1,5 m och stenens arm är 0,3 m. Stenen lyfts 4 cm.\nDin arm är [5] gånger längre.\nHanden åker [20] cm." }
    ] },

  { id: "ar-gungbrada", kapitel: "arbete", avsnitt: ["gyllene-regel"], titel: "Gungbrädan",
    typ: "flerval", nivaer: [1, 2], punkter: ["havstang"],
    varianter: [
      { bild: "![En gungbräda som väger jämnt. Sara (300 N) sitter 2 m från mitten. Pappa (600 N) sitter på andra sidan.](bilder/gungbrada-fraga.svg)",
        fraga: "Gungbrädan väger jämnt. Pappa är dubbelt så tung som Sara. Hur långt från mitten sitter pappa?",
        alt: [ { t: "1 m", s: "ratt", f: "pappa är dubbelt så tung, så han ska sitta hälften så långt från mitten: 2 / 2 = 1 m." },
               { t: "2 m", s: "fel", f: "sitter pappa lika långt ut tippar gungbrädan åt hans håll. Han måste sitta hälften så långt ut." },
               { t: "4 m", s: "fel", f: "längre ut gör att pappas sida tippar ännu mer. Den tyngre ska sitta närmare mitten." } ] },
      { fraga: "Sara (300 N) sitter 1,5 m från mitten av en gungbräda. Hennes storebror är tre gånger så tung. Var ska han sitta för att gungbrädan ska väga jämnt?",
        alt: [ { t: "0,5 m från mitten", s: "ratt", f: "tre gånger så tung – tre gånger så nära mitten: 1,5 / 3 = 0,5 m." },
               { t: "1,5 m från mitten", s: "fel", f: "då tippar gungbrädan åt broderns håll. Han måste sitta närmare mitten." },
               { t: "4,5 m från mitten", s: "fel", f: "den tyngre ska sitta närmare mitten, inte längre ut." } ] }
    ] },

  { id: "ar-dorr-forklara", kapitel: "arbete", avsnitt: ["gyllene-regel"], titel: "Förklara: dörrhandtaget",
    typ: "forklara", nivaer: [2, 3], rullista: [2], punkter: ["havstang", "gyllene"],
    varianter: [
      { fraga: "Varför sitter handtaget på en dörr långt från gångjärnen? Använd orden hävstång och vridningspunkt.",
        begrepp: ["hävstång", "vridningspunkt", "kraft", "väg|sträcka"],
        modell: "Dörren är en **hävstång** och gångjärnen är **vridningspunkten**. Handtaget sitter långt från gångjärnen, så armen blir lång och handen åker en lång **väg**. Det man vinner i kraft förlorar man i väg. **Därför** behövs mindre **kraft** för att öppna dörren." }
    ] },

  /* ---------- Effekt ---------- */

  { id: "ar-effekt-flerval", kapitel: "arbete", avsnitt: ["effekt"], titel: "Vad är effekt?",
    typ: "flerval", nivaer: [0, 1], punkter: ["effekt-def", "effekt-rakna"],
    varianter: [
      { fraga: "Vad är effekt?",
        alt: [ { t: "Hur mycket arbete som uträttas per sekund", s: "ratt", f: "effekt = arbete / tid." },
               { t: "Hur stor kraften är", s: "fel", f: "kraft mäts i newton. Effekt är hur mycket arbete som uträttas per sekund." },
               { t: "Hur lång sträckan är", s: "fel", f: "effekt handlar om tid: hur mycket arbete som uträttas per sekund." } ] },
      { fraga: "Vilken enhet har effekt?",
        alt: [ { t: "Watt (W)", s: "ratt", f: "1 W = 1 J per sekund." },
               { t: "Joule (J)", s: "fel", f: "joule är enheten för arbete. Effekt mäts i watt." },
               { t: "Newton (N)", s: "fel", f: "newton är enheten för kraft. Effekt mäts i watt." } ] }
    ] },

  { id: "ar-trappa-flerval", kapitel: "arbete", avsnitt: ["effekt"], titel: "Gå eller springa?",
    typ: "flerval", nivaer: [1, 2], punkter: ["effekt-def"],
    varianter: [
      { bild: "![Ahmed står nedanför en trappa som är 3 m hög.](bilder/trappa.svg)",
        fraga: "Ahmed går uppför trappan. Nästa dag springer han. Hur blir arbetet när han springer?",
        alt: [ { t: "Lika stort", s: "ratt", f: "kraften och höjden är desamma, så arbetet blir lika stort." },
               { t: "Större", s: "fel", f: "arbete = kraft · sträcka. Kraften och höjden är desamma, så arbetet blir lika stort." },
               { t: "Mindre", s: "fel", f: "han lyfter sig lika högt med samma kraft. Arbetet blir lika stort." } ] },
      { bild: "![Ahmed står nedanför en trappa som är 3 m hög.](bilder/trappa.svg)",
        fraga: "Ahmed går uppför trappan. Nästa dag springer han. Hur blir effekten när han springer?",
        alt: [ { t: "Större", s: "ratt", f: "samma arbete på kortare tid ger större effekt." },
               { t: "Lika stor", s: "fel", f: "arbetet är lika stort, men det uträttas på kortare tid. Då blir effekten större." },
               { t: "Mindre", s: "fel", f: "kortare tid för samma arbete ger större effekt." } ] }
    ] },

  { id: "ar-kompisar", kapitel: "arbete", avsnitt: ["effekt", "gyllene-regel"], titel: "Oscar och Jana",
    typ: "flerval", nivaer: [2, 3], punkter: ["effekt-def", "gyllene"],
    varianter: [
      { bild: "![Oscar lyfter en sten rakt upp. Jana lyfter en likadan sten med ett spett. Båda stoppuren visar samma tid.](bilder/kompisar.svg)",
        fraga: "Oscar och Jana lyfter varsin likadan sten lika högt på samma tid. Vem har störst effekt?",
        alt: [ { t: "De har lika stor effekt", s: "ratt", f: "de uträttar lika stort arbete på samma tid. Då blir effekten lika stor." },
               { t: "Oscar – han tar i mest", s: "fel", f: "Oscar använder mer kraft, men arbetet blir lika stort. Samma arbete på samma tid ger samma effekt." },
               { t: "Jana – hon trycker en längre väg", s: "fel", f: "Jana trycker längre men med mindre kraft. Arbetet blir lika stort, och tiden är densamma." } ] },
      { bild: "![Oscar lyfter en sten rakt upp. Jana lyfter en likadan sten med ett spett.](bilder/kompisar.svg)",
        fraga: "Oscar och Jana lyfter varsin likadan sten lika högt. Vem uträttar störst arbete?",
        alt: [ { t: "De uträttar lika stort arbete", s: "ratt", f: "det man vinner i kraft förlorar man i väg. Arbetet blir lika stort." },
               { t: "Oscar – han använder störst kraft", s: "fel", f: "Jana använder mindre kraft, men trycker en längre väg. Arbetet blir lika stort." },
               { t: "Jana – hon trycker längst", s: "fel", f: "Jana trycker längre men med mindre kraft. Arbetet blir lika stort." } ] }
    ] },

  { id: "ar-effekt-rakna", kapitel: "arbete", avsnitt: ["effekt"], titel: "Räkna ut effekten",
    typ: "lucktext", nivaer: [1, 2], punkter: ["effekt-rakna"],
    varianter: [
      { rubrik: "Räkna ut effekten.",
        text: "Ett arbete på 600 J uträttas på 3 s.\nEffekt = [600] / [3] = [200] W" },
      { rubrik: "Räkna ut effekten.",
        text: "En kran uträttar arbetet 5000 J på 10 s.\nEffekt = [5000] / [10] = [500] W" },
      { rubrik: "Räkna ut effekten.",
        text: "Elsa lyfter en låda och uträttar arbetet 120 J på 2 s.\nEffekt = [120] / [2] = [60] W" }
    ] },

  { id: "ar-trappa-rakna", kapitel: "arbete", avsnitt: ["effekt"], titel: "Trappan – räkna",
    typ: "lucktext", nivaer: [2, 3], punkter: ["effekt-rakna", "arbete-rakna"],
    varianter: [
      { bild: "![Ahmed står nedanför en trappa som är 3 m hög.](bilder/trappa.svg)",
        rubrik: "Ahmed väger 50 kg. Han går uppför trappan på 15 s. Nästa dag springer han upp på 5 s.",
        text: "Kraft: [500] N\nArbete = [500] · 3 = [1500] J\nEffekt när han går = 1500 / [15] = [100] W\nEffekt när han springer = 1500 / [5] = [300] W" },
      { bild: "![Ahmed står nedanför en trappa som är 3 m hög.](bilder/trappa.svg)",
        rubrik: "Sara väger 40 kg. Hon går uppför trappan på 12 s. Nästa dag springer hon upp på 4 s.",
        text: "Kraft: [400] N\nArbete = [400] · 3 = [1200] J\nEffekt när hon går = 1200 / [12] = [100] W\nEffekt när hon springer = 1200 / [4] = [300] W" }
    ] },

  { id: "ar-effekt-forklara", kapitel: "arbete", avsnitt: ["effekt"], titel: "Förklara: trappan",
    typ: "forklara", nivaer: [2, 3], rullista: [2], punkter: ["effekt-def"],
    varianter: [
      { bild: "![Ahmed står nedanför en trappa som är 3 m hög.](bilder/trappa.svg)",
        fraga: "Ahmed går uppför trappan en dag och springer upp nästa dag. Förklara vad som händer med arbetet och med effekten.",
        begrepp: ["arbete", "effekt", "tid", "lika"],
        modell: "Ahmed lyfter sig lika högt med samma kraft båda gångerna. **Därför** blir **arbetet** **lika** stort. När han springer uträttar han arbetet på kortare **tid**. Samma arbete på kortare tid ger större **effekt**." }
    ] }

]);
