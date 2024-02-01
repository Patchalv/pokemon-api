import React from 'react';

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
          <div className='type-box' key={type.type.name}>{type.type.name}</div>
        ))}
      </div>
      <div className='pokemon-card-image'>
        <span className='pokemon-number'>#{props.pokemon.id}</span>
        <img src={props.pokemon.sprites.other.home.front_shiny} alt={props.pokemon.name} />
      </div>
    </div>
  )
}

export default PokemonCard