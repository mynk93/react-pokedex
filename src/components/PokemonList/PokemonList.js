import React, {useState, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import Paper from '@material-ui/core/Paper';
import {Loader, Pokemon} from '../';
import axios from 'axios';
import './PokemonList.css';

function PokemonList () {
  const [pokemonList, setData] = useState ([]);
  const [url, setNextUrl] = useState (
    'https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0'
  );
  const [isLoading, setIsLoading] = useState (false);
  const [isError, setIsError] = useState (false);
  const [ref, inView] = useInView({
    threshold: [0.3]
  })

  const fetchData = async () => {
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
    <Paper className="pokemon-list" elevation={0}>
      {pokemonList.map (pokemon => (
        <Pokemon data={pokemon} key={pokemon.name} />
      ))}
      <div className="infinite-scroll" ref={ref}>
        {isLoading ? <Loader /> : null}
        {inView && !isLoading && !isError ? fetchData() : null}
      </div>
    </Paper>
  );
}

export default PokemonList;
