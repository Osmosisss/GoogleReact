import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

import SearchBar from './searchBar';


export default class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <SearchBar />
       <Footer />
      </div>
    );
  }
}