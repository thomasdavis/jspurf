import React, {Component} from 'react';
import {Link } from 'react-router'

import CodeEditor from './codeeditor';
import request from 'superagent';
import map from 'lodash/map';

export default class ExperimentPage extends Component {

  constructor(props) {
     super(props);
     this.state = {
       experiment: {},
     };
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
    {experiment.name}asdads
    </div>);
  }
}
