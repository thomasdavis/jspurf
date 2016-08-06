import React, {Component} from 'react';
export default class InfoBox extends Component {

  constructor(props) {
     super(props);
     this.sayHello = this.sayHello.bind(this);
   }

  sayHello () {
  }

  render () {
    const {name, description} = this.props;

    return (<div>
      <h3><a>{name}</a></h3>
      <p onClick={this.sayHello} className="spiel">
      {description}
      </p>
      <hr />
    </div>);
  }
}
