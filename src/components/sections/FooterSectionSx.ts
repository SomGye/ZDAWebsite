export const FooterIconButtonBoxSx = {
  ...{
    display: "flex",
    gap: 2,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const FooterIconButtonDarkSx = {
  ...{
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "164px",
    backgroundColor: "#373357",
    borderRadius: "24px",
    transition: "all 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#313f8a",
      transition: "all 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const FooterIconButtonLightSx = {
  ...{
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "164px",
    backgroundColor: "#e6e8fb",
    borderRadius: "24px",
    color: "#29242a",
    transition: "all 0.15s ease-out",
    "&:hover": {
      backgroundColor: "#ccd6fb",
      color: "#19141a",
      transition: "all 0.15s ease-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
};

export const FooterIconDarkSx = {
  ...{
    color: "#fafafa",
  },
};
