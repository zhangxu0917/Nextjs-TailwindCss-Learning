import Head from "next/head";

const ContainerSpace = () => {
  return (
    <>
      <Head>
        <title>Container & Space</title>
      </Head>
      <>
        {/* Container */}
        <div>
          <h2>Container</h2>
          <div className="container mx-auto">
            <article>
              <h3>Article One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam nostrum autem quisquam rem incidunt excepturi maiores
                quo non dolor, beatae corrupti itaque dicta repudiandae, eius
                explicabo quasi quos assumenda dolorem.
              </p>
            </article>
          </div>
        </div>

        {/* Margin */}
        <div className="mt-4">
          <h2>Margin</h2>
          <div className="container mx-auto">
            <div className="bg-slate-200 m-2">Hello World</div>
            <div className="bg-slate-200 ml-4">Hello World</div>
            <div className="bg-slate-200 mr-4">Hello World</div>
            <div className="bg-slate-200 mt-4">Hello World</div>
            <div className="bg-slate-200 mb-4">Hello World</div>
            <div className="bg-slate-200 mt-[20px]">Hello World</div>
          </div>
        </div>

        {/* Padding */}
        <div className="mt-4">
          <h2>Padding</h2>
          <div className="container mx-auto">
            <div className="bg-slate-200 p-2">Hello World</div>
            <div className="bg-slate-200 pl-4">Hello World</div>
            <div className="bg-slate-200 pr-4">Hello World</div>
            <div className="bg-slate-200 pt-4">Hello World</div>
            <div className="bg-slate-200 pb-4">Hello World</div>
            <div className="bg-slate-200 pt-[20px]">Hello World</div>
          </div>
        </div>

        {/* Space Between X */}
        <div className="mt-4">
          <h2>Space Between X</h2>
          <div className="container mx-auto">
            <div className="flex space-x-8">
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
              <div>Item 4</div>
              <div>Item 5</div>
              <div>Item 6</div>
              <div>Item 7</div>
            </div>
          </div>
        </div>

        {/* Space Between Y */}
        <div className="mt-4">
          <h2>Space Between Y</h2>
          <div className="container mx-auto">
            <div className="flex flex-col space-y-4">
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
              <div>Item 4</div>
              <div>Item 5</div>
              <div>Item 6</div>
              <div>Item 7</div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ContainerSpace;
