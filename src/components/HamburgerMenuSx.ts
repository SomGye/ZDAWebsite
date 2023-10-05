export const HamburgerSheetDarkSx = {
  ...{
    borderRadius: "md",
    p: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    height: "100%",
    overflow: "auto",
    backgroundColor: "#2c272d",
    color: "rgba(255, 255, 255, 0.90)",
  },
};

export const HamburgerSheetLightSx = {
  ...{
    borderRadius: "md",
    p: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    height: "100%",
    overflow: "auto",
    backgroundColor: "#fafafa",
    color: "#213547",
  },
};

export const HamburgerCloseDarkSx = {
  ...{
    backgroundColor: "#363137",
    color: "#89848a",
    "&:hover": {
      backgroundColor: "#49444a",
      color: "#89848a",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const HamburgerCloseLightSx = {
  ...{
    backgroundColor: "#e9e9e9",
    "&:hover": {
      backgroundColor: "#BBA5FE90",
      color: "#363137",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const HamburgerTitleDarkSx = {
  ...{
    marginTop: "8px",
    color: "rgba(255, 255, 255, 0.90)",
  },
};

export const HamburgerTitleLightSx = {
  ...{
    marginTop: "8px",
    color: "#213547",
  },
};

export const HamburgerInnerNavBtnDarkSx = {
  ...{
    justifyContent: "left",
    backgroundColor: "#332e34",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "#6B25FE",
      color: "#fafafa",
    },
  },
};

export const HamburgerInnerNavBtnLightSx = {
  ...{
    justifyContent: "left",
    color: "#6B25FE",
    "&:hover": {
      backgroundColor: "#6B25FE",
      color: "#fafafa",
    },
  },
};
