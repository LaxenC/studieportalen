# Studieportalen

Läs, plugga och öva i fysik, kemi, biologi och matematik.

- **Portalen:** `index.html`
- **Granska uppgifter (för läraren):** `granska.html`
- **Översikt och varningar (för läraren):** `struktur.html`

## Lägga till innehåll

Allt innehåll ligger i ämnenas mappar, t.ex. `fysik/atom-och-karnfysik/`.

- Hur allt hänger ihop: [STRUKTUR.md](STRUKTUR.md)
- Mallar att kopiera: [mallar.md](mallar.md)

Efter en ändring: öppna `struktur.html` och kontrollera att det inte finns några varningar.

## Publicera med GitHub Pages

1. Gå till repots **Settings → Pages**.
2. Under *Build and deployment*: välj **Deploy from a branch**, branch **main** och mappen **/ (root)**. Tryck **Save**.
3. Efter någon minut finns sidan på `https://<användarnamn>.github.io/<repo>/`.

Ändringar syns på sidan någon minut efter att de har sparats i repot.

## Prova på den egna datorn

Sidan läser textfiler och fungerar därför inte om man bara dubbelklickar på `index.html`.
Starta en enkel webbserver i mappen, t.ex. `python3 -m http.server`, och öppna `http://localhost:8000`.
