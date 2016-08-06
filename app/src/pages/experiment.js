import React, {Component} from 'react';
import {Link } from 'react-router'
import CodeEditor from './codeeditor';
import request from 'superagent';
import map from 'lodash/map';
import each from 'lodash/each';
import Variant from '../components/variant';
var _ = require('lodash');
var process = require('process');
var Benchmark = require('benchmark');
Benchmark = Benchmark.runInContext({ _: _, process: process });
window.Benchmark = Benchmark;



export default class ExperimentPage extends Component {

  constructor(props) {
     super(props);
     this.runBenchmark = this.runBenchmark.bind(this);
     this.state = {
       experiment: {},
     };
   }

   runBenchmark () {
     var suite = new Benchmark.Suite();
      // add tests
      const snippets = this.state.experiment.snippets;
      each(snippets, (snippet) => {
        suite.add(snippet.name, function() {
          eval(snippet.code);
        })
      })
      suite.on('cycle', function(event) {
        console.log(String(event.target));
      })
      .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
      })
      // run async
      .run({ 'async': true });

   }

   componentDidMount () {
     request.get('/api/experiments/' + this.props.params.id)
       .set('Accept', 'application/json')
       .end((err, res) => {
         console.log(res.body);
         this.setState({
           experiment: res.body,
         })
       });
    };

  render () {
    const {experiment} = this.state;

    return (  <div className="experiment-wrapper row">
        <div className="experiment-meta col-md-2">
          <h1 className="experiment-meta__title">Javascript Benchmark Experiment</h1>
          <div className="experiment-meta__field">
            <label for="experiment_name" className="hidden">Experiment name:</label>
            <input type="text" id="experiment_name" value={experiment.name} placeholder="Untitled experiment" className="experiment-meta__field-item" />
          </div>

          <div className="experiment-meta__field">
            <label for="experiment_description" className="hidden">Experiment name:</label>
            <textarea id="experiment_name" value={experiment.description}  placeholder="No description" className="experiment-meta__field-item" />
          </div>

          <div className="btn-group">
            <button className="btn btn-primary" onClick={this.runBenchmark}>Run experiment</button>
            <button className="btn btn-success">Add variant</button>
          </div>
        </div>
        <div className="experiment col-md-10" role="main">
          {experiment.snippets && map(experiment.snippets, (snippet) => {
            return (
                <div className="experiment__variant">
                  <Variant {...snippet} />
                </div>)
          })}
        </div>
    </div>)
  }
}
