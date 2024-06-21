import * as React from "react";

type props = {
  sectionName: string;
  id?: string;
};

const SectionIndicator = ({ sectionName, id }: props) => {
  return (
    <div
      className="long-fading-line-container flex flex-row justify-center lg:justify-start items-center w-full my-8 scroll-mt-24"
      id={id ? id : sectionName}
    >
      <div className="left-fading-line w-1/2 lg:w-16 2xl:w-12 h-px my-1 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-500 dark:from-gray-800 dark:to-gray-400" />
      <div className="mid-line w-auto mx-3 2xl:mx-2 text-xl font-extrabold text-nowrap text-slate-600 dark:text-slate-300 select-none">
        {sectionName}
      </div>
      <div className="right-fading-line w-1/2 lg:w-full h-px my-1 rounded-2xl bg-gradient-to-l from-slate-200 to-slate-500 dark:from-gray-900 dark:to-gray-400" />
    </div>
  );
};

export default SectionIndicator;
