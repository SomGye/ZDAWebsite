import * as React from "react";
import ZDAButton from "./ZDAButton";
import { clickLink } from "../helpers";

const PagePromos = () => {
  return (
    <>
      <div className="promos-container flex flex-col justify-center items-center gap-6 my-6 sm:my-8 select-none">
        {/* Print Shop Promo */}
        <div className="promo flex flex-col justify-center items-center w-auto xxs:w-80 xs:w-[21rem] md:w-[22rem] xl:w-[23rem] 4k:w-96 h-full mx-4 p-8 gap-4 rounded-lg bg-gray-200/50 dark:bg-zdaBG-lessDarkCard/70">
          <span className="promo-title text-lg font-medium tracking-wide">
            Print Shop
          </span>
          <span className="promo-description tracking-tight text-gray-600 dark:text-gray-300/95 text-balance">
            Get art prints, posters, stickers, cards and more:
          </span>
          <ZDAButton
            clickCallback={() => clickLink("https://tinyurl.com/ZDAPrints")}
            textContent="Print Shop"
            tight
            variant="mobile-neutral"
          />
          <ZDAButton
            clickCallback={() => clickLink("https://tinyurl.com/ZDAPrints")}
            textContent="Print Shop"
            tight
            variant="neutral"
          />
        </div>
        {/* Downloads Promo */}
        <div className="promo flex flex-col justify-center items-center w-auto xxs:w-80 xs:w-[21rem] md:w-[22rem] xl:w-[23rem] 4k:w-96 h-full mx-4 p-8 gap-4 rounded-lg bg-gray-200/50 dark:bg-zdaBG-lessDarkCard/70">
          <span className="promo-title text-lg font-medium tracking-wide">
            Downloads
          </span>
          <p className="promo-description tracking-tight text-gray-600 dark:text-gray-300/95 text-balance">
            Download high-quality versions of my art for free:
          </p>
          <ZDAButton
            clickCallback={() => clickLink("https://ko-fi.com/zerodayanubis")}
            textContent="Ko-fi"
            tight
            variant="mobile-neutral"
          />
          <ZDAButton
            clickCallback={() => clickLink("https://ko-fi.com/zerodayanubis")}
            textContent="Ko-fi"
            tight
            variant="neutral"
          />
        </div>
        {/* Payment Methods Promo */}
        <div className="promo flex flex-col justify-center items-center w-auto xxs:w-80 xs:w-[21rem] md:w-[22rem] xl:w-[23rem] 4k:w-96 h-full mx-4 p-8 gap-4 rounded-lg bg-gray-200/50 dark:bg-zdaBG-lessDarkCard/70">
          <span className="promo-title text-lg font-medium tracking-wide">
            Support
          </span>
          <p className="promo-description tracking-tight text-gray-600 dark:text-gray-300/95 text-balance">
            If you want to directly support me or pay for commissions:
          </p>
          <div className="promo-button-container flex flex-col justify-center items-center gap-1">
            <ZDAButton
              clickCallback={() => clickLink("https://paypal.me/ZeroDayAnubis")}
              textContent="PayPal"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink("https://paypal.me/ZeroDayAnubis")}
              textContent="PayPal"
              tight
              variant="neutral"
            />
            <ZDAButton
              clickCallback={() =>
                clickLink("https://account.venmo.com/u/somgye")
              }
              textContent="Venmo"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() =>
                clickLink("https://account.venmo.com/u/somgye")
              }
              textContent="Venmo"
              tight
              variant="neutral"
            />
          </div>
        </div>
        {/* Socmeds Promo */}
        <div className="promo flex flex-col justify-center items-center w-auto xxs:w-80 xs:w-[21rem] md:w-[22rem] xl:w-[23rem] 4k:w-96 h-full mx-4 p-8 gap-4 rounded-lg bg-gray-200/50 dark:bg-zdaBG-lessDarkCard/70">
          <span className="promo-title text-lg font-medium tracking-wide">
            Social Media
          </span>
          <p className="promo-description tracking-tight text-gray-600 dark:text-gray-300/95 text-balance">
            Visit my social media for the latest updates and art:
          </p>
          <div className="promo-button-container flex flex-col justify-center items-center gap-1">
            <ZDAButton
              clickCallback={() =>
                clickLink("https://bsky.app/profile/zerodayanubis.com")
              }
              textContent="Bluesky"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() =>
                clickLink("https://bsky.app/profile/zerodayanubis.com")
              }
              textContent="Bluesky"
              tight
              variant="neutral"
            />
            <ZDAButton
              clickCallback={() =>
                clickLink(
                  "https://instagram.com/zerodayanubis?igshid=OGQ5ZDc2ODk2ZA=="
                )
              }
              textContent="Instagram"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() =>
                clickLink(
                  "https://instagram.com/zerodayanubis?igshid=OGQ5ZDc2ODk2ZA=="
                )
              }
              textContent="Instagram"
              tight
              variant="neutral"
            />
            <ZDAButton
              clickCallback={() =>
                clickLink("https://www.threads.net/@zerodayanubis")
              }
              textContent="Threads"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() =>
                clickLink("https://www.threads.net/@zerodayanubis")
              }
              textContent="Threads"
              tight
              variant="neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink("https://tinyurl.com/ZDACara")}
              textContent="Cara"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink("https://tinyurl.com/ZDACara")}
              textContent="Cara"
              tight
              variant="neutral"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PagePromos;
