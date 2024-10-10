import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { initialState } from "./initialState"; 
export const gameSlice = createSlice({
    name: "game",
    initialState, 
    reducers: {
        resetGame: (state) => {
            return initialState; 
        },
        newDiceNumber: (state, action:PayloadAction<number>) => {
            state.diceNumber = action.payload;
            state.isDiceRolled = true
        }
    }
});

export const { resetGame,newDiceNumber } = gameSlice.actions;
export default gameSlice.reducer;
