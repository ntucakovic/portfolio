import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import withData, { APP_DATA_PROPS } from "../containers/withData";
import IconLink from "./IconLink";

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
