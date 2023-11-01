import TestimonialGrid from "@/components/testimonialGrid";
import Head from "next/head";

const TestimonialGridPage = () => {
  return (
    <>
      <Head>
        <title>Testimonial Grid </title>
      </Head>
      <div className="testimonial-grid-page-container">
        <TestimonialGrid />
      </div>
    </>
  );
};

export default TestimonialGridPage;
