import * as React from "react";
import { useRecoilState } from "recoil";
import { pageAtom } from "../states/pageAtom";

const PortfolioPage = () => {
  const [, setPage] = useRecoilState(pageAtom);
  return (
    <div className="portfolio-page-container w-full flex flex-col justify-center items-center">
      <span className="text-lg font-medium">TODO: Portfolio Page</span>
    </div>
  );
};

export default PortfolioPage;
