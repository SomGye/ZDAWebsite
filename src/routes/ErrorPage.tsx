import * as React from "react";
import { Box, Container, Typography } from "@mui/joy";
import "./ErrorPage.css";

const ErrorPage = () => {
  const [countdown, setCountdown] = React.useState(3);

  React.useEffect(() => {
    setTimeout(() => {
      if (countdown > 1) {
        setCountdown((prev) => prev - 1);
      } else {
        // Redirect to Home (root)
        window.location.replace("/");
      }
    }, 1000);
  }, [countdown]);

  return (
    <Container className="ErrorContainer">
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
    </Container>
  );
};

export default ErrorPage;
