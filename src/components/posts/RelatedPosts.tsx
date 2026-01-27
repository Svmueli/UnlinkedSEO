'use client';

import { Post, Author } from "@/types/wordpress";
import { stripHTML } from "@/utils/htmlDecode";
import { formatPostDate } from "@/utils/dateFormatters";
import { DEFAULT_AUTHOR, DEFAULT_AVATAR } from "@/constants/defaults";
import Link from "next/link";
import { useState } from "react";

interface RelatedPostsProps {
  posts: Post[];
  authors: (Author | null)[];
}

export default function RelatedPosts({ posts, authors }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h3 fw-bold mb-0">Recommended Reading</h2>
          <Link
            href="/blog"
            className="btn btn-link text-decoration-none d-flex align-items-center gap-2 fw-semibold"
            style={{ color: "#6dbe45" }}
          >
            SEE ALL
            <span
              className="d-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#6dbe45",
                color: "white",
                fontSize: "18px",
              }}
            >
              →
            </span>
          </Link>
        </div>

        <div className="row g-4">
          {posts.map((post, index) => (
            <RelatedPostCard 
              key={post.id} 
              post={post} 
              author={authors[index]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedPostCard({ post, author }: { post: Post; author: Author | null }) {
  const [isHovered, setIsHovered] = useState(false);

  const featuredImage =
    post.acf?.hero_image ||
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400";
  const authorName = post.acf?.author_name || DEFAULT_AUTHOR;
  const avatarUrl = author?.avatar_urls?.["96"] || DEFAULT_AVATAR;
  const readingTime = post.acf?.reading_time || "5m read";
  const excerpt = stripHTML(
    post.acf?.excerpt || post.excerpt?.rendered || "",
  );

  return (
    <div className="col-lg-4">
      <Link
        href={`/blog/${post.slug}`}
        className="text-decoration-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="card h-100 border-0 shadow-sm"
          style={{
            transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
            transition: 'all 0.3s ease',
            boxShadow: isHovered ? '0 8px 24px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <div style={{ overflow: 'hidden', height: '200px' }}>
            <img
              src={featuredImage}
              alt={stripHTML(post.title.rendered)}
              className="card-img-top"
              style={{ 
                height: "200px", 
                objectFit: "cover",
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
          <div className="card-body">
            <div className="d-flex gap-2 text-muted small mb-3">
              <span>{formatPostDate(post.date)}</span>
              <span>•</span>
              <span>{readingTime}</span>
            </div>

            <h5
              className="card-title fw-bold mb-3"
              style={{ 
                color: isHovered ? "#6dbe45" : "#212529",
                transition: 'color 0.3s ease',
              }}
            >
              {stripHTML(post.title.rendered)}
            </h5>

            <p className="card-text text-muted small mb-3">
              {excerpt.substring(0, 120)}...
            </p>

            <div className="d-flex align-items-center gap-2">
              <img
                src={avatarUrl}
                alt={authorName}
                className="rounded-circle"
                width="32"
                height="32"
              />
              <span className="small text-muted">
                By {authorName}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}