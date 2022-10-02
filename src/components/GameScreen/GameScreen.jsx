import { React, useState, useEffect, useRef, useReducer } from 'react';
import { Stage, Sprite, withFilters, Container, useTick } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import bgRoad from '../../assets/road.png';
import bgSky from '../../assets/sky.png';
import playerCarCenter from '../../assets/cars/car_center.png';
import playerCarLeft from '../../assets/cars/car_left.png';
import playerCarRight from '../../assets/cars/car_right.png';
import enemyCarCenter from '../../assets/cars/car_center.png';
import enemyCarLeft from '../../assets/cars/car_left.png';
import enemyCarRight from '../../assets/cars/car_right.png';

const playerControls = (e) => {
  if (e.key === 'ArrowRight') e.x += 100;
};

const GameScreen = () => {
  const stageWidth = 1200;
  const stageHeight = 650;

  const playerCarX = stageWidth / 2 - 10;
  const playerCarLeft = playerCarX + 150;
  const playerCarRight = playerCarX - 150;
  const isPlayerCenter = true;

  const [x, setX] = useState(playerCarX);

  const Filters = withFilters(Container, {
    blur: PIXI.filters.BlurFilter,
  });
  // TODO: Change car img when turning car
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      setX(playerCarLeft);
    }
    if (event.key === 'ArrowLeft') {
      setX(x - 150);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="game-screen">
      <Stage
        width={stageWidth}
        height={stageHeight}
        options={{ backgroundColor: 0x000000 }}
        onKeyDown={handleKeyPress}
      >
        {/* BgSky */}
        <Filters blur={{ blur: 0 }}>
          <Sprite image={bgSky} width={stageWidth} height={stageHeight / 1.5} />
        </Filters>
        {/* BgRoad */}
        <Sprite
          image={bgRoad}
          width={stageWidth}
          height={stageHeight / 2.75}
          y={stageHeight / 1.55}
        />
        <Sprite image={playerCarCenter} scale={0.45} anchor={0.5} x={x} y={535} />
      </Stage>
    </div>
  );
};

export default GameScreen;
