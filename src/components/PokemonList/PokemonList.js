import React, { useState, useEffect } from 'react';
import Pokemon from '../Pokemon';
import './PokemonList.css'
import axios from 'axios';

function PokemonList() {

  const [pokemonList, setData] = useState([]);
  const [url, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);

      setData(result.data.results);
      setNextUrl(result.next)
    } catch(error) {
        setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <div className="pokemon-list">
      {isLoading ? (<div>Loading ...</div>) : pokemonList.map(pokemon => <Pokemon data={pokemon} key={pokemon.name}/>)}
    </div>
  );
}

export default PokemonList;
