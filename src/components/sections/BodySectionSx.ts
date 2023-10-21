export const BodyContainerSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const BodyHomeBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

export const BodyHomeHighlightsBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
      "linear-gradient(270deg, rgba(30,24,35,1) 0%, #1F135F 50%, rgba(29,26,43,1) 100%) padding-box, linear-gradient(69deg,#6b25fe,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    border: "1px solid transparent",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    boxShadow: "rgba(29,9,121,1) 0px 8px 80px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      background:
        "linear-gradient(270deg, rgba(37,26,41,1) 0%, #1F0C5C 50%, rgba(36,28,49,1) 100%) padding-box, linear-gradient(180deg,#6b25fe,#ff3fa0 60%,#f74cf5 77%,#936eff)",
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
  },
};

export const BodyHomeHighlightsCardTitleLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(90deg, rgba(0,10,28,1) 0%, rgba(9,9,121,1) 43%, rgba(228,0,254,1) 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
  },
};

export const BodyHomeHighlightsCardBodyTopDarkSx = {
  ...{
    maxWidth: "32ch",
    color: "#fafafaca",
  },
};

export const BodyHomeHighlightsCardBodyTopLightSx = {
  ...{
    maxWidth: "32ch",
    color: "#29242ada",
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

export const BodyHomeHighlightsLightboxSx = {
  ...{
    container: {
      backdropFilter: "blur(16px)",
      backgroundColor: "rgba(0,0,0,0.8)",
    },
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

export const BodyHomeHightlightsCardOverflowBoxSx = {
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
    boxShadow: "rgba(218,75,90,0.3) 0px 1px 16px 2px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#29232a",
      boxShadow: "rgba(218,75,90,0.8) 0px 2px 240px 4px",
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
    width: "100%", // NEEDED to fill box space, shrink img in CSS
  },
};

export const BodyHomeSupportCardDarkSx = {
  ...{
    "--Card-padding": "24px",
    "--Card-radius": "24px",
    margin: "20px",
    backgroundColor: "#262127",
    border: "1px solid transparent",
    boxShadow: "rgba(244,210,191,0.2) 0px 1px 16px 2px",
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
    // color: "#fafafa",
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
      "linear-gradient(250deg, #E3CFBF 0%, #D56310 85%, #000000 100%)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
    margin: "10px",
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
