import * as React from "react";
import "./App.css";
import { Container } from "@mui/joy";
import TopBanner from "./components/sections/TopBanner";
import TopInfoSection from "./components/sections/TopInfoSection";
import BodySection from "./components/sections/BodySection";
import FooterSection from "./components/sections/FooterSection";
import { AppContainerSx } from "./AppSx";

function App() {
  // TODO: use window.innerHeight and window.innerWidth to determine screen size
  //  and set global: phone/tablet/desktop
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
