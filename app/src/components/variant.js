import React, {Component} from 'react';
export default class Variant extends Component {

  constructor(props) {
     super(props);
   }

  render () {

    return (<div className="variant">
            
            <div className="variant__body row">
              <div className="col-md-8 variant__code">
                <div className="variant__header">
                  <input type="text" placeholder="Untitled variant" className="variant__header-field" />
                </div>
                <textarea ui-codemirror className="code-block "></textarea>
              </div>
              <div className="result-block variant__result col-md-4"><p className="result-block__text">awesome rersult here</p></div>
            </div>
          </div>);
  }
}
