import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
export default function ({ title, children }) {
  return (
    <div className="layout">
      <Head>
        <title>
          {title} {title ? " |" : null} puuwto.com {!title ? '| Kişisel blog' : null}
        </title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
