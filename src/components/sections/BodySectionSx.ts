export const BodyContainerSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyHomeCardBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

export const BodyPortfolioCardBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
  },
};

export const BodyHomeHighlightsCardDarkSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    margin: "20px",
    minWidth: "80%",
    maxWidth: "90%",
    minHeight: "250px",
    background:
      "linear-gradient(270deg, rgba(30,24,35,1) 0%, #2A135F 50%, rgba(29,26,43,1) 100%) padding-box, linear-gradient(69deg,#6b25fe,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    border: "1px solid transparent",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    boxShadow: "rgba(29,9,121,1) 0px 8px 80px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      background:
        "linear-gradient(270deg, rgba(37,26,41,1) 0%, #3A0C5C 50%, rgba(36,28,49,1) 100%) padding-box, linear-gradient(180deg,#6b25fe,#ff3fa0 60%,#f74cf5 77%,#936eff)",
      boxShadow: "rgba(69,19,121,1) 0px 26px 180px 10px",
      transition: "all 0.25s ease-out",
    },
  },
};

export const BodyHomeHighlightsCardLightSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    margin: "20px",
    minWidth: "80%",
    maxWidth: "90%",
    minHeight: "250px",
    background:
      "linear-gradient(270deg, rgba(249,239,255,1) 0%, rgba(239,219,255,1) 43%, rgba(249,249,255,1) 100%) padding-box, linear-gradient(90deg, rgba(249,239,255,1) 0%, rgba(239,219,255,1) 43%, rgba(249,249,255,1) 100%)",
    border: "1px solid transparent",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    boxShadow: "rgba(29,9,121,0.30) 0px 8px 32px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      background:
        "linear-gradient(0deg, rgba(229,209,245,1) 0%, rgba(239,229,245,1) 43%, rgba(239,239,245,1) 100%) padding-box, linear-gradient(90deg, rgba(249,239,255,1) 0%, rgba(239,219,255,1) 43%, rgba(249,249,255,1) 100%)",
      boxShadow: "rgba(69,19,121,0.45) 0px 26px 180px 10px",
      transition: "all 0.6s ease-out",
    },
  },
};

export const BodyHomeHighlightsCardContentSx = {
  ...{
    alignItems: "center",
    textAlign: "center",
  },
};

export const BodyHomeHighlightsCardTitleDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(90deg, rgba(100,110,228,1) 0%, rgba(109,109,221,1) 43%, rgba(228,0,254,1) 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyHomeHighlightsCardTitleLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(90deg, rgba(0,10,28,1) 0%, rgba(9,9,121,1) 43%, rgba(228,0,254,1) 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyHomeHighlightsCardSubtitleDarkSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "300",
    maxWidth: "32ch",
    marginBottom: "14px",
    color: "#cf00ffda",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyHomeHighlightsCardSubtitleLightSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "300",
    maxWidth: "32ch",
    marginBottom: "14px",
    color: "#31008ff0",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyHomeHighlightsCardDividerDarkSx = {
  ...{
    "--Divider-lineColor": "rgba(61,39,115,0.5)",
  },
};

export const BodyHomeHighlightsCardDividerLightSx = {
  ...{
    "--Divider-lineColor": "rgba(229,209,245,0.15)",
  },
};

export const BodyHomeHighlightsPhotoBoxSx = {
  ...{
    minWidth: "1px",
    minHeight: "1px",
    height: "100%",
  },
};

export const BodyHomeHighlightsCardOverflowDarkSx = {
  ...{
    borderRadius: "0",
    marginTop: "-11px", // hack to get button vertically aligned with Divider above it
  },
};

export const BodyHomeHighlightsCardOverflowLightSx = {
  ...{
    borderRadius: "0",
    marginTop: "-11px", // hack to get button vertically aligned with Divider above it
  },
};

export const BodyHomeHighlightsCardOverflowBoxSx = {
  ...{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
};

export const BodyHomeHighlightsCardBtnDarkSx = {
  ...{
    backgroundColor: "#472950",
    color: "#fafafacf",
    borderRadius: "24px",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#9571fc",
      color: "#252026",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyHomeHighlightsCardBtnLightSx = {
  ...{
    backgroundColor: "#fafafa",
    color: "#2d282ecf",
    borderRadius: "24px",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#493979",
      color: "#fafafa",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyHomeSocmedCardBoxSx = {
  ...{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "45%",
    maxWidth: "70%",
  },
};

export const BodyHomeSocmedCardDarkSx = {
  ...{
    "--Card-padding": "24px",
    "--Card-radius": "24px",
    margin: "20px",
    backgroundColor: "#262127",
    border: "1px solid transparent",
    boxShadow: "rgba(218,75,90,0.6) 0px 1px 20px 2px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#29232a",
      boxShadow: "rgba(218,75,90,1) 0px 2px 240px 4px",
      transition: "all 0.15s ease-out",
    },
  },
};

export const BodyHomeSocmedCardLightSx = {
  ...{
    "--Card-padding": "24px",
    "--Card-radius": "24px",
    margin: "20px",
    backgroundColor: "#fafafa",
    border: "1px solid transparent",
    boxShadow: "rgba(30,12,46,0.11) 0px 20px 40px 2px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      boxShadow: "rgba(30,12,46,0.3) 0px 40px 180px 4px",
      transition: "all 0.15s ease-out",
    },
  },
};

export const BodyHomeSocmedCardTitleDarkSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    backgroundImage:
      "linear-gradient(175deg, rgba(228,0,254,1) 0%, #ff8442 66%, #936eff 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyHomeSocmedCardTitleLightSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    backgroundImage:
      "linear-gradient(185deg, #936eff 0%, #ff8442 33%, rgba(228,0,254,1) 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyHomeSocmedCardOuterBoxSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    "@media (max-width: 1030px)": {
      flexDirection: "column-reverse",
    },
  },
};

export const BodyHomeSocmedCardButtonBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "12px",
    marginRight: "12px",
    "@media (max-width: 1030px)": {
      marginTop: "12px",
    },
  },
};

export const BodyHomeSocmedCardButtonDarkSx = {
  ...{
    width: "164px",
    justifyContent: "center",
    backgroundColor: "#262228",
    color: "#fafafa",
    border: "1px solid #E500A27F",
    borderRadius: "24px",
    transition: "all 0.25s",
    transitionTimingFunction: "ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#E500A2",
      color: "#fafafa",
      border: "1px solid #E500A2",
      transition: "all 0.25s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyHomeSocmedCardButtonLightSx = {
  ...{
    width: "164px",
    justifyContent: "center",
    backgroundColor: "#6b25fe05",
    color: "rgba(228,0,254,1)",
    border: "1px solid rgba(228,0,254,0.2)",
    borderRadius: "24px",
    transition: "all 0.25s",
    transitionTimingFunction: "ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#E500A2",
      color: "#fafafa",
      border: "1px solid #E500A2",
      transition: "all 0.25s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyHomeSocmedPhotoBoxSx = {
  ...{
    minWidth: "1px",
    minHeight: "1px",
    maxWidth: "360px",
    height: "100%",
  },
};

export const BodyHomeSupportCardDarkSx = {
  ...{
    "--Card-padding": "24px",
    "--Card-radius": "24px",
    margin: "20px",
    backgroundColor: "#262127",
    border: "1px solid transparent",
    boxShadow: "rgba(244,210,191,0.3) 0px 1px 20px 2px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#29232a",
      boxShadow: "rgba(244,210,191,0.7) 0px 2px 240px 4px",
      transition: "all 0.15s ease-out",
    },
  },
};

export const BodyHomeSupportCardLightSx = {
  ...{
    "--Card-padding": "24px",
    "--Card-radius": "24px",
    margin: "20px",
    backgroundColor: "#fafafa",
    border: "1px solid transparent",
    boxShadow: "rgba(30,12,46,0.11) 0px 20px 40px 2px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      boxShadow: "rgba(70,56,24,0.45) 0px 40px 180px 4px",
      transition: "all 0.15s ease-out",
    },
  },
};

export const BodyHomeSupportCardTitleDarkSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    backgroundImage:
      "linear-gradient(90deg, #F4EFDF 0%, #F39330 85%, #EA45AC 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyHomeSupportCardTitleLightSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    backgroundImage:
      "linear-gradient(180deg, #F3DFCF 0%, #E57320 85%, #000000 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyHomeSupportCardOuterBoxSx = {
  ...{
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    "@media (max-width: 1030px)": {
      flexDirection: "column",
    },
  },
};

export const BodyHomeSupportCardButtonBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "12px",
    marginRight: "12px",
    "@media (max-width: 1030px)": {
      marginBottom: "12px",
    },
  },
};

export const BodyHomeSupportCardButtonDarkSx = {
  ...{
    width: "200px",
    justifyContent: "center",
    backgroundColor: "#262228",
    color: "#FEFBF6EA",
    border: "1px solid #F4DFBF8F",
    borderRadius: "24px",
    transition: "all 0.25s",
    transitionTimingFunction: "ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#F4DFBF",
      color: "#221706",
      border: "1px solid #F4DFBF",
      transition: "all 0.25s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyHomeSupportCardButtonLightSx = {
  ...{
    width: "200px",
    justifyContent: "center",
    backgroundColor: "#FEFBF685",
    color: "#E07E00",
    border: "1px solid #F4DFBFAF",
    borderRadius: "24px",
    transition: "all 0.25s",
    transitionTimingFunction: "ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#D4BF99",
      color: "#1C160C",
      border: "1px solid #D4BF99",
      transition: "all 0.25s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyHomeSupportCardSubtitleDarkSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "300",
    fontStyle: "italic",
    backgroundImage:
      "linear-gradient(90deg, #F4EFDF 0%, #F39330 85%, #EA45AC 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    margin: "10px",
    pointerEvents: "none",
    userSelect: "none",
    "@media (max-width: 1030px)": {
      marginBottom: "0",
    },
  },
};

export const BodyHomeSupportCardSubtitleLightSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "300",
    fontStyle: "italic",
    backgroundImage:
      "linear-gradient(250deg, #D7C3B3 0%, #D56310 85%, #000000 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    margin: "10px",
    pointerEvents: "none",
    userSelect: "none",
    "@media (max-width: 1030px)": {
      marginBottom: "0",
    },
  },
};

export const BodyHomeSupportCardStarDarkSx = {
  ...{
    color: "#F4DFBF",
    fontSize: "20px",
  },
};

export const BodyHomeSupportCardStarLightSx = {
  ...{
    color: "#E4CFAF",
    fontSize: "20px",
  },
};

export const BodyPortfolioCardDarkSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    margin: "20px",
    width: "95%",
    minHeight: "250px",
    background: "linear-gradient(70deg, #202020f8, #252525) padding-box",
    backgroundClip: "padding-box",
    border: "1px solid transparent",
    filter:
      "drop-shadow(10px 8px 7px rgba(48,48,48,0.6)) drop-shadow(-12px -8px 8px rgba(20,19,21,0.6))",
    "@media (max-width: 1500px)": {
      width: "94%",
    },
    "@media (max-width: 1300px)": {
      width: "92%",
    },
    "@media (max-width: 1000px)": {
      width: "90%",
    },
    "@media (max-width: 800px)": {
      width: "88%",
    },
    "@media (max-width: 670px)": {
      width: "85%",
    },
  },
};

export const BodyPortfolioCardLightSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    margin: "20px",
    width: "95%",
    minHeight: "250px",
    background: "linear-gradient(210deg, #f9f9f9, #f2f2f2fa) padding-box",
    backgroundClip: "padding-box",
    border: "1px solid transparent",
    filter:
      "drop-shadow(20px 14px 8px rgba(186,186,186,0.6)) drop-shadow(-28px -28px 12px #efefeff9)",
    "@media (max-width: 1500px)": {
      width: "94%",
    },
    "@media (max-width: 1300px)": {
      width: "92%",
    },
    "@media (max-width: 1000px)": {
      width: "90%",
    },
    "@media (max-width: 800px)": {
      width: "88%",
    },
    "@media (max-width: 670px)": {
      width: "85%",
    },
  },
};

export const BodyPortfolioCardTitleDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(90deg, rgba(239,138,181,1) 0%, rgba(234,66,171,1) 43%, rgba(191,26,255,1) 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyPortfolioCardTitleLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(90deg, rgba(130,9,20,1) 0%, rgba(196,5,79,1) 43%, rgba(225,127,96,1) 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyPortfolioCardSecondTitleDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(270deg, rgba(239,138,181,1) 0%, rgba(234,66,171,1) 43%, rgba(191,26,255,1) 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "14px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyPortfolioCardSecondTitleLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(270deg, rgba(130,9,20,1) 0%, rgba(196,5,79,1) 43%, rgba(225,127,96,1) 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "14px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyPortfolioCardSubtitleDarkSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "300",
    maxWidth: "32ch",
    color: "rgba(234,66,231,0.8)",
    marginBottom: "20px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyPortfolioCardSubtitleLightSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "300",
    maxWidth: "32ch",
    color: "rgba(196,5,79,1)",
    marginBottom: "20px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyPortfolioCommBoxSx = {
  ...{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "4px",
    paddingBottom: "4px",
  },
};

export const BodyPortfolioCommBtnDividerBoxSx = {
  ...{
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
};

export const BodyPortfolioCommBtnDividerDarkSx = {
  ...{
    background:
      "linear-gradient(90deg, #E89B0004 0%, #E5450070 35%, #E5105970 70%, #D200FF0F)",
    minWidth: "85vw",
    maxWidth: "90vw",
  },
};

export const BodyPortfolioCommBtnDividerLightSx = {
  ...{
    background:
      "linear-gradient(90deg, #F4C7BE20 0%, #EB58AE40 35%, #E822BB40 70%, #D104FF0A)",
    minWidth: "85vw",
    maxWidth: "90vw",
  },
};

export const BodyPortfolioCommBtnDarkSx = {
  ...{
    minWidth: "55vw",
    maxWidth: "75vw",
    height: "44px",
    background:
      "linear-gradient(69deg,#fd9800,#ff8442 23%,#ff3f00 52%,#ff00b5 77%,#936eff)",
    color: "#fafafacf",
    borderRadius: "24px",
    boxShadow: "0px 1px 28px 1px #FF301F",
    transition: "background-color 0.35s ease-out, color 0.35s ease-out",
    userSelect: "none",
    "&:hover": {
      transition: "background-color 0.35s ease-out, color 0.35s ease-out",
    },
    "&:hover .Portfolio-Button-Helper": {
      opacity: "1",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyPortfolioCommBtnDarkHelperSx = {
  ...{
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "1px 1px 1px 1px",
    width: "100%",
    height: "100%",
    opacity: "0",
    fontSize: "0.875rem",
    borderRadius: "24px",
    background:
      "linear-gradient(291deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f040c5 77%,#936eff)",
    boxShadow: "0px 2px 40px 2px red",
    transition: "opacity 0.35s ease-out",
    userSelect: "none",
  },
};

export const BodyPortfolioCommBtnLightSx = {
  ...{
    minWidth: "55vw",
    maxWidth: "75vw",
    height: "44px",
    background:
      "linear-gradient(69deg,#f0a0ff,#f0a0ff 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    color: "#fafafafa",
    borderRadius: "24px",
    boxShadow: "0px 1px 24px 4px #f0a0ff",
    transition: "background-color 0.35s ease-out, color 0.35s ease-out",
    userSelect: "none",
    "&:hover": {
      transition: "background-color 0.35s ease-out, color 0.35s ease-out",
    },
    "&:hover .Portfolio-Button-Helper": {
      opacity: "1",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyPortfolioCommBtnLightHelperSx = {
  ...{
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "1px 1px 1px 1px",
    width: "100%",
    height: "100%",
    opacity: "0",
    fontSize: "0.875rem",
    borderRadius: "24px",
    background:
      "linear-gradient(291deg,#E600D7,#ff6042 30%,#ff3f00 52%,#f701b5 77%,#936eff)",
    color: "#2d282ecf",
    boxShadow: "0px 2px 36px 2px #E600D7",
    transition: "opacity 0.35s ease-out",
    userSelect: "none",
  },
};

export const BodyCommsTiersBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyCommsTiersTypographyDarkSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    backgroundImage:
      "linear-gradient(175deg, rgba(228,0,254,1) 0%, #ff8442 66%, #936eff 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    filter: "drop-shadow(0px 4px 3px #101010)",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersTypographyLightSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    backgroundImage:
      "linear-gradient(185deg, #936eff 0%, #ff8442 33%, rgba(228,0,254,1) 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    filter: "drop-shadow(0px 4px 3px #10101050)",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardsBoxSx = {
  ...{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 370px), 1fr))",
    gap: 4,
    margin: "24px",
  },
};

export const BodyCommsTiersCardBasicDarkSx = {
  ...{
    backgroundColor: "#2b262c",
    border: "1px solid #fafafa1a",
    borderRadius: "24px",
  },
};

export const BodyCommsTiersCardBasicLightSx = {
  ...{
    backgroundColor: "#eeeeee80",
    border: "1px solid #29242a",
    borderRadius: "24px",
  },
};

export const BodyCommsTiersCardBasicTitleDarkSx = {
  ...{
    color: "#fafafaef",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicTitleLightSx = {
  ...{
    color: "#29242a",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicDescBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardBasicDescOuterDarkSx = {
  ...{
    color: "#fafafaef",
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: "20ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicDescOuterLightSx = {
  ...{
    color: "#29242aef",
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: "20ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicDescInnerDarkSx = {
  ...{
    color: "#cacaca",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardBasicDescInnerLightSx = {
  ...{
    color: "#69646a",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardBasicListIconDarkSx = {
  ...{
    color: "#d0d0d0",
    fontSize: "14px",
  },
};

export const BodyCommsTiersCardBasicListIconLightSx = {
  ...{
    color: "#241f25",
    fontSize: "14px",
  },
};

export const BodyCommsTiersCardBasicListItemDarkSx = {
  ...{
    color: "#e0e0e0",
    fontSize: "14px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicListItemLightSx = {
  ...{
    color: "#59545a",
    fontSize: "14px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicCardActionsSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardBasicPricingBoxSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardBasicPricingLeftDarkSx = {
  ...{
    color: "#fafafafa",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicPricingLeftLightSx = {
  ...{
    color: "#29242a",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicPricingRightDarkSx = {
  ...{
    color: "#bababaaa",
    fontSize: "14px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicPricingRightLightSx = {
  ...{
    color: "#69646a",
    fontSize: "14px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicBtnDarkSx = {
  ...{
    backgroundColor: "#f0f0f0fa",
    color: "#29242a",
    borderRadius: "24px",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#b0b0b0",
      color: "#000000",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyCommsTiersCardBasicBtnLightSx = {
  ...{
    backgroundColor: "#453f46",
    color: "#fafafae0",
    borderRadius: "24px",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#655f66",
      color: "#fafafa",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyCommsTiersCardStandardDarkSx = {
  ...{
    backgroundColor: "#fadaff",
    borderRadius: "24px",
  },
};

export const BodyCommsTiersCardStandardLightSx = {
  ...{
    backgroundColor: "#fadaff",
    borderRadius: "24px",
  },
};

export const BodyCommsTiersCardAbstractifyDarkSx = {
  ...{
    backgroundColor: "purple",
    borderRadius: "24px",
  },
};

export const BodyCommsTiersCardAbstractifyLightSx = {
  ...{
    backgroundColor: "purple",
    borderRadius: "24px",
  },
};

export const BodyCommsTiersCardPremiumDarkSx = {
  ...{
    backgroundColor: "gold",
    borderRadius: "24px",
  },
};

export const BodyCommsTiersCardPremiumLightSx = {
  ...{
    backgroundColor: "gold",
    borderRadius: "24px",
  },
};
