import * as React from "react";
import SectionIndicator from "../components/SectionIndicator";
import SectionBreak from "../components/SectionBreak";
import { photosPortfolioPostersThumbnail } from "../thumbnailInfo";
import { loadImgHandler } from "../helpers";

const PortfolioPage = () => {
  const [idx_posters1, setIdx_posters1] = React.useState(-1);
  const [idx_posters2, setIdx_posters2] = React.useState(-1);
  const [idx_posters3, setIdx_posters3] = React.useState(-1);

  return (
    // TODO: adjust the text width and word-wrap/line-breaks for diff screen sizes
    <div className="portfolio-page-container w-full flex flex-col justify-center items-center">
      <span className="text-lg font-medium">TODO: Portfolio Page</span>
      {/* NOTE: layouts are in RxC format! */}
      {/* NOTE: the Prism of Paragon SVG loads strangely in Chrome, falling back to PNG */}
      {/* TODO: Custom Extra Bold Headers per Section */}
      {/* TODO: Poster A3/A4 Section -- TODO layout */}
      {/* Layout: one after the other, alternating sides, with title/desc for each */}
      {/* Layout: Desktop: alternating, 9/10 width, Tablet: alternating, 7/10 width, Mobile: nx1 */}
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
      {/* TODO: Abstractify/Album Art Section */}
      {/* -- Layout: Desktop: L/R one after other with desc, Tablet: 2x2 2/3-width, Mobile: 4x1 */}
      <SectionIndicator sectionName="Album Arts" />
      <span className="italic">Section stuff...</span>
      {/* TODO: 4K Wallpaper Section */}
      {/* -- Layout: Desktop: 4x1 2/3-width, Tablet: 4x1 3/4-width, Mobile: 4x1 full-width */}
      <SectionIndicator sectionName="4K Wallpapers/Wide" />
      <span className="italic">Section stuff...</span>
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
