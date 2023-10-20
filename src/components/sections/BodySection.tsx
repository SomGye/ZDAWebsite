// TODO: Body Section Component
/**
 * Body/middle of the page, is very page-specific.
 * Home Body:
 * - Highlights of My Work (show top fave arts, links to music made?)
 * - Social Medias:
 *   - Show 'Reticulating Splines' art and links to social media:
 *     - Twitter/X, Instagram, Bluesky, Threads, Pebble
 * - Prints and Support:
 *   - Show 'Shores of Sanity' art and links to Print Shop (INPRNT), Ko-Fi, PayPal, Venmo
 *     - "Ko-Fi (HQ Files)"
 *   - Include subtext: "Any support is greatly appreciated!"
 * Portfolio Body:
 * NOTE: Should have a wider container to better fit the art!
 * - Art Highlights 2023
 * - Late 2022 - Early 2023
 * - Late 2021 - Early 2022
 *   - Subtitle: (Start of using Procreate)
 * - Early 2021
 *   - Subtitle: (Using Phone Stylus)
 * - "Commission Your Own Art" Button
 * Commissions Body:
 * - ZDA Commissions Button Container:
 *   - Request A Commission (Top)
 *   - Commission Info (Bottom)
 *   - Art Tier Examples (Bottom)
 * - Commission Tiers Container:
 *   - "Commission Tiers" text
 *   - Commission Tiers one sheet image
 * - Commission Examples Container:
 *   - "Commission Examples" text
 *   - 4-square image gallery showing each of 4 tiers as images
 * - Prints and Support:
 *   - Show 'Shores of Sanity' art and links to Print Shop (INPRNT), Ko-Fi, PayPal, Venmo
 *     - "Ko-Fi (HQ Files)"
 *   - Include subtext: "Any support is greatly appreciated!"
 *  NOTE: using horizontal rules between each section!
 */
import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import { pageAtom } from "../../states/PageAtom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardOverflow,
  Container,
  Divider,
  Typography,
} from "@mui/joy";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { clickLink } from "../../Helpers";
import {
  BodyContainerSx,
  BodyHomeBoxSx,
  BodyHomeHighlightsBoxSx,
  BodyHomeHighlightsCardBodyTopDarkSx,
  BodyHomeHighlightsCardBodyTopLightSx,
  BodyHomeHighlightsCardBtnDarkSx,
  BodyHomeHighlightsCardBtnLightSx,
  BodyHomeHighlightsCardContentSx,
  BodyHomeHighlightsCardDarkSx,
  BodyHomeHighlightsCardLightSx,
  BodyHomeHighlightsCardOverflowDarkSx,
  BodyHomeHighlightsCardOverflowLightSx,
  BodyHomeHighlightsCardTitleDarkSx,
  BodyHomeHighlightsCardTitleLightSx,
  BodyHomeHighlightsLightboxSx,
  BodyHomeHighlightsPhotoBoxSx,
  BodyHomeHightlightsCardOverflowBoxSx,
  BodyHomeSocmedCardBoxSx,
  BodyHomeSocmedCardButtonBoxSx,
  BodyHomeSocmedCardButtonDarkSx,
  BodyHomeSocmedCardButtonLightSx,
  BodyHomeSocmedCardDarkSx,
  BodyHomeSocmedCardLightSx,
  BodyHomeSocmedCardOuterBoxSx,
  BodyHomeSocmedCardTitleDarkSx,
  BodyHomeSocmedCardTitleLightSx,
  BodyHomeSocmedPhotoBoxSx,
} from "./BodySectionSx";
import "./BodySection.css";

const photos_highlights = [
  {
    src: "/assets/highlights_home/Wisps_of_Afterlife-prog8.jpg",
    width: 2480,
    height: 3508,
    srcSet: [
      {
        src: "/assets/highlights_home/Wisps_of_Afterlife-prog8-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/highlights_home/Wisps_of_Afterlife-prog8-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/highlights_home/Wisps_of_Afterlife-prog8-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "Wisps of Afterlife",
    title: "Wisps of Afterlife",
  },
  {
    src: "/assets/highlights_home/Kublai_Anubis_02-prog8.jpg",
    width: 2480,
    height: 3508,
    srcSet: [
      {
        src: "/assets/highlights_home/Kublai_Anubis_02-prog8-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/highlights_home/Kublai_Anubis_02-prog8-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/highlights_home/Kublai_Anubis_02-prog8-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "Kublai Anubis 02",
    title: "Kublai Anubis 02",
  },
  {
    src: "/assets/highlights_home/The_Lotus_of_Inspiration_-_ZDA-prog8.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/highlights_home/The_Lotus_of_Inspiration_-_ZDA-prog8-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/highlights_home/The_Lotus_of_Inspiration_-_ZDA-prog8-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/highlights_home/The_Lotus_of_Inspiration_-_ZDA-prog8-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "The Lotus of Inspiration",
    title: "The Lotus of Inspiration",
  },
  {
    src: "/assets/highlights_home/The_Chroma_Passage-prog8.jpg",
    width: 2480,
    height: 3508,
    srcSet: [
      {
        src: "/assets/highlights_home/The_Chroma_Passage-prog8-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/highlights_home/The_Chroma_Passage-prog8-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/highlights_home/The_Chroma_Passage-prog8-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "The Chroma Passage",
    title: "The Chroma Passage",
  },
];

const photos_socmed = [
  {
    src: "/assets/socmed/Saturated_Axons-prog8.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/socmed/Saturated_Axons-prog8-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/socmed/Saturated_Axons-prog8-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/socmed/Saturated_Axons-prog8-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "Saturated Axons",
    title: "Saturated Axons",
  },
];

const photos_prints_support = [
  {
    src: "/assets/prints_support/Shores_of_Sanity-prog8.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/prints_support/Shores_of_Sanity-prog8-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/prints_support/Shores_of_Sanity-prog8-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/prints_support/Shores_of_Sanity-prog8-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "Shores of Sanity",
    title: "Shores of Sanity",
  },
];

const BodySection = () => {
  const theme = useRecoilValue(themeAtom);
  const page = useRecoilValue(pageAtom);
  const [index, setIndex] = React.useState(-1);

  return (
    <Container className="BodyContainer" sx={BodyContainerSx}>
      {page && page === "Home" && (
        <Box sx={BodyHomeBoxSx}>
          <Box sx={BodyHomeHighlightsBoxSx}>
            <Card
              sx={
                theme === "dark"
                  ? BodyHomeHighlightsCardDarkSx
                  : BodyHomeHighlightsCardLightSx
              }
            >
              <CardContent sx={BodyHomeHighlightsCardContentSx}>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyHomeHighlightsCardTitleDarkSx
                      : BodyHomeHighlightsCardTitleLightSx
                  }
                >
                  Highlights of My Work
                </Typography>
                <Typography
                  level="body-xs"
                  sx={
                    theme === "dark"
                      ? BodyHomeHighlightsCardBodyTopDarkSx
                      : BodyHomeHighlightsCardBodyTopLightSx
                  }
                >
                  {"("}Please click to view the full-size image{")"}
                </Typography>
                <Divider orientation="horizontal" inset="none" />
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_highlights}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={200}
                    defaultContainerWidth={1000}
                    onClick={({ index: current }) => setIndex(current)}
                  />
                  <Lightbox
                    index={index}
                    slides={photos_highlights}
                    styles={BodyHomeHighlightsLightboxSx}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                  />
                </Box>
                <Divider orientation="horizontal" inset="none" />
              </CardContent>
              <CardOverflow
                sx={
                  theme === "dark"
                    ? BodyHomeHighlightsCardOverflowDarkSx
                    : BodyHomeHighlightsCardOverflowLightSx
                }
              >
                <Box sx={BodyHomeHightlightsCardOverflowBoxSx}>
                  <Button
                    onClick={() => clickLink("https://ko-fi.com/zerodayanubis")}
                    sx={
                      theme === "dark"
                        ? BodyHomeHighlightsCardBtnDarkSx
                        : BodyHomeHighlightsCardBtnLightSx
                    }
                  >
                    Download These Images at Ko-Fi
                  </Button>
                </Box>
              </CardOverflow>
            </Card>
          </Box>
          <Box sx={BodyHomeSocmedCardBoxSx}>
            <Card
              variant="outlined"
              sx={
                theme === "dark"
                  ? BodyHomeSocmedCardDarkSx
                  : BodyHomeSocmedCardLightSx
              }
            >
              <Typography
                level="body-md"
                textColor="inherit"
                sx={
                  theme === "dark"
                    ? BodyHomeSocmedCardTitleDarkSx
                    : BodyHomeSocmedCardTitleLightSx
                }
              >
                Social Media
              </Typography>
              <Box sx={BodyHomeSocmedCardOuterBoxSx}>
                <Box sx={BodyHomeSocmedCardButtonBoxSx}>
                  <Button
                    onClick={() => {
                      clickLink("https://twitter.com/ZDAWorks");
                    }}
                    sx={
                      theme === "dark"
                        ? BodyHomeSocmedCardButtonDarkSx
                        : BodyHomeSocmedCardButtonLightSx
                    }
                  >
                    Twitter/X
                  </Button>
                  <Button
                    onClick={() => {
                      clickLink(
                        "https://instagram.com/zerodayanubis?igshid=OGQ5ZDc2ODk2ZA=="
                      );
                    }}
                    sx={
                      theme === "dark"
                        ? BodyHomeSocmedCardButtonDarkSx
                        : BodyHomeSocmedCardButtonLightSx
                    }
                  >
                    Instagram
                  </Button>
                  <Button
                    onClick={() => {
                      clickLink("https://bsky.app/profile/zerodayanubis.com");
                    }}
                    sx={
                      theme === "dark"
                        ? BodyHomeSocmedCardButtonDarkSx
                        : BodyHomeSocmedCardButtonLightSx
                    }
                  >
                    Bluesky
                  </Button>
                  <Button
                    onClick={() => {
                      clickLink("https://www.threads.net/@zerodayanubis");
                    }}
                    sx={
                      theme === "dark"
                        ? BodyHomeSocmedCardButtonDarkSx
                        : BodyHomeSocmedCardButtonLightSx
                    }
                  >
                    Threads
                  </Button>
                  <Button
                    onClick={() => {
                      clickLink("https://pebble.is/ZeroDayAnubis");
                    }}
                    sx={
                      theme === "dark"
                        ? BodyHomeSocmedCardButtonDarkSx
                        : BodyHomeSocmedCardButtonLightSx
                    }
                  >
                    Pebble
                  </Button>
                  <Button
                    onClick={() => {
                      clickLink("https://ohai.social/@ZeroDayAnubis");
                    }}
                    sx={
                      theme === "dark"
                        ? BodyHomeSocmedCardButtonDarkSx
                        : BodyHomeSocmedCardButtonLightSx
                    }
                  >
                    Mastodon
                  </Button>
                </Box>
                <Box sx={BodyHomeSocmedPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_socmed}
                    breakpoints={[320, 600, 1200, 1824]}
                    columns={1}
                    spacing={1}
                    padding={1}
                    defaultContainerWidth={600}
                  />
                </Box>
              </Box>
            </Card>
          </Box>
          <Box>
            <h3>
              <i>
                <b>Prints and Support</b>
              </i>
            </h3>
            <div>................</div>
            <h4>
              <i>Any support is greatly appreciated!</i>
            </h4>
          </Box>
        </Box>
      )}
      {page && page === "Portfolio" && (
        <Box>
          <Box>
            <h3>
              <i>Art Highlights 2023</i>
            </h3>
          </Box>
          <Box>
            <h3>
              <i>Late 2022 - Early 2023</i>
            </h3>
          </Box>
          <Box>
            <h3>
              <i>Late 2021 - Early 2022</i>
            </h3>
            <div>................</div>
            <h4>
              <i>(Start of using Procreate)</i>
            </h4>
          </Box>
          <Box>
            <h3>
              <i>Early 2021</i>
            </h3>
            <div>................</div>
            <h4>
              <i>(Using Phone Stylus)</i>
            </h4>
          </Box>
          <Box>
            <Button
              onClick={() => clickLink("https://tinyurl.com/ZDACommForm")}
              variant="solid"
              color="primary"
            >
              Commission Your Own Art
            </Button>
          </Box>
        </Box>
      )}
      {page && page === "Commissions" && (
        <Box>
          <Box>
            {/* TODO: Use React Card - Pricing example for the tiers, with Commission Me button at bottom of each */}
            {/* Link: https://mui.com/joy-ui/react-card/#pricing-card */}
            <h3>
              <i>Commission Tiers</i>
            </h3>
          </Box>
          <Box>
            <h3>
              <i>Commission Examples</i>
            </h3>
          </Box>
          <Box>
            <h3>
              <i>
                <b>Prints and Support</b>
              </i>
            </h3>
            <div>................</div>
            <h4>
              <i>Any support is greatly appreciated!</i>
            </h4>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default BodySection;
