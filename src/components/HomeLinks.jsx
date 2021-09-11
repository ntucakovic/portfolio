import classNames from "classnames";
import React, { useState } from "react";
import { links } from "../data";
import { IconLink } from "./IconLink";

let isAnimatedTimeout;
const HomeLinks = ({ ready }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const onAnimationChange = (isAnimatedUpdate) => {
    clearTimeout(isAnimatedTimeout);
    isAnimatedTimeout = setTimeout(
      () => setIsAnimated(isAnimatedUpdate),
      isAnimatedUpdate ? 300 : 0
    );
  };

  const className = classNames("home__icons", {
    "is-animated": isAnimated,
  });

  const iconClassName = classNames({
    "start-animation": ready,
  });

  return (
    <ul className={className}>
      {links.map((link, key) => (
        <li key={key} className={iconClassName}>
          <IconLink link={link} onAnimationChange={onAnimationChange} />
        </li>
      ))}
    </ul>
  );
};

export { HomeLinks };
