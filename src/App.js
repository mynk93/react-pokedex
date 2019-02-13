import React from 'react';
import './App.css';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

const App = props => {
  return (
    <div className="App">
      <Header />
      <PokemonList />
    </div>
  );
};

export default App;
