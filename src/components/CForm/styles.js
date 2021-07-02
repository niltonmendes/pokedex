import styled, { css } from "styled-components";
import { shade } from 'polished';

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  height: 60px;
`;

export const Input = styled.input`
  height: 50px;
  font-size: 1.2em;
  padding: 0 24px;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 2px solid #fff;
  border-right: 0;
  text-transform: lowercase;
  ${(props) =>
    props.hasError &&
    css`
      border: 2px solid red;
    `}
`;

export const Button = styled.button`
  width: 210px;
  background: #e3350c;
  border-radius: 0 5px 5px 0;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;
  height: 50px;
  img {
    margin-left: 5px;
    height: 20px;
    width: 20px;
    vertical-align: bottom;
  }
  &:hover {
    background: ${shade(0.2, '#E3350C')};
  }
`;