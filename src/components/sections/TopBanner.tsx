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
import { Box, Container, Button, ButtonGroup } from "@mui/joy";
import DarkMode from "@mui/icons-material/DarkMode";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import { pageAtom } from "../../states/PageAtom";
import ThemeToggle from "../ThemeToggle";
import { TopBannerBoxSx } from "./TopBannerSx";

const TopBanner = () => {
  const [page, setPage] = useRecoilState(pageAtom);

  return (
    <Container>
      <Box sx={TopBannerBoxSx}>
        <Box>
          <div>Hamburger</div>
        </Box>
        <Box>
          <div>Logo + Title - {page}</div>
        </Box>
        <Box>
          <Button variant="solid">Request A Commission</Button>
        </Box>
        {/* TODO: Routing on Navigation, so that users can bookmark or go directly to a page */}
        <Box>
          {/* TODO: Make the current page underline the text of matching button */}
          {/* TODO: Make justify-content: right when desktop */}
          {/* TODO: Make flex-direction: column when mobile */}
          <ButtonGroup
            aria-label="Top Banner Button Group"
            color="primary"
            variant="soft"
            sx={{ justifyContent: "center" }}
          >
            <Button onClick={() => setPage("Home")}>Home</Button>
            <Button onClick={() => setPage("Portfolio")}>Portfolio</Button>
            {/* TODO: Make the Commissions Button stand out more */}
            <Button onClick={() => setPage("Commissions")}>Commissions</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ThemeToggle />
        </Box>
      </Box>
    </Container>
  );
};

export default TopBanner;
