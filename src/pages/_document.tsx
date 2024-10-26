import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio showcasing my projects and skills."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My Portfolio" />
        <meta
          property="og:description"
          content="Check out my latest projects and articles."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://priyangsubanik.dev" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
