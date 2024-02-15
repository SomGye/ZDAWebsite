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

const Header = () => {
  const [, setPage] = useRecoilState(pageAtom);
  const [open, setOpen] = React.useState(false);
  const theme = useRecoilValue(themeAtom);
  return (
    <>
      {/* TODO: full mobile vers layout with just nav/logo and logo centered */}
      <header className="fixed w-full z-40 top-0 left-0 py-3 xs:py-5 flex items-center bg-gradient-to-t from-zdaRedpink-400/5 dark:from-zdaRedpink-700/5 backdrop-blur-2xl text-gray-700 dark:text-gray-200 text-base font-outfit border-b border-gray-200/50 dark:border-stone-800/10 rounded-md">
        {/* MOBILE PHONE ONLY */}
        <div className="flex justify-between items-center w-full xs:hidden p-0 mx-auto mb-0">
          <div className="nav-btn-box ml-4">
            {/* Nav Btn */}
            <button
              className="p-2 rounded-md bg-transparent text-neutral-900 dark:text-gray-200 hover:text-zdaRedpink-600 dark:hover:text-zdaRedpink-650 transition-colors duration-200 ease-out"
              onClick={() => setOpen(true)}
              aria-label="Navigation Menu"
              aria-description="Opens the Navigation Menu"
              title="Navigation Menu"
            >
              {hamburgerIcon}
            </button>
          </div>
          <div className="zda-header-logo-box mr-1 sm:mr-2 lg:mr-1">
            {/* Logo Btn */}
            <img
              src={theme === "dark" ? zdaDarkCircLogo : zdaLightCircLogo}
              alt="ZDA Z Logo"
              title="Click to see ZDA logo page"
              className="zda-header-logo cursor-pointer pointer-events-auto select-none transition ease-out duration-300 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
              width={36}
              height={36}
              onClick={() => switchPage("Logo", setPage)}
              onTouchEnd={() => switchPage("Logo", setPage)}
            />
            <img
              src={
                theme === "dark" ? zdaLightCircHoverLogo : zdaDarkCircHoverLogo
              }
              alt="ZDA Z Logo Hover Version"
              title="Click to see ZDA logo page"
              className="zda-header-logo-hover cursor-pointer pointer-events-auto select-none transition ease-out duration-300 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
              width={36}
              height={36}
              onClick={() => switchPage("Logo", setPage)}
              onTouchEnd={() => switchPage("Logo", setPage)}
            />
          </div>
          {/* Theme Menu */}
          <div className="cursor-pointer focus-visible:outline-none mr-4 lg:flex lg:static lg:w-auto">
            <ThemeMenu />
          </div>
        </div>
        {/* BIG PHONE/TABLET/LAPTOP/DESKTOP */}
        <div className="hidden xs:inline-flex items-center py-3 mx-auto">
          {/* Logo/Title/Nav Container */}
          <div className="header-left sm:grid sm:grid-cols-3 md:flex p-0 m-0 absolute left-0 ml-4">
            {/* Nav Btn, Logo Btn and Title */}
            <a className="flex text-xl font-medium items-center text-gray-900 mb-0">
              <div className="nav-btn-box">
                {/* Nav Btn */}
                <button
                  className="p-2 mr-4 rounded-md bg-transparent text-neutral-900 dark:text-gray-200 hover:text-zdaRedpink-600 dark:hover:text-zdaRedpink-650 transition-colors duration-200 ease-out"
                  onClick={() => setOpen(true)}
                  aria-label="Navigation Menu"
                  aria-description="Opens the Navigation Menu"
                  title="Navigation Menu"
                >
                  {hamburgerIcon}
                </button>
              </div>
              <div className="zda-header-logo-box sm:mr-2 lg:mr-1">
                {/* Logo Btn */}
                <img
                  src={theme === "dark" ? zdaDarkCircLogo : zdaLightCircLogo}
                  alt="ZDA Z Logo"
                  title="Click to see ZDA logo page"
                  className="zda-header-logo cursor-pointer pointer-events-auto select-none transition ease-out duration-300 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
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
                  alt="ZDA Z Logo Hover Version"
                  title="Click to see ZDA logo page"
                  className="zda-header-logo-hover cursor-pointer pointer-events-auto select-none transition ease-out duration-300 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
                  width={36}
                  height={36}
                  onClick={() => switchPage("Logo", setPage)}
                  onTouchEnd={() => switchPage("Logo", setPage)}
                />
              </div>
              <span className="hidden xs:block sm:hidden lg:block ml-4 mr-2 text-xl text-gray-700 dark:text-gray-300 hover:text-zdaRedpink-500 dark:hover:text-zdaRedpink-600 transition-colors duration-500 ease-out font-light cursor-default select-none">
                ⌞ZeroDayAnubis⌝
              </span>
            </a>
            {/* Nav Links */}
            <nav className="hidden sm:flex sm:place-self-center md:place-self-auto md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 items-center text-base font-plusjakartasans font-semibold justify-center">
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
      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
