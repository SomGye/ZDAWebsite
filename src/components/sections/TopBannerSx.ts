export const TopBannerContainerSx = {
  ...{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const TopBannerBoxDarkSx = {
  ...{
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#29242afb",
    position: "fixed",
    top: "0",
    width: "98%",
    zIndex: "999",
    paddingTop: "8px",
    margin: "auto",
    boxShadow: "rgba(210,192,226,0.04) 0px 1px 20px 2px",
    borderRadius: "24px",
  },
};

export const TopBannerBoxLightSx = {
  ...{
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fafafaf5",
    position: "fixed",
    top: "0",
    width: "98%",
    zIndex: "999",
    paddingTop: "8px",
    margin: "auto",
    boxShadow: "rgba(30,12,46,0.14) 0px 60px 220px -4px",
    borderRadius: "24px",
  },
};

export const TopBannerIconBoxSx = {
  ...{
    marginLeft: "16px",
  },
};

export const TopBannerIconButtonDarkSx = {
  ...{
    backgroundColor: "#39343a",
    borderColor: "#3d393f",
    "&:hover": {
      borderColor: "#6B25FE",
      backgroundColor: "#6B25FE",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopBannerIconButtonLightSx = {
  ...{
    backgroundColor: "#fcfcfc",
    "&:hover": {
      backgroundColor: "#BBA5FE90",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopBannerNavIconDarkSx = {
  ...{
    color: "#fafafa",
  },
};

export const TopBannerIconDarkSx = {
  ...{
    backgroundColor: "#29242a",
    fontSize: "18px",
    paddingRight: "8px",
  },
};

export const TopBannerIconLightSx = {
  ...{
    backgroundColor: "#fcfcfc",
    fontSize: "18px",
    paddingRight: "8px",
  },
};

export const TopBannerLogoTextHeaderSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const TopBannerButtonActiveSx = {
  ...{
    textDecoration: "underline",
  },
};

export const TopBannerThemeToggleBoxSx = {
  ...{
    display: "flex",
    marginRight: "16px",
  },
};
