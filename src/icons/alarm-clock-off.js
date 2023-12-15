import React from 'react';
import PropTypes from 'prop-types';

const AlarmClockOff = props => {
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
      <path d="M6.87 6.87a8 8 0 1011.26 11.26m1.77-3.88a8 8 0 00-9.15-9.15M22 6l-3-3M6.26 18.67L4 21M2 2l20 20M4 4L2 6"></path>
    </svg>
  );
};

AlarmClockOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlarmClockOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlarmClockOff;
