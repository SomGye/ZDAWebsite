import * as React from "react";
import { useRecoilValue } from "recoil";
import { colorSchemeAtom, colorSchemes } from "../states/themeAtom";
import SectionIndicator from "../components/SectionIndicator";
import { writings } from "../Writings";

const itemClasses = [
  {
    className:
      "writings-item w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 rounded-xl my-4 px-4 py-9 whitespace-pre-line border border-zdaBlue-400 hover:border-zdaBlue-300 dark:border-zdaBlue-600/75 dark:hover:border-zdaBlue-500 drop-shadow-card-sm-light-blue dark:drop-shadow-card-sm-dark-blue hover:drop-shadow-none dark:hover:drop-shadow-none bg-gradient-to-b from-zdaBG-light dark:from-zdaBlue-1000/30 via-zdaBG-lighterCard dark:via-zdaBlue-1000/30 to-zdaBlue-50/75 dark:to-zdaBlue-1000/30 motion-safe:transition-all motion-safe:duration-200 ease-out",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "writings-item w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 rounded-xl my-4 px-4 py-9 whitespace-pre-line border border-zdaRedpink-400 hover:border-zdaRedpink-300 dark:border-zdaRedpink-700 dark:hover:border-zdaRedpink-600 drop-shadow-card-sm-light-red dark:drop-shadow-card-sm-dark-red hover:drop-shadow-none dark:hover:drop-shadow-none bg-gradient-to-b from-zdaBG-light dark:from-zdaRedpink-1000/20 via-zdaBG-lighterCard dark:via-zdaRedpink-1000/20 to-zdaRedpink-50/75 dark:to-zdaRedpink-1000/20 motion-safe:transition-all motion-safe:duration-200 ease-out",
    colorScheme: colorSchemes[1],
  },
];

const WritingsPage = () => {
  const colorScheme = useRecoilValue(colorSchemeAtom);
  const evenMargin = " ml-1 sm:ml-4 mr-1 sm:mr-8 md:mr-12 lg:mr-32";
  const oddMargin = " mr-1 sm:mr-4 ml-1 sm:ml-8 md:ml-12 lg:ml-32";

  const getColorSchemeClassName = () => {
    // Filter on classes for className matching colorScheme
    const resultObj = itemClasses.filter(
      (classObj) => classObj.colorScheme === colorScheme
    );
    if (resultObj && resultObj.length) {
      return resultObj[0].className;
    } else {
      return itemClasses[0].className;
    }
  };

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
                        getColorSchemeClassName() +
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
