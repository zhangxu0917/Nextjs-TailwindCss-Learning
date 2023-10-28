import CssPropertyList from "@/components/css-property-list";
import Head from "next/head";

const FiltersPage = () => {
  return (
    <>
      <Head>
        <title>Filters</title>
      </Head>

      <div className="">
        <h2>Filters</h2>

        {/* Blur */}
        <div className="mb-4">
          <h3>Blur</h3>
          <div className="blur-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sint
            sapiente veritatis sed obcaecati pariatur in nihil est delectus
            labore nemo explicabo possimus aliquid dolorem illo libero, mollitia
            sequi alias.
          </div>
          <div className="blur">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sint
            sapiente veritatis sed obcaecati pariatur in nihil est delectus
            labore nemo explicabo possimus aliquid dolorem illo libero, mollitia
            sequi alias.
          </div>
          <img src="/images/img1.jpg" className="blur-xl w-96" />
          <div className="mt-6">
            <CssPropertyList
              title="Blur"
              cssProperties={[
                {
                  label: "blur-none",
                  value: "filter: blur(0);",
                },
                {
                  label: "blur-sm",
                  value: "filter: blur(4px);",
                },
                {
                  label: "blur",
                  value: "filter: blur(8px);",
                },
                {
                  label: "blur-md",
                  value: "filter: blur(12px);",
                },
                {
                  label: "blur-lg",
                  value: "filter: blur(16px);",
                },
                {
                  label: "blur-xl",
                  value: "filter: blur(24px);",
                },
                {
                  label: "blur-2xl",
                  value: "filter: blur(40px);",
                },
                {
                  label: "blur-3xl",
                  value: "filter: blur(64px);",
                },
              ]}
            />
          </div>
        </div>

        {/* Brightness */}
        <div className="mb-4">
          <h3 className="mb-2">Brightness</h3>
          <p>brightness-50</p>
          <img src="/images/img2.jpg" className="brightness-50 w-96 mb-2" />
          <p>brightness-75</p>
          <img src="/images/img2.jpg" className="brightness-75 w-96 mb-2" />
          <p>brightness-100</p>
          <img src="/images/img2.jpg" className="brightness-100 w-96 mb-2" />
          <p>brightness-150</p>
          <img src="/images/img2.jpg" className="brightness-150 w-96 mb-2" />
          <p>brightness-200</p>
          <img src="/images/img2.jpg" className="brightness-200 w-96 mb-2" />
          <div className="mt-2">
            <CssPropertyList
              title="Brightness"
              cssProperties={[
                {
                  label: "brightness-0",
                  value: "filter: brightness(0);",
                },
                {
                  label: "brightness-50",
                  value: "filter: brightness(.5);",
                },
                {
                  label: "brightness-75",
                  value: "filter: brightness(.75);",
                },
                {
                  label: "brightness-90",
                  value: "filter: brightness(.9);",
                },
                {
                  label: "brightness-100",
                  value: "filter: brightness(1);",
                },
                {
                  label: "brightness-105",
                  value: "filter: brightness(1.05);",
                },
                {
                  label: "brightness-110",
                  value: "filter: brightness(1.1);",
                },
                {
                  label: "brightness-125",
                  value: "filter: brightness(1.25);",
                },
                {
                  label: "brightness-150",
                  value: "filter: brightness(1.5);",
                },
                {
                  label: "brightness-200",
                  value: "filter: brightness(2);",
                },
              ]}
            />
          </div>
        </div>

        {/* Contrast */}
        <div className="mb-4">
          <h3 className="mb-2">Contrast</h3>
          <ul>
            <li>
              <p>contrast-0</p>
              <img src="/images/img3.jpg" className="contrast-0 w-96 mb-2" />
            </li>
            <li>
              <p>contrast-50</p>
              <img src="/images/img3.jpg" className="contrast-50 w-96 mb-2" />
            </li>
            <li>
              <p>contrast-100</p>
              <img src="/images/img3.jpg" className="contrast-100 w-96 mb-2" />
            </li>
            <li>
              <p>contrast-150</p>
              <img src="/images/img3.jpg" className="contrast-150 w-96 mb-2" />
            </li>
            <li>
              <p>contrast-200</p>
              <img src="/images/img3.jpg" className="contrast-200 w-96 mb-2" />
            </li>
          </ul>
          <div className="mt-2">
            <CssPropertyList
              title="Contrast"
              cssProperties={[
                {
                  label: "contrast-0",
                  value: "filter: contrast(0);",
                },
                {
                  label: "contrast-50",
                  value: "filter: contrast(.5);",
                },
                {
                  label: "contrast-75",
                  value: "filter: contrast(.75);",
                },
                {
                  label: "contrast-100",
                  value: "filter: contrast(1);",
                },
                {
                  label: "contrast-125",
                  value: "filter: contrast(1.25);",
                },
                {
                  label: "contrast-150",
                  value: "filter: contrast(1.5);",
                },
                {
                  label: "contrast-200",
                  value: "filter: contrast(2);",
                },
              ]}
            />
          </div>
        </div>

        {/* Grayscale */}
        <div className="mb-4">
          <h3 className="mb-2">Grayscale</h3>
          <img src="/images/img4.jpg" className="w-96 grayscale" />
        </div>

        {/* Invert */}
        <div className="mb-4">
          <h3 className="mb-2">Invert</h3>
          <img src="/images/img4.jpg" className="w-96 invert" />
        </div>

        {/* Sepia */}
        <div className="mb-4">
          <h3 className="mb-2">Sepia</h3>
          <img src="/images/img4.jpg" className="w-96 sepia" />
        </div>

        {/* Hue Rotate */}
        <div className="mb-4">
          <h3 className="mb-2">Hue Rotate</h3>
          <ul>
            <li>
              <p>hue-rotate-15</p>
              <img src="/images/img5.jpg" className="w-96 hue-rotate-15" />
            </li>
            <li>
              <p>hue-rotate-60</p>
              <img src="/images/img5.jpg" className="w-96 hue-rotate-60" />
            </li>
            <li>
              <p>hue-rotate-90</p>
              <img src="/images/img5.jpg" className="w-96 hue-rotate-90" />
            </li>
            <li>
              <p>hue-rotate-180</p>
              <img src="/images/img5.jpg" className="w-96 hue-rotate-180" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FiltersPage;
