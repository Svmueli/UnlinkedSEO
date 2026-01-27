import * as cheerio from 'cheerio';

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function generateTOC(htmlContent: string): TOCItem[] {
  const $ = cheerio.load(htmlContent);
  const headings = $('h2, h3, h4');
  
  const toc: TOCItem[] = [];
  
  headings.each((index, element) => {
    const text = $(element).text();
    const id = `heading-${index}`;
    const level = parseInt(element.tagName[1]);
    
    toc.push({ id, text, level });
  });
  
  return toc;
}

export function addIdsToHeadings(htmlContent: string): string {
  const $ = cheerio.load(htmlContent, null, false);
  const headings = $('h2, h3, h4');
  
  headings.each((index, element) => {
    $(element).attr('id', `heading-${index}`);
  });
  
  return $.html();
}