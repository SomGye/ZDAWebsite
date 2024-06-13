import * as React from "react";

type props = {
  clickCallback: () => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  textContent: string;
  tight?: boolean;
  variant?: string;
};

const ZDAButton = ({
  clickCallback,
  leftIcon,
  rightIcon,
  textContent,
  tight,
  variant,
}: props) => {
  const defaultClassName =
    "hidden md:inline-flex justify-center items-center group w-[14.5rem] h-[2.25rem] m-4 p-1 rounded-2xl bg-zdaRedpink-600 hover:bg-zdaRedpink-700/90 active:bg-zdaRedpink-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none";
  const variantsList = [
    {
      name: "mobile",
      className:
        "inline-flex justify-center items-center md:hidden w-64 h-10 m-4 rounded-2xl bg-zdaRedpink-600 hover:bg-zdaRedpink-700/90 active:bg-zdaRedpink-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit text-lg drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
    {
      name: "neutral",
      className:
        "hidden md:inline-flex justify-center items-center group w-[14.5rem] h-[2.25rem] m-4 p-1 rounded-2xl bg-gray-600 hover:bg-gray-700 active:bg-gray-800 dark:bg-zdaBtn-darkCard dark:hover:bg-zdaBtn-darkHover dark:active:bg-zdaBtn-dark text-white/95 hover:text-white dark:text-gray-300 dark:hover:text-gray-100 dark:active:text-white font-outfit drop-shadow-btn-light dark:drop-shadow-btn-dark-neutral hover:drop-shadow-sm dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
    {
      name: "mobile-neutral",
      className:
        "inline-flex justify-center items-center md:hidden w-64 h-10 m-4 rounded-2xl bg-gray-600 hover:bg-gray-700 active:bg-gray-800 dark:bg-zdaBtn-darkCard dark:hover:bg-zdaBtn-darkHover dark:active:bg-zdaBtn-dark text-white/95 hover:text-white dark:text-gray-300 dark:hover:text-gray-100 dark:active:text-white font-outfit text-lg drop-shadow-btn-light dark:drop-shadow-btn-dark-neutral hover:drop-shadow-sm dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
    {
      name: "grid",
      className: "hidden md:grid grid-cols-2 content-center justify-center items-center justify-items-center group w-[14.5rem] h-[2.25rem] m-4 p-1 rounded-2xl bg-zdaRedpink-600 hover:bg-zdaRedpink-700/90 active:bg-zdaRedpink-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
    {
      name: "mobile-grid",
      className: "grid grid-cols-2 content-center justify-center items-center justify-items-center md:hidden w-64 h-10 m-4 rounded-2xl bg-zdaRedpink-600 hover:bg-zdaRedpink-700/90 active:bg-zdaRedpink-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
  ];
  const [activeClassName, setActiveClassName] =
    React.useState(defaultClassName);
  // ? NOTE: the will-change-transform fixes the icon jitter issue when centering
  const leftIconSpanClassName =
    "inline-flex justify-center items-center mr-2 transition-transform group-hover:-translate-x-1 will-change-transform motion-reduce:transform-none";
  const rightIconSpanClassName =
    "inline-flex justify-center items-center ml-2 transition-transform group-hover:translate-x-1 will-change-transform motion-reduce:transform-none";

  React.useEffect(() => {
    if (variant) {
      setActiveClassName(
        variantsList.filter((item) => item.name === variant)[0].className
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  return (
    <>
      <button
        className={activeClassName}
        onClick={clickCallback}
        style={tight ? { ...{ margin: 4 } } : undefined}
      >
        {leftIcon && (
          <span className={leftIconSpanClassName}>{leftIcon}&nbsp;</span>
        )}
        {textContent}
        {rightIcon && (
          <span className={rightIconSpanClassName}>&nbsp;{rightIcon}</span>
        )}
      </button>
    </>
  );
};

export default ZDAButton;
