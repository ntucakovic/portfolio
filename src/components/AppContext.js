import React from 'react';
import PropTypes from 'prop-types';
import * as icons from '../icons';

const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor () {
    super();
    this.screenMdMin = 576;
    this.links = AppProvider.getSloganLinks();
    this.hobbies = AppProvider.getHobbies();
    this.repository = {
      href: 'https://github.com/ntucakovic/portfolio',
      target: '_blank',
      rel: 'noopener noreferrer',
      title: 'Read code on GitHub',
      icon: icons.github
    };
    this.logoDescription = 'NT';
  }

  state = {
    pageTransformStyle: {
      transform: ''
    },
    theme: 'light'
  }

  componentDidMount () {
    this.setBodyClass();
  }

  handleMouseMove = (event) => {
    const pageTransformStyle = this.getPageTransformStyle(event);

    this.setState({
      pageTransformStyle
    });
  }

  setBodyClass () {
    const date = new Date();
    const isNightTime = (date.getHours() < 6) || (date.getHours() > 18);

    if (isNightTime) {
      this.setState({
        theme: 'dark'
      });
    }
  }

  getPageTransformStyle (event) {
    if (window.innerWidth < this.screenMdMin) {
      return {
        transform: `translate(0px, 0px) skew(0deg, 0deg)`
      };
    }

    let multiplier = 1;

    let mouseX = event.pageX;
    let mouseY = event.pageY;

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

    return {
      transform: `translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
    };
  }

  static getSloganLinks () {
    return [
      {
        title: 'Send me an email',
        href: 'mailto:nt@ntmedia.me',
        label: (
          <span>
            nt<span className='text-emphasis'>@</span>ntmedia.me
          </span>
        ),
        icon: icons.envelope
      }, {
        title: 'Linkedin Account',
        href: 'https://rs.linkedin.com/in/nikolatucakovic',
        label: (
          <span>
            nikola<span className='text-emphasis'>tucakovic</span>
          </span>
        ),
        icon: icons.linkedin
      }, {
        title: 'Twitter Account',
        href: 'https://twitter.com/_ntucakovic',
        label: (
          <span>
            _<span className='text-emphasis'>ntucakovic</span>
          </span>
        ),
        icon: icons.twitter
      }, {
        title: 'Instagram Profile',
        href: 'https://www.instagram.com/nikola.tucakovic',
        label: (
          <span>
            <span className='text-emphasis'>nikola</span>.<span className='text-emphasis'>tucakovic</span>
          </span>
        ),
        icon: icons.instagram
      }, {
        title: 'Message me on Skype',
        href: 'skype:ntmediasolutions?chat',
        label: (
          <span>
            <span className='text-emphasis'>ntmedia</span>solutions
          </span>
        ),
        icon: icons.skype
      }, {
        title: 'Download my resume',
        href: 'https://drive.google.com/uc?export=download&id=0B1aRGaIa4vgnUUpRT3diOFYybjQ',
        label: (
          <span>
            Download my <span className='text-emphasis'>resume</span>
          </span>
        ),
        icon: icons.file
      }
    ];
  }

  static getHobbies () {
    return [
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
    ];
  }

  render () {
    return (
      <AppContext.Provider value={{
        state: this.state,
        hobbies: this.hobbies,
        links: this.links,
        handleMouseMove: this.handleMouseMove,
        repository: this.repository,
        logoDescription: this.logoDescription
      }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.any
};

export { AppProvider, AppContext };
