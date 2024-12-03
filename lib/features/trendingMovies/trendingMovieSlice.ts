import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TrendingMovieState {
  time_window: string;
}

const initialState: TrendingMovieState = {
  time_window: "day",
};

const trendingMovieSlice = createSlice({
  name: "trending-movie",
  initialState,
  reducers: {
    changeTimeWindow: (state, action: PayloadAction<string>) => {
      state.time_window = action.payload;
    },
  },
});

export const { changeTimeWindow } = trendingMovieSlice.actions;
export default trendingMovieSlice.reducer;
