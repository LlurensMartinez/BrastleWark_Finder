import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import GnomeDetails from './pages/GnomeDetails'
import NoMatch from './pages/NoMatch'
import './App.css';

function App() {

  return (
    
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" children={<GnomeDetails />} />
          <Route exact path="*" component={NoMatch} />
      </Switch>
    </Router>

  );
}

export default App;
