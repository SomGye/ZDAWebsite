import * as React from "react";
import { Switch } from "@mui/joy";
import { useRecoilState } from "recoil";
import { themeAtom } from "../states/ThemeAtom";
import { Brightness6, DarkMode } from "@mui/icons-material";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [mode, setMode] = useRecoilState(themeAtom);
  const [checked, setChecked] = React.useState(true);
  const [init, setInit] = React.useState(false);
  const initDelay = 800;

  const toggleTheme = (initToggle: boolean = false) => {
    if (mode === "dark" && initToggle) {
      // Set prefs
      localStorage.setItem("theme", "dark");
      // Set body style
      document.body.style.backgroundColor = "#29242a";
      document.body.style.color = "rgba(255, 255, 255, 0.87)";
      document.body.style.transition = "all 0.20s ease-out";
      console.log("Theme toggled to dark, on init toggle");
    } else if (mode === "light" && initToggle) {
      // Set prefs
      localStorage.setItem("theme", "light");
      // Set body style
      document.body.style.backgroundColor = "#fafafa";
      document.body.style.color = "#213547";
      document.body.style.transition = "all 0.20s ease-out";
      console.log("Theme toggled to light, on init toggle");
    } else if (mode === "dark" && !initToggle) {
      // Set global variables
      setMode("light");
      // Set prefs for next visit
      localStorage.setItem("theme", "light");
      // Set body style
      document.body.style.backgroundColor = "#fafafa";
      document.body.style.color = "#213547";
      document.body.style.transition = "all 0.20s ease-out";
      console.log("Theme toggled to light from switch");
    } else if (mode === "light" && !initToggle) {
      // Set global variables
      setMode("dark");
      // Set prefs for next visit
      localStorage.setItem("theme", "dark");
      // Set body style
      document.body.style.backgroundColor = "#29242a";
      document.body.style.color = "rgba(255, 255, 255, 0.87)";
      document.body.style.transition = "all 0.20s ease-out";
      console.log("Theme toggled to dark from switch");
    }
  };

  const detectColorScheme = () => {
    let theme = "dark"; // default

    // Local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        theme = "light";
      }
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      // OS theme setting detected as light
      theme = "light";
    }

    // Set initial scheme and prop state from detected Color Scheme
    if (theme === "light") {
      setChecked(false);
    } else {
      setChecked(true);
    }
    console.log("Color scheme detected: " + theme);
    setMode(theme);
  };

  React.useEffect(() => {
    // Detect preferred Color Scheme from OS
    detectColorScheme();
    // Set init state
    setTimeout(() => {
      setInit(true);
    }, initDelay);
  }, []);

  React.useEffect(() => {
    toggleTheme(!init);
  }, [checked]);
  return (
    <>
      <Switch
        slotProps={{
          input: { "aria-label": "Theme Toggle" },
          thumb: {
            children: mode === "dark" ? <DarkMode /> : <Brightness6 />,
          },
        }}
        sx={{
          "--Switch-thumbSize": "24px",
          "--Switch-trackRadius": "24px",
          "--Switch-thumbShadow": "0 0 0 1px #29242a50",
          "&:focus-visible": { outline: "none" },
        }}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        aria-label="Theme Toggle"
        aria-description="Switches between Light and Dark Themes"
        title="Theme Toggle"
      />
    </>
  );
};

export default ThemeToggle;
