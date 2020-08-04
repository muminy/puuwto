import "styles/global.css";
import "styles/bootstrap.css";
import "styles/responsive.css";
import { ThemeProvider } from "context/ThemeContext";
import { useState, useEffect } from "react";
import { LanguageProvider } from "context/LanguageContext";
import { language } from "constant/language";
import { useRouter } from "next/router";
import getPosts from "lib/getPosts";
import App from "next/app";

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState("dark");
  useEffect(() => {
    setValue(localStorage.getItem(key) ?? defaultValue);
  }, [value]);

  return [value, setValue];
}

function MyApp({ Component, pageProps, postsList }) {
  const [theme, setTheme] = useStickyState("dark", "theme");
  const [lang, setLang] = useState("tr");
  const [posts, setPosts] = useState(postsList);
  const query = useRouter().query;
  const themeValue = {
    theme,
    setTheme,
  };
  const langValue = {
    lang: lang === "tr" ? language.tr : language.en,
    setLang,
    type: lang,
    query: query,
    posts: posts,
  };

  useEffect;
  return (
    <LanguageProvider value={langValue}>
      <ThemeProvider value={themeValue}>
        <section
          className={
            theme === "dark" ? "dark_theme" : "light_theme"
          }
        >
          <Component {...pageProps} />
        </section>
      </ThemeProvider>
    </LanguageProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, postsList: getPosts() };
};

export default MyApp;
