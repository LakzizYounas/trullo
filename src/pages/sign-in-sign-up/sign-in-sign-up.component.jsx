import React from 'react';

import {
  StyledContainer,
} from './sign-in-sign-up.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUp = () => {
  return (
    <StyledContainer>
      <SignIn />
      <SignUp />
    </StyledContainer>
  );
};

export default SignInSignUp;
