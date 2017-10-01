import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SloganIcon from '../SloganIcon';

class SloganIconLink extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isActive: false,
      isTransitioning: false,
      linkActiveStateClassName: ''
    };

    this.linkActiveClassName = 'is-active';

    // Timeout to prevent on mobile devices hover and click triggering after one another.
    this.enterTimeout = null;
    this.leaveTimeout = null;
    this.timeoutDelay = 100;

    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleClick (event) {
    if (this.state.isTransitioning) {
      event.preventDefault();
      return;
    }

    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  handleEnter () {
    this.setState({ isTransitioning: true }, () => {
      this.enterTimeout = setTimeout(() => {
        this.setState({
          isActive: true,
          isTransitioning: false,
          linkActiveStateClassName: this.linkActiveClassName
        }, () => {
          clearTimeout(this.enterTimeout);

          // Call parent method to update class on Slogan container.
          this.props.onStateChange(this);
        });
      }, this.timeoutDelay);
    });
  }

  handleLeave () {
    if (this.enterTimeout) {
      clearTimeout(this.enterTimeout);
    }

    this.setState({
      isTransitioning: true,
      isActive: false,
      linkActiveStateClassName: ''
    }, () => {
      this.props.onStateChange(this);
    });
  }

  render () {
    const { iconName, onStateChange, ...htmlAttributes } = this.props;
    return (
      <a className={`slogan__link ${this.state.linkActiveStateClassName}`} {...htmlAttributes}
        onClick={this.handleClick} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>

        <SloganIcon className={`slogan__icon ${this.state.linkActiveStateClassName}`} iconName={iconName} />
        <span className={`slogan__title ${this.state.linkActiveStateClassName}`}>{this.props.label}</span>
      </a>
    );
  }
}

SloganIconLink.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.element,
  onStateChange: PropTypes.func
};

export default SloganIconLink;
