import * as React from "react";
import "./App.css";
import { Container } from "@mui/joy";
import TopBanner from "./components/sections/TopBanner";
import TopInfoSection from "./components/sections/TopInfoSection";
import BodySection from "./components/sections/BodySection";
import FooterSection from "./components/sections/FooterSection";
import { AppContainerSx } from "./AppSx";
import { useRecoilState } from "recoil";
import { pageAtom } from "./states/PageAtom";
import {
  commSlotsAtom,
  commStatusAtom,
  slotsReadyAtom,
  waitlistSlotsAtom,
} from "./states/CommSlotsAtom";
import { switchPage } from "./Helpers";

type Props = {
  route: string;
};

const App = ({ route }: Props) => {
  const [page, setPage] = useRecoilState(pageAtom);
  const [commSlots, setCommSlots] = useRecoilState(commSlotsAtom);
  const [waitSlots, setWaitSlots] = useRecoilState(waitlistSlotsAtom);
  const [, setStatus] = useRecoilState(commStatusAtom);
  const [, setSlotsReady] = useRecoilState(slotsReadyAtom);
  const [bannerReady, setBannerReady] = React.useState(false);
  const [infoReady, setInfoReady] = React.useState(false);
  const [bodyReady, setBodyReady] = React.useState(false);
  const [footerReady, setFooterReady] = React.useState(false);
  const bannerDelay = 10;
  const infoDelay = 50;
  const bodyDelay = 100;
  const footerDelay = 200;
  const slotDelay = 500;

  React.useEffect(() => {
    // Perf Tweak: Load Sections on Delays
    setTimeout(() => {
      setBannerReady(true);
    }, bannerDelay);
    setTimeout(() => {
      setInfoReady(true);
    }, infoDelay);
    setTimeout(() => {
      setBodyReady(true);
    }, bodyDelay);
    setTimeout(() => {
      setFooterReady(true);
    }, footerDelay);

    // Set page to incoming route
    const currentPath = window.location.href;
    if (route === "portfolio") {
      setPage("Portfolio");
    } else if (route === "commissions") {
      setPage("Commissions");
    } else if (route === "examples") {
      setPage("Examples");
    } else {
      // Check for direct path in URL and use Hard URL switch to clear sub-domain
      if (currentPath.toLocaleLowerCase().includes("portfolio")) {
        switchPage("Portfolio", setPage, true);
      } else if (currentPath.toLocaleLowerCase().includes("commissions")) {
        switchPage("Commissions", setPage, true);
      } else if (currentPath.toLocaleLowerCase().includes("examples")) {
        switchPage("Examples", setPage, true);
      } else {
        setPage("Home");
      }
    }

    // Query Vercel KV Store to get Commissions Slots Info
    const fetchData = async () => {
      const result = await fetch(
        `${
          import.meta.env.VITE_KV_REST_API_URL
        }/mget/slots:active/slots:waitlist`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_KV_REST_API_TOKEN}`,
          },
        }
      )
        .then((response) => response.json())
        .catch((err) => console.log(err));

      // Check for Result/Error
      if (result && !result.error && result.result) {
        // Check for empty results
        if (result.result.length === 0) {
          console.log("Warning while fetching KV: No results");
        } else {
          // Parse Current Active and Waitlist Slots
          let commSlotsResult = commSlots;
          let waitSlotsResult = waitSlots;
          if (result.result[0] && result.result[0].length > 0) {
            commSlotsResult = parseInt(result.result[0]);
          }
          if (result.result[1] && result.result[1].length > 0) {
            waitSlotsResult = parseInt(result.result[1]);
          }

          // Update Commission Slots
          if (!isNaN(commSlotsResult)) {
            setTimeout(() => {
              setCommSlots(commSlotsResult);
            }, slotDelay);
          }
          if (!isNaN(waitSlotsResult)) {
            setTimeout(() => {
              setWaitSlots(waitSlotsResult);
            }, slotDelay);
          }

          // Determine Commission Status
          if (commSlotsResult < 1) {
            setTimeout(() => {
              setStatus("CLOSED");
            }, slotDelay);
          } else {
            setTimeout(() => {
              setStatus("OPEN");
            }, slotDelay);
          }

          // Set Ready Flag
          setTimeout(() => {
            setSlotsReady(true);
          }, slotDelay);

          // Log result
          console.log("Commission Slots updated from KV result:");
          console.log(result.result);
        }
      } else if (result && result.error) {
        // ERROR
        console.log("Error while fetching KV: " + result.error);
        setSlotsReady(true);
      } else if (!result) {
        // FETCH ERROR
        console.log(
          "Unexpected Error while fetching KV: Failed to Fetch Due to Incorrect URL"
        );
        setSlotsReady(true);
      } else {
        // UNEXPECTED ERROR
        console.log("Unexpected Error while fetching KV: " + result);
        setSlotsReady(true);
      }
    };

    // Call Vercel KV API within hook
    fetchData();
  }, []);

  return (
    <>
      <Container className="AppContainer" sx={AppContainerSx}>
        {bannerReady && page != "Examples" && <TopBanner />}
        {infoReady && page != "Examples" && <TopInfoSection />}
        {bodyReady && <BodySection />}
        {footerReady && page != "Examples" && <FooterSection />}
      </Container>
    </>
  );
};

export default App;
