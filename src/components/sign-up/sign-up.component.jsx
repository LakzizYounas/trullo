import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../button/button.component';

import { signUpStart } from '../../redux/user/user.actions';

import {
  StyledContainer,
  StyledInput,
} from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {
    displayName,
    email,
    password,
    confirmPassword,
  } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }
    signUpStart(email, password, displayName);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <StyledContainer>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <StyledInput
          fontSize={15}
          placeholder='displayName'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          required
        />
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
        <StyledInput
          fontSize={15}
          placeholder='confirm
          password'
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type='submit' text='Sign up' />
      </form>
    </StyledContainer>
  );
};

SignUp.propTypes = {
  signUpStart: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
