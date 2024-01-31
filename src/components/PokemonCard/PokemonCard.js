import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

import { CardActionArea, CardActions } from '@mui/material';


const PokemonCard = (props) => {
  function capitalize (word) {
    let firstLetter = word.charAt(0);
    let firstLetterCap = firstLetter.toUpperCase();
    let remainingLetters = word.slice(1);
    let capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
  }


  let name = capitalize(props.pokemon.name)
  let type = props.pokemon.types[0].type.name;
  let types = props.pokemon.types;

  return (
    <div className={`pokemon-card ${type}`}>
      <div className='pokemon-card-details'>
        <h3>{name}</h3>
        {types.map((type) => (
          <div className='type-box'>{type.type.name}</div>
        ))}
      </div>
      <div className='pokemon-card-image'>
        <img src={props.pokemon.sprites.other.home.front_shiny} alt={props.pokemon.name} />
      </div>
    </div>
  )
}

export default PokemonCard