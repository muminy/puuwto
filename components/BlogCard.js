import Link from "next/link";
import readingTime from "reading-time";

export default function ({
  title,
  description,
  time,
  slug,
  id,
  body,
}) {
  const stats = readingTime(body);
  return (
    <div className="blog">
      <Link
        href="/blog/[id]/[slug]"
        as={`/blog/${id}/${slug}`}
      >
        <a className="header_link">{title}</a>
      </Link>
      <p>{description}</p>
      <div className="flex">
        <time>{time}</time>
        <div className="min_read">{stats.text}</div>
      </div>
    </div>
  );
}
