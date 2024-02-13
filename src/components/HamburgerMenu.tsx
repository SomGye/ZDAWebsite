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
import { pageAtom } from "../states/pageAtom";
import { Box, Button } from "@mui/joy";
import { clickLink, switchPage } from "../helpers";
import { themeAtom } from "../states/themeAtom";
// import {
//   HamburgerSheetDarkSx,
//   HamburgerSheetLightSx,
//   HamburgerTitleDarkSx,
//   HamburgerTitleLightSx,
//   HamburgerInnerNavBtnDarkSx,
//   HamburgerInnerNavBtnLightSx,
//   HamburgerCloseDarkSx,
//   HamburgerCloseLightSx,
//   HamburgerBoxTopSx,
//   HamburgerBoxSx,
//   HamburgerTopNavBtnDarkSx,
//   HamburgerTopNavBtnLightSx,
//   HamburgerFooterTextDarkSx,
//   HamburgerFooterTextLightSx,
//   HamburgerInnerNavIconDarkSx,
//   HamburgerInnerNavIconLightSx,
// } from "./HamburgerMenuSx";
// import { LaunchRounded } from "@mui/icons-material";
import { extLinkIcon } from "../icons";

type props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const HamburgerMenu = ({ open, setOpen }: props) => {
  const theme = useRecoilValue(themeAtom);
  const [, setPage] = useRecoilState(pageAtom);
  const fontFamilySx =
    "'Plus Jakarta Sans', Outfit, system-ui, Avenir, Helvetica, Arial, sans-serif";
  const fontFamilyOutfitSx =
    "Outfit, 'Plus Jakarta Sans', system-ui, Avenir, Helvetica, Arial, sans-serif";

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
        {/* TODO: replace MUI components with Tailwind HTML where needed */}
        <Sheet className="rounded-md p-3 flex flex-col gap-3 h-full overflow-auto bg-zdaBG-lighterCard/90 dark:bg-zdaBG-darkCard/90 text-gray-700 dark:text-gray-200">
          {/* <DialogTitle
            className="pointer-events-none select-none"
            sx={{ fontFamily: fontFamilyOutfitSx, fontSize: "18px" }}
          >
            Links
          </DialogTitle> */}
          <h3 className="font-outfit text-lg pointer-events-none select-none">
            Links
          </h3>
          <ModalClose
            className="bg-neutral-700 dark:bg-neutral-900 hover:bg-neutral-400 hover:dark:bg-neutral-700 text-gray-500 dark:text-neutral-700 hover:text-gray-700 hover:dark:text-neutral-500 transition-colors duration-200 dark:duration-100 ease-out select-none focus:outline-none"
            aria-label="Close Navigation Menu"
            title="Close"
          />
          <Divider className="mt-auto" />
          <DialogContent className="gap-2">
            <Typography
              level="title-md"
              fontWeight={600}
              className="mt-2 text-gray-50 dark:text-neutral-100 pointer-events-none select-none"
              sx={{ fontFamily: fontFamilyOutfitSx }}
            >
              The ZDA Website
            </Typography>
            <Box
              className="flex flex-col xl:flex-row flex-wrap content-center items-center justify-center xl:justify-left gap-[1px] xl:gap-[2px]"
              // sx={HamburgerBoxTopSx}
            >
              <Button
                onClick={() => {
                  switchPage("Home", setPage);
                  setOpen(false);
                }}
                className="justify-start bg-zdaRed-500 dark:bg-zdaRed-600 hover:bg-gray-900 dark:hover:bg-zdaRed-1000 text-gray-800 dark:text-gray-200 hover:text-gray-100 dark:hover:text-gray-200 border-2 border-solid border-zdaRed-1000 hover:border-zdaRed-600 rounded-xl transition-all duration-150 ease-out select-none"
                // sx={
                //   theme === "dark"
                //     ? HamburgerTopNavBtnDarkSx
                //     : HamburgerTopNavBtnLightSx
                // }
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  switchPage("Portfolio", setPage);
                  setOpen(false);
                }}
                className="justify-start bg-zdaRed-500 dark:bg-zdaRed-600 hover:bg-gray-900 dark:hover:bg-zdaRed-1000 text-gray-800 dark:text-gray-200 hover:text-gray-100 dark:hover:text-gray-200 border-2 border-solid border-zdaRed-1000 hover:border-zdaRed-600 rounded-xl transition-all duration-150 ease-out select-none"
                // sx={
                //   theme === "dark"
                //     ? HamburgerTopNavBtnDarkSx
                //     : HamburgerTopNavBtnLightSx
                // }
              >
                Portfolio
              </Button>
              <Button
                onClick={() => {
                  switchPage("Commissions", setPage);
                  setOpen(false);
                }}
                className="justify-start bg-zdaRed-500 dark:bg-zdaRed-600 hover:bg-gray-900 dark:hover:bg-zdaRed-1000 text-gray-800 dark:text-gray-200 hover:text-gray-100 dark:hover:text-gray-200 border-2 border-solid border-zdaRed-1000 hover:border-zdaRed-600 rounded-xl transition-all duration-150 ease-out select-none"
                // sx={
                //   theme === "dark"
                //     ? HamburgerTopNavBtnDarkSx
                //     : HamburgerTopNavBtnLightSx
                // }
              >
                Commissions
              </Button>
            </Box>
            <Typography
              level="title-md"
              fontWeight={600}
              className="mt-2 text-gray-50 dark:text-neutral-100 pointer-events-none select-none"
              // sx={
              //   theme === "dark" ? HamburgerTitleDarkSx : HamburgerTitleLightSx
              // }
            >
              Social Media
            </Typography>
            <Box
              className="flex flex-col flex-wrap content-center items-center justify-center gap-[6px]"
              // sx={HamburgerBoxSx}
            >
              <Button
                startDecorator={extLinkIcon}
                onClick={() => {
                  clickLink("https://bsky.app/profile/zerodayanubis.com");
                  setOpen(false);
                }}
                className="w-full justify-center bg-gray-50 dark:bg-neutral-950 hover:bg-gray-300 dark:hover:bg-neutral-800 text-zdaRedpink-950 dark:text-zdaRedpink-100 hover:text-zdaRedpink-1000 dark:hover:text-zdaRedpink-50 border-2 border-solid border-zdaBG-lightCard dark:border-zdaBG-darkCard hover:border-zdaRed-600 rounded-lg transition-colors duration-200 dark:duration-150 ease-out"
                // sx={
                //   theme === "dark"
                //     ? HamburgerInnerNavBtnDarkSx
                //     : HamburgerInnerNavBtnLightSx
                // }
              >
                Bluesky
              </Button>
              <Button
                startDecorator={extLinkIcon}
                onClick={() => {
                  clickLink(
                    "https://instagram.com/zerodayanubis?igshid=OGQ5ZDc2ODk2ZA=="
                  );
                  setOpen(false);
                }}
                className="w-full justify-center bg-gray-50 dark:bg-neutral-950 hover:bg-gray-300 dark:hover:bg-neutral-800 text-zdaRedpink-950 dark:text-zdaRedpink-100 hover:text-zdaRedpink-1000 dark:hover:text-zdaRedpink-50 border-2 border-solid border-zdaBG-lightCard dark:border-zdaBG-darkCard hover:border-zdaRed-600 rounded-lg transition-colors duration-200 dark:duration-150 ease-out"
                // sx={
                //   theme === "dark"
                //     ? HamburgerInnerNavBtnDarkSx
                //     : HamburgerInnerNavBtnLightSx
                // }
              >
                Instagram
              </Button>
              <Button
                startDecorator={extLinkIcon}
                onClick={() => {
                  clickLink("https://www.threads.net/@zerodayanubis");
                  setOpen(false);
                }}
                className="w-full justify-center bg-gray-50 dark:bg-neutral-950 hover:bg-gray-300 dark:hover:bg-neutral-800 text-zdaRedpink-950 dark:text-zdaRedpink-100 hover:text-zdaRedpink-1000 dark:hover:text-zdaRedpink-50 border-2 border-solid border-zdaBG-lightCard dark:border-zdaBG-darkCard hover:border-zdaRed-600 rounded-lg transition-colors duration-200 dark:duration-150 ease-out"
                // sx={
                //   theme === "dark"
                //     ? HamburgerInnerNavBtnDarkSx
                //     : HamburgerInnerNavBtnLightSx
                // }
              >
                Threads
              </Button>
              <Button
                startDecorator={extLinkIcon}
                onClick={() => {
                  clickLink("https://ohai.social/@ZeroDayAnubis");
                  setOpen(false);
                }}
                className="w-full justify-center bg-gray-50 dark:bg-neutral-950 hover:bg-gray-300 dark:hover:bg-neutral-800 text-zdaRedpink-950 dark:text-zdaRedpink-100 hover:text-zdaRedpink-1000 dark:hover:text-zdaRedpink-50 border-2 border-solid border-zdaBG-lightCard dark:border-zdaBG-darkCard hover:border-zdaRed-600 rounded-lg transition-colors duration-200 dark:duration-150 ease-out"
                // sx={
                //   theme === "dark"
                //     ? HamburgerInnerNavBtnDarkSx
                //     : HamburgerInnerNavBtnLightSx
                // }
              >
                Mastodon
              </Button>
            </Box>
            <Typography
              level="title-md"
              fontWeight={600}
              className="mt-2 text-gray-50 dark:text-neutral-100 pointer-events-none select-none"
              // sx={
              //   theme === "dark" ? HamburgerTitleDarkSx : HamburgerTitleLightSx
              // }
            >
              Prints and Support
            </Typography>
            <Box
              className="flex flex-col flex-wrap content-center items-center justify-center gap-[6px]"
              // sx={HamburgerBoxSx}
            >
              <Button
                startDecorator={extLinkIcon}
                onClick={() => {
                  clickLink("https://tinyurl.com/ZDAPrints");
                  setOpen(false);
                }}
                className="w-full justify-center bg-gray-50 dark:bg-neutral-950 hover:bg-gray-300 dark:hover:bg-neutral-800 text-zdaRedpink-950 dark:text-zdaRedpink-100 hover:text-zdaRedpink-1000 dark:hover:text-zdaRedpink-50 border-2 border-solid border-zdaBG-lightCard dark:border-zdaBG-darkCard hover:border-zdaRed-600 rounded-lg transition-colors duration-200 dark:duration-150 ease-out"
                // sx={
                //   theme === "dark"
                //     ? HamburgerInnerNavBtnDarkSx
                //     : HamburgerInnerNavBtnLightSx
                // }
              >
                Print Shop
              </Button>
              <Button
                startDecorator={extLinkIcon}
                onClick={() => {
                  clickLink("https://ko-fi.com/zerodayanubis");
                  setOpen(false);
                }}
                className="w-full justify-center bg-gray-50 dark:bg-neutral-950 hover:bg-gray-300 dark:hover:bg-neutral-800 text-zdaRedpink-950 dark:text-zdaRedpink-100 hover:text-zdaRedpink-1000 dark:hover:text-zdaRedpink-50 border-2 border-solid border-zdaBG-lightCard dark:border-zdaBG-darkCard hover:border-zdaRed-600 rounded-lg transition-colors duration-200 dark:duration-150 ease-out"
                // sx={
                //   theme === "dark"
                //     ? HamburgerInnerNavBtnDarkSx
                //     : HamburgerInnerNavBtnLightSx
                // }
              >
                Ko-Fi (HQ Files)
              </Button>
              <Button
                startDecorator={extLinkIcon}
                onClick={() => {
                  clickLink("https://paypal.me/ZeroDayAnubis");
                  setOpen(false);
                }}
                className="w-full justify-center bg-gray-50 dark:bg-neutral-950 hover:bg-gray-300 dark:hover:bg-neutral-800 text-zdaRedpink-950 dark:text-zdaRedpink-100 hover:text-zdaRedpink-1000 dark:hover:text-zdaRedpink-50 border-2 border-solid border-zdaBG-lightCard dark:border-zdaBG-darkCard hover:border-zdaRed-600 rounded-lg transition-colors duration-200 dark:duration-150 ease-out"
                // sx={
                //   theme === "dark"
                //     ? HamburgerInnerNavBtnDarkSx
                //     : HamburgerInnerNavBtnLightSx
                // }
              >
                PayPal
              </Button>
              <Button
                startDecorator={extLinkIcon}
                onClick={() => {
                  clickLink("https://account.venmo.com/u/somgye");
                  setOpen(false);
                }}
                className="w-full justify-center bg-gray-50 dark:bg-neutral-950 hover:bg-gray-300 dark:hover:bg-neutral-800 text-zdaRedpink-950 dark:text-zdaRedpink-100 hover:text-zdaRedpink-1000 dark:hover:text-zdaRedpink-50 border-2 border-solid border-zdaBG-lightCard dark:border-zdaBG-darkCard hover:border-zdaRed-600 rounded-lg transition-colors duration-200 dark:duration-150 ease-out"
                // sx={
                //   theme === "dark"
                //     ? HamburgerInnerNavBtnDarkSx
                //     : HamburgerInnerNavBtnLightSx
                // }
              >
                Venmo
              </Button>
            </Box>
          </DialogContent>
          <Divider className="mt-auto" />
          <Stack direction="row" justifyContent="center" useFlexGap spacing={1}>
            <Typography
              level="body-xs"
              className="italic font-normal text-gray-200/75 dark:text-neutral-400/85 pointer-events-none select-none"
              sx={{ fontFamily: fontFamilySx, fontSize: "14px" }}
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
