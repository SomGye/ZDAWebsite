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
    transition: "background-color 0.10s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#49444a",
      color: "#89848a",
      transition: "background-color 0.10s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const HamburgerCloseLightSx = {
  ...{
    backgroundColor: "#e9e9e9",
    transition: "background-color 0.20s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#BBA5FE90",
      color: "#363137",
      transition: "background-color 0.20s",
      transitionTimingFunction: "ease-out",
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

export const HamburgerButtonGroupSx = {
  ...{
    "--ButtonGroup-radius": "24px",
    "--ButtonGroup-separatorColor": "none !important",
  },
};

export const HamburgerButtonGroupTopSx = {
  ...{
    justifyContent: "center",
    "--ButtonGroup-radius": "24px",
    "--ButtonGroup-separatorColor": "none !important",
  },
};

export const HamburgerInnerNavBtnDarkSx = {
  ...{
    justifyContent: "left",
    backgroundColor: "#332e34",
    color: "#fafafa",
    border: "2px solid #6b25fe05",
    transition: "background-color 0.15s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#6B25FE",
      color: "#fafafa",
      border: "2px solid #6b25fe",
      transition: "background-color 0.15s",
      transitionTimingFunction: "ease-out",
    },
  },
};

export const HamburgerInnerNavBtnLightSx = {
  ...{
    justifyContent: "left",
    backgroundColor: "#6b25fe05",
    color: "#6B25FE",
    border: "2px solid #6b25fe0c",
    transition: "background-color 0.20s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#6B25FE",
      color: "#fafafa",
      transition: "background-color 0.20s",
      transitionTimingFunction: "ease-out",
    },
  },
};
