const Colors = () => {
  return (
    <>
      {/* Text Colors */}
      <div>
        <h2>Text Colors</h2>
        <p className="text-black">Tailwind is awesome.</p>
        <p className="text-white">Tailwind is awesome.</p>
        <p className="text-red-900">Tailwind is awesome.</p>
        <p className="text-green-500">Tailwind is awesome.</p>
        <p className="text-emerald-500">Tailwind is awesome.</p>
        <p className="text-zinc-500">Tailwind is awesome.</p>
        <p className="text-slate-800">Tailwind is awesome.</p>
      </div>

      {/* Background Colors */}
      <div className="mt-4">
        <h2>Background Colors</h2>
        <p className="bg-slate-800 text-yellow-200">Tailwind is awesome.</p>
        <p className="bg-emerald-400">Tailwind is awesome.</p>
        <p className="bg-yellow-300">Tailwind is awesome.</p>
        <p className="bg-indigo-800 text-white">Tailwind is awesome.</p>
      </div>

      {/* Text Underline */}
      <div className="mt-4">
        <h2>Text Underline</h2>
        <p className="underline decoration-red-500">Tailwind is awesome.</p>
        <p className="underline decoration-emerald-600">Tailwind is awesome.</p>
        <p className="underline decoration-yellow-800">Tailwind is awesome.</p>
      </div>

      {/* Border Colors */}
      <div className="mt-4">
        <h2>Border Colors</h2>
        <input type="text" className="border border-blue-400 block mb-2" />
        <input type="text" className="border border-green-400 block mb-2" />
        <input type="text" className="border border-orange-400 block" />
      </div>

      {/* Divide Color */}
      <div className="mt-4 divide-y divide-blue-300">
        <h2>Divide Color</h2>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>

      {/* Outline Colors */}
      <div className="mt-4">
        <h2>Outline Colors</h2>
        <button className="outline outline-red-500 px-4 py-2 block mb-2">
          Hello
        </button>
        <button className="outline outline-blue-500 px-4 py-2 block">
          Hello
        </button>
      </div>

      {/* Box Shadow Colors (Opacity defaults to 100, but you can set it) */}
      <div className="mt-4">
        <h2>Box Shadow Colors</h2>
        <button className="shadow-lg bg-cyan-500 shadow-cyan-500 text-white px-4 py-2 rounded-lg block mb-4">
          Subscribe
        </button>
        <button className="shadow-lg bg-purple-500 shadow-purple-500/50 text-white px-4 py-2 rounded-lg block">
          Subscribe
        </button>
      </div>

      {/* Accent Colors */}
      <div className="mt-4">
        <h2>Accent Colors</h2>
        <input type="checkbox" className="accent-purple-500" checked />
        <input type="checkbox" className="accent-cyan-500" checked />
      </div>

      {/* Arbitrary Colors */}
      <div className="mt-4">
        <h2>Arbitrary Colors</h2>
        <div className="bg-[#427fab] text-white px-2">Hello</div>
        <div className="bg-[rgb(255,0,0)] text-white px-2">Hello</div>
        <div className="bg-[orange] text-white px-2">Hello</div>
      </div>
    </>
  );
};

export default Colors;
