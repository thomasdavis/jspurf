import React, {Component} from 'react';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';

import Result from './result';

export default class Variant extends Component {

  constructor(props) {
     super(props);
   }

  render () {
    const {code, name} = this.props;

    const codemirrorOptions = {
      lineNumbers: true
    };

    return (<div className="variant">
            <div className="variant__body row">
              <div className="col-md-8 variant__code">
                <div className="variant__header">
                  <input type="text" placeholder="Untitled variant" value={name} className="variant__header-field" />
                </div>
                <Codemirror className="code-block" value={code} options={codemirrorOptions} />
              </div>
              <div className="result-block variant__result col-md-4">
                <Result />
                {/*<p className="result-block__text">
                </p>*/}
              </div>
            </div>
          </div>);
  }
}
