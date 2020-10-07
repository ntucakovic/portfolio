import { useEffect } from "react";

const updateCSSVariables = (variables) => {
  Object.keys(variables).forEach((prop) => {
    const value = variables[prop];
    document.documentElement.style.setProperty(prop, value);
  });
};

const ThemeCSSVariables = ({ variables }) => {
  useEffect(() => {
    updateCSSVariables(variables);
  }, [variables]);

  return null;
};

export { ThemeCSSVariables };
