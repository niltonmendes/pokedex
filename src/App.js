import React, { useState } from 'react';
import api from './services/api';
import Header from './components/Header';
import CForm from './components/CForm';
import CPokemonCard from './components/CPokemonCard';

import GlobalStyles from './styles/global';
import Wrapper from './styles/styles';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [typedPokemon, setTypedPokemon] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setTypedPokemon(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!typedPokemon) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.get(`/pokemon/${typedPokemon}`);
      setPokemon(response.data);
      setError(null);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      setError('Pokemon não encontrado!');
      setIsLoading(false);
      setPokemon(null);
    }
  };

  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <CForm 
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={typedPokemon}
        loading={isLoading}
      />
      {error && <span>{error}</span>}      
      {pokemon && (
        <CPokemonCard 
          id={pokemon.id}
          loading={isLoading}
          name={pokemon.name}
          sprite={pokemon.sprites['front_default']}
          type={pokemon.types[0].type.name}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      )}
    </Wrapper>    
  );
}

export default App;
