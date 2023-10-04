export const TopBannerBoxDarkSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    // justifyContent: "space-between",
    justifyContent: "space-evenly", // TODO: figure out why toggle gets cutoff on right
    alignItems: "center",
    backgroundColor: "#29242ae0", //BANNER PART BELOW
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    paddingTop: "8px",
    margin: "auto",
  },
};

export const TopBannerBoxLightSx = {
  ...{
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    // justifyContent: "space-between",
    justifyContent: "space-evenly", // TODO: figure out why toggle gets cutoff on right
    alignItems: "center",
    backgroundColor: "#fafafae0", //BANNER PART BELOW
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    paddingTop: "8px",
    margin: "auto",
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
  },
};

export const TopBannerIconButtonLightSx = {
  ...{
    backgroundColor: "#fcfcfc",
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
