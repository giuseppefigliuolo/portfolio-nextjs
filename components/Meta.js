import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
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
