import { React, useState, useEffect, useRef, useReducer } from 'react';
import { Stage, Sprite, withFilters, Container, useTick } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import './gameScreen.css';
import { GameBackground } from '../../components';

import playerCarCenter from '../../assets/cars/car_center.png';
import playerCarLeft from '../../assets/cars/car_left.png';
import playerCarRight from '../../assets/cars/car_right.png';
// import enemyCarCenter from '../../assets/cars/car_center.png';
// import enemyCarLeft from '../../assets/cars/car_left.png';
// import enemyCarRight from '../../assets/cars/car_right.png';

const GameScreen = () => {
  const stageWidth = 1000;
  const stageHeight = 600;

  const playerCarXCenter = stageWidth / 2 - 10;
  const playerCarXRight = playerCarXCenter + 130;
  const playerCarXLeft = playerCarXCenter - 130;
  let currentLocation = 'center';

  const [x, setX] = useState(playerCarXCenter);
  const [playerCarImg, setPlayerCarImg] = useState(playerCarCenter);

  const movePlayerCar = (updateState, updateLocation, updateImg) => {
    setX(updateState);
    currentLocation = updateLocation;
    setPlayerCarImg(updateImg);
  };

  const handleKeyPress = (event) => {
    if (currentLocation === 'center') {
      if (event.key === 'ArrowRight') {
        movePlayerCar(playerCarXRight, 'right', playerCarRight);
      }
      if (event.key === 'ArrowLeft') {
        movePlayerCar(playerCarXLeft, 'left', playerCarLeft);
      }
    } else if (currentLocation === 'right') {
      if (event.key === 'ArrowLeft') {
        movePlayerCar(playerCarXCenter, 'center', playerCarCenter);
      }
    } else if (currentLocation === 'left') {
      if (event.key === 'ArrowRight') {
        movePlayerCar(playerCarXCenter, 'center', playerCarCenter);
      }
    } else {
      movePlayerCar(playerCarXCenter, 'center', playerCarCenter);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <Stage
      className="game-screen"
      width={stageWidth}
      height={stageHeight}
      options={{ backgroundColor: 0x000000 }}
      onKeyDown={handleKeyPress}
    >
      <GameBackground />
      {/* Player Car */}
      <Sprite image={playerCarImg} scale={0.35} anchor={0.5} x={x} y={520} />
    </Stage>
  );
};

export default GameScreen;
