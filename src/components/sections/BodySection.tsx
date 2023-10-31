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
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ClosedCaptionRoundedIcon from "@mui/icons-material/ClosedCaptionRounded";
import ClosedCaptionDisabledRoundedIcon from "@mui/icons-material/ClosedCaptionDisabledRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { clickLink } from "../../Helpers";
import {
  BodyContainerSx,
  BodyHomeBoxSx,
  BodyHomeHighlightsBoxSx,
  BodyHomeHighlightsCardSubtitleDarkSx,
  BodyHomeHighlightsCardSubtitleLightSx,
  BodyHomeHighlightsCardBtnDarkSx,
  BodyHomeHighlightsCardBtnLightSx,
  BodyHomeHighlightsCardContentSx,
  BodyHomeHighlightsCardDarkSx,
  BodyHomeHighlightsCardDividerDarkSx,
  BodyHomeHighlightsCardDividerLightSx,
  BodyHomeHighlightsCardLightSx,
  BodyHomeHighlightsCardOverflowDarkSx,
  BodyHomeHighlightsCardOverflowLightSx,
  BodyHomeHighlightsCardTitleDarkSx,
  BodyHomeHighlightsCardTitleLightSx,
  BodyHomeHighlightsPhotoBoxSx,
  BodyHomeHighlightsCardOverflowBoxSx,
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
  BodyHomeSupportCardButtonBoxSx,
  BodyHomeSupportCardButtonDarkSx,
  BodyHomeSupportCardButtonLightSx,
  BodyHomeSupportCardDarkSx,
  BodyHomeSupportCardLightSx,
  BodyHomeSupportCardOuterBoxSx,
  BodyHomeSupportCardStarDarkSx,
  BodyHomeSupportCardStarLightSx,
  BodyHomeSupportCardSubtitleDarkSx,
  BodyHomeSupportCardSubtitleLightSx,
  BodyHomeSupportCardTitleDarkSx,
  BodyHomeSupportCardTitleLightSx,
  BodyPortfolioLatestCardDarkSx,
  BodyPortfolioLatestCardLightSx,
  BodyPortfolioLatestCardTitleDarkSx,
  BodyPortfolioLatestCardTitleLightSx,
  BodyPortfolioLatestCardSubtitleDarkSx,
  BodyPortfolioLatestCardSubtitleLightSx,
  BodyPortfolioLatestCardDividerDarkSx,
  BodyPortfolioLatestCardDividerLightSx,
  BodyPortfolioLatestCardBtnDarkSx,
  BodyPortfolioLatestCardBtnLightSx,
} from "./BodySectionSx";
import "./BodySection.css";
import {
  photos_highlights,
  photos_highlights_srcSet,
  photos_portfolio_late2023,
  photos_portfolio_late2023_srcSet,
  photos_prints_support,
  photos_socmed,
} from "./BodySectionPhotos";

const BodySection = () => {
  const theme = useRecoilValue(themeAtom);
  const page = useRecoilValue(pageAtom);
  const [index, setIndex] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const captionsRef = React.useRef(null) as any;

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
                      ? BodyHomeHighlightsCardSubtitleDarkSx
                      : BodyHomeHighlightsCardSubtitleLightSx
                  }
                >
                  {"("}Please click to view the full-size image{")"}
                </Typography>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyHomeHighlightsCardDividerDarkSx
                      : BodyHomeHighlightsCardDividerLightSx
                  }
                />
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_highlights_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={200}
                    defaultContainerWidth={1000}
                    onClick={({ index: current }) => setIndex(current)}
                  />
                  <Lightbox
                    plugins={[Captions]}
                    captions={{
                      ref: captionsRef,
                      showToggle: true,
                      descriptionTextAlign: "center",
                    }}
                    on={{
                      click: () => {
                        (captionsRef.current?.visible
                          ? captionsRef.current?.hide
                          : captionsRef.current?.show)?.();
                      },
                    }}
                    index={index}
                    render={{
                      iconCaptionsVisible: () => <ClosedCaptionRoundedIcon />,
                      iconCaptionsHidden: () => (
                        <ClosedCaptionDisabledRoundedIcon />
                      ),
                      iconClose: () => <CloseRoundedIcon />,
                    }}
                    slides={photos_highlights}
                    styles={{
                      container: {
                        backdropFilter: "blur(16px)",
                        backgroundColor: "rgba(0,0,0,0.8)",
                      },
                      captionsTitle: {
                        fontSize: "16px",
                        fontWeight: "400",
                      },
                      captionsTitleContainer: {
                        height: "16px",
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        top: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                  />
                </Box>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyHomeHighlightsCardDividerDarkSx
                      : BodyHomeHighlightsCardDividerLightSx
                  }
                />
              </CardContent>
              <CardOverflow
                sx={
                  theme === "dark"
                    ? BodyHomeHighlightsCardOverflowDarkSx
                    : BodyHomeHighlightsCardOverflowLightSx
                }
              >
                <Box sx={BodyHomeHighlightsCardOverflowBoxSx}>
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
          <Box sx={BodyHomeSocmedCardBoxSx}>
            <Card
              variant="outlined"
              sx={
                theme === "dark"
                  ? BodyHomeSupportCardDarkSx
                  : BodyHomeSupportCardLightSx
              }
            >
              <Typography
                level="body-md"
                textColor="inherit"
                sx={
                  theme === "dark"
                    ? BodyHomeSupportCardTitleDarkSx
                    : BodyHomeSupportCardTitleLightSx
                }
              >
                Prints and Support
              </Typography>
              <Box sx={BodyHomeSupportCardOuterBoxSx}>
                <Box sx={BodyHomeSupportCardButtonBoxSx}>
                  <Button
                    onClick={() => {
                      clickLink("https://tinyurl.com/ZDAPrints");
                    }}
                    sx={
                      theme === "dark"
                        ? BodyHomeSupportCardButtonDarkSx
                        : BodyHomeSupportCardButtonLightSx
                    }
                  >
                    Print Shop
                  </Button>
                  <Button
                    onClick={() => {
                      clickLink("https://ko-fi.com/zerodayanubis");
                    }}
                    sx={
                      theme === "dark"
                        ? BodyHomeSupportCardButtonDarkSx
                        : BodyHomeSupportCardButtonLightSx
                    }
                  >
                    Ko-Fi (HQ Files)
                  </Button>
                  <Button
                    onClick={() => {
                      clickLink("https://paypal.me/ZeroDayAnubis");
                    }}
                    sx={
                      theme === "dark"
                        ? BodyHomeSupportCardButtonDarkSx
                        : BodyHomeSupportCardButtonLightSx
                    }
                  >
                    PayPal
                  </Button>
                  <Button
                    onClick={() => {
                      clickLink("https://account.venmo.com/u/somgye");
                    }}
                    sx={
                      theme === "dark"
                        ? BodyHomeSupportCardButtonDarkSx
                        : BodyHomeSupportCardButtonLightSx
                    }
                  >
                    Venmo
                  </Button>
                  <Typography
                    level="body-xs"
                    sx={
                      theme === "dark"
                        ? BodyHomeSupportCardSubtitleDarkSx
                        : BodyHomeSupportCardSubtitleLightSx
                    }
                  >
                    <StarRoundedIcon
                      sx={
                        theme === "dark"
                          ? BodyHomeSupportCardStarDarkSx
                          : BodyHomeSupportCardStarLightSx
                      }
                    />
                    Any support is greatly appreciated!
                    <StarRoundedIcon
                      sx={
                        theme === "dark"
                          ? BodyHomeSupportCardStarDarkSx
                          : BodyHomeSupportCardStarLightSx
                      }
                    />
                  </Typography>
                </Box>
                <Box sx={BodyHomeSocmedPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_prints_support}
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
        </Box>
      )}
      {page && page === "Portfolio" && (
        <Box>
          <Box sx={BodyHomeHighlightsBoxSx}>
            <Card
              sx={
                theme === "dark"
                  ? BodyPortfolioLatestCardDarkSx
                  : BodyPortfolioLatestCardLightSx
              }
            >
              <CardContent sx={BodyHomeHighlightsCardContentSx}>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioLatestCardTitleDarkSx
                      : BodyPortfolioLatestCardTitleLightSx
                  }
                >
                  Late 2023
                </Typography>
                <Typography
                  level="body-xs"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioLatestCardSubtitleDarkSx
                      : BodyPortfolioLatestCardSubtitleLightSx
                  }
                >
                  {"("}Please click to view the full-size image{")"}
                </Typography>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioLatestCardDividerDarkSx
                      : BodyPortfolioLatestCardDividerLightSx
                  }
                />
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_late2023_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={220}
                    defaultContainerWidth={1000}
                    onClick={({ index: current }) => setIndex(current)}
                  />
                  <Lightbox
                    plugins={[Captions]}
                    captions={{
                      ref: captionsRef,
                      showToggle: true,
                      descriptionTextAlign: "center",
                    }}
                    on={{
                      click: () => {
                        (captionsRef.current?.visible
                          ? captionsRef.current?.hide
                          : captionsRef.current?.show)?.();
                      },
                    }}
                    index={index}
                    render={{
                      iconCaptionsVisible: () => <ClosedCaptionRoundedIcon />,
                      iconCaptionsHidden: () => (
                        <ClosedCaptionDisabledRoundedIcon />
                      ),
                      iconClose: () => <CloseRoundedIcon />,
                    }}
                    slides={photos_portfolio_late2023}
                    styles={{
                      container: {
                        backdropFilter: "blur(16px)",
                        backgroundColor: "rgba(0,0,0,0.8)",
                      },
                      captionsTitle: {
                        fontSize: "16px",
                        fontWeight: "400",
                      },
                      captionsTitleContainer: {
                        height: "16px",
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        top: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                  />
                </Box>
                {/* NOTE: Only have Divider and CardOverflow/Button on LATEST Card */}
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioLatestCardDividerDarkSx
                      : BodyPortfolioLatestCardDividerLightSx
                  }
                />
              </CardContent>
              <CardOverflow
                sx={
                  theme === "dark"
                    ? BodyHomeHighlightsCardOverflowDarkSx
                    : BodyHomeHighlightsCardOverflowLightSx
                }
              >
                <Box sx={BodyHomeHighlightsCardOverflowBoxSx}>
                  <Button
                    onClick={() => clickLink("https://tinyurl.com/ZDACommForm")}
                    sx={
                      theme === "dark"
                        ? BodyPortfolioLatestCardBtnDarkSx
                        : BodyPortfolioLatestCardBtnLightSx
                    }
                  >
                    Commission Your Own Art
                  </Button>
                </Box>
              </CardOverflow>
            </Card>
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
          </Box>
          <Box>
            <h3>
              <i>Early 2021</i>
            </h3>
            <Box>
              <h4>
                <i>(Procreate: First Works)</i>
              </h4>
            </Box>
            <Box>
              <h4>
                <i>(Huion Sketch (Phone))</i>
              </h4>
            </Box>
            <Box>
              <h4>
                <i>(PenUp (Phone))</i>
              </h4>
            </Box>
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
