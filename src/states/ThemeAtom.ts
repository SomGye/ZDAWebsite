import { atom } from "recoil";

export const themeAtom = atom({
  key: "ThemeState",
  default: "dark",
}); // TODO: support for "system"
