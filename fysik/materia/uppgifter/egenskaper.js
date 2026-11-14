/* =====================================================================
   UPPGIFTER – Materiens egenskaper
   ---------------------------------------------------------------------
   Mallar för varje uppgiftstyp finns i mallar.md.
   Avsnitt: massa-volym, densitet, flyta
   Öva tills du kan: densitet-vad, flyta
   ===================================================================== */
Portal.uppgifter([

  /* ---------------- Massa och volym ---------------- */

  { id: "egn-massa-volym", kapitel: "egenskaper", avsnitt: ["massa-volym"], titel: "Massa eller volym?",
    typ: "sortera", nivaer: [0, 1],
    varianter: [
      { grupper: ["Massa", "Volym"],
        saker: [["kilogram (kg)", 0], ["gram (g)", 0], ["hur mycket materia", 0], ["liter (l)", 1], ["kubikcentimeter (cm³)", 1], ["hur mycket plats", 1]] }
    ] },

  /* ---------------- Densitet ---------------- */

  { id: "egn-dens-vad", kapitel: "egenskaper", avsnitt: ["densitet"], titel: "Vad är densitet?",
    typ: "flerval", nivaer: [0, 1], punkter: ["densitet-vad"],
    varianter: [
      { fraga: "Vad beskriver bäst vad densitet är?",
        alt: [ { t: "Hur tätt massan är packad – hur mycket 1 cm³ väger", s: "ratt", f: "densitet jämför massan med volymen." },
               { t: "Hur mycket en kropp väger", s: "fel", f: "det är massan. Densiteten talar om hur mycket en bestämd volym (1 cm³) väger." },
               { t: "Hur stor en kropp är", s: "fel", f: "det är volymen." },
               { t: "Hur varm en kropp är", s: "fel", f: "det är temperaturen." } ] },
      { fraga: "En träkub och en järnkub är lika stora. Järnkuben är mycket tyngre. Vad säger det?",
        alt: [ { t: "Järn har högre densitet än trä", s: "ratt", f: "samma volym men mer massa betyder högre densitet." },
               { t: "Järnkuben har större volym", s: "fel", f: "kuberna är lika stora – de har samma volym." },
               { t: "Trä har högre densitet än järn", s: "fel", f: "trä väger mindre per cm³, alltså har trä lägre densitet." } ] },
      { fraga: "1 cm³ guld väger 19,3 g. 1 cm³ aluminium väger 2,7 g. Vilket har högst densitet?",
        alt: [ { t: "Guld", s: "ratt", f: "1 cm³ guld väger mest, alltså är massan tätast packad i guld." },
               { t: "Aluminium", s: "fel", f: "1 cm³ aluminium väger mindre än 1 cm³ guld." },
               { t: "De har samma densitet", s: "fel", f: "lika stora bitar väger olika mycket, så densiteten är olika." } ] }
    ] },

  { id: "egn-dens-sf", kapitel: "egenskaper", avsnitt: ["densitet"], titel: "Densitet – sant eller falskt",
    typ: "santfalskt", nivaer: [1], punkter: ["densitet-vad"],
    varianter: [
      { pst: [["1 cm³ vatten väger 1 g.", true], ["Densitet och massa betyder samma sak.", false],
              ["Järn har högre densitet än trä.", true], ["En stor bit järn har högre densitet än en liten bit järn.", false],
              ["Densiteten talar om hur tätt massan är packad.", true]] },
      { pst: [["Densitet = massa / volym.", true], ["Två saker med samma volym har alltid samma densitet.", false],
              ["Kork har lägre densitet än vatten.", true], ["Densitet mäts i kilogram.", false],
              ["Guld har mycket hög densitet.", true]] }
    ] },

  { id: "egn-dens-rakna", kapitel: "egenskaper", avsnitt: ["densitet"], titel: "Räkna ut densiteten",
    typ: "lucktext", nivaer: [2],
    varianter: [
      { text: "En sten har massan 30 g och volymen 10 cm³.\nDensitet = 30 / 10 = [3] g/cm³" },
      { text: "En metallbit har massan 54 g och volymen 20 cm³.\nDensitet = 54 / 20 = [2,7|2.7] g/cm³" },
      { text: "En träbit har massan 12 g och volymen 20 cm³.\nDensitet = 12 / 20 = [0,6|0.6] g/cm³" },
      { text: "En bit is har massan 45 g och volymen 50 cm³.\nDensitet = 45 / 50 = [0,9|0.9] g/cm³" }
    ] },

  { id: "egn-dens-forklara", kapitel: "egenskaper", avsnitt: ["densitet"], titel: "Förklara: trä och järn",
    typ: "forklara", nivaer: [2], rullista: [], punkter: ["densitet-vad"],
    varianter: [
      { fraga: "En träkub och en järnkub är lika stora, men järnkuben är mycket tyngre. Förklara varför med ordet densitet.",
        begrepp: ["densitet", "volym|lika stora", "massa|väger|tyngre"],
        modell: "Kuberna har samma **volym**, men järnkuben har större **massa**. Järn har högre **densitet** än trä – massan är tätare packad. **Därför** väger 1 cm³ järn mer än 1 cm³ trä." }
    ] },

  /* ---------------- Flyta eller sjunka ---------------- */

  { id: "egn-flyta-sortera", kapitel: "egenskaper", avsnitt: ["flyta"], titel: "Flyter eller sjunker i vatten?",
    typ: "sortera", nivaer: [0, 1], punkter: ["flyta"],
    varianter: [
      { grupper: ["Flyter i vatten", "Sjunker i vatten"],
        saker: [["kork (0,2 g/cm³)", 0], ["trä (0,6 g/cm³)", 0], ["is (0,9 g/cm³)", 0], ["aluminium (2,7 g/cm³)", 1], ["järn (7,9 g/cm³)", 1], ["guld (19,3 g/cm³)", 1]] }
    ] },

  { id: "egn-flyta-flerval", kapitel: "egenskaper", avsnitt: ["flyta"], titel: "Flyter den?",
    typ: "flerval", nivaer: [0, 1], punkter: ["flyta"],
    varianter: [
      { fraga: "Vatten har densiteten 1,0 g/cm³. En sak har densiteten 0,5 g/cm³. Vad händer om du lägger den i vatten?",
        alt: [ { t: "Den flyter", s: "ratt", f: "0,5 är lägre än vattnets 1,0, därför flyter den." },
               { t: "Den sjunker", s: "fel", f: "saker sjunker om densiteten är högre än vattnets." } ] },
      { fraga: "Vatten har densiteten 1,0 g/cm³. En sten har densiteten 2,5 g/cm³. Vad händer om du lägger den i vatten?",
        alt: [ { t: "Den sjunker", s: "ratt", f: "2,5 är högre än vattnets 1,0, därför sjunker stenen." },
               { t: "Den flyter", s: "fel", f: "saker flyter bara om densiteten är lägre än vattnets." } ] },
      { fraga: "När flyter en kropp i en vätska?",
        alt: [ { t: "När kroppen har lägre densitet än vätskan", s: "ratt", f: "lägre densitet än vätskan – då flyter kroppen." },
               { t: "När kroppen har högre densitet än vätskan", s: "fel", f: "då sjunker kroppen." },
               { t: "När kroppen är liten", s: "fel", f: "storleken avgör inte – en liten spik sjunker och en stor stock flyter." } ] }
    ] },

  { id: "egn-flyta-forklara", kapitel: "egenskaper", avsnitt: ["flyta"], titel: "Förklara: varför flyter isen?",
    typ: "forklara", nivaer: [1, 2], rullista: [1], punkter: ["flyta"],
    varianter: [
      { fraga: "Is har densiteten 0,9 g/cm³ och vatten har 1,0 g/cm³. Förklara varför isen flyter.",
        begrepp: ["densitet", "lägre|mindre", "vatten"],
        modell: "Isen har **lägre densitet** än **vattnet** (0,9 jämfört med 1,0). **Därför** flyter isen." },
      { fraga: "En järnspik har densiteten 7,9 g/cm³ och vatten har 1,0 g/cm³. Förklara varför spiken sjunker.",
        begrepp: ["densitet", "högre|större", "vatten"],
        modell: "Spiken har **högre densitet** än **vattnet** (7,9 jämfört med 1,0). **Därför** sjunker spiken." }
    ] },

  { id: "egn-salt", kapitel: "egenskaper", avsnitt: ["flyta"], titel: "Varför flyter man lättare i havet?",
    typ: "flerval", nivaer: [3],
    varianter: [
      { fraga: "Varför är det lättare att flyta i saltvatten än i sötvatten?",
        alt: [ { t: "Saltet gör att vattnet får högre densitet", s: "ratt", f: "ju högre densitet vattnet har, desto lättare flyter man." },
               { t: "Saltet gör att kroppen blir lättare", s: "fel", f: "kroppen ändras inte – det är vattnets densitet som blir högre." },
               { t: "Havet är djupare", s: "fel", f: "djupet spelar ingen roll. Det är vattnets densitet som avgör." } ] }
    ] }

]);
