import { APIResponse, PeopleResponse, TVResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN;

export const trendingApiSlice = createApi({
  reducerPath: "trending",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/trending",
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getTrendingMovies: builder.query<APIResponse, { time_window: string }>({
        query: ({ time_window }) => `/movie/${time_window}?language=en-US`,
      }),
      getTrendingTV: builder.query<TVResponse, { time_window: string }>({
        query: ({ time_window }) => `/tv/${time_window}?language=en-US`,
      }),
      getTrendingPeople: builder.query<PeopleResponse, { time_window: string }>(
        {
          query: ({ time_window }) => `/person/${time_window}?language=en-US`,
        }
      ),
    };
  },
});

export const {
  useGetTrendingMoviesQuery,
  useGetTrendingTVQuery,
  useGetTrendingPeopleQuery,
} = trendingApiSlice;
