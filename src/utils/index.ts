export function fetchURL(src: string) {
  return new URL(src, import.meta.url).href;
}
