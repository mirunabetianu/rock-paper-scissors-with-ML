import { createSelector } from 'reselect';

export const selectGame = state => state.game;

export const selectIsPlaying = createSelector(
  selectGame,
  game => game.isPlaying
);

export const selectComputerScore = createSelector(
  selectGame,
  game => game.computerScore
);

export const selectPlayerScore = createSelector(
  selectGame,
  game => game.playerScore
);

export const selectMove = createSelector(
  selectGame,
  game => game.selectedMove
);