import * as React from "react";
import SectionIndicator from "../components/SectionIndicator";
import { writings } from "../Writings";

const WritingsPage = () => {
  const evenMargin = " ml-1 sm:ml-4 mr-1 sm:mr-8 md:mr-12 lg:mr-32";
  const oddMargin = " mr-1 sm:mr-4 ml-1 sm:ml-8 md:ml-12 lg:ml-32";

  return (
    <div className="writings-page-container w-full flex flex-col justify-center items-center">
      {writings.map((section, idx) => (
        <div
          className="writings-section-wrapper w-full flex flex-col items-center"
          key={idx}
        >
          {/* Skip empty sections */}
          {section.contents.length > 0 && (
            <div
              className="writings-section w-full flex flex-col items-center"
              key={section.section}
            >
              <SectionIndicator sectionName={section.section} isSmall />
              <div className="writings-items-container w-full px-4 flex flex-col justify-between items-center mx-auto">
                {/* Descending order on contents */}
                {section.contents
                  .slice(0)
                  .reverse()
                  .map((item, idx) => (
                    <div
                      className={
                        "writings-item w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 rounded-xl my-4 px-4 py-9 whitespace-pre-line border border-slate-300/25 hover:border-slate-400/25 dark:border-neutral-900/35 dark:hover:border-neutral-800/35 shadow-card-writings-light dark:shadow-card-writings-dark hover:shadow-card-writings-light-hover dark:hover:shadow-card-writings-dark-hover bg-gradient-to-br from-zdaBtn-light dark:from-zdaBG-darkestCard via-zdaBG-lighterCard dark:via-zdaBG-extraDark to-zdaBG-light dark:to-zdaBG-extraDark motion-safe:transition-all motion-safe:duration-300 ease-out" +
                        `${idx % 2 === 0 ? evenMargin : oddMargin}`
                      }
                      key={idx}
                    >
                      <p className="writings-item-title -mt-4 mb-4 font-semibold italic">
                        {item.title}
                      </p>
                      <div className="writings-item-content">
                        {item.content}
                      </div>
                      <div className="writings-item-datetime mt-4 -mb-4 font-light italic [word-spacing:0.25rem]">
                        {item.datetime}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WritingsPage;
