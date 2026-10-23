# Gör om HOWTO.md till "Guide för lärare.pdf". Behövs bara om HOWTO.md ändras.
import re, markdown, pathlib, subprocess, sys
R = pathlib.Path("/home/claude/no-portal")
md = (R / "HOWTO.md").read_text()
md = md.replace("# Så här gör du – inställningar i konfigurationen\n", "", 1)
# länkar till andra filer i repot pekar till GitHub
md = re.sub(r"\]\((mallar|STRUKTUR)\.md\)", r"](https://github.com/LaxenC/NO-portal/blob/main/\1.md)", md)

def listfix(t):
    ut, i_kod, forra = [], False, ""
    for l in t.split("\n"):
        if l.startswith("```"): i_kod = not i_kod
        if not i_kod and re.match(r"(- |\d+\. )", l) and forra.strip() and not re.match(r"(- |\d+\. |\s)", forra):
            ut.append("")
        ut.append(l); forra = l
    return "\n".join(ut)
md = listfix(md)

def slug(v, sep):
    return re.sub(r"[^\w\- ]", "", v.strip().lower()).replace(" ", "-")

html = markdown.markdown(md, extensions=["tables", "fenced_code", "toc"], extension_configs={"toc": {"slugify": slug}})
# gör "Innehåll"-listan till två spalter
html = html.replace("<h2 id=\"innehåll\">Innehåll</h2>", "<h2 id=\"innehåll\" class=\"ny\">Innehåll</h2><div class=\"toc\">", 1)
html = re.sub(r"(<div class=\"toc\">.*?)(<hr />)", r"\1</div>\2", html, count=1, flags=re.S)
# varje numrerad rubrik börjar på ny sida om den inte får plats
html = re.sub(r"<h2 id=\"(\d+)-", r'<h2 class="del" id="\1-', html)

CSS = """
@page{size:A4;margin:18mm 16mm 18mm 16mm}
:root{--ink:#152238;--muted:#4f5d75;--line:#d5deeb;--accent:#2563eb;--soft:#eef3fb}
*{box-sizing:border-box}
body{margin:0;font:10.5pt/1.5 "Nunito","Segoe UI",system-ui,sans-serif;color:var(--ink)}
.omslag{height:250mm;display:flex;flex-direction:column;justify-content:center;gap:10mm;page-break-after:always;padding:0 6mm}
.omslag .ikon{font-size:54pt;line-height:1}
.omslag h1{font-size:34pt;line-height:1.05;margin:0;font-weight:900}
.omslag .under{font-size:15pt;color:var(--muted);margin:0;max-width:150mm}
.omslag .ruta{background:var(--soft);border-radius:6mm;padding:7mm 8mm;font-size:12pt;max-width:160mm}
.omslag .ruta b{color:var(--accent)}
h2{font-size:17pt;font-weight:900;margin:9mm 0 3mm;padding-bottom:2mm;border-bottom:2.5px solid var(--accent);break-after:avoid}
h2.ny{break-before:page}
h3{font-size:12.5pt;font-weight:900;color:var(--accent);margin:6mm 0 2mm;break-after:avoid}
p{margin:0 0 2.5mm}
ul,ol{margin:0 0 3mm;padding-left:6mm}
li{margin:0 0 1mm}
a{color:var(--accent);text-decoration:none}
code{font-family:"Consolas","DejaVu Sans Mono",monospace;font-size:9pt;background:var(--soft);padding:0 1.2mm;border-radius:1.2mm}
pre{background:#1e293b;color:#e2e8f0;border-radius:3mm;padding:4mm 5mm;font-size:8.8pt;line-height:1.5;white-space:pre-wrap;break-inside:avoid;margin:0 0 4mm}
pre code{background:none;padding:0;color:inherit;font-size:inherit}
table{width:100%;border-collapse:collapse;margin:0 0 4mm;font-size:9.6pt;break-inside:auto}
th{background:var(--soft);text-align:left;font-weight:900}
th,td{padding:1.8mm 2.5mm;border-bottom:1px solid var(--line);vertical-align:top}
tr{break-inside:avoid}
hr{border:0;margin:0}
.toc{columns:2;column-gap:10mm}
.toc p{break-after:avoid;margin:3mm 0 1mm}
.toc ol,.toc ul{margin:0}
strong{font-weight:900}
"""
OMSLAG = """<section class="omslag">
<div class="ikon">📘</div>
<h1>Studieportalen<br>Guide för lärare</h1>
<p class="under">Så lägger du in ämnen, kapitel, texter, uppgifter och nivåer – utan att kunna koda.</p>
<div class="ruta"><b>Tre saker att komma ihåg</b><br>
1. Kopiera något som redan finns och ändra i kopian.<br>
2. Ändra bara text inom citattecken och siffror.<br>
3. Kommatecken mellan sakerna i en lista.</div>
<p class="under" style="font-size:11pt">Mallar för alla uppgiftstyper: <b>mallar.md</b> · Översikt och felkontroll: <b>struktur.html</b></p>
</section>"""
doc = f"""<!doctype html><html lang="sv"><head><meta charset="utf-8"><title>Studieportalen – guide för lärare</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;700;900&display=swap"><style>{CSS}</style></head>
<body>{OMSLAG}{html}</body></html>"""
out = pathlib.Path("/tmp/claude-0/bygg/guide.html"); out.write_text(doc)
print("html klar")
