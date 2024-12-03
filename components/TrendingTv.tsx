// import { TVResponse } from "@/types";
"use client";
import React from "react";
import TvListing from "./TvListing";
import { useGetTrendingTVQuery } from "@/lib/features/trendings/trendingApiSlice";
import TrendingSkeleton from "./TrendingSkeleton";
import { useAppSelector } from "@/lib/hooks";

const TrendingTv = () => {
  const { time_window } = useAppSelector((state) => state.trendingMovies);
  const {
    data: Tv,
    isLoading,
    isError,
    isSuccess,
  } = useGetTrendingTVQuery({ time_window });

  if (isLoading) {
    return <TrendingSkeleton />;
  }

  return (
    <div>
      <h1>Trending TV</h1>

      {isSuccess && <TvListing tvListings={Tv} />}
      {isError && <p>Error Loading Trending Tv Series</p>}
    </div>
  );
};

export default TrendingTv;
