import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useInView } from 'react-intersection-observer'
import alt from '../../alt.png'
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '30px',
    threshold: 0,
  })
  const idx = getIndex(url)
  
  return (
    <div className="pokemon" ref={ref}>
      <img className="pokemon-image" src={inView? (imgUrl + idx + '.png') : alt} alt={alt}/>
      <Typography variant="h6" color="inherit" noWrap>
        {capitalizeName(name)}
      </Typography>
    </div>
  );
}

export default Pokemon;
