import React from 'react';
import PropTypes from 'prop-types';

const AlignVerticalDistributeEnd = props => {
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
      <path d="M2 20h20M2 10h20M7 14h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2zM9 4h6a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2z"></path>
    </svg>
  );
};

AlignVerticalDistributeEnd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignVerticalDistributeEnd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignVerticalDistributeEnd;
