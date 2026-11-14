/* =====================================================================
   ÄMNEN – vilka ämnen som visas på startsidan
   ---------------------------------------------------------------------
     id       : mappens namn (t.ex. "fysik" -> mappen fysik/)
     namn     : visas på startsidan
     text     : kort beskrivning
     bild     : (valfritt) ritning, t.ex. "[[amne-fysik]]"
     omraden  : arbetsområden i ämnet = mappnamn inne i ämnets mapp.
                Varje arbetsområde har en fil omrade.js.
   ===================================================================== */
Portal.installningar({
  titel: "Studieportalen",
  text: "Läs, plugga och öva i NO och matematik."
});

Portal.amnen([
  { id: "fysik",     namn: "Fysik",     bild: "[[amne-fysik]]",
    text: "Atomer, strålning, krafter, energi och elektricitet.",
    omraden: ["arbetssatt-fysik", "materia", "kraft-och-rorelse", "atom-och-karnfysik"] },
  { id: "kemi",      namn: "Kemi",      bild: "[[amne-kemi]]",
    text: "Ämnen, reaktioner och kemiska formler.",
    omraden: ["arbetssatt-kemi"] },
  { id: "biologi",   namn: "Biologi",   bild: "[[amne-biologi]]",
    text: "Kroppen, ekologi, celler och evolution.",
    omraden: ["arbetssatt-biologi", "evolution-mangfald", "infektioner-immunforsvar"] },
  { id: "matematik", namn: "Matematik", bild: "[[amne-matematik]]",
    text: "Tal, algebra, geometri och statistik.",
    omraden: [] }
]);
