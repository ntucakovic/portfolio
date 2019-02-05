import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Isvg from "react-inlinesvg";
import withIconLinkInteraction from "./withIconLinkInteraction";

class IconLink extends React.PureComponent {
  render() {
    let { className, link, ...attributes } = this.props;
    className = classNames("icon-link", this.props.className);

    const { icon, label, ...linkAttributes } = link;

    return (
      <a className={className} {...linkAttributes} {...attributes}>
        <span className="icon-link__icon">
          <Isvg src={icon} />
        </span>
        <span className="icon-link__title">{label}</span>
      </a>
    );
  }
}

IconLink.propTypes = {
  className: PropTypes.any,
  link: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.any,
    label: PropTypes.element
  }),
  onAnimationChange: PropTypes.func
};

export default withIconLinkInteraction(IconLink);
