---
name: uruchom-strone
description: Uruchamia stronę lokalnie i weryfikuje zmiany (serwer dev, build, panel Keystatic). Użyj gdy trzeba zobaczyć efekt zmian, sprawdzić stronę w przeglądarce lub upewnić się, że build przechodzi.
---

# Uruchamianie i weryfikacja strony

## Szybka weryfikacja (bez przeglądarki)

```powershell
npm run build      # walidacja schematów treści (Zod) + błędy kompilacji .astro
npx astro check    # dodatkowa kontrola typów TypeScript w .astro
```

Build przechodzi = frontmatter wszystkich wpisów zgodny ze schematem i strony się generują. To wystarczająca weryfikacja dla zmian w treści (`src/content/`, `docs/`).

## Serwer dev (zmiany wizualne, komponenty, style)

```powershell
npm run dev        # http://localhost:4321
```

- Uruchamiaj w tle (run_in_background), serwer nie kończy się sam.
- Gotowość poznasz po linii `Local http://localhost:4321/` w wyjściu.
- Panel CMS: http://localhost:4321/keystatic (tylko w trybie dev, storage `local`).
- Podstrony do sprawdzenia: `/`, `/o-nas`, `/oferta`, `/oferta/projektowanie-ogrodow`, `/realizacje`, `/kontakt`.
- Weryfikacja treści bez przeglądarki: `curl http://localhost:4321/<sciezka>` i sprawdź HTML.
- Po skończeniu zatrzymaj serwer (nie zostawiaj procesu w tle).

## Typowe problemy

- Port 4321 zajęty → poprzedni serwer dev wciąż działa; znajdź i zamknij proces zamiast zmieniać port.
- Błąd `Could not find requested image` przy buildzie → frontmatter `zdjecieGlowne` wskazuje nieistniejący plik w `public/images/realizacje/`.
- Zmiana w `keystatic.config.ts` lub `src/content/config.ts` wymaga restartu serwera dev.
