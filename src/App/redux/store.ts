import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import loginReducer from "./slices/login.slice";
import gameReducer from "./slices/game.slice";
import tableReducer from "./slices/table.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    game: gameReducer,
    table: tableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
