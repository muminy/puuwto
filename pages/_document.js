import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import getPosts from "lib/getPosts";
import { PostsProvider } from "context/PostsContext";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(
      ctx,
    );
    return { ...initialProps, posts: getPosts() };
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            httpEquiv="X-UA-Compatible"
            content="IE=edge"
          />
          <meta
            name="robots"
            content="noimageindex, noarchive"
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="mobile-web-app-capable"
            content="no"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta
            id="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
          />
          <meta name="description" content="Feewer codes" />
          <meta
            property="og:url"
            content="https://feewer.com"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="mukemmelis" />
          <meta
            property="og:description"
            content="Feewer codes"
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:url"
            content="https://feewer.com"
          />
          <meta name="twitter:title" content="mukemmelis" />
          <meta
            name="twitter:description"
            content="Feewer codes"
          />
          <meta
            name="application-name"
            content="Feewer codes"
          />
          <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <body>
          <PostsProvider value={{ iiii: 1 }}>
            <Main />
            <NextScript />
          </PostsProvider>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
            integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
