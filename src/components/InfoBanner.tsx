import * as React from "react";
import { useRecoilValue } from "recoil";
import { pageAtom } from "../states/pageAtom";

const InfoBanner = () => {
  const page = useRecoilValue(pageAtom);
  return (
    <div className="info-banner-container w-full py-2 md:py-0 mb-4 flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-[rgb(255_0_72_/_0.025)] to-transparent">
      <div className="long-line-container flex flex-row justify-center items-center w-2/3 my-4">
        <div className="left-line w-2/5 border-b rounded-2xl border-zdaRedpink-500 dark:border-zdaRedpink-600" />
        <div className="mid-line mx-2 text-lg font-outfit font-semibold text-zdaRedpink-500 dark:text-zdaRedpink-650 select-none">
          {page}
        </div>
        <div className="right-line w-2/5 border-b rounded-2xl border-zdaRedpink-500 dark:border-zdaRedpink-600" />
      </div>
      <div className="comm-info-container w-1/3">
        <div className="comm-status-container m-2">
          <span className="font-medium tracking-wide text-sm text-slate-900 dark:text-slate-200 pointer-events-none select-none">
            COMMISSIONS CLOSED
          </span>
        </div>
        <div className="comm-slots-container m-2">
          <span className="font-light italic tracking-wide text-sm text-slate-900 dark:text-slate-200 pointer-events-none select-none">
            {"(0/5 SLOTS)"}
          </span>
        </div>
        <div className="comm-waitlist-container m-2">
          <span className="font-light italic tracking-wide text-sm text-slate-900 dark:text-slate-200 pointer-events-none select-none">
            {"(0/5 WAITLIST)"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
