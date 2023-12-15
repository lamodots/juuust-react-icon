import React from 'react';
import PropTypes from 'prop-types';

const AlarmPlus = props => {
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
      <path d="M5 3L2 6m20 0l-3-3M6.38 18.7L4 21m13.64-2.33L20 21m-8-11v6m-3-3h6m5 0a8 8 0 11-16 0 8 8 0 0116 0z"></path>
    </svg>
  );
};

AlarmPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlarmPlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlarmPlus;
