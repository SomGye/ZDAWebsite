import * as React from "react";
import zerodayanubis_redpink from "/zerodayanubis_redpink.svg";
import { useRecoilState } from "recoil";
import { pageAtom } from "../../states/pageAtom";
import LogoPage from "../Pages/LogoPage";
import ExamplesPage from "../Pages/ExamplesPage";
import { switchPage } from "../../helpers";

const Body = () => {
  const [page, setPage] = useRecoilState(pageAtom);
  return (
    <>
      {/* Standard Body */}
      {page !== "Logo" && page !== "Examples" && (
        <div className="body-container my-12 flex flex-col justify-center items-center">
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
