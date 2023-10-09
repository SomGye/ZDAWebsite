// TODO: Top Info Section Component
/**
 * The top info that shows on all pages.
 * This changes depending on page!
 * ALWAYS show current number of commission and waitlist slots open!
 *   - NOTE: Uses global state from CommSlotsAtom for active and waitlist slots!
 * Common top info:
 * - Title: ⌞ZeroDayAnubis⌝
 * - Subtitle: Abstract Media Creator
 * - Slots info, example: COMMISSIONS OPEN (5/5 SLOTS)
 * (In between common and specific info, use dotted line bar)
 * Page specific info:
 * - Home: Welcome to my page!
I am an abstract media creator who loves photography, music, and gaming.

I create abstract oddities with a focus on colors + contrast + textures.

With this and my versatile experience in photo editing and creating glitch art,
I bring strange and unique ideas to life.
 * - Portfolio: I have always loved and appreciated art from afar,
and I spent a long time doodling song lyrics and geometric shapes in school notebooks.
I even explored creating my own glitch art from scratch by using programming
and math to develop the filters and algorithms to overlay effects over my own photography.

Starting in January 2021, I decided to finally try my hand at digital art.
I went from trying out stylus apps like PenUp on my phone to
giving Procreate a shot and deciding to throw out the 'rulebook' of usual art.

Since then, I have developed my focus of *colors + contrast + textures* and experimentation to always deliver something unique and interesting.
I hope you enjoy my work!
 * - Commissions: I am here to create abstract art for you, with 4 available tiers to meet your budget and design needs.
If you are interested, simply click the 'Request A Commission' button and fill out the form.
 * NOTE: Ideally should have top bar be same height/size for all 3 pages
 */
import * as React from "react";
import { Box, Card, Container, Divider, Typography } from "@mui/joy";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import { pageAtom } from "../../states/PageAtom";
import {
  commSlotsAtom,
  waitlistSlotsAtom,
  commStatusAtom,
} from "../../states/CommSlotsAtom";
import {
  TopInfoCardBoxSx,
  TopInfoCardInnerDarkSx,
  TopInfoCardInnerLightSx,
  TopInfoCardOuterDarkSx,
  TopInfoCardOuterLightSx,
  TopInfoCardOuterTypoDarkSx,
  TopInfoCardOuterTypoLightSx,
  TopInfoContainerSx,
  TopInfoTopDarkBoxSx,
  TopInfoTopLightBoxSx,
} from "./TopInfoSectionSx";
import "./TopInfoSection.css";

const TopInfoSection = () => {
  const theme = useRecoilValue(themeAtom);
  const page = useRecoilValue(pageAtom);
  const commSlots = useRecoilValue(commSlotsAtom);
  const waitlistSlots = useRecoilValue(waitlistSlotsAtom);
  const commStatus = useRecoilValue(commStatusAtom);

  return (
    <Container className="TopInfoContainer" sx={TopInfoContainerSx}>
      <Box sx={theme === "dark" ? TopInfoTopDarkBoxSx : TopInfoTopLightBoxSx}>
        <Box>
          <h2>⌞ZeroDayAnubis⌝</h2>
        </Box>
        <Box>
          <h3>Abstract Media Creator</h3>
        </Box>
        <Box>
          <h4>
            <i>COMMISSIONS {commStatus}</i>
          </h4>
          <h4>
            <i>{"(" + commSlots + "/5 SLOTS)"}</i>
          </h4>
          <h4>
            <i>{"(" + waitlistSlots + "/5 WAITLIST)"}</i>
          </h4>
        </Box>
      </Box>
      {/* Page Specific */}
      {page && page === "Home" && (
        <Box sx={TopInfoCardBoxSx}>
          <Card
            variant="outlined"
            sx={
              theme === "dark"
                ? TopInfoCardOuterDarkSx
                : TopInfoCardOuterLightSx
            }
          >
            <Typography
              level="title-md"
              textColor="inherit"
              sx={
                theme === "dark"
                  ? TopInfoCardOuterTypoDarkSx
                  : TopInfoCardOuterTypoLightSx
              }
            >
              Welcome To My Page!
            </Typography>
            <Divider orientation="horizontal" inset="none" />
            <Typography
              level="body-md"
              textColor="inherit"
              sx={
                theme === "dark"
                  ? TopInfoCardOuterTypoDarkSx
                  : TopInfoCardOuterTypoLightSx
              }
            >
              I am an abstract media creator who loves photography, music, and
              gaming.
            </Typography>
          </Card>
          <Card
            variant="soft"
            sx={
              theme === "dark"
                ? TopInfoCardInnerDarkSx
                : TopInfoCardInnerLightSx
            }
          >
            <Typography level="title-md" textColor="inherit">
              I create abstract oddities with a focus on
            </Typography>
            <Typography level="title-lg" textColor="inherit">
              colors + contrast + textures
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={
              theme === "dark"
                ? TopInfoCardOuterDarkSx
                : TopInfoCardOuterLightSx
            }
          >
            <Typography
              level="body-md"
              textColor="inherit"
              sx={
                theme === "dark"
                  ? TopInfoCardOuterTypoDarkSx
                  : TopInfoCardOuterTypoLightSx
              }
            >
              With this and my versatile experience in photo editing and
              creating glitch art,
            </Typography>
            <Typography
              level="body-md"
              textColor="inherit"
              sx={
                theme === "dark"
                  ? TopInfoCardOuterTypoDarkSx
                  : TopInfoCardOuterTypoLightSx
              }
            >
              I bring strange and unique ideas to life.
            </Typography>
          </Card>
        </Box>
      )}
      {page && page === "Portfolio" && (
        <Box>
          <p>
            <i>
              I have always loved and appreciated art from afar,
              <br />
              and I spent a long time doodling song lyrics and geometric shapes
              in school notebooks.
              <br />I even explored creating my own glitch art from scratch by
              using programming
              <br />
              and math to develop the filters and algorithms to overlay effects
              over my own photography.
              <br />
              <br />
              Starting in January 2021, I decided to finally try my hand at
              digital art.
              <br />I went from trying out stylus apps like PenUp on my phone to
              <br />
              giving Procreate a shot and deciding to throw out the 'rulebook'
              of usual art.
              <br />
              <br />
              Since then, I have developed my focus of{" "}
              <b>colors + contrast + textures</b> and experimentation to always
              deliver something
              <br /> unique and interesting.
              <br />I hope you enjoy my work!
            </i>
          </p>
        </Box>
      )}
      {page && page === "Commissions" && (
        <Box>
          {/* TODO: Use React Card - Bio example to replace this and keep the ButtonGroup at bottom */}
          {/* Link: https://mui.com/joy-ui/react-card/#bio-card */}
          <p>
            <i>
              I am here to create abstract art for you, with 4 available tiers
              to meet your budget and design needs.
              <br />
              If you are interested, simply click the 'Request A Commission'
              button and fill out the form.
            </i>
          </p>
        </Box>
      )}
    </Container>
  );
};

export default TopInfoSection;
