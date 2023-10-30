import * as React from "react";
import "./App.css";
import { Container } from "@mui/joy";
import TopBanner from "./components/sections/TopBanner";
import TopInfoSection from "./components/sections/TopInfoSection";
import BodySection from "./components/sections/BodySection";
import FooterSection from "./components/sections/FooterSection";
import { AppContainerSx } from "./AppSx";
import { useRecoilState } from "recoil";
import { pageAtom } from "./states/PageAtom";

function App() {
  const [page, setPage] = useRecoilState(pageAtom);
  const [bannerReady, setBannerReady] = React.useState(false);
  const [infoReady, setInfoReady] = React.useState(false);
  const [bodyReady, setBodyReady] = React.useState(false);
  const [footerReady, setFooterReady] = React.useState(false);
  const bannerDelay = 10;
  const infoDelay = 100;
  const bodyDelay = 250;
  const footerDelay = 400;
  const rootPath = "https://www.zerodayanubis.com";
  const portfolioPath = "portfolio";
  const commissionsPath = "commissions";

  React.useEffect(() => {
    // Perf Tweak: Load Sections on Delays
    setTimeout(() => {
      setBannerReady(true);
    }, bannerDelay);
    setTimeout(() => {
      setInfoReady(true);
    }, infoDelay);
    setTimeout(() => {
      setBodyReady(true);
    }, bodyDelay);
    setTimeout(() => {
      setFooterReady(true);
    }, footerDelay);

    const currentPath = window.location.href;
    // TODO: Figure out how to avoid 404 on sub-paths
    if (currentPath.toLocaleLowerCase().includes(portfolioPath)) {
      console.log("Page detected: Portfolio");
      setPage("Portfolio");
    } else if (currentPath.toLocaleLowerCase().includes(commissionsPath)) {
      console.log("Page detected: Commissions");
      setPage("Commissions");
    } else {
      console.log("Page detected: Home");
      setPage("Home");
    }
  }, []);

  return (
    <>
      <Container className="AppContainer" sx={AppContainerSx}>
        {bannerReady && <TopBanner />}
        {infoReady && <TopInfoSection />}
        {bodyReady && <BodySection />}
        {footerReady && <FooterSection />}
      </Container>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
      <p>TEST FILLER FOR SCROLL</p>
    </>
  );
}

export default App;
