import Link from "next/link";

const Layout = (props) => {
  return (
    <div className="p-4">
      <Link className="text-3xl" href="/">
        <h1>Tailwind CSS Sandbox</h1>
      </Link>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
