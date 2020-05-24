import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import Button from '../button/button.component';

import {
  StyledContainer,
  StyledForm,
  StyledInput,
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [ userCredentials, setUserCredentials ] = useState({
    email: '',
    password: '',
  });

  const {
    email,
    password,
  } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <StyledContainer>
      <h2>Sign In</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          fontSize={15}
          placeholder='email'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
        <StyledInput
          fontSize={15}
          placeholder='password'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          required
        />
        <Button type='submit' text='Sign up' />
        <div>OR</div>
        <Button text='Sign in with Google' google onClick={googleSignInStart}/>
      </StyledForm>
    </StyledContainer>
  );
};

SignIn.propTypes = {
  googleSignInStart: PropTypes.func,
  emailSignInStart: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
