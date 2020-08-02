import Head from "next/head";
import { Container } from "./Bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { siteConfig } from "constant/config";

export default function ({ title, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>
          {title} {title ? " |" : null} {siteConfig.URL}
        </title>
      </Head>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}
