import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="My portfolio site" />
          <meta charSet="utf-8" />
          {/* <meta name="robots" content="noindex, nofollow" /> */}
          <meta name="viewport" content="width=device-width" />
          <title>Next Portfolio</title>
        </Head>

        <body>
          <Main />
          <NextScript />

          <style global jsx>{`
            body {
              font-family: "fira Code", helvetica;
            }
          `}</style>
        </body>
      </html>
    );
  }
}

export default MyDocument;
