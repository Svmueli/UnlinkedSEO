export function decodeHTML(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/&[a-z]+;/gi, (entity) => {
      const map: Record<string, string> = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"',
        ldquo: '"',
        rdquo: '"',
        lsquo: "'",
        rsquo: "'",
        "#8220": '"',
        "#8221": '"',
      };
      return map[entity.slice(1, -1)] || entity;
    });
}

export function stripHTML(html: string): string {
  return decodeHTML(html.replace(/<[^>]*>/g, ""));
}