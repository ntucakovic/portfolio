import React from "react";
import PropTypes from "prop-types";
import Isvg from "react-inlinesvg";
import withSloganLinkInteraction from "./withSloganLinkInteraction";
import classNames from "classnames";

class SloganLink extends React.PureComponent {
  render() {
    let { className, ...props } = this.props;
    className = classNames("slogan__link", this.props.className);

    const { icon, label, ...linkAttributes } = this.props.link;

    return (
      <a className={className} {...linkAttributes} {...props}>
        <span className="slogan__icon">
          <Isvg src={icon} />
        </span>
        <span className="slogan__title">{label}</span>
      </a>
    );
  }
}

SloganLink.propTypes = {
  className: PropTypes.any,
  link: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.any,
    label: PropTypes.element
  })
};

export default withSloganLinkInteraction(SloganLink);
