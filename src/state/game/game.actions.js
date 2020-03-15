import GameTypes from './game.types';

export const playerWin = () => ({
  type: GameTypes.PLAYER_WIN
});

export const computerWin = () => ({
  type: GameTypes.COMPUTER_WIN
});

export const startGame = () => ({
  type: GameTypes.START_GAME
});

export const stopGame = () => ({
  type: GameTypes.STOP_GAME
});

export const pauseGame = () => ({
  type: GameTypes.PAUSE_GAME
});

export const resumeGame = () => ({
  type: GameTypes.RESUME_GAME
});

export const setMove = (move) => ({
  type: GameTypes.SET_MOVE,
  payload: move
});