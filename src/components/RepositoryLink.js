import React from "react";
import Isvg from "react-inlinesvg";

const RepositoryLink = ({ icon, ...attributes }) => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 2,
        right: 0,
        bottom: 0,
      }}
    >
      <a className="repository-link" {...attributes}>
        <Isvg src={icon} />
      </a>
      <div className="repository-link__background" />
    </div>
  );
};

export { RepositoryLink };
