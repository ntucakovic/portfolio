import React from "react";
import PropTypes from "prop-types";
import Isvg from "react-inlinesvg";

const RepositoryLink = props => {
  const { icon, ...attributes } = props;
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 2,
        right: 0,
        bottom: 0
      }}
    >
      <a className="repository-link" {...attributes}>
        <Isvg src={icon} />
      </a>
      <div className="repository-link__background" />
    </div>
  );
};

RepositoryLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  rel: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired
};

export default RepositoryLink;
