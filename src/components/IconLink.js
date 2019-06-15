import classNames from "classnames";
import React, { useState } from "react";
import Isvg from "react-inlinesvg";

const transitioningAnimationDelay = 0;
const iosOutsideClickDelay = 300;
const IconLink = ({ link, onAnimationChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [enterTimeout, setEnterTimeout] = useState(null);

  const handleClick = event => {
    if (isTransitioning || !isActive) {
      event.preventDefault();
    }

    if (!isTransitioning && !isActive) {
      handleEnter();
    }
  };

  const handleOutsideClick = () => {
    let iosUser = (function(userAgent) {
      return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
    })(window.navigator.userAgent);

    setTimeout(
      () => {
        handleLeave();
        document.body.removeEventListener("touchend", handleOutsideClick);
      },
      iosUser ? iosOutsideClickDelay : 0
    );
  };

  const handleEnter = () => {
    if (isActive) {
      return;
    }

    setIsTransitioning(true);
    setIsActive(true);
    onAnimationChange(true);

    setEnterTimeout(() => {
      return setTimeout(() => {
        setIsTransitioning(false);

        // Delay because click is fired before we set the state on Safari.
        document.body.addEventListener("touchend", handleOutsideClick);

        clearTimeout(enterTimeout);
      }, transitioningAnimationDelay);
    });
  };

  const handleLeave = () => {
    if (enterTimeout) {
      clearTimeout(enterTimeout);
    }

    setIsActive(false);
    setIsTransitioning(false);
    onAnimationChange(false);
  };

  const { icon, label, ...linkAttributes } = link;
  const className = classNames("icon-link", {
    "is-active": isActive
  });

  return (
    <a
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      onTouchEnd={handleClick}
      {...linkAttributes}
    >
      <span className="icon-link__icon">
        <Isvg src={icon} />
      </span>
      <span className="icon-link__title">{label}</span>
    </a>
  );
};

export default IconLink;
