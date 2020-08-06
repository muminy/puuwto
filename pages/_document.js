import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { siteConfig } from "constant/config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(
      ctx,
    );
    return { ...initialProps };
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
          <meta
            name="description"
            content={`${siteConfig.name} Blog`}
          />
          <meta
            property="og:url"
            content={`https://${siteConfig.URL}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="mukemmelis" />
          <meta
            property="og:description"
            content={`${siteConfig.name} Blog`}
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:url"
            content={`https://${siteConfig.URL}`}
          />
          <meta name="twitter:title" content="mukemmelis" />
          <meta
            name="twitter:description"
            content={`${siteConfig.name} Blog`}
          />
          <meta
            name="application-name"
            content={`${siteConfig.name} Blog`}
          />
          <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
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
