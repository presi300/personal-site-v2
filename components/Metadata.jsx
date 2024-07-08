import Head from "next/head";

export default function Metadata({}) {
  const title = "A website";
  const content = "Yeah, it's a websie, I think";
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <meta name="description" content={content} key="description" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} key="og-title" />
      <meta property="og:description" content={content} key="og-description" />
      <meta property="og:site_name" content="Presi300.com" />
      <meta property="og:url" content="https://presi300.com" />
    </Head>
  );
}
