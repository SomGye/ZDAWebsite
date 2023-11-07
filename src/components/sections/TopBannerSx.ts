export const TopBannerContainerSx = {
  ...{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "67px",
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
    "@media (max-width: 1000px)": {
      paddingTop: "0.95em",
      paddingBottom: "0.95em",
    },
    "@media (max-width: 670px)": {
      justifyContent: "center",
    },
    "@media (max-width: 340px)": {
      paddingTop: "32px",
      paddingBottom: "32px",
    },
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
    "@media (max-width: 1000px)": {
      paddingTop: "0.95em",
      paddingBottom: "0.95em",
    },
    "@media (max-width: 670px)": {
      justifyContent: "center",
    },
    "@media (max-width: 340px)": {
      paddingTop: "32px",
      paddingBottom: "32px",
    },
  },
};

export const TopBannerIconBoxSx = {
  ...{
    marginLeft: "16px",
    "@media (max-width: 670px)": {
      position: "fixed",
      left: "0",
    },
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

export const TopBannerLogoNamePageBoxSx = {
  ...{
    width: "288px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 1000px)": {
      display: "none",
    },
  },
};

export const TopBannerCommButtonDarkSx = {
  ...{
    background:
      "linear-gradient(69deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    borderRadius: "24px",
    boxShadow: "0px 1px 12px 1px #FF301F",
    transition: "background 0.15s",
    transitionTimingFunction: "ease-out",
    "&:focus": {
      outline: "none",
    },
    "&:hover .Button-Helper": {
      opacity: "1",
    },
    "@media (max-width: 340px)": {
      display: "none",
    },
  },
};

export const TopBannerCommButtonDarkHelperSx = {
  ...{
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 1px 2px 1px",
    width: "100%",
    height: "100%",
    opacity: "0",
    fontSize: "0.875rem",
    borderRadius: "24px",
    background:
      "linear-gradient(69deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    boxShadow: "0px 1px 24px 2px red",
    transition: "opacity 0.20s",
    transitionTimingFunction: "ease-out",
    "@media (max-width: 340px)": {
      display: "none",
    },
  },
};

export const TopBannerCommButtonLightSx = {
  ...{
    background:
      "linear-gradient(69deg,#fd9800,#ff8442 23%,#ff3f00 52%,#f701f5 77%,#936eff)",
    borderRadius: "24px",
    boxShadow: "0px 1px 12px 3px #f0a0ff",
    transition: "background 0.15s",
    transitionTimingFunction: "ease-out",
    "&:focus": {
      outline: "none",
    },
    "&:hover .Button-Helper": {
      opacity: "1",
    },
    "@media (max-width: 340px)": {
      display: "none",
    },
  },
};

export const TopBannerCommButtonLightHelperSx = {
  ...{
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 1px 2px 1px",
    width: "100%",
    height: "100%",
    opacity: "0",
    fontSize: "0.875rem",
    borderRadius: "24px",
    background:
      "linear-gradient(69deg,#6b25fe,#ffd4c2 0%,#ff3fa0 60%,#f74cf5 77%,#936eff)",
    boxShadow: "0px 1px 24px 2px #E600D7",
    transition: "opacity 0.20s",
    transitionTimingFunction: "ease-out",
    "@media (max-width: 340px)": {
      display: "none",
    },
  },
};

export const TopBannerButtonGroupSx = {
  ...{
    justifyContent: "center",
    "--ButtonGroup-radius": "24px",
    "--ButtonGroup-separatorColor": "none !important",
    "@media (max-width: 670px)": {
      display: "none",
    },
  },
};

export const TopBannerButtonActiveDarkSx = {
  ...{
    textDecoration: "underline",
    border: "none",
    backgroundColor: "#D600FF",
    color: "#fafafafa",
    transition: "background-color 0.3s, color 0.3s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#F05AFF",
      color: "#19141a",
      transition: "background-color 0.3s, color 0.3s",
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
    transition: "background-color 0.3s, color 0.3s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#F05AFF",
      color: "#19141a",
      transition: "background-color 0.3s, color 0.3s",
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
    transition: "background-color 0.3s, color 0.3s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#ef2e50",
      color: "lightgoldenrodyellow",
      transition: "background-color 0.3s, color 0.3s",
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
    transition: "background-color 0.3s, color 0.3s",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      backgroundColor: "#ef2e50",
      color: "lightgoldenrodyellow",
      transition: "background-color 0.3s, color 0.3s",
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
    "@media (max-width: 670px)": {
      position: "fixed",
      right: "0",
    },
  },
};
