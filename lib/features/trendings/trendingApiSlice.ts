import { PeopleResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN;

export const trendingApiSlice = createApi({
  reducerPath: "trending",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/trending",
    prepareHeaders: (headers) => {
      if (token) {
        console.log(token);
        headers.set("Authorization", `Bearer ${token}`);
      }
      console.log("object");
      console.log(token);
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getTrendingMovies: builder.query({
        query: () => `/movie/day?language=en-US`,
      }),
      getTrendingTV: builder.query({
        query: () => `/tv/day?language=en-US`,
      }),
      getTrendingPeople: builder.query<PeopleResponse, void>({
        query: () => `/person/day?language=en-US`,
      }),
    };
  },
});

export const {
  useGetTrendingMoviesQuery,
  useGetTrendingTVQuery,
  useGetTrendingPeopleQuery,
} = trendingApiSlice;
