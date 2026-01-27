"use client";

type BreadcrumbProps = {
  items: Array<{
    label: string;
    href?: string;
  }>;
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 small">
        <div className="d-flex align-items-center gap-2">
          {items.slice(0, -1).map((item, index) => (
            <div key={index} className="d-flex align-items-center gap-2">
              {item.href ? (
                <a  
                  href={item.href}
                  style={{ 
                    color: "#198754",
                    textDecoration: "none",
                    transition: "color 0.3s ease" 
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#198754")}
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
              {index < items.length - 2 && (
                <i className="bi bi-chevron-right text-muted"></i>
              )}
            </div>
          ))}
          <i className="bi bi-chevron-right text-muted"></i>
        </div>
        <span className="text-truncate d-none d-md-inline" style={{ maxWidth: "400px" }}>
          {items[items.length - 1].label}
        </span>
      </div>
    </nav>
  );
}