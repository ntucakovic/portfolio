import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SloganIconLink from '../SloganIconLink/SloganIconLink';
import Typed from 'typed.js';

class Slogan extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hasActiveLinkClassName: ''
    };

    this.hasActiveLinkClassName = 'is-active';

    // @note Have to use class instead of className and escaped ampersand char because of typed.js bugs.
    // Update when fixed @todo
    this.title = `<span class='text-emphasis'>Frontend</span> &amp;&amp; <br class='sm-only'><span class='text-emphasis'>Web</span> Developer`;

    this.stateChangeDelay = 0;
    this.stateChangeTimeout = null;

    this.typedSlogan = null;
    this.typedOptions = {
      strings: [this.title],
      typeSpeed: 40,
      loop: false
    };

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

  componentDidMount () {
    this.typedSlogan = new Typed('#sloganHeading', this.typedOptions);
  }

  render () {
    return (
      <div>
        <header className='slogan'>
          <h1>
            <span id='sloganHeading' />
          </h1>

          <p className='slogan__delayed-subtitle'>With <span className='text-emphasis'>whole lotta love</span> <br className='sm-only' />
            for <span className='text-emphasis'>Web Design </span>
            and <span className='text-emphasis'>UI</span>/<span className='text-emphasis'>UX</span></p>

          <ul className={`slogan__icons ${this.state.hasActiveLinkClassName}`}>
            <li>
              <SloganIconLink
                iconName='envelope'
                href='mailto:nt@ntmedia.me'
                title={this.props.iconTitles.email}
                label={this.props.iconLabels.email}
                onStateChange={this.handleStateChange} />
            </li>
            <li>
              <SloganIconLink
                iconName='linkedin'
                href='https://rs.linkedin.com/in/nikolatucakovic'
                target='_blank'
                rel='noopener noreferrer'
                title={this.props.iconTitles.linkedin}
                label={this.props.iconLabels.linkedin}
                onStateChange={this.handleStateChange} />
            </li>
            <li>
              <SloganIconLink
                iconName='twitter'
                href='https://twitter.com/_ntucakovic'
                target='_blank'
                rel='noopener noreferrer'
                title={this.props.iconTitles.twitter}
                label={this.props.iconLabels.twitter}
                onStateChange={this.handleStateChange} />
            </li>
            <li>
              <SloganIconLink
                iconName='instagram'
                href='https://www.instagram.com/nikola.tucakovic/'
                target='_blank'
                rel='noopener noreferrer'
                title={this.props.iconTitles.instagram}
                label={this.props.iconLabels.instagram}
                onStateChange={this.handleStateChange} />
            </li>
            <li>
              <SloganIconLink
                iconName='skype'
                href='skype:ntmediasolutions?chat'
                title={this.props.iconTitles.skype}
                label={this.props.iconLabels.skype}
                onStateChange={this.handleStateChange} />
            </li>
            <li>
              <SloganIconLink
                iconName='file'
                href='http://www.ntmedia.me/documents/cv.pdf'
                title={this.props.iconTitles.cv}
                label={this.props.iconLabels.cv}
                onStateChange={this.handleStateChange} />
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

Slogan.propTypes = {
  iconTitles: PropTypes.object,
  iconLabels: PropTypes.object
};

Slogan.defaultProps = {
  iconTitles: {
    email: 'Send me an email!',
    linkedin: 'Linkedin Account',
    twitter: 'Twitter Account',
    instagram: 'Instagram Account',
    skype: 'Message me on Skype',
    cv: 'Download my resume'
  },
  iconLabels: {
    email: (
      <span>
        nt<span className='text-emphasis'>@</span>ntmedia.me
      </span>
    ),
    linkedin: (
      <span>
        nikola<span className='text-emphasis'>tucakovic</span>
      </span>
    ),
    twitter: (
      <span>
        _<span className='text-emphasis'>ntucakovic</span>
      </span>
    ),
    instagram: (
      <span>
        <span className='text-emphasis'>nikola</span>.<span className='text-emphasis'>tucakovic</span>
      </span>
    ),
    skype: (
      <span>
        <span className='text-emphasis'>ntmedia</span>solutions
      </span>
    ),
    cv: (
      <span>
        Download my <span className='text-emphasis'>resume</span>
      </span>
    )
  }
};

export default Slogan;
