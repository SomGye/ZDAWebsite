import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../states/themeAtom";
import { clickLink } from "../helpers";
import MiniSpinner from "../components/MiniSpinner";
import ZDAButton from "../components/ZDAButton";
import CardBreak from "../components/CardBreak";
import SectionBreak from "../components/SectionBreak";
import { photosAboutThumbnail } from "../thumbnailInfo";
import a_dark from "/comm-a-dark.svg";
import a_light from "/comm-a-light.svg";
import c_dark from "/comm-c-dark.svg";
import c_light from "/comm-c-light.svg";
import v_dark from "/comm-v-dark.svg";
import v_light from "/comm-v-light.svg";

const CommissionsPage = () => {
  const theme = useRecoilValue(themeAtom);
  const [idx_abstractify, setIdx_abstractify] = React.useState(-1);
  const [idx_vectorize, setIdx_vectorize] = React.useState(-1);
  const [idx_coalesce, setIdx_coalesce] = React.useState(-1);
  const [formVisible, setFormVisible] = React.useState(false);
  const [formLoading, setFormLoading] = React.useState(false);
  // const formLink = "https://tinyurl.com/ZDACommForm"; // ! TODO: uncomment (and remove below) when closer to release
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScvPym9fjD6IxPcJ1xGK8gm3YT9QKuqL-sOYjiab1AohuxDsg/viewform?usp=sf_link"; // ? TEST

  React.useEffect(() => {
    setFormLoading(formVisible);
  }, [formVisible]);

  return (
    // Commissions Types: Abstractify, Vectorize, Coalesce
    // TODO: when clicking btn on cards: 1) smooth scroll down to comm form section
    //  -- 2) emulate click by setting state and opening form
    // TODO: when clicking comm card example img, setIdx and open Lightbox so that they can see all imgs per Comm Type
    <div className="commissions-page-container w-full flex flex-col justify-center items-center">
      <div className="commissions-page-cards-container w-full md:w-[calc(100%-32px)] h-full mb-[48px] py-4 sm:py-8 xl:py-12 flex flex-col justify-center items-center gap-0 sm:gap-4 xl:gap-8 rounded-2xl bg-zdaBG-lighterCard/75 dark:bg-zdaBG-darkerCard/30 border border-gray-200/20 dark:border-neutral-900/20">
        <div className="commissions-page-card-container w-11/12 md:w-4/5 xl:w-1/3 h-full mx-2 my-4 rounded-xl bg-gradient-to-b sm:bg-gradient-to-tl from-zdaBG-lightCard dark:from-zdaBG-darkCard to-zdaRed-100 dark:to-zdaRedpink-600 border-0 dark:border-0 border-gray-200 dark:border-neutral-900 drop-shadow-card-light dark:drop-shadow-card-dark">
          <div className="commissions-page-card">
            <div className="commissions-page-card-title-container flex flex-col justify-center items-center my-2 sm:my-4">
              <div className="grid">
                <img
                  src={theme === "dark" ? a_dark : a_light}
                  alt="Abstractify Logo"
                  className="z-10 col-start-1 row-start-1 h-12 w-12 my-1 object-cover object-center rounded-full border border-transparent select-none"
                />
                <div className="z-20 col-start-1 row-start-1 h-12 w-12 my-1 rounded-full bg-transparent border-2 border-transparent hover:border-zdaRedpink-700 dark:border-gray-300 dark:hover:border-gray-600 motion-safe:transition-all motion-safe:duration-150 ease-out select-none" />
              </div>
              <span className="commissions-page-card-title flex text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
                Abstractify
              </span>
            </div>
            <CardBreak />
            <div className="commissions-page-card-content mx-4 my-6 sm:my-8 relative flex flex-col sm:flex-row justify-between items-center">
              <img
                onClick={() => setIdx_abstractify(0)}
                src={photosAboutThumbnail[1].src}
                alt={photosAboutThumbnail[1].alt}
                title={photosAboutThumbnail[1].title}
                className="about-img02 z-10 h-full max-w-96 my-4 aspect-[14/9] object-cover object-center rounded-xl brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
              />
              <div className="commissions-page-card-description-container my-4">
                <div className="commissions-page-card-description">
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
            <div className="commissions-page-card-bottom-content w-full inline-flex justify-between items-center">
              <span className="commissions-page-card-price m-4 p-1 inline-flex">
                $<div className="tracking-wide">&nbsp;30&nbsp;&nbsp;</div>
                <div className="text-gray-600 dark:text-gray-300/95 tracking-tight">
                  (PayPal/Kofi)
                </div>
              </span>
              <ZDAButton
                clickCallback={() => clickLink(formLink)}
                textContent="Commission Form"
              />
            </div>
          </div>
        </div>
        <div className="commissions-page-card-container w-11/12 md:w-4/5 xl:w-1/3 h-full mx-2 my-4 rounded-xl bg-gradient-to-b sm:bg-gradient-to-tl from-zdaBG-lightCard dark:from-zdaBG-darkCard to-zdaRed-100 dark:to-zdaRedpink-600 border-0 dark:border-0 border-gray-200 dark:border-neutral-900 drop-shadow-card-light dark:drop-shadow-card-dark">
          <div className="commissions-page-card">
            <div className="commissions-page-card-title-container flex flex-col justify-center items-center my-2 sm:my-4">
              <div className="grid">
                <img
                  src={theme === "dark" ? v_dark : v_light}
                  alt="Vectorize Logo"
                  className="z-10 col-start-1 row-start-1 h-12 w-12 my-1 object-cover object-center rounded-full border border-transparent select-none"
                />
                <div className="z-20 col-start-1 row-start-1 h-12 w-12 my-1 rounded-full bg-transparent border-2 border-transparent hover:border-zdaRedpink-700 dark:border-gray-300 dark:hover:border-gray-600 motion-safe:transition-all motion-safe:duration-150 ease-out select-none" />
              </div>
              <span className="commissions-page-card-title flex text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
                Vectorize
              </span>
            </div>
            <CardBreak />
            <div className="commissions-page-card-content mx-4 my-6 sm:my-8 relative flex flex-col sm:flex-row justify-between items-center">
              <img
                onClick={() => setIdx_vectorize(0)}
                src={photosAboutThumbnail[1].src}
                alt={photosAboutThumbnail[1].alt}
                title={photosAboutThumbnail[1].title}
                className="about-img02 z-10 h-full max-w-96 my-4 aspect-[14/9] object-cover object-center rounded-xl brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
              />
              <div className="commissions-page-card-description-container my-4">
                <div className="commissions-page-card-description">
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
            <div className="commissions-page-card-bottom-content w-full inline-flex justify-between items-center">
              <span className="commissions-page-card-price m-4 p-1 inline-flex">
                $<div className="tracking-wide">&nbsp;30&nbsp;&nbsp;</div>
                <div className="text-gray-600 dark:text-gray-300/95 tracking-tight">
                  (PayPal/Kofi)
                </div>
              </span>
              <ZDAButton
                clickCallback={() => clickLink(formLink)}
                textContent="Commission Form"
              />
            </div>
          </div>
        </div>
        <div className="commissions-page-card-container w-11/12 md:w-4/5 xl:w-1/3 h-full mx-2 my-4 rounded-xl bg-gradient-to-b sm:bg-gradient-to-tl from-zdaBG-lightCard dark:from-zdaBG-darkCard to-zdaRed-100 dark:to-zdaRedpink-600 border-0 dark:border-0 border-gray-200 dark:border-neutral-900 drop-shadow-card-light dark:drop-shadow-card-dark">
          <div className="commissions-page-card">
            <div className="commissions-page-card-title-container flex flex-col justify-center items-center my-2 sm:my-4">
              <div className="grid">
                <img
                  src={theme === "dark" ? c_dark : c_light}
                  alt="Coalesce Logo"
                  className="z-10 col-start-1 row-start-1 h-12 w-12 my-1 object-cover object-center rounded-full border border-transparent select-none"
                />
                <div className="z-20 col-start-1 row-start-1 h-12 w-12 my-1 rounded-full bg-transparent border-2 border-transparent hover:border-zdaRedpink-700 dark:border-gray-300 dark:hover:border-gray-600 motion-safe:transition-all motion-safe:duration-150 ease-out select-none" />
              </div>
              <span className="commissions-page-card-title flex text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
                Coalesce
              </span>
            </div>
            <CardBreak />
            <div className="commissions-page-card-content mx-4 my-6 sm:my-8 relative flex flex-col sm:flex-row justify-between items-center">
              <img
                onClick={() => setIdx_coalesce(0)}
                src={photosAboutThumbnail[1].src}
                alt={photosAboutThumbnail[1].alt}
                title={photosAboutThumbnail[1].title}
                className="about-img02 z-10 h-full max-w-96 my-4 aspect-[14/9] object-cover object-center rounded-xl brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
              />
              <div className="commissions-page-card-description-container my-4">
                <div className="commissions-page-card-description">
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
            <div className="commissions-page-card-bottom-content w-full inline-flex justify-between items-center">
              <span className="commissions-page-card-price m-4 p-1 inline-flex">
                $<div className="tracking-wide">&nbsp;45&nbsp;&nbsp;</div>
                <div className="text-gray-600 dark:text-gray-300/95 tracking-tight">
                  (PayPal/Kofi)
                </div>
              </span>
              <ZDAButton
                clickCallback={() => clickLink(formLink)}
                textContent="Commission Form"
              />
            </div>
          </div>
        </div>
      </div>
      <span className="commissions-page-btm-comm-text italic text-slate-600 dark:text-gray-300 tracking-tight select-none">
        If you are interested, <br className="block sm:hidden" /> you can
        commission me directly here:
      </span>
      {/* Desktop/Tablet Only - Show/Hide Form directly in page */}
      <ZDAButton
        clickCallback={() => setFormVisible(!formVisible)}
        textContent={
          formVisible ? "Hide Commissions Form" : "Show Commissions Form"
        }
      />
      {/* Mobile Only - Open form in new tab */}
      <ZDAButton
        clickCallback={() => clickLink(formLink)}
        textContent="Commissions Form"
        variant="mobile"
      />
      {formLoading && (
        <span className="inline-flex justify-center items-center gap-2">
          <MiniSpinner theme={theme} />
          Loading form...
        </span>
      )}
      {formVisible && (
        <object
          data={formLink}
          type="text/html"
          style={{
            width: "100%",
            height: "600px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
          onLoad={() => setFormLoading(false)}
        >
          Commissions Form
        </object>
      )}
      <SectionBreak />
      <div className="commissions-page-promo-container mt-[40px]"></div>
      <div>TODO: Print Shop promo...</div>
      <div>TODO: Payment methods promo...</div>
    </div>
  );
};

export default CommissionsPage;
