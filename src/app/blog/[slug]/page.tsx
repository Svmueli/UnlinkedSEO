import { notFound } from "next/navigation";
import { getPostBySlug, getAuthor, getCategory } from "@/wp-cms/lib/wordpress";
import { PostHero, PostContent } from "@/components/posts";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API}/posts`);
  const posts = await res.json();
  return posts.map((post: any) => ({ slug: post.slug }));
}

type PageProps = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) return notFound();

  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const [author, category] = await Promise.all([
    post.author ? getAuthor(post.author) : null,
    post.categories?.[0] ? getCategory(post.categories[0]) : null,
  ]);

  return (
    <>
      <PostHero post={post} author={author} category={category} />
      <PostContent post={post} />
    </>
  );
}