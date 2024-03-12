import * as React from "react";
import { switchPage } from "../helpers";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../states/themeAtom";
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
const PageLinks = ({ location }: props) => {
  const [, setPage] = useRecoilState(pageAtom);
  const theme = useRecoilValue(themeAtom);
  const locators: locatorsType = {
    headerLg:
      "hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 items-center text-base font-plusjakartasans font-semibold justify-center",
    headerSm:
      "hidden sm:flex sm:place-self-center md:place-self-auto md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 items-center text-base font-plusjakartasans font-semibold justify-center",
    bodyTop:
      "flex sm:hidden flex-col m-2 mt-4 p-2 gap-4 items-center text-base font-plusjakartasans font-semibold justify-center rounded-lg border-t border-b border-slate-500/25 dark:border-slate-500/30",
  };
  const [locator, setLocator] = React.useState(locators.headerLg);

  React.useEffect(() => {
    setLocator(locators[location]);
  }, [location]);

  return (
    <nav className={locator}>
      <p
        className={
          theme === "dark" ? "nav-link-animated-dark" : "nav-link-animated"
        }
        onClick={() => switchPage("Home", setPage)}
      >
        Home
      </p>
      <p
        className={
          theme === "dark" ? "nav-link-animated-dark" : "nav-link-animated"
        }
        onClick={() => switchPage("Portfolio", setPage)}
      >
        Portfolio
      </p>
      <p
        className={
          theme === "dark" ? "nav-link-animated-dark" : "nav-link-animated"
        }
        onClick={() => switchPage("Commissions", setPage)}
      >
        Commissions
      </p>
      <p
        className={
          theme === "dark" ? "nav-link-animated-dark" : "nav-link-animated"
        }
        onClick={() => switchPage("About", setPage)}
      >
        About
      </p>
    </nav>
  );
};

export default PageLinks;
