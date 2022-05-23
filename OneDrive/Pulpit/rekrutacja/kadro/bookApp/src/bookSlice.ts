import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "./components/Tile.tsx/Tile";

export interface InitialStateSummary {
  favourites: Book[];
}

const initialState: InitialStateSummary = {
  favourites: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    consumeLocalStorage: (state) => {
      if (localStorage.getItem("favourites")) {
        state.favourites = JSON.parse(localStorage.getItem("favourites") || "");
      }
    },
    pushFavourites: (state, action) => {
      state.favourites = [...state.favourites, action.payload];
      localStorage.setItem(
        "favourites",
        JSON.stringify([...state.favourites, action.payload])
      );
    },
    removeFromFavourites: (state, action: SomeAction) => {
      state.favourites.splice(
        state.favourites.findIndex((book) => book.id === action.payload.id),
        1
      );
    },
    clear: (state) => {
      state.favourites = [];
      localStorage.clear();
    },
  },
});

export const {
  consumeLocalStorage,
  pushFavourites,
  removeFromFavourites,
  clear,
} = bookSlice.actions;

export default bookSlice.reducer;

interface SomeAction {
  type: string;
  payload: Book;
}
