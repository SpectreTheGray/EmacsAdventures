import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const neonGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff0, 0 0 40px #f0f, 0 0 70px #0ff;
  }
  50% {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff0, 0 0 40px #f0f, 0 0 40px #0ff;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Press Start 2P', cursive;
  background-color: #000;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  animation: ${neonGlow} 1.5s ease-in-out infinite alternate;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
`;

const StartButton = styled(Link)`
  background-color: #ff0;
  color: #000;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  animation: ${neonGlow} 1.5s ease-in-out infinite alternate;

  &:hover {
    background-color: #ffd700;
  }
`;

const WelcomePage = () => {
  return (
    <Container>
      <Title>Welcome to Emacs Adventure!</Title>
      <Subtitle>VMVP 🚩</Subtitle>
      <StartButton to="/level1">Start Game</StartButton>
    </Container>
  );
};

export default WelcomePage;
