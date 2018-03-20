import React from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';

const Logo = (props) => (
  <div className='logo-wrapper'>
    <div className='logo'>
      <Isvg src={props.logo}>
        <img src={props.logo} alt={props.description} />
      </Isvg>
    </div>
  </div>
);

Logo.propTypes = {
  logo: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired
};

export default Logo;
