export const TopInfoContainerSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "stretch",
  },
};

export const TopInfoTopDarkBoxSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(323deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    color: "#19141acc",
  },
};

export const TopInfoTopLightBoxSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(69deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    color: "#fafafafa",
  },
};

export const TopInfoCardBoxRowSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
};

export const TopInfoCardBoxColSx = {
  ...{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

export const TopInfoCardOuterDarkSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    backgroundColor: "#2d282e",
    border: "1px solid transparent",
    boxShadow: "rgba(210,192,226,0.06) 0px 6px 60px 8px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      "--Card-radius": "18px",
      backgroundColor: "#332e34",
      boxShadow: "rgba(210,192,226,0.18) 0px 26px 180px 10px",
      transition: "all 0.15s ease-out",
    },
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

export const TopInfoCardOuterLightSx = {
  ...{
    "--Card-padding": "28px",
    "--Card-radius": "24px",
    backgroundColor: "#ffffff",
    border: "1px solid transparent",
    boxShadow: "rgba(30,12,46,0.11) 0px 20px 40px 2px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      "--Card-radius": "18px",
      backgroundColor: "#f0f0f0",
      boxShadow: "rgba(30,12,46,0.20) 0px 40px 180px 4px",
      transition: "all 0.15s ease-out",
    },
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
    "--Card-padding": "28px",
    "--Card-radius": "24px",
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
    "--Card-padding": "28px",
    "--Card-radius": "24px",
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
    backgroundColor: "#29242a",
    border: "1px solid transparent",
    boxShadow: "rgba(210,192,226,0.06) 0px 6px 60px 8px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      "--Card-radius": "18px",
      backgroundColor: "#332e34",
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
      backgroundColor: "#f0f0f0",
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
