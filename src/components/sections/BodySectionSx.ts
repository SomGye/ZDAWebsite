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
      "linear-gradient(270deg, rgba(30,24,35,1) 0%, rgba(40,14,38,1) 43%, rgba(30,30,32,1) 100%) padding-box, linear-gradient(90deg, rgba(29,29,35,1) 0%, rgba(29,9,35,1) 43%, rgba(29,29,35,1) 100%)",
    border: "1px solid transparent",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    boxShadow: "rgba(29,9,121,0.80) 0px 8px 80px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      background:
        "linear-gradient(315deg, rgba(33,27,38,1) 0%, rgba(43,17,41,1) 43%, rgba(33,33,35,1) 100%) padding-box, linear-gradient(90deg, rgba(29,29,35,1) 0%, rgba(29,9,35,1) 43%, rgba(29,29,35,1) 100%)",
      boxShadow: "rgba(69,19,121,0.85) 0px 26px 180px 10px",
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
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
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
      backgroundColor: "#db51d4",
      color: "#2d282e",
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
