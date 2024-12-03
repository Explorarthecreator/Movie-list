import { configureStore } from "@reduxjs/toolkit";
import trendingMovieReducer from "./features/trendingMovies/trendingMovieSlice";
import { trendingApiSlice } from "./features/trendings/trendingApiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      trendingMovies: trendingMovieReducer,
      [trendingApiSlice.reducerPath]: trendingApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(trendingApiSlice.middleware);
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
