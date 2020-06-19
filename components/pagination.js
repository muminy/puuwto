import Link from "next/link";
import { getPosts } from "../constant/getPosts";
import { pageFill } from "../utils/helper";
import { useState, useEffect } from "react";

export default function ({ pagenation, data, tag }) {
  const [totalPage, setTotalPage] = useState(
    pageFill(data.length),
  );

  return (
    <div className="pagination">
      {tag ? (
        <Link
          href={`/category/[tag]`}
          as={`/category/${tag}`}
        >
          <a
            className={
              pagenation === 1 || !pagenation
                ? "page_list active"
                : "page_list"
            }
          >
            1
          </a>
        </Link>
      ) : (
        <Link href="/">
          <a
            className={
              pagenation === 1 || !pagenation
                ? "page_list active"
                : "page_list"
            }
          >
            1
          </a>
        </Link>
      )}
      {totalPage.map((item, index) =>
        tag ? (
          <Link
            key={index}
            href="/category/[tag]/[page]"
            as={`/category/${tag}/${item}`}
          >
            <a
              className={
                item === pagenation
                  ? "page_list active"
                  : "page_list"
              }
            >
              {item}
            </a>
          </Link>
        ) : (
          <Link key={index} href="/[page]" as={`/${item}`}>
            <a
              className={
                item === pagenation
                  ? "page_list active"
                  : "page_list"
              }
            >
              {item}
            </a>
          </Link>
        ),
      )}
    </div>
  );
}
