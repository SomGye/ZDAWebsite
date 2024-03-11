import * as React from "react";
import { useRecoilValue } from "recoil";
import { pageAtom } from "../states/pageAtom";

const PageIndicator = () => {
  const page = useRecoilValue(pageAtom);
  return (
    <div className="long-line-container flex flex-row justify-center items-center w-11/12 lg:w-[99%] my-2">
      {/* TODO: revisit when I have Body content: may need to go back to left w-[196px] and right w-full  */}
      <div className="left-line w-3/5 border-b rounded-2xl border-zdaRedpink-500 dark:border-zdaRedpink-600" />
      <div className="mid-line mx-2 text-lg font-outfit font-semibold text-zdaRedpink-500 dark:text-zdaRedpink-650 select-none">
        {page}
      </div>
      <div className="right-line w-3/5 border-b rounded-2xl border-zdaRedpink-500 dark:border-zdaRedpink-600" />
    </div>
  );
};

export default PageIndicator;
