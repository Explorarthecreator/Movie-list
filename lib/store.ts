import { configureStore } from "@reduxjs/toolkit";
import trendingMovieReducer from "./features/trendingMovies/trendingMovieSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      trendingMovies: trendingMovieReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
