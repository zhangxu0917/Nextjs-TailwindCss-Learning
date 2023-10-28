import Head from "next/head";

const LayoutAndPositionPage = () => {
  return (
    <>
      <Head>
        <title>Layout & Position</title>
      </Head>

      <h2>Layout & Position</h2>

      {/* Positioning */}
      <div className="mb-4">
        <h3>Positioning</h3>
        <div className="relative w-1/2 h-12 bg-red-200">
          <p>Parent Element</p>
          <div className="absolute bottom-0 right-0 bg-red-600 text-white px-2">
            <p>Absolute Child</p>
          </div>
        </div>
      </div>

      {/* Top left corner */}
      <div className="mb-4">
        <h3>Top left corner</h3>
        <div className="relative h-32 w-32 bg-yellow-100">
          <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
        </div>
      </div>

      {/* Top right corner */}
      <div className="mb-4">
        <h3>Top right corner</h3>
        <div className="relative h-32 w-32 bg-yellow-100">
          <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
        </div>
      </div>

      {/* Bottom left corner */}
      <div className="mb-4">
        <h3>Bottom left corner</h3>
        <div className="relative h-32 w-32 bg-yellow-100">
          <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
        </div>
      </div>

      {/* Bottom right corner */}
      <div className="mb-4">
        <h3>Bottom right corner</h3>
        <div className="relative h-32 w-32 bg-yellow-100">
          <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
        </div>
      </div>

      {/* Span top edge */}
      <div className="mb-4">
        <h3>Span top edge</h3>
        <div className="relative h-32 w-32 bg-yellow-100">
          <div className="absolute inset-x-0 top-0 bottom-0 h-16 bg-yellow-300"></div>
        </div>
      </div>

      {/* Span right edge */}
      <div className="mb-4">
        <h3>Span right edge</h3>
        <div className="relative h-32 w-32 bg-yellow-100">
          <div className="absolute inset-y-0 right-0 bottom-0 w-16 bg-yellow-300"></div>
        </div>
      </div>

      {/* Span bottom edge */}
      <div className="mb-4">
        <h3>Span bottom edge</h3>
        <div className="relative h-32 w-32 bg-yellow-100">
          <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
        </div>
      </div>

      {/* Span left edge */}
      <div className="mb-4">
        <h3>Span left edge</h3>
        <div className="relative h-32 w-32 bg-yellow-100">
          <div className="absolute inset-y-0 left-0 bottom-0 w-16 bg-yellow-300"></div>
        </div>
      </div>

      {/* Display Classes */}
      <div className="mb-4">
        <h3>Display Classes</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <span className="inline text-blue-600">[This is inline] </span>
          aspernatur minima et magnam nihil officiis velit?{" "}
          <span className="block text-blue-600">This is block.</span>Architecto
          quia adipisci cumque nam placeat repudiandae magni fuga, pariatur{" "}
          <span className="inline-block text-blue-600">
            [this is inline-block]
          </span>
          maiores soluta aliquid!{" "}
          <span className="hidden">[This is hidden]</span>
        </div>
      </div>

      {/* Z-Index */}
      <div className="mb-4">
        <h3>Z-Index</h3>
        <div className="relative h-36">
          <div className="flex justify-center items-center absolute left-0 w-24 h-24  bg-blue-300 z-50 border">
            1
          </div>
          <div className="flex justify-center items-center absolute left-20 w-24 h-24 bg-blue-400 z-40 border">
            2
          </div>
          <div className="flex justify-center items-center absolute left-40 w-24 h-24 bg-blue-500 z-30 border">
            3
          </div>
          <div className="flex justify-center items-center absolute left-60 w-24 h-24 bg-blue-600 z-20 border">
            4
          </div>
          <div className="flex justify-center items-center absolute left-80 w-24 h-24 bg-blue-700 z-10 border">
            5
          </div>
        </div>
      </div>

      {/* Floats */}
      <div>
        <h3>Floats</h3>
        <div className="w-1/2">
          <img
            className="float-left m-4 w-48"
            src="/images/img1.jpeg"
            alt="It's a MacBook Pro"
          />
          <span>
            {" "}
            The MacBook Pro 13 is a stellar example of Apple's commitment to
            crafting powerful, portable, and elegant computing solutions. This
            compact yet mighty laptop has garnered a dedicated following, and
            for good reason.
          </span>
          <span>
            {" "}
            The MacBook Pro 13 boasts the iconic Apple design that's sleek,
            minimalist, and instantly recognizable. Crafted from a single piece
            of aluminum, it's not just a beauty to behold; it's also incredibly
            durable. The 13-inch Retina display offers sharp, vivid visuals with
            True Tone technology that adapts to ambient lighting conditions.
          </span>
        </div>
      </div>
    </>
  );
};

export default LayoutAndPositionPage;
