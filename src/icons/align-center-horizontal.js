import React from 'react';
import PropTypes from 'prop-types';

const AlignCenterHorizontal = props => {
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
      <path d="M2 12h20m-12 4v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m6-8V4a2 2 0 00-2-2H6a2 2 0 00-2 2v4m16 8v1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1m0-8V7c0-1.1.9-2 2-2h2a2 2 0 012 2v1"></path>
    </svg>
  );
};

AlignCenterHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignCenterHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignCenterHorizontal;
