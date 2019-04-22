import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';
import MusicCards from './containers/MusicCards';
import FilterComponent from './containers/Filter';
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <FilterComponent/>
        <MusicCards/>
      </div>
    );
  }
}

export default App;