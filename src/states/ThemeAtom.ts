import { atom } from "recoil";

export const themeAtom = atom({
  key: "ThemeState",
  default: "dark",
});
