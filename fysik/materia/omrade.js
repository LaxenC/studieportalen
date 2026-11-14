/* =====================================================================
   ARBETSOMRÅDE – Materia
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
  id: "materia",
  namn: "Materia",
  text: "Kroppar, partiklar, atomer och molekyler – och materiens egenskaper.",
  arskurs: [7],
  kapitel: [
    { id: "materia", namn: "Materia", farg: "green",
      text: "Kroppar och partiklar, atomen och molekyler." },
    { id: "egenskaper", namn: "Materiens egenskaper", farg: "blue",
      text: "Massa, volym, densitet – och varför saker flyter eller sjunker." }
  ]
});
