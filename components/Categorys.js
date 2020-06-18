import { CagegoryList } from "../constant/CagegoryList";
import Link from "next/link";

export default function () {
  return (
    <div className="info_company">
      <header className="header_blogs">
        <div className="title_blog">Ne aramıştın ?</div>
        <div className="kList">
          {CagegoryList().map((item) => {
            return (
              <Link
                href={`/category/[tag]`}
                as={"/category/" + item.slug}
                key={item.id}
              >
                <a className="category_items">{item.id}</a>
              </Link>
            );
          })}
        </div>
      </header>
    </div>
  );
}
