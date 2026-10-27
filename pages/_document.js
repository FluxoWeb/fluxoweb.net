import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es-PY">
        <Head>
          <link rel="preload" href="/fonts/host-grotesk-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/geist-mono-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#1D1D1D" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
