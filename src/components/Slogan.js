import React from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";

import SloganLink from "./SloganLink";

class Slogan extends React.Component {
  state = {
    sloganLinkActiveClassName: "",
    subtitleAnimationClass: "",
    iconAnimationClass: "",
    style: {}
  };

  constructor(props) {
    super(props);

    this.sloganLinkActiveClassName = "is-active";
    this.animationClass = "start-animation";

    this.stateChangeDelay = 0;
    this.stateChangeTimeout = null;

    this.typedSloganOptions = {
      typeSpeed: 40,
      loop: false,
      stringsElement: "#sloganHeadingStrings",
      onComplete: this.handleTypedSloganComplete
    };

    this.typedHobbiesOptions = {
      backDelay: 1500,
      typeSpeed: 70,
      loop: true,
      shuffle: true,
      smartBackspace: false,
      stringsElement: "#sloganHobbiesStrings"
    };
  }

  /**
   * Initialize typed.js for hobbies after slogan is finished animating.
   */
  handleTypedSloganComplete = () => {
    this.setState(
      {
        subtitleAnimationClass: this.animationClass,
        iconAnimationClass: this.animationClass
      },
      () => {
        this.typedHobbies = new Typed(
          "#sloganHobbies",
          this.typedHobbiesOptions
        );
      }
    );
  };

  handleSloganLinkStateChange = sloganLink => {
    if (this.stateChangeTimeout) {
      clearTimeout(this.stateChangeTimeout);
    }

    this.stateChangeTimeout = setTimeout(() => {
      this.setState({
        sloganLinkActiveClassName: sloganLink.state.isActive
          ? this.sloganLinkActiveClassName
          : ""
      });
    }, this.stateChangeDelay);
  };

  componentDidMount() {
    this.typedSlogan = new Typed("#sloganHeading", this.typedSloganOptions);
  }

  render() {
    const { appTransformStyle, hobbies, links } = this.props;

    return (
      <div style={appTransformStyle}>
        <header className="slogan">
          <h1>
            <span className="sr-only">Nikola Tucaković</span>
            <span id="sloganHeadingStrings">
              <span>
                <span className="text-emphasis">Frontend</span> &&{" "}
                <br className="sm-only" />
                <span className="text-emphasis">Web</span> Developer
              </span>
            </span>
            <span id="sloganHeading" className="slogan-heading" />
          </h1>

          <p
            className={`slogan__delayed-subtitle ${
              this.state.subtitleAnimationClass
            }`}
          >
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

          <ul
            className={`slogan__icons ${this.state.sloganLinkActiveClassName}`}
          >
            {links.map((link, key) => (
              <li key={key} className={this.state.iconAnimationClass}>
                <SloganLink
                  {...link}
                  onStateChange={this.handleSloganLinkStateChange}
                />
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

Slogan.propTypes = {
  appTransformStyle: PropTypes.object,
  hobbies: PropTypes.array,
  links: PropTypes.array
};

export default Slogan;
