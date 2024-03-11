import * as React from "react";
import zerodayanubis_redpink from "/zerodayanubis_redpink.svg";
import { useRecoilState } from "recoil";
import { pageAtom } from "../../states/pageAtom";
import LogoPage from "../../pages/LogoPage";
import ExamplesPage from "../../pages/ExamplesPage";
import { switchPage } from "../../helpers";
import InfoBanner from "../../components/InfoBanner";
import PageIndicator from "../../components/PageIndicator";

const Body = () => {
  const [page, setPage] = useRecoilState(pageAtom);
  return (
    <>
      {/* TODO: show Page Links when screen size determines that Header does not show them */}
      {/* TODO: About Page that is the previous Home+Portfolio summary plus quick chronological feed of my art from 2021-2023; meant to be mostly static, pick images that will live on */}
      {/* Standard Body */}
      {page !== "Logo" && page !== "Examples" && (
        // NOTE: used mt to counter Header height
        <div className="body-container w-full mt-[61px] xs:mt-[77px] mb-16 xs:mb-20 flex flex-col justify-center items-center">
          {/* TODO: insert InfoBanner component here */}
          <InfoBanner />
          {/* TODO: insert secondary/backup tab nav here (only when nav links not in Header) */}
          <PageIndicator />
          <img src={zerodayanubis_redpink} className="max-h-12 my-4" />
          <h1 className="font-outfit font-light text-2xl my-4 text-neutral-800 dark:text-neutral-100">
            ZDAWebsite
          </h1>
          <button
            className="inline-flex items-center px-4 py-[6px] 3xl:px-5 3xl:py-[8px] 4xl:px-7 4xl:py-[11px] 4k:px-9 4k:py-[14px] 3xl:scale-[1.1] 4xl:scale-[1.2] 4k:scale-[1.4] rounded-md bg-zdaBlue-600 text-[15px] 3xl:text-lg 4xl:text-xl 4k:text-2xl text-gray-200 font-medium transition ease-out duration-300 motion-reduce:transition-none hover:text-gray-100 hover:bg-zdaBlue-800 active:bg-zdaBlue-900/90 select-none"
            onClick={() => switchPage("Logo", setPage)}
          >
            Logo Page
          </button>
          {/* TEST: Heading Sections: text with long lines on left and right */}
          <div className="long-line-container flex flex-row justify-center items-center w-full my-8">
            <div className="left-line w-1/12 border-b rounded-2xl border-zdaRedpink-500 dark:border-zdaRedpink-600" />
            <div className="mid-line mx-2 text-base font-outfit font-semibold text-zdaRedpink-500 dark:text-zdaRedpink-650 select-none">
              Portfolio
            </div>
            <div className="right-line w-3/5 border-b rounded-2xl border-zdaRedpink-500 dark:border-zdaRedpink-600" />
          </div>
          {/* TEST: SCROLL FILLER */}
          <div className="py-12">
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
            <p>...Hello</p>
            <p>World...</p>
          </div>
        </div>
      )}
      {/* Logo Page */}
      {page === "Logo" && <LogoPage />}
      {/* Examples Page */}
      {page === "Examples" && <ExamplesPage />}
    </>
  );
};

export default Body;
