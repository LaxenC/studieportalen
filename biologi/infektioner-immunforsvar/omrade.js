/* =====================================================================
   ARBETSOMRÅDE – Infektioner och immunförsvar
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
  id: "infektioner-immunforsvar",
  namn: "Infektioner och immunförsvar",
  text: "Vad som smittar, infektioner och smittspridning, kroppens försvar, vaccin och antibiotika.",
  bild: '<img src="biologi/infektioner-immunforsvar/bilder/kort.svg?v=2" alt="" style="width:120px;height:auto">',
  arskurs: [7, 8, 9],
  kapitel: [
    { id: "smitta", namn: "Infektioner och smittspridning", farg: "yellow",
      text: "Infektion, symptom, epidemi och pandemi – och hur smitta sprids." },
    { id: "forsvar", namn: "Kroppens försvar", farg: "blue",
      text: "Hud och slemhinnor, inflammation, lymfsystemet och immunsvaret." },
    { id: "bota", namn: "Bota och förebygga", farg: "purple",
      text: "Vaccin, antibiotika och resistens." }
  ]
});
