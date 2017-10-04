import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SloganIconLink from '../SloganIconLink/SloganIconLink';
import Typed from 'typed.js';

class Slogan extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hasActiveLinkClassName: '',
      subtitleAnimationClass: '',
      iconAnimationClass: '',
      style: {}
    };

    this.hasActiveLinkClassName = 'is-active';
    this.animationClass = 'start-animation';

    // @todo This needs to live somewhere in a higher scope.
    this.screenMdMin = 576;

    this.stateChangeDelay = 0;
    this.stateChangeTimeout = null;

    // Bind different this, we need instance of Slogan in method below.
    this.handleTypedSloganComplete = this.handleTypedSloganComplete.bind(this);

    this.typedSloganOptions = {
      typeSpeed: 40,
      loop: false,
      stringsElement: '#sloganHeadingStrings',
      onComplete: this.handleTypedSloganComplete
    };

    this.typedHobbiesOptions = {
      backDelay: 1500,
      typeSpeed: 70,
      loop: true,
      shuffle: true,
      smartBackspace: false,
      stringsElement: '#sloganHobbiesStrings'
    };

    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleTypedSloganComplete () {
    this.setState({
      subtitleAnimationClass: this.animationClass,
      iconAnimationClass: this.animationClass
    }, () => {
      this.typedHobbies = new Typed('#sloganHobbies', this.typedHobbiesOptions);
    });
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
    this.typedSlogan = new Typed('#sloganHeading', this.typedSloganOptions);
  }

  resetSloganStyle () {
    this.setState({
      style: {
        transform: `translate(0px, 0px) skew(0deg, 0deg)`
      }
    });
  }

  updateSloganStyle (event) {
    if (window.innerWidth < this.screenMdMin) {
      this.resetSloganStyle();
      return;
    }

    let multiplier = 1;

    let mouseX = event.screenX;
    let mouseY = event.screenY;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let percentageX = mouseX / (windowWidth / 100);
    let percentageY = mouseY / (windowHeight / 100);

    let leftSideOfScreen = percentageX < 50;
    let topSideOfScreen = percentageY < 50;

    // @todo, figure out this magic written back in 2014 and improve it.
    let translateX = (
      leftSideOfScreen
        ? ((50 - percentageX) / 100) * (windowWidth * multiplier * 0.03)
        : -((percentageX - 50) / 100) * (windowWidth * multiplier * 0.03)
    );
    let translateY = (
      topSideOfScreen
        ? ((50 - percentageY) / 100) * (windowHeight * multiplier * 0.03)
        : -((percentageY - 50) / 100) * (windowHeight * multiplier * 0.03)
    );

    let skewX = ((percentageX - 50) / 100) * 1.5 * multiplier;
    let skewY = ((percentageY - 50) / 100) * 1.5 * multiplier;

    this.setState({
      style: {
        transform: `translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
      }
    });
  }

  render () {
    return (
      <div style={this.state.style}>
        <header className='slogan'>
          <h1>
            <span id='sloganHeadingStrings'>
              <span>
                <span className='text-emphasis'>Frontend</span> && <br className='sm-only' /><span className='text-emphasis'>Web</span> Developer
              </span>
            </span>
            <span id='sloganHeading' className='slogan-heading' />
          </h1>

          <p className={`slogan__delayed-subtitle ${this.state.subtitleAnimationClass}`}>With <span className='text-emphasis'>whole lotta love</span> <br className='sm-only' />
            for <span id='sloganHobbiesStrings'>
              {this.props.hobbies.map((hobby, index) => {
                return React.createElement('span', {key: `hobby-${index}`}, `${hobby} `);
              })}
            </span><span id='sloganHobbies' className='slogan-hobbies text-emphasis' /></p>

          <ul className={`slogan__icons ${this.state.hasActiveLinkClassName}`}>
            <li className={this.state.iconAnimationClass}>
              <SloganIconLink
                iconName='envelope'
                href={this.props.iconLinks.email}
                title={this.props.iconTitles.email}
                label={this.props.iconLabels.email}
                onStateChange={this.handleStateChange} />
            </li>
            <li className={this.state.iconAnimationClass}>
              <SloganIconLink
                iconName='linkedin'
                href={this.props.iconLinks.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                title={this.props.iconTitles.linkedin}
                label={this.props.iconLabels.linkedin}
                onStateChange={this.handleStateChange} />
            </li>
            <li className={this.state.iconAnimationClass}>
              <SloganIconLink
                iconName='twitter'
                href={this.props.iconLinks.twitter}
                target='_blank'
                rel='noopener noreferrer'
                title={this.props.iconTitles.twitter}
                label={this.props.iconLabels.twitter}
                onStateChange={this.handleStateChange} />
            </li>
            <li className={this.state.iconAnimationClass}>
              <SloganIconLink
                iconName='instagram'
                href={this.props.iconLinks.instagram}
                target='_blank'
                rel='noopener noreferrer'
                title={this.props.iconTitles.instagram}
                label={this.props.iconLabels.instagram}
                onStateChange={this.handleStateChange} />
            </li>
            <li className={this.state.iconAnimationClass}>
              <SloganIconLink
                iconName='skype'
                href={this.props.iconLinks.skype}
                title={this.props.iconTitles.skype}
                label={this.props.iconLabels.skype}
                onStateChange={this.handleStateChange} />
            </li>
            <li className={this.state.iconAnimationClass}>
              <SloganIconLink
                iconName='file'
                href={this.props.iconLinks.cv}
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
  hobbies: PropTypes.array,
  iconLinks: PropTypes.object,
  iconTitles: PropTypes.object,
  iconLabels: PropTypes.object
};

Slogan.defaultProps = {
  hobbies: [
    'Web Design',
    'UI/UX',
    'Technology & Innovations',
    'Music',
    'Nomad Lifestyle',
    'Traveling',
    'Nature Wandering',
    'Photography',
    'Mountain Biking',
    'Snowboarding',
    'Paddleboarding',
    'Basketball'
  ],
  iconLinks: {
    email: 'mailto:nt@ntmedia.me',
    linkedin: 'https://rs.linkedin.com/in/nikolatucakovic',
    twitter: 'https://twitter.com/_ntucakovic',
    instagram: 'https://www.instagram.com/nikola.tucakovic',
    skype: 'skype:ntmediasolutions?chat',
    cv: 'https://drive.google.com/uc?export=download&id=0B1aRGaIa4vgnaTc5YjNWMlFlQTg'
  },
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
