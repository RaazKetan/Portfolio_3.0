import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Ketan Raj is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Ketan Raj, ketan, raj, web developer portfolio, kettan web developer, ketan developer, mern stack, Ketan Raj portfolio"
      />
      <meta property="og:title" content="Ketan Raj Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />

      <meta
        property="og:url"
        content="https://anassabahportfolio.vercel.app/"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Ketan Raj",
};
