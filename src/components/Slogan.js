import React, { Component } from 'react';
import SloganIconLink from './SloganLink';
import Typed from 'typed.js';
import { AppContext } from './AppContext';

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

  render () {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div style={context.state.pageTransformStyle}>
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
                  {context.hobbies.map((hobby, index) => (
                    <span key={`hobby-${index}`}>{hobby}</span>
                  ))}
                </span>
                <span id='sloganHobbies' className='slogan-hobbies text-emphasis' />
              </p>

              <ul className={`slogan__icons ${this.state.hasActiveLinkClassName}`}>
                {context.links.map((link, key) => (
                  <li key={key} className={this.state.iconAnimationClass}>
                    <SloganIconLink
                      {...link}
                      onStateChange={this.handleStateChange} />
                  </li>
                ))}
              </ul>
            </header>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Slogan;
