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
  BodyPortfolioCardDarkSx,
  BodyPortfolioCardLightSx,
  BodyPortfolioCardTitleDarkSx,
  BodyPortfolioCardTitleLightSx,
  BodyPortfolioCardSubtitleDarkSx,
  BodyPortfolioCardSubtitleLightSx,
  BodyPortfolioCardDividerDarkSx,
  BodyPortfolioCardDividerLightSx,
  BodyPortfolioCommBtnDarkSx,
  BodyPortfolioCommBtnLightSx,
  BodyPortfolioCommBoxSx,
  BodyHomeCardBoxSx,
  BodyPortfolioCardBoxSx,
  BodyPortfolioCardSecondTitleDarkSx,
  BodyPortfolioCardSecondTitleLightSx,
  BodyPortfolioCommBtnDividerDarkSx,
  BodyPortfolioCommBtnDividerLightSx,
  BodyPortfolioCommBtnDividerBoxSx,
  BodyPortfolioCommBtnDarkHelperSx,
  BodyPortfolioCommBtnLightHelperSx,
} from "./BodySectionSx";
import "./BodySection.css";
import {
  photos_highlights,
  photos_highlights_srcSet,
  photos_portfolio_early2021_huion,
  photos_portfolio_early2021_huion_srcSet,
  photos_portfolio_early2021_penup,
  photos_portfolio_early2021_penup_srcSet,
  photos_portfolio_early2021_procreate,
  photos_portfolio_early2021_procreate_srcSet,
  photos_portfolio_late2021,
  photos_portfolio_late2021_srcSet,
  photos_portfolio_late2022,
  photos_portfolio_late2022_srcSet,
  photos_portfolio_late2023,
  photos_portfolio_late2023_srcSet,
  photos_prints_support,
  photos_socmed,
} from "./BodySectionPhotos";

const BodySection = () => {
  const theme = useRecoilValue(themeAtom);
  const page = useRecoilValue(pageAtom);
  const [idx_highlights, setIdx_highlights] = React.useState(-1);
  const [idx_late2023, setIdx_late2023] = React.useState(-1);
  const [idx_late2022, setIdx_late2022] = React.useState(-1);
  const [idx_late2021, setIdx_late2021] = React.useState(-1);
  const [idx_early2021_pc, setIdx_early2021_pc] = React.useState(-1);
  const [idx_early2021_h, setIdx_early2021_h] = React.useState(-1);
  const [idx_early2021_p, setIdx_early2021_p] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const captionsRef = React.useRef(null) as any;

  return (
    <Container className="BodyContainer" sx={BodyContainerSx}>
      {page && page === "Home" && (
        <Box sx={BodyHomeCardBoxSx}>
          <Box sx={BodyHomeCardBoxSx}>
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
                    onClick={({ index: current }) => setIdx_highlights(current)}
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
                    index={idx_highlights}
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
                    open={idx_highlights >= 0}
                    close={() => setIdx_highlights(-1)}
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
          <Box sx={BodyPortfolioCardBoxSx}>
            <Card
              sx={
                theme === "dark"
                  ? BodyPortfolioCardDarkSx
                  : BodyPortfolioCardLightSx
              }
            >
              <CardContent sx={BodyHomeHighlightsCardContentSx}>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardTitleDarkSx
                      : BodyPortfolioCardTitleLightSx
                  }
                >
                  Late 2023
                </Typography>
                <Typography
                  level="body-xs"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardSubtitleDarkSx
                      : BodyPortfolioCardSubtitleLightSx
                  }
                >
                  {"("}Please click to view the full-size image{")"}
                </Typography>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_late2023_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={220}
                    defaultContainerWidth={1000}
                    onClick={({ index: current }) => setIdx_late2023(current)}
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
                    index={idx_late2023}
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
                    open={idx_late2023 >= 0}
                    close={() => setIdx_late2023(-1)}
                  />
                </Box>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
              </CardContent>
            </Card>
          </Box>
          <Box sx={BodyPortfolioCardBoxSx}>
            <Card
              sx={
                theme === "dark"
                  ? BodyPortfolioCardDarkSx
                  : BodyPortfolioCardLightSx
              }
            >
              <CardContent sx={BodyHomeHighlightsCardContentSx}>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardTitleDarkSx
                      : BodyPortfolioCardTitleLightSx
                  }
                >
                  Late 2022 - Early 2023
                </Typography>
                <Typography
                  level="body-xs"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardSubtitleDarkSx
                      : BodyPortfolioCardSubtitleLightSx
                  }
                >
                  {"("}Please click to view the full-size image{")"}
                </Typography>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_late2022_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={220}
                    defaultContainerWidth={1000}
                    onClick={({ index: current }) => setIdx_late2022(current)}
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
                    index={idx_late2022}
                    render={{
                      iconCaptionsVisible: () => <ClosedCaptionRoundedIcon />,
                      iconCaptionsHidden: () => (
                        <ClosedCaptionDisabledRoundedIcon />
                      ),
                      iconClose: () => <CloseRoundedIcon />,
                    }}
                    slides={photos_portfolio_late2022}
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
                    open={idx_late2022 >= 0}
                    close={() => setIdx_late2022(-1)}
                  />
                </Box>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
              </CardContent>
            </Card>
          </Box>
          <Box sx={BodyPortfolioCardBoxSx}>
            <Card
              sx={
                theme === "dark"
                  ? BodyPortfolioCardDarkSx
                  : BodyPortfolioCardLightSx
              }
            >
              <CardContent sx={BodyHomeHighlightsCardContentSx}>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardTitleDarkSx
                      : BodyPortfolioCardTitleLightSx
                  }
                >
                  Late 2021 - Early 2022
                </Typography>
                <Typography
                  level="body-xs"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardSubtitleDarkSx
                      : BodyPortfolioCardSubtitleLightSx
                  }
                >
                  {"("}Please click to view the full-size image{")"}
                </Typography>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_late2021_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={220}
                    defaultContainerWidth={1000}
                    onClick={({ index: current }) => setIdx_late2021(current)}
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
                    index={idx_late2021}
                    render={{
                      iconCaptionsVisible: () => <ClosedCaptionRoundedIcon />,
                      iconCaptionsHidden: () => (
                        <ClosedCaptionDisabledRoundedIcon />
                      ),
                      iconClose: () => <CloseRoundedIcon />,
                    }}
                    slides={photos_portfolio_late2021}
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
                    open={idx_late2021 >= 0}
                    close={() => setIdx_late2021(-1)}
                  />
                </Box>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
              </CardContent>
            </Card>
          </Box>
          <Box sx={BodyPortfolioCardBoxSx}>
            <Card
              sx={
                theme === "dark"
                  ? BodyPortfolioCardDarkSx
                  : BodyPortfolioCardLightSx
              }
            >
              <CardContent sx={BodyHomeHighlightsCardContentSx}>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardTitleDarkSx
                      : BodyPortfolioCardTitleLightSx
                  }
                >
                  Early 2021
                </Typography>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardSecondTitleDarkSx
                      : BodyPortfolioCardSecondTitleLightSx
                  }
                >
                  Procreate: First Works
                </Typography>
                <Typography
                  level="body-xs"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardSubtitleDarkSx
                      : BodyPortfolioCardSubtitleLightSx
                  }
                >
                  {"("}Please click to view the full-size image{")"}
                </Typography>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_early2021_procreate_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={220}
                    defaultContainerWidth={1000}
                    onClick={({ index: current }) =>
                      setIdx_early2021_pc(current)
                    }
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
                    index={idx_early2021_pc}
                    render={{
                      iconCaptionsVisible: () => <ClosedCaptionRoundedIcon />,
                      iconCaptionsHidden: () => (
                        <ClosedCaptionDisabledRoundedIcon />
                      ),
                      iconClose: () => <CloseRoundedIcon />,
                    }}
                    slides={photos_portfolio_early2021_procreate}
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
                    open={idx_early2021_pc >= 0}
                    close={() => setIdx_early2021_pc(-1)}
                  />
                </Box>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
              </CardContent>
            </Card>
          </Box>
          <Box sx={BodyPortfolioCardBoxSx}>
            <Card
              sx={
                theme === "dark"
                  ? BodyPortfolioCardDarkSx
                  : BodyPortfolioCardLightSx
              }
            >
              <CardContent sx={BodyHomeHighlightsCardContentSx}>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardTitleDarkSx
                      : BodyPortfolioCardTitleLightSx
                  }
                >
                  Early 2021
                </Typography>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardSecondTitleDarkSx
                      : BodyPortfolioCardSecondTitleLightSx
                  }
                >
                  Huion Sketch (Phone)
                </Typography>
                <Typography
                  level="body-xs"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardSubtitleDarkSx
                      : BodyPortfolioCardSubtitleLightSx
                  }
                >
                  {"("}Please click to view the full-size image{")"}
                </Typography>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_early2021_huion_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={220}
                    defaultContainerWidth={1000}
                    onClick={({ index: current }) =>
                      setIdx_early2021_h(current)
                    }
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
                    index={idx_early2021_h}
                    render={{
                      iconCaptionsVisible: () => <ClosedCaptionRoundedIcon />,
                      iconCaptionsHidden: () => (
                        <ClosedCaptionDisabledRoundedIcon />
                      ),
                      iconClose: () => <CloseRoundedIcon />,
                    }}
                    slides={photos_portfolio_early2021_huion}
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
                    open={idx_early2021_h >= 0}
                    close={() => setIdx_early2021_h(-1)}
                  />
                </Box>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
              </CardContent>
            </Card>
          </Box>
          <Box sx={BodyPortfolioCardBoxSx}>
            <Card
              sx={
                theme === "dark"
                  ? BodyPortfolioCardDarkSx
                  : BodyPortfolioCardLightSx
              }
            >
              <CardContent sx={BodyHomeHighlightsCardContentSx}>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardTitleDarkSx
                      : BodyPortfolioCardTitleLightSx
                  }
                >
                  Early 2021
                </Typography>
                <Typography
                  level="title-lg"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardSecondTitleDarkSx
                      : BodyPortfolioCardSecondTitleLightSx
                  }
                >
                  PenUp (Phone)
                </Typography>
                <Typography
                  level="body-xs"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardSubtitleDarkSx
                      : BodyPortfolioCardSubtitleLightSx
                  }
                >
                  {"("}Please click to view the full-size image{")"}
                </Typography>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_early2021_penup_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={220}
                    defaultContainerWidth={1000}
                    onClick={({ index: current }) =>
                      setIdx_early2021_p(current)
                    }
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
                    index={idx_early2021_p}
                    render={{
                      iconCaptionsVisible: () => <ClosedCaptionRoundedIcon />,
                      iconCaptionsHidden: () => (
                        <ClosedCaptionDisabledRoundedIcon />
                      ),
                      iconClose: () => <CloseRoundedIcon />,
                    }}
                    slides={photos_portfolio_early2021_penup}
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
                    open={idx_early2021_p >= 0}
                    close={() => setIdx_early2021_p(-1)}
                  />
                </Box>
                <Divider
                  orientation="horizontal"
                  inset="none"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCardDividerDarkSx
                      : BodyPortfolioCardDividerLightSx
                  }
                />
              </CardContent>
            </Card>
          </Box>
          {/* TODO: fix targetRowHeight for above images! */}
          <Box sx={BodyPortfolioCommBoxSx}>
            <Box sx={BodyPortfolioCommBtnDividerBoxSx}>
              <Divider
                orientation="horizontal"
                inset="none"
                sx={
                  theme === "dark"
                    ? BodyPortfolioCommBtnDividerDarkSx
                    : BodyPortfolioCommBtnDividerLightSx
                }
              />
            </Box>
            <Box>
              <Button
                onClick={() => clickLink("https://tinyurl.com/ZDACommForm")}
                sx={
                  theme === "dark"
                    ? BodyPortfolioCommBtnDarkSx
                    : BodyPortfolioCommBtnLightSx
                }
              >
                <Typography
                  className="Portfolio-Button-Helper"
                  sx={
                    theme === "dark"
                      ? BodyPortfolioCommBtnDarkHelperSx
                      : BodyPortfolioCommBtnLightHelperSx
                  }
                >
                  Commission Your Own Art
                </Typography>
                Commission Your Own Art
              </Button>
            </Box>
            <Box sx={BodyPortfolioCommBtnDividerBoxSx}>
              <Divider
                orientation="horizontal"
                inset="none"
                sx={
                  theme === "dark"
                    ? BodyPortfolioCommBtnDividerDarkSx
                    : BodyPortfolioCommBtnDividerLightSx
                }
              />
            </Box>
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
