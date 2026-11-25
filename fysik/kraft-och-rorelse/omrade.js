/* =====================================================================
   ARBETSOMRÅDE – Kraft och rörelse
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
  id: "kraft-och-rorelse",
  namn: "Kraft och rörelse",
  text: "Krafter, tyngd, rörelse, friktion, tröghet, fritt fall, arbete och effekt.",
  bild: '<img src="fysik/kraft-och-rorelse/bilder/kort.svg?v=1" alt="" style="width:120px;height:auto">',
  arskurs: [7],
  kapitel: [
    { id: "kraft", namn: "Kraft, massa och tyngd", farg: "yellow", bild: '<div class="art"><img src="fysik/kraft-och-rorelse/bilder/kort-kraft.svg?v=1" alt="" style="height:96px;width:auto"></div>',
      text: "Vad är en kraft – och varför välter vissa saker?" },
    { id: "rorelse", namn: "Kraft skapar rörelse", farg: "orange", bild: '<div class="art"><img src="fysik/kraft-och-rorelse/bilder/kort-rorelse.svg?v=1" alt="" style="height:96px;width:auto"></div>',
      text: "Varför rullar saker vidare – och varför stannar de till slut?" },
    { id: "centripetal", namn: "Centripetalkraft och fritt fall", farg: "purple", bild: '<div class="art"><img src="fysik/kraft-och-rorelse/bilder/kort-centripetal.svg?v=1" alt="" style="height:96px;width:auto"></div>',
      text: "Vad håller månen kvar runt jorden – och vad faller fortast?" },
    { id: "arbete", namn: "Arbete och effekt", farg: "red", bild: '<div class="art"><img src="fysik/kraft-och-rorelse/bilder/kort-arbete.svg?v=1" alt="" style="height:96px;width:auto"></div>',
      text: "Hur kan en hävstång göra det lättare att lyfta något tungt?" }
  ]
});
