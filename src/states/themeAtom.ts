import { atom } from "recoil";

export const themeAtom = atom({
  key: "ThemeState",
  default: "light", // supported: "dark", "light", "system"
});

export const colorSchemeAtom = atom({
  key: "ColorSchemeState",
  default: "blue", // supported: "blue", "red"
});

export const themes = ["dark", "light", "system"];
export const colorSchemes = ["blue", "red"];
