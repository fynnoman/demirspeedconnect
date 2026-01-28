# Stoffwechsel - Modern Fashion Store

Eine moderne, elegante Website für das Modegeschäft **Stoffwechsel**, gebaut mit Next.js, React, TypeScript und Tailwind CSS.

## 🎨 Design

Die Website verwendet eine edle Farbpalette:
- **Primäres Weiß**: `#FFFFFF`
- **Dunkles Grau**: `#1A1A1A` (elegant)
- **Helles Grau**: `#E5E5E5` (clean)
- **Neon Blau**: `#00D9FF` (Buttons & Akzente)

### Design-Merkmale
- Moderner, cleaner Stil
- Geometrische Formen strategisch platziert
- Kantige, zueinander passende Elemente
- Große, eindrucksvolle Bilder
- Minimalistischer Ansatz

## 🚀 Erste Schritte

Development-Server starten:

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser.

## 📦 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **UI Library**: React 19+
- **Styling**: Tailwind CSS
- **Sprache**: TypeScript
- **Build Tool**: Turbopack

## 🛠️ Entwicklung

Die Hauptseite befindet sich in `src/app/page.tsx`. Änderungen werden automatisch im Browser aktualisiert.

### Projektstruktur

```
stoffwechsel/
├── src/
│   └── app/
│       ├── page.tsx          # Hauptseite
│       ├── layout.tsx         # Layout-Komponente
│       └── globals.css        # Globale Styles
├── public/                    # Statische Assets
└── .github/
    └── copilot-instructions.md
```

## 📝 Hinweise

- Die Platzhalter für Bilder sollten durch echte Produktfotos ersetzt werden
- Alle Links und Formulare sind als Beispiele implementiert und müssen mit Backend-Funktionalität verbunden werden
- Die Navigation ist responsiv und funktioniert auf allen Geräten

## 🚀 Deployment

Am einfachsten mit [Vercel](https://vercel.com/new):

```bash
npm run build
```

Weitere Informationen finden Sie in der [Next.js Deployment-Dokumentation](https://nextjs.org/docs/app/building-your-application/deploying).
