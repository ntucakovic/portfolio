import React from "react";
import PropTypes from "prop-types";

class ThemeCSSVariables extends React.Component {
  componentDidMount() {
    this.updateCSSVariables(this.props.variables);
  }

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(this.props.variables) !==
      JSON.stringify(prevProps.variables)
    ) {
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
    return <div>{this.props.children}</div>;
  }
}

ThemeCSSVariables.propTypes = {
  children: PropTypes.any,
  variables: PropTypes.object
};

export default ThemeCSSVariables;
