import { Post } from "@/types/wordpress";
import { stripHTML } from "@/utils/htmlDecode";
import { generateTOC, addIdsToHeadings } from "@/utils/tableOfContents";
import TableOfContents from "./TableOfContents";

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  const featuredImage = post.acf?.hero_image || null;
  const readingTime = post.acf?.reading_time || null;
  
  let content = post.acf?.article_content || post.content.rendered;
  const tocItems = generateTOC(content);
  content = addIdsToHeadings(content);

  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            {featuredImage && (
              <img
                src={featuredImage}
                alt={stripHTML(post.title.rendered)}
                className="img-fluid rounded mb-4"
              />
            )}

            {/* Mobile TOC */}
            <div className="d-lg-none mb-4">
              <TableOfContents items={tocItems} />
            </div>
            
            {readingTime && (
              <div className="mb-4">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-light rounded">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-muted"
                  >
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span className="text-muted small">{readingTime}</span>
                </div>
              </div>
            )}

            <article
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '100px' }}>
              {/* Desktop TOC */}
              <div className="d-none d-lg-block">
                <TableOfContents items={tocItems} />
              </div>
              
              <div className="bg-light p-4 rounded">
                <h5 className="fw-bold">Need SEO Help?</h5>
                <p className="text-muted">Get a free SEO audit.</p>
                <button className="btn btn-success w-100">Get SEO Audit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 