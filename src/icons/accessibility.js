import React from 'react';
import PropTypes from 'prop-types';

const Accessibility = props => {
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
      <path d="M18 19l1-7-6 1M5 8l3-3 5.5 3-2.36 3.5m-6.9 3a5 5 0 006.88 6m2.64-3a5 5 0 00-6.88-6M17 4a1 1 0 11-2 0 1 1 0 012 0z"></path>
    </svg>
  );
};

Accessibility.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Accessibility.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Accessibility;
