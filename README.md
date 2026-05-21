# Denté — Next.js 14 Website

Strona stomatologiczna marki **Denté** zbudowana w Next.js 14 + TypeScript + CSS Modules.

## Uruchomienie

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000)

## Struktura

```
src/app/
├── layout.tsx              # Root layout (fonts, metadata)
├── page.tsx                # Strona główna
├── globals.css             # Zmienne CSS + globalne style
└── components/
    ├── Navbar.tsx/.module.css      # Nawigacja (desktop + mobile drawer)
    ├── Hero.tsx/.module.css        # Sekcja hero z countdown
    ├── ContactSection.tsx/.module.css  # Formularz kontaktowy
    └── Footer.tsx/.module.css      # Stopka z wordmarkiem
```

## Konfiguracja

Zmień dane kontaktowe w:
- `components/Hero.tsx` — telefon, adres
- `components/Footer.tsx` — godziny, kontakt, social media
- `app/layout.tsx` — metadata (tytuł, opis)

## Zamiana formularza

W `ContactSection.tsx` znajdź komentarz `// Simulate async request` i zastąp symulację rzeczywistym wywołaniem API (np. Resend, EmailJS, własny endpoint `/api/contact`).

## Kolory marki (globals.css)

| Zmienna   | Wartość   |
|-----------|-----------|
| `--deep`  | `#052C40` |
| `--sky`   | `#649AAD` |
| `--slate` | `#7c898b` |
| `--sand`  | `#e4e2dd` |
