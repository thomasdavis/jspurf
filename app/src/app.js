import React from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from './codeeditor';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-logo"><img src="public/images/logo.png" className="navbar-logo__image" alt="JsPurf cat" height="100%"/> JSPurf.</div>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
            </div>
          </div>
        </nav>
        <div className="page-main">
          <div ng-controller="codeCtrl" className="code-block-wrapper">
            <textarea ui-codemirror ng-model="code" className="code-block"></textarea>
          </div>
          <div ng-controller="codeCtrl" className="code-block-wrapper">
            <textarea ui-codemirror ng-model="code" className="code-block"></textarea>
          </div>
          <div ng-controller="codeCtrl" className="code-block-wrapper">
            <textarea ui-codemirror ng-model="code" className="code-block"></textarea>
          </div>
        </div>
    </div>
   	);
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
