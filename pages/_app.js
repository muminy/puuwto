import "styles/global.css";
import "styles/bootstrap.css";
import "styles/responsive.css";
import { useState } from "react";
import { LanguageProvider } from "context/LanguageContext";
import { language } from "constant/language";
import { useRouter } from "next/router";
import getPosts from "lib/getPosts";
import App from "next/app";

let results = [];

function MyApp({
  Component,
  pageProps,
  postsList,
  reposes,
}) {
  const [lang, setLang] = useState("tr");
  const [posts, setPosts] = useState(postsList);
  const query = useRouter().query;
  const langValue = {
    lang: lang === "tr" ? language.tr : language.en,
    setLang,
    type: lang,
    query: query,
    posts: posts,
    reposes: reposes,
  };
  return (
    <LanguageProvider value={langValue}>
      <section id="asdasd" className={"light_theme"}>
        <Component {...pageProps} />
      </section>
    </LanguageProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
    postsList: getPosts(),
  };
};

export default MyApp;
