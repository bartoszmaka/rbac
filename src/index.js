import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Callback from './pages/callback';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App container">
      <Auth>
        <div className="jumbotron">
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/callback" component={Callback}/>
            </Switch>
          </Router>
        </div>
      </Auth>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
