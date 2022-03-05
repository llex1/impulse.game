import { createSlice } from "@reduxjs/toolkit";

export interface IGame {
  isGame: boolean;
}
const initialState: IGame = {
  isGame: false,
};
const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isGame: true,
      };
    },
    stop: (state) => {
      return {
        ...state,
        isGame: false,
      };
    },
  },
});
export const gameActions = game.actions;
export default game.reducer;
