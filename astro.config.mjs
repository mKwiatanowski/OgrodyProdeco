import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import sitemap from "@astrojs/sitemap";

// Panel Keystatic wymaga renderowania serwerowego, więc włączamy go tylko w `astro dev`
// — build produkcyjny pozostaje w pełni statyczny (bez adaptera).
const isDev = process.argv.includes("dev");

// https://astro.build/config
export default defineConfig({
  site: "https://ogrodyprodeco.pl",
  integrations: [...(isDev ? [keystatic()] : []), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
