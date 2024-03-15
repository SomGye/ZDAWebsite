import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../states/themeAtom";
import zerodayanubis_dark from "/zerodayanubis_dark.svg";
import zerodayanubis_light from "/zerodayanubis_light.svg";
import zdamono_dark from "/zda_dark_mono.svg";
import zdamono_light from "/zda_light_mono.svg";
import adrift_in_notions from "/assets/adrift_in_notions-20240113.svg";
import wretched_witness from "/assets/wretched_witness-20240120.svg";
import out_of_shape from "/assets/out_of_shape-20240218.svg";
import { loadImgHandler } from "../helpers";

const AboutPage = () => {
  const theme = useRecoilValue(themeAtom);

  return (
    // TODO: proper Alt text for imgs
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
            className="about-img01b z-20 h-full max-w-80 my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("about-img01")}
            src="/assets/2023-09-24-Kublai_Anubis_02-600px-c7.jpg"
            alt="Art: Kublai Anubis 02"
            title="Kublai Anubis 02"
            className="hidden about-img01 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
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
            <span className="h-px w-10 border-solid border-b-[3px] border-slate-800/70 dark:border-slate-200/70 rounded-xl my-2 pointer-events-none select-none" />
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
            className="about-img02 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
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
      {/* Art History Summary */}
      <div className="about-summary-container w-full flex flex-col items-center mx-4 mb-4 mt-8 px-2">
        <span className="font-light italic text-lg tracking-tight my-2 pointer-events-none select-none">
          Summary of an artist...
        </span>
        <p className="about-summary-blurb1 font-light text-slate-800/90 dark:text-slate-200/90 text-pretty leading-relaxed pointer-events-none select-none">
          Initially, I loved and appreciated art from afar;
          <br />I spent a long time doodling song lyrics and shapes in
          notebooks.
          <br />
          Later, I explored creating glitch art by programming custom filters
          <br />
          and editing my own photography files.
        </p>
        <span className="w-1/2 h-px border-solid border-b-[3px] border-slate-600/50 dark:border-slate-300/60 rounded-xl my-3 pointer-events-none select-none" />
        <p className="about-summary-blurb2 font-light text-slate-800/90 dark:text-slate-200/90 text-pretty leading-relaxed pointer-events-none select-none">
          In January 2021, I decided to finally{" "}
          <br className="block md:hidden" /> try my hand at digital art;
          <br />I started out using PenUp and a phone stylus
          <br />
          to explore abstract art and re-discover{" "}
          <br className="block md:hidden" /> my love of{" "}
          <div className="inline-block font-semibold tracking-wide">
            {"colors."}
          </div>
          <br />
          <br />
          When I tried Huion Sketch, <br className="block md:hidden" /> I
          discovered a love of{" "}
          <div className="inline-block font-semibold tracking-wide">
            textures and layers.
          </div>
          <br />
          Finally, I was gifted a tablet and <br className="block md:hidden" />{" "}
          was able to try Procreate,
          <br />
          then my{" "}
          <div className="inline-block font-semibold tracking-wide">
            love and curiosity for art expanded.
          </div>
        </p>
      </div>
      {/* Old Section */}
      <div className="about-old-container w-full flex flex-col items-center mx-4 my-8 px-2">
        <span className="font-light italic text-lg tracking-tight my-2 pointer-events-none select-none">
          Small beginnings...
        </span>
        <p className="about-old-blurb1 font-light text-slate-800/90 dark:text-slate-200/90 text-pretty leading-relaxed pointer-events-none select-none">
          In 2021, I bought a phone for <br className="block md:hidden" /> how
          well the camera did in reviews,
          <br />
          and it just happened <br className="block md:hidden" /> to come with a
          pen stylus.
          <br /> The PenUp app came with it, <br className="block md:hidden" />{" "}
          and after messing around,
          <br /> my old{" "}
          <div className="inline-block font-semibold tracking-wide">
            {"flame for art was reignited."}
          </div>
        </p>
        <div className="about-old-penup-gallery flex flex-col xs:grid xs:grid-cols-2 md:flex md:flex-row flex-wrap justify-center items-center mx-2 my-4 gap-0 xs:gap-2">
          <img
            src="/assets/penup/20210219_053858-400px-c7-blur3x.jpg"
            alt="Art: PenUp 20210219_053858"
            title="PenUp 20210219_053858"
            className="about-img05b z-20 h-full max-w-36 my-2 md:my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("about-img05")}
            src="/assets/penup/20210219_053858-400px-c7.jpg"
            alt="Art: PenUp 20210219_053858"
            title="PenUp 20210219_053858"
            className="hidden about-img05 z-10 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/penup/20210326_003107-400px-c7-blur3x.jpg"
            alt="Art: PenUp 20210326_003107"
            title="PenUp 20210326_003107"
            className="about-img06b z-20 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("about-img06")}
            src="/assets/penup/20210326_003107-400px-c7.jpg"
            alt="Art: PenUp 20210326_003107"
            title="PenUp 20210326_003107"
            className="hidden about-img06 z-10 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/penup/20210422_055424-400px-c7-blur3x.jpg"
            alt="Art: PenUp 20210422_055424"
            title="PenUp 20210422_055424"
            className="about-img07b z-20 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("about-img07")}
            src="/assets/penup/20210422_055424-400px-c7.jpg"
            alt="Art: PenUp 20210422_055424"
            title="PenUp 20210422_055424"
            className="hidden about-img07 z-10 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/penup/20210309_005026-400px-c7-blur3x.jpg"
            alt="Art: PenUp 20210309_005026"
            title="PenUp 20210309_005026"
            className="about-img08b z-20 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("about-img08")}
            src="/assets/penup/20210309_005026-400px-c7.jpg"
            alt="Art: PenUp 20210309_005026"
            title="PenUp 20210309_005026"
            className="hidden about-img08 z-10 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
        </div>
        <p className="about-old-blurb2 font-light text-slate-800/90 dark:text-slate-200/90 text-pretty leading-relaxed pointer-events-none select-none">
          A short time later, I tried out Huion Sketch and
          <br />
          started experimenting more with <br className="block md:hidden" />{" "}
          layers, textures, and brushes.
          <br />I knew from this point, <br className="block md:hidden" />
          <div className="inline-block font-semibold tracking-wide">
            {"that the flame of art was here to stay."}
          </div>
        </p>
        <div className="about-old-huion-gallery flex flex-col xs:grid xs:grid-cols-2 md:flex md:flex-row flex-wrap justify-center items-center mx-2 my-4 gap-0 xs:gap-2">
          <img
            src="/assets/huion/HuionSketch_1623481967592-400px-c7-blur3x.jpg"
            alt="Art: HuionSketch_1623481967592"
            title="HuionSketch_1623481967592"
            className="about-img09b z-20 h-full max-w-36 my-2 md:my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("about-img09")}
            src="/assets/huion/HuionSketch_1623481967592-400px-c7.jpg"
            alt="Art: HuionSketch_1623481967592"
            title="HuionSketch_1623481967592"
            className="hidden about-img09 z-10 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/huion/HuionSketch_1625698314399-400px-c7-blur3x.jpg"
            alt="Art: HuionSketch_1625698314399"
            title="HuionSketch_1625698314399"
            className="about-img10b z-20 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("about-img10")}
            src="/assets/huion/HuionSketch_1625698314399-400px-c7.jpg"
            alt="Art: HuionSketch_1625698314399"
            title="HuionSketch_1625698314399"
            className="hidden about-img10 z-10 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/huion/HuionSketch_1623363242260-400px-c7-blur3x.jpg"
            alt="Art: HuionSketch_1623363242260"
            title="HuionSketch_1623363242260"
            className="about-img11b z-20 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("about-img11")}
            src="/assets/huion/HuionSketch_1623363242260-400px-c7.jpg"
            alt="Art: HuionSketch_1623363242260"
            title="HuionSketch_1623363242260"
            className="hidden about-img11 z-10 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
          <img
            src="/assets/huion/HuionSketch_1625699078818-400px-c7-blur3x.jpg"
            alt="Art: HuionSketch_1625699078818"
            title="HuionSketch_1625699078818"
            className="about-img12b z-20 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
          />
          <img
            onLoad={() => loadImgHandler("about-img12")}
            src="/assets/huion/HuionSketch_1625699078818-400px-c7.jpg"
            alt="Art: HuionSketch_1625699078818"
            title="HuionSketch_1625699078818"
            className="hidden about-img12 z-10 h-full max-w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
        </div>
        <span className="w-1/2 h-px border-solid border-b-[3px] border-slate-600/50 dark:border-slate-300/60 rounded-xl my-3 pointer-events-none select-none" />
      </div>
      {/* Modern Summary Part 1 */}
      <div className="about-modern-container w-full md:w-5/6 lg:w-3/5 xl:w-1/2 flex flex-col px-4 md:flex-row justify-between items-center md:mr-auto md:ml-5 lg:ml-24 xl:ml-48 2xl:ml-[17.5rem]">
        <div className="about-modern-title-and-pic-container flex flex-col md:flex-row-reverse items-center mx-2 my-4">
          <div className="about-modern-title-container flex flex-col justify-center md:justify-start items-center md:ml-8">
            <span className="font-light italic text-lg tracking-tight my-2 pointer-events-none select-none">
              Fast forward...
            </span>
            <p className="about-modern-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              In January 2024, I started using Inkscape{" "}
              <br className="block md:hidden" /> and learning vector arts,
              <br /> channeling my passion for{" "}
              <div className="inline-block italic font-semibold tracking-wide">
                {"graphic design and geometry."}
              </div>
            </p>
          </div>
          <img
            src={wretched_witness}
            alt="Art: Wretched Witness"
            title="Wretched Witness"
            className="about-img03 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
        </div>
        <div className="about-modern-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
          <p className="about-modern-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
            In January 2024, I started using Inkscape{" "}
            <br className="block md:hidden" /> and learning vector arts,
            <br /> channeling my passion for{" "}
            <div className="inline-block italic font-semibold tracking-wide">
              {"graphic design and geometry."}
            </div>
          </p>
        </div>
      </div>
      {/* Modern Summary Part 2 */}
      <div className="about-modern-container2 w-full md:w-5/6 lg:w-3/5 xl:w-1/2 flex flex-col px-4 md:flex-row-reverse justify-between items-center md:ml-auto md:mr-5 lg:mr-24 xl:mr-48 2xl:mr-[17.5rem]">
        <div className="about-modern-title-and-pic-container2 flex flex-col md:flex-row items-center mx-2 my-4">
          <div className="about-modern-title-container2 flex flex-col justify-center md:justify-start items-center md:mr-8">
            <img
              src={theme === "dark" ? zdamono_dark : zdamono_light}
              className="mx-2 my-1 max-h-12 pointer-events-none select-none"
            />
            <span className="h-px w-10 border-solid border-b-[3px] border-slate-800/70 dark:border-slate-200/70 rounded-xl my-2 pointer-events-none select-none" />
            <p className="about-modern-blurb-md2 hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              I also embraced my love of fonts and typography again,
              <br /> getting back into typefaces, kerning, and stroke styles.
              <br />
              <br /> Now, I create logos, posters, album covers,
              <br /> wallpapers, ultrawide landscapes and more.
              <br />
              <div className="italic font-semibold tracking-tight">
                {"I create abstract oddities and hope that you enjoy them!"}
              </div>
            </p>
          </div>
          <img
            src={out_of_shape}
            alt="Art: Out of Shape"
            title="Out of Shape"
            className="about-img04 z-10 h-full max-w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent transition-all duration-200 ease-out hover:brightness-[1.01] hover:border-neutral-400/50 dark:hover:border-neutral-500/60 hover:transition-all hover:duration-200 hover:ease-out select-none"
          />
        </div>
        <div className="about-modern-blurb-container-mobile2 flex flex-col md:hidden justify-center items-center mx-2 mb-4">
          <p className="about-modern-blurb2 text-slate-800 dark:text-slate-200 text-pretty leading-relaxed pointer-events-none select-none">
            I also embraced my love of <br className="block md:hidden" /> fonts
            and typography again,
            <br /> getting back into typefaces,{" "}
            <br className="block md:hidden" /> kerning, and stroke styles.
            <br />
            <br /> Now, I create logos, posters, album covers,
            <br /> wallpapers, ultrawide landscapes and more.
            <br />
            <div className="font-light tracking-wide">
              {"I create abstract oddities"}
              <br className="block md:hidden" />
              {" and hope that you enjoy them!"}
            </div>
          </p>
        </div>
      </div>
      <span className="about-thanks italic text-slate-800/80 dark:text-slate-200/80 tracking-tight mt-8 -mb-2 pointer-events-none select-none">
        Thanks for reading!
      </span>
    </div>
  );
};

export default AboutPage;
