import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/sandbox">Sandbox</Link>
        </li>

        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects">Mini Projects</Link>
        </li>
      </ul>
    </>
  );
}
