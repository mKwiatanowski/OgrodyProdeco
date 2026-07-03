---
name: seo-audyt
description: Audytuje stronę pod kątem lokalnego SEO i podstaw techniczych (meta tagi, nagłówki, dane strukturalne, dostępność, wydajność obrazów). Użyj gdy użytkownik prosi o audyt SEO, sprawdzenie strony przed publikacją lub poprawę widoczności w Google.
---

# Audyt SEO — PRODECO (SEO lokalne)

Frazy docelowe (z `docs/content-briefs/00-strategia-i-ton.md`): „projektowanie ogrodów Sanok”, „architekt krajobrazu Podkarpackie”, „zakładanie ogrodów Sanok”, „nawierzchnie z kostki brukowej Sanok”, „mała architektura ogrodowa”.

## Checklist — przejdź po każdej stronie w `src/pages/`

### Meta i struktura
- [ ] Każda strona przekazuje unikalny `title` (50–60 znaków, fraza lokalna + marka, np. „Projektowanie ogrodów Sanok | PRODECO”) i `description` (140–160 znaków, z CTA) do `BaseLayout.astro`. Sprawdź, czy layout w ogóle przyjmuje i renderuje te propsy — jeśli nie, dodaj.
- [ ] Dokładnie jeden `<h1>` na stronę, z frazą kluczową; hierarchia h2/h3 bez przeskoków.
- [ ] Canonical URL i `og:` tagi (title, description, image, locale `pl_PL`) w `BaseLayout.astro`.
- [ ] `lang="pl"` na `<html>`.

### SEO lokalne
- [ ] Dane strukturalne JSON-LD `LocalBusiness` (typ `Landscaper` lub `HomeAndConstructionBusiness`): nazwa, adres (ul. Szopena 10/105, 38-500 Sanok), telefon, godziny (pn–pt 8:00–17:00), obszar działania — dane z `docs/source-content/00-README.md`.
- [ ] NAP (nazwa-adres-telefon) spójne w stopce na każdej stronie.
- [ ] Podstrony usług (`/oferta/[slug]`) celują każda w inną frazę.

### Techniczne
- [ ] `public/robots.txt` wskazuje sitemap; jeśli brak integracji — dodaj `@astrojs/sitemap` do `astro.config.mjs`.
- [ ] Wszystkie `<img>` mają opisowy `alt` po polsku; zdjęcia realizacji w formacie skompresowanym, z `loading="lazy"` poza hero i `width`/`height` przeciw CLS (komponent `<Image>` z Astro robi to za darmo dla obrazów z kolekcji).
- [ ] Linkowanie wewnętrzne: strona główna → oferta → realizacje → kontakt; podstrony realizacji linkują do powiązanych usług.
- [ ] `npm run build` przechodzi bez ostrzeżeń o treści.

## Raportowanie

Wynik audytu podaj jako listę problemów posortowaną wg wpływu (blokery indeksacji → treść/meta → optymalizacje). Przy każdym problemie: plik i linia, propozycja poprawki. Nie wprowadzaj zmian bez prośby — audyt to diagnoza.
