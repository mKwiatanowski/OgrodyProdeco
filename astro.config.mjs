import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import sitemap from "@astrojs/sitemap";

// Panel Keystatic wymaga renderowania serwerowego, więc włączamy go tylko w `astro dev`
// — build produkcyjny pozostaje w pełni statyczny (bez adaptera).
const isDev = process.argv.includes("dev");

// Adres i ścieżka bazowa deploymentu. Lokalne dev/build zachowują się jak docelowa
// produkcja (własna domena, base "/"); GitHub Actions nadpisuje oba przez zmienne
// środowiskowe, bo GitHub Pages serwuje stronę z podkatalogu /OgrodyProdeco.
const site = process.env.PUBLIC_SITE_URL ?? "https://ogrodyprodeco.pl";
const base = process.env.PUBLIC_SITE_BASE ?? "/";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [...(isDev ? [keystatic()] : []), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
