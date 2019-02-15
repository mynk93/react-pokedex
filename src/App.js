import React from 'react';
import './App.css';
import {Header, PokemonList} from './components';
import useDarkMode from 'use-dark-mode';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {getLightTheme, getDarkTheme} from './utils/theme';

function App () {
  const darkMode = useDarkMode (false);

  return (
    <MuiThemeProvider theme={darkMode.value ? getDarkTheme : getLightTheme}>
      <div className="App">
        <Header darkMode={darkMode} />
        <PokemonList />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
