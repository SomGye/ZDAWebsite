// Top Info Section Component
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
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardOverflow,
  Container,
  Divider,
  Typography,
} from "@mui/joy";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import { pageAtom } from "../../states/PageAtom";
import {
  commSlotsAtom,
  waitlistSlotsAtom,
  commStatusAtom,
} from "../../states/CommSlotsAtom";
import {
  TopInfoButtonGroupDarkSx,
  TopInfoButtonGroupLightSx,
  TopInfoCardBottomDarkSx,
  TopInfoCardBottomLightSx,
  TopInfoCardBoxColSx,
  TopInfoCardContentSx,
  TopInfoCardInnerCCTDarkSx,
  TopInfoCardInnerCCTDividerDarkSx,
  TopInfoCardInnerCCTDividerLightSx,
  TopInfoCardInnerCCTLightSx,
  TopInfoCardInnerDarkSx,
  TopInfoCardInnerLightSx,
  TopInfoCardOuterDividerDarkSx,
  TopInfoCardOuterDividerLightSx,
  TopInfoCardOuterTypoDarkSx,
  TopInfoCardOuterTypoLightSx,
  TopInfoCardTopDarkSx,
  TopInfoCardTopLightSx,
  TopInfoCommBoxSx,
  TopInfoCommCardBodyBtmDarkSx,
  TopInfoCommCardBodyBtmLightSx,
  TopInfoCommCardBodyTopDarkSx,
  TopInfoCommCardBodyTopLightSx,
  TopInfoCommCardBtnLeftDarkSx,
  TopInfoCommCardBtnLeftLightSx,
  TopInfoCommCardBtnMidDarkSx,
  TopInfoCommCardBtnMidLightSx,
  TopInfoCommCardBtnRightDarkSx,
  TopInfoCommCardBtnRightLightSx,
  TopInfoCommCardDarkSx,
  TopInfoCommCardDividerDarkSx,
  TopInfoCommCardDividerLightSx,
  TopInfoCommCardLightSx,
  TopInfoCommCardOverflowDarkSx,
  TopInfoCommCardOverflowLightSx,
  TopInfoCommCardTitleDarkSx,
  TopInfoCommCardTitleLightSx,
  TopInfoContainerSx,
  TopInfoDefaultTextSx,
  TopInfoNavButtonActiveDarkSx,
  TopInfoNavButtonActiveLightSx,
  TopInfoNavButtonBoxSx,
  TopInfoNavButtonDefaultDarkSx,
  TopInfoNavButtonDefaultLightSx,
  TopInfoTopDarkBoxSx,
  TopInfoTopLeftTitleDarkSx,
  TopInfoTopLeftTitleLightSx,
  TopInfoTopLightBoxSx,
  TopInfoTopMidTitleDarkSx,
  TopInfoTopMidTitleLightSx,
  TopInfoTopRightTitleDarkSx,
  TopInfoTopRightTitleLightSx,
  TopInfoTopTypoBoxColSx,
  TopInfoTopTypoBoxSx,
} from "./TopInfoSectionSx";
import "./TopInfoSection.css";
import { clickLink } from "../../Helpers";

const TopInfoSection = () => {
  const theme = useRecoilValue(themeAtom);
  const [page, setPage] = useRecoilState(pageAtom);
  const commSlots = useRecoilValue(commSlotsAtom);
  const waitlistSlots = useRecoilValue(waitlistSlotsAtom);
  const commStatus = useRecoilValue(commStatusAtom);

  const switchPage = (target: string) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setPage(target);
  };

  const determineGroupButtonStyle = (path: string) => {
    if (page === path) {
      if (theme === "dark") {
        return TopInfoNavButtonActiveDarkSx;
      } else {
        return TopInfoNavButtonActiveLightSx;
      }
    } else {
      if (theme === "dark") {
        return TopInfoNavButtonDefaultDarkSx;
      } else {
        return TopInfoNavButtonDefaultLightSx;
      }
    }
  };

  return (
    <Container className="TopInfoContainer" sx={TopInfoContainerSx}>
      <Box sx={theme === "dark" ? TopInfoTopDarkBoxSx : TopInfoTopLightBoxSx}>
        <Box sx={TopInfoTopTypoBoxSx}>
          <Typography
            level="title-lg"
            className="TopInfoTopLeftTitle"
            sx={
              theme === "dark"
                ? TopInfoTopLeftTitleDarkSx
                : TopInfoTopLeftTitleLightSx
            }
          >
            <Typography
              className="TopInfoTopLeftTitleL"
              sx={
                theme === "dark"
                  ? TopInfoTopLeftTitleDarkSx
                  : TopInfoTopLeftTitleLightSx
              }
            >
              {"⌞ "}
            </Typography>
            ZeroDayAnubis
            <Typography
              className="TopInfoTopLeftTitleR"
              sx={
                theme === "dark"
                  ? TopInfoTopLeftTitleDarkSx
                  : TopInfoTopLeftTitleLightSx
              }
            >
              {" ⌝"}
            </Typography>
          </Typography>
        </Box>
        <Box sx={TopInfoTopTypoBoxSx}>
          <Typography
            level="title-md"
            sx={
              theme === "dark"
                ? TopInfoTopMidTitleDarkSx
                : TopInfoTopMidTitleLightSx
            }
          >
            Abstract Media Creator
          </Typography>
        </Box>
        <Box sx={TopInfoTopTypoBoxColSx}>
          <Typography
            level="title-md"
            component="h4"
            sx={
              theme === "dark"
                ? TopInfoTopRightTitleDarkSx
                : TopInfoTopRightTitleLightSx
            }
          >
            <i>COMMISSIONS {commStatus}</i>
          </Typography>
          <Typography
            level="title-md"
            component="h4"
            sx={
              theme === "dark"
                ? TopInfoTopRightTitleDarkSx
                : TopInfoTopRightTitleLightSx
            }
          >
            <i>{"(" + commSlots + "/5 SLOTS)"}</i>
          </Typography>
          <Typography
            level="title-md"
            component="h4"
            sx={
              theme === "dark"
                ? TopInfoTopRightTitleDarkSx
                : TopInfoTopRightTitleLightSx
            }
          >
            <i>{"(" + waitlistSlots + "/5 WAITLIST)"}</i>
          </Typography>
        </Box>
      </Box>
      <Box sx={TopInfoNavButtonBoxSx}>
        <Button
          onClick={() => switchPage("Home")}
          sx={() => determineGroupButtonStyle("Home")}
        >
          Home
        </Button>
        <Button
          onClick={() => switchPage("Portfolio")}
          sx={() => determineGroupButtonStyle("Portfolio")}
        >
          Portfolio
        </Button>
        <Button
          onClick={() => switchPage("Commissions")}
          sx={() => determineGroupButtonStyle("Commissions")}
        >
          Commissions
        </Button>
      </Box>
      {/* Page Specific */}
      {page && page === "Home" && (
        <Box sx={TopInfoCardBoxColSx}>
          <Card
            variant="outlined"
            sx={theme === "dark" ? TopInfoCardTopDarkSx : TopInfoCardTopLightSx}
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
            <Divider
              orientation="horizontal"
              inset="none"
              sx={
                theme === "dark"
                  ? TopInfoCardOuterDividerDarkSx
                  : TopInfoCardOuterDividerLightSx
              }
            />
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
            <Typography
              level="title-md"
              textColor="inherit"
              sx={TopInfoDefaultTextSx}
            >
              I create abstract oddities with a focus on
            </Typography>
            <Typography
              level="title-lg"
              sx={
                theme === "dark"
                  ? TopInfoCardInnerCCTDarkSx
                  : TopInfoCardInnerCCTLightSx
              }
            >
              colors + contrast + textures
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={theme === "dark" ? TopInfoCardTopDarkSx : TopInfoCardTopLightSx}
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
        <Box sx={TopInfoCardBoxColSx}>
          <Card
            variant="outlined"
            sx={theme === "dark" ? TopInfoCardTopDarkSx : TopInfoCardTopLightSx}
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
              I have always loved and appreciated art from afar,
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
              and I spent a long time doodling song lyrics and geometric shapes
              in school notebooks.
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
              I even explored creating my own glitch art from scratch by using
              programming
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
              and math to develop the filters and algorithms to overlay effects
              over my own photography.
            </Typography>
            <Divider
              orientation="horizontal"
              inset="none"
              sx={
                theme === "dark"
                  ? TopInfoCardOuterDividerDarkSx
                  : TopInfoCardOuterDividerLightSx
              }
            />
            <Typography
              level="body-md"
              textColor="inherit"
              sx={
                theme === "dark"
                  ? TopInfoCardOuterTypoDarkSx
                  : TopInfoCardOuterTypoLightSx
              }
            >
              Starting in January 2021, I decided to finally try my hand at
              digital art.
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
              I went from trying out stylus apps like PenUp on my phone to
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
              giving Procreate a shot and deciding to throw out the 'rulebook'
              of usual art.
            </Typography>
          </Card>
          <Card
            variant="soft"
            sx={
              theme === "dark"
                ? TopInfoCardBottomDarkSx
                : TopInfoCardBottomLightSx
            }
          >
            <Typography
              level="title-md"
              textColor="inherit"
              sx={TopInfoDefaultTextSx}
            >
              Since then, I have developed my focus of
            </Typography>
            <Typography
              level="title-lg"
              sx={
                theme === "dark"
                  ? TopInfoCardInnerCCTDarkSx
                  : TopInfoCardInnerCCTLightSx
              }
            >
              colors + contrast + textures
            </Typography>
            <Typography
              level="title-md"
              textColor="inherit"
              sx={TopInfoDefaultTextSx}
            >
              ...to always deliver something unique and interesting.
            </Typography>
            <Divider
              orientation="horizontal"
              inset="none"
              sx={
                theme === "dark"
                  ? TopInfoCardInnerCCTDividerDarkSx
                  : TopInfoCardInnerCCTDividerLightSx
              }
            />
            <Typography
              level="body-sm"
              textColor="inherit"
              sx={TopInfoDefaultTextSx}
            >
              I hope you enjoy my work!
            </Typography>
          </Card>
        </Box>
      )}
      {page && page === "Commissions" && (
        <Box sx={TopInfoCommBoxSx}>
          <Card
            sx={
              theme === "dark" ? TopInfoCommCardDarkSx : TopInfoCommCardLightSx
            }
          >
            <CardContent sx={TopInfoCardContentSx}>
              <Typography
                level="title-lg"
                sx={
                  theme === "dark"
                    ? TopInfoCommCardTitleDarkSx
                    : TopInfoCommCardTitleLightSx
                }
              >
                ZDA Works - Commissions
              </Typography>
              <Typography
                level="body-md"
                sx={
                  theme === "dark"
                    ? TopInfoCommCardBodyTopDarkSx
                    : TopInfoCommCardBodyTopLightSx
                }
              >
                I am here to create abstract art for you, with 4 available tiers
                to meet your budget and design needs.
              </Typography>
              <Divider
                orientation="horizontal"
                inset="none"
                sx={
                  theme === "dark"
                    ? TopInfoCommCardDividerDarkSx
                    : TopInfoCommCardDividerLightSx
                }
              />
              <Typography
                level="body-md"
                sx={
                  theme === "dark"
                    ? TopInfoCommCardBodyBtmDarkSx
                    : TopInfoCommCardBodyBtmLightSx
                }
              >
                If you are interested, simply click the 'Request A Commission'
                button and fill out the form.
              </Typography>
            </CardContent>
            <CardOverflow
              sx={
                theme === "dark"
                  ? TopInfoCommCardOverflowDarkSx
                  : TopInfoCommCardOverflowLightSx
              }
            >
              <CardActions buttonFlex="1">
                <ButtonGroup
                  variant="soft"
                  sx={
                    theme === "dark"
                      ? TopInfoButtonGroupDarkSx
                      : TopInfoButtonGroupLightSx
                  }
                >
                  <Button
                    onClick={() => clickLink("https://tinyurl.com/ZDACommForm")}
                    sx={
                      theme === "dark"
                        ? TopInfoCommCardBtnLeftDarkSx
                        : TopInfoCommCardBtnLeftLightSx
                    }
                  >
                    Request A Commission
                  </Button>
                  <Divider orientation="vertical" />
                  <Button
                    onClick={() =>
                      clickLink("https://tinyurl.com/ZDACommInfo5")
                    }
                    sx={
                      theme === "dark"
                        ? TopInfoCommCardBtnMidDarkSx
                        : TopInfoCommCardBtnMidLightSx
                    }
                  >
                    Commission Info
                  </Button>
                  <Divider orientation="vertical" />
                  <Button
                    onClick={() =>
                      clickLink("https://tinyurl.com/ZDACommExamples")
                    }
                    sx={
                      theme === "dark"
                        ? TopInfoCommCardBtnRightDarkSx
                        : TopInfoCommCardBtnRightLightSx
                    }
                  >
                    Art Tier Examples
                  </Button>
                </ButtonGroup>
              </CardActions>
            </CardOverflow>
          </Card>
        </Box>
      )}
    </Container>
  );
};

export default TopInfoSection;
