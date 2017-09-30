import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SloganIcon from '../SloganIcon';

class SloganIconLink extends Component {
  render () {
    return (
      <a className='slogan__link' {...this.props}>
        <SloganIcon className='slogan__icon' iconName={this.props.iconName} />
        <span className='slogan__title'>{this.props.title}</span>
      </a>
    );
  }
}

SloganIconLink.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string
};

export default SloganIconLink;
