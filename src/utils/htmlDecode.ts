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
        lsquo: "\u2018",
        rsquo: "\u2019",
      };
      return map[entity.slice(1, -1)] || entity;
    });
}

export function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}