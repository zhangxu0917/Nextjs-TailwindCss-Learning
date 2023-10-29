import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Mini Projects</h1>
      <ul>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects/email-subscribe">
            Mini Project 01 - Email Subscribe
          </Link>
        </li>

        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects/pricing-grids">
            Mini Project 02 - Pricing Grids
          </Link>
        </li>

        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects/product-modal">
            Mini Project 03 - Product Modal
          </Link>
        </li>
      </ul>
    </>
  );
}
