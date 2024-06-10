import * as React from "react";

type props = {
  isVertical?: boolean;
};

const CardBreak = ({ isVertical }: props) => {
  return (
    <>
      {!isVertical && (
        <div className="long-fading-line-container flex flex-row justify-center items-center w-full">
          <div className="left-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-r from-transparent to-slate-500/30 dark:from-transparent dark:to-neutral-900/30" />
          <div className="right-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-l from-transparent to-slate-500/30 dark:from-transparent dark:to-neutral-900/30" />
        </div>
      )}
      {isVertical && (
        <div className="long-fading-line-container flex flex-col justify-center items-center w-full h-8 mx-2">
          <div className="top-fading-line w-px h-4 mx-1 rounded-2xl bg-gradient-to-b from-gray-400/40 to-gray-400/80 dark:from-neutral-900/25 dark:to-neutral-900" />
          <div className="bottom-fading-line w-px h-4 mx-1 rounded-2xl bg-gradient-to-t from-gray-400/40 to-gray-400/80 dark:from-neutral-900/25 dark:to-neutral-900" />
        </div>
      )}
    </>
  );
};

export default CardBreak;
