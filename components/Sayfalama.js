import Link from "next/link";

export default function ({ pageList, number }) {
  return (
    <div className="pagination flex">
      <div className="list_i flex">
        {pageList.map((item, key) =>
          item === 1 ? (
            <Link key={key} href={"/"}>
              <a
                key={key}
                className={`i ${
                  item === number ? "active" : ""
                }`}
              >
                {item}
              </a>
            </Link>
          ) : (
            <Link
              key={key}
              href={"/[number]"}
              as={`/${item}`}
            >
              <a
                key={key}
                className={`i ${
                  item === number ? "active" : ""
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
