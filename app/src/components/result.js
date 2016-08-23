import React, {Component} from 'react';
import NumberFormat from 'react-number-format';

export default class Variant extends Component {

  constructor(props) {
     super(props);
   }

  render () {
    return (
      <div className="result">
        <span className="result__time"><span className="glyphicon glyphicon-time"></span> <NumberFormat value={2301203102} displayType={'text'} thousandSeperator={true} /></span> <small className="result__suffix">ms</small>
      </div>
    );
  }
}
