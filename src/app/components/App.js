"use strict";

import React from 'react';

import Header from './Header';

<<<<<<< Updated upstream
import AppSass from './App.sass';
=======
import Footer from './Footer';

import Aside from './Aside';
>>>>>>> Stashed changes

export default class App extends React.Component {
  render () {
    var user = {
      name: "Trevor Rapp",
      address: "123 street",
      city: "West Valley",
      state: "Utah",
      phone: "(208) 201-0498",
      email: "trrapp@gmail.com",
    }
    return (
      <div className='container'>
        <Header />

        <Aside />

        <Footer />
      </div>
    );
  }
}
