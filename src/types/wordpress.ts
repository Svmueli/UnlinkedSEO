export interface Post {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  author: number;
  categories: number[];
  acf?: {
    hero_image?: string;
    article_content?: string;
    subtitle?: string;
    author_name?: string;
    author_role?: string;
    category?: string;
  };
}

export interface Author {
  id: number;
  name: string;
  avatar_urls?: {
    [key: string]: string;
  };
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}