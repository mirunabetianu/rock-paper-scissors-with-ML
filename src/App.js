import React from 'react';
import CameraPrediction from './components/CameraPrediction';
import './App.css';
import Game from './components/Game';

const App = () => {
  return (
    <>
      <div className="Main">
        <CameraPrediction />
      </div>
      <Game />
    </>
  );
};

export default App;
