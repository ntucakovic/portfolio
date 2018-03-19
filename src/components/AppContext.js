import React from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor () {
    super();
    this.screenMdMin = 576;
  }

  state = {
    pageTransformStyle: {
      transform: ''
    },
    theme: 'light'
  }

  componentDidMount () {
    this.setBodyClass();
  }

  handleMouseMove = (event) => {
    const pageTransformStyle = this.getPageTransformStyle(event);

    this.setState({
      pageTransformStyle
    });
  }

  setBodyClass () {
    const date = new Date();
    const isNightTime = (date.getHours() < 6) || (date.getHours() > 18);

    if (isNightTime) {
      this.setState({
        theme: 'dark'
      });
    }
  }

  getPageTransformStyle (event) {
    if (window.innerWidth < this.screenMdMin) {
      return `translate(0px, 0px) skew(0deg, 0deg)`;
    }

    let multiplier = 1;

    let mouseX = event.pageX;
    let mouseY = event.pageY;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let percentageX = mouseX / (windowWidth / 100);
    let percentageY = mouseY / (windowHeight / 100);

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
      transform: `translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
    };
  }

  render () {
    return (
      <AppContext.Provider value={{
        state: this.state,
        handleMouseMove: this.handleMouseMove
      }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.any
};

export { AppProvider, AppContext };
