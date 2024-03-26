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

const HomePage = () => {
  const [, setPage] = useRecoilState(pageAtom);
  return (
    // TODO: set up the line breaks for mobile (with hidden and sm:block) and desktop
    <div className="home-page-container w-full flex flex-col justify-center items-center select-none">
      <div className="home-page-intro">
        Welcome to the &nbsp; ⌞ZeroDayAnubis⌝ &nbsp; website!
        <br />
        <p className="home-page-subintro italic text-sm my-4">
          I create abstract oddities, such as
          <br />
          digital paintings, album arts, posters,
          <br />
          logos, graphic design, and more.
        </p>
      </div>
      <div className="home-page-promo">
        You can visit my &nbsp;
        <p
          className="home-page-text-link inline-block italic font-semibold text-zdaRedpink-600 dark:text-zdaRed-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaRedpink-600 dark:hover:border-zdaRed-600 transition-colors duration-300 ease-out cursor-pointer"
          onClick={() => switchPage("Portfolio", setPage)}
        >
          Portfolio
        </p>
        &nbsp; to see my abstract works, and
        <br /> you can view my current &nbsp;
        <p
          className="home-page-text-link inline-block italic font-semibold text-zdaRedpink-600 dark:text-zdaRed-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaRedpink-600 dark:hover:border-zdaRed-600 transition-colors duration-300 ease-out cursor-pointer"
          onClick={() => switchPage("Commissions", setPage)}
        >
          Commissions
        </p>
        &nbsp; types to see if you
        <br /> are interested in having custom
        <br /> art/logos/designs created for you.
        <br />
        <br /> You can learn more about me and my brief
        <br /> art journey &nbsp;
        <p
          className="home-page-text-link inline-block italic font-semibold text-zdaRedpink-600 dark:text-zdaRed-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaRedpink-600 dark:hover:border-zdaRed-600 transition-colors duration-300 ease-out cursor-pointer"
          onClick={() => switchPage("About", setPage)}
        >
          here
        </p>
        &nbsp; too!
      </div>
      <div className="home-page-showcase1 w-9/10 flex flex-col md:flex-row justify-center items-center mx-4 my-4 border rounded-md border-slate-300/50 dark:border-slate-700/50">
        <div className="home-page-showcase-img-container flex flex-col md:flex-row flex-wrap justify-center items-center gap-0 md:gap-2 px-8 py-4 drop-shadow-md">
          <img
            src="/assets/2023-09-17-Anubis_-_The_Deathless-nozda-600px-c1-blur3x.jpg"
            alt={altAnubisTheDeathless}
            title="Anubis - The Deathless"
            className="home-img01b z-20 h-full max-w-72 my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("home-img01")}
            src="/assets/2023-09-17-Anubis_-_The_Deathless-nozda-600px-c1.jpg"
            alt={altAnubisTheDeathless}
            title="Anubis - The Deathless"
            className="hidden home-img01 z-10 h-full max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/2023-08-27-Wisps_of_Afterlife-600px-c1-blur3x.jpg"
            alt={altWispsOfAfterlife}
            title="Wisps of Afterlife"
            className="home-img02b z-20 h-full max-w-72 my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("home-img02")}
            src="/assets/2023-08-27-Wisps_of_Afterlife-600px-c1.jpg"
            alt={altWispsOfAfterlife}
            title="Wisps of Afterlife"
            className="hidden home-img02 z-10 h-full max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/2023-10-22-Frame_of_Revelation-600px-c1-blur3x.jpg"
            alt={altFrameOfRevelation}
            title="Frame of Revelation"
            className="home-img03b z-20 h-full max-w-72 my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("home-img03")}
            src="/assets/2023-10-22-Frame_of_Revelation-600px-c1.jpg"
            alt={altFrameOfRevelation}
            title="Frame of Revelation"
            className="hidden home-img03 z-10 h-full max-w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/2024-01-06-Anubis_-_The_Harbinger_Wakes-600px-c1-blur3x.jpg"
            alt={altTheHarbingerWakes}
            title="Anubis - The Harbinger Wakes"
            className="home-img04b z-20 h-full max-w-72 aspect-[200/283] my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("home-img04")}
            src="/assets/2024-01-06-Anubis_-_The_Harbinger_Wakes-600px-c1.jpg"
            alt={altTheHarbingerWakes}
            title="Anubis - The Harbinger Wakes"
            className="hidden home-img04 z-10 h-full max-w-72 aspect-[200/283] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
        </div>
      </div>
      {/* TODO: showcase part 2? */}
    </div>
  );
};

export default HomePage;
