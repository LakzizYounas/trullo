import React, { Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { selectCurrentUser, selectIsFetching } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

const Homepage = lazy(() =>
import('./pages/homepage/homepage.component'));
const SignInSignUp = lazy(() =>
import('./pages/sign-in-sign-up/sign-in-sign-up.component'));
const Board = lazy(() =>
import('./pages/board/board.component'));

const App = ({ checkUserSession, currentUser, isFetchingUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
    <Header />
    {isFetchingUser ?
      <Spinner /> :
      <Switch>
        <Suspense fallback={<Spinner />}>
          {!currentUser &&
            <Redirect to='/sign' />
          }
          <Route exact path='/' component={Homepage} /> 
          <Route exact path='/sign' render={() => currentUser ? <Redirect to='/'/> : <SignInSignUp />} />
          <Route exact path='/board' component={Board} />
        </Suspense>
      </Switch>
    }
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isFetchingUser: selectIsFetching,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
