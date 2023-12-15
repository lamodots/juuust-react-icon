import React from 'react';
import PropTypes from 'prop-types';

const AirVent = props => {
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
      <path d="M6 12H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 8h12m.3 9.7a2.5 2.5 0 01-3.16 3.83 2.53 2.53 0 01-1.14-2V12m-7.4 3.6A2 2 0 1010 17v-5"></path>
    </svg>
  );
};

AirVent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AirVent.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AirVent;
