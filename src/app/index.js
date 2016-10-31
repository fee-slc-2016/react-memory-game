'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Header} from './components/Header';

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <p>Hello World</p>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
