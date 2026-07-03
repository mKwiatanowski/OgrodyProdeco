# PRODECO — nowa strona internetowa

Projekt strony dla firmy PRODECO (projektowanie i realizacja ogrodów, nawierzchni i zieleni —
Sanok, Podkarpacie). Zbudowany na **Astro + Tailwind CSS + Keystatic CMS**.

## Struktura projektu

```
├── docs/
│   ├── source-content/     ← zrekonstruowana treść obecnej strony ogrodyprodeco.pl (materiał źródłowy)
│   └── content-briefs/     ← zmodernizowane briefy contentowe dla nowej strony (punkt wyjścia do copy)
├── src/
│   ├── content/            ← treść zarządzana przez Keystatic (realizacje, usługi, opinie)
│   ├── components/         ← komponenty Astro (Header, Hero, karty, formularz kontaktowy...)
│   ├── layouts/            ← BaseLayout.astro
│   ├── pages/              ← strony: /, /o-nas, /oferta(+podstrony), /realizacje(+podstrony), /kontakt
│   └── styles/global.css   ← Tailwind + paleta marki
├── public/images/          ← miejsce na docelowe zdjęcia (puste — patrz README w każdym folderze)
├── keystatic.config.ts     ← konfiguracja panelu CMS
└── astro.config.mjs
```

## Ważne — o pochodzeniu treści

Próbowano pobrać archiwalną wersję ogrodyprodeco.pl z Wayback Machine, ale w tej sesji
`web.archive.org` był zablokowany na poziomie środowiska, a aktualna strona
ogrodyprodeco.pl jest w całości renderowana po stronie klienta (SPA), więc bezpośrednie
pobranie HTML nie zwróciło treści. Zamiast tego dane firmy i opis usług odtworzono na
podstawie profilu firmy w katalogach branżowych (Oferteo, PlanujemyOgrod.pl, ALEO.com) oraz
wyników wyszukiwania wskazujących realną strukturę i treść stron. Szczegóły i źródła:
`docs/source-content/00-README.md`.

**Nowa strona to nowy start** — briefy w `docs/content-briefs/` nie kopiują starej strony 1:1,
tylko wykorzystują fakty o firmie do zbudowania nowoczesnej struktury i tonu komunikacji.

## Uruchomienie (na komputerze z Node.js 18+)

```bash
npm install
npm run dev        # http://localhost:4321
```

Panel treści Keystatic dostępny pod `/keystatic` w trybie dev.

## Do zrobienia przed publikacją

1. Uzupełnić `public/images/` prawdziwymi zdjęciami realizacji, hero i logo firmy.
2. Zastąpić przykładowe wpisy w `src/content/realizacje/` i `src/content/opinie/` realnymi
   danymi (opinie klientów najlepiej zbierać za zgodą autorów).
3. Potwierdzić z właścicielem firmy dokładny zakres i ewentualny cennik usługi
   „Pielęgnacja zieleni” (brak tej informacji w materiałach źródłowych).
4. Skonfigurować wysyłkę formularza kontaktowego (`src/components/ContactForm.astro`) —
   np. przez API route Astro + usługę mailingową (Resend/Formspree), zmienna
   `PUBLIC_CONTACT_FORM_ENDPOINT` w `.env`.
5. Wybrać docelowy tryb storage dla Keystatic w `keystatic.config.ts`
   (obecnie `local` — do produkcji z panelem w chmurze rozważyć `github` lub `cloud`).
6. Dodać favicon/branding docelowy (obecnie prosty placeholder SVG).
