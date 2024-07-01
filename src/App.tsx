import * as React from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { Analytics } from "@vercel/analytics/react";
import ThemeMenu from "./components/ThemeMenu";

type props = {
  route: string;
};
const App = ({ route }: props) => {
  React.useEffect(() => {
    // Hide the init loading screen
    const loadingpage = document.querySelector("#loadingpage") as any;
    if (loadingpage && loadingpage.style) {
      loadingpage.style = "display: none";
    }
  }, []);

  return (
    <>
      <Analytics />
      <main className="bg-zdaBG-light dark:bg-zdaBG-dark text-gray-700 dark:text-gray-200 flex min-h-screen flex-col items-center p-0 motion-safe:transition motion-safe:duration-500 ease-out">
        <div className="placeholder-container flex flex-col justify-center items-center h-[100vh]">
          <div className="theme-menu-container cursor-pointer focus-visible:outline-none m-8">
            <ThemeMenu />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl">
              Under Construction - Update Coming Soon
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
