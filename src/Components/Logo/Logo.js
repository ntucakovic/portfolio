import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/svg/logo.svg';
import Isvg from 'react-inlinesvg';

class Logo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      style: {},
      cursor: {
        x: 0,
        y: 0
      }
    };

    this.logoDescription = props.logoDescription;
  }

  render () {
    return (
      <div className='logo-wrapper'>
        <div className='logo' style={this.state.style}>
          <Isvg src={logo}>
            <img src={logo} alt={this.logoDescription} />
          </Isvg>
        </div>
      </div>
    );
  }

  componentDidMount () {
    this.updateLogoStyles();
    window.addEventListener('resize', () => {
      this.updateLogoStyles();
    });
  }

  componentWillUnmount () {
    window.removeEventListener('resize', () => {
      this.updateLogoStyles();
    });
  }

  updateLogoStyles () {
    let vp = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')
    };

    let newState = vp;

    // If it's a different orientation, update logo styles.
    if (this.state.orientation !== vp.orientation) {
      let logoStyles = Logo.getLogoStyles(vp);
      newState = Object.assign(newState, logoStyles);
    }

    this.setState(newState);
  }

  static getLogoStyles (vp) {
    return {
      style: {
        transform: `scale(${vp.orientation === 'landscape' ? 0.9 : 0.8})`
      }
    };
  }
}

Logo.propTypes = {
  logoDescription: PropTypes.string
};

Logo.defaultProps = {
  logoDescription: 'NT Logo'
};

export default Logo;
