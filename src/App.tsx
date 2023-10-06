import * as React from "react";
import "./App.css";
import { Container } from "@mui/joy";
import TopBanner from "./components/sections/TopBanner";
import TopInfoSection from "./components/sections/TopInfoSection";
import BodySection from "./components/sections/BodySection";
import FooterSection from "./components/sections/FooterSection";

function App() {
  return (
    <>
      <Container>
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
