import React from "react";
import PropTypes from "prop-types";

class ThemeCSSVariables extends React.Component {
  componentDidMount() {
    this.updateCSSVariables(this.props.variables);
  }

  componentDidUpdate(prevProps) {
    if (this.props.variables !== prevProps.variables) {
      this.updateCSSVariables(this.props.variables);
    }
  }

  updateCSSVariables(variables) {
    Object.keys(variables).forEach(prop => {
      const value = variables[prop];
      document.documentElement.style.setProperty(prop, value);
    });
  }
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

ThemeCSSVariables.propTypes = {
  children: PropTypes.any,
  variables: PropTypes.object
};

export default ThemeCSSVariables;
