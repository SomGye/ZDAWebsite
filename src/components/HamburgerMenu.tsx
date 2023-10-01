// TODO: Hamburger Menu Component
/**
 * Should be composed of:
 * - Initial 3 lines icon button
 * - X icon button to close menu
 * - Backdrop that covers screen, and is dismissed if clicked away
 * - Text links to other pages
 * TODO: Make stub components for the inner components of this!
 * TODO: Use Joy UI's React Drawer component for this: https://mui.com/joy-ui/react-drawer/
 */
// NOTE: Use the Inset Drawer example from here: https://mui.com/joy-ui/react-drawer/#inset-drawer
import * as React from "react";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useRecoilState } from "recoil";
import { pageAtom } from "../states/PageAtom";
import { Button, ButtonGroup } from "@mui/joy";
import { TopBannerInnerNavBtnSx } from "./sections/TopBannerSx";
import { clickLink } from "../Helpers";

type props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const HamburgerMenu = ({ open, setOpen }: props) => {
  const [page, setPage] = useRecoilState(pageAtom);

  return (
    <>
      <Drawer
        size="md"
        variant="plain"
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
          sx={{
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <DialogTitle>Links</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />
          <DialogContent sx={{ gap: 2 }}>
            <FormControl>
              <FormLabel sx={{ typography: "title-md", fontWeight: "bold" }}>
                The ZDA Website
              </FormLabel>
              <ButtonGroup
                variant="soft"
                color="neutral"
                orientation="vertical"
              >
                <Button
                  onClick={() => {
                    setPage("Home");
                    setOpen(false);
                  }}
                  sx={TopBannerInnerNavBtnSx}
                >
                  Home
                </Button>
                <Button
                  onClick={() => {
                    setPage("Portfolio");
                    setOpen(false);
                  }}
                  sx={TopBannerInnerNavBtnSx}
                >
                  Portfolio
                </Button>
                <Button
                  onClick={() => {
                    setPage("Commissions");
                    setOpen(false);
                  }}
                  sx={TopBannerInnerNavBtnSx}
                >
                  Commissions
                </Button>
              </ButtonGroup>
            </FormControl>
            <Typography level="title-md" fontWeight="bold" sx={{ mt: 1 }}>
              Social Media
            </Typography>
            <ButtonGroup variant="soft" color="neutral" orientation="vertical">
              <Button
                onClick={() => {
                  clickLink("https://twitter.com/ZDAWorks");
                  setOpen(false);
                }}
                sx={TopBannerInnerNavBtnSx}
              >
                Twitter/X
              </Button>
              <Button
                onClick={() => {
                  clickLink(
                    "https://instagram.com/zerodayanubis?igshid=OGQ5ZDc2ODk2ZA=="
                  );
                  setOpen(false);
                }}
                sx={TopBannerInnerNavBtnSx}
              >
                Instagram
              </Button>
              <Button
                onClick={() => {
                  clickLink(
                    "https://bsky.app/profile/zerodayanubis.bsky.social"
                  );
                  setOpen(false);
                }}
                sx={TopBannerInnerNavBtnSx}
              >
                Bluesky
              </Button>
              <Button
                onClick={() => {
                  clickLink("https://www.threads.net/@zerodayanubis");
                  setOpen(false);
                }}
                sx={TopBannerInnerNavBtnSx}
              >
                Threads
              </Button>
              <Button
                onClick={() => {
                  clickLink("https://pebble.is/ZeroDayAnubis");
                  setOpen(false);
                }}
                sx={TopBannerInnerNavBtnSx}
              >
                Pebble
              </Button>
            </ButtonGroup>
            <Typography level="title-md" fontWeight="bold" sx={{ mt: 2 }}>
              Prints and Support
            </Typography>
            <ButtonGroup variant="soft" color="neutral" orientation="vertical">
              <Button
                onClick={() => {
                  clickLink("https://tinyurl.com/ZDAPrints");
                  setOpen(false);
                }}
                sx={TopBannerInnerNavBtnSx}
              >
                Print Shop
              </Button>
              <Button
                onClick={() => {
                  clickLink("https://ko-fi.com/zerodayanubis");
                  setOpen(false);
                }}
                sx={TopBannerInnerNavBtnSx}
              >
                Ko-Fi (HQ Files)
              </Button>
              <Button
                onClick={() => {
                  clickLink("https://paypal.me/ZeroDayAnubis");
                  setOpen(false);
                }}
                sx={TopBannerInnerNavBtnSx}
              >
                PayPal
              </Button>
              <Button
                onClick={() => {
                  clickLink("https://account.venmo.com/u/somgye");
                  setOpen(false);
                }}
                sx={TopBannerInnerNavBtnSx}
              >
                Venmo
              </Button>
            </ButtonGroup>
          </DialogContent>
          <Divider sx={{ mt: "auto" }} />
          <Stack direction="row" justifyContent="center" useFlexGap spacing={1}>
            <h5>
              <i>Thank you for your support!</i>
            </h5>
          </Stack>
        </Sheet>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
