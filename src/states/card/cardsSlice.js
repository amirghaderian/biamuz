// cardsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = cardsSlice.actions;
export const selectData = (state) => state.cards.data;

export default cardsSlice.reducer;