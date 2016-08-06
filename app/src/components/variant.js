import React, {Component} from 'react';
export default class Variant extends Component {

  constructor(props) {
     super(props);
   }

  render () {
    const {code, name} = this.props;
    return (<div className="variant">
              <div className="col-md-8"><textarea ui-codemirror className="code-block ">{code}</textarea></div>
              <div className="result-block col-md-4"><p className="result-block__text">{name} rersult here</p></div>
          </div>);
  }
}
