import * as React from "react";

const SectionBreak = () => {
  return (
    <div className="long-fading-line-container flex flex-row justify-center items-center w-full my-8">
      <div className="left-fading-line w-6/12 h-px my-1 rounded-2xl bg-gradient-to-r from-slate-200 to-slate-500 dark:from-gray-900 dark:to-gray-400" />
      <div className="right-fading-line w-6/12 h-px my-1 rounded-2xl bg-gradient-to-l from-slate-200 to-slate-500 dark:from-gray-900 dark:to-gray-400" />
    </div>
  );
};

export default SectionBreak;
