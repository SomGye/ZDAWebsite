import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/themeAtom";
import zda_dark from "/zda_dark_mono.svg";
import zda_dark_hover from "/zda_dark_mono_hover.svg";
import zda_light from "/zda_light_mono.svg";
import zda_light_hover from "/zda_light_mono_hover.svg";
import zerodayanubis_dark from "/zerodayanubis_dark.svg";
import zerodayanubis_light from "/zerodayanubis_light.svg";
import zdaworks_dark from "/zdaworks_dark_nl.svg";
import zdaworks_light from "/zdaworks_light_nl.svg";
import { chatIcon, emailIcon, privacyDocIcon } from "../../icons";

const Footer = () => {
  const theme = useRecoilValue(themeAtom);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full z-30 bottom-0 left-0 bg-gradient-to-b from-zdaRedpink-400/5 dark:from-stone-700/5 dark:to-zdaRedpink-700/5 text-gray-700 dark:text-gray-200 text-base border-t border-gray-200/50 dark:border-stone-800/10 rounded-md">
      <div className="px-3 md:px-7 lg:px-10 py-8 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 dark:text-gray-300 tracking-widest text-sm mb-4 pointer-events-none select-none">
              SOCIAL MEDIA
            </h2>
            <nav className="list-none mb-10">
              <li className="my-3">
                <a className="text-gray-500 hover:text-black dark:text-gray-400/90 dark:hover:text-gray-300 select-none">
                  Bluesky
                </a>
              </li>
              <li className="my-3">
                <a className="text-gray-500 hover:text-black dark:text-gray-400/90 dark:hover:text-gray-300 select-none">
                  Instagram
                </a>
              </li>
              <li className="my-3">
                <a className="text-gray-500 hover:text-black dark:text-gray-400/90 dark:hover:text-gray-300 select-none">
                  Threads
                </a>
              </li>
              <li className="my-3">
                <a className="text-gray-500 hover:text-black dark:text-gray-400/90 dark:hover:text-gray-300 select-none">
                  Mastodon
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 dark:text-gray-300 tracking-widest text-sm mb-4 pointer-events-none select-none">
              PRINTS AND SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <li className="my-3">
                <a className="text-gray-500 hover:text-black dark:text-gray-400/90 dark:hover:text-gray-300 select-none">
                  Print Shop
                </a>
              </li>
              <li className="my-3">
                <a className="text-gray-500 hover:text-black dark:text-gray-400/90 dark:hover:text-gray-300 select-none">
                  Ko-fi
                </a>
              </li>
              <li className="my-3">
                <a className="text-gray-500 hover:text-black dark:text-gray-400/90 dark:hover:text-gray-300 select-none">
                  PayPal
                </a>
              </li>
              <li className="my-3">
                <a className="text-gray-500 hover:text-black dark:text-gray-400/90 dark:hover:text-gray-300 select-none">
                  Venmo
                </a>
              </li>
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
              href="https://www.zda.works/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="max-h-4 lg:max-h-5"
                src={theme === "dark" ? zdaworks_dark : zdaworks_light}
                alt="ZDAWorks company logo"
                title="Click to go to ZDAWorks site"
              />
            </a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h3 className="font-light text-gray-600 dark:text-gray-400 tracking-wide italic text-[15px] mb-4 pointer-events-none select-none">
              Thank you for visiting!
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-zdaRed-500/15 to-gray-200 dark:from-zdaRedpink-900/5">
        <div className="w-full px-5 md:px-9 lg:px-12 py-6 mx-auto flex items-center flex-col-reverse sm:flex-row">
          {/* Logo and Copyright Container - Used for ordering on mobile vs desktop */}
          <div className="flex flex-col sm:flex-row items-center mt-8 sm:mt-auto">
            <div className="flex font-medium items-center md:justify-start justify-center text-gray-900">
              <div className="header-logo-box mr-1 sm:mr-2 lg:mr-1 items-center">
                <img
                  src={theme === "dark" ? zda_dark : zda_light}
                  alt="ZDA Z Logo"
                  className="header-logo cursor-default pointer-events-none select-none transition ease-out duration-300 3xl:w-[32px] 3xl:h-[32px] 4xl:w-[40px] 4xl:h-[40px] 4k:w-[56px] 4k:h-[56px]"
                  width={32}
                  height={32}
                />
                <img
                  src={theme === "dark" ? zda_dark_hover : zda_light_hover}
                  alt="ZDA Z Logo Hover Version"
                  className="header-logo-hover cursor-default pointer-events-none select-none transition ease-out duration-300 3xl:w-[32px] 3xl:h-[32px] 4xl:w-[40px] 4xl:h-[40px] 4k:w-[56px] 4k:h-[56px]"
                  width={32}
                  height={32}
                />
              </div>
              <img
                src={
                  theme === "dark" ? zerodayanubis_dark : zerodayanubis_light
                }
                className="hidden sm:block ml-3 max-h-8 select-none"
              />
            </div>
            <a
              href="https://www.zda.works/"
              className="text-sm text-gray-700 dark:text-gray-400 sm:ml-6 mt-[27px] sm:mt-0 select-none"
              target="_blank"
              rel="noopener noreferrer"
              title="Click to go to ZDAWorks site"
            >
              © ZDA Works&nbsp;{currentYear}
            </a>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 gap-4 justify-center sm:justify-start">
            <button className="inline-flex justify-between items-center px-4 py-2 h-min rounded-3xl bg-gray-500/15 hover:bg-gray-500/40 dark:bg-neutral-500/10 dark:hover:bg-neutral-500/25 text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 text-[0] lg:text-sm transition-colors duration-300 ease-out select-none">
              <span className="mt-[1px] mr-0 lg:mr-6">{emailIcon}</span>
              Email
            </button>
            <button className="inline-flex justify-between items-center px-4 py-2 h-min rounded-3xl bg-gray-500/15 hover:bg-gray-500/40 dark:bg-neutral-500/10 dark:hover:bg-neutral-500/25 text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 text-[0] lg:text-sm transition-colors duration-300 ease-out select-none">
              <span className="mt-[1px] mr-0 lg:mr-6">{chatIcon}</span>
              Message
            </button>
            {/* TODO: privacy policy `a` link, like on ZDAWorks */}
            {privacyDocIcon}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
