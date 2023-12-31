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

const hideSx = {
  ...{
    display: "none",
  },
};

/**
 * Switch style of component depending on theme and whether to hide or not.
 * @param theme "light"/"dark" value from global atom
 * @param darkSx the Sx object to use for dark mode
 * @param lightSx the Sx object to use for light mode
 * @param hide if true, simply hide the component
 * @returns 
 */
export const switchTheme = (
  theme: string,
  darkSx: object,
  lightSx: object,
  hide: boolean = false
) => {
  if (hide) {
    return hideSx;
  } else if (theme === "light") {
    return lightSx;
  } else {
    return darkSx;
  }
};

/**
 * Capitalize the first word of a string.  
 * @param str string (word or sentence)
 * @returns string with capitalized first word
 */
export const capitalize = (str: string) => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};
