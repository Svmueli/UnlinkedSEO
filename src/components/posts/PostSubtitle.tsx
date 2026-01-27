interface PostSubtitleProps {
  subtitle: string;
  className?: string;
}

export default function PostSubtitle({ subtitle, className = "" }: PostSubtitleProps) {
  return <p className={`blog-post-subtitle ${className}`.trim()}>{subtitle}</p>;
}