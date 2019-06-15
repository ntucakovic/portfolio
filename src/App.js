import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/app.scss";
import { AppProvider } from "./AppContext";
import AppRouter from "./AppRouter";
import { logo, repository } from "./data";
import { useTheme } from "./hooks";
import {
  Logo,
  RepositoryLink,
  ThemeCSSVariables,
  ThemeSwitcher
} from "./components";

const App = () => {
  const [theme, themeVariables, setTheme] = useTheme();

  return (
    <AppProvider>
      <ThemeCSSVariables variables={themeVariables} />

      <BrowserRouter>
        <div className="app">
          <AppRouter />
          <ThemeSwitcher
            changeActiveTheme={value => setTheme(value)}
            activeTheme={theme}
          />
          <Logo {...logo} />
          <RepositoryLink {...repository} />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
