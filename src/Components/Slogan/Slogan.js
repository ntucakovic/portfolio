import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SloganIconLink from '../SloganIconLink/SloganIconLink';

class Slogan extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hasActiveLinkClassName: ''
    };

    this.hasActiveLinkClassName = 'is-active';

    this.stateChangeDelay = 0;
    this.stateChangeTimeout = null;

    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange (e) {
    if (this.stateChangeTimeout) {
      clearTimeout(this.stateChangeTimeout);
    }

    this.stateChangeTimeout = setTimeout(() => {
      this.setState({
        hasActiveLinkClassName: (e.state.isActive ? this.hasActiveLinkClassName : '')
      });
    }, this.stateChangeDelay);
  }

  render () {
    return (
      <div>
        <header className='slogan'>
          <h1><span className='text-emphasis'>Frontend</span> && <br className='sm-only' />
            <span className='text-emphasis'>Web</span> Developer</h1>

          <p>With <span className='text-emphasis'>whole lotta love</span> <br className='sm-only' />
            for <span className='text-emphasis'>Web Design </span>
            and <span className='text-emphasis'>UI</span>/<span className='text-emphasis'>UX</span></p>

          <ul className={`slogan__icons ${this.state.hasActiveLinkClassName}`}>
            <li>
              <SloganIconLink iconName='envelope' href='mailto:nt@ntmedia.me' title={this.props.iconTitles.email} onStateChange={this.handleStateChange} />
            </li>
            <li>
              <SloganIconLink iconName='linkedin' href='https://rs.linkedin.com/in/nikolatucakovic' target='_blank' rel='noopener noreferrer' title={this.props.iconTitles.linkedin} onStateChange={this.handleStateChange} />
            </li>
            <li>
              <SloganIconLink iconName='twitter' href='https://twitter.com/_ntucakovic' target='_blank' rel='noopener noreferrer' title={this.props.iconTitles.twitter} onStateChange={this.handleStateChange} />
            </li>
            <li>
              <SloganIconLink iconName='instagram' href='https://www.instagram.com/nikola.tucakovic/' target='_blank' rel='noopener noreferrer' title={this.props.iconTitles.instagram} onStateChange={this.handleStateChange} />
            </li>
            <li>
              <SloganIconLink iconName='skype' href='skype:ntmediasolutions?chat' title={this.props.iconTitles.skype} onStateChange={this.handleStateChange} />
            </li>
            <li>
              <SloganIconLink iconName='file' href='http://www.ntmedia.me/documents/cv.pdf' title={this.props.iconTitles.cv} onStateChange={this.handleStateChange} />
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
