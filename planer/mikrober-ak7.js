/* =====================================================================
   STUDIEPLAN – Mikrober (åk 7)
   Målen kommer från en lärares "studiekompis". Varje mål pekar på
   avsnitt i portalen: "område/kapitel/avsnitt" (avsnitt kan utelämnas).
   saknas: text som visas när portalen inte täcker målet helt.
   Adress: #/plan/mikrober-ak7
   ===================================================================== */
Portal.plan({
  id: "mikrober-ak7",
  titel: "Mikrober – studiekompis",
  text: "Det här ska du kunna. Bocka av målen när du kan dem.",
  arskurs: 7,
  mal: [
    { text: "Lär dig de 3 typerna av mikrober.",
      avsnitt: ["infektioner-immunforsvar/smitta/vadsmittar", "evolution-mangfald/mikroorganismer/bakterier",
                "evolution-mangfald/mikroorganismer/virus", "evolution-mangfald/mikroorganismer/svampar"] },
    { text: "Hur mikrober överförs från person till person.",
      avsnitt: ["infektioner-immunforsvar/smitta/smittspridning"] },
    { text: "Hur mikrober kan komma in i kroppen.",
      avsnitt: ["infektioner-immunforsvar/smitta/smittspridning", "infektioner-immunforsvar/forsvar/hud"],
      saknas: "En samlad lista över vägarna in i kroppen (mun, näsa, ögon, sår …) finns inte i portalen än." },
    { text: "Hur man stoppar spridningen av mikrober.",
      avsnitt: ["infektioner-immunforsvar/smitta/smittspridning", "infektioner-immunforsvar/bota/vaccin"] },
    { text: "Hur immunförsvaret fungerar.",
      avsnitt: ["infektioner-immunforsvar/forsvar/oversikt", "infektioner-immunforsvar/forsvar/inflammation",
                "infektioner-immunforsvar/forsvar/lymfsystemet", "infektioner-immunforsvar/forsvar/immunsvar",
                "infektioner-immunforsvar/forsvar/minne"] },
    { text: "Hur vacciner fungerar.",
      avsnitt: ["infektioner-immunforsvar/bota/vaccin"] },
    { text: "Alexander Fleming och Edward Jenners historia.",
      avsnitt: ["infektioner-immunforsvar/bota/antibiotika", "infektioner-immunforsvar/bota/vaccin"] }
  ]
});
