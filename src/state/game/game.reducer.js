import GameTypes from './game.types';

const INITIAL_STATE = {
  isPlaying: false,
  computerScore: 0,
  playerScore: 0,
  selectedMove: null
};

const gameReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GameTypes.START_GAME:
      return {
        ...state,
        isPlaying: true,
        computerScore: 0,
        playerScore: 0,
        selectedMove: null,
      };
    case GameTypes.STOP_GAME:
      return {
        ...state,
        isPlaying: false,
        computerScore: 0,
        playerScore: 0,
        selectedMove: null,
      };
    case GameTypes.RESUME_GAME:
      return {
        ...state,
        isPlaying: true
      };
    case GameTypes.PAUSE_GAME:
      return {
        ...state,
        isPlaying: false
      };
    case GameTypes.COMPUTER_WIN:
      return {
        ...state,
        computerScore: state.computerScore + 1
      };
    case GameTypes.PLAYER_WIN:
      return {
        ...state,
        playerScore: state.playerScore + 1
      };
    case GameTypes.SET_MOVE:
      return {
        ...state,
        selectedMove: payload
      };
    default:
      return state;
  }
};

export default gameReducer;