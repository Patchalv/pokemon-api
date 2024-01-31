import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PokemonCard from '../PokemonCard/PokemonCard';


const PokemonList = (props) => {
  return (
    <div className='pokemon-list-container'>
      {props.pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonList