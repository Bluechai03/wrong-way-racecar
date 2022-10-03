import React from 'react';
import './chatBoard.css';

const ChatBoard = () => {
  return (
    <div className="chat-board">
      <div className="chat-board__box">
        <p className="chat-board__joined">Nazanin Has Joined the Game</p>
        <p className="chat-board__chat">Skylar Baptosta: how you doing mate</p>
        <p className="chat-board__chat">Wilson Rosser: Not bad</p>
        <p className="chat-board__chat">Ahmad Dias: did you win last round</p>
        <p className="chat-board__chat">Skylar Baptosta: yes, headed for 2:30</p>
        <p className="chat-board__chat">Livia: wow Cool!</p>
        <p className="chat-board__countdown">The Game Starts in 6...</p>
      </div>
      <div className="chat-board__fields">
        <input type="text" className="chat-board__input" placeholder="Say something..." />
        <button className="chat-board__btn">Send</button>
      </div>
    </div>
  );
};

export default ChatBoard;
