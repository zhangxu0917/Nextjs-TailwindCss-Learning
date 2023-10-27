const GridPage = () => {
  return (
    <div className="h-screen text-white parent-container bg-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-sky-500 p-6 rounded-lg">01</div>
          <div className="bg-sky-500 p-6 rounded-lg">02</div>
          <div className="bg-sky-500 p-6 rounded-lg">03</div>
          <div className="bg-sky-500 p-6 rounded-lg">04</div>
          <div className="bg-sky-500 p-6 rounded-lg">05</div>
          <div className="bg-sky-500 p-6 rounded-lg">06</div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-sky-500 p-6 rounded-lg">01</div>
          <div className="bg-sky-500 p-6 rounded-lg">02</div>
          <div className="bg-sky-500 p-6 rounded-lg">03</div>
          <div className="bg-sky-500 p-6 rounded-lg col-span-1">04</div>
          <div className="bg-sky-500 p-6 col-span-2 rounded-lg">05</div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <div className="grid gird-col-6 gap-4">
          <div className="col-start-2 col-span-4 bg-sky-500 p-6 rounded-lg">
            01
          </div>
          <div className="col-start-1 col-end-3 bg-sky-500 p-6 rounded-lg">
            02
          </div>
          <div className="col-span-2 col-end-7 bg-sky-500 p-6 rounded-lg">
            03
          </div>
          <div className="col-start-1 col-end-7 bg-sky-500 p-6 rounded-lg">
            04
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <div className="grid grid-flow-col grid-rows-6 gap-4">
          <div className="bg-sky-500 p-6 rounded-lg">01</div>
          <div className="bg-sky-500 p-6 rounded-lg">02</div>
          <div className="bg-sky-500 p-6 rounded-lg">03</div>
          <div className="bg-sky-500 p-6 rounded-lg">04</div>

          <div className="bg-sky-500 p-6 rounded-lg">05</div>
          <div className="bg-sky-500 p-6 rounded-lg">06</div>
          <div className="bg-sky-500 p-6 rounded-lg">07</div>
          <div className="bg-sky-500 p-6 rounded-lg">08</div>

          <div className="bg-sky-500 p-6 rounded-lg">09</div>
          <div className="bg-sky-500 p-6 rounded-lg">10</div>
          <div className="bg-sky-500 p-6 rounded-lg">11</div>
          <div className="bg-sky-500 p-6 rounded-lg">12</div>
        </div>
      </div>
    </div>
  );
};

export default GridPage;
