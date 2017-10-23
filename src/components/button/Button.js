import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({children, link, size, isFullWidth, ...others }) => {
  return (
    link ?
      <a href={link} className={`Button Button--${size} ${isFullWidth ? "Button--full" : ""}`} {...others}> {children} </a> :
      <button type="button" className={`Button Button--${size} ${isFullWidth ? "Button--full" : ""}`} {...others}> {children} </button>
  );
};


Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  isFullWidth: PropTypes.bool
};

export default Button;