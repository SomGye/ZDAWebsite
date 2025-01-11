import * as React from "react";
import {
  colorSchemeAtom,
  themes,
  colorSchemes,
  themeAtom,
} from "../states/themeAtom";
import { useRecoilState } from "recoil";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  darkIcon,
  darkMenuIcon,
  lightIcon,
  lightMenuIcon,
  sysMenuIcon,
  colorSchemeMenuIcon,
} from "../icons";
import { capitalizeString } from "../helpers";

const defaultTheme = themes[themes.length - 1]; // "system"
const defaultColorScheme = colorSchemes[0];
const triggerClasses = [
  {
    className:
      "rounded-full w-7 h-7 inline-flex items-center justify-center text-zdaBlue-600 dark:text-zdaBlue-50/60 bg-zdaBG-lightCard dark:bg-zdaBG-darkCard shadow-[0_1px_8px] shadow-stone-400 hover:shadow-stone-400/25 dark:shadow-zdaBlue-50/15 dark:hover:shadow-zdaBlue-50/5 outline outline-1 outline-zdaBlue-500/25 dark:outline-zdaBlue-50/10 hover:bg-zdaBlue-500/25 dark:hover:bg-zdaBlue-100/20 active:bg-zdaBlue-400/50 dark:active:bg-zdaBlue-50/25 motion-safe:transition ease-out motion-safe:duration-300 webkit-appearance-none appearance-none",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "rounded-full w-7 h-7 inline-flex items-center justify-center text-zdaRedpink-600 dark:text-zdaRedpink-50/60 bg-zdaBG-lightCard dark:bg-zdaBG-darkCard shadow-[0_1px_8px] shadow-stone-400 hover:shadow-stone-400/25 dark:shadow-zdaRedpink-50/15 dark:hover:shadow-zdaRedpink-50/5 outline outline-1 outline-zdaRedpink-500/25 dark:outline-zdaRedpink-50/10 hover:bg-zdaRedpink-500/25 dark:hover:bg-zdaRedpink-100/20 active:bg-zdaRedpink-400/50 dark:active:bg-zdaRedpink-50/25 motion-safe:transition ease-out motion-safe:duration-300 webkit-appearance-none appearance-none",
    colorScheme: colorSchemes[1],
  },
];
const contentClasses = [
  {
    className:
      "z-50 min-w-40 bg-zdaBG-lighterCard dark:bg-zdaBG-darkerCard rounded-lg p-2 shadow-theme-menu-dropdown-light dark:shadow-theme-menu-dropdown-dark-blue will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "z-50 min-w-40 bg-zdaBG-lighterCard dark:bg-zdaBG-darkerCard rounded-lg p-2 shadow-theme-menu-dropdown-light dark:shadow-theme-menu-dropdown-dark-red will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
    colorScheme: colorSchemes[1],
  },
];
const itemClasses = [
  {
    className:
      "group flex items-center relative h-6 my-2 md:my-0 px-6 py-4 4xl:text-lg text-zdaBlue-600/90 dark:text-zdaBlue-50/75 rounded-md 3xl:rounded-lg select-none outline-none data-[highlighted]:bg-zdaBlue-600/75 data-[highlighted]:text-neutral-50 dark:data-[highlighted]:bg-zdaBlue-50/75 dark:data-[highlighted]:text-zinc-950 motion-safe:transition-colors ease-out motion-safe:duration-200",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "group flex items-center relative h-6 my-2 md:my-0 px-6 py-4 4xl:text-lg text-zdaRedpink-600/90 dark:text-zdaRedpink-50/75 rounded-md 3xl:rounded-lg select-none outline-none data-[highlighted]:bg-zdaRedpink-600/75 data-[highlighted]:text-neutral-50 dark:data-[highlighted]:bg-zdaRedpink-50/75 dark:data-[highlighted]:text-zinc-950 motion-safe:transition-colors ease-out motion-safe:duration-200",
    colorScheme: colorSchemes[1],
  },
];
const separatorClasses = [
  {
    className: "h-[1px] m-1 bg-zdaBlue-600/30 dark:bg-zdaBlue-100/20",
    colorScheme: colorSchemes[0],
  },
  {
    className: "h-[1px] m-1 bg-zdaRedpink-600/30 dark:bg-zdaRedpink-100/20",
    colorScheme: colorSchemes[1],
  },
];
const arrowClasses = [
  {
    className: "fill-zdaBG-lighterCard dark:fill-zdaBlue-1000",
    colorScheme: colorSchemes[0],
  },
  {
    className: "fill-zdaBG-lighterCard dark:fill-zdaRedpink-1000",
    colorScheme: colorSchemes[1],
  },
];

const ThemeMenu = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeAtom);
  const [isAutoMode, setAutoMode] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [sysOption, setOption] = React.useState("system"); // used for Auto Mode and active highlight for themes
  const systemMatch = window.matchMedia("(prefers-color-scheme: dark)");
  const themeIcons = [darkMenuIcon, lightMenuIcon, sysMenuIcon];

  const changeTheme = (newTheme: string) => {
    if (newTheme === "dark") {
      // Set prefs
      localStorage.setItem("theme", "dark");
      // Set body style
      document.documentElement.classList.add("dark");
      console.log("Theme set to dark from menu");
      // Set vars
      setTheme("dark");
      setOption("dark");
    } else if (newTheme === "light") {
      // Set prefs
      localStorage.setItem("theme", "light");
      // Set body style
      document.documentElement.classList.remove("dark");
      console.log("Theme set to light from menu");
      // Set vars
      setTheme("light");
      setOption("light");
    } else {
      // Set prefs
      localStorage.setItem("theme", defaultTheme);
      // Set body style and vars
      if (systemMatch.matches) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
      console.log("Theme set to system from menu");
      setOption(defaultTheme);
    }
    setOpen(false);
  };

  const changeColorScheme = (newColorScheme: string) => {
    if (colorSchemes.includes(newColorScheme)) {
      // Set prefs
      localStorage.setItem("colorScheme", newColorScheme);

      // Set vars
      setColorScheme(newColorScheme);
      console.log("Color Scheme set to " + newColorScheme + " from menu");
    } else {
      // Set prefs
      localStorage.setItem("colorScheme", defaultColorScheme);

      // Set body style and vars
      setColorScheme(newColorScheme);
    }
    setOpen(false);
  };

  const detectTheme = () => {
    // Get theme preference from user
    const storedTheme = localStorage.getItem("theme") || defaultTheme;
    // Set theme and sysOption from detected Theme
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setOption(storedTheme);
      setTheme(storedTheme);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setOption(storedTheme);
      setTheme(storedTheme);
    } else {
      // Set system theme for next time
      localStorage.setItem("theme", defaultTheme);
      // Use matchMedia to get system theme
      if (systemMatch.matches) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
      setOption(defaultTheme);
    }
  };

  const detectColorScheme = () => {
    // Get color scheme preference from user
    const storedScheme =
      localStorage.getItem("colorScheme") || defaultColorScheme;
    // Set color scheme from detected storage
    setColorScheme(storedScheme);

    // Set default color scheme for next time
    if (!colorSchemes.includes(storedScheme)) {
      // Set default color scheme for next time
      localStorage.setItem("colorScheme", defaultColorScheme);
    }
  };

  const getColorSchemeClassName = (element: string) => {
    let targetClasses;
    // Determine class list from element type
    if (element === "trigger") {
      targetClasses = triggerClasses;
    } else if (element === "content") {
      targetClasses = contentClasses;
    } else if (element === "separator") {
      targetClasses = separatorClasses;
    } else if (element === "arrow") {
      targetClasses = arrowClasses;
    } else {
      targetClasses = itemClasses;
    }

    // Filter on classes for className matching colorScheme
    const resultObj = targetClasses.filter(
      (classObj) => classObj.colorScheme === colorScheme
    );
    if (resultObj) {
      return resultObj[0].className;
    } else {
      return targetClasses[0].className;
    }
  };

  const autoModeHandler = (evt: MediaQueryListEvent) => {
    // Read Auto Mode on/off setting from global Window obj
    let windowObj = window as any;
    const autoModeSetting = windowObj.autoModeSetting;
    if (autoModeSetting) {
      // NOTE: Assume match on "dark", since "light" is default for 'prefers-color-scheme'
      if (evt.matches) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
    }
  };

  React.useEffect(() => {
    // Detect preferred Theme from user or system
    detectTheme();

    // Detect preferred Color Scheme from user
    detectColorScheme();
  }, []);

  React.useEffect(() => {
    // Check for system option
    if (sysOption === "system") {
      // Turn on Auto Mode
      setAutoMode(true);
    } else {
      // Turn off Auto Mode
      setAutoMode(false);
    }
  }, [sysOption]);

  React.useEffect(() => {
    if (isAutoMode) {
      // Set global window setting for event handler
      let windowObj = window as any;
      windowObj.autoModeSetting = true;
      // Setup event handler for theme switch
      systemMatch.removeEventListener("change", autoModeHandler, true);
      systemMatch.addEventListener("change", autoModeHandler, true);
    } else {
      // Set global window setting for event handler
      let windowObj = window as any;
      windowObj.autoModeSetting = false;
      // Attempt to clear event handler
      return () => {
        systemMatch.removeEventListener("change", autoModeHandler, true);
      };
    }
  }, [isAutoMode]);

  return (
    <>
      <div className="inline-flex items-center focus-visible:outline-none webkit-appearance-none appearance-none">
        <DropdownMenu.Root open={open} modal={false}>
          {/* Button Section */}
          <DropdownMenu.Trigger asChild>
            <button
              className={getColorSchemeClassName("trigger")}
              aria-label="Theme Menu"
              title="Theme Menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              {theme === "dark" ? darkIcon : lightIcon}
            </button>
          </DropdownMenu.Trigger>
          {/* Menu Section */}
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className={getColorSchemeClassName("content")}
              sideOffset={5}
              align="start"
              onInteractOutside={() => setOpen(false)}
            >
              {/* Theme Items */}
              {themes.map((themeItem, idx) => (
                <DropdownMenu.Item
                  className={getColorSchemeClassName("item")}
                  onClick={() => changeTheme(themeItem)}
                >
                  <span className="mr-2 4xl:mr-3 4k:mr-4">
                    {themeIcons[idx]}
                  </span>
                  {sysOption === themeItem ? (
                    <div className="font-semibold">
                      {capitalizeString(themeItem)}
                    </div>
                  ) : (
                    <div>{capitalizeString(themeItem)}</div>
                  )}
                </DropdownMenu.Item>
              ))}
              <DropdownMenu.Separator
                className={getColorSchemeClassName("separator")}
              />
              {/* Color Scheme Items */}
              {colorSchemes.map((colorSchemeItem) => (
                <DropdownMenu.Item
                  className={getColorSchemeClassName("item")}
                  onClick={() => changeColorScheme(colorSchemeItem)}
                >
                  <span className="mr-2 4xl:mr-3 4k:mr-4">
                    {colorSchemeMenuIcon}
                  </span>
                  {colorScheme === colorSchemeItem ? (
                    <div className="font-semibold">
                      {capitalizeString(colorSchemeItem)}
                    </div>
                  ) : (
                    <div>{capitalizeString(colorSchemeItem)}</div>
                  )}
                </DropdownMenu.Item>
              ))}
              <DropdownMenu.Arrow
                className={getColorSchemeClassName("arrow")}
              />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
  );
};

export default ThemeMenu;
