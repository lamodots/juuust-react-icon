import React from 'react';
import PropTypes from 'prop-types';

const AlignJustify = props => {
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
      <path d="M3 6h18M3 12h18M3 18h18"></path>
    </svg>
  );
};

AlignJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignJustify.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignJustify;
