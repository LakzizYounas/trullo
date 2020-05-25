import React, { Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

import Header from './components/header/header.component';

const Homepage = lazy(() =>
import('./pages/homepage/homepage.component'));
const SignInSignUp = lazy(() =>
import('./pages/sign-in-sign-up/sign-in-sign-up.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
    <Header />
    <Switch>
      <Suspense fallback={<div>loading</div>}>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/sign' render={() => currentUser ? <Redirect to='/' /> : <SignInSignUp />} />
      </Suspense>
    </Switch>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
