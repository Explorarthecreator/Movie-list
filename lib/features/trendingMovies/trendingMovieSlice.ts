import { Movie } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface TrendingMovieState {
  loading: boolean;
  isError: boolean;
  success: boolean;
  message: string;
  trendingMovies: Movie[];
  page: number;
  totalPages: number;
}

const initialState: TrendingMovieState = {
  loading: false,
  isError: false,
  success: false,
  message: "",
  trendingMovies: [],
  page: 1,
  totalPages: 0,
};

const trendingMovieSlice = createSlice({
  name: "trending-movie",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
    },
  },
});

export const { reset } = trendingMovieSlice.actions;
export default trendingMovieSlice.reducer;
