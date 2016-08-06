import React from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from './codeeditor';


var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-logo"><img src="public/images/logo.png" className="navbar-logo__image" alt="JsPurf cat" height="100%"/> JSPurf.</div>
            </div>
            <div id="navbar" className="navbar-collapse collapse">

            </div>
          </div>
        </nav>

        <div className="container theme-showcase" role="main">

          <div className="jumbotron">
            <h1>jspurf</h1>
            <p> Do something with the cat here</p>
            <CodeEditor />
            <CodeEditor />
            <CodeEditor />
            <CodeEditor />
            <CodeEditor />
            <CodeEditor />
            <CodeEditor />
            <CodeEditor />
          </div>

          <div className="well">
            <div ng-controller="codeCtrl">
              <textarea ui-codemirror ng-model="code" className="code-block"></textarea>
            </div>
          </div>
          <div className="well">
            <div ng-controller="codeCtrl">
              <textarea ui-codemirror ng-model="code" className="code-block"></textarea>
            </div>
          </div>
          <div className="well">
            <div ng-controller="codeCtrl">
              <textarea ui-codemirror ng-model="code" className="code-block"></textarea>
            </div>
          </div>

        </div>
      </div>
   	);
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
