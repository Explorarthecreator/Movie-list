import { APIResponse, Movie } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

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
// const api_key = process.env.NEXT_API_KEY;
const token = process.env.NEXT_API_READ_ACCESS_TOKEN;
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

export const fetchTrendingMovies = createAsyncThunk(
  "trending-movie",
  async () => {
    const response: AxiosResponse<APIResponse> = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }
);

const trendingMovieSlice = createSlice({
  name: "trending-movie",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTrendingMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTrendingMovies.rejected, (state) => {
      state.isError = true;
      state.loading = false;
      state.success = false;
    });
    // builder.addCase(
    //   fetchTrendingMovies.fulfilled,
    //   (state, action: PayloadAction<APIResponse>) => {
    //     state.page = action.payload.page;
    //     state.trendingMovies = action.payload.results;
    //     state.loading = false;
    //   }
    // );
  },
});

export const { reset } = trendingMovieSlice.actions;
export default trendingMovieSlice.reducer;
