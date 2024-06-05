import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageAtom } from "../states/pageAtom";
import { themeAtom } from "../states/themeAtom";
import { clickLink } from "../helpers";
import MiniSpinner from "../components/MiniSpinner";
import ZDAButton from "../components/ZDAButton";

const CommissionsPage = () => {
  const [, setPage] = useRecoilState(pageAtom);
  const theme = useRecoilValue(themeAtom);
  const [formVisible, setFormVisible] = React.useState(false);
  const [formLoading, setFormLoading] = React.useState(false);
  // const formLink = "https://tinyurl.com/ZDACommForm"; // ! TODO: uncomment (and remove below) when closer to release
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScvPym9fjD6IxPcJ1xGK8gm3YT9QKuqL-sOYjiab1AohuxDsg/viewform?usp=sf_link"; // ? TEST

  React.useEffect(() => {
    setFormLoading(formVisible);
  }, [formVisible]);

  return (
    // Commissions Types: Abstractify, Vectorize, (HyperCoalesce/SuperFusion/Super Synthesis)
    // TODO: use <AspectRatio/> around <img/> to force ratio for example images: https://www.radix-ui.com/primitives/docs/components/aspect-ratio
    <div className="commissions-page-container w-full flex flex-col justify-center items-center">
      <span className="text-lg font-medium">TODO: Commissions Page</span>
      {/* Desktop/Tablet Only - Show/Hide Form directly in page */}
      <ZDAButton
        clickCallback={() => setFormVisible(!formVisible)}
        textContent={
          formVisible ? "Hide Commissions Form" : "Show Commissions Form"
        }
      />
      {/* Mobile Only - Open form in new tab */}
      <ZDAButton
        clickCallback={() => clickLink(formLink)}
        textContent="Commissions Form"
        variant="mobile"
      />
      {formLoading && (
        <span className="inline-flex justify-center items-center gap-2">
          <MiniSpinner theme={theme} />
          Loading form...
        </span>
      )}
      {formVisible && (
        <object
          data={formLink}
          type="text/html"
          style={{
            width: "100%",
            height: "600px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
          onLoad={() => setFormLoading(false)}
        >
          Commissions Form
        </object>
      )}
    </div>
  );
};

export default CommissionsPage;
