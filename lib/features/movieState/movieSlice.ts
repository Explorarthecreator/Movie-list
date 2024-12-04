import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  page: number;
  status: string;
}

const initialState: MovieState = {
  page: 1,
  status: "now_playing",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },

    updatePage: (state, action: PayloadAction<number>) => {
      if (action.payload < 1) {
        state.page = 1;
      } else {
        state.page = action.payload;
      }
    },
  },
});

export const { updatePage, updateStatus } = movieSlice.actions;
export default movieSlice.reducer;
