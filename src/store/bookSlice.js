import { createSlice } from "@reduxjs/toolkit";
import books from "../data/book";

const bookSlice = createSlice({
  name: "books",

  initialState: {
    books: books,
  },

  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;