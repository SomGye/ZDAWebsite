// GLOBAL HELPER FUNCTIONS

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
 */
export const switchPage = (target: string, setPage: (page: string) => void) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  // Set URL to target without refresh
  if (target === "Home") {
    window.history.replaceState({}, "", "/");
  } else {
    window.history.replaceState({}, "", "/" + target.toLocaleLowerCase());
  }
  setPage(target);
};
