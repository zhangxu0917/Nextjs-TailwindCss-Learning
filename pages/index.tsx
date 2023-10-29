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
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/backgrounds-shadows">Backgrounds & Shadows</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/borders">Borders & Border Radius</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/filters">Filters</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/interactivity">Interactivity</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/breakpoint">Breakpoint Classes & Media Queries</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/columns">Columns</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/flexbox">Flexbox</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/grid">Grid</Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/transition-transform">Transition & Transform</Link>
        </li>

        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/animation">Animation Classes & Keyframes</Link>
        </li>

        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/dark-mode">Dark Mode</Link>
        </li>
      </ul>
    </>
  );
}
