import Head from "next/head";

const SizingPage = () => {
  return (
    <>
      <Head>
        <title>Sizing</title>
      </Head>
      <>
        {/* Width */}
        <div className="mb-4">
          <h2>Width</h2>
          <div className="bg-black text-white w-24">Hello World</div>
          <div className="bg-black text-white w-48">Hello World</div>
          <div className="bg-black text-white w-96">Hello World</div>
        </div>

        {/* Percentages */}
        <div className="mb-4">
          <h2>Percentages</h2>
          <div className="bg-green-700 text-white w-1/4">Hello World</div>
          <div className="bg-green-700 text-white w-1/3">Hello World</div>
          <div className="bg-green-700 text-white w-1/2">Hello World</div>
        </div>

        {/* Width of the viewport */}
        <div className="mb-4">
          <h2>Width of the viewport</h2>
          <div className="bg-blue-700 text-white w-screen">Hello World</div>
        </div>

        {/* 100% of the container */}
        <div className="mb-4">
          <h2>100% of the container</h2>
          <div className="bg-blue-500 text-white w-full">Hello World</div>
        </div>

        {/* Arbitrary width */}
        <div className="mb-4">
          <h2>Arbitrary width</h2>
          <div className="bg-blue-300 text-white w-[300px]">Hello World</div>
        </div>

        {/* Max width */}
        <div className="mb-4">
          <h2>Max width</h2>
          <div className="bg-gray-600 text-white max-w-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae, voluptates, quidem eos mollitia earum consequatur
            similique est molestiae suscipit at, facilis ad harum odit officiis
            ea! Expedita iure mollitia vero.
          </div>
        </div>

        {/* Height (Most of the same options as width) */}
        <div className="mb-4">
          <h2>Height (Most of the same options as width)</h2>
          <div className="flex items-end space-x-1">
            <div className="bg-orange-500 w-12 h-24"></div>
            <div className="bg-orange-500 w-12 h-32"></div>
            <div className="bg-orange-500 w-12 h-40"></div>
            <div className="bg-orange-500 w-12 h-48"></div>
            <div className="bg-orange-500 w-12 h-64"></div>
            <div className="bg-orange-500 w-12 h-96"></div>
          </div>
        </div>

        {/* Full screen height */}
        <div className="mb-4">
          <h2>Full screen height</h2>
          <div className="bg-blue-300 text-white h-screen">Hello World</div>
        </div>

        {/* Ending */}
      </>
    </>
  );
};

export default SizingPage;
