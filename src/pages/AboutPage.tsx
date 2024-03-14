import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../states/themeAtom";
import zerodayanubis_dark from "/zerodayanubis_dark.svg";
import zerodayanubis_light from "/zerodayanubis_light.svg";
import zdamono_dark from "/zda_dark_mono.svg";
import zdamono_light from "/zda_light_mono.svg";
import adrift_in_notions from "/assets/adrift_in_notions-20240113.svg";
import { loadImgHandler } from "../helpers";

const AboutPage = () => {
  const theme = useRecoilValue(themeAtom);

  return (
    <div className="about-page-container w-full flex flex-col my-4 justify-center items-center">
      {/* Intro Part 1 */}
      <div className="about-intro-container w-full md:w-5/6 lg:w-3/5 xl:w-1/2 flex flex-col px-4 md:flex-row justify-between items-center md:mr-auto md:ml-5 lg:ml-24 xl:ml-48 2xl:ml-[17.5rem]">
        <div className="about-intro-title-and-pic-container flex flex-col md:flex-row-reverse items-center mx-2 my-4">
          <div className="about-intro-title-container flex flex-col justify-center md:justify-start items-center md:ml-8">
            <img
              src={theme === "dark" ? zerodayanubis_dark : zerodayanubis_light}
              className="mx-2 my-1 max-h-12 pointer-events-none select-none"
            />
            <span className="font-light italic text-lg my-2 pointer-events-none select-none">
              Abstract Media Creator
            </span>
            <p className="about-intro-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              I am Anubis; I love photography, music, and gaming,
              <br /> but I also create abstract oddities with a focus on
              <br />
              <div className="italic font-semibold tracking-wide">
                {"colors + contrast + textures."}
              </div>
            </p>
          </div>
          <img
            src="/assets/2023-09-24-Kublai_Anubis_02-600px-c7-blur3x.jpg"
            alt="Art: Kublai Anubis 02"
            title="Kublai Anubis 02"
            className="about-img02b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("about-img02")}
            src="/assets/2023-09-24-Kublai_Anubis_02-600px-c7.jpg"
            alt="Art: Kublai Anubis 02"
            title="Kublai Anubis 02"
            className="hidden about-img02 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
        </div>
        <div className="about-intro-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
          <p className="about-intro-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
            I am Anubis; I love photography, music, and gaming,
            <br /> but I also create abstract oddities with a focus on
            <br />
            <div className="italic font-semibold tracking-wide">
              {"colors + contrast + textures."}
            </div>
          </p>
        </div>
      </div>
      {/* Intro Part 2 */}
      <div className="about-intro-container2 w-full md:w-5/6 lg:w-3/5 xl:w-1/2 flex flex-col px-4 md:flex-row-reverse justify-between items-center md:ml-auto md:mr-5 lg:mr-24 xl:mr-48 2xl:mr-[17.5rem]">
        <div className="about-intro-title-and-pic-container2 flex flex-col md:flex-row items-center mx-2 my-4">
          <div className="about-intro-title-container2 flex flex-col justify-center md:justify-start items-center md:mr-8">
            <img
              src={theme === "dark" ? zdamono_dark : zdamono_light}
              className="mx-2 my-1 max-h-12 pointer-events-none select-none"
            />
            <span className="h-px w-10 border-solid border-b-[3px] border-slate-800/75 dark:border-slate-300/75 rounded-xl my-2 pointer-events-none select-none" />
            <p className="about-intro-blurb-md2 hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              I bring strange and unique ideas to life,
              <br /> using influences from the worlds of
              <br /> glitch art, albums, movie posters,
              <br /> pop-punk, landscape photography and more.
              <br />
              <div className="italic font-semibold tracking-wide">
                {"I throw out the rulebook of art and create my own aesthetic."}
              </div>
            </p>
          </div>
          <img
            src={adrift_in_notions}
            alt="Art: Adrift in Notions"
            title="Adrift in Notions"
            className="about-img01 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
        </div>
        <div className="about-intro-blurb-container-mobile2 flex flex-col md:hidden justify-center items-center mx-2 mb-4">
          <p className="about-intro-blurb2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
            I bring strange and unique ideas to life,
            <br /> using influences from the worlds of
            <br /> glitch art, albums, movie posters,
            <br /> pop-punk, landscape photography and more.
            <br />
            <div className="italic font-semibold tracking-wide">
              {"I throw out the rulebook of art and create my own aesthetic."}
            </div>
          </p>
        </div>
      </div>
      {/* TODO: Highlights Section: 2022-2024; talk about Procreate advancements and start of Inkscape  */}
      {/* TODO: ...2022-2024 additional photos in small col/row section */}
      {/* TODO: Highlights Section: 2021; talk about start of Procreate, then beginnings in Huion and PenUp  */}
      {/* TODO: ...2021 photos */}
      {/* TODO: ...2021 blurb */}
      <span className="italic">Thanks for reading!</span>
    </div>
  );
};

export default AboutPage;
