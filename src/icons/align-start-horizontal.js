import React from 'react';
import PropTypes from 'prop-types';

const AlignStartHorizontal = props => {
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
      <path d="M22 2H2m4 4h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2zm10 0h2a2 2 0 012 2v5a2 2 0 01-2 2h-2a2 2 0 01-2-2V8a2 2 0 012-2z"></path>
    </svg>
  );
};

AlignStartHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignStartHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignStartHorizontal;
