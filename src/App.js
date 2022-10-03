import { React } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core';
import './app.css';
import io from 'socket.io-client';
import { GameScreen, ScoreBoard, ChatBoard, PlayerBoard } from './container';

const socket = io.connect('https://wrongway-racer-api.spls.ae/');

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Saira',
      allVariants: {
        color: ' #fff',
      },
    },
  });

  console.log('Developed By Anna Montero :)');

  return (
    <div className="App">
      <GameScreen />
      <ThemeProvider theme={theme}>
        <div className="grid">
          <ScoreBoard />
          <ChatBoard />
          <PlayerBoard />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
