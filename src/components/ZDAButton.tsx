import * as React from "react";

type props = {
  clickCallback: () => void;
  textContent: string;
  variant?: string;
};

const ZDAButton = ({ clickCallback, textContent, variant }: props) => {
  const variants = ["mobile"];
  const mobileClassName =
    "block md:hidden w-64 h-10 m-4 rounded-2xl bg-zdaRedpink-600 hover:bg-zdaRedpink-700/90 active:bg-zdaRedpink-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit text-lg drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none";
  const defaultClassName =
    "hidden md:block w-[14.5rem] h-[2.25rem] m-4 p-1 rounded-2xl bg-zdaRedpink-600 hover:bg-zdaRedpink-700/90 active:bg-zdaRedpink-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none";

  return (
    <>
      {variant === variants[0] && (
        <button className={mobileClassName} onClick={clickCallback}>
          {textContent}
        </button>
      )}
      {/* DEFAULT */}
      {!variant && (
        <button className={defaultClassName} onClick={clickCallback}>
          {textContent}
        </button>
      )}
    </>
  );
};

export default ZDAButton;
