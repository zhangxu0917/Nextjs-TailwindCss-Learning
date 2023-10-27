import Head from "next/head";

const Typography = () => {
  return (
    <>
      <Head>
        <title>Typography</title>
      </Head>
      <div className="p-4">
        {/* Font Family */}
        <div>
          <h2>Font Family</h2>
          <div className="font-sans">Tailwind is awesome</div>
          <div className="font-serif">Tailwind is awesome</div>
          <div className="font-mono">Tailwind is awesome</div>
        </div>

        {/* Font Family */}
        <div className="mt-4">
          <h2>Font Size</h2>
          <div className="text-xs">Tailwind is awesome</div>
          <div className="text-sm">Tailwind is awesome</div>
          <div className="text-base">Tailwind is awesome</div>
          <div className="text-lg">Tailwind is awesome</div>
          <div className="text-xl">Tailwind is awesome</div>
          <div className="text-2xl">Tailwind is awesome</div>
          <div className="text-3xl">Tailwind is awesome</div>
        </div>

        {/* Font Weight */}
        <div className="mt-4">
          <h2>Font Weight</h2>
          <div className="font-light">Tailwind is awesome</div>
          <div className="font-normal">Tailwind is awesome</div>
          <div className="font-medium">Tailwind is awesome</div>
          <div className="font-semibold">Tailwind is awesome</div>
          <div className="font-bold">Tailwind is awesome</div>
        </div>

        {/* Letter Spacing */}
        <div className="mt-4">
          <h2>Letter Spacing</h2>
          <div className="tracking-tight">Tailwind is awesome</div>
          <div className="tracking-normal">Tailwind is awesome</div>
          <div className="tracking-wide">Tailwind is awesome</div>
        </div>

        {/* Text Alignment */}
        <div className="mt-4">
          <h2>Text Alignment</h2>
          <div className="container">
            <div className="text-left">Tailwind is awesome</div>
            <div className="text-center">Tailwind is awesome</div>
            <div className="text-right">Tailwind is awesome</div>
          </div>
        </div>

        {/* Text Decoration */}
        <div className="mt-4">
          <h2>Text Decoration</h2>
          <div className="underline decoration-4 decoration-blue-400">
            Tailwind is awesome
          </div>
          <div className="underline decoration-double">Tailwind is awesome</div>
          <div className="underline decoration-dotted">Tailwind is awesome</div>
          <div className="underline decoration-dashed">Tailwind is awesome</div>
          <div className="underline decoration-wavy">Tailwind is awesome</div>
        </div>

        {/* Decoration Offset */}
        <div className="mt-4">
          <h2>Decoration Offset</h2>
          <div className="underline decoration-4 decoration-blue-400 underline-offset-8">
            Tailwind is awesome
          </div>
        </div>

        {/* Text Transform */}
        <div className="mt-4">
          <h2>Text Transform</h2>
          <div className="normal-case">Tailwind is awesome</div>
          <div className="uppercase">Tailwind is awesome</div>
          <div className="lowercase">Tailwind is awesome</div>
          <div className="capitalize">Tailwind is awesome</div>
        </div>
      </div>
    </>
  );
};

export default Typography;
