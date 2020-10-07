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

function isDarkModeEnabled() {
  const mediaQuery = "(prefers-color-scheme: dark)";
  return matchMedia(mediaQuery);
}

export { isDarkModeEnabled };
export default matchMedia;
