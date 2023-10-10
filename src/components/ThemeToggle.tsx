import * as React from "react";
import { Switch } from "@mui/joy";
import DarkMode from "@mui/icons-material/DarkMode";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../states/ThemeAtom";

const ThemeToggle = () => {
  const [currentScheme, setScheme] = React.useState("dark"); // OS-detected Color Scheme
  const [, setMode] = useRecoilState(themeAtom);
  const mode = useRecoilValue(themeAtom);
  const [checked, setChecked] = React.useState(true);
  const [init, setInit] = React.useState(false);

  const toggleTheme = () => {
    if (mode === "dark") {
      // Set global variables
      setMode("light");
      // Set prefs for next visit
      localStorage.setItem("theme", "light");
      // Set body style
      document.body.style.backgroundColor = "#fafafa";
      document.body.style.color = "#213547";
      document.body.style.transition = "all 0.20s ease-out";
    } else {
      // Set global variables
      setMode("dark");
      // Set prefs for next visit
      localStorage.setItem("theme", "dark");
      // Set body style
      document.body.style.backgroundColor = "#29242a";
      document.body.style.color = "rgba(255, 255, 255, 0.87)";
      document.body.style.transition = "all 0.20s ease-out";
    }
  };

  const detectColorScheme = () => {
    let theme = "dark"; // default

    // Local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "light") {
        theme = "light";
      }
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      // OS theme setting detected as light
      theme = "light";
    }

    // Set initial scheme and prop state from detected Color Scheme
    if (theme == "light") {
      setChecked(false);
    } else {
      setChecked(true);
    }
    console.log("Color scheme detected: " + theme);
    setScheme(theme);
  };

  React.useEffect(() => {
    // Detect preferred Color Scheme from OS
    detectColorScheme();
    // Set init state
    setInit(true);
  }, []);

  React.useEffect(() => {
    // Initialize switch and app theme based on detected Color Scheme of OS
    setMode(currentScheme);
  }, [currentScheme]);

  React.useEffect(() => {
    // Prevent toggle on first load
    if (init) {
      toggleTheme();
    }

    console.log("Theme set to: " + mode);
  }, [checked]);
  return (
    <>
      <Switch
        slotProps={{
          input: { "aria-label": "Dark Mode" },
          thumb: {
            children: <DarkMode />,
          },
        }}
        sx={{
          "--Switch-thumbSize": "20px",
        }}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />
    </>
  );
};

export default ThemeToggle;
