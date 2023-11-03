import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const noLayoutPages = [
    "/mini-projects/email-subscribe",
    "/mini-projects/pricing-grids",
    "/mini-projects/product-modal",
    "/mini-projects/image-gallery",
    "/mini-projects/login-modal",
    "/mini-projects/clipboard-website",
    "/mini-projects/loopstudios",
    "/mini-projects/shortly",
    "/mini-projects/testimonial-grid",
    "/mini-projects/fylo",
    "/mini-projects/bookmark",
  ];

  return (
    <>
      {!noLayoutPages.includes(pathname) ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
