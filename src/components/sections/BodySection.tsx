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
  CardActions,
  CardContent,
  CardOverflow,
  Container,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
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
  BodyCommsTiersTypographyDarkSx,
  BodyCommsTiersTypographyLightSx,
  BodyCommsTiersCardsBoxSx,
  BodyCommsTiersCardBasicDarkSx,
  BodyCommsTiersCardBasicLightSx,
  BodyCommsTiersCardStandardDarkSx,
  BodyCommsTiersCardStandardLightSx,
  BodyCommsTiersCardAbstractifyDarkSx,
  BodyCommsTiersCardAbstractifyLightSx,
  BodyCommsTiersCardPremiumDarkSx,
  BodyCommsTiersCardPremiumLightSx,
  BodyCommsTiersCardBasicTitleDarkSx,
  BodyCommsTiersCardBasicTitleLightSx,
  BodyCommsTiersBoxSx,
  BodyCommsTiersCardBasicDescOuterDarkSx,
  BodyCommsTiersCardBasicDescOuterLightSx,
  BodyCommsTiersCardBasicDescInnerDarkSx,
  BodyCommsTiersCardBasicDescInnerLightSx,
  BodyCommsTiersCardBasicDescBoxSx,
  BodyCommsTiersCardBasicListIconDarkSx,
  BodyCommsTiersCardBasicListIconLightSx,
  BodyCommsTiersCardBasicListItemDarkSx,
  BodyCommsTiersCardBasicListItemLightSx,
  BodyCommsTiersCardBasicPricingBoxSx,
  BodyCommsTiersCardBasicCardActionsSx,
  BodyCommsTiersCardBasicPricingLeftDarkSx,
  BodyCommsTiersCardBasicPricingLeftLightSx,
  BodyCommsTiersCardBasicPricingRightDarkSx,
  BodyCommsTiersCardBasicPricingRightLightSx,
  BodyCommsTiersCardBasicBtnDarkSx,
  BodyCommsTiersCardBasicBtnLightSx,
  BodyCommsTiersCardStandardTitleDarkSx,
  BodyCommsTiersCardStandardTitleLightSx,
  BodyCommsTiersCardStandardDescBoxSx,
  BodyCommsTiersCardStandardDescOuterDarkSx,
  BodyCommsTiersCardStandardDescOuterLightSx,
  BodyCommsTiersCardStandardDescInnerDarkSx,
  BodyCommsTiersCardStandardDescInnerLightSx,
  BodyCommsTiersCardStandardListItemDarkSx,
  BodyCommsTiersCardStandardListItemLightSx,
  BodyCommsTiersCardStandardListIconDarkSx,
  BodyCommsTiersCardStandardListIconLightSx,
  BodyCommsTiersCardStandardCardActionsSx,
  BodyCommsTiersCardStandardPricingBoxSx,
  BodyCommsTiersCardStandardPricingLeftDarkSx,
  BodyCommsTiersCardStandardPricingLeftLightSx,
  BodyCommsTiersCardStandardPricingRightDarkSx,
  BodyCommsTiersCardStandardPricingRightLightSx,
  BodyCommsTiersCardStandardBtnDarkSx,
  BodyCommsTiersCardStandardBtnLightSx,
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
import {
  HorizontalRuleRounded,
  NavigateNextRounded,
} from "@mui/icons-material";

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
                    targetRowHeight={400}
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
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_late2023_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={220}
                    rowConstraints={{ maxPhotos: 4, minPhotos: 1 }}
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
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_late2022_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={220}
                    rowConstraints={{ maxPhotos: 5, minPhotos: 2 }}
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
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_late2021_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={170}
                    rowConstraints={{ maxPhotos: 6, minPhotos: 2 }}
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
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_early2021_procreate_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={163}
                    rowConstraints={{ maxPhotos: 4, minPhotos: 2 }}
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
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_early2021_huion_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={150}
                    rowConstraints={{ maxPhotos: 4, minPhotos: 2 }}
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
                <Box sx={BodyHomeHighlightsPhotoBoxSx}>
                  <PhotoAlbum
                    layout="rows"
                    photos={photos_portfolio_early2021_penup_srcSet}
                    breakpoints={[320, 600, 1200, 1824]}
                    targetRowHeight={160}
                    rowConstraints={{ maxPhotos: 8, minPhotos: 3 }}
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
              </CardContent>
            </Card>
          </Box>
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
        <Box sx={BodyCommsTiersBoxSx}>
          <Typography
            level="title-md"
            sx={
              theme === "dark"
                ? BodyCommsTiersTypographyDarkSx
                : BodyCommsTiersTypographyLightSx
            }
          >
            Commission Tiers
          </Typography>
          <Box sx={BodyCommsTiersCardsBoxSx}>
            <Card
              size="lg"
              variant="solid"
              sx={
                theme === "dark"
                  ? BodyCommsTiersCardBasicDarkSx
                  : BodyCommsTiersCardBasicLightSx
              }
            >
              <Typography
                level="h2"
                sx={
                  theme === "dark"
                    ? BodyCommsTiersCardBasicTitleDarkSx
                    : BodyCommsTiersCardBasicTitleLightSx
                }
              >
                Basic
              </Typography>
              <Box sx={BodyCommsTiersCardBasicDescBoxSx}>
                <Typography
                  level="title-md"
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardBasicDescOuterDarkSx
                      : BodyCommsTiersCardBasicDescOuterLightSx
                  }
                >
                  Description:
                  <br />
                  <Typography
                    level="body-sm"
                    sx={
                      theme === "dark"
                        ? BodyCommsTiersCardBasicDescInnerDarkSx
                        : BodyCommsTiersCardBasicDescInnerLightSx
                    }
                  >
                    Quick sketch and composition with focus on interesting
                    colors and contrast.
                  </Typography>
                </Typography>
              </Box>
              <Divider inset="none" />
              <List size="sm" sx={{ mx: "2px" }}>
                <ListItem
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardBasicListItemDarkSx
                      : BodyCommsTiersCardBasicListItemLightSx
                  }
                >
                  <ListItemDecorator>
                    <HorizontalRuleRounded
                      sx={
                        theme === "dark"
                          ? BodyCommsTiersCardBasicListIconDarkSx
                          : BodyCommsTiersCardBasicListIconLightSx
                      }
                    />
                  </ListItemDecorator>
                  Layers: 3 - 5
                </ListItem>
                <ListItem
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardBasicListItemDarkSx
                      : BodyCommsTiersCardBasicListItemLightSx
                  }
                >
                  <ListItemDecorator>
                    <HorizontalRuleRounded
                      sx={
                        theme === "dark"
                          ? BodyCommsTiersCardBasicListIconDarkSx
                          : BodyCommsTiersCardBasicListIconLightSx
                      }
                    />
                  </ListItemDecorator>
                  Minimal # of effects
                </ListItem>
                <ListItem
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardBasicListItemDarkSx
                      : BodyCommsTiersCardBasicListItemLightSx
                  }
                >
                  <ListItemDecorator>
                    <HorizontalRuleRounded
                      sx={
                        theme === "dark"
                          ? BodyCommsTiersCardBasicListIconDarkSx
                          : BodyCommsTiersCardBasicListIconLightSx
                      }
                    />
                  </ListItemDecorator>
                  Simple shading + blending
                </ListItem>
                <ListItem
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardBasicListItemDarkSx
                      : BodyCommsTiersCardBasicListItemLightSx
                  }
                >
                  <ListItemDecorator>
                    <HorizontalRuleRounded
                      sx={
                        theme === "dark"
                          ? BodyCommsTiersCardBasicListIconDarkSx
                          : BodyCommsTiersCardBasicListIconLightSx
                      }
                    />
                  </ListItemDecorator>
                  Turnaround Time: ~1 day
                </ListItem>
              </List>
              <Divider inset="none" />
              <CardActions sx={BodyCommsTiersCardBasicCardActionsSx}>
                <Box sx={BodyCommsTiersCardBasicPricingBoxSx}>
                  <Typography
                    level="title-lg"
                    sx={
                      theme === "dark"
                        ? BodyCommsTiersCardBasicPricingLeftDarkSx
                        : BodyCommsTiersCardBasicPricingLeftLightSx
                    }
                  >
                    $ 10{" "}
                  </Typography>
                  <Typography
                    sx={
                      theme === "dark"
                        ? BodyCommsTiersCardBasicPricingRightDarkSx
                        : BodyCommsTiersCardBasicPricingRightLightSx
                    }
                  >
                    (PayPal/Ko-fi)
                  </Typography>
                </Box>
                <Button
                  endDecorator={<NavigateNextRounded />}
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardBasicBtnDarkSx
                      : BodyCommsTiersCardBasicBtnLightSx
                  }
                >
                  Commission Form
                </Button>
              </CardActions>
            </Card>
            <Card
              size="lg"
              variant="solid"
              sx={
                theme === "dark"
                  ? BodyCommsTiersCardStandardDarkSx
                  : BodyCommsTiersCardStandardLightSx
              }
            >
              <Typography
                level="h2"
                sx={
                  theme === "dark"
                    ? BodyCommsTiersCardStandardTitleDarkSx
                    : BodyCommsTiersCardStandardTitleLightSx
                }
              >
                Standard
              </Typography>
              <Box sx={BodyCommsTiersCardStandardDescBoxSx}>
                <Typography
                  level="title-md"
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardStandardDescOuterDarkSx
                      : BodyCommsTiersCardStandardDescOuterLightSx
                  }
                >
                  Description:
                  <br />
                  <Typography
                    level="body-sm"
                    sx={
                      theme === "dark"
                        ? BodyCommsTiersCardStandardDescInnerDarkSx
                        : BodyCommsTiersCardStandardDescInnerLightSx
                    }
                  >
                    More detailed and thoughtful composition with additional
                    layers for effects and depth.
                    <br />
                    Texturing and retouching used to bring out even better
                    colors and contrast.
                  </Typography>
                </Typography>
              </Box>
              <Divider inset="none" />
              <List size="sm" sx={{ mx: "2px" }}>
                <ListItem
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardStandardListItemDarkSx
                      : BodyCommsTiersCardStandardListItemLightSx
                  }
                >
                  <ListItemDecorator>
                    <HorizontalRuleRounded
                      sx={
                        theme === "dark"
                          ? BodyCommsTiersCardStandardListIconDarkSx
                          : BodyCommsTiersCardStandardListIconLightSx
                      }
                    />
                  </ListItemDecorator>
                  Layers: 5 - 10
                </ListItem>
                <ListItem
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardStandardListItemDarkSx
                      : BodyCommsTiersCardStandardListItemLightSx
                  }
                >
                  <ListItemDecorator>
                    <HorizontalRuleRounded
                      sx={
                        theme === "dark"
                          ? BodyCommsTiersCardStandardListIconDarkSx
                          : BodyCommsTiersCardStandardListIconLightSx
                      }
                    />
                  </ListItemDecorator>
                  Standard # of effects
                </ListItem>
                <ListItem
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardStandardListItemDarkSx
                      : BodyCommsTiersCardStandardListItemLightSx
                  }
                >
                  <ListItemDecorator>
                    <HorizontalRuleRounded
                      sx={
                        theme === "dark"
                          ? BodyCommsTiersCardStandardListIconDarkSx
                          : BodyCommsTiersCardStandardListIconLightSx
                      }
                    />
                  </ListItemDecorator>
                  Standard shading/blending/lighting
                </ListItem>
                <ListItem
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardStandardListItemDarkSx
                      : BodyCommsTiersCardStandardListItemLightSx
                  }
                >
                  <ListItemDecorator>
                    <HorizontalRuleRounded
                      sx={
                        theme === "dark"
                          ? BodyCommsTiersCardStandardListIconDarkSx
                          : BodyCommsTiersCardStandardListIconLightSx
                      }
                    />
                  </ListItemDecorator>
                  Turnaround Time: ~1 day
                </ListItem>
              </List>
              <Divider inset="none" />
              <CardActions sx={BodyCommsTiersCardStandardCardActionsSx}>
                <Box sx={BodyCommsTiersCardStandardPricingBoxSx}>
                  <Typography
                    level="title-lg"
                    sx={
                      theme === "dark"
                        ? BodyCommsTiersCardStandardPricingLeftDarkSx
                        : BodyCommsTiersCardStandardPricingLeftLightSx
                    }
                  >
                    $ 15{" "}
                  </Typography>
                  <Typography
                    sx={
                      theme === "dark"
                        ? BodyCommsTiersCardStandardPricingRightDarkSx
                        : BodyCommsTiersCardStandardPricingRightLightSx
                    }
                  >
                    (PayPal/Ko-fi)
                  </Typography>
                </Box>
                <Button
                  endDecorator={<NavigateNextRounded />}
                  sx={
                    theme === "dark"
                      ? BodyCommsTiersCardStandardBtnDarkSx
                      : BodyCommsTiersCardStandardBtnLightSx
                  }
                >
                  Commission Form
                </Button>
              </CardActions>
            </Card>
            <Card
              size="lg"
              variant="solid"
              sx={
                theme === "dark"
                  ? BodyCommsTiersCardAbstractifyDarkSx
                  : BodyCommsTiersCardAbstractifyLightSx
              }
            >
              <Typography level="h2">Abstractify</Typography>
              <Typography level="title-md">
                Description:
                <Typography level="body-sm">
                  “Abstractify” an existing reference (preferably album art or
                  movie poster); transform an idea into a fresh, new abstract
                  version.
                </Typography>
              </Typography>
              <Divider inset="none" />
              <List size="sm" sx={{ mx: "2px" }}>
                <ListItem>
                  <ListItemDecorator>
                    <HorizontalRuleRounded />
                  </ListItemDecorator>
                  Layers: 5 - 10
                </ListItem>
                <ListItem>
                  <ListItemDecorator>
                    <HorizontalRuleRounded />
                  </ListItemDecorator>
                  Standard # of effects
                </ListItem>
                <ListItem>
                  <ListItemDecorator>
                    <HorizontalRuleRounded />
                  </ListItemDecorator>
                  Standard shading/blending/lighting
                </ListItem>
                <ListItem>
                  <ListItemDecorator>
                    <HorizontalRuleRounded />
                  </ListItemDecorator>
                  Turnaround Time: 1-2 days
                </ListItem>
                <ListItem sx={{ ml: "1em" }}>
                  <ListItemDecorator>
                    <HorizontalRuleRounded />
                  </ListItemDecorator>
                  (Additional time needed to plan and recreate the reference in
                  a new, abstract way)
                </ListItem>
              </List>
              <Typography level="body-sm">
                NOTE: Not aiming to make a direct copy of the reference; the
                goal is to be heavily influenced by the reference and make
                something new and interesting
              </Typography>
              <Divider inset="none" />
              <CardActions>
                <Typography level="title-lg" sx={{ mr: "auto" }}>
                  $ 20{" "}
                  <Typography fontSize="sm" textColor="text.tertiary">
                    (PayPal/Ko-fi)
                  </Typography>
                </Typography>
                <Button
                  variant="soft"
                  color="neutral"
                  endDecorator={<NavigateNextRounded />}
                >
                  Request A Commission
                </Button>
              </CardActions>
            </Card>
            <Card
              size="lg"
              variant="solid"
              sx={
                theme === "dark"
                  ? BodyCommsTiersCardPremiumDarkSx
                  : BodyCommsTiersCardPremiumLightSx
              }
            >
              <Typography level="h2">Premium</Typography>
              <Typography level="title-md">
                Description:
                <Typography level="body-sm">
                  Most detailed composition with more planning and retouching to
                  achieve the best possible effects and overall look.
                  <br />
                  Color, contrast, textures, depth, and effects are all taken to
                  maximum potential.
                </Typography>
              </Typography>
              <Divider inset="none" />
              <List size="sm" sx={{ mx: "2px" }}>
                <ListItem>
                  <ListItemDecorator>
                    <HorizontalRuleRounded />
                  </ListItemDecorator>
                  Layers: {">10"}
                </ListItem>
                <ListItem>
                  <ListItemDecorator>
                    <HorizontalRuleRounded />
                  </ListItemDecorator>
                  Maximum # of effects (as needed)
                </ListItem>
                <ListItem>
                  <ListItemDecorator>
                    <HorizontalRuleRounded />
                  </ListItemDecorator>
                  Best level of shading + blending + lighting
                </ListItem>
                <ListItem>
                  <ListItemDecorator>
                    <HorizontalRuleRounded />
                  </ListItemDecorator>
                  Turnaround Time: 1-2 days
                </ListItem>
              </List>
              <Divider inset="none" />
              <CardActions>
                <Typography level="title-lg" sx={{ mr: "auto" }}>
                  $ 30{" "}
                  <Typography fontSize="sm" textColor="text.tertiary">
                    (PayPal/Ko-fi)
                  </Typography>
                </Typography>
                {/* TODO: add glowing boxShadow around these buttons, in increasing intensity per tier */}
                {/* TODO: For Premium, add glowing sheen on hover */}
                {/* Ex 1: https://uiverse.io/satyamchaudharydev/rude-wolverine-24 */}
                {/* Ex 2: https://uiverse.io/mrhyddenn/stale-cheetah-42 */}
                <Button
                  variant="soft"
                  color="neutral"
                  endDecorator={<NavigateNextRounded />}
                >
                  Request A Commission
                </Button>
              </CardActions>
            </Card>
          </Box>
          <Box>
            <h3>
              <i>Commission Examples</i>
            </h3>
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
    </Container>
  );
};

export default BodySection;
