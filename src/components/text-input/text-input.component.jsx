import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledInput,
} from './text-input.styles';

const TextInput = ({ type, ...otherProps }) => {
  return (
    <StyledInput type={type || 'text'} {...otherProps} />
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  inverted: PropTypes.bool,
  fontSize: PropTypes.number,
};

export default TextInput;
