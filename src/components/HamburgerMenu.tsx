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
import {
  bskyIcon,
  closeIcon,
  extLinkIcon,
  igIcon,
  kofiIcon,
  mastoIcon,
  payPalIcon,
  paymentIcon,
  printShopIcon,
  threadsIcon,
} from "../icons";
import zerodayanubis_dark from "/zerodayanubis_dark.svg";
import zerodayanubis_light from "/zerodayanubis_light.svg";

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
        {/* TODO: fix colors */}
        {/* TODO: 'active' clicked styles on btns */}
        <Sheet className="rounded-md p-4 flex flex-col gap-3 h-full overflow-y-auto overflow-x-hidden items-center bg-zdaBG-lighterCard/90 dark:bg-zdaBG-darkCard/95 text-gray-700 dark:text-gray-200">
          <div className="inline-flex items-center py-3 mx-auto">
            <div className="text-lg font-semibold pointer-events-none select-none flex flex-row absolute left-0 ml-4">
              <span>⌞&nbsp;</span>
              <h3 className="font-outfit">The ZDA Website</h3>
              <span>&nbsp;⌝</span>
            </div>
            <button
              className="modal-close-btn p-2 mr-4 w-min rounded-full bg-gray-200/75 dark:bg-neutral-800/45 hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-neutral-800 dark:active:bg-neutral-700 text-gray-600 dark:text-neutral-500 hover:text-gray-800 dark:hover:text-neutral-400 transition-colors duration-200 ease-out flex absolute right-0"
              onClick={() => setOpen(false)}
              onTouchEnd={() => setOpen(false)}
              aria-description="Closes the Navigation Menu"
              aria-label="Close Navigation Menu"
              title="Close"
            >
              {closeIcon}
            </button>
          </div>
          <Divider className="mt-auto" sx={{ marginBottom: -2 }} />
          <div className="drawer-content flex flex-col flex-[9999_1_0%] z-[1] gap-x-3 gap-y-4 w-full px-3 py-2 m-2 overflow-auto">
            <p className="font-outfit text-lg font-medium text-gray-700 dark:text-gray-200 pointer-events-none select-none mt-2">
              Sections
            </p>
            <Box className="flex flex-col flex-wrap content-center items-center justify-center xl:justify-left gap-[1px] xl:gap-[2px]">
              {/* TODO: meditate on this; see if using light gray in dark mode is better */}
              <button
                onClick={() => {
                  switchPage("Home", setPage);
                  setOpen(false);
                }}
                className="w-44 sm:w-52 md:w-56 xl:w-64 2xl:w-72 py-2 xl:py-3 my-1 text-base sm:text-sm font-medium bg-gray-600 hover:bg-gray-700 active:bg-gray-800 dark:bg-gray-300 dark:hover:bg-gray-400 dark:active:bg-gray-500 text-zdaBG-lighterCard dark:text-gray-900 dark:hover:text-black border-2 border-solid border-transparent rounded-md transition-all duration-300 ease-out select-none"
              >
                Home
              </button>
              <button
                onClick={() => {
                  switchPage("Portfolio", setPage);
                  setOpen(false);
                }}
                className="w-44 sm:w-52 md:w-56 xl:w-64 2xl:w-72 py-2 xl:py-3 my-1 text-base sm:text-sm font-medium bg-gray-600 hover:bg-gray-700 active:bg-gray-800 dark:bg-gray-300 dark:hover:bg-gray-400 dark:active:bg-gray-500 text-zdaBG-lighterCard dark:text-gray-900 dark:hover:text-black border-2 border-solid border-transparent rounded-md transition-all duration-300 ease-out select-none"
              >
                Portfolio
              </button>
              <button
                onClick={() => {
                  switchPage("Commissions", setPage);
                  setOpen(false);
                }}
                className="w-44 sm:w-52 md:w-56 xl:w-64 2xl:w-72 py-2 xl:py-3 my-1 text-base sm:text-sm font-medium bg-gray-600 hover:bg-gray-700 active:bg-gray-800 dark:bg-gray-300 dark:hover:bg-gray-400 dark:active:bg-gray-500 text-zdaBG-lighterCard dark:text-gray-900 dark:hover:text-black border-2 border-solid border-transparent rounded-md transition-all duration-300 ease-out select-none"
              >
                Commissions
              </button>
              <button
                onClick={() => {
                  switchPage("About", setPage);
                  setOpen(false);
                }}
                className="w-44 sm:w-52 md:w-56 xl:w-64 2xl:w-72 py-2 xl:py-3 my-1 text-base sm:text-sm font-medium bg-gray-600 hover:bg-gray-700 active:bg-gray-800 dark:bg-gray-300 dark:hover:bg-gray-400 dark:active:bg-gray-500 text-zdaBG-lighterCard dark:text-gray-900 dark:hover:text-black border-2 border-solid border-transparent rounded-md transition-all duration-300 ease-out select-none"
              >
                About
              </button>
            </Box>
            <p className="font-outfit text-lg font-medium text-gray-700 dark:text-gray-200 pointer-events-none select-none mt-2">
              Social Media
            </p>
            <Box className="flex flex-col flex-wrap content-center items-center justify-center gap-[6px]">
              <button
                className="w-full inline-flex relative justify-center items-center py-2 xl:py-3 my-1 xl:my-[0.1rem] text-base sm:text-sm font-medium bg-transparent hover:bg-gray-600 active:bg-gray-700 dark:hover:bg-gray-300 dark:active:bg-gray-400 text-gray-800 hover:text-zdaBG-lighterCard dark:text-zdaBG-lighterCard  dark:hover:text-gray-900 border-2 border-solid border-gray-500 hover:border-gray-600 active:border-gray-700 dark:border-gray-500 dark:hover:border-gray-300 dark:active:border-gray-400 rounded-md transition-colors duration-200 ease-out"
                onClick={() => {
                  clickLink("https://bsky.app/profile/zerodayanubis.com");
                  setOpen(false);
                }}
              >
                <span className="mx-2 absolute left-0">{bskyIcon}</span>
                <span className="mx-1">Bluesky</span>
                <span className="mx-2 absolute right-0">{extLinkIcon}</span>
              </button>
              <button
                className="w-full inline-flex relative justify-center items-center py-2 xl:py-3 my-1 xl:my-[0.1rem] text-base sm:text-sm font-medium bg-transparent hover:bg-gray-600 active:bg-gray-700 dark:hover:bg-gray-300 dark:active:bg-gray-400 text-gray-800 hover:text-zdaBG-lighterCard dark:text-zdaBG-lighterCard  dark:hover:text-gray-900 border-2 border-solid border-gray-500 hover:border-gray-600 active:border-gray-700 dark:border-gray-500 dark:hover:border-gray-300 dark:active:border-gray-400 rounded-md transition-colors duration-200 ease-out"
                onClick={() => {
                  clickLink(
                    "https://instagram.com/zerodayanubis?igshid=OGQ5ZDc2ODk2ZA=="
                  );
                  setOpen(false);
                }}
              >
                <span className="mx-2 absolute left-0">{igIcon}</span>
                <span className="mx-1">Instagram</span>
                <span className="mx-2 absolute right-0">{extLinkIcon}</span>
              </button>
              <button
                className="w-full inline-flex relative justify-center items-center py-2 xl:py-3 my-1 xl:my-[0.1rem] text-base sm:text-sm font-medium bg-transparent hover:bg-gray-600 active:bg-gray-700 dark:hover:bg-gray-300 dark:active:bg-gray-400 text-gray-800 hover:text-zdaBG-lighterCard dark:text-zdaBG-lighterCard  dark:hover:text-gray-900 border-2 border-solid border-gray-500 hover:border-gray-600 active:border-gray-700 dark:border-gray-500 dark:hover:border-gray-300 dark:active:border-gray-400 rounded-md transition-colors duration-200 ease-out"
                onClick={() => {
                  clickLink("https://www.threads.net/@zerodayanubis");
                  setOpen(false);
                }}
              >
                <span className="mx-2 absolute left-0">{threadsIcon}</span>
                <span className="mx-1">Threads</span>
                <span className="mx-2 absolute right-0">{extLinkIcon}</span>
              </button>
              <button
                className="w-full inline-flex relative justify-center items-center py-2 xl:py-3 my-1 xl:my-[0.1rem] text-base sm:text-sm font-medium bg-transparent hover:bg-gray-600 active:bg-gray-700 dark:hover:bg-gray-300 dark:active:bg-gray-400 text-gray-800 hover:text-zdaBG-lighterCard dark:text-zdaBG-lighterCard  dark:hover:text-gray-900 border-2 border-solid border-gray-500 hover:border-gray-600 active:border-gray-700 dark:border-gray-500 dark:hover:border-gray-300 dark:active:border-gray-400 rounded-md transition-colors duration-200 ease-out"
                onClick={() => {
                  clickLink("https://ohai.social/@ZeroDayAnubis");
                  setOpen(false);
                }}
              >
                <span className="mx-2 absolute left-0">{mastoIcon}</span>
                <span className="mx-1">Mastodon</span>
                <span className="mx-2 absolute right-0">{extLinkIcon}</span>
              </button>
            </Box>
            <p className="font-outfit text-lg font-medium text-gray-700 dark:text-gray-200 pointer-events-none select-none mt-2">
              Prints/Support
            </p>
            <Box className="flex flex-col flex-wrap content-center items-center justify-center gap-[6px]">
              <button
                className="w-full inline-flex relative justify-center items-center py-2 xl:py-3 my-1 xl:my-[0.1rem] text-base sm:text-sm font-medium bg-transparent hover:bg-gray-600 active:bg-gray-700 dark:hover:bg-gray-300 dark:active:bg-gray-400 text-gray-800 hover:text-zdaBG-lighterCard dark:text-zdaBG-lighterCard  dark:hover:text-gray-900 border-2 border-solid border-gray-500 hover:border-gray-600 active:border-gray-700 dark:border-gray-500 dark:hover:border-gray-300 dark:active:border-gray-400 rounded-md transition-colors duration-200 ease-out"
                onClick={() => {
                  clickLink("https://tinyurl.com/ZDAPrints");
                  setOpen(false);
                }}
              >
                <span className="mx-2 absolute left-0">{printShopIcon}</span>
                <span className="mx-1">Print Shop</span>
                <span className="mx-2 absolute right-0">{extLinkIcon}</span>
              </button>
              <button
                className="w-full inline-flex relative justify-center items-center py-2 xl:py-3 my-1 xl:my-[0.1rem] text-base sm:text-sm font-medium bg-transparent hover:bg-gray-600 active:bg-gray-700 dark:hover:bg-gray-300 dark:active:bg-gray-400 text-gray-800 hover:text-zdaBG-lighterCard dark:text-zdaBG-lighterCard  dark:hover:text-gray-900 border-2 border-solid border-gray-500 hover:border-gray-600 active:border-gray-700 dark:border-gray-500 dark:hover:border-gray-300 dark:active:border-gray-400 rounded-md transition-colors duration-200 ease-out"
                onClick={() => {
                  clickLink("https://ko-fi.com/zerodayanubis");
                  setOpen(false);
                }}
              >
                <span className="mx-2 absolute left-0">{kofiIcon}</span>
                <span className="mx-1">Ko-Fi (HQ Files)</span>
                <span className="mx-2 absolute right-0">{extLinkIcon}</span>
              </button>
              <button
                className="w-full inline-flex relative justify-center items-center py-2 xl:py-3 my-1 xl:my-[0.1rem] text-base sm:text-sm font-medium bg-transparent hover:bg-gray-600 active:bg-gray-700 dark:hover:bg-gray-300 dark:active:bg-gray-400 text-gray-800 hover:text-zdaBG-lighterCard dark:text-zdaBG-lighterCard  dark:hover:text-gray-900 border-2 border-solid border-gray-500 hover:border-gray-600 active:border-gray-700 dark:border-gray-500 dark:hover:border-gray-300 dark:active:border-gray-400 rounded-md transition-colors duration-200 ease-out"
                onClick={() => {
                  clickLink("https://paypal.me/ZeroDayAnubis");
                  setOpen(false);
                }}
              >
                <span className="mx-2 absolute left-0">{payPalIcon}</span>
                <span className="mx-1">PayPal</span>
                <span className="mx-2 absolute right-0">{extLinkIcon}</span>
              </button>
              <button
                className="w-full inline-flex relative justify-center items-center py-2 xl:py-3 my-1 xl:my-[0.1rem] text-base sm:text-sm font-medium bg-transparent hover:bg-gray-600 active:bg-gray-700 dark:hover:bg-gray-300 dark:active:bg-gray-400 text-gray-800 hover:text-zdaBG-lighterCard dark:text-zdaBG-lighterCard  dark:hover:text-gray-900 border-2 border-solid border-gray-500 hover:border-gray-600 active:border-gray-700 dark:border-gray-500 dark:hover:border-gray-300 dark:active:border-gray-400 rounded-md transition-colors duration-200 ease-out"
                onClick={() => {
                  clickLink("https://account.venmo.com/u/somgye");
                  setOpen(false);
                }}
              >
                <span className="mx-2 absolute left-0">{paymentIcon}</span>
                <span className="mx-1">Venmo</span>
                <span className="mx-2 absolute right-0">{extLinkIcon}</span>
              </button>
            </Box>
          </div>
          <Divider className="mt-auto" />
          <Stack direction="row" justifyContent="center" useFlexGap spacing={1}>
            <img
              src={theme === "dark" ? zerodayanubis_dark : zerodayanubis_light}
              className="mx-4 my-2 max-h-8"
            />
          </Stack>
        </Sheet>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
