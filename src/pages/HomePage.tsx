import * as React from "react";
import { loadImgHandler, switchPage } from "../helpers";
import { useRecoilState } from "recoil";
import { pageAtom } from "../states/pageAtom";
import {
  altAnubisTheDeathless,
  altFrameOfRevelation,
  altTheHarbingerWakes,
  altWispsOfAfterlife,
} from "../AltText";
import PageIndicator from "../components/PageIndicator";

const HomePage = () => {
  const [, setPage] = useRecoilState(pageAtom);
  return (
    <div className="home-page-container w-full flex flex-col justify-center items-center text-slate-700 dark:text-slate-200 select-none">
      <div className="home-page-intro max-w-[90%]">
        Welcome to the <br className="block xs:hidden" /> &nbsp; ⌞ZeroDayAnubis⌝
        &nbsp; website!
        <br />
        <p className="home-page-subintro italic text-sm my-4">
          I create abstract oddities, such as
          <br />
          digital paintings, album arts, posters,
          <br />
          logos, graphic design, and more.
        </p>
      </div>
      <div className="home-page-promo max-w-[90%] text-sm xs:text-base">
        You can visit my &nbsp;
        <p
          className="home-page-text-link inline-block italic font-semibold text-zdaRedpink-600 dark:text-zdaRed-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaRedpink-600 dark:hover:border-zdaRed-600 transition-colors duration-300 ease-out cursor-pointer"
          onClick={() => switchPage("Portfolio", setPage)}
        >
          Portfolio
        </p>
        &nbsp; to <br className="block sm:hidden" /> see highlights of my
        abstract works ...
        <br />
        <br />
        ... or you can view my current <br className="block sm:hidden" /> &nbsp;
        <p
          className="home-page-text-link inline-block italic font-semibold text-zdaRedpink-600 dark:text-zdaRed-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaRedpink-600 dark:hover:border-zdaRed-600 transition-colors duration-300 ease-out cursor-pointer"
          onClick={() => switchPage("Commissions", setPage)}
        >
          Commissions
        </p>
        &nbsp; types to see if you
        <br /> are interested in having custom
        <br className="block sm:hidden" /> art/logos/designs made for you.
        <br />
        <br /> You can also learn more about me{" "}
        <br className="block sm:hidden" /> and my brief
        <br className="hidden sm:block md:hidden" /> art journey &nbsp;
        <p
          className="home-page-text-link inline-block italic font-semibold text-zdaRedpink-600 dark:text-zdaRed-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaRedpink-600 dark:hover:border-zdaRed-600 transition-colors duration-300 ease-out cursor-pointer"
          onClick={() => switchPage("About", setPage)}
        >
          here
        </p>
        &nbsp; too!
      </div>
      <div className="home-page-showcase1 w-full sm:w-11/12 flex flex-col md:flex-row justify-center items-center mx-4 my-6 border border-solid md:border-none rounded-md border-slate-300/50 dark:border-slate-700/20 shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)] md:shadow-none dark:md:shadow-none">
        <div className="home-page-showcase-img-container flex flex-col md:flex-row flex-wrap md:grid md:grid-cols-2 2xl:flex justify-center items-center gap-0 md:gap-2 px-0 xs:px-8 py-4 md:py-8 2xl:py-4 my-1 sm:my-0 border-none md:border-solid border rounded-md border-slate-300/50 dark:border-slate-700/20 drop-shadow-md shadow-none md:shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:md:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)]">
          <img
            src="/assets/2023-09-17-Anubis_-_The_Deathless-nozda-600px-c1-blur3x.jpg"
            alt={altAnubisTheDeathless}
            title="Anubis - The Deathless"
            className="home-img01b z-20 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onLoad={() => loadImgHandler("home-img01")}
            src="/assets/2023-09-17-Anubis_-_The_Deathless-nozda-600px-c1.jpg"
            alt={altAnubisTheDeathless}
            title="Anubis - The Deathless"
            className="hidden home-img01 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/2023-08-27-Wisps_of_Afterlife-600px-c1-blur3x.jpg"
            alt={altWispsOfAfterlife}
            title="Wisps of Afterlife"
            className="home-img02b z-20 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onLoad={() => loadImgHandler("home-img02")}
            src="/assets/2023-08-27-Wisps_of_Afterlife-600px-c1.jpg"
            alt={altWispsOfAfterlife}
            title="Wisps of Afterlife"
            className="hidden home-img02 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/2023-10-22-Frame_of_Revelation-600px-c1-blur3x.jpg"
            alt={altFrameOfRevelation}
            title="Frame of Revelation"
            className="home-img03b z-20 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onLoad={() => loadImgHandler("home-img03")}
            src="/assets/2023-10-22-Frame_of_Revelation-600px-c1.jpg"
            alt={altFrameOfRevelation}
            title="Frame of Revelation"
            className="hidden home-img03 z-10 h-full max-w-64 2xl:max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/2024-01-06-Anubis_-_The_Harbinger_Wakes-600px-c1-blur3x.jpg"
            alt={altTheHarbingerWakes}
            title="Anubis - The Harbinger Wakes"
            className="home-img04b z-20 h-full max-w-64 2xl:max-w-72 aspect-[200/283] my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onLoad={() => loadImgHandler("home-img04")}
            src="/assets/2024-01-06-Anubis_-_The_Harbinger_Wakes-600px-c1.jpg"
            alt={altTheHarbingerWakes}
            title="Anubis - The Harbinger Wakes"
            className="hidden home-img04 z-10 h-full max-w-64 2xl:max-w-72 aspect-[200/283] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
        </div>
      </div>
      <PageIndicator pageless />
      <div className="home-page-showcase2 w-full sm:w-11/12 flex flex-col md:flex-row justify-center items-center mx-4 my-6 border border-solid md:border-none rounded-md border-slate-300/50 dark:border-slate-700/20 shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)] md:shadow-none dark:md:shadow-none">
        <div className="home-page-showcase2-img-container-sm flex 2xl:hidden flex-col justify-center items-center gap-0 md:gap-2 px-0 xs:px-8 py-4 md:py-8 2xl:py-4 my-1 sm:my-0 border-none md:border-solid border rounded-md border-slate-300/50 dark:border-slate-700/20 drop-shadow-md shadow-none md:shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:md:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)]">
          <img
            src="/assets/out_of_shape-20240218_1209-document_blue-1040px-c1-blur3x.jpg"
            alt={""}
            title="Out of Shape (Document Version)"
            className="home-img05b z-20 h-full max-w-64 sm:max-w-[320px] md:max-w-[460px] lg:max-w-[520px] my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onLoad={() => loadImgHandler("home-img05")}
            src="/assets/out_of_shape-20240218_1209-document_blue-1040px-c1.jpg"
            alt={""}
            title="Out of Shape (Document Version)"
            className="hidden home-img05 z-10 h-full max-w-64 sm:max-w-[320px] md:max-w-[460px] lg:max-w-[520px] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
        </div>
        <div className="home-page-showcase2-img-container hidden 2xl:flex flex-row justify-center items-center gap-0 md:gap-2 px-0 xs:px-8 py-4 md:py-8 2xl:py-4 my-1 sm:my-0 border-none md:border-solid border rounded-md border-slate-300/50 dark:border-slate-700/20 drop-shadow-md shadow-none md:shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:md:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)]">
          <img
            src="/assets/2024-02-07-Nonconformant_Spectrum-1000px-c1-blur3x.jpg"
            alt={""}
            title="Non-conformant Spectrum"
            className="home-img06b z-20 h-full max-w-[1000px] my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onLoad={() => loadImgHandler("home-img06")}
            src="/assets/2024-02-07-Nonconformant_Spectrum-1000px-c1.jpg"
            alt={""}
            title="Non-conformant Spectrum"
            className="hidden home-img06 z-10 h-full max-w-[1000px] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
        </div>
      </div>
      <div className="home-page-outro max-w-[90%] italic text-base mt-10 sm:mt-14">
        Thank you for visiting!
      </div>
    </div>
  );
};

export default HomePage;
