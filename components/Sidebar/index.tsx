import F from "@/constants/styles";
import classNames from "classnames";
import MenuIcon from "../icons/Menu.icon";
import MoonIcon from "../icons/Moon.icon";
import styles from "./style.module.css";

export default function Sidebar() {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage:
          "url(https://cdn.dribbble.com/users/1626229/screenshots/17460311/media/9ef95a8984d9f8629e42b89b9a51d6b7.jpg?compress=1&resize=1200x900&vertical=top)",
      }}
      className={classNames(styles.sidebar, F.paddingY)}
    >
      <button className={styles.button}>
        <MenuIcon size={24} />
      </button>

      <button className={styles.button}>
        <MoonIcon size={32} />
      </button>
    </div>
  );
}
