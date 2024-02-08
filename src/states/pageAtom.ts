import { atom } from "recoil";

export const logoAtom = atom({
  key: "LogoState",
  default: false,
});

export const examplesAtom = atom({
  key: "ExamplesState",
  default: false,
});
