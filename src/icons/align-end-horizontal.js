import React from 'react';
import PropTypes from 'prop-types';

const AlignEndHorizontal = props => {
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
      <path d="M22 22H2M6 2h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm10 7h2a2 2 0 012 2v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5a2 2 0 012-2z"></path>
    </svg>
  );
};

AlignEndHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignEndHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignEndHorizontal;
