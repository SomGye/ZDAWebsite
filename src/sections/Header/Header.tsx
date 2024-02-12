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
      {/* TAILBLOCKS VERS */}
      {/* TODO: mobile centered logo vers */}
      <span className="text-gray-700 dark:text-gray-200 text-base font-outfit">
        <div className="container mx-auto flex p-5 flex-col md:flex-row items-center">
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
          <div className="cursor-pointer focus-visible:outline-none mx-2 lg:flex lg:static lg:w-auto">
            <ThemeMenu />
          </div>
        </div>
      </span>
      {/* ZDAWorks VERS */}
      {/* <span className="z-40 max-h-[18vh] fixed left-0 top-0 flex w-full items-center justify-between border-b border-gray-200 rounded-md bg-gradient-to-t from-zdaRedpink-500/5 p-4 backdrop-blur-2xl dark:border-neutral-900 dark:bg-zdaBG-darkCard dark:from-zdaRed-600/ lg:flex text-zdaText-dark dark:text-zdaText-light cursor-default select-none">
        <div className="zda-header-logo-box">
          <img
            src={theme === "dark" ? zdaDarkLogo : zdaLightLogo}
            alt="ZDA Z Logo"
            title="Click to see ZDA logo page"
            className="zda-header-logo cursor-pointer pointer-events-auto select-none transition ease-out duration-300 3xl:w-[28px] 3xl:h-[28px] 4xl:w-[36px] 4xl:h-[36px] 4k:w-[52px] 4k:h-[52px]"
            width={28}
            height={28}
            onClick={() => window.location.replace("/logo")}
            onTouchEnd={() => window.location.replace("/logo")}
          />
          <img
            src={theme === "dark" ? zdaDarkHoverLogo : zdaLightHoverLogo}
            alt="ZDA Z Logo Hover Version"
            title="Click to see ZDA logo page"
            className="zda-header-logo-hover cursor-pointer pointer-events-auto select-none transition ease-out duration-300 3xl:w-[28px] 3xl:h-[28px] 4xl:w-[36px] 4xl:h-[36px] 4k:w-[52px] 4k:h-[52px]"
            width={28}
            height={28}
            onClick={() => window.location.replace("/logo")}
            onTouchEnd={() => window.location.replace("/logo")}
          />
        </div>
        <div className="hidden xxs:block 3xl:text-xl 4xl:text-2xl 4k:text-3xl">
          ZeroDayAnubis
        </div>
        <div className="cursor-pointer focus-visible:outline-none mr-2 lg:flex lg:static lg:w-auto">
          <ThemeMenu />
        </div>
      </span> */}
    </>
  );
};

export default Header;
