import React from "react";
import * as data from "../constants/data";

export const APP_DATA_PROPS = {
  logo: "logo",
  hobbies: "hobbies",
  links: "links",
  repository: "repository"
};

export default function withData(WrappedComponent, properties) {
  return class extends React.Component {
    render() {
      let exposedProps = {};
      properties.forEach(propKey => {
        if (typeof data[propKey] !== "undefined") {
          exposedProps[propKey] = data[propKey];
        }
      });

      return <WrappedComponent {...this.props} {...exposedProps} />;
    }
  };
}
