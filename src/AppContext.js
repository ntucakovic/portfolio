import React from "react";
import PropTypes from "prop-types";

import AppTransform from "./helpers/AppTransform";
import { logo, hobbies, repository, links } from "./helpers/data";

const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    appTransformStyle: {
      transform: ""
    },
    theme: "light"
  };

  componentDidMount() {
    this.setTheme();
  }

  handleMouseMove = event => {
    const appTransformStyle = AppTransform.getStyles(
      AppTransform.EVENT_MOUSE_MOVE
    )(event);

    this.setState({
      appTransformStyle
    });
  };

  setTheme() {
    const date = new Date();
    const isNightTime = date.getHours() < 6 || date.getHours() > 18;

    if (isNightTime) {
      this.setState({
        theme: "dark"
      });
    }
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          theme: this.state.theme,
          appTransformStyle: this.state.appTransformStyle,
          logo,
          repository,
          hobbies,
          links,
          handleMouseMove: this.handleMouseMove
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.any
};

export { AppProvider, AppContext };
