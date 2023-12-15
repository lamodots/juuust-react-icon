import React from 'react';
import PropTypes from 'prop-types';

const AlertTriangle = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M12 9v4m0 4h.01m9.72 1l-8-14a2 2 0 00-3.48 0l-8 14A2 2 0 004 21h16a2.001 2.001 0 001.73-3z"></path>
    </svg>
  );
};

AlertTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlertTriangle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlertTriangle;
