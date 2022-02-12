import { headermenu } from "@/constants/data";
import classNames from "classnames";
import Link from "next/link";
import styles from "./style.module.css";

export default function Menus() {
  return (
    <div className="flex space-x-1">
      {headermenu.map((item) => (
        <Link key={item.url} href={item.url}>
          <a
            className={classNames(styles.menulink, {
              [styles.tailwinui]: item.url === "/tailwindui",
            })}
          >
            <span className="z-10">{item.title}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}
