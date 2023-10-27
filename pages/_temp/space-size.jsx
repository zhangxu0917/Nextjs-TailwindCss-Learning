const SpaceSizePage = () => {
  return (
    <div>
      <h1>Space Size</h1>
      <section>
        <h2>Padding</h2>
        <div className="m-1 font-bold text-white bg-red-500 p-4">
          Box with padding
        </div>
        <div className="m-1 font-bold text-white bg-red-500 pl-4">
          Box with padding
        </div>
        <div className="m-1 font-bold text-white bg-red-500 pr-4">
          Box with padding
        </div>
        <div className="m-1 font-bold text-white bg-red-500 pt-4">
          Box with padding
        </div>
        <div className="m-1 font-bold text-white bg-red-500 pb-4">
          Box with padding
        </div>
        <div className="m-1 font-bold text-white bg-red-500 px-4">
          Box with padding
        </div>
        <div className="m-1 font-bold text-white bg-red-500 py-4">
          Box with padding
        </div>
      </section>

      <section>
        <h2>Margin</h2>
        <div className="m-4 font-bold text-white bg-red-500">
          Box with margin
        </div>
        <div className="ml-4 font-bold text-white bg-red-500">
          Box with margin
        </div>
        <div className="mr-4 font-bold text-white bg-red-500">
          Box with margin
        </div>
        <div className="mt-4 font-bold text-white bg-red-500">
          Box with margin
        </div>
        <div className="mb-4 font-bold text-white bg-red-500">
          Box with margin
        </div>
        <div className="mx-4 font-bold text-white bg-red-500">
          Box with margin
        </div>
        <div className="my-4 font-bold text-white bg-red-500">
          Box with margin
        </div>
      </section>

      <section>
        <h2>Space Between</h2>
        <ul className="flex w-full space-x-2 max-w-full min-h-screen">
          <li className="w-1/5  bg-red-500">Sidebar</li>
          <li className="w-4/5  bg-green-500">Main content</li>
        </ul>
      </section>
    </div>
  );
};

export default SpaceSizePage;
