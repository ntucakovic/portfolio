const SCREEN_MD = 576;
const EVENT_MOUSE_MOVE = "EVENT_MOUSE_MOVE";
const DEFAULT_TRANSFORMATION = {
  transform: "translate(0px, 0px) skew(0deg, 0deg)"
};

function onMouseMove({ event }) {
  if (window.innerWidth < SCREEN_MD) {
    return {
      transformStyles: DEFAULT_TRANSFORMATION
    };
  }

  const { pageX, pageY } = event;
  const { x, y } = normalizeMouseMoveVariables(pageX, pageY);
  const transformations = getTransformations(x, y);

  return {
    transformStyles: normalizeStyles(transformations)
  };
}

function normalizeMouseMoveVariables(pageX, pageY) {
  return {
    x: pageX / (window.innerWidth / 100),
    y: pageY / (window.innerHeight / 100)
  };
}

// @todo Finish implementation.
function getStyles(eventType) {
  if (eventType === EVENT_MOUSE_MOVE) {
    return event => {
      return onMouseMove(event);
    };
  }
}

function normalizeStyles({
  translateX = 0,
  translateY = 0,
  skewX = 0,
  skewY = 0
}) {
  return {
    transform: `translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
  };
}

function getTransformations(percentageX, percentageY) {
  const modifier = 1;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const leftSideOfScreen = percentageX < 50;
  const topSideOfScreen = percentageY < 50;

  const fromCenterX = (percentageX - 50) / 100;
  const fromCenterY = (percentageY - 50) / 100;

  // @todo, figure out this magic written back in 2014 and improve it.
  const translateX =
    (!leftSideOfScreen ? -1 : 1) *
    Math.abs(fromCenterX * (windowWidth * 0.03)) *
    modifier;
  const translateY =
    (!topSideOfScreen ? -1 : 1) *
    Math.abs(fromCenterY * (windowHeight * 0.03)) *
    modifier;

  const skewX = (!leftSideOfScreen ? -1 : 1) * fromCenterX * 1.5 * modifier;
  const skewY = (!topSideOfScreen ? -1 : 1) * fromCenterY * 1.5 * modifier;

  return {
    translateX,
    translateY,
    skewX,
    skewY
  };
}

export { onMouseMove };
export default getStyles;
