import classNames from "classnames";
import React from "react";
import Isvg from "react-inlinesvg";
import { iconMoon, iconSun } from "../icons";
import { themeKeys } from "../hooks";

const ThemeSwitcher = ({ activeTheme, changeActiveTheme }) => {
  const { darkThemeKey, lightThemeKey } = themeKeys;
  const handleClick = (themeKey) => () => changeActiveTheme(themeKey);

  const darkActive = activeTheme === darkThemeKey;

  const darkSwitchClassName = classNames(
    "theme-switcher__button",
    "theme-switcher__button--dark",
    {
      "is-active": darkActive,
    }
  );

  const lightSwitchClassName = classNames(
    "theme-switcher__button",
    "theme-switcher__button--dark",
    {
      "is-active": !darkActive,
    }
  );

  return (
    <div className="theme-switcher">
      <button
        className={darkSwitchClassName}
        onClick={handleClick(darkThemeKey)}
        type="button"
      >
        <Isvg src={iconMoon} className="theme-switcher__icon" />
        <span className="sr-only">Use dark theme</span>
      </button>
      <button
        className={lightSwitchClassName}
        onClick={handleClick(lightThemeKey)}
        type="button"
      >
        <Isvg src={iconSun} className="theme-switcher__icon" />
        <span className="sr-only">Use light theme</span>
      </button>
    </div>
  );
};

export { ThemeSwitcher };
