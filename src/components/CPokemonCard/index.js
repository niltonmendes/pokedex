import React from 'react';
import Spinner from '../Spinner';
import { PokemonCard, AvatarWrapper, Avatar, PokemonName, PokemonDetails  } from './styles';

const CPokemonCard = (props) => {
    return (
        <PokemonCard 
          key={props.id}
        >
          {props.loading ? (
            <Spinner />
          ) : (
            <>
              <AvatarWrapper>
                <PokemonName>{props.name}</PokemonName>
                <Avatar 
                    src={props.sprite} 
                    alt={props.name}
                />
              </AvatarWrapper>
              <PokemonDetails>
                <span>
                  <strong>Altura: </strong>{props.height * 10} cm
                </span>
                <span>
                  <strong>Peso: </strong>{props.weight / 10} kgs
                </span>
                <span>
                  <strong>Tipo: </strong>{props.type}
                </span>
                <span>
                  <strong>ID: </strong>{props.id}
                </span>
              </PokemonDetails>
            </>
          )}
        </PokemonCard>
    );
}

export default CPokemonCard;
