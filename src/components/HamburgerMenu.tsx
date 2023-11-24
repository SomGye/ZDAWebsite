import * as React from "react";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageAtom } from "../states/PageAtom";
import { Box, Button } from "@mui/joy";
import { clickLink, switchPage } from "../Helpers";
import { themeAtom } from "../states/ThemeAtom";
import {
  HamburgerSheetDarkSx,
  HamburgerSheetLightSx,
  HamburgerTitleDarkSx,
  HamburgerTitleLightSx,
  HamburgerInnerNavBtnDarkSx,
  HamburgerInnerNavBtnLightSx,
  HamburgerCloseDarkSx,
  HamburgerCloseLightSx,
  HamburgerBoxTopSx,
  HamburgerBoxSx,
  HamburgerTopNavBtnDarkSx,
  HamburgerTopNavBtnLightSx,
  HamburgerFooterTextDarkSx,
  HamburgerFooterTextLightSx,
  HamburgerInnerNavIconDarkSx,
  HamburgerInnerNavIconLightSx,
} from "./HamburgerMenuSx";
import { LaunchRounded } from "@mui/icons-material";

type props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const HamburgerMenu = ({ open, setOpen }: props) => {
  const theme = useRecoilValue(themeAtom);
  const [, setPage] = useRecoilState(pageAtom);

  React.useEffect(() => {
    if (open) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [open]);

  return (
    <>
      <Drawer
        size="md"
        variant="plain"
        disableScrollLock={true}
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={theme === "dark" ? HamburgerSheetDarkSx : HamburgerSheetLightSx}
        >
          <DialogTitle sx={{ pointerEvents: "none", userSelect: "none" }}>
            Links
          </DialogTitle>
          <ModalClose
            sx={theme === "dark" ? HamburgerCloseDarkSx : HamburgerCloseLightSx}
            aria-label="Close Navigation Menu"
            title="Close"
          />
          <Divider sx={{ mt: "auto" }} />
          <DialogContent sx={{ gap: 2 }}>
            <Typography
              level="title-md"
              fontWeight="bold"
              sx={
                theme === "dark" ? HamburgerTitleDarkSx : HamburgerTitleLightSx
              }
            >
              The ZDA Website
            </Typography>
            <Box sx={HamburgerBoxTopSx}>
              <Button
                onClick={() => {
                  switchPage("Home", setPage);
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerTopNavBtnDarkSx
                    : HamburgerTopNavBtnLightSx
                }
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  switchPage("Portfolio", setPage);
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerTopNavBtnDarkSx
                    : HamburgerTopNavBtnLightSx
                }
              >
                Portfolio
              </Button>
              <Button
                onClick={() => {
                  switchPage("Commissions", setPage);
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerTopNavBtnDarkSx
                    : HamburgerTopNavBtnLightSx
                }
              >
                Commissions
              </Button>
            </Box>
            <Typography
              level="title-md"
              fontWeight="bold"
              sx={
                theme === "dark" ? HamburgerTitleDarkSx : HamburgerTitleLightSx
              }
            >
              Social Media
            </Typography>
            <Box sx={HamburgerBoxSx}>
              <Button
                startDecorator={
                  <LaunchRounded
                    sx={
                      theme === "dark"
                        ? HamburgerInnerNavIconDarkSx
                        : HamburgerInnerNavIconLightSx
                    }
                  />
                }
                onClick={() => {
                  clickLink("https://twitter.com/ZDAWorks");
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerInnerNavBtnDarkSx
                    : HamburgerInnerNavBtnLightSx
                }
              >
                Twitter/X
              </Button>
              <Button
                startDecorator={
                  <LaunchRounded
                    sx={
                      theme === "dark"
                        ? HamburgerInnerNavIconDarkSx
                        : HamburgerInnerNavIconLightSx
                    }
                  />
                }
                onClick={() => {
                  clickLink(
                    "https://instagram.com/zerodayanubis?igshid=OGQ5ZDc2ODk2ZA=="
                  );
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerInnerNavBtnDarkSx
                    : HamburgerInnerNavBtnLightSx
                }
              >
                Instagram
              </Button>
              <Button
                startDecorator={
                  <LaunchRounded
                    sx={
                      theme === "dark"
                        ? HamburgerInnerNavIconDarkSx
                        : HamburgerInnerNavIconLightSx
                    }
                  />
                }
                onClick={() => {
                  clickLink("https://bsky.app/profile/zerodayanubis.com");
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerInnerNavBtnDarkSx
                    : HamburgerInnerNavBtnLightSx
                }
              >
                Bluesky
              </Button>
              <Button
                startDecorator={
                  <LaunchRounded
                    sx={
                      theme === "dark"
                        ? HamburgerInnerNavIconDarkSx
                        : HamburgerInnerNavIconLightSx
                    }
                  />
                }
                onClick={() => {
                  clickLink("https://www.threads.net/@zerodayanubis");
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerInnerNavBtnDarkSx
                    : HamburgerInnerNavBtnLightSx
                }
              >
                Threads
              </Button>
              <Button
                startDecorator={
                  <LaunchRounded
                    sx={
                      theme === "dark"
                        ? HamburgerInnerNavIconDarkSx
                        : HamburgerInnerNavIconLightSx
                    }
                  />
                }
                onClick={() => {
                  clickLink("https://ohai.social/@ZeroDayAnubis");
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerInnerNavBtnDarkSx
                    : HamburgerInnerNavBtnLightSx
                }
              >
                Mastodon
              </Button>
            </Box>
            <Typography
              level="title-md"
              fontWeight="bold"
              sx={
                theme === "dark" ? HamburgerTitleDarkSx : HamburgerTitleLightSx
              }
            >
              Prints and Support
            </Typography>
            <Box sx={HamburgerBoxSx}>
              <Button
                startDecorator={
                  <LaunchRounded
                    sx={
                      theme === "dark"
                        ? HamburgerInnerNavIconDarkSx
                        : HamburgerInnerNavIconLightSx
                    }
                  />
                }
                onClick={() => {
                  clickLink("https://tinyurl.com/ZDAPrints");
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerInnerNavBtnDarkSx
                    : HamburgerInnerNavBtnLightSx
                }
              >
                Print Shop
              </Button>
              <Button
                startDecorator={
                  <LaunchRounded
                    sx={
                      theme === "dark"
                        ? HamburgerInnerNavIconDarkSx
                        : HamburgerInnerNavIconLightSx
                    }
                  />
                }
                onClick={() => {
                  clickLink("https://ko-fi.com/zerodayanubis");
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerInnerNavBtnDarkSx
                    : HamburgerInnerNavBtnLightSx
                }
              >
                Ko-Fi (HQ Files)
              </Button>
              <Button
                startDecorator={
                  <LaunchRounded
                    sx={
                      theme === "dark"
                        ? HamburgerInnerNavIconDarkSx
                        : HamburgerInnerNavIconLightSx
                    }
                  />
                }
                onClick={() => {
                  clickLink("https://paypal.me/ZeroDayAnubis");
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerInnerNavBtnDarkSx
                    : HamburgerInnerNavBtnLightSx
                }
              >
                PayPal
              </Button>
              <Button
                startDecorator={
                  <LaunchRounded
                    sx={
                      theme === "dark"
                        ? HamburgerInnerNavIconDarkSx
                        : HamburgerInnerNavIconLightSx
                    }
                  />
                }
                onClick={() => {
                  clickLink("https://account.venmo.com/u/somgye");
                  setOpen(false);
                }}
                sx={
                  theme === "dark"
                    ? HamburgerInnerNavBtnDarkSx
                    : HamburgerInnerNavBtnLightSx
                }
              >
                Venmo
              </Button>
            </Box>
          </DialogContent>
          <Divider sx={{ mt: "auto" }} />
          <Stack direction="row" justifyContent="center" useFlexGap spacing={1}>
            <Typography
              level="body-xs"
              sx={
                theme === "dark"
                  ? HamburgerFooterTextDarkSx
                  : HamburgerFooterTextLightSx
              }
            >
              Thank you for your support!
            </Typography>
          </Stack>
        </Sheet>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
