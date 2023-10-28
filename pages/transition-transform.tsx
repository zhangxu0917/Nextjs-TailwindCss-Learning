import Head from "next/head";

const TransitionAndTransformPage = () => {
  return (
    <>
      <Head>
        <title>Transition And Transform</title>
      </Head>

      <div className="">
        <h2>Transition And Transform</h2>

        {/* No Transition */}
        <div className="mb-4">
          <h3>No Transition</h3>
          <div>
            <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700">
              Click me
            </button>
          </div>
        </div>

        {/* Transition */}
        <div className="mb-4">
          <h3>Transition</h3>
          <div>
            <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 hover:opacity-20 transition duration-1000">
              Click me
            </button>
          </div>
        </div>

        {/* Transition & Transform */}
        <div className="mb-4">
          <h3>Transition & Transform</h3>
          <div>
            <button className="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700 hover:opacity-20 hover:rotate-12 transition duration-1000">
              Click me
            </button>

            <img
              src="/images/img1.jpg"
              className="w-48 m-24 hover:rotate-180 hover:scale-75 hover:skew-x-12 transition duration-1000"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransitionAndTransformPage;
