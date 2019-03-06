function matchMedia(mediaQuery) {
  try {
    const mediaQueryList = window.matchMedia(mediaQuery);

    if (mediaQueryList.media !== mediaQuery) {
      // Browser doesn't support tested media query.
      return null;
    }

    return mediaQueryList.matches;
  } catch {
    // Browser doesn't support matchMedia.
    return null;
  }
}

function isDarkMode() {
  const mediaQuery = "(prefers-color-scheme: dark)";
  return matchMedia(mediaQuery);
}

export { isDarkMode };
export default matchMedia;
