import Link from "next/link";
export default function ({ slug, title, info, category }) {
  return (
    <div key={slug} className="blog-design">
      {category ? (
        <Link
          href="/category/[tag]"
          as={"/category/" + category}
        >
          <a className="kate"># {category}</a>
        </Link>
      ) : null}
      <Link href="/blog/[article]" as={"/blog/" + slug}>
        <a>{title}</a>
      </Link>
      <p>{info}</p>
      <time>Monday, May 11th 2020 (about 1 month ago)</time>
    </div>
  );
}
