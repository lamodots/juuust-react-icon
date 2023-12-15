import React from 'react';
import PropTypes from 'prop-types';

const AlignHorizontalDistributeCenter = props => {
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
      <path d="M17 22v-5m0-10V2M7 22v-3M7 5V2M6 5h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2zm10 2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V9a2 2 0 012-2z"></path>
    </svg>
  );
};

AlignHorizontalDistributeCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignHorizontalDistributeCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignHorizontalDistributeCenter;
