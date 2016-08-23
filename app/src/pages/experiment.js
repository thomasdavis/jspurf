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
       running: false
     };
   }

   runBenchmark () {
     var suite = new Benchmark.Suite();

     this.setState({
     	running: true
     });

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
        this.setState({
	     	running: false
	     });
      })
      // run async
      .run({ 'async': true });

   }

   addVariant () {

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

    return (  <div className="experiment-wrapper container-fluid">
    	<div className="row experiment-toolbar">
    		<form className="input-group experiment-toolbar__run-box">
	    		<input type="number" className="form-control experiment-toolbar__run-multiplier" />
	    		<label className="experiment-toolbar__multiplier-label">x</label>
	    		<div className="input-group-btn">
	    			<button className="btn btn-success" onClick={this.runBenchmark}>Run <small>▶</small></button>
	    		</div>
    		</form>
    	</div>
    	<div className="row experiment-main">
	        <div className="experiment-meta col-md-2">
	          <div className="experiment-meta__field">
	            <label htmlFor="experiment_name" className="hidden">Experiment name:</label>
	            <input type="text" id="experiment_name" value={experiment.name} placeholder="Untitled experiment" className="experiment-meta__field-item" />
	          </div>

	          <div className="experiment-meta__field">
	            <label htmlFor="experiment_description" className="hidden">Experiment name:</label>
	            <textarea id="experiment_name" value={experiment.description}  placeholder="No description" className="experiment-meta__field-item" />
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
        </div>
        <div className="experiment-footer col-md-10 col-md-push-2">
        	<div className="variant-dummy row">
              <div className="col-md-8 variant-dummy__code">
              	<div className="variant-dummay__code-title"></div>
              </div>
              <div className="variant-dummy__result col-md-4"></div>
	        </div>
        	<button className="btn btn-primary experiment-footer__item" onClick={this.addVariant}><small>+</small> Add variant</button>
        </div>
    </div>)
  }
}
