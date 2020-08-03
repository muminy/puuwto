import Link from "next/link";

export default function ({
  title,
  description,
  time,
  slug,
  id,
}) {
  return (
    <div className="blog">
      <Link
        href="/blog/[id]/[slug]"
        as={`/blog/${id}/${slug}`}
        prefetch={false}
      >
        <a className="header_link">{title}</a>
      </Link>
      <p>{description}</p>
      <div className="flex jcsb">
        <time>{time}</time>
      </div>
    </div>
  );
}
