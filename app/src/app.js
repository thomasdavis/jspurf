import React, {Component} from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


import HomePage from './pages/home';
import ExperimentsPage from './pages/experiments';
import ExperimentPage from './pages/experiment';

class App extends Component {

  constructor(props) {
     super(props);
   }

  render () {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-header">
            <div className="navbar-logo"><img src="/public/images/logo.png" className="navbar-logo__image" alt="JsPurf cat" height="100%"/> JSPurf.</div>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><Link to="">Home</Link></li>
              <li><Link to="/experiments">Experiments</Link></li>
            </ul>
          </div>
        </nav>

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
      <Route path="experiments/:id" component={ExperimentPage} />
    </Route>
  </Router>
), document.getElementById('app'))
