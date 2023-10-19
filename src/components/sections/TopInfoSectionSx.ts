export const TopInfoContainerSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const TopInfoTopDarkBoxSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    backgroundImage:
      "linear-gradient(323deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    color: "#19141acc",
    "@media (max-width: 780px)": {
      flexDirection: "column",
    },
  },
};

export const TopInfoTopLightBoxSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    backgroundImage:
      "linear-gradient(69deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    color: "#fafafafa",
    "@media (max-width: 780px)": {
      flexDirection: "column",
    },
  },
};

export const TopInfoTopTypoBoxSx = {
  ...{
    flex: "1",
    display: "flex",
    justifyContent: "center",
  },
};

export const TopInfoTopTypoBoxColSx = {
  ...{
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

export const TopInfoTopLeftTitleDarkSx = {
  ...{
    color: "#29242a",
    fontWeight: "300",
    marginTop: "auto", // CENTERING
    marginBottom: "auto",
    marginRight: "auto",
    marginLeft: "auto",
  },
};

export const TopInfoTopLeftTitleLightSx = {
  ...{
    color: "#fafafafa",
    fontWeight: "200",
    marginTop: "auto", // CENTERING
    marginBottom: "auto",
    marginRight: "auto",
    marginLeft: "auto",
  },
};

export const TopInfoTopMidTitleDarkSx = {
  ...{
    color: "#29242a",
    fontSize: "24px",
    fontWeight: "300",
    marginTop: "auto", // CENTERING
    marginBottom: "auto",
  },
};

export const TopInfoTopMidTitleLightSx = {
  ...{
    color: "#fafafafa",
    fontSize: "24px",
    fontWeight: "200",
    marginTop: "auto", // CENTERING
    marginBottom: "auto",
  },
};

export const TopInfoTopRightTitleDarkSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    color: "#29242a",
    fontSize: "18px",
    fontWeight: "400",
    marginTop: "auto", // CENTERING
    marginBottom: "auto",
  },
};

export const TopInfoTopRightTitleLightSx = {
  ...{
    fontFamily: "Karla, system-ui, Avenir, Helvetica, Arial, sans-serif",
    color: "#fafafafa",
    fontSize: "18px",
    fontWeight: "400",
    marginTop: "auto", // CENTERING
    marginBottom: "auto",
  },
};

export const TopInfoCardBoxColSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "70%",
    maxWidth: "95%",
  },
};

export const TopInfoCardOuterTypoDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(69deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
  },
};

export const TopInfoCardOuterTypoLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(323deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
  },
};

export const TopInfoCardInnerDarkSx = {
  ...{
    "--Card-padding": "32px",
    "--Card-radius": "24px",
    margin: "20px",
    marginBottom: "0",
    marginTop: "0",
    backgroundImage:
      "linear-gradient(69deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    color: "#19141acc",
    boxShadow: "rgba(235,91,174,0.40) 0px 8px 32px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      "--Card-radius": "18px",
      backgroundImage:
        "linear-gradient(66deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
      boxShadow: "rgba(235,91,174,0.45) 0px 26px 180px 10px",
      transition: "all 0.15s ease-out",
    },
  },
};

export const TopInfoCardInnerLightSx = {
  ...{
    "--Card-padding": "32px",
    "--Card-radius": "24px",
    margin: "20px",
    marginBottom: "0",
    marginTop: "0",
    backgroundImage:
      "linear-gradient(323deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    color: "#fafafafa",
    boxShadow: "rgba(229,98,13,0.40) 0px 8px 32px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      "--Card-radius": "18px",
      backgroundImage:
        "linear-gradient(320deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
      boxShadow: "rgba(229,98,13,0.45) 0px 26px 180px 10px",
      transition: "all 0.15s ease-out",
    },
  },
};

export const TopInfoCardTopDarkSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    margin: "20px",
    backgroundColor: "#262127",
    border: "1px solid transparent",
    boxShadow: "rgba(210,192,226,0.06) 0px 6px 60px 8px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      "--Card-radius": "18px",
      backgroundColor: "#2b262c",
      boxShadow: "rgba(210,192,226,0.18) 0px 26px 180px 10px",
      transition: "all 0.15s ease-out",
    },
  },
};

export const TopInfoCardTopLightSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    margin: "20px",
    backgroundColor: "#ffffff",
    border: "1px solid transparent",
    boxShadow: "rgba(30,12,46,0.11) 0px 20px 40px 2px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      "--Card-radius": "18px",
      backgroundColor: "#f5f5f5",
      boxShadow: "rgba(30,12,46,0.20) 0px 40px 180px 4px",
      transition: "all 0.15s ease-out",
    },
  },
};

export const TopInfoCardBottomDarkSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    margin: "20px",
    marginTop: "0",
    backgroundImage:
      "linear-gradient(69deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    color: "#19141acc",
    boxShadow: "rgba(235,91,174,0.40) 0px 8px 32px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      "--Card-radius": "18px",
      backgroundImage:
        "linear-gradient(66deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
      boxShadow: "rgba(235,91,174,0.45) 0px 26px 180px 10px",
      transition: "all 0.15s ease-out",
    },
  },
};

export const TopInfoCardBottomLightSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    margin: "20px",
    marginTop: "0",
    backgroundImage:
      "linear-gradient(323deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    color: "#fafafafa",
    boxShadow: "rgba(229,98,13,0.40) 0px 8px 32px -1px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      "--Card-radius": "18px",
      backgroundImage:
        "linear-gradient(320deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
      boxShadow: "rgba(229,98,13,0.45) 0px 26px 180px 10px",
      transition: "all 0.15s ease-out",
    },
  },
};

export const TopInfoCommBoxSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const TopInfoCommCardDarkSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    margin: "20px",
    background:
      "linear-gradient(#2d282e,#2d282e) padding-box, linear-gradient(69deg,#6b25fe,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    border: "1px solid transparent",
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

export const TopInfoCommCardLightSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    margin: "20px",
    background:
      "linear-gradient(#ffffff,#ffffff) padding-box, linear-gradient(323deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    border: "1px solid transparent",
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

export const TopInfoCardContentSx = {
  ...{
    alignItems: "center",
    textAlign: "center",
  },
};

export const TopInfoCommCardTitleDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(323deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
  },
};

export const TopInfoCommCardTitleLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(69deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    backgroundClip: "text",
    "-webkit-text-fill-color": "transparent",
  },
};

export const TopInfoCommCardBodyTopDarkSx = {
  ...{
    maxWidth: "32ch",
    color: "#fafafaca",
  },
};

export const TopInfoCommCardBodyTopLightSx = {
  ...{
    maxWidth: "32ch",
    color: "#29242ada",
  },
};

export const TopInfoCommCardBodyBtmDarkSx = {
  ...{
    maxWidth: "28ch",
    color: "#fafafacf",
  },
};

export const TopInfoCommCardBodyBtmLightSx = {
  ...{
    maxWidth: "28ch",
    color: "#29242adf",
  },
};

export const TopInfoCommCardOverflowDarkSx = {
  ...{
    backgroundImage:
      "linear-gradient(323deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
  },
};

export const TopInfoCommCardOverflowLightSx = {
  ...{
    backgroundImage:
      "linear-gradient(69deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
  },
};

export const TopInfoButtonGroupDarkSx = {
  ...{
    justifyContent: "center",
    "--ButtonGroup-radius": "24px",
    "--ButtonGroup-separatorColor": "none !important",
    "& > span": {
      zIndex: 3,
      background:
        "linear-gradient(to top, transparent, rgba(255 255 255 / 0.6), transparent)",
    },
    background:
      "linear-gradient(#2d282e,#2d282e) padding-box, linear-gradient(69deg,#6b25fe,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    border: "1px solid transparent",
  },
};

export const TopInfoButtonGroupLightSx = {
  ...{
    justifyContent: "center",
    "--ButtonGroup-radius": "24px",
    "--ButtonGroup-separatorColor": "none !important",
    "& > span": {
      zIndex: 3,
      background:
        "linear-gradient(to top, transparent, rgba(0 0 0 / 0.6), transparent)",
    },
    backgroundImage:
      "linear-gradient(69deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    border: "none",
  },
};

export const TopInfoCommCardBtnLeftDarkSx = {
  ...{
    backgroundColor: "#2d282e",
    borderRight: "none",
    color: "#fafafacf",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#3a353b",
      color: "#fafafa",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopInfoCommCardBtnLeftLightSx = {
  ...{
    backgroundColor: "#fafafa",
    borderRight: "none",
    color: "#2d282ecf",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#e7e7e7",
      color: "#2d282e",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopInfoCommCardBtnMidDarkSx = {
  ...{
    backgroundColor: "#2d282e",
    borderLeft: "none",
    borderRight: "none",
    color: "#fafafacf",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#3a353b",
      color: "#fafafa",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopInfoCommCardBtnMidLightSx = {
  ...{
    backgroundColor: "#fafafa",
    borderLeft: "none",
    borderRight: "none",
    color: "#2d282ecf",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#e7e7e7",
      color: "#2d282e",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopInfoCommCardBtnRightDarkSx = {
  ...{
    backgroundColor: "#2d282e",
    borderLeft: "none",
    color: "#fafafacf",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#3a353b",
      color: "#fafafa",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopInfoCommCardBtnRightLightSx = {
  ...{
    backgroundColor: "#fafafa",
    borderLeft: "none",
    color: "#2d282ecf",
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#e7e7e7",
      color: "#2d282e",
      transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};
