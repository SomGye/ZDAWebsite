import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  colorSchemeAtom,
  colorSchemes,
  themeAtom,
} from "../../states/themeAtom";
import ThemeMenu from "../../components/ThemeMenu";
import {
  zda_dark_circ_hover_blue_logo,
  zda_dark_circ_hover_red_logo,
  zda_dark_circ_logo,
  zda_light_circ_hover_blue_logo,
  zda_light_circ_hover_red_logo,
  zda_light_circ_logo,
} from "../../SvgSources";
import { switchPage } from "../../helpers";
import { pageAtom } from "../../states/pageAtom";
import HamburgerMenu from "../../components/HamburgerMenu";
import { hamburgerIcon } from "../../icons";
import PageLinks from "../../components/PageLinks";
import { altZDALogoCirc } from "../../AltText";
import { useDebouncedCallback } from "use-debounce";

const navButtonClasses = [
  {
    className:
      "p-2 mr-4 rounded-full bg-transparent hover:bg-zdaBlue-600/10 active:bg-zdaBlue-600/25 dark:hover:bg-zdaBlue-650/15 dark:active:bg-zdaBlue-600/30 text-neutral-900 dark:text-gray-200 hover:text-zdaBlue-600 dark:hover:text-zdaBlue-650 transition-colors duration-300 ease-out",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "p-2 mr-4 rounded-full bg-transparent hover:bg-zdaRed-600/10 active:bg-zdaRedpink-600/25 dark:hover:bg-zdaRed-650/15 dark:active:bg-zdaRedpink-600/30 text-neutral-900 dark:text-gray-200 hover:text-zdaRedpink-600 dark:hover:text-zdaRedpink-650 transition-colors duration-300 ease-out",
    colorScheme: colorSchemes[1],
  },
];
const circLogoSources = [
  {
    src: zda_light_circ_hover_blue_logo,
    theme: "",
    colorScheme: colorSchemes[0],
  },
  {
    src: zda_dark_circ_hover_blue_logo,
    theme: "dark",
    colorScheme: colorSchemes[0],
  },
  {
    src: zda_light_circ_hover_red_logo,
    theme: "",
    colorScheme: colorSchemes[1],
  },
  {
    src: zda_dark_circ_hover_red_logo,
    theme: "dark",
    colorScheme: colorSchemes[1],
  },
];

const logoTextClasses = [
  {
    className:
      "hidden lg:block ml-4 mr-2 text-xl text-gray-700 dark:text-gray-300 hover:text-zdaBlue-500 dark:hover:text-zdaBlue-600 transition-colors duration-500 ease-out font-light cursor-default select-none",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "hidden lg:block ml-4 mr-2 text-xl text-gray-700 dark:text-gray-300 hover:text-zdaRedpink-500 dark:hover:text-zdaRedpink-600 transition-colors duration-500 ease-out font-light cursor-default select-none",
    colorScheme: colorSchemes[1],
  },
];

const logoTextMobileClasses = [
  {
    className:
      "hidden xs:block sm:hidden lg:block ml-4 mr-2 text-xl text-gray-700 dark:text-gray-300 hover:text-zdaBlue-500 dark:hover:text-zdaBlue-600 transition-colors duration-500 ease-out font-light cursor-default select-none",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "hidden xs:block sm:hidden lg:block ml-4 mr-2 text-xl text-gray-700 dark:text-gray-300 hover:text-zdaRedpink-500 dark:hover:text-zdaRedpink-600 transition-colors duration-500 ease-out font-light cursor-default select-none",
    colorScheme: colorSchemes[1],
  },
];

const Header = () => {
  const [, setPage] = useRecoilState(pageAtom);
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const theme = useRecoilValue(themeAtom);
  const colorScheme = useRecoilValue(colorSchemeAtom);
  const defaultHeaderHeight = 80; // 80px = 5rem; will scale with screen size
  const [headerHeight, setHeaderHeight] = React.useState(defaultHeaderHeight);
  const headerId = "app-header";
  const debounceDelay = 125;

  const determineHeaderClass = () => {
    if (scrolled) {
      if (theme === "dark") {
        return "scrolled-header-" + colorScheme + "-dark ";
      } else {
        return "scrolled-header-" + colorScheme + " ";
      }
    } else {
      if (theme === "dark") {
        return "top-header-" + colorScheme + "-dark ";
      } else {
        return "top-header-" + colorScheme + " ";
      }
    }
  };

  const getColorSchemeClassName = (element: string) => {
    let targetClasses;
    // Determine class list from element type
    if (element === "navButton") {
      targetClasses = navButtonClasses;
    } else if (element === "logoText") {
      targetClasses = logoTextClasses;
    } else if (element === "logoTextMobile") {
      targetClasses = logoTextMobileClasses;
    } else {
      targetClasses = [{ className: "", colorScheme: colorSchemes[0] }];
    }

    // Filter on classes for className matching colorScheme
    const resultObj = targetClasses.filter(
      (classObj) => classObj.colorScheme === colorScheme
    );
    if (resultObj && resultObj.length) {
      return resultObj[0].className;
    } else {
      return targetClasses[0].className;
    }
  };

  const getLogoSrc = () => {
    // Normalize "light"/"system" to "" for theme filter
    const normalizedTheme = theme !== "dark" ? "" : theme;
    // Filter on sources by theme and colorScheme
    const resultObj = circLogoSources.filter(
      (logoSrc) =>
        logoSrc.colorScheme === colorScheme && logoSrc.theme === normalizedTheme
    );
    if (resultObj && resultObj.length) {
      return resultObj[0].src;
    } else {
      return circLogoSources[0].src;
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
          "sticky w-full z-40 top-0 left-0 py-3 xs:py-5 flex items-center bg-gradient-to-t backdrop-blur-2xl text-gray-700 dark:text-gray-200 text-base font-outfit border-b border-transparent dark:border-transparent rounded-md"
        }
        id={headerId}
      >
        <div className="header-container flex justify-between xs:justify-normal w-full items-center p-0 mx-auto xs:m-0">
          {/* LEFT - Nav Btn */}
          <div className="header-left ml-4">
            {/* Nav Btn */}
            <button
              className={getColorSchemeClassName("navButton")}
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
                src={
                  theme === "dark" ? zda_dark_circ_logo : zda_light_circ_logo
                }
                alt={altZDALogoCirc}
                title="Click to see ZDA logo page"
                className="header-logo cursor-pointer pointer-events-auto select-none motion-safe:transition ease-out motion-safe:duration-300 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
                width={36}
                height={36}
                onClick={() => switchPage("Logo", setPage)}
                onTouchEnd={() => switchPage("Logo", setPage)}
              />
              <img
                src={getLogoSrc()}
                alt={altZDALogoCirc}
                title="Click to see ZDA logo page"
                className="header-logo-hover cursor-pointer pointer-events-auto select-none motion-safe:transition ease-out motion-safe:duration-300 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
                width={36}
                height={36}
                onClick={() => switchPage("Logo", setPage)}
                onTouchEnd={() => switchPage("Logo", setPage)}
              />
            </div>
            <span className={getColorSchemeClassName("logoText")}>
              ⌞ZeroDayAnubis⌝
            </span>
            <PageLinks location={"headerLg"} />
          </div>
          {/* MID RIGHT - Title/Nav Links - (only xs thru md) */}
          <div className="header-midright hidden xs:flex md:hidden absolute left-1/2 right-1/2 justify-center">
            <span className={getColorSchemeClassName("logoTextMobile")}>
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
