import { configureStore } from "@reduxjs/toolkit";
import trendingMovieReducer from "./features/trendingMovies/trendingMovieSlice";
import movieReducer from "./features/movieState/movieSlice";
import { trendingApiSlice } from "./features/trendings/trendingApiSlice";
import { movieApiSlice } from "./features/movie/movieApiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      trendingMovies: trendingMovieReducer,
      movies: movieReducer,
      [trendingApiSlice.reducerPath]: trendingApiSlice.reducer,
      [movieApiSlice.reducerPath]: movieApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(trendingApiSlice.middleware)
        .concat(movieApiSlice.middleware);
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
