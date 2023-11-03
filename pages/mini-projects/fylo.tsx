import Fylo from "@/components/fylo";
import Head from "next/head";

const FyloWebsitePage = () => {
  return (
    <>
      <Head>
        <title>Fylo Website With Color Picker</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Fylo />
    </>
  );
};

export default FyloWebsitePage;
