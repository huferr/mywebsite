import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;

export const BouncyDiv = styled.div`
  animation: infinite 2s ${bounceAnimation};
  margin-top: 100px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #201E1E;
`;

export const Content = styled.main`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Bold = styled.strong`
  background: linear-gradient(50deg, #53cadf, #fff385, #ff66b0);
  background-clip: text  !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent  !important;
`;

export const ButtonsContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  @media only screen and (max-width: 765px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 150px;
  };
`;

export const Button = styled.a`
  width: 170px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  :hover {
    background-color: #dfdede;
    transition: all 0.3s;
  }

  @media only screen and (max-width: 960px) {
    width: 130px;
    font-size: 13px;
  };
`;
