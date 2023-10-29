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
  BodyHomeHighlightsCardBodyTopDarkSx,
  BodyHomeHighlightsCardBodyTopLightSx,
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

const photos_portfolio_late2023 = [
  {
    src: "/assets/portfolio_late2023/A_System_of_Structure-3200px.jpg",
    width: 3200,
    height: 4526,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/A_System_of_Structure-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/portfolio_late2023/A_System_of_Structure-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/portfolio_late2023/A_System_of_Structure-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "A System of Structure",
    title: "A System of Structure",
  },
  {
    src: "/assets/portfolio_late2023/Frame_of_Revelation-3200px.jpg",
    width: 3200,
    height: 4526,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/Frame_of_Revelation-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/portfolio_late2023/Frame_of_Revelation-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/portfolio_late2023/Frame_of_Revelation-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "Frame of Revelation",
    title: "Frame of Revelation",
  },
  {
    src: "/assets/portfolio_late2023/Flight_of_Nihility.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/Flight_of_Nihility-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2023/Flight_of_Nihility-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2023/Flight_of_Nihility-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Flight of Nihility",
    title: "Flight of Nihility",
  },
  {
    src: "/assets/portfolio_late2023/A_Reflection_of_Self-3200px.jpg",
    width: 3200,
    height: 4526,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/A_Reflection_of_Self-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/portfolio_late2023/A_Reflection_of_Self-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/portfolio_late2023/A_Reflection_of_Self-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "A Reflection of Self",
    title: "A Reflection of Self",
  },
  {
    src: "/assets/portfolio_late2023/Haunted_Tendrils.jpg",
    width: 2480,
    height: 3508,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/Haunted_Tendrils-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/portfolio_late2023/Haunted_Tendrils-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/portfolio_late2023/Haunted_Tendrils-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "Haunted Tendrils",
    title: "Haunted Tendrils",
  },
  {
    src: "/assets/portfolio_late2023/Mark_of_Manifestation.jpg",
    width: 2480,
    height: 3508,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/Mark_of_Manifestation-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/portfolio_late2023/Mark_of_Manifestation-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/portfolio_late2023/Mark_of_Manifestation-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "Mark of Manifestation",
    title: "Mark of Manifestation",
  },
  {
    src: "/assets/portfolio_late2023/Converging_Spheres.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/Converging_Spheres-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2023/Converging_Spheres-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2023/Converging_Spheres-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Converging Spheres",
    title: "Converging Spheres",
  },
  {
    src: "/assets/portfolio_late2023/The_Temple_of_Loss.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/The_Temple_of_Loss-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/portfolio_late2023/The_Temple_of_Loss-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/portfolio_late2023/The_Temple_of_Loss-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "The Temple of Loss",
    title: "The Temple of Loss",
  },
  {
    src: "/assets/portfolio_late2023/The_Toxic_Descent.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/The_Toxic_Descent-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/portfolio_late2023/The_Toxic_Descent-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/portfolio_late2023/The_Toxic_Descent-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "The Toxic Descent",
    title: "The Toxic Descent",
  },
  {
    src: "/assets/portfolio_late2023/Zygotes_Severed.jpg",
    width: 1440,
    height: 3120,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/Zygotes_Severed-1200px.jpg",
        width: 1200,
        height: 2600,
      },
      {
        src: "/assets/portfolio_late2023/Zygotes_Severed-640px.jpg",
        width: 640,
        height: 1387,
      },
      {
        src: "/assets/portfolio_late2023/Zygotes_Severed-320px.jpg",
        width: 320,
        height: 693,
      },
    ],
    alt: "Zygotes Severed",
    title: "Zygotes Severed",
  },
  {
    src: "/assets/portfolio_late2023/Self_Destruct_Sequence.jpg",
    width: 4096,
    height: 1714,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/Self_Destruct_Sequence-1200px.jpg",
        width: 1200,
        height: 502,
      },
      {
        src: "/assets/portfolio_late2023/Self_Destruct_Sequence-640px.jpg",
        width: 640,
        height: 268,
      },
      {
        src: "/assets/portfolio_late2023/Self_Destruct_Sequence-320px.jpg",
        width: 320,
        height: 134,
      },
    ],
    alt: "Self Destruct Sequence",
    title: "Self Destruct Sequence",
  },
  {
    src: "/assets/portfolio_late2023/Thing_202308061205-ATS.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/portfolio_late2023/Thing_202308061205-ATS-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/portfolio_late2023/Thing_202308061205-ATS-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/portfolio_late2023/Thing_202308061205-ATS-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "A Thousand Suns (Abstractified)",
    title: "A Thousand Suns (Abstractified)",
  },
];

const photos_portfolio_late2022 = [
  {
    src: "/assets/portfolio_late2022/Returning_Sublimation.jpg",
    width: 2480,
    height: 3508,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Returning_Sublimation-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/portfolio_late2022/Returning_Sublimation-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/portfolio_late2022/Returning_Sublimation-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "Returning Sublimation",
    title: "Returning Sublimation",
  },
  {
    src: "/assets/portfolio_late2022/Thing_202307071103-SFV.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Thing_202307071103-SFV-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/portfolio_late2022/Thing_202307071103-SFV-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/portfolio_late2022/Thing_202307071103-SFV-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "Screaming For Vengeance (Abstractified)",
    title: "Screaming For Vengeance (Abstractified)",
  },
  {
    src: "/assets/portfolio_late2022/An_Era_Burned_Away.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/An_Era_Burned_Away-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2022/An_Era_Burned_Away-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2022/An_Era_Burned_Away-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "An Era Burned Away",
    title: "An Era Burned Away",
  },
  {
    src: "/assets/portfolio_late2022/QS1-BL.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/QS1-BL-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/portfolio_late2022/QS1-BL-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/portfolio_late2022/QS1-BL-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "QS1-BL",
    title: "QS1-BL",
  },
  {
    src: "/assets/portfolio_late2022/Smeared_Bridges.jpg",
    width: 2480,
    height: 3508,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Smeared_Bridges-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/portfolio_late2022/Smeared_Bridges-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/portfolio_late2022/Smeared_Bridges-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "Smeared Bridges",
    title: "Smeared Bridges",
  },
  {
    src: "/assets/portfolio_late2022/Thing_202305291932.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Thing_202305291932-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2022/Thing_202305291932-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2022/Thing_202305291932-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Thing_202305291932",
    title: "Thing_202305291932",
  },
  {
    src: "/assets/portfolio_late2022/Your_Fear_Regenerates.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Your_Fear_Regenerates-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2022/Your_Fear_Regenerates-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2022/Your_Fear_Regenerates-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Your Fear Regenerates",
    title: "Your Fear Regenerates",
  },
  {
    src: "/assets/portfolio_late2022/Binary_Worlds_-_The_Mess_Between.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Binary_Worlds_-_The_Mess_Between-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/portfolio_late2022/Binary_Worlds_-_The_Mess_Between-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/portfolio_late2022/Binary_Worlds_-_The_Mess_Between-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "The Mess Between",
    title: "The Mess Between",
  },
  {
    src: "/assets/portfolio_late2022/Thing_202304241843_-_ORA.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Thing_202304241843_-_ORA-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/portfolio_late2022/Thing_202304241843_-_ORA-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/portfolio_late2022/Thing_202304241843_-_ORA-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "Oracle (Abstractified)",
    title: "Oracle (Abstractified)",
  },
  {
    src: "/assets/portfolio_late2022/Thing_202304231215_-_AEF.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Thing_202304231215_-_AEF-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/portfolio_late2022/Thing_202304231215_-_AEF-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/portfolio_late2022/Thing_202304231215_-_AEF-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "All Else Failed (Abstractified)",
    title: "All Else Failed (Abstractified)",
  },
  {
    src: "/assets/portfolio_late2022/Psionic_Twist.jpg",
    width: 2480,
    height: 3508,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Psionic_Twist-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/portfolio_late2022/Psionic_Twist-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/portfolio_late2022/Psionic_Twist-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "Psionic Twist",
    title: "Psionic Twist",
  },
  {
    src: "/assets/portfolio_late2022/Just_A_Flicker.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Just_A_Flicker-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2022/Just_A_Flicker-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2022/Just_A_Flicker-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Just A Flicker",
    title: "Just A Flicker",
  },
  {
    src: "/assets/portfolio_late2022/Love_Across_Time.jpg",
    width: 2480,
    height: 3508,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Love_Across_Time-1200px.jpg",
        width: 1200,
        height: 1697,
      },
      {
        src: "/assets/portfolio_late2022/Love_Across_Time-640px.jpg",
        width: 640,
        height: 905,
      },
      {
        src: "/assets/portfolio_late2022/Love_Across_Time-320px.jpg",
        width: 320,
        height: 453,
      },
    ],
    alt: "Love Across Time",
    title: "Love Across Time",
  },
  {
    src: "/assets/portfolio_late2022/Z_Emerges.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Z_Emerges-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/portfolio_late2022/Z_Emerges-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/portfolio_late2022/Z_Emerges-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "Z Emerges",
    title: "Z Emerges",
  },
  {
    src: "/assets/portfolio_late2022/Retrofuturista.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Retrofuturista-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2022/Retrofuturista-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2022/Retrofuturista-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Retrofuturista",
    title: "Retrofuturista",
  },
  {
    src: "/assets/portfolio_late2022/Was_It_Punishment.jpg",
    width: 2048,
    height: 2048,
    srcSet: [
      {
        src: "/assets/portfolio_late2022/Was_It_Punishment-1200px.jpg",
        width: 1200,
        height: 1200,
      },
      {
        src: "/assets/portfolio_late2022/Was_It_Punishment-640px.jpg",
        width: 640,
        height: 640,
      },
      {
        src: "/assets/portfolio_late2022/Was_It_Punishment-320px.jpg",
        width: 320,
        height: 320,
      },
    ],
    alt: "Was It Punishment?",
    title: "Was It Punishment?",
  },
];

const photos_portfolio_late2021 = [
  {
    src: "/assets/portfolio_late2021/We Enter The Fray Again.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/We Enter The Fray Again-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2021/We Enter The Fray Again-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2021/We Enter The Fray Again-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "We Enter The Fray Again",
    title: "We Enter The Fray Again",
  },
  {
    src: "/assets/portfolio_late2021/Ashes of Reverence.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Ashes of Reverence-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2021/Ashes of Reverence-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2021/Ashes of Reverence-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Ashes of Reverence",
    title: "Ashes of Reverence",
  },
  {
    src: "/assets/portfolio_late2021/Impending Flood.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Impending Flood-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2021/Impending Flood-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2021/Impending Flood-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Impending Flood",
    title: "Impending Flood",
  },
  {
    src: "/assets/portfolio_late2021/Flightless.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Flightless-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2021/Flightless-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2021/Flightless-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Flightless",
    title: "Flightless",
  },
  {
    src: "/assets/portfolio_late2021/Deconstricted.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Deconstricted-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2021/Deconstricted-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2021/Deconstricted-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Deconstricted",
    title: "Deconstricted",
  },
  {
    src: "/assets/portfolio_late2021/ZDA Logo Concept 9-12-2021.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/ZDA Logo Concept 9-12-2021-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2021/ZDA Logo Concept 9-12-2021-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2021/ZDA Logo Concept 9-12-2021-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "ZDA Logo Concept 9-12-2021",
    title: "ZDA Logo Concept 9-12-2021",
  },
  {
    src: "/assets/portfolio_late2021/Paralytic Embrace.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Paralytic Embrace-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2021/Paralytic Embrace-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2021/Paralytic Embrace-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Paralytic Embrace",
    title: "Paralytic Embrace",
  },
  {
    src: "/assets/portfolio_late2021/Parallel Abandonment.jpg",
    width: 2360,
    height: 1640,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Parallel Abandonment-1200px.jpg",
        width: 1200,
        height: 834,
      },
      {
        src: "/assets/portfolio_late2021/Parallel Abandonment-640px.jpg",
        width: 640,
        height: 445,
      },
      {
        src: "/assets/portfolio_late2021/Parallel Abandonment-320px.jpg",
        width: 320,
        height: 222,
      },
    ],
    alt: "Parallel Abandonment",
    title: "Parallel Abandonment",
  },
  {
    src: "/assets/portfolio_late2021/Voidshift Zero Alt.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Voidshift Zero Alt-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_late2021/Voidshift Zero Alt-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_late2021/Voidshift Zero Alt-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "Voidshift Zero Alt",
    title: "Voidshift Zero Alt",
  },
  {
    src: "/assets/portfolio_late2021/Wordless.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Wordless-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_late2021/Wordless-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_late2021/Wordless-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "Wordless",
    title: "Wordless",
  },
  {
    src: "/assets/portfolio_late2021/Neural Burn.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Neural Burn-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_late2021/Neural Burn-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_late2021/Neural Burn-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "Neural Burn",
    title: "Neural Burn",
  },
  {
    src: "/assets/portfolio_late2021/Power of Exclusion.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Power of Exclusion-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_late2021/Power of Exclusion-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_late2021/Power of Exclusion-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "Power of Exclusion",
    title: "Power of Exclusion",
  },
  {
    src: "/assets/portfolio_late2021/A Toxic Stitch.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/A Toxic Stitch-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_late2021/A Toxic Stitch-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_late2021/A Toxic Stitch-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "A Toxic Stitch",
    title: "A Toxic Stitch",
  },
  {
    src: "/assets/portfolio_late2021/Sakura Fingers.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Sakura Fingers-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_late2021/Sakura Fingers-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_late2021/Sakura Fingers-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "Sakura Fingers",
    title: "Sakura Fingers",
  },
  {
    src: "/assets/portfolio_late2021/Forgotten-Displaced.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Forgotten-Displaced-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_late2021/Forgotten-Displaced-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_late2021/Forgotten-Displaced-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "Forgotten-Displaced",
    title: "Forgotten-Displaced",
  },
  {
    src: "/assets/portfolio_late2021/Nightrealm.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_late2021/Nightrealm-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_late2021/Nightrealm-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_late2021/Nightrealm-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "Nightrealm",
    title: "Nightrealm",
  },
];

const photos_portfolio_early2021_procreate = [
  {
    src: "/assets/portfolio_early2021_procreate/Nothing Will Stay.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_procreate/Nothing Will Stay-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_early2021_procreate/Nothing Will Stay-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_early2021_procreate/Nothing Will Stay-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "Nothing Will Stay",
    title: "Nothing Will Stay",
  },
  {
    src: "/assets/portfolio_early2021_procreate/Eroded Heart.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_procreate/Eroded Heart-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_early2021_procreate/Eroded Heart-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_early2021_procreate/Eroded Heart-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "Eroded Heart",
    title: "Eroded Heart",
  },
  {
    src: "/assets/portfolio_early2021_procreate/Eroded Chamber.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_procreate/Eroded Chamber-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_early2021_procreate/Eroded Chamber-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_early2021_procreate/Eroded Chamber-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "Eroded Chamber",
    title: "Eroded Chamber",
  },
  {
    src: "/assets/portfolio_early2021_procreate/First Doodle in Procreate.jpg",
    width: 1640,
    height: 2360,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_procreate/First Doodle in Procreate-1200px.jpg",
        width: 1200,
        height: 1727,
      },
      {
        src: "/assets/portfolio_early2021_procreate/First Doodle in Procreate-640px.jpg",
        width: 640,
        height: 921,
      },
      {
        src: "/assets/portfolio_early2021_procreate/First Doodle in Procreate-320px.jpg",
        width: 320,
        height: 460,
      },
    ],
    alt: "First Doodle in Procreate",
    title: "First Doodle in Procreate",
  },
];

const photos_portfolio_early2021_huion = [
  {
    src: "/assets/portfolio_early2021_huion/HuionSketch_1623481967592.jpg",
    width: 1080,
    height: 1440,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_procreate/HuionSketch_1623481967592-640px.jpg",
        width: 640,
        height: 853,
      },
      {
        src: "/assets/portfolio_early2021_procreate/HuionSketch_1623481967592-320px.jpg",
        width: 320,
        height: 427,
      },
    ],
    alt: "HuionSketch_1623481967592",
    title: "HuionSketch_1623481967592",
  },
  {
    src: "/assets/portfolio_early2021_huion/HuionSketch_1625698314399.jpg",
    width: 1080,
    height: 1440,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_procreate/HuionSketch_1625698314399-640px.jpg",
        width: 640,
        height: 853,
      },
      {
        src: "/assets/portfolio_early2021_procreate/HuionSketch_1625698314399-320px.jpg",
        width: 320,
        height: 427,
      },
    ],
    alt: "HuionSketch_1625698314399",
    title: "HuionSketch_1625698314399",
  },
  {
    src: "/assets/portfolio_early2021_huion/HuionSketch_1625699078818.jpg",
    width: 1080,
    height: 1440,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_procreate/HuionSketch_1625699078818-640px.jpg",
        width: 640,
        height: 853,
      },
      {
        src: "/assets/portfolio_early2021_procreate/HuionSketch_1625699078818-320px.jpg",
        width: 320,
        height: 427,
      },
    ],
    alt: "HuionSketch_1625699078818",
    title: "HuionSketch_1625699078818",
  },
  {
    src: "/assets/portfolio_early2021_huion/HuionSketch_1625704616676.jpg",
    width: 1080,
    height: 1440,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_procreate/HuionSketch_1625704616676-640px.jpg",
        width: 640,
        height: 853,
      },
      {
        src: "/assets/portfolio_early2021_procreate/HuionSketch_1625704616676-320px.jpg",
        width: 320,
        height: 427,
      },
    ],
    alt: "HuionSketch_1625704616676",
    title: "HuionSketch_1625704616676",
  },
];

const photos_portfolio_early2021_penup = [
  {
    src: "/assets/portfolio_early2021_penup/penup_20210422_055424.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/penup_20210422_055424-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/penup_20210422_055424-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "penup_20210422_055424",
    title: "penup_20210422_055424",
  },
  {
    src: "/assets/portfolio_early2021_penup/penup_20210422_053046.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/penup_20210422_053046-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/penup_20210422_053046-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "penup_20210422_053046",
    title: "penup_20210422_053046",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210531_091809.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210531_091809-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210531_091809-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210531_091809",
    title: "20210531_091809",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210508_053445.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210508_053445-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210508_053445-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210508_053445",
    title: "20210508_053445",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210329_023929.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210329_023929-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210329_023929-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210329_023929",
    title: "20210329_023929",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210327_044743.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210327_044743-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210327_044743-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210327_044743",
    title: "20210327_044743",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210326_003107.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210326_003107-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210326_003107-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210326_003107",
    title: "20210326_003107",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210309_005026.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210309_005026-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210309_005026-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210309_005026",
    title: "20210309_005026",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210308_015320.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210308_015320-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210308_015320-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210308_015320",
    title: "20210308_015320",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210305_030333.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210305_030333-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210305_030333-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210305_030333",
    title: "20210305_030333",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210221_021422.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210221_021422-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210221_021422-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210221_021422",
    title: "20210221_021422",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210219_053858.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210219_053858-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210219_053858-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210219_053858",
    title: "20210219_053858",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210211_012944.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210211_012944-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210211_012944-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210211_012944",
    title: "20210211_012944",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210207_203848.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210207_203848-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210207_203848-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210207_203848",
    title: "20210207_203848",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210203_175221.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210203_175221-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210203_175221-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210203_175221",
    title: "20210203_175221",
  },
  {
    src: "/assets/portfolio_early2021_penup/20210202_235729.jpg",
    width: 1080,
    height: 1620,
    srcSet: [
      {
        src: "/assets/portfolio_early2021_penup/20210202_235729-640px.jpg",
        width: 640,
        height: 960,
      },
      {
        src: "/assets/portfolio_early2021_penup/20210202_235729-320px.jpg",
        width: 320,
        height: 480,
      },
    ],
    alt: "20210202_235729",
    title: "20210202_235729",
  },
];

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
                      ? BodyHomeHighlightsCardBodyTopDarkSx
                      : BodyHomeHighlightsCardBodyTopLightSx
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
                    photos={photos_highlights}
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
          <Box>
            <h3>
              <i>Late 2023</i>
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
