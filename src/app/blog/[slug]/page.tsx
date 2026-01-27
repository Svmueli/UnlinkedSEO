import { notFound } from "next/navigation";
import { getPostBySlug, getAuthor, getCategory } from "@/wp-cms/lib/wordpress";
import AIActionButtons from "@/components/AIActionButtons";
import SocialButtons from "@/components/SocialButtons";
import Breadcrumb from "@/components/Breadcrumb";

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

  const featuredImage = post.acf?.hero_image || null;
  const content = post.acf?.article_content || post.content.rendered;
  const author = post.author ? await getAuthor(post.author) : null;
  const category = post.categories?.[0]
    ? await getCategory(post.categories[0])
    : null;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title.rendered.replace(/<[^>]*>/g, "") }
            ]}
          />

          {/* Title */}
          <h1
            className="blog-post-title"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Desktop Layout */}
          <div className="d-none d-lg-block">
            <p className="blog-post-subtitle">
              {(
                post.acf?.subtitle ||
                post.excerpt?.rendered?.replace(/<[^>]*>/g, "") ||
                ""
              )
                .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
                .replace(/&[a-z]+;/gi, (entity) => {
                  const map = {
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
                })}
            </p>

            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-start gap-3">
                <img
                  src={author?.avatar_urls?.["96"] || "/default-avatar.png"}
                  alt="Author"
                  className="rounded-circle"
                  width="64"
                  height="64"
                />
                <div>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="fw-semibold">
                      By {post.acf?.author_name || "Mark Wesley"}
                    </span>
                    <span className="text-muted">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-muted">{category?.name || "SEO"}</span>
                  </div>
                  <AIActionButtons postLink={post.link} />
                </div>
              </div>
              <SocialButtons postUrl={post.link} postTitle={post.title.rendered.replace(/<[^>]*>/g, "")} />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="d-lg-none">
            <div className="mb-3">
              <img
                src={author?.avatar_urls?.["96"] || "/default-avatar.png"}
                alt="Author"
                className="rounded-circle"
                width="64"
                height="64"
              />
            </div>

            <div className="mb-3">
              <span className="fw-semibold d-block mb-2">
                By {post.acf?.author_name || "Mark Wesley"}
              </span>
              <div className="d-flex gap-3 text-muted small">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>{category?.name || "SEO"}</span>
              </div>
            </div>

            <div className="mb-4">
              <AIActionButtons postLink={post.link} />
            </div>

            <p className="blog-post-subtitle mb-4">
              {(
                post.acf?.subtitle ||
                post.excerpt?.rendered?.replace(/<[^>]*>/g, "") ||
                ""
              )
                .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
                .replace(/&[a-z]+;/gi, (entity) => {
                  const map = {
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
                })}
            </p>

            <div className="d-flex justify-content-center">
              <SocialButtons postUrl={post.link} postTitle={post.title.rendered.replace(/<[^>]*>/g, "")} />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              {featuredImage && (
                <img
                  src={featuredImage}
                  alt={post.title.rendered}
                  className="img-fluid rounded mb-4"
                />
              )}
              <article
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            <div className="col-lg-4">
              <div className="bg-light p-4 rounded sticky-top">
                <h5 className="fw-bold">Need SEO Help?</h5>
                <p className="text-muted">Get a free SEO audit.</p>
                <button className="btn btn-success w-100">Get SEO Audit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}