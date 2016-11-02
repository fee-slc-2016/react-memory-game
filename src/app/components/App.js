"use strict";

import React from 'react';

import Header from './Header';

import AppSass from './App.sass';

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
      </div>
    );
  }
}
