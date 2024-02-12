import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/themeAtom";
import ThemeMenu from "../../components/ThemeMenu";
import zdaDarkCircLogo from "/zda_dark_circ.svg";
import zdaLightCircLogo from "/zda_light_circ.svg";
import zdaDarkCircHoverLogo from "/zda_dark_circ_hover.svg";
import zdaLightCircHoverLogo from "/zda_light_circ_hover.svg";

const Header = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <>
      {/* TODO: mobile centered logo vers */}
      {/* TODO: hamburger menu icon button and Joy UI side panel */}
      <header
        className="fixed w-full z-40 top-0 left-0 py-5 flex items-center bg-gradient-to-t from-zdaRedpink-400/5 dark:from-zdaRedpink-700/5 backdrop-blur-2xl text-gray-700 dark:text-gray-200 text-base font-outfit border-b border-gray-200/50 dark:border-stone-800/10 rounded-md"
      >
        <div
          className="inline-flex items-center py-3 mx-auto"
        >
          {/* Logo/Title/Nav Container */}
          <div className="header-left flex absolute left-0 ml-4">
            {/* Logo Btn and Title */}
            <a className="flex text-xl font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div className="zda-header-logo-box md:mr-1">
                <img
                  src={theme === "dark" ? zdaDarkCircLogo : zdaLightCircLogo}
                  alt="ZDA Z Logo"
                  title="Click to see ZDA logo page"
                  className="zda-header-logo cursor-pointer pointer-events-auto select-none transition ease-out duration-300 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
                  width={36}
                  height={36}
                  onClick={() => window.location.replace("/logo")}
                  onTouchEnd={() => window.location.replace("/logo")}
                />
                <img
                  src={
                    theme === "dark"
                      ? zdaLightCircHoverLogo
                      : zdaDarkCircHoverLogo
                  }
                  alt="ZDA Z Logo Hover Version"
                  title="Click to see ZDA logo page"
                  className="zda-header-logo-hover cursor-pointer pointer-events-auto select-none transition ease-out duration-300 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
                  width={36}
                  height={36}
                  onClick={() => window.location.replace("/logo")}
                  onTouchEnd={() => window.location.replace("/logo")}
                />
              </div>
              <span className="ml-4 mr-2 text-xl text-gray-700 dark:text-gray-300 font-light cursor-default select-none">
                ⌞ZeroDayAnubis⌝
              </span>
            </a>
            {/* Nav Links */}
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex items-center text-base font-plusjakartasans font-semibold justify-center">
              <p
                className={
                  theme === "dark"
                    ? "nav-link-animated-dark"
                    : "nav-link-animated"
                }
              >
                Home
              </p>
              <p
                className={
                  theme === "dark"
                    ? "nav-link-animated-dark"
                    : "nav-link-animated"
                }
              >
                Portfolio
              </p>
              <p
                className={
                  theme === "dark"
                    ? "nav-link-animated-dark"
                    : "nav-link-animated"
                }
              >
                Commissions
              </p>
              <p
                className={
                  theme === "dark"
                    ? "nav-link-animated-dark"
                    : "nav-link-animated"
                }
              >
                About
              </p>
            </nav>
          </div>
          {/* Theme Menu Container */}
          <div className="header-right flex absolute right-0 mr-4">
            {/* Theme Menu */}
            <div className="cursor-pointer focus-visible:outline-none mx-2 lg:flex lg:static lg:w-auto">
              <ThemeMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
