import AIActionButtons from "@/components/AIActionButtons";

interface PostMetadataProps {
  avatarUrl: string;
  authorName: string;
  formattedDate: string;
  categoryName: string;
  postLink: string;
}

export default function PostMetadata({
  avatarUrl,
  authorName,
  formattedDate,
  categoryName,
  postLink,
}: PostMetadataProps) {
  return (
    <div className="d-flex align-items-start gap-3">
      <img
        src={avatarUrl}
        alt="Author"
        className="rounded-circle"
        width="64"
        height="64"
      />
      <div>
        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="fw-semibold">By {authorName}</span>
          <span className="text-muted">{formattedDate}</span>
          <span className="text-muted">{categoryName}</span>
        </div>
        <AIActionButtons postLink={postLink} />
      </div>
    </div>
  );
}