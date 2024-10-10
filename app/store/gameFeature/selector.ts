import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Selector for each player
export  const selectPlayerPiecesByNumber = createSelector(
  (state: RootState, playerNumber: number) => playerNumber,
  (state: RootState) => state,
  (playerNumber, state) => {
    switch (playerNumber) {
      case 1:
        return state.game.player1;
      case 2:
        return state.game.player2;
      case 3:
        return state.game.player3;
      case 4:
        return state.game.player4;
      default:
        return [];
    }
  }
);