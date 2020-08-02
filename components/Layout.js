import Head from "next/head";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";
import { Container } from "./Bootstrap";
import Header from "./Header";
import Footer from "./Footer";

export default function ({ title, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>
          {title} {title ? " |" : null} feewer.com
        </title>
      </Head>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}
