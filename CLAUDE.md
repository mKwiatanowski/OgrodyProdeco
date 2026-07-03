# CLAUDE.md — PRODECO (strona firmowa)

Strona firmy **PRODECO Beata Bach** (projektowanie i realizacja ogrodów, nawierzchni i zieleni — Sanok, Podkarpacie). Stack: **Astro 5 + Tailwind CSS 4 + Keystatic CMS**. Cała treść strony jest **po polsku**.

## Komendy

```bash
npm install          # instalacja zależności (Node.js 18+)
npm run dev          # serwer dev → http://localhost:4321 (panel CMS: /keystatic)
npm run build        # build produkcyjny (uruchamia też walidację kolekcji content)
npx astro check      # sprawdzenie typów w plikach .astro
```

Weryfikacja zmian: `npm run build` wyłapuje błędy schematów treści i większość błędów w `.astro`; zmiany wizualne oglądaj przez `npm run dev`.

## Architektura

- `src/content/` — treść zarządzana przez Keystatic, trzy kolekcje: `realizacje`, `uslugi`, `opinie`.
  **Ważne:** schemat każdej kolekcji istnieje w DWÓCH miejscach i musi być spójny:
  `src/content/config.ts` (walidacja Zod dla Astro) **oraz** `keystatic.config.ts` (formularze panelu CMS).
  Każdą zmianę pola wprowadzaj w obu plikach.
  Pola zdjęć (`zdjecieGlowne`, `galeria`) to **stringi ze ścieżką publiczną** (np. `/images/realizacje/x.jpg`),
  renderowane zwykłym `<img>` — nie `image()` z astro:assets.
- Integracja Keystatic jest włączana **tylko w `astro dev`** (warunek w `astro.config.mjs`) — panel
  wymaga SSR, a build produkcyjny jest w pełni statyczny. Nie dodawaj `keystatic()` bezwarunkowo,
  bo build wywali się na `NoAdapterInstalled`.
- `src/pages/` — routing plikowy: `/`, `/o-nas`, `/oferta` + `/oferta/[slug]`, `/realizacje` + `/realizacje/[slug]`, `/kontakt`. Podstrony `[slug]` generują się z kolekcji — nowa usługa/realizacja = nowy plik `.md`, bez zmian w kodzie.
- `src/components/` — komponenty Astro (Header, Footer, Hero, ServiceCard, RealizacjaCard, Testimonial, CTASection, ContactForm).
- `src/styles/global.css` — paleta marki jako tokeny Tailwind 4 (`@theme`): zieleń `brand-50…900` (podstawowa `brand-600`), beże/brązy `earth-*`. Fonty: `Inter` (tekst), `Fraunces` (nagłówki, klasa `font-display`). Nie wprowadzaj kolorów spoza palety.
- `public/images/` — zdjęcia (hero, logo, realizacje). Obecnie puste — README w każdym folderze opisuje oczekiwane pliki. Zdjęcia realizacji: `public/images/realizacje/`, ścieżka publiczna `/images/realizacje/...`.
- `docs/source-content/` — fakty o firmie zrekonstruowane ze źródeł (dane teleadresowe, historia, zakres usług). **Jedyne źródło prawdy o firmie** — nie wymyślaj faktów, których tam nie ma.
- `docs/content-briefs/` — briefy contentowe dla każdej podstrony + `00-strategia-i-ton.md` (grupa docelowa, ton, USP, SEO). Punkt wyjścia dla każdej treści.

## Zasady treści

- Ton: ciepły, ale ekspercki. Krótkie zdania. Konkret zamiast ogólników („kosztorys z podziałem na etapy”, nie „profesjonalna obsługa”). Pełne zasady: `docs/content-briefs/00-strategia-i-ton.md`.
- Dane firmy (adres, telefony, NIP, godziny) bierz wyłącznie z `docs/source-content/00-README.md`.
- Usługa „Pielęgnacja zieleni”: zakres i cennik NIEPOTWIERDZONE z właścicielem — nie dopisuj szczegółów tej usługi bez potwierdzenia.
- Przykładowe wpisy w `src/content/realizacje/` i `src/content/opinie/` są placeholderami do zastąpienia realnymi danymi (oznaczone dopiskiem kursywą na końcu pliku).

## Przed publikacją (otwarte zadania)

Pełna lista w `README.md`, w skrócie: prawdziwe zdjęcia w `public/images/`, realne realizacje i opinie, konfiguracja wysyłki formularza (`PUBLIC_CONTACT_FORM_ENDPOINT` w `.env`), tryb storage Keystatic (`local` → `github`/`cloud`), docelowy favicon/logo.
