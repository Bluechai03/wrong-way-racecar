import React from 'react';
import { Grid, Container, Typography, Button, makeStyles } from '@material-ui/core';
import './playerBoard.css';
import { PlayerList } from '../../components';
import { IoMdSettings } from 'react-icons/io';

import baptista from '../../assets/profile/baptista.png';
import rosser from '../../assets/profile/rosser.png';
import aminoff from '../../assets/profile/aminoff.png';
import bator from '../../assets/profile/bator.png';
import dias from '../../assets/profile/dias.png';
import dokidis from '../../assets/profile/dokidis.png';

const PlayerBoard = () => {
  return (
    <div className="player-board">
      <div className="player-board__heading">
        <Typography variant="h6" >
          Players
        </Typography>
        <Typography variant="h6" >
          8/12
        </Typography>
      </div>
      <button className="player-board__btn" variant="contained" color="white">
        <IoMdSettings color="white" />
        Settings
      </button>
      <PlayerList profileImg={baptista} name="Skylar Baptista" />
      <PlayerList profileImg={rosser} name="Wilson Rosser" />
      <PlayerList profileImg={aminoff} name="Leo Aminoff" />
      <PlayerList profileImg={bator} name="Livia Bator" />
      <PlayerList profileImg={dias} name="Ahmad Dias" />
      <PlayerList profileImg={dokidis} name="Brandon Dokidis" />
    </div>
  );
};

export default PlayerBoard;
