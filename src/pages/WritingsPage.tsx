import * as React from "react";
import { useRecoilValue } from "recoil";
import { colorSchemeAtom, colorSchemes, themeAtom } from "../states/themeAtom";
import SectionIndicator from "../components/SectionIndicator";
import { writings } from "../Writings";

// TODO: classes for color schemes

const WritingsPage = () => {
  const theme = useRecoilValue(themeAtom);
  const colorScheme = useRecoilValue(colorSchemeAtom);
  const [idx_scheme, setIdx_scheme] = React.useState(0);

  React.useEffect(() => {
    // Update matched scheme index
    setIdx_scheme(colorSchemes.indexOf(colorScheme));
  }, [colorScheme]);

  return (
    <div className="writings-page-container w-full flex flex-col justify-center items-center">
      {writings.map((section) => (
        <>
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
                      className={`writings-item w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 rounded-xl my-4 ${
                        idx % 2 === 0
                          ? "ml-1 sm:ml-4 mr-1 sm:mr-8 md:mr-12 lg:mr-32"
                          : "mr-1 sm:mr-4 ml-1 sm:ml-8 md:ml-12 lg:ml-32"
                      } px-4 py-9 whitespace-pre-line border border-zdaBlue-400 hover:border-zdaBlue-300 dark:border-zdaBlue-600/75 dark:hover:border-zdaBlue-500 drop-shadow-card-sm-light-blue dark:drop-shadow-card-sm-dark-blue hover:drop-shadow-none dark:hover:drop-shadow-none bg-gradient-to-b from-zdaBG-light dark:from-zdaBlue-1000/30 via-zdaBG-lighterCard dark:via-zdaBlue-1000/30 to-zdaBlue-50/75 dark:to-zdaBlue-1000/30 motion-safe:transition-all motion-safe:duration-200 ease-out`}
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
        </>
      ))}
    </div>
  );
};

export default WritingsPage;
