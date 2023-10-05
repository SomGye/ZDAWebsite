import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import * as React from "react";
import Button from "@mui/joy/Button";
import "./App.css";
import { Box, Container } from "@mui/joy";
import TopBanner from "./components/sections/TopBanner";
import TopInfoSection from "./components/sections/TopInfoSection";
import BodySection from "./components/sections/BodySection";
import FooterSection from "./components/sections/FooterSection";

function App() {
  const testClick = () => {
    alert("Test button clicked!");
  };
  return (
    <>
      <Container>
        <TopBanner />
        <TopInfoSection />
        <BodySection />
        <FooterSection />
      </Container>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ZeroDayAnubis - Abstract Media Creator</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Button variant="solid" onClick={() => testClick()}>
          Test Me
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        TEST FILLER FOR SCROLL
      </p>
      <p>
        TEST FILLER FOR SCROLL
      </p>
      <p>
        TEST FILLER FOR SCROLL
      </p>
      <p>
        TEST FILLER FOR SCROLL
      </p>
    </>
  );
}

export default App;
