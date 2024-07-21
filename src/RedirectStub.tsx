import * as React from "react";
import ThemeMenu from "./components/ThemeMenu";
import { redirectToLink } from "./helpers";

type props = {
  redirectPath: string;
};

const RedirectStub = ({ redirectPath }: props) => {
  React.useEffect(() => {
    // Hide the init loading screen
    const loadingpage = document.querySelector("#loadingpage") as any;
    if (loadingpage && loadingpage.style) {
      loadingpage.style = "display: none";
    }

    // Do redirect from route
    redirectToLink(redirectPath);
  }, []);

  return (
    <div className="flex justify-center w-full h-full bg-zdaBG-light dark:bg-zdaBG-dark">
      {/* NOTE: ThemeMenu needed here to detect theme separately, since this page bypasses App */}
      <div className="cursor-pointer focus-visible:outline-none absolute top-0 left-1/2 -translate-x-2/4 mr-0 mt-3 lg:left-auto lg:translate-x-0 lg:right-0 lg:mr-6">
        <ThemeMenu />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <span className="inline-flex m-6 3xl:m-10 4xl:m-12 4k:m-16 font-semibold text-xl 3xl:text-2xl 4xl:text-3xl 4k:text-[42px] text-gray-600 dark:text-gray-300 pointer-events-none select-none">
          Redirecting...
        </span>
      </div>
    </div>
  );
};

export default RedirectStub;
