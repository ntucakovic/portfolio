import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import envelopeIcon from '../../assets/svg/envelope.svg';
import fileIcon from '../../assets/svg/file-code.svg';
import instagramIcon from '../../assets/svg/instagram.svg';
import linkedinIcon from '../../assets/svg/linkedin-in.svg';
import skypeIcon from '../../assets/svg/skype.svg';
import twitterIcon from '../../assets/svg/twitter.svg';

class SloganIcon extends Component {
  static getIcon (iconName) {
    let icons = {
      envelope: envelopeIcon,
      file: fileIcon,
      instagram: instagramIcon,
      linkedIn: linkedinIcon,
      skype: skypeIcon,
      twitter: twitterIcon
    };

    if (typeof icons[iconName] !== 'undefined') {
      return icons[iconName];
    } else {
      return null;
    }
  }

  render () {
    let icon = SloganIcon.getIcon(this.props.iconName);

    return (
      <span className={this.props.className}>
        <Isvg src={icon} />
      </span>
    );
  }
}

SloganIcon.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.string
};

SloganIcon.defaultProps = {
  iconName: '',
  className: ''
};

export default SloganIcon;
