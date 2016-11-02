"use strict";

import React from 'react';

import Header from './Header';

import AppSass from './App.sass';

import Footer from './Footer';

import Aside from './Aside';

import Main from './Main';


export default class App extends React.Component {
  render () {

    return (
      <div className='container'>
        <Header />

        <Aside />

        <Main />

        <Footer />

      </div>
    );
  }
}



// var user = {
//   name: "Trevor Rapp",
//   address: "123 street",
//   city: "West Valley",
//   state: "Utah",
//   phone: "(208) 201-0498",
//   email: "trrapp@gmail.com",
// }
