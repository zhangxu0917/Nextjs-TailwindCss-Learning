import BookMark from "@/components/bookmark";
import Head from "next/head";

const BookmarkPage = () => {
  return (
    <>
      <Head>
        <title>Bookmark Website</title>
        <link
          rel="shortcut icon"
          href="/images/all-project-assets/bookmark/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <BookMark />
    </>
  );
};

export default BookmarkPage;
