import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search-bar';
import MusicCards from './containers/music-cards';
import FilterComponent from './containers/filter';
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
