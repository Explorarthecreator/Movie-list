import React from "react";

import { TVResponse } from "@/types";
import TrendingCard from "./TrendingCard";

interface Props {
  tvListings: TVResponse;
}
const TvListing = ({ tvListings }: Props) => {
  return (
    <div className="flex gap-4 overflow-x-auto ">
      {tvListings.results.map((tvlisting) => (
        <TrendingCard
          key={tvlisting.id}
          imgSrc={tvlisting.backdrop_path}
          name={tvlisting.name}
          height={24}
          width={60}
        />
      ))}
    </div>
  );
};

export default TvListing;
