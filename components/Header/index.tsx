import F from "@/constants/styles";
import classNames from "classnames";
import Link from "next/link";
import Container from "../Container";
import Menus from "./Menus";
import styles from "./style.module.css";

export default function Header() {
  return (
    <div className={classNames(styles.header, F.paddingX)}>
      <Link href={"/"}>
        <a>Blog</a>
      </Link>
      <Menus />
    </div>
  );
}
