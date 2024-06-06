import * as React from "react";

const CardBreak = () => {
  return (
    // TODO: refine colors, especially for light mode
    <>
      <div className="long-fading-line-container flex flex-row justify-center items-center w-full">
        <div className="left-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-r from-slate-300 to-slate-500 dark:from-neutral-900 dark:to-neutral-700" />
        <div className="right-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-l from-slate-300 to-slate-500 dark:from-neutral-900 dark:to-neutral-700" />
      </div>
    </>
  );
};

export default CardBreak;
