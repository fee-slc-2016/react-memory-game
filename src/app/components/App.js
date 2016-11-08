"use strict";

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import About from './About';
import Settings from './Settings';
import NotFound from './NotFound';
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
      <Router>
        <div className='container'>
          <Header />
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/settings'>Settings</Link></li>
          </ul>
          <hr />
          <Match exactly pattern='/' component={Board} />
          <Match pattern='/about' component={About}/>
          <Match pattern='/settings' component={Settings}/>
        </div>
      </Router>
    );
  }
}
