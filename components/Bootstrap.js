import { useRouter } from "next/router";
import { useContext } from "react";
import LanguageContext from "context/LanguageContext";

export const Container = ({ children, className }) => (
  <div
    className={`container ${className ? className : ""}`}
  >
    {children}
  </div>
);

export const Row = ({ children, center }) => (
  <div className={`row ${center ? "center" : ""}`}>
    {children}
  </div>
);

export const Col = ({ children, lg, md, sm }) => {
  const col_data = []
    .concat(lg ? `col-lg-${lg}` : "")
    .concat(md ? `col-md-${md}` : "")
    .concat(sm ? `col-sm-${sm}` : "");
  return (
    <div className={col_data.join(" ")}>{children}</div>
  );
};

export const NavBar = ({ children, opacity }) => {
  const pathname = useRouter().pathname;

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light header customHeader`}
    >
      {children}
    </nav>
  );
};

export const NotFoundPosts = () => {
  const { lang } = useContext(LanguageContext);
  return <div className="not_found">{lang.not_found}</div>;
};
