import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Moon from '@/assets/moon.svg';
import Sun from '@/assets/sun.svg';
import * as ToogleStyle from './themeToggleButtonStyles'

let ThemeMoon = <img src={Moon} className={ToogleStyle.IconStyle} />;
let ThemeSun = <img src={Sun} className={ToogleStyle.IconStyle} />;

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button
      className={ToogleStyle.toggleButtonStyle}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? ThemeSun : ThemeMoon}
    </Button>
  );
};
