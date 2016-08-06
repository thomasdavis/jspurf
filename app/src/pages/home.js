import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Variant from '../components/variant';

export default class HomePage extends Component {


  render () {
    return (
        <div className="experiment" role="main">
          <div className="experiment__variant">
              <Variant />
          </div>
          <div className="experiment__variant">
              <Variant />
          </div>
          <div className="experiment__variant">
              <Variant />
          </div>
      </div>
   	);
  };
};
