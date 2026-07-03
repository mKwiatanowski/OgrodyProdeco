import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    // Tryb lokalny (edycja przez `npm run dev` + panel /keystatic).
    // Do wdrożenia na produkcję z panelem w chmurze zmień na:
    // { kind: "cloud" } (wymaga konta Keystatic Cloud) lub { kind: "github", repo: "org/repo" }
    kind: "local",
  },
  ui: {
    brand: { name: "PRODECO – panel treści" },
  },
  collections: {
    realizacje: collection({
      label: "Realizacje",
      slugField: "title",
      path: "src/content/realizacje/*",
      format: { contentField: "opis" },
      schema: {
        title: fields.slug({ name: { label: "Tytuł projektu" } }),
        lokalizacja: fields.text({ label: "Lokalizacja" }),
        rok: fields.text({ label: "Rok realizacji" }),
        powierzchnia: fields.text({ label: "Powierzchnia (m²)" }),
        tagi: fields.array(
          fields.text({ label: "Tag" }),
          {
            label: "Tagi (np. ogród przydomowy, nawierzchnie, oświetlenie)",
            itemLabel: (props) => props.value,
          }
        ),
        zdjecieGlowne: fields.image({
          label: "Zdjęcie główne",
          directory: "public/images/realizacje",
          publicPath: "/images/realizacje/",
        }),
        galeria: fields.array(
          fields.image({
            label: "Zdjęcie",
            directory: "public/images/realizacje",
            publicPath: "/images/realizacje/",
          }),
          { label: "Galeria zdjęć", itemLabel: () => "Zdjęcie" }
        ),
        wyrozniona: fields.checkbox({
          label: "Pokaż na stronie głównej",
          defaultValue: false,
        }),
        opis: fields.mdx({ label: "Opis realizacji" }),
      },
    }),
    uslugi: collection({
      label: "Usługi (oferta)",
      slugField: "title",
      path: "src/content/uslugi/*",
      format: { contentField: "opis" },
      schema: {
        title: fields.slug({ name: { label: "Nazwa usługi" } }),
        skrot: fields.text({
          label: "Krótki opis (karta na stronie głównej / listing oferty)",
          multiline: true,
        }),
        ikona: fields.text({ label: "Nazwa ikony (lucide-react), np. 'trees'" }),
        kolejnosc: fields.integer({ label: "Kolejność wyświetlania", defaultValue: 0 }),
        opis: fields.mdx({ label: "Pełny opis usługi" }),
      },
    }),
    opinie: collection({
      label: "Opinie klientów",
      slugField: "autor",
      path: "src/content/opinie/*",
      format: { contentField: "tresc" },
      schema: {
        autor: fields.slug({ name: { label: "Autor opinii" } }),
        ocena: fields.integer({ label: "Ocena (1-5)", defaultValue: 5 }),
        data: fields.date({ label: "Data opinii" }),
        tresc: fields.mdx({ label: "Treść opinii" }),
      },
    }),
  },
});
