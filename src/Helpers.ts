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
