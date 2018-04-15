import React from "react";
import PropTypes from "prop-types";
import Isvg from "react-inlinesvg";
import { moon, sun } from "../icons";

class ThemeSwitcher extends React.Component {
  static DARK_THEME_KEY = 0;
  static LIGHT_THEME_KEY = 1;

  render = () => {
    const darkActive = this.props.activeTheme === ThemeSwitcher.DARK_THEME_KEY;

    return (
      <div className="theme-switcher">
        <label
          className={`theme-switcher__label theme-switcher__label--dark${
            darkActive ? " is-active" : ""
          }`}
        >
          <Isvg src={moon} className="theme-switcher__icon" />

          <input
            type="radio"
            name="theme"
            value={ThemeSwitcher.DARK_THEME_KEY}
            defaultChecked={
              this.props.activeTheme === ThemeSwitcher.DARK_THEME_KEY
            }
            onChange={this.props.onChange}
          />
        </label>
        <label
          className={`theme-switcher__label theme-switcher__label--light${
            !darkActive ? " is-active" : ""
          }`}
        >
          <Isvg src={sun} className="theme-switcher__icon" />

          <input
            type="radio"
            name="theme"
            value={ThemeSwitcher.LIGHT_THEME_KEY}
            defaultChecked={
              this.props.activeTheme === ThemeSwitcher.LIGHT_THEME_KEY
            }
            onChange={this.props.onChange}
          />
        </label>
      </div>
    );
  };
}

ThemeSwitcher.propTypes = {
  activeTheme: PropTypes.oneOf([
    ThemeSwitcher.DARK_THEME_KEY,
    ThemeSwitcher.LIGHT_THEME_KEY
  ]),
  onChange: PropTypes.func
};

export default ThemeSwitcher;
