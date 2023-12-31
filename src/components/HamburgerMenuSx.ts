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
    transition: "background-color 0.1s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#49444a",
      color: "#89848a",
      transition: "background-color 0.1s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const HamburgerCloseLightSx = {
  ...{
    backgroundColor: "#e9e9e9",
    transition: "background-color 0.2s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#BBA5FE90",
      color: "#363137",
      transition: "background-color 0.2s ease-out",
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
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const HamburgerTitleLightSx = {
  ...{
    marginTop: "8px",
    color: "#213547",
    pointerEvents: "none",
    userSelect: "none",
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

export const HamburgerBoxTopSx = {
  ...{
    display: "flex",
    gap: "2px",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "left",
    "@media (max-width: 1270px)": {
      flexDirection: "column",
      justifyContent: "center",
      gap: "1px",
    },
  },
};

export const HamburgerBoxSx = {
  ...{
    display: "flex",
    gap: "6px",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const HamburgerTopNavBtnDarkSx = {
  ...{
    justifyContent: "left",
    backgroundColor: "#332e34",
    color: "#fafafa",
    border: "2px solid #6b25fef5",
    borderRadius: "24px",
    transition: "all 0.15s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#6B25FE",
      color: "#fafafa",
      border: "2px solid #6b25fe",
      transition: "all 0.15s ease-out",
    },
    "@media (max-width: 1270px)": {
      width: "100%",
      justifyContent: "center",
      border: "2px solid #6b25fef5",
    },
  },
};

export const HamburgerTopNavBtnLightSx = {
  ...{
    justifyContent: "left",
    backgroundColor: "#4f05de0a",
    color: "#6B25FE",
    border: "2px solid #6b25fe0c",
    borderRadius: "24px",
    transition: "all 0.2s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#6B25FE",
      color: "#fafafa",
      transition: "all 0.2s ease-out",
    },
    "@media (max-width: 1270px)": {
      width: "100%",
      justifyContent: "center",
    },
  },
};

export const HamburgerInnerNavIconDarkSx = {
  ...{
    fontSize: "15px",
    color: "#fafafac5",
  },
};

export const HamburgerInnerNavIconLightSx = {
  ...{
    fontSize: "15px",
  },
};

export const HamburgerInnerNavBtnDarkSx = {
  ...{
    width: "100%",
    justifyContent: "left",
    backgroundColor: "#353036",
    color: "#fafafa",
    border: "2px solid #6b25fe05",
    borderRadius: "24px",
    transition: "all 0.15s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#272228",
      color: "#ffffff",
      border: "2px solid #963cff",
      transition: "all 0.15s ease-out",
    },
  },
};

export const HamburgerInnerNavBtnLightSx = {
  ...{
    width: "100%",
    justifyContent: "left",
    backgroundColor: "#4f05de0a",
    color: "#6B25FE",
    border: "2px solid #6b25fe0c",
    borderRadius: "24px",
    transition: "all 0.2s ease-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#6B25FE",
      color: "#fafafa",
      transition: "all 0.2s ease-out",
    },
  },
};

export const HamburgerFooterTextDarkSx = {
  ...{
    fontFamily: "Karla, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "17px",
    fontStyle: "italic",
    fontWeight: "400",
    color: "#fafafafa",
    pointerEvents: "none",
    userSelect: "none",
  },
};

export const HamburgerFooterTextLightSx = {
  ...{
    fontFamily: "Karla, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "17px",
    fontStyle: "italic",
    fontWeight: "400",
    color: "#6B25FE",
    pointerEvents: "none",
    userSelect: "none",
  },
};
