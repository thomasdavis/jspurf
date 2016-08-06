import React, {Component} from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


import HomePage from './pages/home';
import ExperimentsPage from './pages/experiments';

class App extends Component {

  constructor(props) {
     super(props);
   }

  render () {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-logo"><img src="/public/images/logo.png" className="navbar-logo__image" alt="JsPurf cat" height="100%"/> JSPurf.</div>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
            </div>
          </div>
        </nav>

        <div className="jumbotron">
          <h1>jspurf</h1>
          <p> Do something with the cat here</p>
          <Link to="">Home</Link>
          <Link to="experiments">Experiments</Link>
        </div>
        <div className="page">
          {this.props.children}
        </div>
    </div>
   	);
  };
};

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="experiments" component={ExperimentsPage} />
    </Route>
  </Router>
), document.getElementById('app'))
