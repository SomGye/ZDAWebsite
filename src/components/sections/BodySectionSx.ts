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
      "linear-gradient(270deg, rgba(30,24,35,1) 0%, #2A135F 50%, rgba(29,26,43,1) 100%) padding-box, linear-gradient(69deg,#981CF4,#37264a 30%,#8541EC 60%,#c100f0 77%,#c100f0)",
    border: "1px solid transparent",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    boxShadow: "rgba(29,9,121,1) 0px 8px 80px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      background:
        "linear-gradient(270deg, rgba(30,24,35,1) 0%, #2A135F 50%, rgba(29,26,43,1) 100%) padding-box, linear-gradient(69deg,#6b25fe,#ff3fa0 60%,#f74cf5 77%,#936eff)",
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
      "linear-gradient(90deg, rgba(230,0,200,1) 0%, rgba(200,90,230,1) 5%, rgba(130,125,255,1) 20%, rgba(0,145,255,1) 30%, rgba(125,195,255,1) 57%, rgba(230,0,190,1) 100%)",
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
    color: "rgba(125,195,255,0.8)",
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
    color: "#250083",
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
    backgroundColor: "#6600C0",
    color: "#fafafacf",
    borderRadius: "24px",
    marginBottom: "1px",
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
    marginBottom: "1px",
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
    boxShadow: "rgba(218,75,90,0.4) 0px 1px 16px 0px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#29232a",
      boxShadow: "rgba(218,75,90,0.75) 0px 0px 36px 2px",
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
    transition: "all 0.25s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#E500A2",
      color: "#fafafa",
      border: "1px solid #E500A2",
      transition: "all 0.25s ease-out",
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
    color: "#c200d8",
    border: "1px solid rgba(228,0,254,0.2)",
    borderRadius: "24px",
    transition: "all 0.25s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#E500A2",
      color: "#fafafa",
      border: "1px solid #E500A2",
      transition: "all 0.25s ease-out",
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
    boxShadow: "rgba(244,210,191,0.3) 0px 1px 16px 0px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#29232a",
      boxShadow: "rgba(244,210,191,0.7) 0px 0px 36px 2px",
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
    fontWeight: "700",
    backgroundImage:
      "linear-gradient(180deg, #F3DFCF 0%, #EE9C69 45%, #D15F0C 85%, #000000 100%)",
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
    transition: "all 0.25s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#F4DFBF",
      color: "#221706",
      border: "1px solid #F4DFBF",
      transition: "all 0.25s ease-out",
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
    color: "#ab5f00",
    border: "1px solid #F4DFBFAF",
    borderRadius: "24px",
    transition: "all 0.25s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#D4BF99",
      color: "#1C160C",
      border: "1px solid #D4BF99",
      transition: "all 0.25s ease-out",
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
    fontWeight: "400",
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
    fontWeight: "400",
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
    color: "rgba(244,76,241,0.95)",
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
    color: "rgba(186,5,69,1)",
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
    width: "100%",
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

export const BodyCommsTiersTypographyExDarkSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "30.5px",
    fontWeight: "700",
    backgroundImage:
      "linear-gradient(175deg, rgba(228,0,254,1) 0%, #ff8442 66%, #936eff 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    filter: "drop-shadow(0px 4px 3px #101010)",
    marginTop: "8px",
    marginBottom: "-10px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersTypographyExLightSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "30.5px",
    fontWeight: "700",
    backgroundImage:
      "linear-gradient(185deg, #936eff 0%, #ff8442 33%, rgba(228,0,254,1) 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    filter: "drop-shadow(0px 4px 3px #10101050)",
    marginTop: "8px",
    marginBottom: "-10px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardsBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    minWidth: "65%",
    maxWidth: "92%",
    gap: 4,
    margin: "24px",
  },
};

export const BodyCommsTiersExCardsBoxSx = {
  ...{
    display: "grid",
    gridTemplateColumns: "800px 800px",
    justifyContent: "center",
    alignItems: "stretch",
    width: "1760px",
    gap: 2,
    margin: "24px",
    borderLeft: "2px solid #fafafa2a",
    borderRight: "2px solid #fafafa2a",
  },
};

export const BodyCommsTiersSplitImgBoxSx = {
  ...{
    flex: "1",
  },
};

export const BodyCommsTiersSplitContentBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    flex: "1",
  },
};

export const BodyCommsTiersTopDividerSx = {
  ...{
    marginTop: "16px",
    marginBottom: "16px",
  },
};

export const BodyCommsTiersCardBasicDarkSx = {
  ...{
    backgroundColor: "#2b262c",
    border: "1px solid #fafafa35",
    borderRadius: "24px",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardBasicLightSx = {
  ...{
    backgroundColor: "#eeeeee80",
    border: "1px solid #29242a",
    borderRadius: "24px",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardBasicExDarkSx = {
  ...{
    height: "524px",
    backgroundColor: "#2b262c",
    border: "1px solid #fafafa35",
    borderRadius: "24px",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardBasicExLightSx = {
  ...{
    height: "524px",
    backgroundColor: "#eeeeee80",
    border: "1px solid #29242a",
    borderRadius: "24px",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
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

export const BodyCommsTiersCardBasicTitleExDarkSx = {
  ...{
    color: "#fafafaef",
    fontSize: "34px",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicTitleExLightSx = {
  ...{
    color: "#29242a",
    fontSize: "34px",
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
    maxWidth: "29ch",
    marginTop: "2px",
    marginBottom: "2px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicDescOuterLightSx = {
  ...{
    color: "#29242aef",
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: "29ch",
    marginTop: "2px",
    marginBottom: "2px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicDescOuterExDarkSx = {
  ...{
    color: "#fafafaef",
    fontSize: "17px",
    fontWeight: "500",
    maxWidth: "23ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicDescOuterExLightSx = {
  ...{
    color: "#29242aef",
    fontSize: "17px",
    fontWeight: "500",
    maxWidth: "23ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicDescInnerDarkSx = {
  ...{
    color: "#cacaca",
    fontSize: "15px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardBasicDescInnerLightSx = {
  ...{
    color: "#69646a",
    fontSize: "15px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardBasicDescInnerExDarkSx = {
  ...{
    color: "#cacaca",
    fontSize: "17px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardBasicDescInnerExLightSx = {
  ...{
    color: "#69646a",
    fontSize: "17px",
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

export const BodyCommsTiersCardBasicListItemExDarkSx = {
  ...{
    color: "#e0e0e0",
    fontSize: "18px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicListItemExLightSx = {
  ...{
    color: "#59545a",
    fontSize: "18px",
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

export const BodyCommsTiersCardBasicPricingLeftExDarkSx = {
  ...{
    color: "#fafafafa",
    fontSize: "20px",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicPricingLeftExLightSx = {
  ...{
    color: "#29242a",
    fontSize: "20px",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicPricingRightDarkSx = {
  ...{
    color: "#908f91",
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

export const BodyCommsTiersCardBasicPricingRightExDarkSx = {
  ...{
    color: "#908f91",
    fontSize: "16px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardBasicPricingRightExLightSx = {
  ...{
    color: "#69646a",
    fontSize: "16px",
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
      backgroundColor: "#a0a0a0",
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
      backgroundColor: "#79737a",
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
    borderRadius: "24px",
    background: "linear-gradient(70deg, #202020f8, #252525) padding-box",
    backgroundClip: "padding-box",
    border: "1px solid transparent",
    filter:
      "drop-shadow(10px 8px 7px rgba(48,48,48,0.5)) drop-shadow(-12px -8px 8px rgba(20,19,21,0.5))",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardStandardLightSx = {
  ...{
    borderRadius: "24px",
    background: "linear-gradient(210deg, #f9f9f9, #f2f2f2fa) padding-box",
    backgroundClip: "padding-box",
    border: "1px solid transparent",
    filter:
      "drop-shadow(20px 14px 8px rgba(186,186,186,0.5)) drop-shadow(-28px -28px 12px #efefeff0)",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardStandardExDarkSx = {
  ...{
    height: "524px",
    borderRadius: "24px",
    background: "linear-gradient(70deg, #202020f8, #252525) padding-box",
    backgroundClip: "padding-box",
    border: "1px solid transparent",
    filter:
      "drop-shadow(10px 8px 7px rgba(48,48,48,0.5)) drop-shadow(-12px -8px 8px rgba(20,19,21,0.5))",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardStandardExLightSx = {
  ...{
    height: "524px",
    borderRadius: "24px",
    background: "linear-gradient(210deg, #f9f9f9, #f2f2f2fa) padding-box",
    backgroundClip: "padding-box",
    border: "1px solid transparent",
    filter:
      "drop-shadow(20px 14px 8px rgba(186,186,186,0.5)) drop-shadow(-28px -28px 12px #efefeff0)",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardStandardTitleDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(40,20,40,1) 0%, rgba(235,230,250,0.6) 40%, white 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardTitleLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(235,215,235,1) 0%, rgba(35,20,45,0.6) 40%, black 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardTitleExDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(40,20,40,1) 0%, rgba(235,230,250,0.6) 40%, white 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "34px",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardTitleExLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(235,215,235,1) 0%, rgba(35,20,45,0.6) 40%, black 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "34px",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardDescBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardStandardDescOuterDarkSx = {
  ...{
    color: "#fafafaef",
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: "31ch",
    marginTop: "2px",
    marginBottom: "2px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardDescOuterLightSx = {
  ...{
    color: "#29242aef",
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: "31ch",
    marginTop: "2px",
    marginBottom: "2px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardDescOuterExDarkSx = {
  ...{
    color: "#fafafaef",
    fontSize: "17px",
    fontWeight: "500",
    maxWidth: "30ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardDescOuterExLightSx = {
  ...{
    color: "#29242aef",
    fontSize: "17px",
    fontWeight: "500",
    maxWidth: "30ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardDescInnerDarkSx = {
  ...{
    color: "#cacaca",
    fontSize: "15px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardStandardDescInnerLightSx = {
  ...{
    color: "#69646a",
    fontSize: "15px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardStandardDescInnerExDarkSx = {
  ...{
    color: "#cacaca",
    fontSize: "17px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardStandardDescInnerExLightSx = {
  ...{
    color: "#69646a",
    fontSize: "17px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardStandardListIconDarkSx = {
  ...{
    color: "#d0d0d0",
    fontSize: "14px",
  },
};

export const BodyCommsTiersCardStandardListIconLightSx = {
  ...{
    color: "#241f25",
    fontSize: "14px",
  },
};

export const BodyCommsTiersCardStandardListItemDarkSx = {
  ...{
    color: "#e0e0e0",
    fontSize: "14px",
    textAlign: "justify",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardListItemLightSx = {
  ...{
    color: "#59545a",
    fontSize: "14px",
    textAlign: "justify",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardListItemExDarkSx = {
  ...{
    color: "#e0e0e0",
    fontSize: "18px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardListItemExLightSx = {
  ...{
    color: "#59545a",
    fontSize: "18px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardCardActionsSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardStandardPricingBoxSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardStandardPricingLeftDarkSx = {
  ...{
    color: "#fafafafa",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardPricingLeftLightSx = {
  ...{
    color: "#29242a",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardPricingLeftExDarkSx = {
  ...{
    color: "#fafafafa",
    fontSize: "20px",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardPricingLeftExLightSx = {
  ...{
    color: "#29242a",
    fontSize: "20px",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardPricingRightDarkSx = {
  ...{
    color: "#bababaaa",
    fontSize: "14px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardPricingRightLightSx = {
  ...{
    color: "#69646a",
    fontSize: "14px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardPricingRightExDarkSx = {
  ...{
    color: "#bababaaa",
    fontSize: "16px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardPricingRightExLightSx = {
  ...{
    color: "#69646a",
    fontSize: "16px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardStandardBtnDarkSx = {
  ...{
    backgroundColor: "#f0f0f0fa",
    color: "#29242a",
    borderRadius: "24px",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#7f5bd6",
      color: "#fafafa",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyCommsTiersCardStandardBtnLightSx = {
  ...{
    backgroundColor: "#453f46",
    color: "#fafafae0",
    borderRadius: "24px",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#8561dc",
      color: "#fafafa",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyCommsTiersCardAbstractifyDarkSx = {
  ...{
    borderRadius: "24px",
    background:
      "linear-gradient(0deg, rgba(20,0,55,1) 0%, #2A135F 50%, rgba(55,0,20,1) 100%) padding-box",
    border: "1px solid transparent",
    filter:
      "drop-shadow(8px 6px 7px rgba(180,60,144,0.25)) drop-shadow(-10px -6px 8px rgba(174,0,138,0.25))",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardAbstractifyLightSx = {
  ...{
    borderRadius: "24px",
    background:
      "linear-gradient(180deg, rgba(220,0,255,1) 0%, #2A135F 50%, rgba(255,0,220,1) 100%) padding-box, linear-gradient(295deg,rgba(229,184,175,1),rgba(237,117,178,1) 40%,rgba(232,48,170,1) 60%,rgba(225,0,255) 80%,rgba(169,54,255,1))",
    border: "1px solid transparent",
    filter:
      "drop-shadow(4px 4px 5px rgba(250,150,204,0.9)) drop-shadow(-4px -4px 5px rgba(224,60,198,0.35))",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardAbstractifyExDarkSx = {
  ...{
    height: "524px",
    borderRadius: "24px",
    background:
      "linear-gradient(0deg, rgba(20,0,55,1) 0%, #2A135F 50%, rgba(55,0,20,1) 100%) padding-box",
    border: "1px solid transparent",
    filter:
      "drop-shadow(8px 6px 7px rgba(180,60,144,0.25)) drop-shadow(-10px -6px 8px rgba(174,0,138,0.25))",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardAbstractifyExLightSx = {
  ...{
    height: "524px",
    borderRadius: "24px",
    background:
      "linear-gradient(180deg, rgba(220,0,255,1) 0%, #2A135F 50%, rgba(255,0,220,1) 100%) padding-box, linear-gradient(295deg,rgba(229,184,175,1),rgba(237,117,178,1) 40%,rgba(232,48,170,1) 60%,rgba(225,0,255) 80%,rgba(169,54,255,1))",
    border: "1px solid transparent",
    filter:
      "drop-shadow(4px 4px 5px rgba(250,150,204,0.9)) drop-shadow(-4px -4px 5px rgba(224,60,198,0.35))",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardAbstractifyTitleDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(40,20,40,1) 0%, rgba(235,230,250,0.6) 40%, white 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyTitleLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(235,215,235,1) 0%, rgba(39,24,49,0.6) 27%, black 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
    "@media (max-width: 1000px)": {
      backgroundImage:
        "linear-gradient(185deg, rgba(40,20,40,1) 0%, rgba(235,230,250,0.45) 40%, white 100%)",
    },
  },
};

export const BodyCommsTiersCardAbstractifyTitleExDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(40,20,40,1) 0%, rgba(235,230,250,0.6) 40%, white 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "34px",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyTitleExLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(235,215,235,1) 0%, rgba(39,24,49,0.6) 27%, black 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "34px",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
    "@media (max-width: 1000px)": {
      backgroundImage:
        "linear-gradient(185deg, rgba(40,20,40,1) 0%, rgba(235,230,250,0.45) 40%, white 100%)",
    },
  },
};

export const BodyCommsTiersCardAbstractifyDescBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardAbstractifyDescOuterDarkSx = {
  ...{
    color: "#fafafaef",
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: "32ch",
    marginTop: "2px",
    marginBottom: "2px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyDescOuterLightSx = {
  ...{
    color: "#140f15",
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: "32ch",
    marginTop: "2px",
    marginBottom: "2px",
    pointerEvents: "none",
    userSelect: "none",
    "@media (max-width: 1000px)": {
      color: "#fafafaba",
    },
  },
};

export const BodyCommsTiersCardAbstractifyDescOuterExDarkSx = {
  ...{
    color: "#fafafaef",
    fontSize: "17px",
    fontWeight: "500",
    maxWidth: "30ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyDescOuterExLightSx = {
  ...{
    color: "#140f15",
    fontSize: "17px",
    fontWeight: "500",
    maxWidth: "30ch",
    pointerEvents: "none",
    userSelect: "none",
    "@media (max-width: 1000px)": {
      color: "#fafafaba",
    },
  },
};

export const BodyCommsTiersCardAbstractifyDescInnerDarkSx = {
  ...{
    color: "#cacaca",
    fontSize: "15px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardAbstractifyDescInnerLightSx = {
  ...{
    color: "#000000fa",
    fontSize: "15px",
    fontWeight: "500",
    "@media (max-width: 1000px)": {
      color: "#fafafaaa",
    },
  },
};

export const BodyCommsTiersCardAbstractifyDescInnerExDarkSx = {
  ...{
    color: "#cacaca",
    fontSize: "17px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardAbstractifyDescInnerExLightSx = {
  ...{
    color: "#000000fa",
    fontSize: "17px",
    fontWeight: "500",
    "@media (max-width: 1000px)": {
      color: "#fafafaaa",
    },
  },
};

export const BodyCommsTiersCardAbstractifyListIconDarkSx = {
  ...{
    color: "#d0d0d0",
    fontSize: "14px",
  },
};

export const BodyCommsTiersCardAbstractifyListIconLightSx = {
  ...{
    color: "#fafafaf0",
    fontSize: "14px",
  },
};

export const BodyCommsTiersCardAbstractifyListItemDarkSx = {
  ...{
    color: "#e0e0e0",
    fontSize: "14px",
    textAlign: "justify",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListItemLightSx = {
  ...{
    color: "#fafafada",
    fontSize: "14px",
    textAlign: "justify",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListItemExDarkSx = {
  ...{
    color: "#e0e0e0",
    fontSize: "18px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListItemExLightSx = {
  ...{
    color: "#fafafada",
    fontSize: "18px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListItemLongExDarkSx = {
  ...{
    color: "#e0e0e0",
    fontSize: "16.5px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListItemLongExLightSx = {
  ...{
    color: "#fafafada",
    fontSize: "16.5px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListItemIdtDarkSx = {
  ...{
    color: "#e0e0e0e0",
    fontSize: "14px",
    marginLeft: "1em",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListItemIdtLightSx = {
  ...{
    color: "#fafafaca",
    fontSize: "14px",
    marginLeft: "1em",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListItemIdtExDarkSx = {
  ...{
    color: "#e0e0e0e0",
    fontSize: "18px",
    maxWidth: "23ch",
    marginLeft: "1em",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListItemIdtExLightSx = {
  ...{
    color: "#fafafaca",
    fontSize: "18px",
    maxWidth: "23ch",
    marginLeft: "1em",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListSubtitleDarkSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    color: "#fafafaba",
    fontSize: "14.5px",
    fontStyle: "italic",
    fontWeight: "300",
    maxWidth: "45ch",
    alignSelf: "center",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyListSubtitleLightSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    color: "#fafafac0",
    fontSize: "14.5px",
    fontStyle: "italic",
    fontWeight: "300",
    maxWidth: "45ch",
    alignSelf: "center",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyCardActionsSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardAbstractifyPricingBoxSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardAbstractifyPricingLeftDarkSx = {
  ...{
    color: "#fafafafa",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyPricingLeftLightSx = {
  ...{
    color: "#29242a",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyPricingLeftExDarkSx = {
  ...{
    color: "#fafafafa",
    fontSize: "20px",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyPricingLeftExLightSx = {
  ...{
    color: "#29242a",
    fontSize: "20px",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyPricingRightDarkSx = {
  ...{
    color: "#babababa",
    fontSize: "14px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyPricingRightLightSx = {
  ...{
    color: "#29242a",
    fontSize: "14px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyPricingRightExDarkSx = {
  ...{
    color: "#babababa",
    fontSize: "16px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyPricingRightExLightSx = {
  ...{
    color: "#29242a",
    fontSize: "16px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardAbstractifyBtnDarkSx = {
  ...{
    backgroundColor: "#CD00BA",
    color: "#fafafafa",
    borderRadius: "24px",
    boxShadow: "0px 0px 20px 2px #e020eac0",
    transition: "all 0.2s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#360080",
      color: "#fafafa",
      boxShadow: "0px 1px 26px 10px #8020ea",
      transition: "all 0.3s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyCommsTiersCardAbstractifyBtnLightSx = {
  ...{
    backgroundColor: "#42307C",
    color: "#fafafae0",
    borderRadius: "24px",
    boxShadow: "0px 0px 36px 6px #f925a0",
    transition: "all 0.2s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#f925a0",
      color: "#19141a",
      boxShadow: "0px 1px 32px 16px #c95fff",
      transition: "all 0.2s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyCommsTiersCardPremiumDarkSx = {
  ...{
    borderRadius: "24px",
    background:
      "linear-gradient(270deg, rgba(145,127,85,0.3) 0%, rgba(145,127,85,0.65) 50%, rgba(138,120,78,0.8) 100%) padding-box, linear-gradient(90deg, rgba(249,239,255,1) 0%, rgba(239,219,255,1) 43%, rgba(249,249,255,1) 100%)",
    border: "1px solid transparent",
    backgroundClip: "padding-box",
    filter:
      "drop-shadow(5px 4px 4px rgba(172,163,144,0.9)) drop-shadow(-8px -6px 4px rgba(29,24,21,0.8))",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardPremiumLightSx = {
  ...{
    borderRadius: "24px",
    background:
      "linear-gradient(270deg, rgba(245,227,185,0.3) 0%, rgba(245,227,185,0.65) 50%, rgba(245,227,185,0.8) 100%) padding-box, linear-gradient(90deg, rgba(249,239,255,1) 0%, rgba(239,219,255,1) 43%, rgba(249,249,255,1) 100%)",
    border: "1px solid transparent",
    backgroundClip: "padding-box",
    filter:
      "drop-shadow(20px 14px 8px rgba(186,186,186,0.5)) drop-shadow(-28px -28px 12px #efefeff0)",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardPremiumExDarkSx = {
  ...{
    height: "524px",
    borderRadius: "24px",
    background:
      "linear-gradient(270deg, rgba(145,127,85,0.3) 0%, rgba(145,127,85,0.65) 50%, rgba(138,120,78,0.8) 100%) padding-box, linear-gradient(90deg, rgba(249,239,255,1) 0%, rgba(239,219,255,1) 43%, rgba(249,249,255,1) 100%)",
    border: "1px solid transparent",
    backgroundClip: "padding-box",
    filter:
      "drop-shadow(5px 4px 4px rgba(172,163,144,0.9)) drop-shadow(-8px -6px 4px rgba(29,24,21,0.8))",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardPremiumExLightSx = {
  ...{
    height: "524px",
    borderRadius: "24px",
    background:
      "linear-gradient(270deg, rgba(245,227,185,0.3) 0%, rgba(245,227,185,0.65) 50%, rgba(245,227,185,0.8) 100%) padding-box, linear-gradient(90deg, rgba(249,239,255,1) 0%, rgba(239,219,255,1) 43%, rgba(249,249,255,1) 100%)",
    border: "1px solid transparent",
    backgroundClip: "padding-box",
    filter:
      "drop-shadow(20px 14px 8px rgba(186,186,186,0.5)) drop-shadow(-28px -28px 12px #efefeff0)",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
};

export const BodyCommsTiersCardPremiumTitleDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(215,195,215,1) 0%, rgba(25,10,35,0.6) 40%, black 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumTitleLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(235,215,235,1) 0%, rgba(35,20,45,0.6) 40%, black 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumTitleExDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(215,195,215,1) 0%, rgba(25,10,35,0.6) 40%, black 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "34px",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumTitleExLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(185deg, rgba(235,215,235,1) 0%, rgba(35,20,45,0.6) 40%, black 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "34px",
    fontWeight: "800",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumDescBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardPremiumDescOuterDarkSx = {
  ...{
    color: "#19141a",
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: "31ch",
    marginTop: "2px",
    marginBottom: "2px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumDescOuterLightSx = {
  ...{
    color: "#19141a",
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: "31ch",
    marginTop: "2px",
    marginBottom: "2px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumDescOuterExDarkSx = {
  ...{
    color: "#19141a",
    fontSize: "17px",
    fontWeight: "500",
    maxWidth: "33ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumDescOuterExLightSx = {
  ...{
    color: "#19141a",
    fontSize: "17px",
    fontWeight: "500",
    maxWidth: "33ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumDescInnerDarkSx = {
  ...{
    color: "#000000ca",
    fontSize: "15px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardPremiumDescInnerLightSx = {
  ...{
    color: "#000000cf",
    fontSize: "15px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardPremiumDescInnerExDarkSx = {
  ...{
    color: "#000000ca",
    fontSize: "17px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardPremiumDescInnerExLightSx = {
  ...{
    color: "#000000cf",
    fontSize: "17px",
    fontWeight: "500",
  },
};

export const BodyCommsTiersCardPremiumListIconDarkSx = {
  ...{
    color: "#19141af0",
    fontSize: "14px",
  },
};

export const BodyCommsTiersCardPremiumListIconLightSx = {
  ...{
    color: "#19141af0",
    fontSize: "14px",
  },
};

export const BodyCommsTiersCardPremiumListItemDarkSx = {
  ...{
    color: "#09040a",
    fontSize: "14px",
    pointerEvents: "none",
    userSelect: "none",
    "@media (max-width: 450px)": {
      maxWidth: "26ch",
    },
  },
};

export const BodyCommsTiersCardPremiumListItemLightSx = {
  ...{
    color: "#19141afa",
    fontSize: "14px",
    pointerEvents: "none",
    userSelect: "none",
    "@media (max-width: 450px)": {
      maxWidth: "26ch",
    },
  },
};

export const BodyCommsTiersCardPremiumListItemExDarkSx = {
  ...{
    color: "#09040a",
    fontSize: "18px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumListItemExLightSx = {
  ...{
    color: "#19141afa",
    fontSize: "18px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumListItemLongExDarkSx = {
  ...{
    color: "#09040a",
    fontSize: "18px",
    maxWidth: "21ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumListItemLongExLightSx = {
  ...{
    color: "#19141afa",
    fontSize: "18px",
    maxWidth: "21ch",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumCardActionsSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardPremiumPricingBoxSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyCommsTiersCardPremiumPricingLeftDarkSx = {
  ...{
    color: "#19141a",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumPricingLeftLightSx = {
  ...{
    color: "#29242a",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumPricingLeftExDarkSx = {
  ...{
    color: "#19141a",
    fontSize: "20px",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumPricingLeftExLightSx = {
  ...{
    color: "#29242a",
    fontSize: "20px",
    marginRight: "4px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumPricingRightDarkSx = {
  ...{
    color: "#29242ada",
    fontSize: "14px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumPricingRightLightSx = {
  ...{
    color: "#29242a",
    fontSize: "14px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumPricingRightExDarkSx = {
  ...{
    color: "#29242ada",
    fontSize: "16px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumPricingRightExLightSx = {
  ...{
    color: "#29242a",
    fontSize: "16px",
    fontWeight: "500",
    textWrap: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyCommsTiersCardPremiumBtnDarkSx = {
  ...{
    backgroundColor: "#f0f0f0c0",
    color: "#62573C",
    borderRadius: "24px",
    boxShadow: "0px 1px 16px 1px #f0f0f0",
    transition: "all 0.2s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#C0B2A3",
      color: "#ffffff",
      boxShadow: "0px 1px 26px 10px #f3f3f3",
      transition: "all 0.3s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyCommsTiersCardPremiumBtnLightSx = {
  ...{
    backgroundColor: "#29242ae0",
    color: "#F2E7CC",
    borderRadius: "24px",
    boxShadow: "0px 1px 16px 1px #29242a7a",
    transition: "all 0.2s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#FFFBF0",
      color: "#19141a",
      boxShadow: "0px 1px 28px 8px #29242a40",
      transition: "all 0.2s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyCommsExButtonBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8px",
    marginBottom: "-8px",
  },
};

export const BodyCommsExButtonDarkSx = {
  ...{
    width: "230px",
    border: "none",
    borderRadius: "24px",
    marginBottom: "8px",
    backgroundColor: "#323352",
    color: "#fafafafa",
    transition: "background-color 0.3s ease-out, color 0.3s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#7273A2",
      color: "#19141a",
      transition: "background-color 0.3s ease-out, color 0.3s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyCommsExButtonLightSx = {
  ...{
    width: "230px",
    border: "none",
    borderRadius: "24px",
    marginBottom: "8px",
    backgroundColor: "#d5085f",
    color: "#fafafafa",
    transition: "background-color 0.3s ease-out, color 0.3s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#ef2e50",
      color: "lightgoldenrodyellow",
      transition: "background-color 0.3s ease-out, color 0.3s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyLogoPageBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

export const BodyLogoPageTitleTypographyDarkSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "32px",
    fontWeight: "700",
    backgroundImage:
      "linear-gradient(175deg, #ff0010 0%, #ff006a 50%, #ef90ff 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    filter: "drop-shadow(0px 18px 3px #10101090)",
    marginTop: "8px",
    marginBottom: "-10px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyLogoPageTitleTypographyLightSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "32px",
    fontWeight: "700",
    backgroundImage:
      "linear-gradient(175deg, #ff003e 0%, #eb004e 50%, #db206e 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    filter: "drop-shadow(0px 4px 3px #10101050)",
    marginTop: "8px",
    marginBottom: "-10px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyLogoPageFooterOuterTypographyDarkSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    color: "#ff006a",
    filter: "drop-shadow(0px 4px 3px #101010)",
    marginTop: "8px",
    marginBottom: "16px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyLogoPageFooterOuterTypographyLightSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    color: "#e7004a",
    filter: "drop-shadow(0px 4px 3px #10101040)",
    marginTop: "8px",
    marginBottom: "16px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyLogoPageFooterInnerTypographyDarkSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "12px",
    fontWeight: "400",
    color: "#ff2af0",
    filter: "drop-shadow(0px 4px 3px #10101060)",
    marginTop: "8px",
    marginBottom: "8px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyLogoPageFooterInnerTypographyLightSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "12px",
    fontWeight: "400",
    color: "#db105e",
    filter: "drop-shadow(0px 4px 3px #10101010)",
    marginTop: "8px",
    marginBottom: "8px",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyLogoPageButtonBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12px",
    marginBottom: "12px",
  },
};

export const BodyLogoPageButtonDarkSx = {
  ...{
    width: "230px",
    border: "none",
    borderRadius: "24px",
    marginBottom: "8px",
    backgroundColor: "#ff006a",
    color: "#fafafafa",
    transition: "background-color 0.6s ease-out, color 0.3s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#c955bf",
      color: "#000000",
      transition: "background-color 0.6s ease-out, color 0.3s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyLogoPageButtonLightSx = {
  ...{
    width: "230px",
    border: "none",
    borderRadius: "24px",
    marginBottom: "8px",
    backgroundColor: "#eb004e",
    color: "#fafafafa",
    transition: "background-color 0.6s ease-out, color 0.3s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#ff557f",
      color: "#09040a",
      transition: "background-color 0.6s ease-out, color 0.3s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const BodyLogoPageHiddenTextBoxSx = {
  ...{
    position: "absolute",
    right: "10px",
    bottom: "10px",
    "@media (max-width: 1000px)": {
      right: "auto",
    },
  },
};

export const BodyLogoPageHiddenTextTypoSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "12.5px",
    fontStyle: "italic",
    fontWeight: "300",
    color: "#eb206e",
    filter: "drop-shadow(0px 4px 3px #10101010)",
    marginTop: "8px",
    marginBottom: "8px",
    cursor: "pointer",
    userSelect: "none",
  },
};
