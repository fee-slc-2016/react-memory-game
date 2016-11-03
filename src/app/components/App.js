"use strict";

import React from 'react';

import Board from './Board';
import Header from './Header';

import AppSass from './App.sass';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {
        size: 8,
      }
    }
  }
  render () {
    return (
      <div className='container'>
        <Header />
        <Board board={this.state.board} />
      </div>
    );
  }
}
