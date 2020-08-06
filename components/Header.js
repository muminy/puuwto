import { Container, NavBar } from "./Bootstrap";
import SiteLogo from "./SiteLogo";
import Link from "next/link";
import { useRouter } from "next/router";

export const MenuIcon = () => (
  <div className="menu_icon_list">
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
);

export default function () {
  const router = useRouter();
  const links = [
    { key: 0, text: "Blog", router: "/" },
    { key: 1, text: "Film & Dizi", router: "/watch" },
  ];
  return (
    <NavBar>
      <Container>
        <SiteLogo />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <div className="menu_list">
            {links.map((item) => (
              <Link key={item.key} href={item.router}>
                <a
                  className={`menu_link ${
                    item.router ===
                      router.pathname.replace(
                        "[page]",
                        "",
                      ) ||
                    (item.router === "/" &&
                      router.pathname ===
                        "/blog/[id]/[slug]")
                      ? "active"
                      : ""
                  }`}
                >
                  {item.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </NavBar>
  );
}
