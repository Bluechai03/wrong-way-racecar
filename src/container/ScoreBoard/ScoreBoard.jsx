import React from 'react';
import './scoreBoard.css';
import { ScoreList } from '../../components';

const ScoreBoard = () => {
  return (
    <div className="score-board">
      <div className="score-board__last-record">
        <div className="col">
          <h1 className="score-board__last-record__time">3:44</h1>
          <p className="score-board__last-record__label">Your Last Record</p>
        </div>
        <div className="col score-board__last-record__rank">
          <div className="score-board__last-record__num">
            #144<span>th</span>
          </div>
          <div className="score-board__last-record__total">from 15k</div>
        </div>
      </div>
      <div className="score-board__list">
        <ScoreList name="Miracle Levin" record="2:44" rank="1st" />
        <ScoreList name="Lindsey Bergson" record="2:49" rank="2nd" />
        <ScoreList name="Madelyn Levin" record="2:54" rank="3rd" />
        <ScoreList name="Leo Stanton" record="3:22" rank="4th" />
        <ScoreList name="Martin George" record="3:24" rank="5th" />
      </div>
    </div>
  );
};

export default ScoreBoard;
