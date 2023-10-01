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
import { Box, Container, Button, ButtonGroup, IconButton } from "@mui/joy";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import { pageAtom } from "../../states/PageAtom";
import ThemeToggle from "../ThemeToggle";
import {
  TopBannerBoxSx,
  TopBannerButtonActiveSx,
  TopBannerIconButtonDarkSx,
  TopBannerIconButtonLightSx,
  TopBannerIconDarkSx,
  TopBannerIconLightSx,
  TopBannerNavIconDarkSx,
} from "./TopBannerSx";
import { Menu, PaletteRounded } from "@mui/icons-material";
import HamburgerMenu from "../HamburgerMenu";
import "./TopBanner.css";

const TopBanner = () => {
  const theme = useRecoilValue(themeAtom);
  const [page, setPage] = useRecoilState(pageAtom);
  const [open, setOpen] = React.useState(false);

  return (
    <Container>
      <Box sx={TopBannerBoxSx}>
        <Box>
          <IconButton
            variant="soft"
            color="neutral"
            sx={
              theme === "dark"
                ? TopBannerIconButtonDarkSx
                : TopBannerIconButtonLightSx
            }
            onClick={() => setOpen(true)}
          >
            {theme === "dark" && <Menu sx={TopBannerNavIconDarkSx} />}
            {theme !== "dark" && <Menu />}
          </IconButton>
          <HamburgerMenu open={open} setOpen={setOpen} />
        </Box>
        <Box>
          <h4 className="TopBannerLogoTextHeader">
            {theme === "dark" && <PaletteRounded sx={TopBannerIconDarkSx} />}
            {theme !== "dark" && <PaletteRounded sx={TopBannerIconLightSx} />}
            ⌞ZeroDayAnubis⌝&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{page}
          </h4>
        </Box>
        <Box>
          <Button variant="solid">Request A Commission</Button>
        </Box>
        {/* TODO: Routing on Navigation, so that users can bookmark or go directly to a page */}
        <Box>
          {/* TODO: Make justify-content: right when desktop */}
          {/* TODO: Make flex-direction: column when mobile */}
          <ButtonGroup
            aria-label="Top Banner Button Group"
            color="primary"
            variant="soft"
            sx={{ justifyContent: "center" }}
          >
            <Button
              onClick={() => setPage("Home")}
              sx={page === "Home" ? TopBannerButtonActiveSx : {}}
            >
              Home
            </Button>
            <Button
              onClick={() => setPage("Portfolio")}
              sx={page === "Portfolio" ? TopBannerButtonActiveSx : {}}
            >
              Portfolio
            </Button>
            {/* TODO: Make the Commissions Button stand out more */}
            <Button
              onClick={() => setPage("Commissions")}
              sx={page === "Commissions" ? TopBannerButtonActiveSx : {}}
            >
              Commissions
            </Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ display: "flex" }}>
          <ThemeToggle />
        </Box>
      </Box>
    </Container>
  );
};

export default TopBanner;
