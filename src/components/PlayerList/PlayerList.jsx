import React from 'react';
import './playerList.css';
import { Typography } from '@material-ui/core';

const PlayerList = (props) => {
  return (
    <div className="player-list">
      <img src={props.profileImg} alt="" />
      <Typography variant="inherit">{props.name}</Typography>
    </div>
  );
};

export default PlayerList;
