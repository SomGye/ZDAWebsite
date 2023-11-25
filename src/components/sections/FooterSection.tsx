import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import { Box, Button, Container, Divider, Typography } from "@mui/joy";
import {
  AssignmentIndRounded,
  EmailRounded,
  MessageRounded,
} from "@mui/icons-material";
import { clickEmail, clickLink, switchPage } from "../../Helpers";
import {
  FooterBodyDarkSx,
  FooterBodyLightSx,
  FooterBoxSx,
  FooterContainerSx,
  FooterCopyrightDarkSx,
  FooterCopyrightLightSx,
  FooterDividerSx,
  FooterIconButtonBoxSx,
  FooterIconButtonDarkSx,
  FooterIconButtonLightSx,
  FooterIconDarkSx,
  FooterTitleDarkSx,
  FooterTitleLightSx,
} from "./FooterSectionSx";
import "./FooterSection.css";
import { pageAtom } from "../../states/PageAtom";

const FooterSection = () => {
  const theme = useRecoilValue(themeAtom);
  const [, setPage] = useRecoilState(pageAtom);

  return (
    <Container className="FooterContainer" sx={FooterContainerSx}>
      <Box sx={FooterBoxSx}>
        <Typography
          level="title-md"
          sx={theme === "dark" ? FooterTitleDarkSx : FooterTitleLightSx}
        >
          Thank you for visiting!
        </Typography>
        <Typography
          level="body-md"
          sx={theme === "dark" ? FooterBodyDarkSx : FooterBodyLightSx}
        >
          If you need to contact me, you can reach me through email
          (zerodayanubis@gmail.com) or Discord (@zerodayanubis).
          <br />
          If you have any questions, feel free to ask, I am here to help.
        </Typography>
        <Box sx={FooterIconButtonBoxSx}>
          <Button
            variant="solid"
            startDecorator={
              <EmailRounded sx={theme === "dark" ? FooterIconDarkSx : {}} />
            }
            sx={
              theme === "dark"
                ? FooterIconButtonDarkSx
                : FooterIconButtonLightSx
            }
            onClick={clickEmail}
          >
            {" "}
            Email Me
          </Button>
          <Button
            variant="solid"
            startDecorator={
              <MessageRounded sx={theme === "dark" ? FooterIconDarkSx : {}} />
            }
            sx={
              theme === "dark"
                ? FooterIconButtonDarkSx
                : FooterIconButtonLightSx
            }
            onClick={() =>
              clickLink("https://discordapp.com/users/193548282264420354")
            }
          >
            {" "}
            Message Me
          </Button>
        </Box>
        <Divider inset="none" sx={FooterDividerSx} />
        <Button
          aria-label="Privacy Policy"
          title="Privacy Policy"
          variant="solid"
          startDecorator={
            <AssignmentIndRounded
              sx={theme === "dark" ? FooterIconDarkSx : {}}
            />
          }
          sx={
            theme === "dark" ? FooterIconButtonDarkSx : FooterIconButtonLightSx
          }
          onClick={() => clickLink("https://tinyurl.com/ZDAPrivacy")}
          aria-description="Opens the Privacy Policy PDF in a new tab"
        >
          {" "}
          Privacy Policy
        </Button>
        <Typography
          level="body-xs"
          sx={theme === "dark" ? FooterCopyrightDarkSx : FooterCopyrightLightSx}
        >
          © ZDA WORKS. ALL RIGHTS RESERVED.
        </Typography>
        {/* Shortcut for getting to Examples Page */}
        <span
          style={
            theme === "dark"
              ? {
                  fontSize: "8px",
                  fontWeight: "300",
                  color: "#a1affaf0",
                  marginTop: "0px",
                  marginBottom: "0px",
                  cursor: "default",
                  userSelect: "none",
                }
              : {
                  fontSize: "8px",
                  fontWeight: "300",
                  color: "#afc5ffef",
                  marginTop: "0px",
                  marginBottom: "0px",
                  cursor: "default",
                  userSelect: "none",
                }
          }
          onClick={() => switchPage("Examples", setPage)}
        >
          {"----------------"}
        </span>
      </Box>
    </Container>
  );
};

export default FooterSection;
