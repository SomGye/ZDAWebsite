// TODO: Top Banner Component
/**
 * Top fixed banner, will stay at top even when scrolling.
 * Will contain:
 * - Logo + Title at left
 * - Name of current page (Home/Portfolio/Commissions) at mid-left
 * - Big 'Request A Commission' Button at mid-right
 * - Nav links for (Home/Portfolio/Commissions) at right
 * - Theme dark/light toggle at far right (small)
 * NOTE: Needs to be mobile-optimized!
 * Desktop version = horizontal strip, full button visibility
 * Mobile version = horizontal strip, show hamburger menu with links to pages and the Commission button
 */
import * as React from "react";
import { Box, Container, Button, Switch } from "@mui/joy";
import DarkMode from "@mui/icons-material/DarkMode";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import { pageAtom } from "../../states/PageAtom";
import ThemeToggle from "../ThemeToggle";

const TopBanner = () => {
  const [page, setPage] = useRecoilState(pageAtom);

  return (
    <Container>
      <Box>
        <div>Hamburger</div>
      </Box>
      <Box>
        <div>Logo + Title - {page}</div>
      </Box>
      <Box>
        <Button variant="solid">Request A Commission</Button>
      </Box>
      <Box>
        <div onClick={() => setPage("Home")}>Home</div>
        <div onClick={() => setPage("Portfolio")}>Portfolio</div>
        <div onClick={() => setPage("Commissions")}>Commissions</div>
      </Box>
      <Box>
        <ThemeToggle />
      </Box>
    </Container>
  );
};

export default TopBanner;
