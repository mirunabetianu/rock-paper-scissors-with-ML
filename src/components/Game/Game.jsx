import React, { useEffect, useState } from 'react';
import { Command, CommandsContainer, Container, MoveContainer, Score, Title } from './elements';
import Move from './Move';
import { createStructuredSelector } from 'reselect';
import { selectComputerScore, selectIsPlaying, selectMove, selectPlayerScore } from '../../state/game/game.selector';
import { connect } from 'react-redux';
import { computerWin, pauseGame, playerWin, resumeGame, startGame, stopGame } from '../../state/game/game.actions';
import moves from '../_shared/moves';

const createComputerMove = () => {
  let computerRandomNumber = Math.floor(Math.random() * 3);
  switch (computerRandomNumber) {
    case 0:
      return moves.Paper;
    case 1:
      return moves.Rock;
    default:
      return moves.Scissors;
  }
};

// 0 = player win; 1 = draw; 2 = computer win
const resultOfGame = (playerMove, computerMove) => {
  if (playerMove === computerMove) {
    return 1;
  }

  if (playerMove === moves.Scissors) {
    if (computerMove === moves.Rock) {
      return 2;
    }
    return 0;
  }

  if (playerMove === moves.Rock) {
    if (computerMove === moves.Paper) {
      return 2;
    }
    return 0;
  }

  if (playerMove === moves.Paper) {
    if (computerMove === moves.Scissors) {
      return 2;
    }
    return 0;
  }
};

const Game = ({ move, computerScore, playerScore, isPlaying, playerWin, computerWin, pauseGame, resumeGame, startGame, stopGame }) => {
  const seconds = 3;
  const [resultMessage, setResultMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [computerMove, setComputerMove] = useState(createComputerMove());
  const [gameStarted, setGameStarted] = useState(false);
  useEffect(() => {
    if (!isPlaying) return;
    if (!move) return;
    if (timeLeft === -1) {
      setTimeLeft(seconds);
      setComputerMove(() => {
        const c = createComputerMove();
        let result = resultOfGame(move, c);
        switch (result) {
          case 0:
            playerWin();
            pauseGame();
            setResultMessage('Player Wins!');
            break;
          case 2:
            computerWin();
            pauseGame();
            setResultMessage('Computer Wins!');
            break;
          case 1:
            setResultMessage('Draw!');
            pauseGame();
            break;
          default:
            return c;
        }
        return c;
      });
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, isPlaying, move]);

  return (
    <Container>
      <Title>TIMER: 0{timeLeft}:00</Title>
      <MoveContainer>
        <Move selected={move} title={'Player'} />
        <Score>{playerScore} - {computerScore} <br /> {resultMessage}</Score>
        <Move selected={computerMove} shuffle={isPlaying && move} title={'Computer'} />
      </MoveContainer>
      <CommandsContainer>
        {!gameStarted && <Command onClick={() => {
          startGame();
          setGameStarted(true);
        }}>START GAME</Command>}
        {gameStarted && <Command onClick={() => resumeGame()}>NEW GAME</Command>}
      </CommandsContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  move: selectMove,
  computerScore: selectComputerScore,
  playerScore: selectPlayerScore,
  isPlaying: selectIsPlaying
});

const mapDispatchToProps = dispatch => ({
  pauseGame: () => dispatch(pauseGame()),
  resumeGame: () => dispatch(resumeGame()),
  playerWin: () => dispatch(playerWin()),
  computerWin: () => dispatch(computerWin()),
  startGame: () => dispatch(startGame()),
  stopGame: () => dispatch(stopGame())
});
export default connect(mapStateToProps, mapDispatchToProps)(Game);
