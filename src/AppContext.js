import PropTypes from "prop-types";
import React from "react";
import actions from "./actions";

const reducer = (state, action) => {
  return new Promise((resolve, reject) => {
    const { callback } = actions[action.type] || {};

    if (typeof callback === "function") {
      callback(action, state)
        .then(stateUpdates => resolve(stateUpdates))
        .catch(e => reject(e));
    }
  });
};

const AppContext = React.createContext();

class AppProvider extends React.Component {
  static APP_DEFAULT_STATE = {
    transformStyles: {
      transform: ""
    }
  };

  state = {
    ...AppProvider.APP_DEFAULT_STATE,

    dispatch: action => {
      reducer(this.state, action).then(stateUpdates => {
        this.setState({
          ...this.state,
          ...stateUpdates
        });
      });
    }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.any
};

export { AppProvider, AppContext };
