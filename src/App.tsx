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
  // TODO: use window.innerHeight and window.innerWidth to determine screen size
  //  and set global: phone/tablet/desktop

  const [page, setPage] = useRecoilState(pageAtom);
  const rootPath = "https://www.zerodayanubis.com";
  const portfolioPath = "portfolio";
  const commissionsPath = "commissions";

  React.useEffect(() => {
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
        <TopBanner />
        <TopInfoSection />
        <BodySection />
        <FooterSection />
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
