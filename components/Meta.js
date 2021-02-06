import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.png" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Giuseppe Figliuolo",
  keywords: "portfolio, webdesigner, Milano",
  description: "Giuseppe Figliuolo webdesigner Milano",
};

export default Meta;
