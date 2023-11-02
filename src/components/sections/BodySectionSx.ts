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
    backgroundColor: "#ffffff",
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
    backgroundColor: "#ffffff",
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
    background: "linear-gradient(70deg, #14131540, #252525) padding-box",
    backgroundClip: "padding-box",
    border: "1px solid transparent",
    boxShadow:
      "41px 41px 82px rgba(69,69,69,0.25), -41px -41px 82px rgba(20,19,21,0.5)",
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
    background: "linear-gradient(210deg, #f9f9f9, #ededed) padding-box",
    backgroundClip: "padding-box",
    border: "1px solid transparent",
    boxShadow:
      "41px 41px 82px rgba(186,186,186,0.65), -41px -41px 82px #fafafa",
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
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const BodyPortfolioCardDividerDarkSx = {
  ...{
    "--Divider-lineColor": "rgba(61,39,115,0.15)",
  },
};

export const BodyPortfolioCardDividerLightSx = {
  ...{
    "--Divider-lineColor": "rgba(229,209,245,0.15)",
  },
};

export const BodyPortfolioCommBoxSx = {
  ...{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "16px",
    paddingBottom: "16px",
  },
};

export const BodyPortfolioCommBtnDividerBoxSx = {
  ...{
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "16px",
    marginBottom: "16px",
  },
};

export const BodyPortfolioCommBtnDividerDarkSx = {
  ...{
    background:
      "linear-gradient(90deg, #E89B00 0%, #E54500 35%, #E51059 70%, #D200FF)",
    minWidth: "85vw",
    maxWidth: "90vw",
  },
};

export const BodyPortfolioCommBtnDividerLightSx = {
  ...{
    background:
      "linear-gradient(90deg, #F4C7BE 0%, #EB58AE 35%, #E822BB 70%, #D104FF)",
    minWidth: "85vw",
    maxWidth: "90vw",
  },
};

export const BodyPortfolioCommBtnDarkSx = {
  ...{
    minWidth: "55vw",
    maxWidth: "75vw",
    height: "44px",
    backgroundColor: "#503279",
    color: "#fafafacf",
    borderRadius: "24px",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
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

export const BodyPortfolioCommBtnLightSx = {
  ...{
    minWidth: "55vw",
    maxWidth: "75vw",
    height: "44px",
    backgroundColor: "#c5cafa",
    color: "#2d282ecf",
    borderRadius: "24px",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
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
