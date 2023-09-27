import * as React from "react";
import { Switch } from "@mui/joy";
import DarkMode from "@mui/icons-material/DarkMode";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../states/ThemeAtom";

const ThemeToggle = () => {
  const [, setMode] = useRecoilState(themeAtom);
  const mode = useRecoilValue(themeAtom);
  const [checked, setChecked] = React.useState<boolean>(true);
  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  React.useEffect(() => {
    toggleTheme();
    console.log(mode);
  }, [checked]);
  return (
    <>
      <Switch
        slotProps={{
          input: { "aria-label": "Dark Mode" },
          thumb: {
            children: <DarkMode />,
          },
        }}
        sx={{
          "--Switch-thumbSize": "20px",
        }}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />
    </>
  );
};

export default ThemeToggle;
