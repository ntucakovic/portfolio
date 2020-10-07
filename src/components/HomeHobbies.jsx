import classNames from "classnames";
import React, { useEffect } from "react";
import Typed from "typed.js";
import { hobbies } from "../data";

const HomeHobbies = ({ ready }) => {
  useEffect(() => {
    if (ready) {
      const typedHobbiesOptions = {
        backDelay: 1500,
        typeSpeed: 70,
        loop: true,
        shuffle: true,
        smartBackspace: false,
        stringsElement: "#sloganHobbiesStrings",
      };

      // eslint-disable-next-line no-new
      new Typed("#sloganHobbies", typedHobbiesOptions);
    }
  }, [ready]);

  const className = classNames("home__delayed-subtitle", {
    "start-animation": ready,
  });

  return (
    <p className={className}>
      With <span className="text-emphasis">whole lotta love</span>{" "}
      <br className="sm-only" />
      for{" "}
      <span id="sloganHobbiesStrings" className="sr-only">
        {hobbies.map((hobby, index) => (
          <span key={`hobby-${index}`}>{hobby}</span>
        ))}
      </span>
      <span
        id="sloganHobbies"
        className="slogan-hobbies text-emphasis"
        aria-hidden="true"
      />
    </p>
  );
};

export { HomeHobbies };
