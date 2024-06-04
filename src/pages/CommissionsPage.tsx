import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageAtom } from "../states/pageAtom";
import { themeAtom } from "../states/themeAtom";
import { clickLink } from "../helpers";
import MiniSpinner from "../components/MiniSpinner";

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
      <button
        className="hidden md:block w-56 h-8 m-4 rounded-2xl bg-zdaRedpink-600 hover:bg-zdaRedpink-700/90 active:bg-zdaRedpink-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-300 ease-out"
        onClick={() => setFormVisible(!formVisible)}
      >
        {formVisible ? "Hide Commissions Form" : "Show Commissions Form"}
      </button>
      {/* Mobile Only - Open form in new tab */}
      <button
        className="block md:hidden w-64 h-8 m-4 rounded-2xl bg-zdaRedpink-650 hover:bg-zdaRedpink-500 active:bg-zdaRedpink-700 text-zdaRedpink-50 font-outfit motion-safe:transition-all motion-safe:duration-200 ease-out"
        onClick={() => clickLink(formLink)}
      >
        Commissions Form
      </button>
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
