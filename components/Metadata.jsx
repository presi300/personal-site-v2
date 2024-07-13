import Head from "next/head";

export default function Metadata({ title, description, url, ogImage }) {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#e2e8f0" />
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
      <meta
        name="apple-mobile-web-app-title"
        content="Presi300.com - A website"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="description" content={description} key="description" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} key="og-title" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description}
        key="twitter-description"
      />
      <meta
        property="og:description"
        content={description}
        key="og-description"
      />
      <meta property="og:site_name" content="Presi300.com" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} key="og-image" />
    </Head>
  );
}
