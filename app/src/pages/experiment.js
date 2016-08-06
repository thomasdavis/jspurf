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
    return (<div>
      <button onClick={this.runBenchmark}>RUN THE FUCKING TEST</button>
    {experiment.name}asdads
    {experiment.snippets && map(experiment.snippets, (snippet) => {
      return <Variant {...snippet} />
    })}
    </div>);
  }
}
