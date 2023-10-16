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
      "linear-gradient(#2d282e,#2d282e) padding-box, linear-gradient(69deg,#6b25fe,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    border: "1px solid transparent",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    boxShadow: "rgba(235,91,174,0.40) 0px 8px 32px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      background:
        "linear-gradient(#312c32,#312c32) padding-box, linear-gradient(66deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
      boxShadow: "rgba(235,91,174,0.45) 0px 26px 180px 10px",
      transition: "all 0.15s ease-out",
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
      "linear-gradient(#ffffff,#ffffff) padding-box, linear-gradient(323deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    border: "1px solid transparent",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    boxShadow: "rgba(229,98,13,0.40) 0px 8px 32px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      background:
        "linear-gradient(#f5f5f5,#f5f5f5) padding-box, linear-gradient(320deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
      boxShadow: "rgba(229,98,13,0.45) 0px 26px 180px 10px",
      transition: "all 0.15s ease-out",
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
      "linear-gradient(323deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
  },
};

export const BodyHomeHighlightsCardTitleLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(69deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
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
    backgroundImage:
      "linear-gradient(323deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    borderRadius: "0",
  },
};

export const BodyHomeHighlightsCardOverflowLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(69deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    borderRadius: "0",
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
    backgroundColor: "#2d282e",
    color: "#fafafacf",
    borderRadius: "24px",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#eb51ae",
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
      backgroundColor: "#e55100",
      color: "#fafafa",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};
