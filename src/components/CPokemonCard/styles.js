import styled from 'styled-components';

export const PokemonCard = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 400px;
  justify-content: space-evenly;
  background: rgba(90, 90, 90, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const AvatarWrapper = styled.div`
  text-align: center;
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 40px;
`;

export const Avatar = styled.img`
  height: 230px;
  width: 230px;
`;

export const PokemonDetails = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  font-size: 16px;
`;