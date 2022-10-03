import React from 'react';
import './scoreList.css';

const ScoreList = (props) => {
  return (
    <div className="score-list">
      <p className="score-list__name">{props.name}</p>
      <div className="score-list__record">
        <p className="score-list__record__label">Record</p>
        <h6 className="score-list__record__num">{props.record}</h6>
      </div>
      <div className="score-list__rank">
        <p className="score-list__rank__label">Rank</p>
        <h6 className="score-list__rank__num">{props.rank}</h6>
      </div>
    </div>
  );
};

export default ScoreList;
