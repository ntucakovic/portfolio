import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./AppContext";
import AppRouter from "./AppRouter";
import Logo from "./components/Logo";
import RepositoryLink from "./components/RepositoryLink";
import ThemeCSSVariables from "./components/ThemeCSSVariables";
import ThemeSwitcher from "./components/ThemeSwitcher";
import * as theme from "./constants/theme";
import { logo, repository } from "./helpers/data";

class App extends React.Component {
  static THEME_SESSION_STORAGE_KEY = "APP_THEME";

  state = {
    theme: App.getThemeVariables(ThemeSwitcher.LIGHT_THEME_KEY),
    activeTheme: ThemeSwitcher.LIGHT_THEME_KEY
  };

  componentDidMount() {
    App.getThemeKey().then(themeKey => {
      this.setState({
        theme: App.getThemeVariables(themeKey),
        activeTheme: themeKey
      });
    });
  }

  static getThemeKey() {
    function getDefaultThemeKey() {
      const date = new Date();
      const isNightTime = date.getHours() < 6 || date.getHours() > 18;
      return isNightTime
        ? ThemeSwitcher.DARK_THEME_KEY
        : ThemeSwitcher.LIGHT_THEME_KEY;
    }

    return new Promise(resolve => {
      if (typeof window.sessionStorage !== "undefined") {
        let themeKey = sessionStorage.getItem(App.THEME_SESSION_STORAGE_KEY);
        if (themeKey) {
          resolve(themeKey);

          return;
        }

        themeKey = getDefaultThemeKey();
        resolve(themeKey);
        sessionStorage.setItem(App.THEME_SESSION_STORAGE_KEY, themeKey);
      }

      resolve(getDefaultThemeKey());
    });
  }

  static getThemeVariables(themeKey) {
    return themeKey === ThemeSwitcher.LIGHT_THEME_KEY
      ? theme.LIGHT_THEME_VARIABLES
      : theme.DARK_THEME_VARIABLES;
  }

  changeActiveTheme = themeKey => {
    const theme = App.getThemeVariables(themeKey);

    this.setState(
      {
        theme: theme,
        activeTheme: themeKey
      },
      () => {
        if (typeof window.sessionStorage !== "undefined") {
          sessionStorage.setItem(App.THEME_SESSION_STORAGE_KEY, themeKey);
        }
      }
    );
  };

  render() {
    return (
      <AppProvider>
        <ThemeCSSVariables variables={this.state.theme.variables} />

        <BrowserRouter>
          <div className="app">
            <AppRouter />
            <ThemeSwitcher
              changeActiveTheme={this.changeActiveTheme}
              activeTheme={this.state.activeTheme}
            />
            <Logo {...logo} />
            <RepositoryLink {...repository} />
          </div>
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export default App;
