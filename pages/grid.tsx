import Head from "next/head";

const GridPage = () => {
  return (
    <>
      <Head>
        <title>Grid</title>
      </Head>

      <div className="">
        <h2>Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2  bg-gray-300">
          <div className="md:col-span-2 md:row-span-2 p-10 border border-blue-600 bg-blue-100">
            Item 1
          </div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 2</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 3</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 4</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 5</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 6</div>
          <div className="md:col-span-2 p-10 border border-blue-600 bg-blue-100">
            Item 7
          </div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 8</div>
          <div className="md:col-span-3 p-10 border border-blue-600 bg-blue-100">
            Item 9
          </div>
        </div>
      </div>
    </>
  );
};

export default GridPage;
