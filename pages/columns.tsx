import Head from "next/head";

const ColumnsPage = () => {
  return (
    <>
      <Head>
        <title>Columns</title>
      </Head>

      <div>
        <h2>Columns</h2>

        <div className="mb-4">
          <h3 className="mb-2">Columns</h3>
          <div className="columns-4">
            <img className="w-full" src="/images/img1.jpg" alt="" />
            <img className="w-full" src="/images/img2.jpg" alt="" />
            <img className="w-full" src="/images/img3.jpg" alt="" />
            <img className="w-full" src="/images/img4.jpg" alt="" />
          </div>

          <div className="columns-xs mt-2">
            <img className="w-full" src="/images/img1.jpg" alt="" />
            <img className="w-full" src="/images/img2.jpg" alt="" />
            <img className="w-full" src="/images/img3.jpg" alt="" />
            <img className="w-full" src="/images/img4.jpg" alt="" />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2">Columns</h3>
          <div className="columns-4">
            <img
              className="w-full aspect-video"
              src="/images/img1.jpg"
              alt=""
            />
            <img className="w-full" src="/images/img2.jpg" alt="" />
            <img
              className="w-full aspect-square"
              src="/images/img3.jpg"
              alt=""
            />
            <img className="w-full" src="/images/img4.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ColumnsPage;
