import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 60px;
`;

export const MoveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Score = styled.div`
  font-size: 64px;
  color: #121212;
`;

export const Title = styled.h1`
  color: #303944;
  text-align: center;
  font-size: 35px;
`;

export const CommandsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const Command = styled.button`
  border: 2px solid #121212;
  padding: 25px 15px;
  margin-left: 15px;
  background: transparent;
  color: #121212;
  font-weight: bold;
  border-radius: 7px;
  cursor: pointer;
  outline: 0;
  
  &:hover {
    color: white;
    background-color: #121212;
  }
`;