import React, { Component } from 'react';
import { render } from 'react-dom';

import './Root.scss';

class Root extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.count}
        </div>
        <button onClick={this.increaseCount}>Click</button>
      </div>
    );
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}

render(<Root />, document.getElementById('root'));
