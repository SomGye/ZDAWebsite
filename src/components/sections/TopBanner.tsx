import * as React from "react";
import {
  Box,
  Container,
  Button,
  ButtonGroup,
  IconButton,
  Typography,
} from "@mui/joy";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import { pageAtom } from "../../states/PageAtom";
import ThemeToggle from "../ThemeToggle";
import {
  TopBannerBoxDarkSx,
  TopBannerBoxLightSx,
  TopBannerButtonActiveDarkSx,
  TopBannerButtonActiveLightSx,
  TopBannerButtonDefaultDarkSx,
  TopBannerButtonDefaultLightSx,
  TopBannerButtonGroupSx,
  TopBannerCommButtonDarkHelperSx,
  TopBannerCommButtonDarkSx,
  TopBannerCommButtonLightHelperSx,
  TopBannerCommButtonLightSx,
  TopBannerContainerSx,
  TopBannerIconBoxSx,
  TopBannerIconButtonDarkSx,
  TopBannerIconButtonLightSx,
  TopBannerLogoNamePageBoxSx,
  TopBannerNavIconDarkSx,
  TopBannerThemeToggleBoxSx,
} from "./TopBannerSx";
import { Menu } from "@mui/icons-material";
import HamburgerMenu from "../HamburgerMenu";
import "./TopBanner.css";
import { clickLink } from "../../Helpers";

const TopBanner = () => {
  const theme = useRecoilValue(themeAtom);
  const [page, setPage] = useRecoilState(pageAtom);
  const [open, setOpen] = React.useState(false);

  const switchPage = (target: string) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    // Set URL to target without refresh
    if (target === "Home") {
      window.history.replaceState({}, "", "/");
    } else {
      window.history.replaceState({}, "", "/" + target.toLocaleLowerCase());
    }
    setPage(target);
  };

  const determineGroupButtonStyle = (path: string) => {
    if (page === path) {
      if (theme === "dark") {
        return TopBannerButtonActiveDarkSx;
      } else {
        return TopBannerButtonActiveLightSx;
      }
    } else {
      if (theme === "dark") {
        return TopBannerButtonDefaultDarkSx;
      } else {
        return TopBannerButtonDefaultLightSx;
      }
    }
  };

  return (
    <Container sx={TopBannerContainerSx}>
      <Box
        className="TopBannerBox"
        sx={theme === "dark" ? TopBannerBoxDarkSx : TopBannerBoxLightSx}
      >
        <Box sx={TopBannerIconBoxSx}>
          <IconButton
            variant="soft"
            color="neutral"
            sx={
              theme === "dark"
                ? TopBannerIconButtonDarkSx
                : TopBannerIconButtonLightSx
            }
            onClick={() => setOpen(true)}
            aria-label="Navigation Menu"
            aria-description="Opens the Navigation Menu"
            title="Navigation Menu"
          >
            {theme === "dark" && <Menu sx={TopBannerNavIconDarkSx} />}
            {theme !== "dark" && <Menu />}
          </IconButton>
          <HamburgerMenu open={open} setOpen={setOpen} />
        </Box>
        <Box sx={TopBannerLogoNamePageBoxSx}>
          <h4 className="TopBannerLogoTextHeader">
            ⌞ZDA⌝&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{page}
          </h4>
        </Box>
        <Box>
          <Button
            variant="solid"
            onClick={() => clickLink("https://tinyurl.com/ZDACommForm")}
            sx={
              theme === "dark"
                ? TopBannerCommButtonDarkSx
                : TopBannerCommButtonLightSx
            }
            aria-description="Opens the request form for Commissions"
          >
            <Typography
              className="Button-Helper"
              sx={
                theme === "dark"
                  ? TopBannerCommButtonDarkHelperSx
                  : TopBannerCommButtonLightHelperSx
              }
            >
              Request A Commission
            </Typography>
            Request A Commission
          </Button>
        </Box>
        {/* TODO: Routing on Navigation, so that users can bookmark or go directly to a page */}
        <Box>
          <ButtonGroup
            aria-label="Top Banner Button Group"
            color="primary"
            variant="soft"
            sx={TopBannerButtonGroupSx}
          >
            <Button
              onClick={() => switchPage("Home")}
              sx={() => determineGroupButtonStyle("Home")}
              aria-description="Opens the Home Tab"
            >
              Home
            </Button>
            <Button
              onClick={() => switchPage("Portfolio")}
              sx={() => determineGroupButtonStyle("Portfolio")}
              aria-description="Opens the Portfolio Tab"
            >
              Portfolio
            </Button>
            <Button
              onClick={() => switchPage("Commissions")}
              sx={() => determineGroupButtonStyle("Commissions")}
              aria-description="Opens the Commissions Tab"
            >
              Commissions
            </Button>
          </ButtonGroup>
        </Box>
        <Box sx={TopBannerThemeToggleBoxSx}>
          <ThemeToggle />
        </Box>
      </Box>
    </Container>
  );
};

export default TopBanner;
