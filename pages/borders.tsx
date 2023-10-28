import Head from "next/head";

const Borders = () => {
  return (
    <>
      <Head>
        <title>Borders & Border Radius</title>
      </Head>

      <div className="">
        <h2>Borders & Border Radius</h2>

        {/* Border With & Colors */}
        <div className="mb-4">
          <h3>Border With & Colors</h3>
          <div className="w-96 m-3 p-5 border">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-4 border-red-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-x-4 border-red-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-y-4 border-red-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-l-4 border-red-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-r-4 border-red-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-t-4 border-red-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-b-4 border-red-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>
        </div>

        {/* Border Radius */}
        <div className="mb-4">
          <h3>Border Radius</h3>
          <div className="w-96 m-3 p-5 border-4 rounded">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-4 rounded-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-4 rounded-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-4 rounded-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-4 rounded-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-4 rounded-t-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>

          <div className="w-96 m-3 p-5 border-4 rounded-b-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, modi.
            Perspiciatis, excepturi veniam non eligendi aspernatur, nisi animi
            laboriosam cum, officiis cupiditate distinctio molestiae aperiam
            quibusdam asperiores error delectus tempora.
          </div>
        </div>

        {/* Outline */}
        <div className="mb-4">
          <h3>Outline</h3>
          <button className="m-3 p-5 outline outline-4 outline-offset-2 outline-blue-500">
            Click
          </button>
        </div>
      </div>
    </>
  );
};

export default Borders;
