import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import PokemonList from "../PokemonList/PokemonList";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';



const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [pokemonsToShow, setPokemonsToShow] = useState(pokemons);

  const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const data = await response.json();

    const pokeResponses = data.results.map((item) =>
      fetch(item.url).then((res) => res.json())
    );
    const pokemonsData = await Promise.all(pokeResponses);
    console.log(pokemonsData)
    setPokemons(pokemonsData)
    setPokemonsToShow(pokemonsData)
  }

  const filterPokemonsByType = () => {
    setSearchText('');
    if (selectedType === 'all') {
      setPokemonsToShow(pokemons);
    } else {
      setPokemonsToShow(pokemons.filter((pokemon) => pokemon.types[0].type.name === selectedType))
    }
  };

  const filterPokemonsByName = () => {
    setSelectedType('all')
    let typedName = searchText;
    setPokemonsToShow(
      pokemons.filter((pokemon) => pokemon.name.includes(typedName))
    )
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    if (searchText !== '') filterPokemonsByName();
  }


  useEffect(() => { 
    getPokemons();
  }, []);

  useEffect(() => { 
    filterPokemonsByType();
  }, [selectedType]);

  return (
    <div>
      <Header />
      <div className="search-container">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { mr: 1, width: '40ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" value={searchText} onChange={handleSearchText} />
        </Box>
          <FormControl fullWidth>
            <InputLabel id="type-select-label">Type</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              value={selectedType}
              label="Type"
              onChange={e => setSelectedType(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="grass">Grass</MenuItem>
              <MenuItem value="fire">Fire</MenuItem>
              <MenuItem value="water">Water</MenuItem>
              <MenuItem value="bug">Bug</MenuItem>
              <MenuItem value="normal">Normal</MenuItem>
              <MenuItem value="poison">Poison</MenuItem>
              <MenuItem value="electric">Electric</MenuItem>
              <MenuItem value="ground">Ground</MenuItem>
              <MenuItem value="fairy">Fairy</MenuItem>
              <MenuItem value="fighting">Fighting</MenuItem>
              <MenuItem value="psychic">Pyschic</MenuItem>
              <MenuItem value="ghost">Ghost</MenuItem>
              <MenuItem value="rock">Rock</MenuItem>
              <MenuItem value="ice">Ice</MenuItem>
              <MenuItem value="dragon">Dragon</MenuItem>

            </Select>
          </FormControl>
      </div>
      <PokemonList pokemons={pokemonsToShow} />
    </div>
  );
};


export default App;
