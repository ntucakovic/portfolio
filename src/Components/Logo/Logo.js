import React, { Component } from 'react';
import logo from '../../assets/svg/logo.svg';
import Isvg from 'react-inlinesvg';

class Logo extends Component {
  constructor (props) {
    super(props);

    this.logoDescription = props.logoDescription;

    this.state = {
      logoWidth: props.logoWidth,
      logoHeight: props.logoHeight,
    }
  }

  render () {
    return (
      <div className='logo-wrapper'>
        <div className='logo' style={this.state.style}>
          <Isvg src={ logo }>
            <img src={ logo } alt={ this.logoDescription } />
          </Isvg>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.updateWindowStyles();
    window.addEventListener('resize', () => {
      this.updateWindowStyles()
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      this.updateWindowStyles()
    });
  }

  updateWindowStyles() {
    let vp = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'),
    }

    let newState = vp;
    // If it's a different orientation, update logo styles.
    if (this.state.orientation !== vp.orientation) {
      let logoStyles = Logo.getLogoStyles(vp);
      newState = Object.assign(newState, logoStyles)
    }

    this.setState(newState);
  }

  static getLogoStyles(vp) {
    return {
      style: {
        transform: `scale(${vp.orientation === 'landscape' ? '0.9' : 0.8})`
      }
    }
    // let width, height;
    // let isLandscape = window.width >= window.height;
    //
    // width = height = (isLandscape ?
    //   Math.max(window.width, window.height) * 0.8 :
    //   Math.min(window.width, window.height) * 0.9);
    //
    // let marginTop = isLandscape ?
    //   -(width - window.height) / 2 :
    //   (window.height - height) / 2;
    //
    // let marginLeft = (window.width - width) / 2;
    //
    // return {
    //   style: {
    //     display: 'block',
    //     width: width,
    //     height: height,
    //     marginTop: marginTop,
    //     marginLeft: marginLeft
    //   }
    // }
  }
}

Logo.defaultProps = {
  logoDescription: 'NT Logo'
};

export default Logo;