import Link from "next/link";

export default function ({ pageList, page }) {
  return (
    <div className="pagination flex">
      <div className="list_i flex">
        {pageList.map((item, key) =>
          item === 1 ? (
            <Link key={key} href={"/"}>
              <a
                key={key}
                className={`i ${
                  item === page ? "active" : ""
                }`}
              >
                {item}
              </a>
            </Link>
          ) : (
            <Link
              key={key}
              href={"/[page]"}
              as={`/${item}`}
            >
              <a
                className={`i ${
                  item === page ? "active" : ""
                }`}
              >
                {item}
              </a>
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
