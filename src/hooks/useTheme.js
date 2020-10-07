import { isDarkModeEnabled } from "../modules/matchMedia";
import { useState } from "react";
import { useSessionStorage } from "./useSessionStorage";
import { theme } from "../data";

const darkThemeKey = "DARK_THEME";
const lightThemeKey = "LIGHT_THEME";

const themeKeys = {
  darkThemeKey,
  lightThemeKey,
};

function getThemeKeyFallback() {
  const date = new Date();
  const hours = date.getHours();
  const isNightTime = hours < 6 || hours > 18;

  return isNightTime ? darkThemeKey : lightThemeKey;
}

function getPreferredThemeKey() {
  // Attempt to fetch Dark Mode preference.
  const darkMode = isDarkModeEnabled();
  if (darkMode !== null) {
    return darkMode ? darkThemeKey : lightThemeKey;
  }

  // Use fallback logic by checking user's time.
  return getThemeKeyFallback();
}

function useTheme() {
  let preferredThemeKey = getPreferredThemeKey();
  const [themeKey, setThemeKey] = useSessionStorage(
    "APP_THEME",
    preferredThemeKey
  );
  const [themeVariables, setThemeVariables] = useState(theme[themeKey]);

  const setTheme = (selectedTheme) => {
    try {
      setThemeKey(selectedTheme);
      setThemeVariables(theme[selectedTheme]);
    } catch (error) {
      console.log(error);
    }
  };

  return [themeKey, themeVariables, setTheme];
}

export { useTheme, themeKeys };
