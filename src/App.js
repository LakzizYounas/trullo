import React, { Suspense, lazy } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const SignInSignUp = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up.component'));

const App = () => (
  <>
  <Header />
  <Switch>
    <Suspense fallback={<div>loading</div>}>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/sign' component={SignInSignUp} />
    </Suspense>
  </Switch>
  </>
);

export default App;
