import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../../states/themeAtom";
import ThemeMenu from "../../components/ThemeMenu";
import zdaDarkCircLogo from "/zda_dark_circ.svg";
import zdaLightCircLogo from "/zda_light_circ.svg";
import zdaDarkCircHoverLogo from "/zda_dark_circ_hover.svg";
import zdaLightCircHoverLogo from "/zda_light_circ_hover.svg";
import { switchPage } from "../../helpers";
import { pageAtom } from "../../states/pageAtom";
import HamburgerMenu from "../../components/HamburgerMenu";
import { hamburgerIcon } from "../../icons";
import PageLinks from "../../components/PageLinks";
import { altZDALogoCirc } from "../../AltText";
import { useDebouncedCallback } from "use-debounce";

const Header = () => {
  const [, setPage] = useRecoilState(pageAtom);
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const theme = useRecoilValue(themeAtom);
  const defaultHeaderHeight = 80; // 80px = 5rem; will scale with screen size
  const [headerHeight, setHeaderHeight] = React.useState(defaultHeaderHeight);
  const headerId = "app-header";
  const debounceDelay = 125;

  const determineHeaderClass = () => {
    if (scrolled) {
      if (theme === "dark") {
        return "scrolled-header-dark ";
      } else {
        return "scrolled-header ";
      }
    } else {
      if (theme === "dark") {
        return "top-header-dark ";
      } else {
        return "top-header ";
      }
    }
  };

  const resizeHandler = () => {
    const headerElem = document.querySelector("#" + headerId) as any;
    if (headerElem && headerElem.clientHeight) {
      setHeaderHeight(headerElem.clientHeight);
    }
  };
  const debouncedResize = useDebouncedCallback(resizeHandler, debounceDelay);

  React.useEffect(() => {
    if (!window.onresize) {
      // Add debounced handler to check header height
      window.onresize = () => {
        debouncedResize();
      };
    }

    // ? NOTE: intentionally not debounced because it introduced bad visual bug
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > headerHeight);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header
        className={
          determineHeaderClass() +
          "sticky w-full z-40 top-0 left-0 py-3 xs:py-5 flex items-center bg-gradient-to-t from-zdaRedpink-400/5 dark:from-zdaRedpink-700/5 backdrop-blur-2xl text-gray-700 dark:text-gray-200 text-base font-outfit border-b border-transparent dark:border-transparent rounded-md"
        }
        id={headerId}
      >
        <div className="header-container flex justify-between xs:justify-normal w-full items-center p-0 mx-auto xs:m-0">
          {/* LEFT - Nav Btn */}
          <div className="header-left ml-4">
            {/* Nav Btn */}
            <button
              className="p-2 mr-4 rounded-full bg-transparent hover:bg-zdaRed-600/10 active:bg-zdaRedpink-600/25 dark:hover:bg-zdaRed-650/15 dark:active:bg-zdaRedpink-600/30 text-neutral-900 dark:text-gray-200 hover:text-zdaRedpink-600 dark:hover:text-zdaRedpink-650 transition-colors duration-300 ease-out"
              onClick={() => setOpen(true)}
              aria-label="Navigation Menu"
              aria-description="Opens the Navigation Menu"
              title="Navigation Menu"
            >
              {hamburgerIcon}
            </button>
          </div>
          {/* MID - Logo Btn/Title/Links */}
          <div className="header-mid flex items-center content-center justify-center md:justify-start">
            <div className="header-logo-box mr-1 sm:mr-2 lg:mr-1">
              {/* Logo Btn */}
              <img
                src={theme === "dark" ? zdaDarkCircLogo : zdaLightCircLogo}
                alt={altZDALogoCirc}
                title="Click to see ZDA logo page"
                className="header-logo cursor-pointer pointer-events-auto select-none motion-safe:transition ease-out motion-safe:duration-300 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
                width={36}
                height={36}
                onClick={() => switchPage("Logo", setPage)}
                onTouchEnd={() => switchPage("Logo", setPage)}
              />
              <img
                src={
                  theme === "dark"
                    ? zdaLightCircHoverLogo
                    : zdaDarkCircHoverLogo
                }
                alt={altZDALogoCirc}
                title="Click to see ZDA logo page"
                className="header-logo-hover cursor-pointer pointer-events-auto select-none motion-safe:transition ease-out motion-safe:duration-300 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
                width={36}
                height={36}
                onClick={() => switchPage("Logo", setPage)}
                onTouchEnd={() => switchPage("Logo", setPage)}
              />
            </div>
            <span className="hidden lg:block ml-4 mr-2 text-xl text-gray-700 dark:text-gray-300 hover:text-zdaRedpink-500 dark:hover:text-zdaRedpink-600 transition-colors duration-500 ease-out font-light cursor-default select-none">
              ⌞ZeroDayAnubis⌝
            </span>
            <PageLinks location={"headerLg"} />
          </div>
          {/* MID RIGHT - Title/Nav Links - (only xs thru md) */}
          <div className="header-midright hidden xs:flex md:hidden absolute left-1/2 right-1/2 justify-center">
            <span className="hidden xs:block sm:hidden lg:block ml-4 mr-2 text-xl text-gray-700 dark:text-gray-300 hover:text-zdaRedpink-500 dark:hover:text-zdaRedpink-600 transition-colors duration-500 ease-out font-light cursor-default select-none">
              ⌞ZeroDayAnubis⌝
            </span>
            <PageLinks location={"headerSm"} />
          </div>
          {/* RIGHT - Theme Menu */}
          <div className="header-right flex xs:absolute xs:right-0 mr-4 focus-visible:outline-none">
            <div className="cursor-pointer focus-visible:outline-none mx-2 lg:flex lg:static lg:w-auto">
              <ThemeMenu />
            </div>
          </div>
        </div>
      </header>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
