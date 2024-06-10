import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../states/themeAtom";
import { clickLink, loadImgHandler, scrollToSection } from "../helpers";
import MiniSpinner from "../components/MiniSpinner";
import ZDAButton from "../components/ZDAButton";
import CardBreak from "../components/CardBreak";
import SectionBreak from "../components/SectionBreak";
import {
  photosCommissionsAbstractifyThumbnail,
  photosCommissionsCoalesceThumbnail,
  photosCommissionsVectorizeThumbnail,
} from "../thumbnailInfo";
import a_dark from "/comm-a-dark.svg";
import a_light from "/comm-a-light.svg";
import c_dark from "/comm-c-dark.svg";
import c_light from "/comm-c-light.svg";
import v_dark from "/comm-v-dark.svg";
import v_light from "/comm-v-light.svg";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { MdClosedCaption, MdClosedCaptionDisabled } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import {
  photosCommissionsAbstractify,
  photosCommissionsCoalesce,
  photosCommissionsVectorize,
} from "../lightboxInfo";

const CommissionsPage = () => {
  const theme = useRecoilValue(themeAtom);
  const [idx_abstractify, setIdx_abstractify] = React.useState(-1);
  const [idx_vectorize, setIdx_vectorize] = React.useState(-1);
  const [idx_coalesce, setIdx_coalesce] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const captionsRef = React.useRef(null) as any;
  const [formVisible, setFormVisible] = React.useState(false);
  const [formLoading, setFormLoading] = React.useState(false);
  const [formScroll, setFormScroll] = React.useState(false);
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScvPym9fjD6IxPcJ1xGK8gm3YT9QKuqL-sOYjiab1AohuxDsg/viewform?usp=sf_link"; // ! TODO: replace with real, updated ZDACommForm link later!
  const formSection = "comm-form-section";
  const infoLink = "https://tinyurl.com/ZDACommInfo6"; // ! TODO: replace with updated comm info link later!

  const commFormClickHandler = () => {
    setFormScroll(true);
    setFormVisible(true);
  };

  React.useEffect(() => {
    setFormLoading(formVisible);
  }, [formVisible]);

  React.useEffect(() => {
    if (formScroll && formVisible) {
      scrollToSection(formSection);
      setFormScroll(false); // reset
    }
  }, [formScroll, formVisible]);

  return (
    <div className="commissions-page-container w-full flex flex-col justify-center items-center">
      <div className="commissions-page-cards-container w-full md:w-[calc(100%-32px)] h-full mb-[48px] py-4 sm:py-8 xl:py-12 flex flex-col justify-center items-center gap-0 sm:gap-4 xl:gap-8 rounded-2xl bg-zdaBG-lighterCard/75 dark:bg-zdaBG-darkerCard/30 border border-gray-200/20 dark:border-neutral-900/20">
        {/* TODO: finish/revise common items to better fit info form before finalizing */}
        <div className="commissions-page-common-description-container flex flex-col flex-wrap gap-4 m-2 sm:mb-0 px-8 select-none">
          <span className="commissions-page-common-title italic">
            For all commissions:
          </span>
          <div className="commissions-page-common-items flex flex-col justify-center items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300/95">
            <span className="commissions-page-common-item">
              &mdash;&nbsp;&nbsp;They will focus on colors/contrast/textures
              with effects and layers used to achieve best
              result&nbsp;&nbsp;&mdash;
            </span>
            <span className="commissions-page-common-item">
              &mdash;&nbsp;&nbsp;They will be delivered digitally (in PNG/SVG
              and JPG if needed)&nbsp;&nbsp;&mdash;
            </span>
            <span className="commissions-page-common-item">
              &mdash;&nbsp;&nbsp;There will be discussion of desired result, but
              no initial sketch will be provided&nbsp;&nbsp;&mdash;
            </span>
            <span className="commissions-page-common-subitem italic font-semibold">
              &nbsp;&nbsp;NOTE: for art created in Procreate, a timelapse video
              and some WIPs can be provided&nbsp;&nbsp;
            </span>
            <span className="commissions-page-common-item">
              &mdash;&nbsp;&nbsp;Any commission requests can be
              refused&nbsp;&nbsp;&mdash;
            </span>
          </div>
        </div>
        <div className="commissions-page-comm-info my-3 sm:my-0 sm:mt-3 inline-block text-gray-600 dark:text-gray-300 tracking-wide select-none">
          For full commission information, click{" "}
          <p
            className="home-page-text-link inline-block italic font-semibold text-zdaRedpink-600 dark:text-zdaRed-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaRedpink-600 dark:hover:border-zdaRed-600 motion-safe:transition-colors motion-safe:duration-300 ease-out cursor-pointer"
            onClick={() => clickLink(infoLink)}
          >
            here
          </p>
          .
        </div>
        {/* // ? Abstractify */}
        <div className="commissions-page-card-container flex flex-col min-w-[35%] max-w-full h-full mx-4 my-4 p-4 gap-4 rounded-xl bg-gradient-to-t sm:bg-gradient-to-tl from-zdaBG-lightCard dark:from-zdaBG-darkCard to-zdaRed-100 dark:to-gray-700 drop-shadow-card-sm-light sm:drop-shadow-card-light dark:drop-shadow-card-sm-dark dark:sm:drop-shadow-card-dark">
          <div className="commissions-page-card-img-and-btn-container rounded-t-xl rounded-b-none self-stretch relative flex flex-col -mt-4 -mx-4 pb-4">
            <div className="commissions-page-card-img-container grid">
              <img
                src={photosCommissionsAbstractifyThumbnail[0].blurSrc}
                alt={photosCommissionsAbstractifyThumbnail[0].alt}
                title="Click for more examples"
                className="comm-img01b z-20 col-start-1 row-start-1 w-full max-h-64 sm:max-h-80 lg:max-h-96 aspect-[14/9] object-cover object-center rounded-t-xl rounded-b-none select-none cursor-pointer"
                loading="lazy"
              />
              <img
                onClick={() => setIdx_abstractify(0)}
                onLoad={() => loadImgHandler("comm-img01")}
                src={photosCommissionsAbstractifyThumbnail[0].src}
                alt={photosCommissionsAbstractifyThumbnail[0].alt}
                title="Click for more examples"
                className="hidden comm-img01 z-10 col-start-1 row-start-1 w-full max-h-64 sm:max-h-80 lg:max-h-96 aspect-[14/9] object-cover object-center rounded-t-xl rounded-b-none brightness-[.96] motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] select-none cursor-pointer"
              />
            </div>
            <div className="commissions-page-card-logo-container grid absolute z-10 right-[calc(50%-1.5rem)] bottom-4 translate-y-1/2">
              <img
                src={theme === "dark" ? a_dark : a_light}
                alt="Abstractify Logo"
                className="commissions-page-card-logo z-30 col-start-1 row-start-1 h-12 w-12 my-1 object-cover object-center rounded-full border border-transparent select-none"
              />
              <div className="commissions-page-card-logo-overlay z-40 col-start-1 row-start-1 h-12 w-12 my-1 rounded-full bg-transparent border-2 border-zdaRedpink-900/80 hover:border-zdaRedpink-700 dark:border-gray-300 dark:hover:border-gray-600 motion-safe:transition-all motion-safe:duration-150 ease-out select-none" />
            </div>
          </div>
          <div className="commissions-page-card-middle-container justify-center items-center">
            <span className="commissions-page-card-title flex justify-center items-center text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
              Abstractify
            </span>
            <div className="commissions-page-card-description-container my-2 flex flex-col md:inline-flex md:flex-row text-base md:text-sm lg:text-base items-center select-none">
              <div className="commissions-page-card-description">
                Made in Procreate
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Transform idea into digital abstract painting
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Ready in 2-3 days
              </div>
            </div>
            <div className="commissions-page-card-clickformore text-sm italic mt-2 sm:mt-0 text-gray-600 dark:text-gray-300/95 tracking-tight select-none">
              (Click image for more examples)
            </div>
          </div>
          <CardBreak />
          <div className="commissions-page-card-bottom-content w-full flex flex-col sm:inline-flex sm:flex-row justify-between items-center select-none">
            <span className="commissions-page-card-price m-0 sm:m-4 p-1 inline-flex justify-center items-center">
              $<div className="tracking-wide">&nbsp;30&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-300/95 tracking-tight">
                (PayPal/Kofi)
              </div>
              <CardBreak isVertical />
            </span>
            {/* Mobile Only - Opens in new tab */}
            <div className="block md:hidden">
              <ZDAButton
                clickCallback={() => clickLink(formLink)}
                textContent="Commission Form"
                variant="mobile"
              />
            </div>
            {/* Tablet/Desktop Only - opens embedded form and scrolls down */}
            <div className="hidden md:block">
              <ZDAButton
                clickCallback={() => commFormClickHandler()}
                textContent="Commission Form"
              />
            </div>
          </div>
        </div>
        <Lightbox
          plugins={[Captions]}
          captions={{
            ref: captionsRef,
            showToggle: true,
            descriptionTextAlign: "center",
          }}
          on={{
            click: () => {
              (captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show)?.();
            },
          }}
          index={idx_abstractify}
          render={{
            iconCaptionsVisible: () => <MdClosedCaption size={28} />,
            iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
            iconClose: () => <IoMdCloseCircle size={28} />,
          }}
          slides={photosCommissionsAbstractify}
          styles={{
            container: {
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(0,0,0,0.8)",
            },
            captionsTitle: {
              fontSize: "16px",
              fontWeight: "300",
            },
            captionsTitleContainer: {
              height: "46px",
              position: "absolute",
              bottom: "0",
              left: "0",
              top: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          open={idx_abstractify >= 0}
          close={() => setIdx_abstractify(-1)}
        />
        {/* // ? Vectorize */}
        <div className="commissions-page-card-container flex flex-col min-w-[35%] max-w-full h-full mx-4 my-4 p-4 gap-4 rounded-xl bg-gradient-to-t sm:bg-gradient-to-tl from-zdaBG-lightCard dark:from-zdaBG-darkCard to-zdaRed-100 dark:to-gray-700 drop-shadow-card-sm-light sm:drop-shadow-card-light dark:drop-shadow-card-sm-dark dark:sm:drop-shadow-card-dark">
          <div className="commissions-page-card-img-and-btn-container rounded-t-xl rounded-b-none self-stretch relative flex flex-col -mt-4 -mx-4 pb-4">
            <div className="commissions-page-card-img-container grid">
              <img
                onClick={() => setIdx_vectorize(0)}
                src={photosCommissionsVectorizeThumbnail[0].src}
                alt={photosCommissionsVectorizeThumbnail[0].alt}
                title="Click for more examples"
                className="comm-img02 z-10 col-start-1 row-start-1 w-full max-h-64 sm:max-h-80 lg:max-h-96 aspect-[14/9] object-cover object-center rounded-t-xl rounded-b-none brightness-[.96] motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] select-none cursor-pointer"
                style={{ ...{ zoom: "1.05" } }}
              />
            </div>
            <div className="commissions-page-card-logo-container grid absolute z-10 right-[calc(50%-1.5rem)] bottom-4 translate-y-1/2">
              <img
                src={theme === "dark" ? v_dark : v_light}
                alt="Vectorize Logo"
                className="commissions-page-card-logo z-30 col-start-1 row-start-1 h-12 w-12 my-1 object-cover object-center rounded-full border border-transparent select-none"
              />
              <div className="commissions-page-card-logo-overlay z-40 col-start-1 row-start-1 h-12 w-12 my-1 rounded-full bg-transparent border-2 border-zdaRedpink-900/80 hover:border-zdaRedpink-700 dark:border-gray-300 dark:hover:border-gray-600 motion-safe:transition-all motion-safe:duration-150 ease-out select-none" />
            </div>
          </div>
          <div className="commissions-page-card-middle-container justify-center items-center">
            <span className="commissions-page-card-title flex justify-center items-center text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
              Vectorize
            </span>
            <div className="commissions-page-card-description-container my-2 flex flex-col md:inline-flex md:flex-row text-base md:text-sm lg:text-base items-center select-none">
              <div className="commissions-page-card-description">
                Made in Inkscape
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Translate idea into vector art/logo/design
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Ready in 2-3 days
              </div>
            </div>
            <div className="commissions-page-card-clickformore text-sm italic mt-2 sm:mt-0 text-gray-600 dark:text-gray-300/95 tracking-tight select-none">
              (Click image for more examples)
            </div>
          </div>
          <CardBreak />
          <div className="commissions-page-card-bottom-content w-full flex flex-col sm:inline-flex sm:flex-row justify-between items-center select-none">
            <span className="commissions-page-card-price m-0 sm:m-4 p-1 inline-flex justify-center items-center">
              $<div className="tracking-wide">&nbsp;30&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-300/95 tracking-tight">
                (PayPal/Kofi)
              </div>
              <CardBreak isVertical />
            </span>
            {/* Mobile Only - Opens in new tab */}
            <div className="block md:hidden">
              <ZDAButton
                clickCallback={() => clickLink(formLink)}
                textContent="Commission Form"
                variant="mobile"
              />
            </div>
            {/* Tablet/Desktop Only - opens embedded form and scrolls down */}
            <div className="hidden md:block">
              <ZDAButton
                clickCallback={() => commFormClickHandler()}
                textContent="Commission Form"
              />
            </div>
          </div>
        </div>
        <Lightbox
          plugins={[Captions]}
          captions={{
            ref: captionsRef,
            showToggle: true,
            descriptionTextAlign: "center",
          }}
          on={{
            click: () => {
              (captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show)?.();
            },
          }}
          index={idx_vectorize}
          render={{
            iconCaptionsVisible: () => <MdClosedCaption size={28} />,
            iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
            iconClose: () => <IoMdCloseCircle size={28} />,
          }}
          slides={photosCommissionsVectorize}
          styles={{
            container: {
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(0,0,0,0.8)",
            },
            captionsTitle: {
              fontSize: "16px",
              fontWeight: "300",
            },
            captionsTitleContainer: {
              height: "46px",
              position: "absolute",
              bottom: "0",
              left: "0",
              top: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          open={idx_vectorize >= 0}
          close={() => setIdx_vectorize(-1)}
        />
        {/* // ? Coalesce */}
        <div className="commissions-page-card-container flex flex-col min-w-[35%] max-w-full h-full mx-4 my-4 p-4 gap-4 rounded-xl bg-gradient-to-t sm:bg-gradient-to-tl from-zdaBG-lightCard dark:from-zdaBG-darkCard to-zdaRed-100 dark:to-gray-700 drop-shadow-card-sm-light sm:drop-shadow-card-light dark:drop-shadow-card-sm-dark dark:sm:drop-shadow-card-dark">
          <div className="commissions-page-card-img-and-btn-container rounded-t-xl rounded-b-none self-stretch relative flex flex-col -mt-4 -mx-4 pb-4">
            <div className="commissions-page-card-img-container grid">
              <img
                src={photosCommissionsCoalesceThumbnail[0].blurSrc}
                alt={photosCommissionsCoalesceThumbnail[0].alt}
                title="Click for more examples"
                className="comm-img03b z-20 col-start-1 row-start-1 w-full max-h-64 sm:max-h-80 lg:max-h-96 aspect-[14/9] object-cover object-center rounded-t-xl rounded-b-none select-none cursor-pointer"
                loading="lazy"
              />
              <img
                onClick={() => setIdx_coalesce(0)}
                onLoad={() => loadImgHandler("comm-img03")}
                src={photosCommissionsCoalesceThumbnail[0].src}
                alt={photosCommissionsCoalesceThumbnail[0].alt}
                title="Click for more examples"
                className="hidden comm-img03 z-10 col-start-1 row-start-1 w-full max-h-64 sm:max-h-80 lg:max-h-96 aspect-[14/9] object-cover object-center rounded-t-xl rounded-b-none brightness-[.96] motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] select-none cursor-pointer"
              />
            </div>
            <div className="commissions-page-card-logo-container grid absolute z-10 right-[calc(50%-1.5rem)] bottom-4 translate-y-1/2">
              <img
                src={theme === "dark" ? c_dark : c_light}
                alt="Coalesce Logo"
                className="commissions-page-card-logo z-30 col-start-1 row-start-1 h-12 w-12 my-1 object-cover object-center rounded-full border border-transparent select-none"
              />
              <div className="commissions-page-card-logo-overlay z-40 col-start-1 row-start-1 h-12 w-12 my-1 rounded-full bg-transparent border-2 border-zdaRedpink-900/80 hover:border-zdaRedpink-700 dark:border-gray-300 dark:hover:border-gray-600 motion-safe:transition-all motion-safe:duration-150 ease-out select-none" />
            </div>
          </div>
          <div className="commissions-page-card-middle-container justify-center items-center">
            <span className="commissions-page-card-title flex justify-center items-center text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
              Coalesce
            </span>
            <div className="commissions-page-card-description-container my-2 flex flex-col md:inline-flex md:flex-row text-base md:text-sm lg:text-base items-center select-none">
              <div className="commissions-page-card-description">
                Made in Procreate/Inkscape/PSP
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Fusion of abstract painting and vector art
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Ready in 3-5 days
              </div>
            </div>
            <div className="commissions-page-card-clickformore text-sm italic mt-2 sm:mt-0 text-gray-600 dark:text-gray-300/95 tracking-tight select-none">
              (Click image for more examples)
            </div>
          </div>
          <CardBreak />
          <div className="commissions-page-card-bottom-content w-full flex flex-col sm:inline-flex sm:flex-row justify-between items-center select-none">
            <span className="commissions-page-card-price m-0 sm:m-4 p-1 inline-flex justify-center items-center">
              $<div className="tracking-wide">&nbsp;45&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-300/95 tracking-tight">
                (PayPal/Kofi)
              </div>
              <CardBreak isVertical />
            </span>
            {/* Mobile Only - Opens in new tab */}
            <div className="block md:hidden">
              <ZDAButton
                clickCallback={() => clickLink(formLink)}
                textContent="Commission Form"
                variant="mobile"
              />
            </div>
            {/* Tablet/Desktop Only - opens embedded form and scrolls down */}
            <div className="hidden md:block">
              <ZDAButton
                clickCallback={() => commFormClickHandler()}
                textContent="Commission Form"
              />
            </div>
          </div>
        </div>
        <Lightbox
          plugins={[Captions]}
          captions={{
            ref: captionsRef,
            showToggle: true,
            descriptionTextAlign: "center",
          }}
          on={{
            click: () => {
              (captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show)?.();
            },
          }}
          index={idx_coalesce}
          render={{
            iconCaptionsVisible: () => <MdClosedCaption size={28} />,
            iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
            iconClose: () => <IoMdCloseCircle size={28} />,
          }}
          slides={photosCommissionsCoalesce}
          styles={{
            container: {
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(0,0,0,0.8)",
            },
            captionsTitle: {
              fontSize: "16px",
              fontWeight: "300",
            },
            captionsTitleContainer: {
              height: "46px",
              position: "absolute",
              bottom: "0",
              left: "0",
              top: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          open={idx_coalesce >= 0}
          close={() => setIdx_coalesce(-1)}
        />
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
      {/* 1px Form Section to Scroll To */}
      <div
        className="commissions-page-form-section h-px w-px mt-px"
        id={formSection}
      />
      {/* Embedded Commissions Form */}
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
