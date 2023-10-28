import CssPropertyList from "@/components/css-property-list";
import Head from "next/head";

const BackgroundsAndShadows = () => {
  return (
    <>
      <Head>
        <title>Backgrounds & Shadows</title>
      </Head>

      <div>
        <h2>Backgrounds & Shadows</h2>

        {/* Background-Classes */}
        <div className="mb-4">
          <h3 className="mb-2">Background-Classes</h3>
          <div
            className="h-64 w-72 bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url('/images/img1.jpg')",
            }}
          ></div>

          <h4 className="mt-2">Background Size</h4>
          <ul className="text-slate-600">
            <li>
              <span className="inline-block w-40">bg-auto</span>
              <span>background-size: auto;</span>
            </li>
            <li>
              <span className="inline-block w-40">bg-cover</span>
              <span>background-size: cover;</span>
            </li>
            <li>
              <span className="inline-block w-40">bg-contain</span>
              <span>background-size: contain;</span>
            </li>
          </ul>

          <h4 className="mt-2">Background Repeat</h4>
          <ul className="text-slate-600">
            <li>
              <span className="inline-block w-40 bg-repeat">bg-repeat</span>
              <span>background-repeat: repeat;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-no-repeat">
                bg-no-repeat
              </span>
              <span>background-repeat: no-repeat;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-repeat-x">bg-repeat-x</span>
              <span>background-repeat: repeat-x;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-repeat-y">bg-repeat-y</span>
              <span>background-repeat: repeat-y;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-repeat-round">
                bg-repeat-round
              </span>
              <span>background-repeat: round;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-repeat-space">
                bg-repeat-space
              </span>
              <span>background-repeat: space;</span>
            </li>
          </ul>

          <h4 className="mt-2">Background Position</h4>
          <ul className="text-slate-600">
            <li>
              <span className="inline-block w-40 bg-bottom">bg-bottom</span>
              <span>background-position: bottom;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-center">bg-center</span>
              <span>background-position: center;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-left">bg-left</span>
              <span>background-position: left;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-left-bottom">
                bg-left-bottom
              </span>
              <span>background-position: left bottom;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-left-top">bg-left-top</span>
              <span>background-position: left top;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-right">bg-right</span>
              <span>background-position: right;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-right-bottom">
                bg-right-bottom
              </span>
              <span>background-position: right bottom;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-right-top">
                bg-right-top
              </span>
              <span>background-position: right top;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-top">bg-top</span>
              <span>background-position: top;</span>
            </li>
          </ul>

          <h4 className="mt-2">Background Attachment</h4>
          <ul className="text-slate-600">
            <li>
              <span className="inline-block w-40 bg-fixed">bg-fixed</span>
              <span>background-attachment: fixed;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-local">bg-local</span>
              <span>background-attachment: local;</span>
            </li>
            <li>
              <span className="inline-block w-40 bg-scroll">bg-scroll</span>
              <span>background-attachment: scroll;</span>
            </li>
          </ul>
        </div>

        {/* Gradients */}
        <div className="mb-4">
          <h3 className="mb-2">Gradients</h3>
          <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        </div>

        {/* Shadows */}
        <div className="mb-4">
          <h3 className="mb-2">Shadows</h3>
          <div className="w-96 ml-4 p-3 shadow">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            debitis repellat molestias eum, quisquam unde, officiis mollitia ea
            dolores modi reprehenderit nisi iusto dolorum necessitatibus, sequi
            voluptatem sapiente dolore placeat.
          </div>

          <div className="w-96 mt-6 ml-4 p-3 shadow-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            debitis repellat molestias eum, quisquam unde, officiis mollitia ea
            dolores modi reprehenderit nisi iusto dolorum necessitatibus, sequi
            voluptatem sapiente dolore placeat.
          </div>

          <div className="w-96 mt-6 ml-4 p-3 shadow-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            debitis repellat molestias eum, quisquam unde, officiis mollitia ea
            dolores modi reprehenderit nisi iusto dolorum necessitatibus, sequi
            voluptatem sapiente dolore placeat.
          </div>

          <div className="w-96 mt-6 ml-4 p-3 shadow-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            debitis repellat molestias eum, quisquam unde, officiis mollitia ea
            dolores modi reprehenderit nisi iusto dolorum necessitatibus, sequi
            voluptatem sapiente dolore placeat.
          </div>

          <div className="w-96 mt-6 ml-4 p-3 shadow-inner shadow-blue-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            debitis repellat molestias eum, quisquam unde, officiis mollitia ea
            dolores modi reprehenderit nisi iusto dolorum necessitatibus, sequi
            voluptatem sapiente dolore placeat.
          </div>

          <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-red-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            debitis repellat molestias eum, quisquam unde, officiis mollitia ea
            dolores modi reprehenderit nisi iusto dolorum necessitatibus, sequi
            voluptatem sapiente dolore placeat.
          </div>

          <div className="mt-8">
            <CssPropertyList
              title="Shadow"
              cssProperties={[
                {
                  label: "shadow-sm",
                  value: "box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);",
                },
                {
                  label: "shadow",
                  value:
                    "box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
                },
                {
                  label: "shadow-md",
                  value:
                    "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
                },
                {
                  label: "shadow-lg",
                  value:
                    "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
                },
                {
                  label: "shadow-xl",
                  value:
                    "box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
                },
                {
                  label: "shadow-2xl",
                  value: "box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);",
                },
                {
                  label: "shadow-inner",
                  value: "box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);",
                },
                {
                  label: "shadow-none",
                  value: "box-shadow: 0 0 #0000;",
                },
              ]}
            />
          </div>
        </div>

        {/* Mix Blend */}
        <div className="mb-4">
          <h3 className="mb-2">Mix Blend</h3>

          <div className="flex justify-center -space-x-24">
            <div className="mix-blend-multiply bg-blue-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              veritatis velit dignissimos tempore voluptate obcaecati corrupti
              rerum quis reiciendis? Corrupti perspiciatis dignissimos autem
              quae praesentium minus blanditiis, in consectetur officiis?
            </div>
            <div className="mix-blend-multiply bg-pink-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              veritatis velit dignissimos tempore voluptate obcaecati corrupti
              rerum quis reiciendis? Corrupti perspiciatis dignissimos autem
              quae praesentium minus blanditiis, in consectetur officiis?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundsAndShadows;
