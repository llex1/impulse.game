import { createSlice } from "@reduxjs/toolkit";

export interface ILogin {
  isLogin: boolean;
}
const initialState: ILogin = {
  isLogin: false,
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    ["true"]: (): ILogin => {
      return { isLogin: true };
    },
    ["false"]: (): ILogin => {
      return { isLogin: false };
    },
  },
});

export const loginAcitons = login.actions;
export default login.reducer;
