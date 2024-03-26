import * as React from "react";
import { useRecoilValue } from "recoil";
import { pageAtom } from "../../states/pageAtom";
import LogoPage from "../../pages/LogoPage";
import ExamplesPage from "../../pages/ExamplesPage";
import InfoBanner from "../../components/InfoBanner";
import PageIndicator from "../../components/PageIndicator";
import HomePage from "../../pages/HomePage";
import PortfolioPage from "../../pages/PortfolioPage";
import CommissionsPage from "../../pages/CommissionsPage";
import AboutPage from "../../pages/AboutPage";

const Body = () => {
  const page = useRecoilValue(pageAtom);
  return (
    <>
      {/* Standard Body */}
      {page !== "Logo" && page !== "Examples" && (
        // NOTE: used mt to counter Header height
        <div className="body-container w-full mt-[61px] xs:mt-[77px] mb-16 xs:mb-20 flex flex-col justify-center items-center">
          <InfoBanner />
          <PageIndicator />
          {page === "Home" && <HomePage />}
          {page === "Portfolio" && <PortfolioPage />}
          {page === "Commissions" && <CommissionsPage />}
          {page === "About" && <AboutPage />}
        </div>
      )}
      {/* Logo Page */}
      {page === "Logo" && <LogoPage />}
      {/* Examples Page */}
      {page === "Examples" && <ExamplesPage />}
    </>
  );
};

export default Body;
