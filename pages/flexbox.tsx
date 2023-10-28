import Head from "next/head";

const FlexboxPage = () => {
  return (
    <>
      <Head>
        <title>Flexbox</title>
      </Head>

      <div className="">
        <h2>Flexbox</h2>

        {/* Flex and alignment */}
        <div className="mb-4">
          <h3>Flex and alignment</h3>
          <div className="flex flex-col md:flex-row">
            <div className="p-10 border border-blue-300 bg-blue-100">
              Item 1
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
              Item 2
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
              Item 3
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
              Item 4
            </div>
          </div>

          <div className="mt-2 flex h-72 w-full items-center justify-around bg-gray-100">
            <div className="p-10 border border-blue-300 bg-blue-100">
              Item 1
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
              Item 2
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
              Item 3
            </div>
            <div className="p-10 border border-blue-300 bg-blue-100">
              Item 4
            </div>
          </div>
        </div>

        {/* Flex Column, Gap and Order */}
        <div className="mb-4">
          <h3>Flex Column, Gap and Order</h3>
          <div className="mt-2 flex flex-col h-72 w-full items-center justify-around bg-gray-100 gap-4">
            <div className="order-3 p-4 border border-blue-300 bg-blue-100">
              Item 1
            </div>
            <div className="order-2 p-4 border border-blue-300 bg-blue-100">
              Item 2
            </div>
            <div className="order-4 p-4 border border-blue-300 bg-blue-100">
              Item 3
            </div>
            <div className="order-1 p-4 border border-blue-300 bg-blue-100">
              Item 4
            </div>
          </div>
        </div>

        {/* Grow and shrink */}
        <div className="mb-4">
          <h3>Grow and shrink</h3>
          <div className="mt-2 flex h-72 w-full items-center bg-gray-100">
            <div className="w-64 p-8 border border-blue-300 bg-blue-100">
              Item 1
            </div>
            <div className="flex-none w-64 p-8 border border-blue-300 bg-blue-100">
              Item 2
            </div>
            <div className="w-64 p-8 border border-blue-300 bg-blue-100">
              Item 3
            </div>
            <div className="w-64 p-8 border border-blue-300 bg-blue-100">
              Item 4
            </div>
            <div className="p-8 border border-blue-300 bg-blue-100">Item 5</div>
            <div className="p-8 border border-blue-300 bg-blue-100">Item 6</div>
            <div className="p-8 border border-blue-300 bg-blue-100">Item 7</div>
            <div className="p-8 border border-blue-300 bg-blue-100">Item 8</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexboxPage;
