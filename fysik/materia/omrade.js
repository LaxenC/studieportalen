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
  text: "Kroppar, partiklar, atomer och molekyler – och densitet.",
  bild: '<img src="fysik/materia/bilder/kort.svg?v=1" alt="" style="width:120px;height:auto">',
  arskurs: [7],
  kapitel: [
    { id: "materia", namn: "Materia", farg: "green", bild: '<div class="art"><img src="fysik/materia/bilder/kort-materia.svg?v=1" alt="" style="height:96px;width:auto"></div>',
      text: "Kroppar och partiklar, atomen och molekyler." },
    { id: "egenskaper", namn: "Densitet", farg: "blue", bild: '<div class="art"><img src="fysik/materia/bilder/kort-densitet.svg?v=1" alt="" style="height:96px;width:auto"></div>',
      text: "Massa, volym och densitet – och varför saker flyter eller sjunker." }
  ]
});
