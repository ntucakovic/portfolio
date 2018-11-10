import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Isvg from "react-inlinesvg";
import { moon, sun } from "../icons";

class ThemeSwitcher extends React.Component {
  static DARK_THEME_KEY = "DARK_THEME";
  static LIGHT_THEME_KEY = "LIGHT THEME";

  handleClick = themeKey => {
    return () => {
      const { changeActiveTheme } = this.props;
      changeActiveTheme(themeKey);
    };
  };

  render = () => {
    const darkActive = this.props.activeTheme === ThemeSwitcher.DARK_THEME_KEY;

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
          onClick={this.handleClick(ThemeSwitcher.DARK_THEME_KEY)}
        >
          <Isvg src={moon} className="theme-switcher__icon" />
          <span className="sr-only">Use dark theme</span>
        </button>
        <button
          className={lightSwitchClassName}
          onClick={this.handleClick(ThemeSwitcher.LIGHT_THEME_KEY)}
        >
          <Isvg src={sun} className="theme-switcher__icon" />
          <span className="sr-only">Use light theme</span>
        </button>
      </div>
    );
  };
}

ThemeSwitcher.propTypes = {
  activeTheme: PropTypes.oneOf([
    ThemeSwitcher.DARK_THEME_KEY,
    ThemeSwitcher.LIGHT_THEME_KEY
  ]),
  changeActiveTheme: PropTypes.func
};

export default ThemeSwitcher;
