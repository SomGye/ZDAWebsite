import { atom } from "recoil";

export const themeAtom = atom({
  key: "ThemeState",
  default: "light",
});

export const themes = ["dark", "light", "system"];
