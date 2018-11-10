import React, { Component } from "react";
import PropTypes from "prop-types";
import IconLink from "./IconLink";
import withData, { APP_DATA_PROPS } from "../containers/withData";
import classNames from "classnames";

class HomeLinks extends Component {
  render() {
    const iconClassName = classNames({
      "start-animation": this.props.ready
    });

    return (
      <ul className="home__icons">
        {this.props.links.map((link, key) => {
          return (
            <li key={key} className={iconClassName}>
              <IconLink link={link} />
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
