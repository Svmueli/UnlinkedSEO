import { notFound } from "next/navigation";
import { getPostBySlug } from "@/wp-cms/lib/wordpress";

export const revalidate = 3600; // Revalidate every hour
export const dynamicParams = true; // Allow new posts without rebuild

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API}/posts`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) return [];
    
    const posts = await res.json();

    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) return notFound();

  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const featuredImage = post.acf?.hero_image || null;
  const content = post.acf?.article_content || post.content.rendered;

  return (
    <section className="bg-light py-5">
      <div className="container">
        <p className="small text-muted">Blog</p>

        <div className="row g-4">
          {/* Main Content */}
          <div className="col-lg-8">
            <h1
              className="fw-bold mb-4"
              dangerouslySetInnerHTML={{
                __html: post.title.rendered,
              }}
            />

            {featuredImage && (
              <img
                src={featuredImage}
                alt={post.title.rendered}
                className="img-fluid rounded-3 mb-4"
              />
            )}

            <article
              className="bg-white p-4 shadow-sm rounded blog-content"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="bg-white p-4 shadow-sm rounded sticky-top">
              <h5 className="fw-bold">Need SEO Help?</h5>
              <p className="text-muted">
                Get a free SEO audit tailored to your website.
              </p>
              <button className="btn btn-success w-100">
                Get SEO Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}