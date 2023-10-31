import classes from "./index.module.css";

const Clipboard = () => {
  return (
    <div className={classes.pageContainer}>
      {/* Hero Section */}
      <section id="hero">
        <div className={`${classes["section-container"]} mb-40 px-10 pt-16`}>
          <img
            src="/images/all-project-assets/clipboard/logo.svg"
            alt=""
            className="mx-auto my-16"
          />
          <h3 className={classes["sub-title"]}>
            A history of everything your copy
          </h3>
          <p className="max-w-3xl mx-auto mb-10 text-2xl">
            Clipboard allows you to track and organize everything your copy.
            Instantly access your clipboard on all your devices.
          </p>
          {/* Button Container */}。
          <div className={classes["button-container"]}>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 text-white hover:text-white"
            >
              Download for iOS
            </a>

            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 text-white hover:text-white"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* Snippets Section */}
      <section id="snippets">
        <div className={`${classes["section-container"]} my-20 px-10`}>
          <h3 className={classes["sub-title"]}>Keep track of your snippets</h3>
          <p className={`${classes["section-content"]} mb-24 text-xl`}>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className={`${classes["section-container"]} my-20`}>
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="/images/all-project-assets/clipboard/image-computer.png"
                className="md:absolute top-0 right-[50%] "
              />
            </div>
            {/* Items Container */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-cl md:text-left md:pl-16 md:w-1/2">
              {/* Item 1 */}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Quick Search
                </h5>
                <p className="max-w-md text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  iCloud Sync
                </h5>
                <p className="max-w-md text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>

              {/* Item 3 */}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Completely History
                </h5>
                <p className="max-w-md text-grayishBlue">
                  Retrieve any snippets from the first moment your started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Anywhere Section */}
      <section id="access">
        <div className={`${classes["section-container"]} my-20`}>
          <h3 className={classes["sub-title"]}>Access Clipboard Anywhere</h3>
          <p className={`${classes["section-content"]} mb-24} text-xl`}>
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>

          <img
            src="/images/all-project-assets/clipboard/image-devices.png"
            alt=""
            className="mx-auto"
          />
        </div>
      </section>

      {/* Supercharge Section */}
      <section id="supercharge">
        <div className={`${classes["section-container"]} my-20`}>
          <h3 className={classes["sub-title"]}>Supercharge your workflow</h3>
          <p className={`${classes["section-content"]} mb-16 text-xl`}>
            We've got the tools to boost your productivity.
          </p>

          {/* Items Container */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img
                src="/images/all-project-assets/clipboard/icon-blacklist.svg"
                alt=""
                className="mb-6"
              />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-grayishBlue">
                Easily Search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center space-y-5">
              <img
                src="/images/all-project-assets/clipboard/icon-text.svg"
                alt=""
                className="mb-6"
              />
              <h5>Plain Text Snippets</h5>
              <p className="max-w-md text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center space-y-5">
              <img
                src="/images/all-project-assets/clipboard/icon-preview.svg"
                alt=""
                className="mb-6"
              />
              <h5>Sneak Preview</h5>
              <p className="max-w-md text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="/images/all-project-assets/clipboard/logo-google.png" />
          <img src="/images/all-project-assets/clipboard/logo-ibm.png" />
          <img src="/images/all-project-assets/clipboard/logo-microsoft.png" />
          <img src="/images/all-project-assets/clipboard/logo-hp.png" />
          <img src="/images/all-project-assets/clipboard/logo-vector-graphics.png" />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="bottom">
        <div className={`${classes["section-container"]} my-20`}>
          <h3 className={`${classes["sub-title"]}`}>
            Clipboard for iOS and MacOS
          </h3>
          <p className={`${classes["section-content"]} mb-10 text-xl`}>
            Available for free on the App Store. Download for Mac or iOS sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          {/* Button Container */}
          <div className={classes["button-container"]}>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 text-white hover:text-white"
            >
              Download for iOS
            </a>

            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 text-white hover:text-white"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className={`${classes["section-container"]}`}>
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Image */}
            <img
              src="/images/all-project-assets/clipboard/logo.svg"
              alt=""
              className="scale-50"
            />
            {/* Container for Menus & Social */}
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              {/* Menu */}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* Menu 1 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a
                      href="#"
                      className="text-grayishBlue hover:text-strongCyan"
                    >
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-grayishBlue hover:text-strongCyan"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
                {/* Menu 2 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a
                      href="#"
                      className="text-grayishBlue hover:text-strongCyan"
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-grayishBlue hover:text-strongCyan"
                    >
                      Press Kit
                    </a>
                  </div>
                </div>
                {/* Menu 3 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a
                      href="#"
                      className="text-grayishBlue hover:text-strongCyan"
                    >
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-between w-32 py-1">
                <a href="#">
                  <img
                    src="/images/all-project-assets/clipboard/icon-facebook.svg"
                    alt=""
                    className={`${classes.ficon} duration-200`}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/all-project-assets/clipboard/icon-twitter.svg"
                    alt=""
                    className={`${classes.ficon} duration-200`}
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/all-project-assets/clipboard/icon-instagram.svg"
                    alt=""
                    className={`${classes.ficon} duration-200`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Clipboard;
