'use strict';

import React from 'react';
import blogdata from './blogdata.json';

console.log(blogdata);

export default class Main extends React.Component {
  render () {
    return (
      <div className="main">
        <h6> the main</h6>
      </div>
    )
  }
}
