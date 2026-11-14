/* =====================================================================
   UPPGIFTER – Fysik som vetenskap
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
   Avsnitt: storhet, prefix, modeller
   Öva tills du kan: sme-delar, sme-enheter, sme-gemensamma, prefix-enhet, prefix-vanliga
   ===================================================================== */
Portal.uppgifter([

  /* ---------------- Storhet och enhet ---------------- */

  { id: "sme-vad-saknas", kapitel: "fysik-vetenskap", avsnitt: ["storhet"], titel: "Vad saknas i meningen?",
    typ: "flerval", nivaer: [0, 1], punkter: ["sme-delar"],
    varianter: [
      { fraga: "”Arean är 17.” Vad saknas?",
        alt: [ { t: "Storheten", s: "fel", f: "storheten finns – det är area." },
               { t: "Mätetalet", s: "fel", f: "mätetalet finns – det är 17." },
               { t: "Enheten", s: "ratt", f: "vi vet inte om det är 17 m² eller 17 cm². Enheten saknas." } ] },
      { fraga: "”Stenen väger gram.” Vad saknas?",
        alt: [ { t: "Storheten", s: "fel", f: "storheten finns – det är massa (”väger”)." },
               { t: "Mätetalet", s: "ratt", f: "vi vet inte hur många gram. Siffran – mätetalet – saknas." },
               { t: "Enheten", s: "fel", f: "enheten finns – det är gram." } ] },
      { fraga: "”Bordet 1,2 m.” Vad saknas?",
        alt: [ { t: "Storheten", s: "ratt", f: "vi vet inte om det är bordets längd, bredd eller höjd. Storheten saknas." },
               { t: "Mätetalet", s: "fel", f: "mätetalet finns – det är 1,2." },
               { t: "Enheten", s: "fel", f: "enheten finns – det är meter." } ] },
      { fraga: "”Filmen var 95 lång.” Vad saknas?",
        alt: [ { t: "Storheten", s: "fel", f: "storheten finns – det är tid (”lång” om en film)." },
               { t: "Mätetalet", s: "fel", f: "mätetalet finns – det är 95." },
               { t: "Enheten", s: "ratt", f: "är det 95 minuter eller 95 sekunder? Enheten saknas." } ] }
    ] },

  { id: "sme-plocka-isar", kapitel: "fysik-vetenskap", avsnitt: ["storhet"], titel: "Plocka isär meningen",
    typ: "lucktext", nivaer: [0, 1], rullista: [0], punkter: ["sme-delar"],
    varianter: [
      { text: "”Loppet var 5 km långt.”\nStorhet: [längd|längden]\nMätetal: [5]\nPrefix: [k|kilo]\nEnhet: [m|meter]",
        ordlista: ["längd", "massa", "tid", "volym", "5", "k", "c", "m", "g", "l", "s"] },
      { text: "”Paketet vägde 2 kg.”\nStorhet: [massa|massan]\nMätetal: [2]\nPrefix: [k|kilo]\nEnhet: [g|gram]",
        ordlista: ["längd", "massa", "tid", "volym", "2", "k", "c", "m", "g", "l", "s"] },
      { text: "”Glaset rymmer 2 dl.”\nStorhet: [volym|volymen]\nMätetal: [2]\nPrefix: [d|deci]\nEnhet: [l|liter]",
        ordlista: ["längd", "massa", "tid", "volym", "2", "k", "d", "m", "g", "l", "s"] },
      { text: "”Myran är 6 mm lång.”\nStorhet: [längd|längden]\nMätetal: [6]\nPrefix: [m|milli]\nEnhet: [m|meter]",
        ordlista: ["längd", "massa", "tid", "volym", "6", "k", "c", "m", "g", "l", "s"] },
      { text: "”Lisa köpte 3,5 hg godis.”\nStorhet: [massa|massan]\nMätetal: [3,5|3.5]\nPrefix: [h|hekto]\nEnhet: [g|gram]",
        ordlista: ["längd", "massa", "tid", "volym", "3,5", "k", "h", "m", "g", "l", "s"] }
    ] },

  { id: "sme-storhet-sortera", kapitel: "fysik-vetenskap", avsnitt: ["storhet", "prefix"], titel: "Storhet, prefix eller enhet? – sortera",
    typ: "sortera", nivaer: [1], punkter: ["sme-delar", "prefix-enhet"],
    varianter: [
      { grupper: ["Storhet", "Prefix", "Enhet"],
        saker: [["längd", 0], ["massa", 0], ["tid", 0], ["volym", 0], ["kilo", 1], ["centi", 1], ["milli", 1], ["meter", 2], ["gram", 2], ["sekund", 2], ["liter", 2]] },
      { grupper: ["Storhet", "Prefix", "Enhet"],
        saker: [["temperatur", 0], ["längd", 0], ["massa", 0], ["hekto", 1], ["deci", 1], ["kilo", 1], ["grader Celsius", 2], ["meter", 2], ["gram", 2], ["liter", 2]] }
    ] },

  { id: "sme-enheter-para", kapitel: "fysik-vetenskap", avsnitt: ["storhet"], titel: "Storhet och enhet – para ihop",
    typ: "para", nivaer: [0, 1], punkter: ["sme-enheter"],
    varianter: [
      { rubrik: "Para ihop storheten med rätt enhet.",
        par: [["längd", "meter (m)"], ["massa", "kilogram (kg)"], ["tid", "sekund (s)"], ["volym", "liter (l)"], ["temperatur", "grader Celsius (°C)"]] }
    ] },

  { id: "sme-enheter-valj", kapitel: "fysik-vetenskap", avsnitt: ["storhet"], titel: "Vilken enhet passar?",
    typ: "flerval", nivaer: [0, 1], punkter: ["sme-enheter"],
    varianter: [
      { fraga: "Du ska mäta hur lång tid det tar att springa 60 meter. Vilken enhet passar?",
        alt: [ { t: "sekund (s)", s: "ratt", f: "tid mäts i sekunder." }, { t: "meter (m)", s: "fel", f: "meter är enheten för längd." },
               { t: "kilogram (kg)", s: "fel", f: "kilogram är enheten för massa." }, { t: "liter (l)", s: "fel", f: "liter är enheten för volym." } ] },
      { fraga: "Du ska ta reda på hur mycket en hund väger. Vilken enhet passar?",
        alt: [ { t: "kilogram (kg)", s: "ratt", f: "massa mäts i kilogram." }, { t: "meter (m)", s: "fel", f: "meter är enheten för längd." },
               { t: "sekund (s)", s: "fel", f: "sekund är enheten för tid." }, { t: "liter (l)", s: "fel", f: "liter är enheten för volym." } ] },
      { fraga: "Du ska ta reda på hur mycket vatten som ryms i en hink. Vilken enhet passar?",
        alt: [ { t: "liter (l)", s: "ratt", f: "volym mäts i liter." }, { t: "kilogram (kg)", s: "fel", f: "kilogram är enheten för massa." },
               { t: "meter (m)", s: "fel", f: "meter är enheten för längd." }, { t: "sekund (s)", s: "fel", f: "sekund är enheten för tid." } ] },
      { fraga: "Du ska mäta hur hög din klasskompis är. Vilken enhet passar?",
        alt: [ { t: "meter (m)", s: "ratt", f: "höjd är en längd, och längd mäts i meter." }, { t: "kilogram (kg)", s: "fel", f: "kilogram är enheten för massa." },
               { t: "liter (l)", s: "fel", f: "liter är enheten för volym." }, { t: "sekund (s)", s: "fel", f: "sekund är enheten för tid." } ] }
    ] },

  { id: "sme-gemensamma-flerval", kapitel: "fysik-vetenskap", avsnitt: ["storhet"], titel: "Varför gemensamma enheter?",
    typ: "flerval", nivaer: [0, 1], punkter: ["sme-gemensamma"],
    varianter: [
      { fraga: "Förr mätte man i fot – längden på en fot. Varför fungerade det dåligt?",
        alt: [ { t: "Alla har olika långa fötter, så samma sak fick olika mått.", s: "ratt", f: "därför behövs enheter som är lika för alla." },
               { t: "Fötter är för korta för att mäta med.", s: "fel", f: "man kan mäta långa saker med många fot – problemet var att fötterna var olika långa." },
               { t: "Det var förbjudet att mäta med kroppen.", s: "fel", f: "det var vanligt att mäta med kroppen förr." } ] },
      { fraga: "Varför använder nästan alla länder samma enheter i dag?",
        alt: [ { t: "Så att alla mäter på samma sätt och förstår varandras mätningar.", s: "ratt", f: "med samma enheter kan alla jämföra sina resultat." },
               { t: "För att meter är lättare att uttala än fot.", s: "fel", f: "det handlar inte om uttal, utan om att alla ska få samma resultat." },
               { t: "För att gamla mått var för dyra.", s: "fel", f: "gamla mått var inte dyra – de var olika för olika personer." } ] }
    ] },

  { id: "sme-gemensamma-sf", kapitel: "fysik-vetenskap", avsnitt: ["storhet"], titel: "Gemensamma enheter och SI – sant eller falskt",
    typ: "santfalskt", nivaer: [1], punkter: ["sme-gemensamma"],
    varianter: [
      { pst: [["En tum var lika lång för alla människor.", false], ["SI-systemet är de enheter som används i nästan hela världen.", true],
              ["Med gemensamma enheter kan forskare i olika länder jämföra sina mätningar.", true], ["I SI mäts massa i kilogram.", true],
              ["En kaffekopp var ett bra mått eftersom alla koppar var lika stora.", false]] },
      { pst: [["Gamla mått som fot och aln byggde ofta på kroppen.", true], ["I SI mäts tid i minuter.", false],
              ["I Sverige finns en lag om vilka enheter som ska användas.", true], ["I SI mäts temperatur i kelvin.", true],
              ["Det spelar ingen roll vilken enhet man använder, bara man skriver mätetalet.", false]] }
    ] },

  { id: "sme-gemensamma-forklara", kapitel: "fysik-vetenskap", avsnitt: ["storhet"], titel: "Förklara: varför gemensamma enheter?",
    typ: "forklara", nivaer: [1, 2], rullista: [1], punkter: ["sme-gemensamma"],
    varianter: [
      { fraga: "Förr mätte man med tum, fot och aln. Förklara varför det fungerade dåligt och varför vi i dag använder samma enheter i alla länder.",
        begrepp: ["olika|olik", "samma|gemensam", "jämför|förstå", "SI"],
        modell: "Tum, fot och aln byggde på kroppen, och alla människor har **olika** stora kroppar. **Därför** kunde samma bord få olika mått. I dag använder vi **SI-systemet**, där en meter är **samma** överallt. Då kan alla **jämföra** sina mätningar och förstå varandra." }
    ] },

  { id: "sme-beteckning", kapitel: "fysik-vetenskap", avsnitt: ["storhet"], titel: "Beteckningar – fyll i det som saknas",
    typ: "lucktext", nivaer: [1, 2], rullista: [1],
    varianter: [
      { text: "l = 1,55 m betyder att [längden|längd] är 1,55 [meter]. m = 3 [kg] betyder att massan är 3 kilogram. t = 45 [s] betyder att tiden är 45 sekunder.",
        ordlista: ["längden", "massan", "tiden", "meter", "kilogram", "kg", "s", "m", "l"] },
      { text: "[t] = 20 s betyder att tiden är 20 sekunder. [m] = 50 kg betyder att massan är 50 kilogram. [V] = 2 l betyder att volymen är 2 liter.",
        ordlista: ["t", "m", "V", "l", "T", "s"] },
      { text: "T = 21 [°C] betyder att temperaturen är 21 grader Celsius. l = 4 [m] betyder att längden är 4 meter. m = 2 kg betyder att [massan|massa] är 2 kilogram.",
        ordlista: ["°C", "m", "kg", "s", "massan", "längden", "tiden"] }
    ] },

  { id: "sme-m-tva", kapitel: "fysik-vetenskap", avsnitt: ["storhet"], titel: "m = 3 kg – vad betyder m?",
    typ: "flerval", nivaer: [2],
    varianter: [
      { fraga: "I m = 3 kg står bokstaven m först. Vad betyder den där?",
        alt: [ { t: "Massa – det är beteckningen för storheten.", s: "ratt", f: "beteckningen står före likhetstecknet. Enheten står efter mätetalet." },
               { t: "Meter – det är enheten.", s: "fel", f: "enheten står efter mätetalet. Här är enheten kg." },
               { t: "Milli – det är ett prefix.", s: "fel", f: "ett prefix står direkt framför enheten, till exempel mm." } ] },
      { fraga: "I s = 5 m – vad betyder s och vad betyder m?",
        alt: [ { t: "s är storheten sträcka och m är enheten meter.", s: "ratt", f: "beteckningen står före likhetstecknet och enheten efter mätetalet." },
               { t: "s är enheten sekund och m är storheten massa.", s: "fel", f: "titta på var bokstäverna står: före likhetstecknet står storheten." },
               { t: "Båda är enheter.", s: "fel", f: "s står före likhetstecknet och är därför en storhet (sträcka)." } ] }
    ] },

  /* ---------------- Prefix ---------------- */

  { id: "prefix-vad-ar", kapitel: "fysik-vetenskap", avsnitt: ["prefix"], titel: "Prefix eller enhet?",
    typ: "flerval", nivaer: [0, 1], punkter: ["prefix-enhet"],
    varianter: [
      { fraga: "”Jag köpte 2 hekto godis.” Vad är hekto?",
        alt: [ { t: "Ett prefix som betyder hundra", s: "ratt", f: "egentligen är det 2 hektogram. Enheten gram har fallit bort." },
               { t: "En enhet för massa", s: "fel", f: "enheten är gram. Hekto är ett prefix som betyder hundra." },
               { t: "En storhet", s: "fel", f: "storheten är massa. Hekto är ett prefix." } ] },
      { fraga: "I 5 km – vad är k?",
        alt: [ { t: "Ett prefix som betyder tusen", s: "ratt", f: "k (kilo) står framför enheten meter och betyder tusen." },
               { t: "En enhet", s: "fel", f: "enheten är m (meter). k är ett prefix." },
               { t: "En storhet", s: "fel", f: "storheten är längd. k är ett prefix." } ] },
      { fraga: "Vad är skillnaden mellan 5,7 m och 5,7 km?",
        alt: [ { t: "Båda är i meter, men k (kilo) gör att 5,7 km är tusen gånger längre.", s: "ratt", f: "5,7 km = 5,7 · 1 000 m = 5 700 m." },
               { t: "km är en annan enhet än m, så de går inte att jämföra.", s: "fel", f: "enheten är meter i båda – k är bara ett prefix." },
               { t: "5,7 km är tio gånger längre.", s: "fel", f: "kilo betyder tusen, inte tio." } ] }
    ] },

  { id: "prefix-sf", kapitel: "fysik-vetenskap", avsnitt: ["prefix"], titel: "Prefix – sant eller falskt",
    typ: "santfalskt", nivaer: [1], punkter: ["prefix-enhet"],
    varianter: [
      { pst: [["Kilo betyder tusen både i kilometer och i kilogram.", true], ["Hekto är en enhet för massa.", false],
              ["Ett prefix står framför enheten.", true], ["km är en egen enhet som inte har med meter att göra.", false],
              ["Ett prefix är en förkortning för ett tal.", true]] },
      { pst: [["I 3 cm är c ett prefix och m en enhet.", true], ["Milli betyder tusen.", false],
              ["Tar man bort prefixet måste man sätta tillbaka talet: 3 km = 3 000 m.", true], ["Prefix används bara för meter.", false],
              ["dl betyder deciliter.", true]] }
    ] },

  { id: "prefix-udda", kapitel: "fysik-vetenskap", avsnitt: ["prefix"], titel: "Vilket passar inte in?",
    typ: "udda", nivaer: [1], punkter: ["prefix-enhet"],
    varianter: [
      { fragor: [
        { ord: ["kilo", "centi", "milli", "meter"], svar: "meter", f: "de andra är prefix. Meter är en enhet." },
        { ord: ["gram", "liter", "deci", "sekund"], svar: "deci", f: "de andra är enheter. Deci är ett prefix." },
        { ord: ["längd", "massa", "tid", "kilogram"], svar: "kilogram", f: "de andra är storheter. Kilogram är en enhet." } ] }
    ] },

  { id: "prefix-para", kapitel: "fysik-vetenskap", avsnitt: ["prefix"], titel: "Vad betyder prefixet? – para ihop",
    typ: "para", nivaer: [0, 1], punkter: ["prefix-vanliga"],
    varianter: [
      { rubrik: "Para ihop prefixet med vad det betyder.",
        par: [["kilo (k)", "tusen (1 000)"], ["hekto (h)", "hundra (100)"], ["deci (d)", "tiondel (0,1)"], ["centi (c)", "hundradel (0,01)"], ["milli (m)", "tusendel (0,001)"]] }
    ] },

  { id: "prefix-ratt", kapitel: "fysik-vetenskap", avsnitt: ["prefix"], titel: "Sätt rätt prefix",
    typ: "flerval", nivaer: [0, 1], punkter: ["prefix-vanliga"],
    varianter: [
      { fraga: "Pennan är 15 __m lång. Vilket prefix är rimligt?",
        alt: [ { t: "c (centi)", s: "ratt", f: "15 cm är en vanlig penna." }, { t: "k (kilo)", s: "fel", f: "15 km är 15 000 meter – en lång promenad!" },
               { t: "m (milli)", s: "fel", f: "15 mm är bara en och en halv centimeter." } ] },
      { fraga: "Det är 470 __m mellan Stockholm och Göteborg. Vilket prefix är rimligt?",
        alt: [ { t: "k (kilo)", s: "ratt", f: "470 km är en lång bilresa." }, { t: "c (centi)", s: "fel", f: "470 cm är under 5 meter." },
               { t: "m (milli)", s: "fel", f: "470 mm är under en halv meter." } ] },
      { fraga: "En myra är 5 __m lång. Vilket prefix är rimligt?",
        alt: [ { t: "m (milli)", s: "ratt", f: "5 mm är en liten myra." }, { t: "c (centi)", s: "fel", f: "5 cm vore en jättestor myra." },
               { t: "k (kilo)", s: "fel", f: "5 km är 5 000 meter!" } ] },
      { fraga: "En burk läsk rymmer 33 __l. Vilket prefix är rimligt?",
        alt: [ { t: "c (centi)", s: "ratt", f: "33 cl är en vanlig burk." }, { t: "k (kilo)", s: "fel", f: "33 kl är 33 000 liter – en hel pool!" },
               { t: "m (milli)", s: "fel", f: "33 ml är bara några klunkar." } ] },
      { fraga: "En elefant väger 5 000 __g. Vilket prefix är rimligt?",
        alt: [ { t: "k (kilo)", s: "ratt", f: "5 000 kg är en vuxen elefant." }, { t: "h (hekto)", s: "fel", f: "5 000 hg är 500 kg – för lite för en vuxen elefant." },
               { t: "m (milli)", s: "fel", f: "5 000 mg är bara 5 gram." } ] }
    ] },

  { id: "prefix-rimligt", kapitel: "fysik-vetenskap", avsnitt: ["prefix"], titel: "Vad är rimligt?",
    typ: "flerval", nivaer: [1], punkter: ["prefix-vanliga"],
    varianter: [
      { fraga: "Hur lång är en dörr ungefär?",
        alt: [ { t: "2 m", s: "ratt", f: "en dörr är ungefär 2 meter hög." }, { t: "2 km", s: "fel", f: "2 km är 2 000 meter." },
               { t: "2 cm", s: "fel", f: "2 cm är bredden på en tumme." }, { t: "2 mm", s: "fel", f: "2 mm är ungefär som ett riskorn." } ] },
      { fraga: "Hur mycket väger ett äpple ungefär?",
        alt: [ { t: "150 g", s: "ratt", f: "ett äpple väger ungefär 1,5 hg = 150 g." }, { t: "150 kg", s: "fel", f: "150 kg är tyngre än två vuxna." },
               { t: "150 mg", s: "fel", f: "150 mg är lättare än ett russin." } ] },
      { fraga: "Hur mycket rymmer en kaffekopp ungefär?",
        alt: [ { t: "2 dl", s: "ratt", f: "en kopp rymmer ungefär 2 deciliter." }, { t: "2 l", s: "fel", f: "2 liter är en stor flaska." },
               { t: "2 ml", s: "fel", f: "2 ml är några droppar." } ] }
    ] },

  { id: "prefix-ta-bort", kapitel: "fysik-vetenskap", avsnitt: ["prefix"], titel: "Sätt tillbaka talet",
    typ: "lucktext", nivaer: [2], rullista: [],
    varianter: [
      { text: "3 km = 3 · [1000|1 000] m = [3000|3 000] m" },
      { text: "2 hg = 2 · [100] g = [200] g" },
      { text: "5 kg = 5 · [1000|1 000] g = [5000|5 000] g" },
      { text: "4 cm = 4 · [0,01|0.01] m = [0,04|0.04] m" }
    ] },

  { id: "prefix-stora-sma", kapitel: "fysik-vetenskap", avsnitt: ["prefix"], titel: "Stora och små prefix – para ihop",
    typ: "para", nivaer: [2],
    varianter: [
      { rubrik: "Para ihop prefixet med vad det betyder.",
        par: [["giga (G)", "miljard"], ["mega (M)", "miljon"], ["kilo (k)", "tusen"], ["milli (m)", "tusendel (0,001)"], ["mikro (µ)", "miljondel (0,000 001)"], ["nano (n)", "miljarddel (0,000 000 001)"]] }
    ] },

  { id: "prefix-forklara", kapitel: "fysik-vetenskap", avsnitt: ["prefix"], titel: "Förklara: 5,7 m och 5,7 km",
    typ: "forklara", nivaer: [2], rullista: [],
    varianter: [
      { fraga: "Förklara skillnaden mellan 5,7 m och 5,7 km. Använd orden prefix och enhet.",
        begrepp: ["prefix", "enhet", "kilo", "tusen|1000|1 000"],
        modell: "Båda har samma **enhet**, meter. I 5,7 km står **prefixet** k (**kilo**) framför enheten. Kilo betyder **tusen**, **därför** är 5,7 km = 5 700 m – tusen gånger längre än 5,7 m." }
    ] }

]);
