import * as React from "react";
import { Box, Container, Typography } from "@mui/joy";
import "./ErrorPage.css";
import { useRecoilState } from "recoil";
import { pageAtom } from "../states/PageAtom";
import { switchPage } from "../Helpers";

const ErrorPage = () => {
  const [countdown, setCountdown] = React.useState(3);
  const [countdownReady, setCountdownReady] = React.useState(false);
  const [, setPage] = useRecoilState(pageAtom);

  React.useEffect(() => {
    const currentPath = window.location.href;
    // Check for direct path in URL and use Hard URL switch to clear sub-domain
    if (currentPath.toLocaleLowerCase().includes("portfolio")) {
      console.log("Hard redirect from ErrorPage to Portfolio");
      switchPage("portfolio", setPage, true);
    } else if (currentPath.toLocaleLowerCase().includes("commissions")) {
      console.log("Hard redirect from ErrorPage to Commissions");
      switchPage("commissions", setPage, true);
    } else if (currentPath.toLocaleLowerCase().includes("examples")) {
      console.log("Hard redirect from ErrorPage to Examples");
      switchPage("examples", setPage, true);
    } else {
      console.log("Redirect from ErrorPage to Home - countdown started");
      setCountdownReady(true);
    }
  }, []);

  React.useEffect(() => {
    if (countdownReady) {
      setTimeout(() => {
        if (countdown > 1) {
          console.log("Setting Countdown to: " + (countdown - 1));
          setCountdown((prev) => prev - 1);
        } else {
          // Redirect to Home (root)
          window.location.replace("/");
        }
      }, 1000);
    }
  }, [countdown, countdownReady]);

  return (
    <Container className="ErrorContainer">
      {countdownReady && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography level="title-lg" sx={{ color: "#fafafa" }}>
            404: Page Not Found
          </Typography>
          <Typography level="title-sm" sx={{ color: "#fafafaea" }}>
            Redirecting in {countdown}...
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ErrorPage;
