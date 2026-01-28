const WP_API = process.env.NEXT_PUBLIC_WP_API;

if (!WP_API) {
  throw new Error("NEXT_PUBLIC_WP_API is not defined");
}

export async function getPosts() {
  const res = await fetch(`${WP_API}/posts?_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPostBySlug(slug: string) {
  if (!slug) return null;

  const res = await fetch(`${WP_API}/posts?slug=${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const posts = await res.json();
  const post = posts[0] ?? null;

  if (post && post.acf?.hero_image) {
    const mediaRes = await fetch(`${WP_API}/media/${post.acf.hero_image}`);
    if (mediaRes.ok) {
      const media = await mediaRes.json();
      post.acf.hero_image = media.source_url;
    }
  }

  return post;
}

export async function getAuthor(authorId: number) {
  const res = await fetch(`${WP_API}/users/${authorId}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function getCategory(categoryId: number) {
  const res = await fetch(`${WP_API}/categories/${categoryId}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function getRelatedPosts(
  categoryId: number,
  currentPostId: number,
  limit: number = 3,
) {
  const res = await fetch(
    `${WP_API}/posts?categories=${categoryId}&per_page=${limit + 1}&_fields=id,slug,title,date,author,acf,excerpt`,
  );
  
  if (!res.ok) return [];
  
  const posts = await res.json();
  return posts.filter((post: any) => post.id !== currentPostId).slice(0, limit);
}

export async function getMediaUrl(mediaId: number): Promise<string | null> {
  try {
    const res = await fetch(`${WP_API}/media/${mediaId}?_fields=source_url`);
    if (!res.ok) return null;
    const media = await res.json();
    return media.source_url || null;
  } catch {
    return null;
  }
}