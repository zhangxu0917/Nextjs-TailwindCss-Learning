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
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects/image-gallery">
            Mini Project 04 - Image Gallery
          </Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects/login-modal">
            Mini Project 05 - Login Modal
          </Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects/clipboard-website">
            Mini Project 06 - Clipboard Website
          </Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects/loopstudios">
            Mini Project 07 - LoopStudios
          </Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects/shortly">
            Mini Project 08 - Shortly Website
          </Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects/testimonial-grid">
            Mini Project 09 - Testimonial Grid
          </Link>
        </li>
        <li className="p-2 bg-blue-100 border border-blue-400 rounded-lg mb-2">
          <Link href="/mini-projects/fylo">
            Mini Project 10 - Fylo Website With Color Picker
          </Link>
        </li>
      </ul>
    </>
  );
}
