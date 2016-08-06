import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class HomePage extends Component {


  render () {
    return (
        <div className="theme-showcase" role="main">
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
   	);
  };
};
