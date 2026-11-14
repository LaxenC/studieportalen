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
  arskurs: [7],
  kapitel: [
    { id: "kraft", namn: "Kraft, massa och tyngd", farg: "yellow",
      text: "Vad en kraft gör, kraftpilar, tyngdkraft och balans." },
    { id: "rorelse", namn: "Kraft skapar rörelse", farg: "orange",
      text: "Olika rörelser, medelhastighet, friktion, luftmotstånd och tröghet." },
    { id: "centripetal", namn: "Centripetalkraft och fritt fall", farg: "purple",
      text: "Cirkelrörelse, centrifugalkraft och fritt fall." },
    { id: "arbete", namn: "Arbete och effekt", farg: "red",
      text: "Fysikaliskt arbete, mekanikens gyllene regel, energi och effekt." }
  ]
});
