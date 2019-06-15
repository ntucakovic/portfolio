import React from "react";
import actions from "./actions";

const reducer = (state, action) => {
  const { callback } = actions[action.type] || {};

  if (typeof callback === "function") {
    return callback(action, state);
  }

  throw new Error(`Unhandled action type: ${action.type}`);
};

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

function AppProvider({ children }) {
  const [state, setState] = React.useReducer(reducer, {
    transformStyles: {
      transform: ""
    }
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={setState}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);

  if (context === undefined) {
    throw new Error("useAppState must be used within an AppProvider");
  }

  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error("useAppState must be used within an AppProvider");
  }

  return context;
}

export { AppProvider, useAppState, useAppDispatch };
