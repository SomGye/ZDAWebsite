import { atom } from "recoil";

export const pageAtom = atom({
  key: "PageState",
  default: "Home", // ["Home, "Portfolio", "Commissions"]
});
