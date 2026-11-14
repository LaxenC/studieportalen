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
  id: "arbetssatt-fysik",
  namn: "Naturvetenskapligt arbetssätt",
  text: "Hur naturvetenskap arbetar, hur man gör en undersökning och vad som gör fysiken speciell.",
  arskurs: [7, 8, 9],
  kapitel: [
    { id: "naturvetenskap", namn: "Vad är naturvetenskap?", farg: "green",
      text: "Hypotes, teori och belägg – och vad fysik, kemi och biologi undersöker." },
    { id: "undersokning", namn: "Göra en undersökning", farg: "blue",
      text: "Från frågeställning till slutsats och labbrapport." },
    { id: "fysik-vetenskap", namn: "Fysik som vetenskap", farg: "purple",
      text: "Att mäta – storheter, enheter och prefix – och att använda modeller." }
  ]
});
