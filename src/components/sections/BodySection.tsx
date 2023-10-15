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
} from "./BodySectionSx";
import "./BodySection.css";

const photos = [
  {
    src: "src/assets/highlights_home/Wisps_of_Afterlife-prog8.jpg",
    width: 2480,
    height: 3508,
    alt: "Wisps of Afterlife",
    title: "Wisps of Afterlife",
  },
  {
    src: "src/assets/highlights_home/Kublai_Anubis_02-prog8.jpg",
    width: 2480,
    height: 3508,
    alt: "Kublai Anubis 02",
    title: "Kublai Anubis 02",
  },
  {
    src: "src/assets/highlights_home/The_Lotus_of_Inspiration_-_ZDA-prog8.jpg",
    width: 2360,
    height: 1640,
    alt: "The Lotus of Inspiration",
    title: "The Lotus of Inspiration",
  },
  {
    src: "src/assets/highlights_home/The_Chroma_Passage-prog8.jpg",
    width: 2480,
    height: 3508,
    alt: "The Chroma Passage",
    title: "The Chroma Passage",
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
                    photos={photos}
                    targetRowHeight={300}
                    onClick={({ index: current }) => setIndex(current)}
                  />
                  <Lightbox
                    index={index}
                    slides={photos}
                    styles={BodyHomeHighlightsLightboxSx}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                  />
                </Box>
              </CardContent>
              <CardOverflow
                sx={
                  theme === "dark"
                    ? BodyHomeHighlightsCardOverflowDarkSx
                    : BodyHomeHighlightsCardOverflowLightSx
                }
              >
                <Box sx={BodyHomeHightlightsCardOverflowBoxSx} />
              </CardOverflow>
            </Card>
          </Box>
          <Box>
            <h3>
              <i>
                <b>Social Media</b>
              </i>
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
