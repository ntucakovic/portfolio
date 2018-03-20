import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/svg/logo.svg';
import Isvg from 'react-inlinesvg';

class Logo extends Component {
  render () {
    return (
      <div className='logo-wrapper'>
        <div className='logo'>
          <Isvg src={logo}>
            <img src={logo} alt={this.props.logoDescription} />
          </Isvg>
        </div>
      </div>
    );
  }
}

Logo.propTypes = {
  logoDescription: PropTypes.string.isRequired
};

export default Logo;
