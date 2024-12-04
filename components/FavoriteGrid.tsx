"use client";
import { useAppSelector } from "@/lib/hooks";
import React from "react";
import FavoriteCard from "./FavoriteCard";

const FavoriteGrid = () => {
  const { favorite } = useAppSelector((state) => state.movies);
  return (
    <div className="space-y-8 lg:space-y-12">
      {favorite.length <= 0 && (
        <p>You currently have no favorite movie saved</p>
      )}

      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favorite?.map((result) => (
            // <MovieCard key={result.id} movie={result} />
            <FavoriteCard key={result.id} movie={result} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteGrid;
