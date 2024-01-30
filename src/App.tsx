import * as React from "react";
import zerodayanubis_redpink from "/zerodayanubis_redpink.svg";
import "./App.css";

const App = () => {
  const [theme, setTheme] = React.useState("light");
  const systemMatch = window.matchMedia("(prefers-color-scheme: dark)");

  React.useEffect(() => {
    if (systemMatch.matches) {
      setTheme("dark");
    }
  }, []);

  return (
    <main className="bg-zdaBG-light dark:bg-zdaBG-dark flex min-h-screen flex-col items-center justify-evenly p-0 xs:px-12 sm:px-24 transition ease-out duration-500">
      <div>
        <img src={zerodayanubis_redpink} className="max-h-12 my-4" />
      </div>
      <h1 className="font-outfit font-light text-2xl my-4">ZDAWebsite</h1>
      <p
        className={
          theme === "dark" ? "nav-link-animated-dark" : "nav-link-animated"
        }
        // className="nav-link-animated dark:nav-link-animated-dark"
      >
        Page Nav Link
      </p>
    </main>
  );
};

export default App;
