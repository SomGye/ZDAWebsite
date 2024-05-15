import * as React from "react";
import SectionIndicator from "../components/SectionIndicator";
import SectionBreak from "../components/SectionBreak";
import {
  photosPortfolio4kWallsThumbnail,
  photosPortfolioAlbumArtThumbnail,
  photosPortfolioPostersThumbnail,
} from "../thumbnailInfo";
import {
  photosPortfolio4kWalls,
  photosPortfolioAlbumArt,
  photosPortfolioPosters1,
  photosPortfolioPosters2,
  photosPortfolioPosters3,
} from "../lightboxInfo";
import { loadImgHandler } from "../helpers";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { MdClosedCaption, MdClosedCaptionDisabled } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const PortfolioPage = () => {
  const [idx_posters1, setIdx_posters1] = React.useState(-1);
  const [idx_posters2, setIdx_posters2] = React.useState(-1);
  const [idx_posters3, setIdx_posters3] = React.useState(-1);
  const [idx_albumart, setIdx_albumart] = React.useState(-1);
  const [idx_4kwalls, setIdx_4kwalls] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const captionsRef = React.useRef(null) as any;

  return (
    // TODO: adjust the text width and word-wrap/line-breaks for diff screen sizes
    // TODO: add a 'Jump To' arrow button for each section (like just down arrow on 1st, up/down in mid, and just up arrow on last)
    // TODO: Finish nav bar styling for desktop/tablet
    // TODO: alternate vertical nav bar for mobile
    // TODO: do nav bar jump-to functionality
    <div className="portfolio-page-container w-full flex flex-col justify-center items-center">
      <div className="hidden sm:inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-l border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-200 ease-out select-none"
        >
          Posters
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-200 ease-out select-none"
        >
          Album Arts
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-200 ease-out select-none"
        >
          4K Walls
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-200 ease-out select-none"
        >
          Phone Walls
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-200 ease-out select-none"
        >
          Ultrawide
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-200 ease-out select-none"
        >
          Square
        </button>
      </div>
      <SectionIndicator sectionName="Posters" />
      <div className="portfolio-posters-subcontainer max-w-fit">
        <div className="portfolio-posters-container-left w-full flex flex-col px-4 md:pl-5 md:flex-row justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-left flex flex-col md:flex-row-reverse items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-left flex flex-col justify-center md:justify-start items-center md:ml-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[0].title}
              </span>
              <p className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                A terrifying mix of striking red splatters and streaks
                <br /> over a shockingly dark red backdrop,
                <br /> framed by inverse colors to further highlight
                <div className="italic font-semibold tracking-wide">
                  {"the boldness of the middle."}
                </div>
              </p>
            </div>
            <img
              src={photosPortfolioPostersThumbnail[0].blurSrc}
              alt={photosPortfolioPostersThumbnail[0].alt}
              title={photosPortfolioPostersThumbnail[0].title}
              className="portfolio-posters-img01b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_posters1(0)}
              onLoad={() => loadImgHandler("portfolio-posters-img01")}
              src={photosPortfolioPostersThumbnail[0].src}
              alt={photosPortfolioPostersThumbnail[0].alt}
              title={photosPortfolioPostersThumbnail[0].title}
              className="hidden portfolio-posters-img01 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              A terrifying mix of striking red splatters and streaks
              <br /> over a shockingly dark red backdrop,
              <br /> framed by inverse colors to further highlight
              <div className="italic font-semibold tracking-wide">
                {"the boldness of the middle."}
              </div>
            </p>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-posters-container-right w-full flex flex-col pl-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[1].title}
              </span>
              <p className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"A piece of muted yet whimsical graphic design,"}
                </div>
                racing stripes dash across the middle
                <br /> while a gray sphere hides a
                <br /> subtle blue gradient,
                <br /> over a dotted backdrop.
              </p>
            </div>
            <img
              onClick={() => setIdx_posters1(1)}
              src={photosPortfolioPostersThumbnail[1].src}
              alt={photosPortfolioPostersThumbnail[1].alt}
              title={photosPortfolioPostersThumbnail[1].title}
              className="portfolio-posters-img02 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                {"A piece of muted yet whimsical graphic design,"}
              </div>
              racing stripes dash across the middle
              <br /> while a gray sphere hides a
              <br /> subtle blue gradient,
              <br /> over a dotted backdrop.
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio-posters-subcontainer max-w-fit">
        <div className="portfolio-posters-container-left w-full flex flex-col px-4 md:pl-5 md:flex-row justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-left flex flex-col md:flex-row-reverse items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-left flex flex-col justify-center md:justify-start items-center md:ml-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[2].title}
              </span>
              <p className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                A dark red rose comprised of sharp, deadly lines
                <br /> with edges of a haunting past looming overhead.
                <div className="italic font-semibold tracking-wide">
                  {"This flower holds a troublesome tale."}
                </div>
              </p>
            </div>
            <img
              onClick={() => setIdx_posters1(2)}
              src={photosPortfolioPostersThumbnail[2].src}
              alt={photosPortfolioPostersThumbnail[2].alt}
              title={photosPortfolioPostersThumbnail[2].title}
              className="portfolio-posters-img03 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              A dark red rose comprised of sharp, deadly lines
              <br /> with edges of a haunting past looming overhead.
              <div className="italic font-semibold tracking-wide">
                {"This flower holds a troublesome tale."}
              </div>
            </p>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-posters-container-right w-full flex flex-col pl-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[3].title}
              </span>
              <p className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"A wild whiplash of colors and strokes"}
                </div>
                shows bold whimsy and visual flavor;
                <br /> an endless palette awaits.
              </p>
            </div>
            <img
              src={photosPortfolioPostersThumbnail[3].blurSrc}
              alt={photosPortfolioPostersThumbnail[3].alt}
              title={photosPortfolioPostersThumbnail[3].title}
              className="portfolio-posters-img04b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_posters1(3)}
              onLoad={() => loadImgHandler("portfolio-posters-img04")}
              src={photosPortfolioPostersThumbnail[3].src}
              alt={photosPortfolioPostersThumbnail[3].alt}
              title={photosPortfolioPostersThumbnail[3].title}
              className="portfolio-posters-img04 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                {"A wild whiplash of colors and strokes"}
              </div>
              shows bold whimsy and visual flavor;
              <br /> an endless palette awaits.
            </p>
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
        index={idx_posters1}
        render={{
          iconCaptionsVisible: () => <MdClosedCaption size={28} />,
          iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
          iconClose: () => <IoMdCloseCircle size={28} />,
        }}
        slides={photosPortfolioPosters1}
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
        open={idx_posters1 >= 0}
        close={() => setIdx_posters1(-1)}
      />
      <div className="portfolio-posters-subcontainer max-w-fit">
        <div className="portfolio-posters-container-left w-full flex flex-col px-4 md:pl-5 md:flex-row justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-left flex flex-col md:flex-row-reverse items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-left flex flex-col justify-center md:justify-start items-center md:ml-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[4].title}
              </span>
              <p className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                Tendrils of outlandish energy and color,
                <br /> both emanating outward and surging within,
                <div className="italic font-semibold tracking-wide">
                  {"highlighting vivid, untamed contrast."}
                </div>
              </p>
            </div>
            <img
              src={photosPortfolioPostersThumbnail[4].blurSrc}
              alt={photosPortfolioPostersThumbnail[4].alt}
              title={photosPortfolioPostersThumbnail[4].title}
              className="portfolio-posters-img05b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_posters2(0)}
              onLoad={() => loadImgHandler("portfolio-posters-img05")}
              src={photosPortfolioPostersThumbnail[4].src}
              alt={photosPortfolioPostersThumbnail[4].alt}
              title={photosPortfolioPostersThumbnail[4].title}
              className="hidden portfolio-posters-img05 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              Tendrils of outlandish energy and color,
              <br /> both emanating outward and surging within,
              <div className="italic font-semibold tracking-wide">
                {"highlighting vivid, untamed contrast."}
              </div>
            </p>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-posters-container-right w-full flex flex-col pl-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[5].title}
              </span>
              <p className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"A mystical frame acts as a portal between worlds:"}
                </div>
                Impossibly powerful rings hold colorful energy,
                <br /> while imagination breaks beyond the boundaries.
              </p>
            </div>
            <img
              src={photosPortfolioPostersThumbnail[5].blurSrc}
              alt={photosPortfolioPostersThumbnail[5].alt}
              title={photosPortfolioPostersThumbnail[5].title}
              className="portfolio-posters-img06b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_posters2(1)}
              onLoad={() => loadImgHandler("portfolio-posters-img06")}
              src={photosPortfolioPostersThumbnail[5].src}
              alt={photosPortfolioPostersThumbnail[5].alt}
              title={photosPortfolioPostersThumbnail[5].title}
              className="portfolio-posters-img06 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                {"A mystical frame acts as a portal between worlds:"}
              </div>
              Impossibly powerful rings hold colorful energy,
              <br /> while imagination breaks beyond the boundaries.
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio-posters-subcontainer max-w-fit">
        <div className="portfolio-posters-container-left w-full flex flex-col px-4 md:pl-5 md:flex-row justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-left flex flex-col md:flex-row-reverse items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-left flex flex-col justify-center md:justify-start items-center md:ml-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[6].title}
              </span>
              <p className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                Softly blurred zones of colors
                <br /> hug the wispy, fraying beam of force,
                <div className="italic font-semibold tracking-wide">
                  {"bestowing the eyes with visions of lucidity."}
                </div>
              </p>
            </div>
            <img
              src={photosPortfolioPostersThumbnail[6].blurSrc}
              alt={photosPortfolioPostersThumbnail[6].alt}
              title={photosPortfolioPostersThumbnail[6].title}
              className="portfolio-posters-img07b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_posters2(2)}
              onLoad={() => loadImgHandler("portfolio-posters-img07")}
              src={photosPortfolioPostersThumbnail[6].src}
              alt={photosPortfolioPostersThumbnail[6].alt}
              title={photosPortfolioPostersThumbnail[6].title}
              className="hidden portfolio-posters-img07 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              Softly blurred zones of colors
              <br /> hug the wispy, fraying beam of force,
              <div className="italic font-semibold tracking-wide">
                {"bestowing the eyes with visions of lucidity."}
              </div>
            </p>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-posters-container-right w-full flex flex-col pl-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[7].title}
              </span>
              <p className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"The divination of a fiercesome character"}
                </div>
                bestows a livid and terrifying aura,
                <br /> beset by ferocious flames.
              </p>
            </div>
            <img
              src={photosPortfolioPostersThumbnail[7].blurSrc}
              alt={photosPortfolioPostersThumbnail[7].alt}
              title={photosPortfolioPostersThumbnail[7].title}
              className="portfolio-posters-img08b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_posters2(3)}
              onLoad={() => loadImgHandler("portfolio-posters-img08")}
              src={photosPortfolioPostersThumbnail[7].src}
              alt={photosPortfolioPostersThumbnail[7].alt}
              title={photosPortfolioPostersThumbnail[7].title}
              className="portfolio-posters-img08 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                {"The divination of a fiercesome character"}
              </div>
              bestows a livid and terrifying aura,
              <br /> beset by ferocious flames.
            </p>
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
        index={idx_posters2}
        render={{
          iconCaptionsVisible: () => <MdClosedCaption size={28} />,
          iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
          iconClose: () => <IoMdCloseCircle size={28} />,
        }}
        slides={photosPortfolioPosters2}
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
        open={idx_posters2 >= 0}
        close={() => setIdx_posters2(-1)}
      />
      <div className="portfolio-posters-showcase w-full sm:w-11/12 flex flex-col md:flex-row justify-center items-center mx-4 my-6 border border-solid md:border-none rounded-md border-slate-300/50 dark:border-slate-700/20 shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)] md:shadow-none dark:md:shadow-none">
        <div className="portfolio-posters-showcase-img-container flex flex-col md:flex-row flex-wrap md:grid md:grid-cols-2 2xl:flex justify-center items-center gap-0 md:gap-2 px-0 xs:px-8 py-4 md:py-8 2xl:py-4 my-1 sm:my-0 border-none md:border-solid border rounded-md border-slate-300/50 dark:border-slate-700/20 drop-shadow-md shadow-none md:shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:md:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)]">
          <img
            src={photosPortfolioPostersThumbnail[8].blurSrc}
            alt={photosPortfolioPostersThumbnail[8].alt}
            title={photosPortfolioPostersThumbnail[8].title}
            className="portfolio-posters-img09b z-20 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_posters3(0)}
            onLoad={() => loadImgHandler("portfolio-posters-img09")}
            src={photosPortfolioPostersThumbnail[8].src}
            alt={photosPortfolioPostersThumbnail[8].alt}
            title={photosPortfolioPostersThumbnail[8].title}
            className="hidden portfolio-posters-img09 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosPortfolioPostersThumbnail[9].blurSrc}
            alt={photosPortfolioPostersThumbnail[9].alt}
            title={photosPortfolioPostersThumbnail[9].title}
            className="portfolio-posters-img10b z-20 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_posters3(1)}
            onLoad={() => loadImgHandler("portfolio-posters-img10")}
            src={photosPortfolioPostersThumbnail[9].src}
            alt={photosPortfolioPostersThumbnail[9].alt}
            title={photosPortfolioPostersThumbnail[9].title}
            className="hidden portfolio-posters-img10 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosPortfolioPostersThumbnail[10].blurSrc}
            alt={photosPortfolioPostersThumbnail[10].alt}
            title={photosPortfolioPostersThumbnail[10].title}
            className="portfolio-posters-img11b z-20 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_posters3(2)}
            onLoad={() => loadImgHandler("portfolio-posters-img11")}
            src={photosPortfolioPostersThumbnail[10].src}
            alt={photosPortfolioPostersThumbnail[10].alt}
            title={photosPortfolioPostersThumbnail[10].title}
            className="hidden portfolio-posters-img11 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosPortfolioPostersThumbnail[11].blurSrc}
            alt={photosPortfolioPostersThumbnail[11].alt}
            title={photosPortfolioPostersThumbnail[11].title}
            className="portfolio-posters-img12b z-20 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_posters3(3)}
            onLoad={() => loadImgHandler("portfolio-posters-img12")}
            src={photosPortfolioPostersThumbnail[11].src}
            alt={photosPortfolioPostersThumbnail[11].alt}
            title={photosPortfolioPostersThumbnail[11].title}
            className="hidden portfolio-posters-img12 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
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
            index={idx_posters3}
            render={{
              iconCaptionsVisible: () => <MdClosedCaption size={28} />,
              iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
              iconClose: () => <IoMdCloseCircle size={28} />,
            }}
            slides={photosPortfolioPosters3}
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
            open={idx_posters3 >= 0}
            close={() => setIdx_posters3(-1)}
          />
        </div>
      </div>
      <SectionIndicator sectionName="Album Arts" />
      <div className="portfolio-albumart-subcontainer max-w-fit">
        <div className="portfolio-albumart-container-left w-full flex flex-col px-4 md:pl-5 md:flex-row justify-between items-center mx-auto">
          <div className="portfolio-albumart-title-and-pic-container-left flex flex-col md:flex-row-reverse items-center mx-2 my-4">
            <div className="portfolio-albumart-title-container-left flex flex-col justify-center md:justify-start items-center md:ml-8">
              <span className="portfolio-albumart-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioAlbumArtThumbnail[0].title}
              </span>
              <p className="portfolio-albumart-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                An ominous pyramid fusing reds and pinks,
                <br /> with a powerful energy surging inward;
                <div className="italic font-semibold tracking-wide">
                  {"...a terrifying energy lurks in the middle."}
                </div>
              </p>
            </div>
            <img
              src={photosPortfolioAlbumArtThumbnail[0].blurSrc}
              alt={photosPortfolioAlbumArtThumbnail[0].alt}
              title={photosPortfolioAlbumArtThumbnail[0].title}
              className="portfolio-albumart-img01b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_albumart(0)}
              onLoad={() => loadImgHandler("portfolio-albumart-img01")}
              src={photosPortfolioAlbumArtThumbnail[0].src}
              alt={photosPortfolioAlbumArtThumbnail[0].alt}
              title={photosPortfolioAlbumArtThumbnail[0].title}
              className="hidden portfolio-albumart-img01 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-albumart-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-albumart-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              An ominous pyramid fusing reds and pinks,
              <br /> with a powerful energy surging inward;
              <div className="italic font-semibold tracking-wide">
                {"...a terrifying energy lurks in the middle."}
              </div>
            </p>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-albumart-container-right w-full flex flex-col pl-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-albumart-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-albumart-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-albumart-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioAlbumArtThumbnail[1].title}
              </span>
              <p className="portfolio-albumart-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"Wild energy surrounds a hypnotic lime orb,"}
                </div>
                it's power streaked by hasty dark inks
                <br /> and passionate flames overtaking our world.
              </p>
            </div>
            <img
              onClick={() => setIdx_albumart(1)}
              src={photosPortfolioAlbumArtThumbnail[1].src}
              alt={photosPortfolioAlbumArtThumbnail[1].alt}
              title={photosPortfolioAlbumArtThumbnail[1].title}
              className="portfolio-albumart-img02 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-albumart-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-albumart-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                {"Wild energy surrounds a hypnotic lime orb,"}
              </div>
              it's power streaked by hasty dark inks
              <br /> and passionate flames overtaking our world.
            </p>
          </div>
        </div>
      </div>
      <div className="portfolio-albumart-subcontainer max-w-fit">
        <div className="portfolio-albumart-container-left w-full flex flex-col px-4 md:pl-5 md:flex-row justify-between items-center mx-auto">
          <div className="portfolio-albumart-title-and-pic-container-left flex flex-col md:flex-row-reverse items-center mx-2 my-4">
            <div className="portfolio-albumart-title-container-left flex flex-col justify-center md:justify-start items-center md:ml-8">
              <span className="portfolio-albumart-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioAlbumArtThumbnail[2].title}
              </span>
              <p className="portfolio-albumart-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                A neon prison enraptures an eerie pyramid,
                <br /> followed by a sweeping force of nature,
                <div className="italic font-semibold tracking-wide">
                  {"a river of purple enveloped by swarms of pink."}
                </div>
              </p>
            </div>
            <img
              src={photosPortfolioAlbumArtThumbnail[2].blurSrc}
              alt={photosPortfolioAlbumArtThumbnail[2].alt}
              title={photosPortfolioAlbumArtThumbnail[2].title}
              className="portfolio-albumart-img03b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_albumart(2)}
              onLoad={() => loadImgHandler("portfolio-albumart-img03")}
              src={photosPortfolioAlbumArtThumbnail[2].src}
              alt={photosPortfolioAlbumArtThumbnail[2].alt}
              title={photosPortfolioAlbumArtThumbnail[2].title}
              className="hidden portfolio-albumart-img03 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-albumart-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-albumart-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              A neon prison enraptures an eerie pyramid,
              <br /> followed by a sweeping force of nature,
              <div className="italic font-semibold tracking-wide">
                {"a river of purple enveloped by swarms of pink."}
              </div>
            </p>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-albumart-container-right w-full flex flex-col pl-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-albumart-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-albumart-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-albumart-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioAlbumArtThumbnail[3].title}
              </span>
              <p className="portfolio-albumart-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"An emerald forest destroyed by unseen forces;"}
                </div>
                the reality of the mountain valley,
                <br /> fraying at the edges, like a frail mind.
              </p>
            </div>
            <img
              src={photosPortfolioAlbumArtThumbnail[3].blurSrc}
              alt={photosPortfolioAlbumArtThumbnail[3].alt}
              title={photosPortfolioAlbumArtThumbnail[3].title}
              className="portfolio-albumart-img04b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_albumart(3)}
              onLoad={() => loadImgHandler("portfolio-albumart-img04")}
              src={photosPortfolioAlbumArtThumbnail[3].src}
              alt={photosPortfolioAlbumArtThumbnail[3].alt}
              title={photosPortfolioAlbumArtThumbnail[3].title}
              className="portfolio-albumart-img04 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-albumart-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <p className="portfolio-albumart-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                {"The divination of a fiercesome character"}
              </div>
              bestows a livid and terrifying aura,
              <br /> beset by ferocious flames.
            </p>
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
        index={idx_albumart}
        render={{
          iconCaptionsVisible: () => <MdClosedCaption size={28} />,
          iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
          iconClose: () => <IoMdCloseCircle size={28} />,
        }}
        slides={photosPortfolioAlbumArt}
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
        open={idx_albumart >= 0}
        close={() => setIdx_albumart(-1)}
      />
      <SectionIndicator sectionName="4K Wallpapers/Wide" />
      <div className="portfolio-4kwalls-subcontainer w-full px-4">
        <div className="portfolio-4kwalls-container-top w-full lg:w-3/4 2xl:w-2/3 flex flex-row px-4 justify-center items-center mx-auto">
          <div className="portfolio-4kwalls-title-and-pic-container-top flex flex-col-reverse items-center mx-2 my-4">
            <div className="portfolio-4kwalls-title-container-top flex flex-col justify-center items-center">
              <span className="portfolio-4kwalls-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolio4kWallsThumbnail[0].title}
              </span>
              <p className="portfolio-4kwalls-blurb-md block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"A smooth backdrop of red to blue"}
                </div>
                is marked by wild stray shots of inverse colors
                <br /> and pointed shapes eagerly piercing the view.
              </p>
            </div>
            <img
              onClick={() => setIdx_4kwalls(0)}
              src={photosPortfolio4kWallsThumbnail[0].src}
              alt={photosPortfolio4kWallsThumbnail[0].alt}
              title={photosPortfolio4kWallsThumbnail[0].title}
              className="portfolio-4kwalls-img01 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-4kwalls-container-bottom w-full lg:w-3/4 2xl:w-2/3 flex flex-row px-4 justify-center items-center mx-auto">
          <div className="portfolio-4kwalls-title-and-pic-container-bottom flex flex-col items-center mx-2 my-4">
            <div className="portfolio-4kwalls-title-container-bottom flex flex-col justify-center items-center">
              <span className="portfolio-4kwalls-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolio4kWallsThumbnail[1].title}
              </span>
              <p className="portfolio-4kwalls-blurb-md block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                A burning sun streaked by glinting rays
                <br /> over a hazardous landscape of fiery sands;
                <div className="italic font-semibold tracking-wide">
                  {"only the strongest will rule this land."}
                </div>
              </p>
            </div>
            <img
              src={photosPortfolio4kWallsThumbnail[1].blurSrc}
              alt={photosPortfolio4kWallsThumbnail[1].alt}
              title={photosPortfolio4kWallsThumbnail[1].title}
              className="portfolio-4kwalls-img02b z-20 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_4kwalls(1)}
              onLoad={() => loadImgHandler("portfolio-4kwalls-img02")}
              src={photosPortfolio4kWallsThumbnail[1].src}
              alt={photosPortfolio4kWallsThumbnail[1].alt}
              title={photosPortfolio4kWallsThumbnail[1].title}
              className="hidden portfolio-4kwalls-img02 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
        </div>
      </div>
      <SectionBreak />
      <div className="portfolio-4kwalls-subcontainer w-full px-4">
        <div className="portfolio-4kwalls-container-top w-full lg:w-3/4 2xl:w-2/3 flex flex-row px-4 justify-center items-center mx-auto">
          <div className="portfolio-4kwalls-title-and-pic-container-top flex flex-col-reverse items-center mx-2 my-4">
            <div className="portfolio-4kwalls-title-container-top flex flex-col justify-center items-center">
              <span className="portfolio-4kwalls-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolio4kWallsThumbnail[2].title}
              </span>
              <p className="portfolio-4kwalls-blurb-md block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                Cascading pink particles burst apart,
                <br /> as the photonic wave frays into many hues;
                <div className="italic font-semibold tracking-wide">
                  {"the air is overtaken by the bold and brave radiance."}
                </div>
              </p>
            </div>
            <img
              src={photosPortfolio4kWallsThumbnail[2].blurSrc}
              alt={photosPortfolio4kWallsThumbnail[2].alt}
              title={photosPortfolio4kWallsThumbnail[2].title}
              className="portfolio-4kwalls-img03b z-20 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_4kwalls(2)}
              onLoad={() => loadImgHandler("portfolio-4kwalls-img03")}
              src={photosPortfolio4kWallsThumbnail[2].src}
              alt={photosPortfolio4kWallsThumbnail[2].alt}
              title={photosPortfolio4kWallsThumbnail[2].title}
              className="hidden portfolio-4kwalls-img03 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-4kwalls-container-bottom w-full lg:w-3/4 2xl:w-2/3 flex flex-row px-4 justify-center items-center mx-auto">
          <div className="portfolio-4kwalls-title-and-pic-container-bottom flex flex-col items-center mx-2 my-4">
            <div className="portfolio-4kwalls-title-container-bottom flex flex-col justify-center items-center">
              <span className="portfolio-4kwalls-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolio4kWallsThumbnail[3].title}
              </span>
              <p className="portfolio-4kwalls-blurb-md block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"An emerald forest destroyed by unseen forces;"}
                </div>
                the reality of the mountain valley,
                <br /> fraying at the edges, like a frail mind.
              </p>
            </div>
            <img
              src={photosPortfolio4kWallsThumbnail[3].blurSrc}
              alt={photosPortfolio4kWallsThumbnail[3].alt}
              title={photosPortfolio4kWallsThumbnail[3].title}
              className="portfolio-4kwalls-img04b z-20 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_4kwalls(3)}
              onLoad={() => loadImgHandler("portfolio-4kwalls-img04")}
              src={photosPortfolio4kWallsThumbnail[3].src}
              alt={photosPortfolio4kWallsThumbnail[3].alt}
              title={photosPortfolio4kWallsThumbnail[3].title}
              className="portfolio-4kwalls-img04 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-300 hover:ease-out select-none cursor-pointer"
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
        index={idx_4kwalls}
        render={{
          iconCaptionsVisible: () => <MdClosedCaption size={28} />,
          iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
          iconClose: () => <IoMdCloseCircle size={28} />,
        }}
        slides={photosPortfolio4kWalls}
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
        open={idx_4kwalls >= 0}
        close={() => setIdx_4kwalls(-1)}
      />
      {/* TODO: Phone Wallpaper Section? */}
      {/* -- Layout: Desktop: 1x4, Tablet: 2x2, Mobile: 4x1 */}
      <SectionIndicator sectionName="Phone Wallpapers" />
      <span className="italic">Section stuff...</span>
      {/* TODO: Ultrawide Section */}
      {/* -- Layout: Desktop: 3x1 2/3-width, Tablet: 3x1 3/4-width, Mobile: 3x1 full-width */}
      <SectionIndicator sectionName="Ultrawide" />
      <span className="italic">Section stuff...</span>
      {/* TODO: Square (Misc) Section */}
      {/* -- Layout: Desktop: L/R one after other with desc, Tablet: 2x2 2/3-width, Mobile: 4x1 */}
      <SectionIndicator sectionName="Square" />
      <span className="italic">Section stuff...</span>
      <SectionBreak />
    </div>
  );
};

export default PortfolioPage;
