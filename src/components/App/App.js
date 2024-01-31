import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import PokemonList from "../PokemonList/PokemonList";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
			const data = await response.json();

			const pokeResponses = data.results.map((item) =>
				fetch(item.url).then((res) => res.json())
			);
      const pokemonsData = await Promise.all(pokeResponses);
      console.log(pokemonsData)
      setPokemons(pokemonsData)
    }
    getPokemons();

  }, []);

  return (
    <div>
      <Header />
      <PokemonList pokemons={pokemons} />
    </div>
  );
};


export default App;
/*
{pokemons.map((pokemon) => (
  <PokemonCard key={pokemon.id} pokemon={pokemon} />)
)}
*/