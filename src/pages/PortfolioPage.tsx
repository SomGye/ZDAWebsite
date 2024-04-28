import * as React from "react";
import SectionIndicator from "../components/SectionIndicator";
import SectionBreak from "../components/SectionBreak";

const PortfolioPage = () => {
  return (
    // TODO: Try to test out using INTERLACED PNGs with the blur3x jpgs pre-load
    <div className="portfolio-page-container w-full flex flex-col justify-center items-center">
      <span className="text-lg font-medium">TODO: Portfolio Page</span>
      {/* NOTE: layouts are in RxC format! */}
      {/* NOTE: the Prism of Paragon SVG loads strangely in Chrome, falling back to PNG */}
      {/* TODO: Custom Extra Bold Headers per Section */}
      {/* TODO: Poster A3/A4 Section -- TODO layout */}
      {/* Layout: one after the other, alternating sides, with title/desc for each */}
      {/* Layout: Desktop: alternating, 9/10 width, Tablet: alternating, 7/10 width, Mobile: nx1 */}
      <SectionIndicator sectionName="Posters" />
      <span className="italic">Section stuff...</span>
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
