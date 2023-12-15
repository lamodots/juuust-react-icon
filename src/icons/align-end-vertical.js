import React from 'react';
import PropTypes from 'prop-types';

const AlignEndVertical = props => {
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
      <path d="M22 22V2M4 4h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm7 10h5a2 2 0 012 2v2a2 2 0 01-2 2h-5a2 2 0 01-2-2v-2a2 2 0 012-2z"></path>
    </svg>
  );
};

AlignEndVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignEndVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignEndVertical;
