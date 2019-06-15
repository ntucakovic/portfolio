import classNames from "classnames";
import React, { useState } from "react";
import IconLink from "./IconLink";
import { links } from "../constants/data";

let isAnimatedTimeout;
const HomeLinks = ({ ready }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const onAnimationChange = isAnimated => {
    clearTimeout(isAnimatedTimeout);
    isAnimatedTimeout = setTimeout(
      () => setIsAnimated(isAnimated),
      isAnimated ? 300 : 0
    );
  };

  const className = classNames("home__icons", {
    "is-animated": isAnimated
  });

  const iconClassName = classNames({
    "start-animation": ready
  });

  return (
    <ul className={className}>
      {links.map((link, key) => {
        return (
          <li key={key} className={iconClassName}>
            <IconLink link={link} onAnimationChange={onAnimationChange} />
          </li>
        );
      })}
    </ul>
  );
};

export default HomeLinks;
