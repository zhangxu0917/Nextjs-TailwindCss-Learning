import { FormEvent, useRef, useState } from "react";
import classes from "./index.module.css";

const Shortly = () => {
  const urlInputRef = useRef(null);
  const [errMsg, setErrMsg] = useState("");
  const [hasError, setHasError] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const url = urlInputRef.current.value;
    if (url === "") {
      setErrMsg("Please enter something");
      setHasError(true);
      return;
    } else {
      setHasError(false);
      setErrMsg("");
      return;
    }
  };

  return (
    <div className={`${classes["shortly-page-container"]} min-w-screen`}>
      {/* Nav Container */}
      <nav className="relative container mx-auto p-6">
        {/* Flex Continer For All Items */}
        <div className="flex items-center justify-between">
          {/* Flex Container For Logo/Menu */}
          <div className="flex items-center space-x-20">
            {/* Logo */}
            <img src="/images/all-project-assets/shortly/logo.svg" alt="" />
            {/* Left Menu */}
            <div className="hidden space-x-8 font-bold lg:flex ">
              <a
                href="#"
                className="text-shortly-grayishViolet hover:text-shortly-veryDarkViolet"
              >
                Features
              </a>
              <a
                href="#"
                className="text-shortly-grayishViolet hover:text-shortly-veryDarkViolet"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-shortly-grayishViolet hover:text-shortly-veryDarkViolet"
              >
                Resources
              </a>
            </div>
          </div>

          {/* Right Buttons Menu */}
          <div className="hidden items-center space-x-6 font-bold lg:flex text-shortly-grayishViolet">
            <div className="hover:text-veryDarkViolet">Login</div>
            <a
              href="#"
              className="px-8 py-3 font-bold text-white bg-shortly-cyan rounded-full hover:opacity-80"
            >
              Sign Up
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className={`${classes.hamburger} ${
                menuIsOpen ? classes.open : ""
              } z-40 block  md:hidden focus:outline-none`}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <span className={classes["hamburger-top"]}></span>
              <span className={classes["hamburger-middle"]}></span>
              <span className={classes["hamburger-bottom"]}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="menu"
          className={`${classes.menu} ${
            menuIsOpen ? "flex" : "hidden"
          } absolute p-6 rounded-lg bg-shortly-darkViolet left-6 right-6 top-20 z-100`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center">
              Features
            </a>
            <a href="#" className="w-full text-center">
              Pricing
            </a>
            <a href="#" className="w-full text-center">
              Resources
            </a>
            <a
              href="#"
              className="w-full pt-6 border-t border-gray-400 text-center"
            >
              Login
            </a>
            <a
              href="#"
              className="w-full py-3 text-center rounded-full bg-shortly-cyan"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        {/* Hero Container */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* Content Container */}
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 xl:mb-52 lg:w-1/2">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              More than just shorter links
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <a
                href=""
                className="py-5 px-10 text-2xl font-bold text-white bg-shortly-cyan rounded-full lg-py-4 hover:opacity-70 hover:text-white"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <img
              src="/images/all-project-assets/shortly/illustration-working.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Shorten Section */}
      <section id="shorten" className="relative bg-gray-100">
        {/* Shorten Container */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <form
            className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-shortly-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className={`${
                hasError ? "border-shortly-red" : ""
              } flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none`}
              placeholder="Shorten a link here"
              id="link-input"
              ref={urlInputRef}
            />

            <button className="px-10 py-3 text-white bg-shortly-cyan rounded-lg hover:bg-shortly-cyanLight focus:outline-none md:py-2">
              Shorten It!
            </button>

            {/* Error Message */}
            <div className="absolute left-7 bottom-3 text-shortly-red text-sm italic">
              {errMsg}
            </div>
          </form>

          {/* Link 1 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-shortly-veryDarkViolet md:text-left">
              https://frontendmetor.io
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-shortly-cyan">
                https://rel.ink/k4IKyk
              </div>
              <button className="p-2 px-8 text-white bg-shortly-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          {/* Link 2 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-shortly-veryDarkViolet md:text-left">
              https://twitter.com/frontendmetor
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-shortly-dark">
                https://rel.ink/gx0Xp9
              </div>
              <button className="p-2 px-8 text-white bg-shortly-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          {/* Link 3 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-shortly-veryDarkViolet md:text-left">
              https://linkedin.com/frontendmetor
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-shortly-cyan">
                https://rel.ink/gob3X9
              </div>
              <button className="p-2 px-8 text-white bg-shortly-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>

      {/* Feature Box Section */}
      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* Horizontal Line */}
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-shortly-cyan md:block"></div>
          {/* Vertical Line */}
          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-shortly-cyan md:hidden"></div>
          {/* Box 1 */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image Positioning */}
            <div className="absolute -ml-10 -top-10 md:left-16 left-1/2">
              {/* Image Container For Background & Center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-shortly-veryDarkViolet">
                <img
                  src="/images/all-project-assets/shortly/icon-brand-recognition.svg"
                  alt=""
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Brand Recoginition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing.Branded links help instil confidence in your content.
            </p>
          </div>

          {/* Box 2 */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8">
            {/* Image Positioning */}
            <div className="absolute -ml-10 -top-10 md:left-16 left-1/2">
              {/* Image Container For Background & Center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-shortly-veryDarkViolet">
                <img
                  src="/images/all-project-assets/shortly/icon-detailed-records.svg"
                  alt=""
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Detail records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* Box 3 */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-16">
            {/* Image Positioning */}
            <div className="absolute -ml-10 -top-10 md:left-16 left-1/2">
              {/* Image Container For Background & Center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-shortly-veryDarkViolet">
                <img
                  src="/images/all-project-assets/shortly/icon-fully-customizable.svg"
                  alt=""
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Fully customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className={`${classes.cta} py-24 bg-shortly-darkViolet`}
      >
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>
          <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-shortly-cyan hover:bg-shortly-cyanLight md:text-base md:py-3 focus:outline-none">
            Get Started
          </button>
        </div>
      </section>

      <footer className="py-16 bg-shortly-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          {/* Logo */}
          <img src="/images/all-project-assets/shortly/logo.svg" />
          {/* Menu */}
          <div className="flex flex-col space-y-16 md:space-x 20 md:flex-row md:space-y-0">
            {/* Menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white captilize">
                Features
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                >
                  Link shortening
                </a>
                <a
                  href="#"
                  className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                >
                  Branded links
                </a>
                <a
                  href="#"
                  className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                >
                  Analytics
                </a>
              </div>
            </div>

            {/* Menu 2 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white captilize">
                Resources
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                >
                  Developers
                </a>
                <a
                  href="#"
                  className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                >
                  Support
                </a>
              </div>
            </div>

            {/* Menu 3 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white captilize">Company</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                >
                  About
                </a>
                <a
                  href="#"
                  className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                >
                  Our Team
                </a>
                <a
                  href="#"
                  className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="capitalize text-shortly-grayishViolet hover:text-shortly-cyan"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Social Container */}
          <div className="flex space-x-6">
            <a href="#">
              <img
                src="/images/all-project-assets/shortly/icon-facebook.svg"
                alt=""
                className={classes.ficon}
              />
            </a>
            <a href="#">
              <img
                src="/images\all-project-assets\shortly/icon-twitter.svg"
                alt=""
                className={classes.ficon}
              />
            </a>
            <a href="#">
              <img
                src="/images\all-project-assets\shortly/icon-pinterest.svg"
                alt=""
                className={classes.ficon}
              />
            </a>
            <a href="#">
              <img
                src="/images\all-project-assets\shortly/icon-instagram.svg"
                alt=""
                className={classes.ficon}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shortly;
