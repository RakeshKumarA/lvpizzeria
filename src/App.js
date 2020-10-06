import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './layout/Contact';
import HomePage from './layout/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
