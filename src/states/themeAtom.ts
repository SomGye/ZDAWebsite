import { atom } from "recoil";

export const themeAtom = atom({
  key: "ThemeState",
  default: "light",
});

export const colorSchemeAtom = atom({
  key: "ColorSchemeState",
  default: "blue", // supported: "blue", "red"
});

export const colorSchemes = ["blue", "red"];
