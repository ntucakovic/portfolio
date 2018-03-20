import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';

class Logo extends Component {
  render () {
    return (
      <div className='logo-wrapper'>
        <div className='logo'>
          <Isvg src={this.props.logo}>
            <img src={this.props.logo} alt={this.props.description} />
          </Isvg>
        </div>
      </div>
    );
  }
}

Logo.propTypes = {
  logo: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired
};

export default Logo;
