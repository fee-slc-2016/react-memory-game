'use strict';

import React from 'react';
import blogdata from './blogdata.json';

console.log(blogdata);

export default class Main extends React.Component {
  render () {
    return (
      <div className="main">
        <h6> {blogdata[0].title}</h6>
        <p>{blogdata[0].posted.day}</p>
      </div>
    )
  }
}
