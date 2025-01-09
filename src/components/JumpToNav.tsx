import * as React from "react";
import { scrollToSection } from "../helpers";
import { colorSchemeAtom, colorSchemes } from "../states/themeAtom";
import { useRecoilValue } from "recoil";

type jumpToInfo = {
  id: string;
  text: string;
};
type props = {
  leftSection: jumpToInfo;
  middleSections: jumpToInfo[];
  rightSection: jumpToInfo;
};
const leftClasses = [
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaBlue-100 bg-white active:bg-zdaBlue-800/90 hover:bg-zdaBlue-700/85 border-t-2 border-b-2 border-l-2 border-gray-300/90 active:border-zdaBlue-800 hover:border-zdaBlue-900/25 rounded-s-lg hover:text-white dark:bg-neutral-900/45 dark:active:bg-zdaBlue-700/30 dark:hover:bg-zdaBlue-700/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-100 bg-white active:bg-zdaRedpink-800/90 hover:bg-zdaRedpink-700/85 border-t-2 border-b-2 border-l-2 border-gray-300/90 active:border-zdaRedpink-800 hover:border-zdaRedpink-900/25 rounded-s-lg hover:text-white dark:bg-neutral-900/45 dark:active:bg-zdaRed-700/30 dark:hover:bg-zdaRed-700/50 dark:border-slate-500/35 dark:hover:border-zdaRed-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[1],
  },
];
const middleClasses = [
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaBlue-100 bg-white active:bg-zdaBlue-800/90 hover:bg-zdaBlue-700/85 border-t-2 border-b-2 border-gray-300/90 active:border-zdaBlue-800 hover:border-zdaBlue-900/25 hover:text-white dark:bg-neutral-900/45 dark:active:bg-zdaBlue-700/30 dark:hover:bg-zdaBlue-700/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-100 bg-white active:bg-zdaRedpink-800/90 hover:bg-zdaRedpink-700/85 border-t-2 border-b-2 border-gray-300/90 active:border-zdaRedpink-800 hover:border-zdaRedpink-900/25 hover:text-white dark:bg-neutral-900/45 dark:active:bg-zdaRed-700/30 dark:hover:bg-zdaRed-700/50 dark:border-slate-500/35 dark:hover:border-zdaRed-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[1],
  },
];
const rightClasses = [
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaBlue-100 bg-white active:bg-zdaBlue-800/90 hover:bg-zdaBlue-700/90 border-t-2 border-b-2 border-r-2 border-gray-300/90 active:border-zdaBlue-800 rounded-e-lg hover:border-zdaBlue-900/25 hover:text-white dark:bg-neutral-900/45 dark:active:bg-zdaBlue-700/30 dark:hover:bg-zdaBlue-700/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-100 bg-white active:bg-zdaRedpink-800/90 hover:bg-zdaRedpink-700/90 border-t-2 border-b-2 border-r-2 border-gray-300/90 active:border-zdaRedpink-800 rounded-e-lg hover:border-zdaRedpink-900/25 hover:text-white dark:bg-neutral-900/45 dark:active:bg-zdaRed-700/30 dark:hover:bg-zdaRed-700/50 dark:border-slate-500/35 dark:hover:border-zdaRed-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[1],
  },
];
const leftMobileClasses = [
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaBlue-100 bg-white active:bg-zdaBlue-800/90 hover:bg-red-50 border-t border-l border-r border-gray-300/90 active:border-zdaBlue-800 hover:border-zdaBlue-900/25 rounded-t-lg hover:text-zdaBlue-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaBlue-700/30 dark:hover:bg-zdaBlue-700/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-100 bg-white active:bg-zdaRedpink-800/90 hover:bg-red-50 border-t border-l border-r border-gray-300/90 active:border-zdaRedpink-800 hover:border-zdaRedpink-900/25 rounded-t-lg hover:text-zdaRed-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaRed-700/30 dark:hover:bg-zdaRed-700/50 dark:border-slate-500/35 dark:hover:border-zdaRed-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[1],
  },
];
const middleMobileClasses = [
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaBlue-100 bg-white active:bg-zdaBlue-800/90 hover:bg-red-50 border-l border-r border-gray-300/90 active:border-zdaBlue-800 hover:border-zdaBlue-900/25 hover:text-zdaBlue-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaBlue-700/30 dark:hover:bg-zdaBlue-700/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-100 bg-white active:bg-zdaRedpink-800/90 hover:bg-red-50 border-l border-r border-gray-300/90 active:border-zdaRedpink-800 hover:border-zdaRedpink-900/25 hover:text-zdaRed-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaRed-700/30 dark:hover:bg-zdaRed-700/50 dark:border-slate-500/35 dark:hover:border-zdaRed-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[1],
  },
];
const rightMobileClasses = [
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaBlue-100 bg-white active:bg-zdaBlue-800/90 hover:bg-red-50 border-b border-l border-r border-gray-300/90 active:border-zdaBlue-800 rounded-b-lg hover:border-zdaBlue-900/25 hover:text-zdaBlue-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaBlue-700/30 dark:hover:bg-zdaBlue-700/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-100 bg-white active:bg-zdaRedpink-800/90 hover:bg-red-50 border-b border-l border-r border-gray-300/90 active:border-zdaRedpink-800 rounded-b-lg hover:border-zdaRedpink-900/25 hover:text-zdaRed-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaRed-700/30 dark:hover:bg-zdaRed-700/50 dark:border-slate-500/35 dark:hover:border-zdaRed-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    colorScheme: colorSchemes[1],
  },
];

const JumpToNav = ({ leftSection, middleSections, rightSection }: props) => {
  const colorScheme = useRecoilValue(colorSchemeAtom);

  const getColorSchemeClassName = (element: string) => {
    let targetClasses;
    // Determine class list from element type
    if (element === "left") {
      targetClasses = leftClasses;
    } else if (element === "middle") {
      targetClasses = middleClasses;
    } else if (element === "right") {
      targetClasses = rightClasses;
    } else if (element === "leftMobile") {
      targetClasses = leftMobileClasses;
    } else if (element === "middleMobile") {
      targetClasses = middleMobileClasses;
    } else if (element === "rightMobile") {
      targetClasses = rightMobileClasses;
    } else {
      targetClasses = [{ className: "", colorScheme: colorSchemes[0] }];
    }

    // Filter on classes for className matching colorScheme
    const resultObj = targetClasses.filter(
      (classObj) => classObj.colorScheme === colorScheme
    );
    if (resultObj && resultObj.length) {
      return resultObj[0].className;
    } else {
      return targetClasses[0].className;
    }
  };
  return (
    <>
      <div className="jump-to-nav hidden sm:inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className={getColorSchemeClassName("left")}
          onClick={() => scrollToSection(leftSection.id)}
        >
          {leftSection.text}
        </button>
        {middleSections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={getColorSchemeClassName("middle")}
            onClick={() => scrollToSection(section.id)}
          >
            {section.text}
          </button>
        ))}
        <button
          type="button"
          className={getColorSchemeClassName("right")}
          onClick={() => scrollToSection(rightSection.id)}
        >
          {rightSection.text}
        </button>
      </div>
      <div className="jump-to-nav-mobile flex flex-col sm:hidden rounded-md shadow-sm">
        <button
          type="button"
          className={getColorSchemeClassName("leftMobile")}
          onClick={() => scrollToSection(leftSection.id)}
        >
          {leftSection.text}
        </button>
        {middleSections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={getColorSchemeClassName("middleMobile")}
            onClick={() => scrollToSection(section.id)}
          >
            {section.text}
          </button>
        ))}
        <button
          type="button"
          className={getColorSchemeClassName("rightMobile")}
          onClick={() => scrollToSection(rightSection.id)}
        >
          {rightSection.text}
        </button>
      </div>
    </>
  );
};

export default JumpToNav;
