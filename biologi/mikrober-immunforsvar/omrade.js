/* =====================================================================
   ARBETSOMRÅDE – Mikrober, immunförsvar och vaccin
   ---------------------------------------------------------------------
   Kapitel (i ordning). Texterna finns i texter/<id>.md och
   uppgifterna i uppgifter/<id>.js.

     id   : kapitlets id (filnamn)
     namn : kapitlets namn
     farg : green | blue | yellow | orange | purple | red
     bild : (valfritt) bild på kortet
     text : kort beskrivning
     arskurs : (valfritt) annars samma som arbetsområdet
   ===================================================================== */
Portal.omrade({
  id: "mikrober-immunforsvar",
  namn: "Mikrober, immunförsvar och vaccin",
  text: "Bakterier, virus och andra mikrober, hur smitta sprids, hur kroppen försvarar sig och hur vi botar och förebygger sjukdomar.",
  bild: '<img src="biologi/mikrober-immunforsvar/bilder/kort.svg" alt="" style="width:120px;height:auto">',
  arskurs: [7, 8, 9],
  kapitel: [
    { id: "mikrober", namn: "Mikrober", farg: "green",
      text: "Bakterier, virus, svampar, protozoer, alger och arkéer." },
    { id: "smitta", namn: "Mikrober och människan", farg: "yellow",
      text: "Mikrobiomet, symbios, sjukdomar och hur smitta sprids." },
    { id: "forsvar", namn: "Kroppens försvar", farg: "blue",
      text: "Hud och slemhinnor, inflammation, lymfsystemet och immunsvaret." },
    { id: "bota", namn: "Bota och förebygga", farg: "purple",
      text: "Vaccin, antibiotika och resistens." }
  ]
});
