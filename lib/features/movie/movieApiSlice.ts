import { APIResponse } from "@/types";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const token = process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN;

export const movieApiSlice = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie/",
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getMovies: builder.query<APIResponse, { status: string; page: number }>({
        query: ({ status, page }) => `${status}?language=en-US&page=${page}`,
      }),
    };
  },
});

export const { useGetMoviesQuery } = movieApiSlice;
