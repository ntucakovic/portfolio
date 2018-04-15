import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./AppRouter";
import { AppProvider } from "./AppContext";
import RepositoryLink from "./components/RepositoryLink";
import Logo from "./components/Logo";
import "./App.css";
import ThemeCSSVariables from "./helpers/ThemeCSSVariables";
import { logo, repository } from "./helpers/data";
import ThemeSwitcher from "./components/ThemeSwitcher";

class App extends React.Component {
  static DARK_THEME = {
    variables: {
      "--background": "#232729",
      "--background-lighter": "#2b3033",
      "--background-darker": "#1f2325",
      "--selection-background-color": "rgba(0, 0, 0, 0.2)"
    }
  };

  static LIGHT_THEME = {
    variables: {
      "--background": "#f5f5f5",
      "--background-lighter": "#eee",
      "--background-darker": "#e1e1e1",
      "--selection-background-color": "rgba(255, 255, 255, 0.5)"
    }
  };

  constructor(props) {
    super(props);

    const defaultThemeKey = App.defaultThemeKey;

    this.state = {
      theme: App.getTheme(defaultThemeKey),
      activeTheme: defaultThemeKey
    };
  }

  static get defaultThemeKey() {
    const date = new Date();
    const isNightTime = date.getHours() < 6 || date.getHours() > 18;
    return isNightTime
      ? ThemeSwitcher.DARK_THEME_KEY
      : ThemeSwitcher.LIGHT_THEME_KEY;
  }

  static getTheme(themeKey) {
    return themeKey === ThemeSwitcher.LIGHT_THEME_KEY
      ? App.LIGHT_THEME
      : App.DARK_THEME;
  }

  changeActiveTheme = themeKey => {
    const theme = App.getTheme(themeKey);

    this.setState({
      theme: theme,
      activeTheme: themeKey
    });
  };

  render() {
    return (
      <AppProvider>
        <BrowserRouter>
          <ThemeCSSVariables variables={this.state.theme.variables}>
            <div className="app">
              <AppRouter />
              <ThemeSwitcher
                changeActiveTheme={this.changeActiveTheme}
                activeTheme={this.state.activeTheme}
              />
              <Logo {...logo} />
              <RepositoryLink {...repository} />
            </div>
          </ThemeCSSVariables>
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export default App;
