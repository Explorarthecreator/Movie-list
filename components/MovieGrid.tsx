"use client";
import { useGetMoviesQuery } from "@/lib/features/movie/movieApiSlice";
import { useAppSelector } from "@/lib/hooks";
import React from "react";
import MovieCard from "./MovieCard";
import MoviePagination from "./MoviePagination";

const MovieGrid = () => {
  const { page, status } = useAppSelector((state) => state.movies);
  const {
    data: movieResponse,
    isError,
    isLoading,
    isSuccess,
  } = useGetMoviesQuery({ status, page });

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      Movies
      {isError && <p>An error occured</p>}
      {isSuccess && (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movieResponse.results.map((result) => (
              <MovieCard key={result.id} movie={result} />
            ))}
          </div>
          <MoviePagination />
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
