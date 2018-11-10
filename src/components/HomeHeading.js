import PropTypes from "prop-types";
import React from "react";
import Typed from "typed.js";

class HomeHeading extends React.PureComponent {
  componentDidMount() {
    const typedSloganOptions = {
      typeSpeed: 40,
      loop: false,
      stringsElement: "#sloganHeadingStrings",
      onComplete: this.props.onComplete
    };

    this.typedSlogan = new Typed("#sloganHeading", typedSloganOptions);
  }

  render() {
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
  }
}

HomeHeading.propTypes = {
  onComplete: PropTypes.func
};

export default HomeHeading;
