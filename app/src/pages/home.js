import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class HomePage extends Component {


  render () {
    return (
        <div className="theme-showcase" role="main">
          <div className="well row">
              <div className="col-md-8"><textarea ui-codemirror className="code-block "></textarea></div>
              <div className="result-block col-md-3"><p>wewooowjajaj</p></div>
          </div>
          <div className="well row">
              <div className="col-md-8"><textarea ui-codemirror className="code-block "></textarea></div>
              <div className="result-block col-md-3"><p>wewooowjajaj</p></div>
          </div>
          <div className="well row">
              <div className="col-md-8"><textarea ui-codemirror className="code-block "></textarea></div>
              <div className="result-block col-md-3"><p>wewooowjajaj</p></div>
          </div>

      </div>
   	);
  };
};
