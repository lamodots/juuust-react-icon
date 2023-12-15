import React from 'react';
import PropTypes from 'prop-types';

const ActivitySquare = props => {
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
      <path d="M17 12h-2l-2 5-2-10-2 5H7M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"></path>
    </svg>
  );
};

ActivitySquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ActivitySquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ActivitySquare;
