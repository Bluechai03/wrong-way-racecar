import React from 'react';
import { Stage, Sprite, useTick } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import bgRoad from '../../assets/road.png';
import bgSky from '../../assets/sky.png';
import bgMountain from '../../assets/mountain_fade.png';
import mountainLeft from '../../assets/mountain_left.png';
import mountainRight from '../../assets/mountain_right.png';
import sideroadLeft from '../../assets/sideroad_left.png';
import sideroadRight from '../../assets/sideroad_right.png';

const GameBackground = () => {
  const stageWidth = 1000;
  const stageHeight = 600;
  return (
    <>
      {/* BgSky */}
      <Sprite image={bgSky} width={stageWidth} height={stageHeight / 1.5} />
      <Sprite image={bgMountain} width={stageWidth} height={stageHeight / 3} />
      {/* BgRoad */}
      <Sprite
        image={bgRoad}
        width={stageWidth}
        height={stageHeight / 2.75}
        y={stageHeight / 1.55}
      />
      <Sprite image={mountainLeft} scale={0.2} x={70} y={180} />
      <Sprite image={mountainRight} scale={0.2} x={600} y={215} />
      <Sprite image={sideroadLeft} scale={0.175} x={10} y={340} />
      <Sprite image={sideroadRight} scale={0.175} x={500} y={360} />
    </>
  );
};

export default GameBackground;
