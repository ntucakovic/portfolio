import React from 'react';
import Isvg from 'react-inlinesvg';
import PropTypes from 'prop-types';

const RepositoryLink = function (props) {
  const { icon, ...attributes } = props;
  return (
    <div className='repository-link'>
      <a {...attributes}><Isvg src={icon} /></a>
      <div className='repository-link__background' />
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
