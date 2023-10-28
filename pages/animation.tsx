import Head from "next/head";

const AnimationPage = () => {
  return (
    <>
      <Head>
        <title>Animation Classes & Keyframes</title>
      </Head>

      {/* Text Colors */}
      <div>
        <h2>Animation Classes & Keyframes</h2>

        <div>
          <ul className="mb-2">
            <li>animate-ping</li>
            <li>animate-bounce</li>
            <li>animate-spin</li>
            <li>animate-pulse</li>
          </ul>
          <div className="flex items-center justify-center h-[500px] bg-slate-900">
            <svg
              className="animate-wiggle w-48 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0
12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.93813-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationPage;
