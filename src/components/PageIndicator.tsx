import * as React from "react";
import { useRecoilValue } from "recoil";
import { pageAtom } from "../states/pageAtom";

const PageIndicator = () => {
  const page = useRecoilValue(pageAtom);
  return (
    <div className="long-fading-line-container flex flex-row justify-center items-center w-full my-8">
      <div className="left-fading-line w-6/12 h-px my-1 rounded-2xl bg-gradient-to-r from-slate-200 to-slate-500 dark:from-slate-900 dark:to-slate-400" />
      <div className="mid-line mx-2 text-base font-outfit font-semibold text-slate-600 dark:text-slate-300 select-none">
        {page}
      </div>
      <div className="right-fading-line w-6/12 h-px my-1 rounded-2xl bg-gradient-to-l from-slate-200 to-slate-500 dark:from-slate-900 dark:to-slate-400" />
    </div>
  );
};

export default PageIndicator;
