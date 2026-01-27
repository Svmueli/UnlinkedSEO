import { Post } from "@/types/wordpress";

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  const featuredImage = post.acf?.hero_image || null;
  const content = post.acf?.article_content || post.content.rendered;

  return (
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
  );
}