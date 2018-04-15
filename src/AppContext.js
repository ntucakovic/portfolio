import React from "react";
import PropTypes from "prop-types";

import AppTransform from "./helpers/AppTransform";

const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    appTransformStyle: {
      transform: ""
    },
    theme: "light"
  };

  handleMouseMove = event => {
    const appTransformStyle = AppTransform.getStyles(
      AppTransform.EVENT_MOUSE_MOVE
    )(event);

    this.setState({
      appTransformStyle
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          appTransformStyle: this.state.appTransformStyle,
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
