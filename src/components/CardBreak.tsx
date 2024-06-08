import * as React from "react";

const CardBreak = () => {
  return (
    <>
      <div className="long-fading-line-container flex flex-row justify-center items-center w-full">
        <div className="left-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-r from-transparent to-slate-500/30 dark:from-transparent dark:to-neutral-900/30" />
        <div className="right-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-l from-transparent to-slate-500/30 dark:from-transparent dark:to-neutral-900/30" />
      </div>
    </>
  );
};

export default CardBreak;
