import * as React from "react";
import { scrollToTop } from "../helpers";
import { upIcon } from "../icons";
import { useDebouncedCallback } from "use-debounce";

const JumpToTop = () => {
  const minimumScroll = 200;
  const debounceDelay = 100;
  const fabId = "jump-to-fab";

  const setFABVisibility = (shouldShow: boolean) => {
    const fab = document.getElementById(fabId);
    if (fab) {
      if (shouldShow) {
        fab.classList.remove("hide-fab");
        fab.classList.add("show-fab");
      } else {
        fab.classList.remove("show-fab");
        fab.classList.add("hide-fab");
      }
    }
  };

  const scrollHandler = () => {
    if (window.scrollY > minimumScroll) {
      setFABVisibility(true);
    } else {
      setFABVisibility(false);
    }
  };
  const debouncedScroll = useDebouncedCallback(scrollHandler, debounceDelay);

  React.useEffect(() => {
    setFABVisibility(false);
    if (!window.onscroll) {
      // Add debounced handler to check scroll position
      window.onscroll = () => {
        debouncedScroll();
      };
    }
  }, []);

  return (
    <>
      <button
        type="button"
        className="jump-to-fab inline-flex flex-col justify-center items-center z-50 fixed rounded-full bg-gray-600 active:bg-gray-700 hover:bg-gray-500/95 text-white dark:text-gray-900 dark:hover:text-black border-gray-500/25 active:border-gray-800/20 hover:border-gray-600/20 dark:bg-gray-200 dark:active:bg-gray-500 dark:hover:bg-gray-400/95 dark:border-gray-700/25 dark:active:border-gray-400/20 dark:hover:border-gray-500/20 drop-shadow-sm dark:drop-shadow-sm transition-all duration-300 ease-out select-none"
        aria-description="Scrolls to Top of Page"
        id={fabId}
        onClick={() => scrollToTop()}
        title="Scroll to Top"
      >
        {upIcon}
      </button>
    </>
  );
};

export default JumpToTop;
