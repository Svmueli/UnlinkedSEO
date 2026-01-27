import { Post, Author, Category } from "@/types/wordpress";
import { decodeHTML, stripHTML } from "@/utils/htmlDecode";
import { formatPostDate } from "@/utils/dateFormatters";
import { DEFAULT_AUTHOR, DEFAULT_CATEGORY, DEFAULT_AVATAR } from "@/constants/defaults";
import AIActionButtons from "@/components/AIActionButtons";
import SocialButtons from "@/components/SocialButtons";
import Breadcrumb from "@/components/Breadcrumb";
import PostMetadata from "./PostMetadata";
import PostSubtitle from "./PostSubtitle";

interface PostHeroProps {
  post: Post;
  author: Author | null;
  category: Category | null;
}

export default function PostHero({ post, author, category }: PostHeroProps) {
  const subtitle = decodeHTML(
    post.acf?.subtitle ||
    stripHTML(post.excerpt?.rendered || "") ||
    ""
  );
  
  const authorName = post.acf?.author_name || DEFAULT_AUTHOR;
  const categoryName = category?.name || DEFAULT_CATEGORY;
  const avatarUrl = author?.avatar_urls?.["96"] || DEFAULT_AVATAR;
  const postTitle = stripHTML(post.title.rendered);
  const formattedDate = formatPostDate(post.date);

  return (
    <section className="bg-light py-5 border-bottom">
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: postTitle }
          ]}
        />

        <h1
          className="blog-post-title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Desktop Layout */}
        <div className="d-none d-lg-block">
          <PostSubtitle subtitle={subtitle} />

          <div className="d-flex align-items-center justify-content-between">
            <PostMetadata
              avatarUrl={avatarUrl}
              authorName={authorName}
              formattedDate={formattedDate}
              categoryName={categoryName}
              postLink={post.link}
            />
            <SocialButtons postUrl={post.link} postTitle={postTitle} />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="d-lg-none">
          <div className="mb-3">
            <img
              src={avatarUrl}
              alt="Author"
              className="rounded-circle"
              width="64"
              height="64"
            />
          </div>

          <div className="mb-3">
            <span className="fw-semibold d-block mb-2">By {authorName}</span>
            <div className="d-flex gap-3 text-muted small">
              <span>{formattedDate}</span>
              <span>{categoryName}</span>
            </div>
          </div>

          <div className="mb-4">
            <AIActionButtons postLink={post.link} />
          </div>

          <PostSubtitle subtitle={subtitle} className="mb-4" />

          <div className="d-flex justify-content-center">
            <SocialButtons postUrl={post.link} postTitle={postTitle} />
          </div>
        </div>
      </div>
    </section>
  );
}