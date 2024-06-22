import * as React from "react";
import SectionIndicator from "../components/SectionIndicator";
import SectionBreak from "../components/SectionBreak";
import {
  photosPortfolio4kWallsThumbnail,
  photosPortfolioAlbumArtThumbnail,
  photosPortfolioPhoneWallsThumbnail,
  photosPortfolioPostersThumbnail,
  photosPortfolioSquareThumbnail,
  photosPortfolioUltrawideThumbnail,
} from "../thumbnailInfo";
import {
  photosPortfolio4kWalls,
  photosPortfolioAlbumArt,
  photosPortfolioPhoneWalls,
  photosPortfolioPosters1,
  photosPortfolioPosters2,
  photosPortfolioPosters3,
  photosPortfolioSquare,
  photosPortfolioUltrawide,
} from "../lightboxInfo";
import { clickLink, loadImgHandler } from "../helpers";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { MdClosedCaption, MdClosedCaptionDisabled } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import JumpToNav from "../components/JumpToNav";
import ZDAButton from "../components/ZDAButton";

const PortfolioPage = () => {
  const [idx_posters1, setIdx_posters1] = React.useState(-1);
  const [idx_posters2, setIdx_posters2] = React.useState(-1);
  const [idx_posters3, setIdx_posters3] = React.useState(-1);
  const [idx_albumart, setIdx_albumart] = React.useState(-1);
  const [idx_4kwalls, setIdx_4kwalls] = React.useState(-1);
  const [idx_phonewalls, setIdx_phonewalls] = React.useState(-1);
  const [idx_ultrawide, setIdx_ultrawide] = React.useState(-1);
  const [idx_square, setIdx_square] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const captionsRef = React.useRef(null) as any;
  const leftSection = React.useCallback(
    () => ({
      id: "posters-section",
      text: "Posters",
    }),
    []
  );
  const middleSections = React.useCallback(
    () => [
      {
        id: "album-arts-section",
        text: "Album Arts",
      },
      {
        id: "4kwalls-section",
        text: "4K Walls",
      },
      {
        id: "phonewalls-section",
        text: "Phone Walls",
      },
      {
        id: "ultrawide-section",
        text: "Ultrawide",
      },
    ],
    []
  );
  const rightSection = React.useCallback(
    () => ({
      id: "square-section",
      text: "Square",
    }),
    []
  );

  return (
    <div className="portfolio-page-container w-full flex flex-col justify-center items-center">
      <JumpToNav
        leftSection={leftSection()}
        middleSections={middleSections()}
        rightSection={rightSection()}
      />
      <SectionIndicator sectionName="Posters" id="posters-section" />
      <div className="portfolio-posters-subcontainer max-w-fit">
        <div className="portfolio-posters-container-left w-full flex flex-col px-4 md:pl-5 md:flex-row justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-left flex flex-col md:flex-row-reverse items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-left flex flex-col justify-center md:justify-start items-center md:ml-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[0].title}
              </span>
              <div className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                A terrifying mix of
                <br className="block lg:hidden" />
                striking red splatters and streaks
                <br /> over a shockingly dark red backdrop,
                <br /> framed by inverse colors to further highlight
                <div className="italic font-semibold tracking-wide">
                  {"the boldness of the middle."}
                </div>
              </div>
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
              className="hidden portfolio-posters-img01 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              A terrifying mix of
              <br className="block md:hidden" />
              striking red splatters and streaks
              <br /> over a shockingly dark red backdrop,
              <br /> framed by inverse colors to further highlight
              <div className="italic font-semibold tracking-wide">
                {"the boldness of the middle."}
              </div>
            </div>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-posters-container-right w-full flex flex-col px-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[1].title}
              </span>
              <div className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  A piece of muted <br className="block lg:hidden" /> yet
                  whimsical graphic design,
                </div>
                racing stripes dash across the middle
                <br /> while a gray sphere hides a
                <br /> subtle blue gradient,
                <br /> over a dotted backdrop.
              </div>
            </div>
            <img
              onClick={() => setIdx_posters1(1)}
              src={photosPortfolioPostersThumbnail[1].src}
              alt={photosPortfolioPostersThumbnail[1].alt}
              title={photosPortfolioPostersThumbnail[1].title}
              className="portfolio-posters-img02 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                A piece of muted yet <br className="block md:hidden" />{" "}
                whimsical graphic design,
              </div>
              racing stripes dash across the middle
              <br /> while a gray sphere hides a
              <br /> subtle blue gradient,
              <br /> over a dotted backdrop.
            </div>
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
              <div className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                A dark red rose comprised <br className="block lg:hidden" /> of
                sharp, deadly lines
                <br /> with edges of a haunting past looming overhead.
                <div className="italic font-semibold tracking-wide">
                  {"This flower holds a troublesome tale."}
                </div>
              </div>
            </div>
            <img
              onClick={() => setIdx_posters1(2)}
              src={photosPortfolioPostersThumbnail[2].src}
              alt={photosPortfolioPostersThumbnail[2].alt}
              title={photosPortfolioPostersThumbnail[2].title}
              className="portfolio-posters-img03 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              A dark red rose comprised <br className="block md:hidden" /> of
              sharp, deadly lines
              <br /> with edges of a haunting past looming overhead.
              <div className="italic font-semibold tracking-wide">
                {"This flower holds a troublesome tale."}
              </div>
            </div>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-posters-container-right w-full flex flex-col px-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[3].title}
              </span>
              <div className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"A wild whiplash of colors and strokes"}
                </div>
                shows bold whimsy and visual flavor;
                <br /> an endless palette awaits.
              </div>
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
              className="portfolio-posters-img04 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                {"A wild whiplash of colors and strokes"}
              </div>
              shows bold whimsy and visual flavor;
              <br /> an endless palette awaits.
            </div>
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
              <div className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                Tendrils of outlandish energy and color,
                <br /> both emanating outward and surging within,
                <div className="italic font-semibold tracking-wide">
                  {"highlighting vivid, untamed contrast."}
                </div>
              </div>
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
              className="hidden portfolio-posters-img05 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-posters-blurb max-w-[16ch] xs:max-w-none text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              Tendrils of outlandish energy and color,
              <br /> both emanating outward and surging within,
              <div className="italic font-semibold tracking-wide">
                {"highlighting vivid, untamed contrast."}
              </div>
            </div>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-posters-container-right w-full flex flex-col px-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[5].title}
              </span>
              <div className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  A mystical frame acts as <br className="block lg:hidden" /> a
                  portal between worlds:
                </div>
                Impossibly powerful rings <br className="block lg:hidden" />{" "}
                hold colorful energy,
                <br /> while imagination breaks{" "}
                <br className="block lg:hidden" /> beyond the boundaries.
              </div>
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
              className="portfolio-posters-img06 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                A mystical frame acts as <br className="block sm:hidden" /> a
                portal between worlds:
              </div>
              Impossibly powerful rings <br className="block sm:hidden" /> hold
              colorful energy,
              <br /> while imagination breaks <br className="block sm:hidden" />{" "}
              beyond the boundaries.
            </div>
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
              <div className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                Softly blurred zones of colors
                <br /> hug the wispy, fraying beam of force,
                <div className="italic font-semibold tracking-wide">
                  {"bestowing the eyes with visions of lucidity."}
                </div>
              </div>
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
              className="hidden portfolio-posters-img07 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              Softly blurred zones of colors
              <br /> hug the wispy, fraying beam of force,
              <div className="italic font-semibold tracking-wide">
                bestowing the eyes with <br className="block xs:hidden" />{" "}
                visions of lucidity.
              </div>
            </div>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-posters-container-right w-full flex flex-col px-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-posters-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-posters-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-posters-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioPostersThumbnail[7].title}
              </span>
              <div className="portfolio-posters-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"The divination of a fiercesome character"}
                </div>
                bestows a livid and terrifying aura,
                <br /> beset by ferocious flames.
              </div>
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
              className="portfolio-posters-img08 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-posters-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-posters-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                {"The divination of a fiercesome character"}
              </div>
              bestows a livid and terrifying aura,
              <br /> beset by ferocious flames.
            </div>
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
            className="hidden portfolio-posters-img09 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
            className="hidden portfolio-posters-img10 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
            className="hidden portfolio-posters-img11 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
            className="hidden portfolio-posters-img12 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
      <SectionIndicator sectionName="Album Arts" id="album-arts-section" />
      <div className="portfolio-albumart-subcontainer max-w-fit">
        <div className="portfolio-albumart-container-left w-full flex flex-col px-4 md:pl-5 md:flex-row justify-between items-center mx-auto">
          <div className="portfolio-albumart-title-and-pic-container-left flex flex-col md:flex-row-reverse items-center mx-2 my-4">
            <div className="portfolio-albumart-title-container-left flex flex-col justify-center md:justify-start items-center md:ml-8">
              <span className="portfolio-albumart-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioAlbumArtThumbnail[0].title}
              </span>
              <div className="portfolio-albumart-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                An ominous pyramid fusing reds and pinks,
                <br /> with a powerful energy surging inward;
                <div className="italic font-semibold tracking-wide">
                  {"...a terrifying energy lurks in the middle."}
                </div>
              </div>
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
              className="hidden portfolio-albumart-img01 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-albumart-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-albumart-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              An ominous pyramid fusing reds and pinks,
              <br /> with a powerful energy surging inward;
              <div className="italic font-semibold tracking-wide">
                {"...a terrifying energy lurks in the middle."}
              </div>
            </div>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-albumart-container-right w-full flex flex-col pl-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-albumart-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-albumart-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-albumart-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioAlbumArtThumbnail[1].title}
              </span>
              <div className="portfolio-albumart-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"Wild energy surrounds a hypnotic lime orb,"}
                </div>
                it's power streaked by hasty dark inks
                <br /> and passionate flames overtaking our world.
              </div>
            </div>
            <img
              onClick={() => setIdx_albumart(1)}
              src={photosPortfolioAlbumArtThumbnail[1].src}
              alt={photosPortfolioAlbumArtThumbnail[1].alt}
              title={photosPortfolioAlbumArtThumbnail[1].title}
              className="portfolio-albumart-img02 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-albumart-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-albumart-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                Wild energy surrounds <br className="block xs:hidden" /> a
                hypnotic lime orb,
              </div>
              it's power streaked by hasty dark inks
              <br /> and passionate flames overtaking our world.
            </div>
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
              <div className="portfolio-albumart-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                A neon prison enraptures an eerie pyramid,
                <br /> followed by a sweeping force of nature,
                <div className="italic font-semibold tracking-wide">
                  a river of purple enveloped <br className="block lg:hidden" />{" "}
                  by swarms of pink.
                </div>
              </div>
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
              className="hidden portfolio-albumart-img03 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-albumart-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-albumart-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              A neon prison enraptures an eerie pyramid,
              <br /> followed by a sweeping force of nature,
              <div className="italic font-semibold tracking-wide">
                a river of purple enveloped <br className="block lg:hidden" />{" "}
                by swarms of pink.
              </div>
            </div>
          </div>
        </div>
        <SectionBreak />
        <div className="portfolio-albumart-container-right w-full flex flex-col pl-4 md:pr-5 md:flex-row-reverse justify-between items-center mx-auto">
          <div className="portfolio-albumart-title-and-pic-container-right flex flex-col md:flex-row items-center mx-2 my-4">
            <div className="portfolio-albumart-title-container-right flex flex-col justify-center md:justify-start items-center md:mr-8">
              <span className="portfolio-albumart-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolioAlbumArtThumbnail[3].title}
              </span>
              <div className="portfolio-albumart-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  An emerald forest <br className="block lg:hidden" /> destroyed
                  by unseen forces;
                </div>
                the reality of the mountain valley,
                <br /> fraying at the edges, like a frail mind.
              </div>
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
              className="portfolio-albumart-img04 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
          <div className="portfolio-albumart-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
            <div className="portfolio-albumart-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              <div className="italic font-semibold tracking-wide">
                An emerald forest <br className="block xs:hidden" /> destroyed
                by unseen forces;
              </div>
              the reality of the mountain valley,
              <br /> fraying at the edges, like a frail mind.
            </div>
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
      <SectionIndicator sectionName="4K Wallpapers/Wide" id="4kwalls-section" />
      <div className="portfolio-4kwalls-subcontainer w-full px-4">
        <div className="portfolio-4kwalls-container-top w-full lg:w-3/4 2xl:w-2/3 flex flex-row px-4 justify-center items-center mx-auto">
          <div className="portfolio-4kwalls-title-and-pic-container-top flex flex-col-reverse items-center mx-2 my-4">
            <div className="portfolio-4kwalls-title-container-top flex flex-col justify-center items-center">
              <span className="portfolio-4kwalls-title font-light italic text-lg tracking-wide my-2 pointer-events-none select-none">
                {photosPortfolio4kWallsThumbnail[0].title}
              </span>
              <div className="portfolio-4kwalls-blurb-md block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"A smooth backdrop of red to blue"}
                </div>
                is marked by wild stray <br className="block xs:hidden" /> shots
                of inverse colors
                <br /> and pointed shapes <br className="block xs:hidden" />{" "}
                eagerly piercing the view.
              </div>
            </div>
            <img
              onClick={() => setIdx_4kwalls(0)}
              src={photosPortfolio4kWallsThumbnail[0].src}
              alt={photosPortfolio4kWallsThumbnail[0].alt}
              title={photosPortfolio4kWallsThumbnail[0].title}
              className="portfolio-4kwalls-img01 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
              <div className="portfolio-4kwalls-blurb-md block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                A burning sun streaked by glinting rays
                <br /> over a hazardous landscape of fiery sands;
                <div className="italic font-semibold tracking-wide">
                  {"only the strongest will rule this land."}
                </div>
              </div>
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
              className="hidden portfolio-4kwalls-img02 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
              <div className="portfolio-4kwalls-blurb-md block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                Cascading pink particles burst apart,
                <br /> as the photonic wave frays{" "}
                <br className="block xs:hidden" /> into many hues;
                <div className="italic font-semibold tracking-wide">
                  the air is overtaken by the <br className="block sm:hidden" />{" "}
                  bold and brave radiance.
                </div>
              </div>
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
              className="hidden portfolio-4kwalls-img03 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
              <div className="portfolio-4kwalls-blurb-md block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
                <div className="italic font-semibold tracking-wide">
                  {"Surging splashes of burning colors"}
                </div>
                grip the screen with playful waves,
                <br /> an evening of gradients to dine on.
              </div>
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
              className="portfolio-4kwalls-img04 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
      <SectionIndicator
        sectionName="Phone Wallpapers"
        id="phonewalls-section"
      />
      <div className="portfolio-phonewalls-subcontainer max-w-fit flex flex-col md:grid md:grid-cols-2 md:gap-0 lg:gap-2 xl:flex xl:flex-row">
        <div className="portfolio-phonewalls-pic-container w-full flex flex-col px-4">
          <img
            src={photosPortfolioPhoneWallsThumbnail[0].blurSrc}
            alt={photosPortfolioPhoneWallsThumbnail[0].alt}
            title={photosPortfolioPhoneWallsThumbnail[0].title}
            className="portfolio-phonewalls-img01b z-20 h-full max-w-64 md:max-w-48 lg:max-w-60 xl:max-w-56 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_phonewalls(0)}
            onLoad={() => loadImgHandler("portfolio-phonewalls-img01")}
            src={photosPortfolioPhoneWallsThumbnail[0].src}
            alt={photosPortfolioPhoneWallsThumbnail[0].alt}
            title={photosPortfolioPhoneWallsThumbnail[0].title}
            className="hidden portfolio-phonewalls-img01 z-10 h-full max-w-64 md:max-w-48 lg:max-w-60 xl:max-w-56 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
        </div>
        {/* NOTE: show vertical break only on larger screens */}
        <div className="block md:hidden">
          <SectionBreak tight />
        </div>
        <div className="hidden xl:block">
          <SectionBreak isVertical />
        </div>
        <div className="portfolio-phonewalls-pic-container w-full flex flex-col px-4">
          <img
            src={photosPortfolioPhoneWallsThumbnail[1].blurSrc}
            alt={photosPortfolioPhoneWallsThumbnail[1].alt}
            title={photosPortfolioPhoneWallsThumbnail[1].title}
            className="portfolio-phonewalls-img02b z-20 h-full max-w-64 md:max-w-48 lg:max-w-60 xl:max-w-56 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_phonewalls(1)}
            onLoad={() => loadImgHandler("portfolio-phonewalls-img02")}
            src={photosPortfolioPhoneWallsThumbnail[1].src}
            alt={photosPortfolioPhoneWallsThumbnail[1].alt}
            title={photosPortfolioPhoneWallsThumbnail[1].title}
            className="hidden portfolio-phonewalls-img02 z-10 h-full max-w-64 md:max-w-48 lg:max-w-60 xl:max-w-56 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
        </div>
        {/* NOTE: show vertical break only on larger screens */}
        <div className="block md:hidden">
          <SectionBreak tight />
        </div>
        <div className="hidden xl:block">
          <SectionBreak isVertical />
        </div>
        <div className="portfolio-phonewalls-pic-container w-full flex flex-col px-4">
          <img
            src={photosPortfolioPhoneWallsThumbnail[2].blurSrc}
            alt={photosPortfolioPhoneWallsThumbnail[2].alt}
            title={photosPortfolioPhoneWallsThumbnail[2].title}
            className="portfolio-phonewalls-img03b z-20 h-full max-w-64 md:max-w-48 lg:max-w-60 xl:max-w-56 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_phonewalls(2)}
            onLoad={() => loadImgHandler("portfolio-phonewalls-img03")}
            src={photosPortfolioPhoneWallsThumbnail[2].src}
            alt={photosPortfolioPhoneWallsThumbnail[2].alt}
            title={photosPortfolioPhoneWallsThumbnail[2].title}
            className="hidden portfolio-phonewalls-img03 z-10 h-full max-w-64 md:max-w-48 lg:max-w-60 xl:max-w-56 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
        </div>
        {/* NOTE: show vertical break only on larger screens */}
        <div className="block md:hidden">
          <SectionBreak tight />
        </div>
        <div className="hidden xl:block">
          <SectionBreak isVertical />
        </div>
        <div className="portfolio-phonewalls-pic-container w-full flex flex-col px-4">
          <img
            src={photosPortfolioPhoneWallsThumbnail[3].blurSrc}
            alt={photosPortfolioPhoneWallsThumbnail[3].alt}
            title={photosPortfolioPhoneWallsThumbnail[3].title}
            className="portfolio-phonewalls-img04b z-20 h-full max-w-64 md:max-w-48 lg:max-w-60 xl:max-w-56 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_phonewalls(3)}
            onLoad={() => loadImgHandler("portfolio-phonewalls-img04")}
            src={photosPortfolioPhoneWallsThumbnail[3].src}
            alt={photosPortfolioPhoneWallsThumbnail[3].alt}
            title={photosPortfolioPhoneWallsThumbnail[3].title}
            className="hidden portfolio-phonewalls-img04 z-10 h-full max-w-64 md:max-w-48 lg:max-w-60 xl:max-w-56 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
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
          index={idx_phonewalls}
          render={{
            iconCaptionsVisible: () => <MdClosedCaption size={28} />,
            iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
            iconClose: () => <IoMdCloseCircle size={28} />,
          }}
          slides={photosPortfolioPhoneWalls}
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
          open={idx_phonewalls >= 0}
          close={() => setIdx_phonewalls(-1)}
        />
      </div>
      <SectionIndicator sectionName="Ultrawide" id="ultrawide-section" />
      <div className="portfolio-ultrawide-subcontainer w-full px-4">
        <div className="portfolio-ultrawide-container-top w-full lg:w-3/4 2xl:w-2/3 flex flex-row px-4 justify-center items-center mx-auto">
          <div className="portfolio-ultrawide-title-and-pic-container-top flex flex-col items-center mx-2 my-4">
            <img
              src={photosPortfolioUltrawideThumbnail[0].blurSrc}
              alt={photosPortfolioUltrawideThumbnail[0].alt}
              title={photosPortfolioUltrawideThumbnail[0].title}
              className="portfolio-ultrawide-img01b z-20 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_ultrawide(3)}
              onLoad={() => loadImgHandler("portfolio-ultrawide-img01")}
              src={photosPortfolioUltrawideThumbnail[0].src}
              alt={photosPortfolioUltrawideThumbnail[0].alt}
              title={photosPortfolioUltrawideThumbnail[0].title}
              className="portfolio-ultrawide-img01 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
        </div>
        {/* Tighten section break spacing for mobile */}
        <div className="block md:hidden">
          <SectionBreak tight />
        </div>
        <div className="hidden md:block">
          <SectionBreak />
        </div>
        <div className="portfolio-ultrawide-container-bottom w-full lg:w-3/4 2xl:w-2/3 flex flex-row px-4 justify-center items-center mx-auto">
          <div className="portfolio-ultrawide-title-and-pic-container-bottom flex flex-col items-center mx-2 my-4">
            <img
              src={photosPortfolioUltrawideThumbnail[1].blurSrc}
              alt={photosPortfolioUltrawideThumbnail[1].alt}
              title={photosPortfolioUltrawideThumbnail[1].title}
              className="portfolio-ultrawide-img02b z-20 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_ultrawide(1)}
              onLoad={() => loadImgHandler("portfolio-ultrawide-img02")}
              src={photosPortfolioUltrawideThumbnail[1].src}
              alt={photosPortfolioUltrawideThumbnail[1].alt}
              title={photosPortfolioUltrawideThumbnail[1].title}
              className="hidden portfolio-ultrawide-img02 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
            />
          </div>
        </div>
        {/* Tighten section break spacing for mobile */}
        <div className="block md:hidden">
          <SectionBreak tight />
        </div>
        <div className="hidden md:block">
          <SectionBreak />
        </div>
      </div>
      <div className="portfolio-ultrawide-subcontainer w-full px-4">
        <div className="portfolio-ultrawide-container-top w-full lg:w-3/4 2xl:w-2/3 flex flex-row px-4 justify-center items-center mx-auto">
          <div className="portfolio-ultrawide-title-and-pic-container-top flex flex-col items-center mx-2 my-4">
            <img
              src={photosPortfolioUltrawideThumbnail[2].blurSrc}
              alt={photosPortfolioUltrawideThumbnail[2].alt}
              title={photosPortfolioUltrawideThumbnail[2].title}
              className="portfolio-ultrawide-img03b z-20 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md select-none"
              loading="lazy"
            />
            <img
              onClick={() => setIdx_ultrawide(2)}
              onLoad={() => loadImgHandler("portfolio-ultrawide-img03")}
              src={photosPortfolioUltrawideThumbnail[2].src}
              alt={photosPortfolioUltrawideThumbnail[2].alt}
              title={photosPortfolioUltrawideThumbnail[2].title}
              className="hidden portfolio-ultrawide-img03 z-10 h-full max-w-[85vw] lg:max-w-[70vw] 2xl:max-w-[60vw] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
        index={idx_ultrawide}
        render={{
          iconCaptionsVisible: () => <MdClosedCaption size={28} />,
          iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
          iconClose: () => <IoMdCloseCircle size={28} />,
        }}
        slides={photosPortfolioUltrawide}
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
        open={idx_ultrawide >= 0}
        close={() => setIdx_ultrawide(-1)}
      />
      <SectionIndicator sectionName="Square" id="square-section" />
      <div className="portfolio-square-subcontainer max-w-fit flex flex-col md:grid md:grid-cols-2 md:gap-0 lg:gap-2 xl:flex xl:flex-row">
        <div className="portfolio-square-pic-container w-full flex flex-col px-4">
          <img
            src={photosPortfolioSquareThumbnail[0].blurSrc}
            alt={photosPortfolioSquareThumbnail[0].alt}
            title={photosPortfolioSquareThumbnail[0].title}
            className="portfolio-square-img01b z-20 h-full max-w-64 md:max-w-56 lg:max-w-64 xl:max-w-60 2xl:max-w-96 my-4 object-cover object-center rounded-lg select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_square(0)}
            onLoad={() => loadImgHandler("portfolio-square-img01")}
            src={photosPortfolioSquareThumbnail[0].src}
            alt={photosPortfolioSquareThumbnail[0].alt}
            title={photosPortfolioSquareThumbnail[0].title}
            className="hidden portfolio-square-img01 z-10 h-full max-w-64 md:max-w-56 lg:max-w-64 xl:max-w-60 2xl:max-w-96 my-4 object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
        </div>
        {/* NOTE: show vertical break only on larger screens */}
        <div className="block md:hidden">
          <SectionBreak tight />
        </div>
        <div className="hidden xl:block">
          <SectionBreak isVertical />
        </div>
        <div className="portfolio-square-pic-container w-full flex flex-col px-4">
          <img
            src={photosPortfolioSquareThumbnail[1].blurSrc}
            alt={photosPortfolioSquareThumbnail[1].alt}
            title={photosPortfolioSquareThumbnail[1].title}
            className="portfolio-square-img02b z-20 h-full max-w-64 md:max-w-56 lg:max-w-64 xl:max-w-60 2xl:max-w-96 my-4 object-cover object-center rounded-lg select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_square(1)}
            onLoad={() => loadImgHandler("portfolio-square-img02")}
            src={photosPortfolioSquareThumbnail[1].src}
            alt={photosPortfolioSquareThumbnail[1].alt}
            title={photosPortfolioSquareThumbnail[1].title}
            className="hidden portfolio-square-img02 z-10 h-full max-w-64 md:max-w-56 lg:max-w-64 xl:max-w-60 2xl:max-w-96 my-4 object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
        </div>
        {/* NOTE: show vertical break only on larger screens */}
        <div className="block md:hidden">
          <SectionBreak tight />
        </div>
        <div className="hidden xl:block">
          <SectionBreak isVertical />
        </div>
        <div className="portfolio-square-pic-container w-full flex flex-col px-4">
          <img
            src={photosPortfolioSquareThumbnail[2].blurSrc}
            alt={photosPortfolioSquareThumbnail[2].alt}
            title={photosPortfolioSquareThumbnail[2].title}
            className="portfolio-square-img03b z-20 h-full max-w-64 md:max-w-56 lg:max-w-64 xl:max-w-60 2xl:max-w-96 my-4 object-cover object-center rounded-lg select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_square(2)}
            onLoad={() => loadImgHandler("portfolio-square-img03")}
            src={photosPortfolioSquareThumbnail[2].src}
            alt={photosPortfolioSquareThumbnail[2].alt}
            title={photosPortfolioSquareThumbnail[2].title}
            className="hidden portfolio-square-img03 z-10 h-full max-w-64 md:max-w-56 lg:max-w-64 xl:max-w-60 2xl:max-w-96 my-4 object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
        </div>
        {/* NOTE: show vertical break only on larger screens */}
        <div className="block md:hidden">
          <SectionBreak tight />
        </div>
        <div className="hidden xl:block">
          <SectionBreak isVertical />
        </div>
        <div className="portfolio-square-pic-container w-full flex flex-col px-4">
          <img
            src={photosPortfolioSquareThumbnail[3].blurSrc}
            alt={photosPortfolioSquareThumbnail[3].alt}
            title={photosPortfolioSquareThumbnail[3].title}
            className="portfolio-square-img04b z-20 h-full max-w-64 md:max-w-56 lg:max-w-64 xl:max-w-60 2xl:max-w-96 my-4 object-cover object-center rounded-lg select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_square(3)}
            onLoad={() => loadImgHandler("portfolio-square-img04")}
            src={photosPortfolioSquareThumbnail[3].src}
            alt={photosPortfolioSquareThumbnail[3].alt}
            title={photosPortfolioSquareThumbnail[3].title}
            className="hidden portfolio-square-img04 z-10 h-full max-w-64 md:max-w-56 lg:max-w-64 xl:max-w-60 2xl:max-w-96 my-4 object-cover object-center rounded-lg brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
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
          index={idx_square}
          render={{
            iconCaptionsVisible: () => <MdClosedCaption size={28} />,
            iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
            iconClose: () => <IoMdCloseCircle size={28} />,
          }}
          slides={photosPortfolioSquare}
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
          open={idx_square >= 0}
          close={() => setIdx_square(-1)}
        />
      </div>
      <SectionBreak />
      <div className="kofi-support-container flex flex-col justify-center items-center mt-12">
        <span className="mb-2 text-slate-600 dark:text-slate-300 select-none">
          Visit my Ko-fi for{" "}
          <div className="inline text-slate-700 dark:text-slate-200">
            high quality downloads
          </div>{" "}
          of my art:
        </span>
        <ZDAButton
          clickCallback={() => clickLink("https://ko-fi.com/zerodayanubis")}
          textContent="Downloads and Support"
        />
        <ZDAButton
          clickCallback={() => clickLink("https://ko-fi.com/zerodayanubis")}
          textContent="Downloads and Support"
          variant="mobile"
        />
        <span className="portfolio-page-outro mt-2 italic tracking-tight text-slate-600/80 dark:text-slate-300/80 select-none">
          Any support is greatly appreciated!
        </span>
      </div>
    </div>
  );
};

export default PortfolioPage;
