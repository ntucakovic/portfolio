import React from "react";
import PropTypes from "prop-types";
import Isvg from "react-inlinesvg";
import { moon, sun } from "../icons";

class ThemeSwitcher extends React.Component {
  static DARK_THEME_KEY = 0;
  static LIGHT_THEME_KEY = 1;

  handleClick = themeKey => {
    return () => {
      const { changeActiveTheme } = this.props;
      changeActiveTheme(themeKey);
    };
  };

  render = () => {
    const darkActive = this.props.activeTheme === ThemeSwitcher.DARK_THEME_KEY;

    return (
      <div className="theme-switcher">
        <button
          className={`theme-switcher__button theme-switcher__button--dark${
            darkActive ? " is-active" : ""
          }`}
          onClick={this.handleClick(ThemeSwitcher.DARK_THEME_KEY)}
        >
          <Isvg src={moon} className="theme-switcher__icon" />

          <span className="sr-only">Change site to dark theme.</span>
        </button>
        <button
          className={`theme-switcher__button theme-switcher__button--light${
            !darkActive ? " is-active" : ""
          }`}
          onClick={this.handleClick(ThemeSwitcher.LIGHT_THEME_KEY)}
        >
          <Isvg src={sun} className="theme-switcher__icon" />

          <span className="sr-only">Change site to light theme.</span>
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
