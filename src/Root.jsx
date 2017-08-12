import React, { Component } from 'react';
import { render } from 'react-dom';

import './Root.scss';

class Root extends Component {
  render() {
    return <p>Hello React!</p>;
  }
}

render(<Root />, document.getElementById('root'));
