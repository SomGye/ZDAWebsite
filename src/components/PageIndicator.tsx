import * as React from "react";
import { useRecoilValue } from "recoil";
import { pageAtom } from "../states/pageAtom";

const PageIndicator = () => {
  const page = useRecoilValue(pageAtom);
  return (
    <div className="long-line-container flex flex-row justify-center items-center w-11/12 lg:w-[99%] my-2">
      {/* TODO: revisit when I have Body content: may need to go back to left w-[196px] and right w-full  */}
      <div className="left-line w-3/5 border-b rounded-2xl border-slate-500 dark:border-slate-500/90" />
      <div className="mid-line mx-2 text-lg font-outfit font-medium text-slate-600 dark:text-slate-300/95 select-none">
        {page}
      </div>
      <div className="right-line w-3/5 border-b rounded-2xl border-slate-500 dark:border-slate-500/90" />
    </div>
  );
};

export default PageIndicator;
