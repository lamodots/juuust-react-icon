import React from 'react';
import PropTypes from 'prop-types';

const AlertOctagon = props => {
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
      <path d="M12 8v4m0 4h.01M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"></path>
    </svg>
  );
};

AlertOctagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlertOctagon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlertOctagon;
