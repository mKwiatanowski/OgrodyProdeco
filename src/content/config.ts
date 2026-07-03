import { defineCollection, z } from "astro:content";

const realizacje = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    lokalizacja: z.string(),
    rok: z.string(),
    powierzchnia: z.string().optional(),
    tagi: z.array(z.string()).default([]),
    // Ścieżka publiczna zdjęcia (np. /images/realizacje/foo.jpg) — spójna z Keystatic
    zdjecieGlowne: z.string().optional(),
    galeria: z.array(z.string()).default([]),
    wyrozniona: z.boolean().default(false),
  }),
});

const uslugi = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    skrot: z.string(),
    ikona: z.string().optional(),
    kolejnosc: z.number().default(0),
  }),
});

const opinie = defineCollection({
  type: "content",
  schema: z.object({
    autor: z.string(),
    ocena: z.number().min(1).max(5).default(5),
    data: z.coerce.date(),
  }),
});

export const collections = { realizacje, uslugi, opinie };
