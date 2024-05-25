import * as React from "react";
import { jumpToSection } from "../helpers";

type jumpToInfo = {
  id: string;
  text: string;
};

type props = {
  leftSection: jumpToInfo;
  middleSections: jumpToInfo[];
  rightSection: jumpToInfo;
};

const JumpToNav = ({ leftSection, middleSections, rightSection }: props) => {
  return (
    <>
      <div
        className="jump-to-nav hidden sm:inline-flex rounded-md shadow-sm"
        role="group"
      >
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-700/80 bg-white active:bg-red-500/20 border-t-2 border-b-2 border-l-2 border-gray-200 active:border-zdaRed-200/80 hover:border-zdaRed-200/50 rounded-s-lg hover:bg-red-50 hover:text-zdaRed-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaBlue-800/30 dark:hover:bg-zdaBlue-800/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-800/70 dark:text-white dark:hover:text-white  hover:drop-shadow-sm dark:hover:drop-shadow-sm transition-all duration-200 ease-out select-none"
          onClick={() => jumpToSection(leftSection.id)}
        >
          {leftSection.text}
        </button>
        {middleSections.map((section) => (
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-700/80 bg-white active:bg-red-500/20 border-t-2 border-b-2 border-gray-200 active:border-zdaRed-200/80 hover:border-zdaRed-200/50 hover:bg-red-50 hover:text-zdaRed-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaBlue-800/30 dark:hover:bg-zdaBlue-800/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-800/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm transition-all duration-200 ease-out select-none"
            onClick={() => jumpToSection(section.id)}
          >
            {section.text}
          </button>
        ))}
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-700/80 bg-white active:bg-red-500/20 border-t-2 border-b-2 border-r-2 border-gray-200 active:border-zdaRed-200/80 rounded-e-lg hover:border-zdaRed-200/50 hover:bg-red-50 hover:text-zdaRed-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaBlue-800/30 dark:hover:bg-zdaBlue-800/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-800/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm transition-all duration-200 ease-out select-none"
          onClick={() => jumpToSection(rightSection.id)}
        >
          {rightSection.text}
        </button>
      </div>
      <div
        className="jump-to-nav-mobile flex flex-col sm:hidden rounded-md shadow-sm"
        role="group"
      >
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-700/80 bg-white active:bg-red-500/20 border-t border-l border-r border-gray-200 active:border-zdaRed-200/80 hover:border-zdaRed-200/50 rounded-t-lg hover:bg-red-50 hover:text-zdaRed-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaBlue-800/30 dark:hover:bg-zdaBlue-800/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-800/70 dark:text-white dark:hover:text-white  hover:drop-shadow-sm dark:hover:drop-shadow-sm transition-all duration-200 ease-out select-none"
          onClick={() => jumpToSection(leftSection.id)}
        >
          {leftSection.text}
        </button>
        {middleSections.map((section) => (
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-700/80 bg-white active:bg-red-500/20 border-l border-r border-gray-200 active:border-zdaRed-200/80 hover:border-zdaRed-200/50 hover:bg-red-50 hover:text-zdaRed-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaBlue-800/30 dark:hover:bg-zdaBlue-800/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-800/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm transition-all duration-200 ease-out select-none"
            onClick={() => jumpToSection(section.id)}
          >
            {section.text}
          </button>
        ))}
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaRed-700/80 bg-white active:bg-red-500/20 border-b border-l border-r border-gray-200 active:border-zdaRed-200/80 rounded-b-lg hover:border-zdaRed-200/50 hover:bg-red-50 hover:text-zdaRed-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaBlue-800/30 dark:hover:bg-zdaBlue-800/50 dark:border-slate-500/35 dark:hover:border-zdaBlue-800/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm transition-all duration-200 ease-out select-none"
          onClick={() => jumpToSection(rightSection.id)}
        >
          {rightSection.text}
        </button>
      </div>
    </>
  );
};

export default JumpToNav;
