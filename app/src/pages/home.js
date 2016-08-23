import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Variant from '../components/variant';

export default class HomePage extends Component {


  render () {
    return (
        <div className="experiment-wrapper row">
          <div className="experiment-meta col-md-2">
            <h1 className="experiment-meta__title">Javascript Benchmark Experiment</h1>
            <div className="experiment-meta__field">
              <label htmlFor="experiment_name" className="hidden">Experiment name:</label>
              <input type="text" id="experiment_name" placeholder="Untitled experiment" className="experiment-meta__field-item" />
            </div>

            <div className="experiment-meta__field">
              <label htmlFor="experiment_description" className="hidden">Experiment name:</label>
              <textarea id="experiment_name" placeholder="No description" className="experiment-meta__field-item" />
            </div>

            <div className="btn-group">
              <button className="btn btn-primary">Run experiment</button>
              <button className="btn btn-success">Add variant</button>
            </div>
          </div>
          <div className="experiment col-md-10" role="main">
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
      </div>
   	);
  };
};
