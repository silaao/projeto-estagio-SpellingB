import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #8acbfa;
  align-items: center;
`;

export const Content = styled.div`
  width: 70vw;
  height: 80vh;
  display: flex;
  flex-direction:column;
  background-color: #ffffff;
  border-radius: 50px;
  box-shadow: 5px 5px 15px #333;

`;
export const Div = styled.div`
  width: 70vw;
  height: 80vh;
  display: flex;
  flex-direction:row;
  background-color: #ffffff;
  /* border-style:solid; */
  border-radius: 50px;

`;

export const Header = styled.h1`
  font-size: 80px;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  /* border-style: solid; */
  border-radius: 50px;
`;

export const Image = styled.img`
  /* border-style: solid; */
  margin-left: 40px;
  width: 150px;
`;
export const ImageBee = styled.img`
/* border-style: solid; */
margin-left:40px;
width: 520px;
height: 520px;
align-self: center;
margin-left: 16%;`;

export const Form = styled.form`
  width: 100%;
  max-width: 350px;
  margin: 0 5%;
  background-color: #8acbfa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-style: solid; */
  height: 65%;
  border-radius: 50px;
  align-self: center;
  box-shadow: 5px 5px 15px #333;
  margin-left: 10%;


`;
export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 60px;
`;

export const Input = styled.input`
  width: 80%;
  max-width: 280px;
  height: 46px;
  border-radius: 8px;
  border: none;
  background-color: #fff;
  margin-bottom: 14px;
  padding: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  font-size: 16px;
`;

export const ButtonSignIn = styled(Link)`
  width: 80%;
  max-width: 280px;
  height: 46px;
  border-radius: 6px;
  border: none;
  background-color: #fff;

  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: black;

  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(94%)
  }

`;

export const ButtonSignUp = styled(Link)`
  width: 80%;
  max-width: 280px;

  font-size: 18px;
  font-weight: 500;
  color: #fff;

  margin-top: 18px;
  cursor: pointer;

  display: flex;
  align-items: center;

  & > svg {
    margin-right: 8px;
  }
`;
