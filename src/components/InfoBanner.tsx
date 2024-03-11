import * as React from "react";

const InfoBanner = () => {
  return (
    <div className="info-banner-container w-full py-2 lg:py-0 flex flex-col lg:flex-row justify-center items-center bg-gradient-to-b from-[rgb(255_0_72_/_0.025)] to-transparent">
      <div className="info-zda-container">
        <span className="info-zda block xs:hidden sm:block lg:hidden m-2 text-lg text-gray-700 dark:text-gray-300 hover:text-zdaRedpink-500 dark:hover:text-zdaRedpink-600 transition-colors duration-500 ease-out font-light cursor-default select-none">
          ⌞ZeroDayAnubis⌝
        </span>
      </div>
      <div className="comm-info-container w-11/12 lg:mt-4">
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
