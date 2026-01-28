export const dynamic = "force-dynamic";

import { getPosts } from "@/wp-cms/lib/wordpress";
// Change BlogLayoutClient to BlogLayout
import BlogLayout from "@/components/BlogLayout"; 

export default async function BlogPage() {
  let posts: any[] = [];

  try {
    const data = await getPosts();
    posts = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  // Use the correct component name here
  return <BlogLayout posts={posts} />;
}