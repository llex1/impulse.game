import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITableEntity {
  id: string;
  result: string;
  time: number;
}
type TTable = ITableEntity[];
const initialState: TTable = [];
const table = createSlice({
  name: "table",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<ITableEntity>) => {
      return [...state, payload];
    },
  },
});

export const tableAction = table.actions;
export default table.reducer;
