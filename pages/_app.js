import "styles/global.css";
import "styles/bootstrap.css";
import "styles/responsive.css";
import { ThemeProvider } from "context/ThemeContext";
import { useState, useEffect } from "react";
import { LanguageProvider } from "context/LanguageContext";
import { language } from "constant/language";

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState("dark");
  useEffect(() => {
    setValue(localStorage.getItem(key) ?? defaultValue);
  }, [value]);

  return [value, setValue];
}

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useStickyState("dark", "theme");
  const [lang, setLang] = useState("tr");
  const themeValue = {
    theme,
    setTheme,
  };
  const langValue = {
    lang: lang === "tr" ? language.tr : language.en,
    setLang,
    type: lang,
  };
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

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
