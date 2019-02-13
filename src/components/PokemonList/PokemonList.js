import React, {useState, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pokemon from '../Pokemon';
import './PokemonList.css';
import axios from 'axios';

function PokemonList () {
  const [pokemonList, setData] = useState ([]);
  const [url, setNextUrl] = useState (
    'https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0'
  );
  const [isLoading, setIsLoading] = useState (false);
  const [isError, setIsError] = useState (false);
  const [ref, inView] = useInView ({});

  const fetchData = async () => {
    console.log ('fetch data called');
    setIsError (false);
    setIsLoading (true);

    try {
      const result = await axios (url);

      setData (pokemonList.concat (result.data.results));
      setNextUrl (result.data.next);
    } catch (error) {
      console.log (error);
      setIsError (true);
    }
    setIsLoading (false);
  };

  useEffect (() => {
    fetchData ();
  }, []);

  return (
    <div className="pokemon-list">
      {pokemonList.map (pokemon => (
        <Pokemon data={pokemon} key={pokemon.name} />
      ))}
      <div className="infinite-scroll" ref={ref}>
        {isLoading ? <CircularProgress /> : null}
        {inView && !isLoading && !isError ? fetchData () : null}
      </div>
    </div>
  );
}

export default PokemonList;
