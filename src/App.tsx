import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import * as React from "react";
import Button from "@mui/joy/Button";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import { Box, Container } from "@mui/joy";

function App() {
  const testClick = () => {
    alert("Test button clicked!");
  };
  return (
    <>
      <Container>
        <Box>
          <ThemeToggle />
        </Box>
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
    </>
  );
}

export default App;
