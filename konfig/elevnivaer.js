/* =====================================================================
   ELEVNIVÅER – vad stjärnorna betyder
   ---------------------------------------------------------------------
   Eleven väljer 1–4 stjärnor eller Utmaning (5). Varje stjärna drar uppgifter från
   uppgiftsnivåerna 0, 1, 2 och 3 enligt procenten nedan (summa 100).
   Nivå 3 = utmaning utanför kunskapskraven. Den kommer bara med
   om du skriver in den, som i rad 5.

     { 0: 50, 1: 50 }  = hälften nivå 0, hälften nivå 1

   "standard" gäller alla årskurser som inte har en egen rad.
   Vill du ha en egen fördelning för en årskurs: kopiera standard,
   döp om den till årskursen (7, 8 eller 9) och ändra procenten.

   "Bara kör" använder alltid 2 stjärnor.
   ===================================================================== */
Portal.elevnivaer({
  standard: {
    1: { 0: 50, 1: 50 },
    2: { 0: 15, 1: 70, 2: 15 },
    3: { 1: 75, 2: 25 },
    4: { 1: 30, 2: 70 },
    5: { 2: 30, 3: 70 }    // Utmaning (raketen): nivå 3 = utanför kunskapskraven
  }
  // Exempel på egen fördelning för åk 7:
  // 7: {
  //   1: { 0: 70, 1: 30 },
  //   2: { 0: 30, 1: 60, 2: 10 },
  //   3: { 1: 80, 2: 20 },
  //   4: { 1: 40, 2: 60 }
  // }
});
