"use client";

export default function SocialButtons({ postUrl, postTitle }: { postUrl: string; postTitle: string }) {
  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
  };

  return (
    <div className="d-flex gap-3">
      <a 
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="fs-5"
        style={{color: "#198754", transition: "color 0.3s ease"}}
        onMouseEnter={(e) => e.currentTarget.style.color = "#000"}
        onMouseLeave={(e) => e.currentTarget.style.color = "#198754"}
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a 
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="fs-5"
        style={{color: "#198754", transition: "color 0.3s ease"}}
        onMouseEnter={(e) => e.currentTarget.style.color = "#000"}
        onMouseLeave={(e) => e.currentTarget.style.color = "#198754"}
      >
        <i className="bi bi-twitter"></i>
      </a>
      <a 
        href={shareUrls.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="fs-5"
        style={{color: "#198754", transition: "color 0.3s ease"}}
        onMouseEnter={(e) => e.currentTarget.style.color = "#000"}
        onMouseLeave={(e) => e.currentTarget.style.color = "#198754"}
      >
        <i className="bi bi-facebook"></i>
      </a>
    </div>
  );
}