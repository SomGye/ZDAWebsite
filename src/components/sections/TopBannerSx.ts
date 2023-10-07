export const TopBannerContainerSx = {
  ...{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "67px", // TODO: change for mobile
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
    transition: "background-color 0.10s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      borderColor: "#6B25FE",
      backgroundColor: "#6B25FE",
      transition: "background-color 0.10s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopBannerIconButtonLightSx = {
  ...{
    backgroundColor: "#fafafa10",
    transition: "background-color 0.25s",
    "&:hover": {
      backgroundColor: "#BBA5FE90",
      transition: "background-color 0.25s",
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
    backgroundColor: "#29242a10",
    fontSize: "18px",
    paddingRight: "8px",
  },
};

export const TopBannerIconLightSx = {
  ...{
    backgroundColor: "#fafafa10",
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

export const TopBannerCommButtonSx = {
  ...{
    backgroundColor: "#6B25FE",
    borderRadius: "24px",
    transition: "background-color 0.15s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#4817DB",
      transition: "background-color 0.15s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopBannerButtonGroupSx = {
  ...{
    justifyContent: "center",
    "--ButtonGroup-radius": "24px",
    "--ButtonGroup-separatorColor": "none !important",
  }
}

export const TopBannerButtonActiveDarkSx = {
  ...{
    textDecoration: "underline",
    border: "none",
    backgroundColor: "#D600FF",
    color: "#fafafafa",
    transition: "background-color 0.15s, color 0.15s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#EB5EAF",
      color: "#19141a",
      transition: "background-color 0.15s, color 0.15s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopBannerButtonDefaultDarkSx = {
  ...{
    border: "none",
    backgroundColor: "#D600FF",
    color: "#fafafafa",
    transition: "background-color 0.15s, color 0.15s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#EB5EAF",
      color: "#19141a",
      transition: "background-color 0.15s, color 0.15s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopBannerButtonActiveLightSx = {
  ...{
    textDecoration: "underline",
    backgroundColor: "#E10965",
    color: "#fafafafa",
    border: "none",
    transition: "background-color 0.15s, color 0.15s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#ef2e50",
      color: "lightgoldenrodyellow",
      transition: "background-color 0.15s, color 0.15s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopBannerButtonDefaultLightSx = {
  ...{
    border: "none",
    backgroundColor: "#E10965",
    color: "#fafafafa",
    transition: "background-color 0.15s, color 0.15s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#ef2e50",
      color: "lightgoldenrodyellow",
      transition: "background-color 0.15s, color 0.15s",
      transitionTimingFunction: "ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const TopBannerThemeToggleBoxSx = {
  ...{
    display: "flex",
    marginRight: "16px",
  },
};
