import Switch from "@/components/switch";
import Head from "next/head";

const DarkModePage = () => {
  return (
    <>
      <Head>
        <title>Dark Mode</title>
      </Head>

      {/* Text Colors */}
      <div>
        <h2>Dark Mode</h2>
        <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl">
          <h3 className="text-slate-900 dark:text-white font-medium tracking-tight">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            minus ea itaque error quos sint similique eveniet sequi tenetur,
            eligendi dicta veniam iure non natus, quisquam in eius odit
            corporis?
          </p>
        </div>

        <Switch labelText="toggle the dark mode" />
      </div>
    </>
  );
};

export default DarkModePage;

// It also depend on class
// You can set the class 'dark' on root element('html') to set the dark mode manually.
/* 
You need to add config to tailwind.config.ts

const config: Config = {
  darkMode: "class",
}
*/
