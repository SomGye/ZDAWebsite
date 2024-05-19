import * as React from "react";

type props = {
  isVertical?: boolean;
};

const SectionBreak = ({ isVertical }: props) => {
  return (
    <>
      {!isVertical && (
        <div className="long-fading-line-container flex flex-row justify-center items-center w-full my-8">
          <div className="left-fading-line w-6/12 h-px my-1 rounded-2xl bg-gradient-to-r from-slate-200 to-slate-500 dark:from-gray-900 dark:to-gray-400" />
          <div className="right-fading-line w-6/12 h-px my-1 rounded-2xl bg-gradient-to-l from-slate-200 to-slate-500 dark:from-gray-900 dark:to-gray-400" />
        </div>
      )}
      {isVertical && (
        <div className="long-fading-line-container flex flex-col justify-center items-center w-full h-full">
          <div className="top-fading-line h-[50%] w-px mx-2 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-500 dark:from-gray-900 dark:to-gray-400" />
          <div className="bottom-fading-line h-[50%] w-px mx-2 rounded-2xl bg-gradient-to-t from-slate-200 to-slate-500 dark:from-gray-900 dark:to-gray-400" />
        </div>
      )}
    </>
  );
};

export default SectionBreak;
