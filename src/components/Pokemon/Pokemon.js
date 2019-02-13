import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {useInView} from 'react-intersection-observer';
import useHover from '../../hooks/useHover';
import './Pokemon.css';

const imgUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const capitalizeName = name => {
  return name.charAt (0).toUpperCase () + name.slice (1);
};

const getIndex = data => {
  let url = data.replace (/\/$/, '');
  return url.substr (url.lastIndexOf ('/') + 1);
};

const Pokemon = props => {
  const {name, url} = props.data;
  const [ref, inView] = useInView ({
    triggerOnce: true,
    rootMargin: '20px',
    threshold: 0,
  });
  const [hoverRef, isHovered] = useHover ();
  const idx = getIndex (url);

  return (
    <div ref={hoverRef}>
      <Paper className="pokemon" elevation={isHovered ? 8 : 3}>
        <img
          className="pokemon-image"
          ref={ref}
          src={inView ? imgUrl + idx + '.png' : imgUrl + 0 + '.png'}
          alt={name}
        />
        <Typography variant="h6" color="inherit" noWrap>
          {capitalizeName (name)}
        </Typography>
      </Paper>
    </div>
  );
};

export default Pokemon;
