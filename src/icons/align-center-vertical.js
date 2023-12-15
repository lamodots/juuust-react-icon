import React from 'react';
import PropTypes from 'prop-types';

const AlignCenterVertical = props => {
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
      <path d="M12 2v20M8 10H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h4m8 6h4a2 2 0 002-2V6a2 2 0 00-2-2h-4M8 20H7a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h1m8 0h1a2 2 0 012 2v2a2 2 0 01-2 2h-1"></path>
    </svg>
  );
};

AlignCenterVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignCenterVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignCenterVertical;
