import React from 'react';
import PropTypes from 'prop-types';

const AlignVerticalDistributeCenter = props => {
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
      <path d="M22 7h-5M7 7H1m21 10h-3M5 17H2m5-3h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2zM9 4h6a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2z"></path>
    </svg>
  );
};

AlignVerticalDistributeCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignVerticalDistributeCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignVerticalDistributeCenter;
