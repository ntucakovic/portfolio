import React from "react";
import PropTypes from "prop-types";
import Isvg from "react-inlinesvg";

class SloganLink extends React.Component {
  state = {
    isActive: false,
    isTransitioning: false,
    linkActiveStateClassName: ""
  };

  constructor(props) {
    super(props);

    this.linkActiveClassName = "is-active";

    // Timeout to prevent on mobile devices hover and click triggering after one another.
    this.enterTimeout = null;
    this.transitioningAnimationDelay = 0;
    this.iosOutsideClickDelay = 300;
  }

  handleClick = event => {
    if (this.state.isTransitioning || !this.state.isActive) {
      event.preventDefault();
    }

    if (!this.state.isTransitioning && !this.state.isActive) {
      this.handleEnter();
    }
  };

  handleOutsideClick = () => {
    let iosUser = (function(userAgent) {
      return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
    })(window.navigator.userAgent);

    setTimeout(() => {
      this.handleLeave();
      document.body.removeEventListener("touchend", this.handleOutsideClick);
    }, iosUser ? this.iosOutsideClickDelay : 0);
  };

  handleEnter = () => {
    if (this.state.isActive) {
      return;
    }

    this.setState(
      {
        isTransitioning: true,
        linkActiveStateClassName: this.linkActiveClassName,
        isActive: true
      },
      () => {
        // Call parent method to update class on Slogan container.
        this.props.onStateChange(this);

        this.enterTimeout = setTimeout(() => {
          this.setState(
            {
              isTransitioning: false
            },
            () => {
              // Delay because click is fired before we set the state on Safari.
              document.body.addEventListener(
                "touchend",
                this.handleOutsideClick
              );

              clearTimeout(this.enterTimeout);
            }
          );
        }, this.transitioningAnimationDelay);
      }
    );
  };

  handleLeave = () => {
    if (this.enterTimeout) {
      clearTimeout(this.enterTimeout);
    }

    this.setState(
      {
        isActive: false,
        isTransitioning: false,
        linkActiveStateClassName: ""
      },
      () => {
        this.props.onStateChange(this);
      }
    );
  };

  render() {
    const { icon, label, onStateChange, ...htmlAttributes } = this.props;
    return (
      <a
        className={`slogan__link ${this.state.linkActiveStateClassName}`}
        {...htmlAttributes}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        onFocus={this.handleEnter}
        onBlur={this.handleLeave}
        onTouchEnd={this.handleClick}
      >
        <span className={`slogan__icon ${this.state.linkActiveStateClassName}`}>
          <Isvg src={icon} />
        </span>
        <span
          className={`slogan__title ${this.state.linkActiveStateClassName}`}
        >
          {label}
        </span>
      </a>
    );
  }
}

SloganLink.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.element,
  onStateChange: PropTypes.func
};

export default SloganLink;
