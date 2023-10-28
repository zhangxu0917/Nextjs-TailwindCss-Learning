import Head from "next/head";
import { useEffect, useState } from "react";

const BreakpointPage = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>();

  const getWindowWidth = () => {
    let width = window.innerWidth;
    console.log(111, width);
    setWindowWidth((prevView) => {
      let width = window.innerWidth;
      return width;
    });
  };

  useEffect(() => {
    console.log(111);
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Breakpoint Classes & Media Queries</title>
      </Head>

      <div>
        <h2>Breakpoint Classes & Media Queries</h2>

        <div className="mb-4 text-white bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800">
          <h3>Breakpoint Classes</h3>
          <p className="text-xl md:text-3xl lg:text-5xl">
            Window Width: {windowWidth}px
          </p>
        </div>
      </div>
    </>
  );
};

export default BreakpointPage;
