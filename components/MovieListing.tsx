import { APIResponse } from "@/types";
import React from "react";
import TrendingCard from "./TrendingCard";

interface Props {
  results: APIResponse;
}
const MovieListing = ({ results }: Props) => {
  return (
    <div className="flex gap-4 lg:gap-4 overflow-x-auto">
      {results.results.map((result) => (
        <TrendingCard
          key={result.id}
          imgSrc={result.poster_path}
          name={result.title}
        />
      ))}
    </div>
  );
};

export default MovieListing;
