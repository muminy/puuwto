import { Container, Row, Col } from "./Bootstrap";
import SiteLogo from "./SiteLogo";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";
import LanguageContext from "context/LanguageContext";
import { useRouter } from "next/router";

export default function ({ opacity }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang, type } = useContext(
    LanguageContext,
  );
  const pathname = useRouter().pathname;
  const handleTheme = () => {
    const currentTheme =
      theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };
  const handleLanguage = () => {
    const currentType = type === "tr" ? "en" : "tr";
    setLang(currentType);
    localStorage.setItem("language", currentType);
  };
  return (
    <Container
      className={`footer ${
        pathname === "/blog/[id]/[slug]"
          ? "opacityheader"
          : ""
      }`}
    >
      <Row center>
        <Col lg="5" md="6" sm="6">
          <div className="blog_footer">
            <SiteLogo />
            <p>
              Kişisel blog. Günlük öğrendiklerimi yazarak
              yada video ile sizlere aktarmaya çalışıyorum.
            </p>
          </div>
        </Col>
        <Col lg="7" md="6" sm="6">
          <div className="button_list">
            <button
              onClick={handleTheme}
              className="switch_theme"
            >
              {lang.footer.change.theme}
            </button>
            <button
              onClick={handleLanguage}
              className="switch_theme"
            >
              {lang.footer.change.language}
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
