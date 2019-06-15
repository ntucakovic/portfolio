import React, { useEffect } from "react";
import Typed from "typed.js";

const HomeHeading = ({ onComplete }) => {
  useEffect(() => {
    const typedSloganOptions = {
      typeSpeed: 40,
      loop: false,
      stringsElement: "#sloganHeadingStrings",
      onComplete
    };

    // eslint-disable-next-line no-new
    new Typed("#sloganHeading", typedSloganOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1>
      <span className="sr-only">Nikola Tucaković</span>
      <span id="sloganHeadingStrings">
        <span>
          <span className="text-emphasis">Frontend</span> &&{" "}
          <br className="sm-only" />
          <span className="text-emphasis">Web</span> Developer
        </span>
      </span>
      <span id="sloganHeading" className="home-heading" />
    </h1>
  );
};

export { HomeHeading };
