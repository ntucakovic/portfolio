class AppTransform {
  static SCREEN_MD = 576;
  static EVENT_MOUSE_MOVE = 'EVENT_MOUSE_MOVE';
  static DEFAULT_TRANSFORMATION = {
    transform: 'translate(0px, 0px) skew(0deg, 0deg)'
  }

  static onMouseMove = (event) => {
    if (window.innerWidth < AppTransform.SCREEN_MD) {
      return AppTransform.DEFAULT_TRANSFORMATION;
    }

    const { pageX, pageY } = event;
    const { x, y } = AppTransform.normalizeMouseMoveVariables(pageX, pageY);
    const transformations = AppTransform.getTransformations(x, y);

    return AppTransform.normalizeStyles(transformations);
  }

  static normalizeMouseMoveVariables (pageX, pageY) {
    return {
      x: pageX / (window.innerWidth / 100),
      y: pageY / (window.innerHeight / 100)
    };
  }

  static getStyles = (eventType) => {
    if (eventType === AppTransform.EVENT_MOUSE_MOVE) {
      return (event) => {
        return AppTransform.onMouseMove(event);
      };
    }
  }

  static normalizeStyles ({ translateX, translateY, skewX, skewY }) {
    return {
      transform: `translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
    };
  }

  static getTransformations = (percentageX, percentageY) => {
    let multiplier = 1;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let leftSideOfScreen = percentageX < 50;
    let topSideOfScreen = percentageY < 50;

    // @todo, figure out this magic written back in 2014 and improve it.
    let translateX = (
      leftSideOfScreen
        ? ((50 - percentageX) / 100) * (windowWidth * multiplier * 0.03)
        : -((percentageX - 50) / 100) * (windowWidth * multiplier * 0.03)
    );
    let translateY = (
      topSideOfScreen
        ? ((50 - percentageY) / 100) * (windowHeight * multiplier * 0.03)
        : -((percentageY - 50) / 100) * (windowHeight * multiplier * 0.03)
    );

    let skewX = ((percentageX - 50) / 100) * 1.5 * multiplier;
    let skewY = ((percentageY - 50) / 100) * 1.5 * multiplier;

    return {
      translateX, translateY, skewX, skewY
    };
  }
}

export default AppTransform;
