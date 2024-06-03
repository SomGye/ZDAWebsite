import * as React from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { pageAtom } from "./states/pageAtom";
import Header from "./sections/Header/Header";
import Body from "./sections/Body/Body";
import Footer from "./sections/Footer/Footer";
import { switchPage } from "./helpers";
import { Analytics } from "@vercel/analytics/react";

type props = {
  route: string;
};
const App = ({ route }: props) => {
  const [page, setPage] = useRecoilState(pageAtom);

  React.useEffect(() => {
    // Hide the init loading screen
    const loadingpage = document.querySelector("#loadingpage") as any;
    if (loadingpage && loadingpage.style) {
      loadingpage.style = "display: none";
    }

    // Set page to incoming route
    const currentPath = window.location.href;
    if (route === "portfolio") {
      setPage("Portfolio");
    } else if (route === "commissions") {
      setPage("Commissions");
    } else if (route === "examples") {
      setPage("Examples");
    } else if (route === "logo") {
      setPage("Logo");
    } else {
      // Check for direct path in URL and use Hard URL switch to clear sub-domain
      if (currentPath.toLocaleLowerCase().includes("portfolio")) {
        switchPage("Portfolio", setPage, true);
      } else if (currentPath.toLocaleLowerCase().includes("commissions")) {
        switchPage("Commissions", setPage, true);
      } else if (currentPath.toLocaleLowerCase().includes("examples")) {
        switchPage("Examples", setPage, true);
      } else if (currentPath.toLocaleLowerCase().includes("logo")) {
        switchPage("Logo", setPage, true);
      } else {
        setPage("Home");
      }
    }
  }, []);

  return (
    <>
      <Analytics />
      <main className="bg-zdaBG-light dark:bg-zdaBG-dark text-gray-700 dark:text-gray-200 flex min-h-screen flex-col items-center p-0 motion-safe:transition ease-out duration-500">
        {page !== "Logo" && page !== "Examples" && <Header />}
        <Body />
        {page !== "Logo" && page !== "Examples" && <Footer />}
      </main>
    </>
  );
};

export default App;
