---
name: nowa-realizacja
description: Dodaje nowy wpis do portfolio realizacji (lub nową usługę / opinię klienta) zgodnie ze schematem kolekcji i konwencjami zdjęć. Użyj, gdy użytkownik chce dodać realizację, projekt do galerii, usługę do oferty albo opinię klienta.
---

# Nowy wpis w kolekcji treści

## Realizacja (najczęstszy przypadek)

1. Utwórz plik `src/content/realizacje/<slug>.md` — slug po polsku, kebab-case, bez polskich znaków (np. `ogrod-nowoczesny-zagorz.md`).
2. Frontmatter (schemat w `src/content/config.ts`):

```yaml
---
title: "Tytuł projektu"           # wymagane
lokalizacja: "Sanok"               # wymagane
rok: "2025"                        # wymagane, string
powierzchnia: "450"                # opcjonalne, m² jako string
tagi: ["ogród przydomowy", "mała architektura"]
zdjecieGlowne: "/images/realizacje/<plik>.jpg"   # opcjonalne — ścieżka publiczna (string)
galeria: ["/images/realizacje/<plik>-2.jpg"]     # opcjonalne — dodatkowe zdjęcia
wyrozniona: false                  # true = pokazuje się na stronie głównej
---
```

3. Treść pod frontmatterem: 2–4 zdania opisu w tonie marki (patrz skill `copywriting-prodeco`): co zrobiono, jakie materiały/rośliny, jaki efekt dla klienta. Konkrety zamiast ogólników.
4. Zdjęcia: wrzuć do `public/images/realizacje/`, nazwy plików kebab-case powiązane ze slugiem wpisu. Jeśli użytkownik nie dostarczył zdjęcia, pomiń `zdjecieGlowne` (pole jest opcjonalne) i powiedz mu o tym.
5. Tagi dobieraj z już używanych (sprawdź istniejące wpisy `grep tagi src/content/realizacje/`), żeby filtrowanie w galerii miało sens — nowy tag tylko gdy żaden istniejący nie pasuje.
6. Zweryfikuj: `npm run build` (walidacja Zod wyłapie błędy frontmattera).

## Usługa

Plik `src/content/uslugi/<slug>.md`. Frontmatter: `title`, `skrot` (1–2 zdania na kartę), `ikona` (nazwa ikony lucide, np. `trees`), `kolejnosc` (liczba — sprawdź istniejące, żeby nie dublować). Podstrona `/oferta/<slug>` wygeneruje się automatycznie.

## Opinia

Plik `src/content/opinie/<slug-autora>.md`. Frontmatter: `autor`, `ocena` (1–5), `data` (YYYY-MM-DD). Treść opinii pod frontmatterem. Opinie publikujemy tylko za zgodą autora — jeśli brak informacji o zgodzie, zaznacz to użytkownikowi.

## Zmiana schematu kolekcji

Jeśli wpis wymaga nowego pola: zmień **oba** pliki — `src/content/config.ts` (Zod) i `keystatic.config.ts` (formularz CMS) — inaczej panel /keystatic i build się rozjadą.
