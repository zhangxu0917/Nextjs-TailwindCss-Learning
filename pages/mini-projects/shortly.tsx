import Shortly from "@/components/shortly";
import Head from "next/head";

const ShortlyWebsitePage = () => {
  return (
    <>
      <Head>
        <title>Shortly</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/all-project-assets/shortly/favicon-32x32.png"
        />
      </Head>
      <Shortly />
    </>
  );
};

export default ShortlyWebsitePage;
