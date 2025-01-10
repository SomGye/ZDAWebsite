import * as React from "react";
import { leftArrowMdIcon } from "../icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorSchemeAtom, colorSchemes, themeAtom } from "../states/themeAtom";
import zdalogo_dark_blue from "/zda_dark_blue.svg";
import zdalogo_light_blue from "/zda_light_blue.svg";
import zdalogo_dark_red from "/zda_dark_red.svg";
import zdalogo_light_red from "/zda_light_red.svg";
import zda_redpink from "/zerodayanubis_redpink.svg";
import zda_red from "/zerodayanubis_red.svg";
import zda_blue from "/zerodayanubis_blue.svg";
import zda_dark from "/zerodayanubis_dark.svg";
import zda_light from "/zerodayanubis_light.svg";
import { switchPage } from "../helpers";
import { pageAtom } from "../states/pageAtom";
import {
  altLongTextLogo,
  altLongTextLogoBlue,
  altLongTextLogoRed,
  altLongTextLogoRedpink,
  altZDALogoLg,
} from "../AltText";

const logoSources = [
  {
    src: zdalogo_light_blue,
    theme: "",
    colorScheme: colorSchemes[0],
  },
  {
    src: zdalogo_dark_blue,
    theme: "dark",
    colorScheme: colorSchemes[0],
  },
  {
    src: zdalogo_light_red,
    theme: "",
    colorScheme: colorSchemes[1],
  },
  {
    src: zdalogo_dark_red,
    theme: "dark",
    colorScheme: colorSchemes[1],
  },
];

const LogoPage = () => {
  const theme = useRecoilValue(themeAtom);
  const colorScheme = useRecoilValue(colorSchemeAtom);
  const [, setPage] = useRecoilState(pageAtom);
  const colorMap = ["redpink", "red", "blue", "system"];
  const [currentColor, setColor] = React.useState(colorMap[0]);

  const getLogoSrc = () => {
    // Normalize "light"/"system" to "" for theme filter
    const normalizedTheme = theme !== "dark" ? "" : theme;
    // Filter on sources by theme and colorScheme
    const resultObj = logoSources.filter(
      (logoSrc) =>
        logoSrc.colorScheme === colorScheme && logoSrc.theme === normalizedTheme
    );
    if (resultObj && resultObj.length) {
      return resultObj[0].src;
    } else {
      return logoSources[0].src;
    }
  };

  React.useEffect(() => {
    // Hide the init loading screen
    const loadingpage = document.querySelector("#loadingpage") as any;
    if (loadingpage && loadingpage.style) {
      loadingpage.style = "display: none";
    }

    // Randomize color used for long text logo
    const randomColor = colorMap[Math.floor(Math.random() * colorMap.length)];
    setColor(randomColor);
  }, []);

  return (
    <div className="logo-page-container flex justify-center w-full h-screen m-auto">
      <div className="flex justify-center items-center flex-col flex-wrap">
        <div className="flex flex-col items-center text-md sm:text-lg 3xl:text-2xl 4xl:text-3xl 4k:text-4xl font-light font-outfit text-zdaText-dark dark:text-zdaText-light pointer-events-none select-none">
          Logo designed in InkScape
        </div>
        <div className="flex flex-col items-center my-10 lg:my-14">
          <img
            className="relative w-[240px] md:w-[300px] lg:w-[360px] xl:w-[400px] 2xl:w-[440px] 3xl:w-[500px] 4xl:w-[720px] drop-shadow-logo-light dark:drop-shadow-logo-dark select-none"
            src={getLogoSrc()}
            alt={altZDALogoLg}
            width={400}
            height={400}
          />
        </div>
        <div className="flex items-center text-sm sm:text-base 3xl:text-xl 4xl:text-2xl 4k:text-3xl font-light font-outfit text-zdaText-dark dark:text-zdaText-light pointer-events-none select-none">
          By{" "}
          {currentColor === colorMap[0] && (
            <img
              src={zda_redpink}
              alt={altLongTextLogoRedpink}
              className="ml-[2px] 3xl:w-[274px] 3xl:h-[45px] 4xl:w-[329px] 4xl:h-[54px] 4k:w-[420px] 4k:h-[69px] pointer-events-none select-none"
              width={219}
              height={36}
            />
          )}
          {currentColor === colorMap[1] && (
            <img
              src={zda_red}
              alt={altLongTextLogoRed}
              className="ml-[2px] 3xl:w-[274px] 3xl:h-[45px] 4xl:w-[329px] 4xl:h-[54px] 4k:w-[420px] 4k:h-[69px] pointer-events-none select-none"
              width={219}
              height={36}
            />
          )}
          {currentColor === colorMap[2] && (
            <img
              src={zda_blue}
              alt={altLongTextLogoBlue}
              className="ml-[2px] 3xl:w-[274px] 3xl:h-[45px] 4xl:w-[329px] 4xl:h-[54px] 4k:w-[420px] 4k:h-[69px] pointer-events-none select-none"
              width={219}
              height={36}
            />
          )}
          {currentColor === colorMap[3] && (
            <img
              src={theme === "dark" ? zda_dark : zda_light}
              alt={altLongTextLogo}
              className="ml-[2px] 3xl:w-[274px] 3xl:h-[45px] 4xl:w-[329px] 4xl:h-[54px] 4k:w-[420px] 4k:h-[69px] pointer-events-none select-none"
              width={219}
              height={36}
            />
          )}
        </div>
        <div className="my-14">
          <button
            className="btn-logopage inline-flex items-center justify-between w-full min-w-48 pt-[6px] pb-[6px] pl-4 pr-4 md:scale-[1.1] lg:scale-[1.2] rounded-md text-gray-200 font-light font-outfit tracking-wider transition ease-out duration-300 motion-reduce:transition-none hover:text-gray-100 active:transition active:duration-500 active:ease-out select-none focus:outline-none relative bg-logoBtnLight dark:bg-logoBtnDark"
            onClick={() => switchPage("Home", setPage)}
          >
            {/* HOVER */}
            <div className="btn-logopage-helper inline-flex items-center justify-between w-full pt-[6px] pb-[6px] pl-4 pr-4 rounded-md text-gray-200 font-medium tracking-wider bg-logoBtnHelperLight dark:bg-logoBtnHelperDark">
              <span className="inline-block mr-2 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                {leftArrowMdIcon}
              </span>{" "}
              Go &nbsp;Back
            </div>
            {/* ACTIVE */}
            <div className="btn-logopage-helper-active inline-flex items-center justify-between w-full pt-[6px] pb-[6px] pl-4 pr-4 rounded-md text-gray-200 font-medium tracking-wider bg-logoBtnHelperActiveLight dark:bg-logoBtnHelperActiveDark">
              <span className="inline-block mr-2 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                {leftArrowMdIcon}
              </span>{" "}
              Go &nbsp;Back
            </div>
            <span className="inline-block mr-2 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              {leftArrowMdIcon}
            </span>{" "}
            Go &nbsp;Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoPage;
