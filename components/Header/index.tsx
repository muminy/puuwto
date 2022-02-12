import F from "@/constants/styles";
import classNames from "classnames";
import Container from "../Container";
import Menus from "./Menus";
import styles from "./style.module.css";

export default function Header() {
  return (
    <div className={classNames(styles.header, F.paddingX)}>
      <div>Blog</div>
      <Menus />
    </div>
  );
}
