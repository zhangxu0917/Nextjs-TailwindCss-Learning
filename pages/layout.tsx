const LayoutPage = () => {
  return (
    <div className="h-screen text-white bg-slate-900 parent-container">
      <div className="container">
        <img
          className="hover:grayscale hue-rotate-90"
          src="/city.jpeg"
          alt=""
        />
      </div>

      <button className="focus:ring-2 ring-offset-2">Button</button>

      <div className="w-64 h-64 rounded-lg shadow-lg shadow-cyan-500/50 m-4"></div>

      <div className="flex justify-center -space-x-12 bg-white">
        <div className="animate-pulse w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply"></div>
        <div className="animate-bounce w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply"></div>
      </div>
    </div>
  );
};

export default LayoutPage;
