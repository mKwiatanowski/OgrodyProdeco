/**
 * Dokleja bazowy prefiks deploymentu (import.meta.env.BASE_URL) do ścieżki wewnętrznej.
 *
 * Konwencja w projekcie: wszystkie linki wewnętrzne i ścieżki obrazów podajemy jako
 * root-absolutne ("/oferta", "/images/..."), a komponenty przepuszczają je przez url()
 * tuż przed renderem. Dzięki temu strona działa zarówno pod własną domeną (base "/"),
 * jak i w podkatalogu GitHub Pages (base "/OgrodyProdeco").
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return `${base}${path}`;
}
