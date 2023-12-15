import React from 'react';
import PropTypes from 'prop-types';

const AlignHorizontalJustifyCenter = props => {
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
      <path d="M12 2v20M4 5h2a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm14 2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V9a2 2 0 012-2z"></path>
    </svg>
  );
};

AlignHorizontalJustifyCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignHorizontalJustifyCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignHorizontalJustifyCenter;
