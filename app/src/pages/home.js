import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Variant from '../components/variant';
import ExperimentPage from './experiment';

export default class HomePage extends ExperimentPage {
   componentDidMount () {
       // Default experiment with two variants.
       this.setState({
        variantCount: 2,
        experiment: {
          name: '',
          description: '',
          snippets: [
            {
              code: '',
              name: '',
              experiment_id: null,
            }, 
            {
              code: '',
              name: '',
              experiment_id: null,
            }
          ]
        }
       });
    };
};
