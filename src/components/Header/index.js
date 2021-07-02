import React from 'react';
import { Welcome, Instructions } from './styles';

const Header = () => {
    return (
        <>
            <Welcome>Seja bem-vindo à Pokedex!</Welcome>
            <Instructions>Digite o nome ou id de um pokemon para começar.</Instructions>
        </>
    );
}

export default Header;