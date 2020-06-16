import Link from "next/link";

export default function ({ href }) {
  return (
    <div className="header">
      <Link href={{ pathname: "/" }}>
        <a className="logoText">
          puuw
          <span>to</span>.
        </a>
      </Link>
      <div className="menus">
        <Link href={{ pathname: "/" }}>
          <a className="menu_link"> Blog </a>
        </Link>
        <Link href={{ pathname: "/apps" }}>
          <a className="menu_link"> Apps </a>
        </Link>
      </div>
    </div>
  );
}
