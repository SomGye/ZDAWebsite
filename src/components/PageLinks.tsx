import * as React from "react";
import { switchPage } from "../helpers";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorSchemeAtom, colorSchemes, themeAtom } from "../states/themeAtom";
import { pageAtom } from "../states/pageAtom";

type props = {
  location: string;
};
type locatorsType = {
  [index: string]: string;
  headerLg: string;
  headerSm: string;
  bodyTop: string;
};
const locatorClasses = [
  {
    className:
      "left-line w-[3px] h-[3px] rounded-lg bg-gradient-radial from-zdaBlue-500 via-zdaBlue-400 to-transparent dark:from-zdaBlue-600 dark:via-zdaBlue-700 dark:to-transparent",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "left-line w-[3px] h-[3px] rounded-lg bg-gradient-radial from-zdaRedpink-500 via-zdaRedpink-400 to-transparent dark:from-zdaRedpink-600 dark:via-zdaRedpink-700 dark:to-transparent",
    colorScheme: colorSchemes[1],
  },
];
const PageLinks = ({ location }: props) => {
  const [page, setPage] = useRecoilState(pageAtom);
  const theme = useRecoilValue(themeAtom);
  const colorScheme = useRecoilValue(colorSchemeAtom);
  const locators: locatorsType = {
    headerLg:
      "hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 items-center text-base font-plusjakartasans font-semibold justify-center",
    headerSm:
      "hidden sm:flex sm:place-self-center md:place-self-auto md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 items-center text-base font-plusjakartasans font-semibold justify-center",
    bodyTop:
      "flex sm:hidden flex-col m-2 mt-4 p-2 gap-4 items-center text-base font-plusjakartasans font-semibold justify-center rounded-lg border-t border-b border-slate-500/25 dark:border-slate-500/30",
  };
  const [locator, setLocator] = React.useState(locators.headerLg);

  const getNavClass = (linkName: string) => {
    if (linkName === page) {
      if (theme === "dark") {
        return "nav-link-animated-" + colorScheme + "-dark-active";
      } else {
        return "nav-link-animated-" + colorScheme + "-active";
      }
    } else {
      if (theme === "dark") {
        return "nav-link-animated-" + colorScheme + "-dark";
      } else {
        return "nav-link-animated-" + colorScheme;
      }
    }
  };

  const getColorSchemeClassName = () => {
    // Filter on classes for className matching colorScheme
    const resultObj = locatorClasses.filter(
      (classObj) => classObj.colorScheme === colorScheme
    );
    if (resultObj && resultObj.length) {
      return resultObj[0].className;
    } else {
      return locatorClasses[0].className;
    }
  };

  React.useEffect(() => {
    setLocator(locators[location]);
  }, [location]);

  return (
    <nav className={locator}>
      <div className="page-link-container relative flex flex-row justify-center items-center">
        <div
          className={
            (page === "Home" ? "absolute " : "hidden ") +
            (locator === locators.bodyTop
              ? "right-0 top-3 ml-[5px] "
              : "bottom-0 -mb-[5px] ") +
            getColorSchemeClassName()
          }
        />
        <p
          className={getNavClass("Home")}
          onClick={() => switchPage("Home", setPage)}
        >
          Home
        </p>
      </div>
      <div className="page-link-container relative flex flex-row justify-center items-center">
        <div
          className={
            (page === "Portfolio" ? "absolute " : "hidden ") +
            (locator === locators.bodyTop
              ? "right-0 top-3 ml-[5px] "
              : "bottom-0 -mb-[5px] ") +
            getColorSchemeClassName()
          }
        />
        <p
          className={getNavClass("Portfolio")}
          onClick={() => switchPage("Portfolio", setPage)}
        >
          Portfolio
        </p>
      </div>
      <div className="page-link-container relative flex flex-row justify-center items-center">
        <div
          className={
            (page === "Commissions" ? "absolute " : "hidden ") +
            (locator === locators.bodyTop
              ? "right-0 top-3 ml-[5px] "
              : "bottom-0 -mb-[5px] ") +
            getColorSchemeClassName()
          }
        />
        <p
          className={getNavClass("Commissions")}
          onClick={() => switchPage("Commissions", setPage)}
        >
          Commissions
        </p>
      </div>
      <div className="page-link-container relative flex flex-row justify-center items-center">
        <div
          className={
            (page === "About" ? "absolute " : "hidden ") +
            (locator === locators.bodyTop
              ? "right-0 top-3 ml-[5px] "
              : "bottom-0 -mb-[5px] ") +
            getColorSchemeClassName()
          }
        />
        <p
          className={getNavClass("About")}
          onClick={() => switchPage("About", setPage)}
        >
          About
        </p>
      </div>
    </nav>
  );
};

export default PageLinks;
