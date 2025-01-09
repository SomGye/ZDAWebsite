import * as React from "react";
import { useRecoilValue } from "recoil";
import { colorSchemeAtom, colorSchemes } from "../states/themeAtom";

type props = {
  isVertical?: boolean;
  isColorful?: boolean;
};
const leftClasses = [
  {
    className:
      "left-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-400 to-blue-400 dark:from-transparent dark:via-sky-500 dark:to-blue-500",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "left-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-r from-transparent via-pink-400 to-yellow-400 dark:from-transparent dark:via-pink-500 dark:to-yellow-500",
    colorScheme: colorSchemes[1],
  },
];
const rightClasses = [
  {
    className:
      "right-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-l from-transparent via-violet-400 to-blue-400 dark:from-transparent dark:via-indigo-500 dark:to-blue-500",
    colorScheme: colorSchemes[0],
  },
  {
    className:
      "right-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-l from-transparent via-purple-400 to-yellow-400 dark:from-transparent dark:via-purple-500 dark:to-yellow-500",
    colorScheme: colorSchemes[1],
  },
];

const CardBreak = ({ isVertical, isColorful }: props) => {
  const colorScheme = useRecoilValue(colorSchemeAtom);

  const getColorSchemeClassName = (element: string) => {
    let targetClasses;
    // Determine class list from element type
    if (element === "left") {
      targetClasses = leftClasses;
    } else if (element === "right") {
      targetClasses = rightClasses;
    } else {
      targetClasses = [{ className: "", colorScheme: colorSchemes[0] }];
    }

    // Filter on classes for className matching colorScheme
    const resultObj = targetClasses.filter(
      (classObj) => classObj.colorScheme === colorScheme
    );
    if (resultObj && resultObj.length) {
      return resultObj[0].className;
    } else {
      return targetClasses[0].className;
    }
  };

  return (
    <>
      {!isVertical && (
        <div className="card-break-container relative">
          {/* Default */}
          <div
            className={
              "long-fading-line-container z-10 absolute flex flex-row justify-center items-center w-full h-auto 5k:h-[3px] motion-safe:transition-all motion-safe:duration-500 ease-out" +
              (isColorful ? " opacity-0" : " opacity-100")
            }
          >
            <div className="left-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-r from-transparent to-slate-500/30 dark:from-transparent dark:via-gray-500/20 dark:to-gray-500/75" />
            <div className="right-fading-line w-6/12 h-px my-0 rounded-2xl bg-gradient-to-l from-transparent to-slate-500/30 dark:from-transparent dark:via-gray-500/20 dark:to-gray-500/75" />
          </div>
          {/* Hover Overlay (Colorful) */}
          <div
            className={
              "long-fading-line-container-colorful z-20 absolute flex flex-row justify-center items-center w-full h-auto 5k:h-[3px] motion-safe:transition-all motion-safe:duration-500 ease-out" +
              (isColorful ? " opacity-100" : " opacity-0")
            }
          >
            <div className={getColorSchemeClassName("left")} />
            <div className={getColorSchemeClassName("right")} />
          </div>
        </div>
      )}
      {isVertical && (
        <div className="long-fading-line-container flex flex-col justify-center items-center w-full 5k:w-[2px] h-8 mx-2">
          <div className="top-fading-line w-px h-4 mx-1 rounded-2xl bg-gradient-to-b from-gray-400/40 to-gray-400/80 dark:from-gray-500/45 dark:to-gray-500/75" />
          <div className="bottom-fading-line w-px h-4 mx-1 rounded-2xl bg-gradient-to-t from-gray-400/40 to-gray-400/80 dark:from-gray-500/45 dark:to-gray-500/75" />
        </div>
      )}
    </>
  );
};

export default CardBreak;
