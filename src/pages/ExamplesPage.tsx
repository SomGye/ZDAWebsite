import * as React from "react";
import { leftArrowMdIcon } from "../icons";
import ThemeMenu from "../components/ThemeMenu";
import CardBreak from "../components/CardBreak";
import {
  photosExamplesAbstractifyThumbnail,
  photosExamplesCoalesceThumbnail,
  photosExamplesVectorizeThumbnail,
} from "../thumbnailInfo";
import ZDAButton from "../components/ZDAButton";
import { switchPage } from "../helpers";
import { useRecoilState } from "recoil";
import { pageAtom } from "../states/pageAtom";

const ExamplesPage = () => {
  const currentYear = new Date().getFullYear();
  const [, setPage] = useRecoilState(pageAtom);

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
      <div className="cursor-pointer focus-visible:outline-none fixed 2xl:absolute bottom-4 left-4 xs:left-6 md:left-1/2 -translate-x-1/2 mr-0 mt-3 lg:left-auto lg:translate-x-0 right-auto lg:right-0 lg:mr-6">
        <ThemeMenu />
      </div>
      <span className="examples-page-title m-2 font-outfit font-semibold text-xl xs:text-2xl md:text-3xl text-gray-800 dark:text-gray-200 select-none">
        Examples of <br className="block xs:hidden" />
        Art Commission Types
      </span>
      <div className="examples-page-cards-container w-full 3xl:w-[calc(100%-3rem)] h-full p-8 grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-4 justify-center items-center justify-items-center rounded-2xl border border-gray-200/75 dark:border-neutral-900/75">
        <div className="examples-page-card w-full h-full mx-2 my-4 rounded-xl border border-gray-200 dark:border-neutral-800 select-none">
          <div className="examples-page-card-title-container flex flex-col justify-center items-center my-2 sm:my-4">
            <span className="examples-page-card-title flex text-xl font-urbanist font-normal tracking-wider select-none">
              Abstractify
            </span>
          </div>
          <CardBreak />
          <div className="examples-page-card-content mx-4 my-6 sm:my-8 flex flex-col justify-between items-center">
            <div className="examples-page-card-img-container">
              <img
                src={photosExamplesAbstractifyThumbnail[0].src}
                alt={photosExamplesAbstractifyThumbnail[0].alt}
                title={photosExamplesAbstractifyThumbnail[0].title}
                className="examples-img01 z-10 aspect-[9/13] h-full w-full sm:w-48 lg:w-56 xl:w-60 2xl:w-72 3xl:w-[26rem] my-8 object-cover object-left-bottom rounded-md border-solid border dark:border-2 border-transparent select-none"
              />
            </div>
            <div className="examples-page-card-description my-4 text-sm lg:text-base">
              <ul>
                <li>Made in Procreate</li>
                <li>Transform idea into digital abstract painting</li>
                <li>Ready in 2-3 days</li>
              </ul>
            </div>
          </div>
          <CardBreak />
          <div className="examples-page-card-bottom-content w-full inline-flex justify-center items-center">
            <span className="examples-page-card-price mt-8 p-1 inline-flex">
              $<div className="tracking-wide">&nbsp;30&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-400 tracking-tight">
                (PayPal/Kofi)
              </div>
            </span>
          </div>
        </div>
        <div className="examples-page-card w-full h-full mx-2 my-4 rounded-xl border border-gray-200 dark:border-neutral-800 select-none">
          <div className="examples-page-card-title-container flex flex-col justify-center items-center my-2 sm:my-4">
            <span className="examples-page-card-title flex text-xl font-urbanist font-normal tracking-wider select-none">
              Vectorize
            </span>
          </div>
          <CardBreak />
          <div className="examples-page-card-content mx-4 my-6 sm:my-8 flex flex-col justify-between items-center">
            <div className="examples-page-card-img-container">
              <img
                src={photosExamplesVectorizeThumbnail[0].src}
                alt={photosExamplesVectorizeThumbnail[0].alt}
                title={photosExamplesVectorizeThumbnail[0].title}
                className="examples-img02 z-10 aspect-[9/13] h-full w-full sm:w-48 lg:w-56 xl:w-60 2xl:w-72 3xl:w-[26rem] my-8 object-cover object-center rounded-md border-solid border dark:border-2 border-transparent select-none"
              />
            </div>
            <div className="examples-page-card-description my-4 text-sm lg:text-base">
              <ul>
                <li>Made in Inkscape</li>
                <li>Translate idea into vector art/logo/design</li>
                <li>Ready in 2-3 days</li>
              </ul>
            </div>
          </div>
          <CardBreak />
          <div className="examples-page-card-bottom-content w-full inline-flex justify-center items-center">
            <span className="examples-page-card-price mt-8 p-1 inline-flex">
              $<div className="tracking-wide">&nbsp;30&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-400 tracking-tight">
                (PayPal/Kofi)
              </div>
            </span>
          </div>
        </div>
        <div className="examples-page-card w-full h-full mx-2 my-4 rounded-xl border border-gray-200 dark:border-neutral-800 select-none">
          <div className="examples-page-card-title-container flex flex-col justify-center items-center my-2 sm:my-4">
            <span className="examples-page-card-title flex text-xl font-urbanist font-normal tracking-wider select-none">
              Coalesce
            </span>
          </div>
          <CardBreak />
          <div className="examples-page-card-content mx-4 my-6 sm:my-8 flex flex-col justify-between items-center">
            <div className="examples-page-card-img-container">
              <img
                src={photosExamplesCoalesceThumbnail[0].src}
                alt={photosExamplesCoalesceThumbnail[0].alt}
                title={photosExamplesCoalesceThumbnail[0].title}
                className="examples-img03 z-10 aspect-[9/13] h-full w-full sm:w-48 lg:w-56 xl:w-60 2xl:w-72 3xl:w-[26rem] my-8 object-cover object-center rounded-md border-solid border dark:border-2 border-transparent select-none"
              />
            </div>
            <div className="examples-page-card-description my-4 text-sm lg:text-base">
              <ul>
                <li>
                  Made in Procreate/Inkscape
                  <div className="hidden lg:inline-block">/PSP</div>
                </li>
                <li>Fusion of abstract painting and vector art</li>
                <li>Ready in 3-5 days</li>
              </ul>
            </div>
          </div>
          <CardBreak />
          <div className="examples-page-card-bottom-content w-full inline-flex justify-center items-center">
            <span className="examples-page-card-price mt-8 p-1 inline-flex">
              $<div className="tracking-wide">&nbsp;45&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-400 tracking-tight">
                (PayPal/Kofi)
              </div>
            </span>
          </div>
        </div>
        <a
          href="https://www.zda.works/"
          className="md:col-span-3 pt-4 text-sm text-gray-700 dark:text-gray-400 select-none"
          target="_blank"
          rel="noopener noreferrer"
          title="Click to go to ZDAWorks site"
        >
          © ZDA Works&nbsp;{currentYear}
        </a>
      </div>
      <div className="ZDAButton-container my-8">
        <ZDAButton
          clickCallback={() => switchPage("Home", setPage)}
          leftIcon={leftArrowMdIcon}
          textContent="Go Back"
          variant="mobile-grid"
        />
        <ZDAButton
          clickCallback={() => switchPage("Home", setPage)}
          leftIcon={leftArrowMdIcon}
          textContent="Go Back"
          variant="grid"
        />
      </div>
    </div>
  );
};

export default ExamplesPage;
