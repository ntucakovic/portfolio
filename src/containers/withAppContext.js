import React from "react";
import { AppContext } from "../AppContext";

export const APP_CONTEXT_PROPS = {
  dispatch: "dispatch",
  transformStyles: "transformStyles"
};

export default function withAppContext(WrappedComponent, properties) {
  // @note Parent HOCs can redefine properties they require, so we should avoid making duplicates.
  const uniqueProps = properties.filter((v, i, a) => a.indexOf(v) === i);

  return class extends React.Component {
    render() {
      return (
        <AppContext.Consumer>
          {value => {
            let exposedProps = {};
            uniqueProps.forEach(propKey => {
              if (typeof value[propKey] !== "undefined") {
                exposedProps[propKey] = value[propKey];
              }
            });
            return <WrappedComponent {...this.props} {...exposedProps} />;
          }}
        </AppContext.Consumer>
      );
    }
  };
}
