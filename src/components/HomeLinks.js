import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import withData, { APP_DATA_PROPS } from "../containers/withData";
import IconLink from "./IconLink";

let isAnimatedTimeout;
class HomeLinks extends React.PureComponent {
  state = {
    isAnimated: false
  };

  updateAnimationChange = isAnimated => {
    return () => {
      this.setState({
        isAnimated: isAnimated
      });
    };
  };

  onAnimationChange = isAnimated => {
    clearTimeout(isAnimatedTimeout);
    isAnimatedTimeout = setTimeout(
      this.updateAnimationChange(isAnimated),
      isAnimated ? 300 : 0
    );
  };

  render() {
    const className = classNames("home__icons", {
      "is-animated": this.state.isAnimated
    });

    const iconClassName = classNames({
      "start-animation": this.props.ready
    });

    return (
      <ul className={className}>
        {this.props.links.map((link, key) => {
          return (
            <li key={key} className={iconClassName}>
              <IconLink
                link={link}
                onAnimationChange={this.onAnimationChange}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

HomeLinks.propTypes = {
  links: PropTypes.array,
  ready: PropTypes.bool
};

export default withData(HomeLinks, [APP_DATA_PROPS.links]);
