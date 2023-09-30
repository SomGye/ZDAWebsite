// TODO: Footer Section Component
/**
 * Footer section, same for all pages.
 * Composed of:
 * - Same background as Top Info Section
 * - Title text: "Thank you for visiting!"
 * - Body text: "If you need to contact me, the best way is through email (zerodayanubis@gmail.com) or Discord (@zerodayanubis)."
 *    "If you have any questions, feel free to ask, I am here to help."
 *    "Have a great day!"
 * - Link buttons:
 *   - Email: `mailto:zerodayanubis@gmail.com`
 *   - Discord: https://discordapp.com/users/193548282264420354
 * - Text link to Privacy Policy: https://drive.google.com/file/d/1H4WkDEfEIdqIAKem2sjGiyHJd5wb7udh/view?usp=sharing
 * - Copyright text: "© ZDA WORKS. ALL RIGHTS RESERVED."
 */
import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../../states/ThemeAtom";
import { Box, Container, IconButton } from "@mui/joy";
import {
  EmailRounded,
  MessageRounded,
} from "@mui/icons-material";
import { clickEmail, clickLink } from "../../Helpers";

const FooterSection = () => {
  const theme = useRecoilValue(themeAtom);

  return (
    <Container>
      <Box>
        <h3>
          <b>Thank you for visiting!</b>
        </h3>
        <h4>
          If you need to contact me, the best way is through email
          (zerodayanubis@gmail.com) or Discord (@zerodayanubis).
          <br />
          If you have any questions, feel free to ask, I am here to help.
          <br />
          Have a great day!
        </h4>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            variant="outlined"
            sx={
              theme === "dark"
                ? { backgroundColor: "#d9d9de" }
                : { backgroundColor: "#fafafa" }
            }
            onClick={clickEmail}
          >
            <EmailRounded />
          </IconButton>
          <IconButton
            variant="outlined"
            sx={
              theme === "dark"
                ? { backgroundColor: "#d9d9de" }
                : { backgroundColor: "#fafafa" }
            }
            onClick={() =>
              clickLink("https://discordapp.com/users/193548282264420354")
            }
          >
            <MessageRounded />
          </IconButton>
        </Box>
        <a href="https://drive.google.com/file/d/1H4WkDEfEIdqIAKem2sjGiyHJd5wb7udh/view?usp=sharing">
          <h5>Privacy Policy</h5>
        </a>
        <h6>© ZDA WORKS. ALL RIGHTS RESERVED.</h6>
      </Box>
    </Container>
  );
};

export default FooterSection;
