import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import { AppProvider } from "./AppContext";
import RepositoryLink from "./components/RepositoryLink";
import Logo from "./components/Logo";
import "./App.css";
import ThemeCSSVariables from "./helpers/ThemeCSSVariables";
import { logo, repository } from "./helpers/data";

class App extends React.Component {
  static LIGHT_THEME = {
    className: "light",
    variables: {
      background: "#f5f5f5",
      backgroundAccent: "#2b3033",
      selectionColor: "rgba(0, 0, 0, 0.2)"
    }
  };

  static DARK_THEME = {
    className: "dark",
    variables: {
      background: "#232729",
      backgroundAccent: "#eee",
      selectionColor: "rgba(255, 255, 255, 0.5)"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      theme: { ...App.theme }
    };
  }

  static get theme() {
    const date = new Date();
    const isNightTime = date.getHours() < 6 || date.getHours() > 18;

    return isNightTime ? App.DARK_THEME : App.LIGHT_THEME;
  }

  render() {
    return (
      <AppProvider>
        <BrowserRouter>
          <ThemeCSSVariables variables={this.state.theme.variables}>
            <div className={this.state.theme.className}>
              <div className="app">
                <Router />
                <Logo {...logo} />
                <RepositoryLink {...repository} />
              </div>
            </div>
          </ThemeCSSVariables>
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export default App;
