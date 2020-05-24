import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledButton,
  StyledGoogle,
  StyledText,
} from './button.styles';

const Button = ({ text, google, ...otherProps }) => {
  return (
    <StyledButton type='button' google={google} {...otherProps}>
      {google && <StyledGoogle />}
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  google: PropTypes.bool,
};

export default Button;
