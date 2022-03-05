import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  name?: string;
  money: number;
}

const initialState: IUserState = {
  money: 9.99,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        name: payload,
      };
    },
    logout: (state) => {
      return {
        ...state,
        name: "",
      };
    },
    play: (state, { payload }: PayloadAction<number>) => {
      const result = state.money - payload;
      return {
        ...state,
        money: result,
      };
    },
    win: (state, { payload }: PayloadAction<number>) => {
      return {
        ...state,
        money: state.money + payload,
      };
    },
  },
});

export const userActions = user.actions;
export default user.reducer;
