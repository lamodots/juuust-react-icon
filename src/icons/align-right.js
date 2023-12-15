import React from 'react';
import PropTypes from 'prop-types';

const AlignRight = props => {
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
      <path d="M21 6H3m18 6H9m12 6H7"></path>
    </svg>
  );
};

AlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignRight;
