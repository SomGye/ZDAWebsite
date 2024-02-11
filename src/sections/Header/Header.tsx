import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/themeAtom";
import ThemeMenu from "../../components/ThemeMenu";
import zdaDarkLogo from "/zda_dark_mono.svg";
import zdaLightLogo from "/zda_light_mono.svg";
import zdaDarkHoverLogo from "/zda_dark_hover.svg";
import zdaLightHoverLogo from "/zda_light_hover.svg";

const Header = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <>
      {/* TODO: do Tailblocks Header style 2 (https://tailblocks.cc/) */}
      <span className="z-40 max-h-[18vh] fixed left-0 top-0 flex w-full items-center justify-between border-b border-gray-200 rounded-md bg-gradient-to-t from-zdaRedpink-500/5 p-4 backdrop-blur-2xl dark:border-neutral-900 dark:bg-zdaBG-darkCard dark:from-zdaRed-600/ lg:flex text-zdaText-dark dark:text-zdaText-light cursor-default select-none">
        {/* TODO: mobile centered logo vers */}
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
      </span>
    </>
  );
};

export default Header;
