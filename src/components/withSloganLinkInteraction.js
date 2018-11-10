import React from "react";
import classNames from "classnames";

export default function withSloganLinkInteraction(WrappedComponent) {
  return class extends React.Component {
    state = {
      isActive: false
    };

    constructor(props) {
      super(props);

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
          isActive: true
        },
        () => {
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

      this.setState({
        isActive: false,
        isTransitioning: false
      });
    };

    render() {
      const className = classNames({
        "is-active": this.state.isActive
      });

      return (
        <WrappedComponent
          {...this.props}
          className={className}
          onMouseEnter={this.handleEnter}
          onMouseLeave={this.handleLeave}
          onFocus={this.handleEnter}
          onBlur={this.handleLeave}
          onTouchEnd={this.handleClick}
        />
      );
    }
  };
}
