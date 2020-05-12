import React, { Suspense, lazy } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));

const App = () => (
  <>
  <Header />
  <Switch>
    <Suspense fallback={<div>loading</div>}>
      <Route path='/' component={Homepage} />
    </Suspense>
  </Switch>
  </>
);

export default App;
