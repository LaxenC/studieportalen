/* =====================================================================
   ARBETSOMRÅDE – Naturvetenskapligt arbetssätt
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
  id: "arbetssatt-kemi",
  namn: "Naturvetenskapligt arbetssätt",
  text: "Hur naturvetenskap arbetar, hur man gör en undersökning och vad som gör kemin speciell.",
  arskurs: [7, 8, 9],
  kapitel: [
    { id: "naturvetenskap", namn: "Vad är naturvetenskap?", farg: "green",
      text: "" },
    { id: "undersokning", namn: "Göra en undersökning", farg: "blue",
      text: "" },
    { id: "kemi-vetenskap", namn: "Kemi som vetenskap", farg: "purple",
      text: "" }
  ]
});
