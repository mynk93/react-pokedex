import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Pokemon.css';

const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const capitalizeName = (name) => {
  return (name.charAt(0).toUpperCase() + name.slice(1));
}

const getIndex = (data) => {
  let url = data.replace(/\/$/, '');
  return (url.substr(url.lastIndexOf('/') + 1))
}

const Pokemon = props => {
  const {name, url} = props.data;
  const idx = getIndex(url)
  
  return (
    <div className="pokemon">
      <img className="pokemon-image" src={imgUrl + idx + '.png'}/>
      <Typography variant="h6" color="inherit" noWrap>
        {capitalizeName(name)}
      </Typography>
    </div>
  );
}

export default Pokemon;
