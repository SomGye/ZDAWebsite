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
  TopBannerCommButtonDisabledSx,
  TopBannerCommButtonLightHelperSx,
  TopBannerCommButtonLightSx,
  TopBannerContainerSx,
  TopBannerIconBoxSx,
  TopBannerIconButtonDarkSx,
  TopBannerIconButtonLightSx,
  TopBannerLogoNamePageBoxSx,
  TopBannerMobileLogoBoxSx,
  TopBannerNavIconDarkSx,
  TopBannerThemeToggleBoxSx,
} from "./TopBannerSx";
import { Menu } from "@mui/icons-material";
import HamburgerMenu from "../HamburgerMenu";
import "./TopBanner.css";
import { clickLink, switchPage } from "../../Helpers";
import { commStatusAtom } from "../../states/CommSlotsAtom";
import zdaDarkLogo from "/zdalogo_dark.svg";
import zdaLightLogo from "/zdalogo_light.svg";
import zdaHoverLogo from "/zdalogo_pfp.svg";

const TopBanner = () => {
  const theme = useRecoilValue(themeAtom);
  const commStatus = useRecoilValue(commStatusAtom);
  const [page, setPage] = useRecoilState(pageAtom);
  const [open, setOpen] = React.useState(false);
  const [isClosed, setClosed] = React.useState(false);

  const determineCommButtonStyle = (
    darkSx: object,
    lightSx: object,
    disabledSx: object
  ) => {
    if (isClosed) {
      return disabledSx;
    } else if (theme === "light") {
      return lightSx;
    } else {
      return darkSx;
    }
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

  React.useEffect(() => {
    if (commStatus === "CLOSED") {
      setClosed(true);
    }
  }, [commStatus]);

  return (
    <Container sx={TopBannerContainerSx}>
      <Box
        className="TopBannerBox"
        sx={theme === "dark" ? TopBannerBoxDarkSx : TopBannerBoxLightSx}
      >
        {/* ZDA Logo Box - Mobile (centered) */}
        <Box sx={TopBannerMobileLogoBoxSx}>
          <div className="Logo-Box-Mobile">
            <img
              src={theme === "dark" ? zdaDarkLogo : zdaLightLogo}
              className="ZDA-Logo-TopBanner"
              alt="ZDA"
              onClick={() => switchPage("Logo", setPage)}
              onTouchEnd={() => switchPage("Logo", setPage)}
            />
            <img
              src={zdaHoverLogo}
              className="ZDA-Logo-TopBanner-Hover"
              alt="ZDA"
              onClick={() => switchPage("Logo", setPage)}
              onTouchEnd={() => switchPage("Logo", setPage)}
            />
          </div>
        </Box>
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
          {/* ZDA Logo Box - Tablet/Laptop/Desktop (left-aligned) */}
          <div className="Logo-Box">
            <img
              src={theme === "dark" ? zdaDarkLogo : zdaLightLogo}
              className="ZDA-Logo-TopBanner"
              alt="ZDA"
              onClick={() => switchPage("Logo", setPage)}
              onTouchEnd={() => switchPage("Logo", setPage)}
            />
            <img
              src={zdaHoverLogo}
              className="ZDA-Logo-TopBanner-Hover"
              alt="ZDA"
              onClick={() => switchPage("Logo", setPage)}
              onTouchEnd={() => switchPage("Logo", setPage)}
            />
          </div>
          <HamburgerMenu open={open} setOpen={setOpen} />
        </Box>
        <Box sx={TopBannerLogoNamePageBoxSx}>
          <h4 className="TopBannerLogoTextHeader">{page}</h4>
        </Box>
        <Box>
          <Button
            variant="solid"
            disabled={isClosed}
            onClick={() => clickLink("https://tinyurl.com/ZDACommForm")}
            sx={determineCommButtonStyle(
              TopBannerCommButtonDarkSx,
              TopBannerCommButtonLightSx,
              TopBannerCommButtonDisabledSx
            )}
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
            {isClosed ? "Commissions Closed" : "Request A Commission"}
          </Button>
        </Box>
        <Box>
          <ButtonGroup
            aria-label="Top Banner Button Group"
            color="primary"
            variant="soft"
            sx={TopBannerButtonGroupSx}
          >
            <Button
              onClick={() => switchPage("Home", setPage)}
              sx={() => determineGroupButtonStyle("Home")}
              aria-description="Opens the Home Tab"
            >
              Home
            </Button>
            <Button
              onClick={() => switchPage("Portfolio", setPage)}
              sx={() => determineGroupButtonStyle("Portfolio")}
              aria-description="Opens the Portfolio Tab"
            >
              Portfolio
            </Button>
            <Button
              onClick={() => switchPage("Commissions", setPage)}
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
