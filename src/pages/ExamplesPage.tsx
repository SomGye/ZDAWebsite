import * as React from "react";
import { leftArrowIcon } from "../icons";
import ThemeMenu from "../components/ThemeMenu";
import CardBreak from "../components/CardBreak";
import {
  photosExamplesAbstractifyThumbnail,
  photosExamplesCoalesceThumbnail,
  photosExamplesVectorizeThumbnail,
} from "../thumbnailInfo";
import ZDAButton from "../components/ZDAButton";

const ExamplesPage = () => {
  React.useEffect(() => {
    // Hide the init loading screen
    const loadingpage = document.querySelector("#loadingpage") as any;
    if (loadingpage && loadingpage.style) {
      loadingpage.style = "display: none";
    }
  }, []);

  return (
    <div className="examples-page-container w-full h-full flex flex-col justify-center items-center bg-zdaBG-light dark:bg-zdaBG-dark">
      {/* NOTE: ThemeMenu needed here to detect theme separately, since this page bypasses App */}
      <div className="cursor-pointer focus-visible:outline-none absolute bottom-4 left-1/2 -translate-x-1/2 mr-0 mt-3 lg:left-auto lg:translate-x-0 lg:right-0 lg:mr-6">
        <ThemeMenu />
      </div>
      <span className="examples-page-title m-2 font-outfit font-semibold text-3xl text-gray-800 dark:text-gray-200 select-none">
        ZDA Art Commissions
      </span>
      <div className="examples-page-cards-container w-[calc(100%-3rem)] h-full mb-40 p-8 grid grid-cols-3 gap-4 justify-center items-center justify-items-center rounded-2xl border border-gray-200/75 dark:border-neutral-900/75">
        <div className="examples-page-card w-full h-full mx-2 my-4 rounded-xl border border-gray-200 dark:border-neutral-800">
          <div className="examples-page-card-title-container flex flex-col justify-center items-center my-2 sm:my-4">
            <span className="examples-page-card-title flex text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
              Abstractify
            </span>
          </div>
          <CardBreak />
          <div className="examples-page-card-content mx-4 my-6 sm:my-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="examples-page-card-img-container">
              <img
                src={photosExamplesAbstractifyThumbnail[0].src}
                alt={photosExamplesAbstractifyThumbnail[0].alt}
                title={photosExamplesAbstractifyThumbnail[0].title}
                className="examples-img01 z-10 aspect-[9/13] h-full max-w-96 my-4 object-cover object-left-bottom rounded-md border-solid border dark:border-2 border-transparent select-none"
              />
            </div>
            <div className="examples-page-card-description-container my-4">
              {/* TODO: refine desc/list and fix scaling */}
              <div className="examples-page-card-description">
                Description of comm type...
                <ul className="mt-4 sm:mt-6">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
          <CardBreak />
          <div className="examples-page-card-bottom-content w-full inline-flex justify-center items-center">
            <span className="examples-page-card-price m-4 p-1 inline-flex">
              $<div className="tracking-wide">&nbsp;30&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-400 tracking-tight">
                (PayPal/Kofi)
              </div>
            </span>
          </div>
        </div>
        <div className="examples-page-card w-full h-full mx-2 my-4 rounded-xl border border-gray-200 dark:border-neutral-800">
          <div className="examples-page-card-title-container flex flex-col justify-center items-center my-2 sm:my-4">
            <span className="examples-page-card-title flex text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
              Vectorize
            </span>
          </div>
          <CardBreak />
          <div className="examples-page-card-content mx-4 my-6 sm:my-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="examples-page-card-img-container">
              <img
                src={photosExamplesVectorizeThumbnail[0].src}
                alt={photosExamplesVectorizeThumbnail[0].alt}
                title={photosExamplesVectorizeThumbnail[0].title}
                className="examples-img02 z-10 aspect-[9/13] h-full max-w-96 my-4 object-cover object-center rounded-md border-solid border dark:border-2 border-transparent select-none"
              />
            </div>
            <div className="examples-page-card-description-container my-4">
              {/* TODO: refine desc/list and fix scaling */}
              <div className="examples-page-card-description">
                Description of comm type...
                <ul className="mt-4 sm:mt-6">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
          <CardBreak />
          <div className="examples-page-card-bottom-content w-full inline-flex justify-center items-center">
            <span className="examples-page-card-price m-4 p-1 inline-flex">
              $<div className="tracking-wide">&nbsp;30&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-400 tracking-tight">
                (PayPal/Kofi)
              </div>
            </span>
          </div>
        </div>
        <div className="examples-page-card w-full h-full mx-2 my-4 rounded-xl border border-gray-200 dark:border-neutral-800">
          <div className="examples-page-card-title-container flex flex-col justify-center items-center my-2 sm:my-4">
            <span className="examples-page-card-title flex text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
              Coalesce
            </span>
          </div>
          <CardBreak />
          <div className="examples-page-card-content mx-4 my-6 sm:my-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="examples-page-card-img-container">
              <img
                src={photosExamplesCoalesceThumbnail[0].src}
                alt={photosExamplesCoalesceThumbnail[0].alt}
                title={photosExamplesCoalesceThumbnail[0].title}
                className="examples-img03 z-10 aspect-[9/13] h-full max-w-96 my-4 object-cover object-center rounded-md border-solid border dark:border-2 border-transparent select-none"
              />
            </div>
            <div className="examples-page-card-description-container my-4">
              {/* TODO: refine desc/list and fix scaling */}
              <div className="examples-page-card-description">
                Description of comm type...
                <ul className="mt-4 sm:mt-6">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
          <CardBreak />
          <div className="examples-page-card-bottom-content w-full inline-flex justify-center items-center">
            <span className="examples-page-card-price m-4 p-1 inline-flex">
              $<div className="tracking-wide">&nbsp;45&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-400 tracking-tight">
                (PayPal/Kofi)
              </div>
            </span>
          </div>
        </div>
      </div>
      <ZDAButton
        clickCallback={() => window.location.replace("/")}
        leftIcon={leftArrowIcon}
        textContent="Go Back"
      />
    </div>
  );
};

export default ExamplesPage;
