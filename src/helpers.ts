/**
 * Click to do mailto to email
 */
export const clickEmail = () => {
  location.href = "mailto:zerodayanubis@gmail.com";
};

/**
 * Click to open link in new tab (or same window)
 * @param linkLocation URI
 * @param newTab open in new tab, default true
 */
export const clickLink = (linkLocation: string, newTab: boolean = true) => {
  window.open(linkLocation, newTab ? "_blank" : "");
};

/**
 * Switch Page by:
 * - Resetting scroll position to top
 * - Replacing the URL without refreshing
 * - Setting the global state to new page
 * @param target URL path (Portfolio, Commissions, etc)
 * @param setPage React.useState setter passed in from component
 * @param hardUrl If true, clear subdomain and go direct to root/target
 */
export const switchPage = (
  target: string,
  setPage: (page: string) => void,
  hardUrl: boolean = false
) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  // Set URL to target without refresh
  if (target === "Home") {
    window.history.replaceState({}, "", "/");
  } else {
    if (hardUrl) {
      window.location.replace(
        "https://www.zerodayanubis.com/" + target.toLocaleLowerCase()
      );
    } else {
      window.history.replaceState({}, "", "/" + target.toLocaleLowerCase());
    }
  }
  setPage(target);
};

/**
 * On image load, show the base img and hide the blur img.
 * @param imgId unique className id of img
 */
export const loadImgHandler = (imgId: string) => {
  const baseImg = document.querySelector("img." + imgId) as any;
  if (baseImg) {
    baseImg.classList.remove("hidden");
  }
  const blurImg = document.querySelector("img." + imgId + "b") as any;
  if (blurImg) {
    blurImg.classList.add("hidden");
  }
};

/**
 * Using HTML id, scroll to a section 'smoothly'.
 * @param idOfSection HTML id of element (no # needed)
 */
export const scrollToSection = (idOfSection: string) => {
  document.getElementById(idOfSection)?.scrollIntoView({ behavior: "smooth" });
};

/**
 * Scroll to top of page 'smoothly'.
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
