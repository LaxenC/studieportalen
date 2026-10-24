/* =====================================================================
   ARBETSOMRÅDE – Atom- och kärnfysik
   ---------------------------------------------------------------------
     id        : samma som mappens namn – ändras aldrig
     namn, text: visas för eleven
     arskurs   : vilka årskurser arbetsområdet gäller
     kapitel   : i den ordning de ska visas
        id               : kapitlets id. Texten ligger i texter/<id>.md och
                           uppgifterna i uppgifter/<id>.js
        namn, text       : visas på kapitlets kort
        bild             : (valfritt) ritning på kortet
        farg             : green | blue | yellow | orange | purple
        arskurs          : (valfritt) annars samma som arbetsområdet
        nivaForskjutning : (valfritt) flytta alla uppgifters nivå för en
                           årskurs, t.ex. { 7: 1 } = en nivå svårare för åk 7
        maxPerOvning     : (valfritt) högst så många varianter av samma
                           uppgift per övning (standard 1)
        dold             : true = visas inte
     aktiviteter : fristående lektioner (HTML-filer i mappen aktiviteter/)
   ===================================================================== */
Portal.omrade({
  id: "atom-och-karnfysik",
  namn: "Atom- och kärnfysik",
  text: "Atomens uppbyggnad, atomnotation, isotoper och joner, strålning.",
  bild: "[[kort-atom]]",
  arskurs: [7, 8, 9],
  kapitel: [
    { id: "atom", namn: "Atomens uppbyggnad", farg: "green", bild: "[[kort-atom]]",
      text: "Protoner, neutroner, elektroner, elektronskal och atommodeller.",
      arskurs: [7, 8, 9], nivaForskjutning: { 7: 1, 8: 1 } },
    { id: "notation", namn: "Atomnotation", farg: "blue", bild: "[[kort-notation]]",
      text: "Skriva och tolka atomnotation. Bestämma antal partiklar.",
      arskurs: [7, 8, 9], maxPerOvning: 2 },
    { id: "samband", namn: "Samband – isotop, ämne, jon", farg: "yellow", bild: "[[kort-samband]]",
      text: "Jämföra isotoper, ämnen och joner.",
      arskurs: [7,8,9] },
    { id: "stralning", namn: "Strålning", farg: "orange", bild: "[[kort-stralning]]",
      text: "Elektromagnetisk strålning, partikelstrålning och joniserande strålning.",
      arskurs: [7,8,9] },
    { id: "radioaktivitet", namn: "Radioaktivitet – sönderfall", farg: "purple", bild: "[[kort-stralning]]",
      text: "Instabila kärnor, radioaktivt sönderfall, mäta strålning, halveringstid och kol-14-metoden.",
      arskurs: [7, 8, 9] }
  ],
  aktiviteter: [
    { id: "kol14", namn: "Kol-14-metoden", fil: "aktiviteter/kol14.html", arskurs: [9],
      text: "Hur gammalt är ett fynd? Använd halveringstiden för kol-14." }
  ]
});
