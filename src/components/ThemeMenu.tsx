import * as React from "react";
import { themeAtom } from "../states/themeAtom";
import { useRecoilState } from "recoil";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  darkIcon,
  darkMenuIcon,
  lightIcon,
  lightMenuIcon,
  sysMenuIcon,
} from "../icons";

const ThemeMenu = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const [isAutoMode, setAutoMode] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState("system"); // dark/light/system
  const systemMatch = window.matchMedia("(prefers-color-scheme: dark)");

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
      localStorage.setItem("theme", "system");
      // Set body style and vars
      if (systemMatch.matches) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
      console.log("Theme set to system from menu");
      setOption("system");
    }
    setOpen(false);
  };

  const detectColorScheme = () => {
    // Get theme preference from user (default: system)
    const storedTheme = localStorage.getItem("theme") || "system";
    // Set theme and option from detected Theme
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
      localStorage.setItem("theme", "system");
      // Use matchMedia to get system theme
      if (systemMatch.matches) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
      setOption("system");
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
    // Detect preferred Color Scheme from user or system
    detectColorScheme();
  }, []);

  React.useEffect(() => {
    // Check for system option
    if (option === "system") {
      // Turn on Auto Mode
      setAutoMode(true);
    } else {
      // Turn off Auto Mode
      setAutoMode(false);
    }
  }, [option]);

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
      <div className="inline-flex items-center focus-visible:outline-none">
        <DropdownMenu.Root open={open} modal={false}>
          {/* Button Section */}
          <DropdownMenu.Trigger asChild>
            <button
              className="rounded-full w-[26px] h-[26px] inline-flex items-center justify-center text-zdaRedpink-600 dark:text-zdaRedpink-50/60 bg-zdaBG-lightCard dark:bg-zdaBG-darkCard shadow-[0_1px_8px] shadow-stone-400 hover:shadow-stone-400/25 dark:shadow-zdaRedpink-50/15 dark:hover:shadow-zdaRedpink-50/5 outline outline-1 outline-zdaRedpink-500/25 dark:outline-zdaRedpink-50/10 hover:bg-zdaRedpink-500/25 dark:hover:bg-zdaRedpink-100/20 active:bg-zdaRedpink-400/50 dark:active:bg-zdaRedpink-50/25 motion-safe:transition ease-out motion-safe:duration-300 3xl:w-[31px] 3xl:h-[31px] 4xl:w-[34px] 4xl:h-[34px] 4k:w-[40px] 4k:h-[40px] webkit-appearance-none"
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
              className="z-50 min-w-[160px] bg-zdaBG-lighterCard dark:bg-zdaBG-darkerCard rounded-lg p-[5px] shadow-theme-menu-dropdown-light dark:shadow-theme-menu-dropdown-dark will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              sideOffset={5}
              align="start"
              onInteractOutside={() => setOpen(false)}
            >
              <DropdownMenu.Item
                className="group pb-[1px] my-2 md:my-0 text-base 3xl:text-lg 4xl:text-2xl 4k:text-3xl lg:py-3 3xl:py-4 4xl:py-6 4k:py-8 lg:px-6 3xl:px-8 4xl:px-10 4k:px-12 leading-none text-zdaRedpink-600/90 dark:text-zdaRedpink-50/75 rounded-md 3xl:rounded-lg flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[highlighted]:bg-zdaRedpink-600/75 data-[highlighted]:text-neutral-50 dark:data-[highlighted]:bg-zdaRedpink-50/75 dark:data-[highlighted]:text-zinc-950 motion-safe:transition-colors ease-out motion-safe:duration-200"
                onClick={() => changeTheme("dark")}
              >
                <span className="mr-2 mt-[1px] 4xl:mr-3 4k:mr-4">
                  {darkMenuIcon}
                </span>
                Dark
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="group pb-[1px] my-2 md:my-0 text-base 3xl:text-lg 4xl:text-2xl 4k:text-3xl lg:py-3 3xl:py-4 4xl:py-6 4k:py-8 lg:px-6 3xl:px-8 4xl:px-10 4k:px-12 leading-none text-zdaRedpink-600/90 dark:text-zdaRedpink-50/75 rounded-md 3xl:rounded-lg flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[highlighted]:bg-zdaRedpink-600/75 data-[highlighted]:text-neutral-50 dark:data-[highlighted]:bg-zdaRedpink-50/75 dark:data-[highlighted]:text-zinc-950 motion-safe:transition-colors ease-out motion-safe:duration-200"
                onClick={() => changeTheme("light")}
              >
                <span className="mr-2 mt-[1px] 4xl:mr-3 4k:mr-4">
                  {lightMenuIcon}
                </span>
                Light
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="h-[1px] m-1 bg-zdaRedpink-600/20 dark:bg-gray-600/5" />
              <DropdownMenu.Item
                className="group pb-[1px] my-2 md:my-0 text-base 3xl:text-lg 4xl:text-2xl 4k:text-3xl lg:py-3 3xl:py-4 4xl:py-6 4k:py-8 lg:px-6 3xl:px-8 4xl:px-10 4k:px-12 leading-none text-zdaRedpink-600/90 dark:text-zdaRedpink-50/75 rounded-md 3xl:rounded-lg flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[highlighted]:bg-zdaRedpink-600/75 data-[highlighted]:text-neutral-50 dark:data-[highlighted]:bg-zdaRedpink-50/75 dark:data-[highlighted]:text-zinc-950 motion-safe:transition-colors ease-out motion-safe:duration-200"
                onClick={() => changeTheme("system")}
              >
                <span className="mr-2 mt-[1px] 4xl:mr-3 4k:mr-4">
                  {sysMenuIcon}
                </span>
                System
              </DropdownMenu.Item>
              <DropdownMenu.Arrow className="fill-zdaBG-lighterCard dark:fill-zdaRedpink-1000" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
  );
};

export default ThemeMenu;
