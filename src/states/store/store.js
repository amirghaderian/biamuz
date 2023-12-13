// store.js
import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../card/cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
