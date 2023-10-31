import classes from "./index.module.css";
const LoopStudios = () => {
  return (
    <div className={`${classes["outter-container"]}`}>
      {/* Hero Section */}
      <section className={classes.hero}>
        {/* Hero Container */}
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/* Nav / Logo Container */}
          <nav className="flex items-center justify-between font-bold font-white">
            {/* Logo */}
            <img src="/images/all-project-assets/loopstudios/logo.svg" />
            {/* Menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>

            {/* @todo Hamburger Button */}
            <div className="md:hidden">
              <button
                id="menu-btn"
                type="button"
                className={`${classes.hamburger} ${classes.open} z-40 block  md:hidden focus:outline-none`}
              >
                <span className={classes["hamburger-top"]}></span>
                <span className={classes["hamburger-middle"]}></span>
                <span className={classes["hamburger-bottom"]}></span>
              </button>
            </div>
          </nav>

          {/* @todo - Mobile Menu  */}

          <div className="max-w-lg mt-32 mb-32 p-4 font-josefinSans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences that deliver
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="feature">
        {/* Feature Container */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          {/* Image */}
          <img src="/images/all-project-assets/loopstudios/desktop/image-interactive.jpg" />
          {/* Text Container */}
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-josefinSans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive vr
            </h2>
            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/* Creations Section */}
      <section id="creations">
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>

            <button className={`${classes.button} hidden md:block`}>
              See all
            </button>
          </div>

          {/* Items Container 1 */}
          <div className={classes["items-container"]}>
            {/* Item 1 */}
            <div className={`${classes.item} group`}>
              {/* Desktop Image */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/images/all-project-assets/loopstudios/desktop/image-deep-earth.jpg"
                alt=""
              />

              {/* Mobile Image */}
              <img
                className="w-full md:hidden"
                src="/images/all-project-assets/loopstudios/mobile/image-deep-earth.jpg"
                alt=""
              />
              <div
                className={`${classes["item-gradient"]} group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70`}
              ></div>
              {/* Item Text */}
              <h5
                className={`${classes["item-title"]} group-hover:scale-110 group-hover:text-black`}
              >
                Deep Earth
              </h5>
            </div>

            {/* Item 2 */}
            <div className={`${classes.item} group`}>
              {/* Desktop Image */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/images/all-project-assets/loopstudios/desktop/image-night-arcade.jpg"
                alt=""
              />

              {/* Mobile Image */}
              <img
                className="w-full md:hidden"
                src="/images/all-project-assets/loopstudios/mobile/image-night-arcade.jpg"
                alt=""
              />
              <div
                className={`${classes["item-gradient"]} group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70`}
              ></div>
              {/* Item Text */}
              <h5
                className={`${classes["item-title"]} group-hover:scale-110 group-hover:text-black`}
              >
                Night Arcade
              </h5>
            </div>

            {/* Item 3 */}
            <div className={`${classes.item} group`}>
              {/* Desktop Image */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/images/all-project-assets/loopstudios/desktop/image-soccer-team.jpg"
                alt=""
              />

              {/* Mobile Image */}
              <img
                className="w-full md:hidden"
                src="/images/all-project-assets/loopstudios/mobile/image-soccer-team.jpg"
                alt=""
              />
              <div
                className={`${classes["item-gradient"]} group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70`}
              ></div>
              {/* Item Text */}
              <h5
                className={`${classes["item-title"]} group-hover:scale-110 group-hover:text-black`}
              >
                Soccer Team VR
              </h5>
            </div>

            {/* Item 4 */}
            <div className={`${classes.item} group`}>
              {/* Desktop Image */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/images/all-project-assets/loopstudios/desktop/image-grid.jpg"
                alt=""
              />

              {/* Mobile Image */}
              <img
                className="w-full md:hidden"
                src="/images/all-project-assets/loopstudios/mobile/image-grid.jpg"
                alt=""
              />
              <div
                className={`${classes["item-gradient"]} group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70`}
              ></div>
              {/* Item Text */}
              <h5
                className={`${classes["item-title"]} group-hover:scale-110 group-hover:text-black`}
              >
                The Grid
              </h5>
            </div>
          </div>

          {/* Items Container 2 */}
          <div className={`${classes["items-container"]} mt-10`}>
            {/* Item 1 */}
            <div className={`${classes.item} group`}>
              {/* Desktop Image */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/images/all-project-assets/loopstudios/desktop/image-from-above.jpg"
                alt=""
              />

              {/* Mobile Image */}
              <img
                className="w-full md:hidden"
                src="/images/all-project-assets/loopstudios/mobile/image-from-above.jpg"
                alt=""
              />
              <div
                className={`${classes["item-gradient"]} group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70`}
              ></div>
              {/* Item Text */}
              <h5
                className={`${classes["item-title"]} group-hover:scale-110 group-hover:text-black`}
              >
                From Up Above VR
              </h5>
            </div>

            {/* Item 2 */}
            <div className={`${classes.item} group`}>
              {/* Desktop Image */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/images/all-project-assets/loopstudios/desktop/image-pocket-borealis.jpg"
                alt=""
              />

              {/* Mobile Image */}
              <img
                className="w-full md:hidden"
                src="/images/all-project-assets/loopstudios/mobile/image-pocket-borealis.jpg"
                alt=""
              />
              <div
                className={`${classes["item-gradient"]} group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70`}
              ></div>
              {/* Item Text */}
              <h5
                className={`${classes["item-title"]} group-hover:scale-110 group-hover:text-black`}
              >
                Pocket Borealis
              </h5>
            </div>

            {/* Item 3 */}
            <div className={`${classes.item} group`}>
              {/* Desktop Image */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/images/all-project-assets/loopstudios/desktop/image-curiosity.jpg"
                alt=""
              />

              {/* Mobile Image */}
              <img
                className="w-full md:hidden"
                src="/images/all-project-assets/loopstudios/mobile/image-curiosity.jpg"
                alt=""
              />
              <div
                className={`${classes["item-gradient"]} group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70`}
              ></div>
              {/* Item Text */}
              <h5
                className={`${classes["item-title"]} group-hover:scale-110 group-hover:text-black`}
              >
                The Curiosity
              </h5>
            </div>

            {/* Item 4 */}
            <div className={`${classes.item} group`}>
              {/* Desktop Image */}
              <img
                className="hidden w-full duration-200 md:block group-hover:scale-110"
                src="/images/all-project-assets/loopstudios/desktop/image-fisheye.jpg"
                alt=""
              />

              {/* Mobile Image */}
              <img
                className="w-full md:hidden"
                src="/images/all-project-assets/loopstudios/mobile/image-fisheye.jpg"
                alt=""
              />
              <div
                className={`${classes["item-gradient"]} group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70`}
              ></div>
              {/* Item Text */}
              <h5
                className={`${classes["item-title"]} group-hover:scale-110 group-hover:text-black`}
              >
                Make It Fisheye
              </h5>
            </div>
          </div>

          {/* Bottom Button Container */}
          <div className="flex justify-center mt-10 md:hidden">
            <button className={`${classes.button} w-full md:hidden`}>
              See All
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        {/* Container */}
        <div className="container max-w-6xl py-10 mx-auto">
          {/* Footer Flex Container */}
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md-items-start">
            {/* Menu & Logo Container */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              {/* Logo */}
              <div className="h-8">
                <img
                  src="/images/all-project-assets/loopstudios/logo.svg"
                  alt=""
                  className="w-44 md:ml-3"
                />
              </div>
              {/* Menu Container */}
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {/* Item 1 */}
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 2 */}
                <div className="h-10 group">
                  <a href="#">Careers</a>
                  <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 3 */}
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 4 */}
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                {/* Item 5 */}
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
            {/* Social & Copy Container */}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* Icons Container */}
              <div className="flex item center justify-center space-x-4 md:justify-end md:mx-0">
                {/* Icon 1 */}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="/images/all-project-assets/loopstudios/icon-facebook.svg"
                      alt=""
                      className="h-6"
                    />
                  </a>
                </div>

                {/* Icon 2 */}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="/images/all-project-assets/loopstudios/icon-twitter.svg"
                      alt=""
                      className="h-6"
                    />
                  </a>
                </div>

                {/* Icon 3 */}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="/images/all-project-assets/loopstudios/icon-pinterest.svg"
                      alt=""
                      className="h-6"
                    />
                  </a>
                </div>

                {/* Icon 4 */}
                <div className="h-8 group">
                  <a href="#">
                    <img
                      src="/images/all-project-assets/loopstudios/icon-instagram.svg"
                      alt=""
                      className="h-6"
                    />
                  </a>
                </div>
              </div>

              {/* Copy */}
              <div className="font-bold">
                &copy; 2022 Loopstudios. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoopStudios;
