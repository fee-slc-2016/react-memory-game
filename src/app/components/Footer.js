'use strict';

import React from 'react';

export default class Footer extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div className='footer'>
        <h6>Info</h6>
            <p>Name: {this.props.name}</p>
            <p>address: {this.props.address}</p>
            <p>city: {this.props.city}</p>
            <p>State: {this.props.state}</p>
            <p>Phone: {this.props.phone}</p>
            <p>Email: {this.props.email}</p>
      </div>
    );
  }
}
