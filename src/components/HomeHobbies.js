import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withData, { APP_DATA_PROPS } from "../containers/withData";
import Typed from "typed.js";

class HomeHobbies extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (!prevProps.ready && this.props.ready) {
      const typedHobbiesOptions = {
        backDelay: 1500,
        typeSpeed: 70,
        loop: true,
        shuffle: true,
        smartBackspace: false,
        stringsElement: "#sloganHobbiesStrings"
      };

      this.typedHobbies = new Typed("#sloganHobbies", typedHobbiesOptions);
    }
  }

  render() {
    const className = classNames("home__delayed-subtitle", {
      "start-animation": this.props.ready
    });

    return (
      <p className={className}>
        With <span className="text-emphasis">whole lotta love</span>{" "}
        <br className="sm-only" />
        for{" "}
        <span id="sloganHobbiesStrings" className="sr-only">
          {this.props.hobbies.map((hobby, index) => (
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
  }
}

HomeHobbies.propTypes = {
  hobbies: PropTypes.array,
  ready: PropTypes.bool
};

export default withData(HomeHobbies, [APP_DATA_PROPS.hobbies]);
