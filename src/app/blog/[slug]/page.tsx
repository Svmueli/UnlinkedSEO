import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getAuthor,
  getCategory,
  getRelatedPosts,
  getMediaUrl,
} from "@/wp-cms/lib/wordpress";
import { PostHero, PostContent } from "@/components/posts";
import RelatedPosts from "@/components/posts/RelatedPosts";

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

  const [author, category, relatedPosts] = await Promise.all([
    post.author ? getAuthor(post.author) : null,
    post.categories?.[0] ? getCategory(post.categories[0]) : null,
    post.categories?.[0] ? getRelatedPosts(post.categories[0], post.id) : [],
  ]);

  // Fetch images and authors for related posts
  const [relatedPostsWithImages, relatedAuthors] = await Promise.all([
    Promise.all(
      relatedPosts.map(async (relatedPost: any) => {
        if (typeof relatedPost.acf?.hero_image === 'number') {
          relatedPost.acf.hero_image = await getMediaUrl(relatedPost.acf.hero_image);
        }
        return relatedPost;
      })
    ),
    Promise.all(
      relatedPosts.map((relatedPost: any) =>
        relatedPost.author ? getAuthor(relatedPost.author) : null
      )
    ),
  ]);

  return (
    <>
      <PostHero post={post} author={author} category={category} />
      <PostContent post={post} />
      <RelatedPosts posts={relatedPostsWithImages} authors={relatedAuthors} />
    </>
  );
}