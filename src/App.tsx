import * as React from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { examplesAtom, logoAtom } from "./states/pageAtom";
import Header from "./sections/Header/Header";
import Body from "./sections/Body/Body";
import Footer from "./sections/Footer/Footer";
import LogoPage from "./sections/Pages/LogoPage";
import ExamplesPage from "./sections/Pages/ExamplesPage";

type Props = {
  route: string;
};
const App = ({ route }: Props) => {
  const [logoPage, setLogoPage] = useRecoilState(logoAtom);
  const [exPage, setExPage] = useRecoilState(examplesAtom);

  React.useEffect(() => {
    // Hide the init loading screen
    const loadingpage = document.querySelector("#loadingpage") as any;
    if (loadingpage && loadingpage.style) {
      loadingpage.style = "display: none";
    }
  }, []);

  React.useEffect(() => {
    // Check Route
    // TODO: fix these!
    if (route === "portfolio") {
      window.location.replace("https://www.zerodayanubis.com/portfolio");
      // window.location.replace("/portfolio");
      setExPage(false);
    } else if (route === "commissions") {
      window.location.replace("https://www.zerodayanubis.com/commissions");
      // window.location.replace("/commissions");
      setExPage(false);
    } else if (route === "logo") {
      setLogoPage(true);
      setExPage(false);
    } else if (route === "examples") {
      setLogoPage(false);
      setExPage(true);
    } else {
      setLogoPage(false);
      setExPage(false);
    }
  }, [route]);

  return (
    <main className="bg-zdaBG-light dark:bg-zdaBG-dark text-gray-700 dark:text-gray-200 flex min-h-screen flex-col items-center justify-evenly p-0 transition ease-out duration-500">
      {!logoPage && !exPage && (
        <>
          <Header />
          <Body />
          {/* TEST: SCROLL FILLER */}
          <div className="py-12">
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
          </div>
          <Footer />
        </>
      )}
      {logoPage && <LogoPage />}
      {exPage && <ExamplesPage />}
    </main>
  );
};

export default App;
