import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/app.scss";
import { AppProvider } from "./AppContext";
import AppRouter from "./AppRouter";
import Logo from "./components/Logo";
import RepositoryLink from "./components/RepositoryLink";
import ThemeCSSVariables from "./components/ThemeCSSVariables";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { logo, repository } from "./constants/data";
import useTheme from "./hooks/useTheme";

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
