const FlexPage = () => {
  return (
    <>
      <div className="parent-container">
        <header>Header</header>
        <div className="flex flex-row">
          <div className="grow basis-3/4">Main Content</div>
          <div className="flex flex-col basis-1/4">
            <div>Sidebar</div>
            <div>Menu</div>
          </div>
        </div>
      </div>
      <div className="parent-container">
        <header>Header</header>
        <div className="flex flex-row">
          <div className="basis-1/5">Sidebar</div>
          <div className="grow basis-3/5">Main Content</div>
          <div className="basis-1/5">Another Sidebar</div>
        </div>
      </div>
      <div className="parent-container">
        <header>Header</header>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-32 bg-sky-500">Sidebar</div>
          <div className="w-full bg-red-600">Main Content</div>
        </div>
      </div>

      <div className="parent-container">
        <header>Header</header>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-nowrap w-full">
            <div className="w-full grow">01</div>
            <div className="w-full grow">02</div>
            <div className="w-full grow">03</div>
            <div className="w-full grow">04</div>
            <div className="w-full grow">05</div>
          </div>
        </div>
      </div>

      <div className="parent-container">
        <header>Header</header>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-wrap w-full">
            <div className="w-32 grow">01</div>
            <div className="w-32 grow">02</div>
            <div className="w-32 grow">03</div>
            <div className="w-32 grow">04</div>
            <div className="w-32 grow">05</div>
          </div>
        </div>
      </div>

      <div className="parent-container">
        <header>Header</header>
        <div className="flex justify-evenly">
          <div>Sidebar</div>
          <div>Main Content</div>
        </div>
      </div>

      <div className="parent-container">
        <header>
          <h2>Align Item</h2>
        </header>
        <div className="flex justify-evenly items-center space-x-2">
          <div>Sidebar</div>
          <div>
            <h3>Main Content</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              harum, quasi laboriosam deleniti a praesentium dolores sapiente
              officiis earum error. Nam impedit provident sunt placeat adipisci
              possimus omnis neque ut.
            </p>
          </div>
          <div>Other bar</div>
        </div>
      </div>

      <div className="parent-container">
        <header>
          <h2>Items Baseline</h2>
        </header>
        <div className="flex items-baseline">
          <div className="pt-2 pb-6 bg-sky-500">01</div>
          <div className="pt-8 pb-12 bg-red-500">02</div>
          <div className="pt-12 pb-4 bg-green-500">03</div>
        </div>
      </div>
    </>
  );
};

export default FlexPage;
