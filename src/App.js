import { React, useRef, useReducer } from 'react';
import { Stage, Sprite, Container, useTick } from '@inlet/react-pixi';
import { GameScreen } from './components';
const App = () => {
  return (
    <div className="App">
      <GameScreen />
    </div>
  );
};

export default App;
