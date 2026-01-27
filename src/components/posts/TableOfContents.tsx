'use client';

import { TOCItem } from "@/utils/tableOfContents";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    setActiveId(id);
  };

  if (items.length === 0) return null;

  return (
    <div className="bg-white border rounded p-4 mb-4">
      <h5 className="fw-bold mb-3">What You'll Learn</h5>
      <nav>
        <ul className="list-unstyled m-0">
          {items.map((item) => (
            <li
              key={item.id}
              className="border-start border-3 mb-2"
              style={{
                borderColor: "#6dbe45 !important",
                paddingLeft: item.level === 4 ? "1rem" : "0.75rem",
              }}
            >
              <a
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
                className={`text-decoration-none d-block py-1 ${activeId === item.id ? 'text-success fw-semibold' : 'text-muted'}`}
                style={{
                  fontSize: "0.95rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.remove('text-muted');
                  e.currentTarget.classList.add('text-success');
                }}
                onMouseLeave={(e) => {
                  if (activeId !== item.id) {
                    e.currentTarget.classList.remove('text-success');
                    e.currentTarget.classList.add('text-muted');
                  }
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}