import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/utility-first">Utility First Example</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/colors">Colors</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/container-space">Container & Spacing</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/typography">Typography</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/sizing">Sizing</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/layout-position">Layout & Position</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg">
          <Link href="/backgrounds-shadows">Backgrounds & Shadows</Link>
        </li>
      </ul>
    </>
  );
}
