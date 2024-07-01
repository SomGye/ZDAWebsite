import { atom } from "recoil";

export const themingAtom = atom({
  key: "ThemingState",
  default: "light", //"system",
});
