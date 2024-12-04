import { Movie } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  page: number;
  status: string;
  favorite: Movie[];
}

const initialState: MovieState = {
  page: 1,
  status: "now_playing",
  favorite: [],
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
    addToFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorite.push(action.payload);
    },
    removeFromFavourite: (state, action: PayloadAction<Movie>) => {
      const newFavourites: Movie[] = state.favorite.filter(
        (individual) => individual.id !== action.payload.id
      );

      console.log(newFavourites);
      state.favorite = newFavourites;
    },
  },
});

export const { updatePage, updateStatus, addToFavorite, removeFromFavourite } =
  movieSlice.actions;
export default movieSlice.reducer;
