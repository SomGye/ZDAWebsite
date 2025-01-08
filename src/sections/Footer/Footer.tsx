import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  colorSchemeAtom,
  colorSchemes,
  themeAtom,
} from "../../states/themeAtom";
import zda_dark from "/zda_dark_mono.svg";
import zda_dark_hover_blue from "/zda_dark_mono_hover_blue.svg";
import zda_dark_hover_red from "/zda_dark_mono_hover_red.svg";
import zda_light from "/zda_light_mono.svg";
import zda_light_hover_blue from "/zda_light_mono_hover_blue.svg";
import zda_light_hover_red from "/zda_light_mono_hover_red.svg";
import zerodayanubis_dark from "/zerodayanubis_dark.svg";
import zerodayanubis_light from "/zerodayanubis_light.svg";
import zdaworks_dark from "/zdaworks_dark_nl.svg";
import zdaworks_light from "/zdaworks_light_nl.svg";
import { chatIcon, emailIcon, privacyDocIcon } from "../../icons";
import { clickEmail, clickLink, switchPage } from "../../helpers";
import { pageAtom } from "../../states/pageAtom";
import { altLongTextLogo, altZDALogoSm, altZDAWorksLogo } from "../../AltText";
import {
  bskyLink,
  caraLink,
  discordLink,
  igLink,
  kofiLink,
  payPalLink,
  printShopLink,
  privacyLink,
  threadsLink,
  venmoLink,
  zdaWorksLink,
} from "../../links";

const footerClasses = [
  {
    className:
      "w-full z-30 bottom-0 left-0 mt-auto bg-gradient-to-b from-zdaBlue-400/5 dark:from-zdaBlue-700/0 dark:to-zdaBlue-700/5 text-gray-700 dark:text-gray-200 text-base border-t border-gray-200/50 dark:border-stone-800/10 rounded-md",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "w-full z-30 bottom-0 left-0 mt-auto bg-gradient-to-b from-zdaRedpink-400/5 dark:from-zdaRedpink-700/0 dark:to-zdaRedpink-700/5 text-gray-700 dark:text-gray-200 text-base border-t border-gray-200/50 dark:border-stone-800/10 rounded-md",
    colorScheme: colorSchemes[1],
  },
];

const anchorClasses = [
  {
    className:
      "inline-flex justify-start items-center gap-2 text-sm text-zdaBlue-400 hover:text-zdaBlue-800 active:text-zdaBlue-1000 dark:text-gray-400/80 dark:hover:text-zdaBlue-500 dark:active:text-zdaBlue-500/70 select-none",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "inline-flex justify-start items-center gap-2 text-sm text-zdaRed-400 hover:text-zdaRedpink-800 active:text-zdaRedpink-1000 dark:text-gray-400/80 dark:hover:text-zdaRed-500 dark:active:text-zdaRed-500/70 select-none",
    colorScheme: colorSchemes[1],
  },
];

const bgClasses = [
  {
    className:
      "bg-gradient-to-tr from-zdaBlue-500/15 to-gray-200 dark:from-zdaBlue-900/5",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "bg-gradient-to-tr from-zdaRed-500/15 to-gray-200 dark:from-zdaRedpink-900/5",
    colorScheme: colorSchemes[1],
  },
];

const monoLogoSources = [
  {
    src: zda_light_hover_blue,
    theme: "",
    colorScheme: colorSchemes[0],
  },
  {
    src: zda_dark_hover_blue,
    theme: "dark",
    colorScheme: colorSchemes[0],
  },
  {
    src: zda_light_hover_red,
    theme: "",
    colorScheme: colorSchemes[1],
  },
  {
    src: zda_dark_hover_red,
    theme: "dark",
    colorScheme: colorSchemes[1],
  },
];

const Footer = () => {
  const theme = useRecoilValue(themeAtom);
  const colorScheme = useRecoilValue(colorSchemeAtom);
  const [, setPage] = useRecoilState(pageAtom);
  const currentYear = new Date().getFullYear();

  const getColorSchemeClassName = (element: string) => {
    let targetClasses;
    // Determine class list from element type
    if (element === "footer") {
      targetClasses = footerClasses;
    } else if (element === "anchor") {
      targetClasses = anchorClasses;
    } else if (element === "bg") {
      targetClasses = bgClasses;
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
    const resultObj = monoLogoSources.filter(
      (logoSrc) =>
        logoSrc.colorScheme === colorScheme && logoSrc.theme === normalizedTheme
    );
    if (resultObj && resultObj.length) {
      return resultObj[0].src;
    } else {
      return monoLogoSources[0].src;
    }
  };

  return (
    <footer className={getColorSchemeClassName("footer")}>
      <div className="px-3 md:px-7 lg:px-10 py-8 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 dark:text-gray-300 tracking-widest text-sm mb-4 pointer-events-none select-none">
              SOCIAL MEDIA
            </h2>
            <nav className="list-none mb-10">
              <span className="block my-3">
                <a
                  className={
                    (theme === "dark"
                      ? "footer-link-animated-dark "
                      : "footer-link-animated ") +
                    "text-gray-500 hover:text-gray-900 active:text-gray-900 active:font-semibold dark:text-gray-400/90 dark:hover:text-gray-300 dark:active:font-semibold motion-safe:transition-colors motion-safe:duration-200 ease-out select-none"
                  }
                  href={bskyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bluesky
                </a>
              </span>
              <span className="block my-3">
                <a
                  className={
                    (theme === "dark"
                      ? "footer-link-animated-dark "
                      : "footer-link-animated ") +
                    "text-gray-500 hover:text-gray-900 active:text-gray-900 active:font-semibold dark:text-gray-400/90 dark:hover:text-gray-300 dark:active:font-semibold motion-safe:transition-colors motion-safe:duration-200 ease-out select-none"
                  }
                  href={igLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </span>
              <span className="block my-3">
                <a
                  className={
                    (theme === "dark"
                      ? "footer-link-animated-dark "
                      : "footer-link-animated ") +
                    "text-gray-500 hover:text-gray-900 active:text-gray-900 active:font-semibold dark:text-gray-400/90 dark:hover:text-gray-300 dark:active:font-semibold motion-safe:transition-colors motion-safe:duration-200 ease-out select-none"
                  }
                  href={threadsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Threads
                </a>
              </span>
              <span className="block my-3">
                <a
                  className={
                    (theme === "dark"
                      ? "footer-link-animated-dark "
                      : "footer-link-animated ") +
                    "text-gray-500 hover:text-gray-900 active:text-gray-900 active:font-semibold dark:text-gray-400/90 dark:hover:text-gray-300 dark:active:font-semibold motion-safe:transition-colors motion-safe:duration-200 ease-out select-none"
                  }
                  href={caraLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cara
                </a>
              </span>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 dark:text-gray-300 tracking-widest text-sm mb-4 pointer-events-none select-none">
              PRINTS AND SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <span className="block my-3">
                <a
                  className={
                    (theme === "dark"
                      ? "footer-link-animated-dark "
                      : "footer-link-animated ") +
                    "text-gray-500 hover:text-gray-900 active:text-gray-900 active:font-semibold dark:text-gray-400/90 dark:hover:text-gray-300 dark:active:font-semibold motion-safe:transition-colors motion-safe:duration-200 ease-out select-none"
                  }
                  href={printShopLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Print Shop
                </a>
              </span>
              <span className="block my-3">
                <a
                  className={
                    (theme === "dark"
                      ? "footer-link-animated-dark "
                      : "footer-link-animated ") +
                    "text-gray-500 hover:text-gray-900 active:text-gray-900 active:font-semibold dark:text-gray-400/90 dark:hover:text-gray-300 dark:active:font-semibold motion-safe:transition-colors motion-safe:duration-200 ease-out select-none"
                  }
                  href={kofiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ko-fi
                </a>
              </span>
              <span className="block my-3">
                <a
                  className={
                    (theme === "dark"
                      ? "footer-link-animated-dark "
                      : "footer-link-animated ") +
                    "text-gray-500 hover:text-gray-900 active:text-gray-900 active:font-semibold dark:text-gray-400/90 dark:hover:text-gray-300 dark:active:font-semibold motion-safe:transition-colors motion-safe:duration-200 ease-out select-none"
                  }
                  href={payPalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PayPal
                </a>
              </span>
              <span className="block my-3">
                <a
                  className={
                    (theme === "dark"
                      ? "footer-link-animated-dark "
                      : "footer-link-animated ") +
                    "text-gray-500 hover:text-gray-900 active:text-gray-900 active:font-semibold dark:text-gray-400/90 dark:hover:text-gray-300 dark:active:font-semibold motion-safe:transition-colors motion-safe:duration-200 ease-out select-none"
                  }
                  href={venmoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Venmo
                </a>
              </span>
            </nav>
          </div>
          <div className="hidden md:block md:w-1/2 lg:w-1/4 w-full px-4">
            <h2 className="font-medium text-gray-900 dark:text-gray-300 tracking-widest text-sm mb-4 pointer-events-none select-none">
              COMPANY
            </h2>
            <h3 className=" max-w-[20ch] font-light text-gray-700 dark:text-gray-400 tracking-tight italic text-sm mb-4 select-none">
              ZDA is brought to you by the abstract media hub company:
            </h3>
            <a
              className="select-none"
              href={zdaWorksLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="max-h-4 lg:max-h-5"
                src={theme === "dark" ? zdaworks_dark : zdaworks_light}
                alt={altZDAWorksLogo}
                title="Click to go to ZDAWorks site"
              />
            </a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h3
              className="font-light text-gray-600 dark:text-gray-400 tracking-wide italic text-[15px] mb-4 cursor-cell select-none"
              onClick={() => switchPage("Examples", setPage)}
            >
              Thank you for visiting!
            </h3>
            <a
              className={getColorSchemeClassName("anchor")}
              href={privacyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden md:block">{privacyDocIcon}</span>
              &nbsp;PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
      <div className={getColorSchemeClassName("bg")}>
        <div className="w-full px-5 md:px-9 lg:px-12 py-8 mx-auto flex items-center flex-col-reverse sm:flex-row">
          {/* Logo and Copyright Container - Used for ordering on mobile vs desktop */}
          <div className="flex flex-col sm:flex-row items-center mt-8 sm:mt-auto">
            <div className="flex font-medium items-center md:justify-start justify-center text-gray-900">
              <div className="header-logo-box mr-1 sm:mr-2 lg:mr-1 items-center">
                <img
                  src={theme === "dark" ? zda_dark : zda_light}
                  alt={altZDALogoSm}
                  className="header-logo cursor-default pointer-events-none select-none motion-safe:transition ease-out motion-safe:duration-300 3xl:w-[32px] 3xl:h-[32px] 4xl:w-[40px] 4xl:h-[40px] 4k:w-[56px] 4k:h-[56px]"
                  width={32}
                  height={32}
                />
                <img
                  src={getLogoSrc()}
                  alt={altZDALogoSm}
                  className="header-logo-hover cursor-default pointer-events-none select-none motion-safe:transition ease-out motion-safe:duration-300 3xl:w-[32px] 3xl:h-[32px] 4xl:w-[40px] 4xl:h-[40px] 4k:w-[56px] 4k:h-[56px]"
                  width={32}
                  height={32}
                />
              </div>
              <img
                src={
                  theme === "dark" ? zerodayanubis_dark : zerodayanubis_light
                }
                className="hidden sm:block ml-3 max-h-8 select-none"
                alt={altLongTextLogo}
              />
            </div>
            <a
              href={zdaWorksLink}
              className="text-sm text-gray-700 dark:text-gray-400 sm:ml-6 mt-[27px] sm:mt-0 select-none"
              target="_blank"
              rel="noopener noreferrer"
              title="Click to go to ZDAWorks site"
            >
              © ZDA Works&nbsp;{currentYear}
            </a>
          </div>
          <span className="inline-flex sm:ml-auto my-2 sm:my-0 gap-4 justify-center sm:justify-start">
            <button
              className="inline-flex justify-between items-center px-4 py-2 h-min rounded-3xl bg-gray-500/15 active:bg-gray-500/60 hover:bg-gray-500/40 dark:bg-neutral-500/10 dark:active:bg-neutral-500/45 dark:hover:bg-neutral-500/25 text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 text-[0] lg:text-sm motion-safe:transition-colors motion-safe:duration-300 ease-out select-none"
              aria-label="Email"
              title="Email me at anubis@zerodayanubis.com"
              onClick={clickEmail}
            >
              <span className="mt-[1px] mr-0 lg:mr-6">{emailIcon}</span>
              Email
            </button>
            <button
              className="inline-flex justify-between items-center px-4 py-2 h-min rounded-3xl bg-gray-500/15 active:bg-gray-500/60 hover:bg-gray-500/40 dark:bg-neutral-500/10 dark:active:bg-neutral-500/45 dark:hover:bg-neutral-500/25 text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 text-[0] lg:text-sm motion-safe:transition-colors motion-safe:duration-300 ease-out select-none"
              aria-label="Message"
              title="Message me on Discord"
              onClick={() => clickLink(discordLink)}
            >
              <span className="mt-[1px] mr-0 lg:mr-6">{chatIcon}</span>
              Message
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
