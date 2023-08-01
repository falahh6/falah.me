import Document, { Html, Head, Main, NextScript } from "next/document";
import favicon from "../../public/favicon.svg";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href={favicon} />
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
