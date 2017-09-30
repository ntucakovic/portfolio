import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SloganIcon from '../SloganIcon/SloganIcon';

class Slogan extends Component {
  render () {
    return (
      <div>
        <header className='slogan'>
          <h1>Frontend && Web Developer</h1>
          <p>With whole lotta love for Web Design and UI/UX</p>
          <ul className='slogan__icons'>
            <li>
              <a href='mailto:nt@ntmedia.me' className='slogan__link' title={this.props.iconTitles.email}>
                <SloganIcon className='slogan__icon' iconName='envelope' />
                <span className='slogan__title'>{this.props.iconTitles.email}</span>
              </a>
            </li>
            <li>
              <a href='https://rs.linkedin.com/in/nikolatucakovic' target='_blank' rel='noopener noreferrer' className='slogan__link' title={this.props.iconTitles.linkedin}>
                <SloganIcon className='slogan__icon' iconName='linkedIn' />
                <span className='slogan__title'>{this.props.iconTitles.linkedin}</span>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/_ntucakovic' target='_blank' rel='noopener noreferrer' className='slogan__link' title={this.props.iconTitles.twitter}>
                <SloganIcon className='slogan__icon' iconName='twitter' />
                <span className='slogan__title'>{this.props.iconTitles.twitter}</span>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/nikola.tucakovic/' target='_blank' rel='noopener noreferrer' className='slogan__link' title={this.props.iconTitles.instagram}>
                <SloganIcon className='slogan__icon' iconName='instagram' />
                <span className='slogan__title'>{this.props.iconTitles.instagram}</span>
              </a>
            </li>
            <li>
              <a href='skype:ntmediasolutions?chat' className='slogan__link' title={this.props.iconTitles.skype}>
                <SloganIcon className='slogan__icon' iconName='skype' />
                <span className='slogan__title'>{this.props.iconTitles.skype}</span>
              </a>
            </li>
            <li>
              <a href='http://www.ntmedia.me/documents/cv.pdf' className='slogan__link' title={this.props.iconTitles.cv}>
                <SloganIcon className='slogan__icon' iconName='file' />
                <span className='slogan__title'>{this.props.iconTitles.cv}</span>
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

Slogan.propTypes = {
  iconTitles: PropTypes.object
};

Slogan.defaultProps = {
  iconTitles: {
    email: 'Send me an email!',
    linkedin: 'Linkedin Account',
    twitter: 'Twitter Account',
    instagram: 'Instagram Account',
    skype: 'Message me on Skype',
    cv: 'Download my resume'
  }
};

export default Slogan;
