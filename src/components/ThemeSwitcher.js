import classNames from "classnames";
import React from "react";
import Isvg from "react-inlinesvg";
import { moon, sun } from "../icons";
import { darkThemeKey, lightThemeKey } from "../hooks/useTheme";

const ThemeSwitcher = ({ activeTheme, changeActiveTheme }) => {
  const handleClick = themeKey => () => changeActiveTheme(themeKey);

  const darkActive = activeTheme === darkThemeKey;

  const darkSwitchClassName = classNames(
    "theme-switcher__button",
    "theme-switcher__button--dark",
    {
      "is-active": darkActive
    }
  );

  const lightSwitchClassName = classNames(
    "theme-switcher__button",
    "theme-switcher__button--dark",
    {
      "is-active": !darkActive
    }
  );

  return (
    <div className="theme-switcher">
      <button
        className={darkSwitchClassName}
        onClick={handleClick(darkThemeKey)}
      >
        <Isvg src={moon} className="theme-switcher__icon" />
        <span className="sr-only">Use dark theme</span>
      </button>
      <button
        className={lightSwitchClassName}
        onClick={handleClick(lightThemeKey)}
      >
        <Isvg src={sun} className="theme-switcher__icon" />
        <span className="sr-only">Use light theme</span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
