import React, {Component} from 'react';

import CodeEditor from './codeeditor';
import request from 'superagent';
import map from 'lodash/map';

export default class ExperimentsPage extends Component {

  constructor(props) {
     super(props);
     this.state = {
       experiments: [],
     };
   }

  componentDidMount () {
    request.get('api/experiments')
      .set('Accept', 'application/json')
      .end((err, res) => {
        console.log(res.body);
        this.setState({
          experiments: res.body,
        })
      });
  }
  render () {
    const {experiments} = this.state;
    return (<div>
      <div className="jumbotron">
        {map(experiments, (experiment) => {
          return <CodeEditor {...experiment} />
        })}

      </div>
    </div>);
  }
}