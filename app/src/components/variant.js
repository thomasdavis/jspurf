import React, {Component} from 'react';
export default class Variant extends Component {

  constructor(props) {
     super(props);
   }

  render () {

    return (<div className="variant">
              <div className="col-md-8"><textarea ui-codemirror className="code-block "></textarea></div>
              <div className="result-block col-md-4"><p className="result-block__text">awesome rersult here</p></div>
          </div>);
  }
}
