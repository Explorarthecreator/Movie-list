"use client";
import React from "react";
import PeopleListing from "./PeopleListing";
import { useGetTrendingPeopleQuery } from "@/lib/features/trendings/trendingApiSlice";
import TrendingSkeleton from "./TrendingSkeleton";
import { useAppSelector } from "@/lib/hooks";

const TrendingPeople = () => {
  const { time_window } = useAppSelector((state) => state.trendingMovies);
  const {
    data: people,
    isLoading,
    isSuccess,
    isError,
  } = useGetTrendingPeopleQuery({ time_window });

  if (isLoading) {
    return <TrendingSkeleton />;
  }
  if (isError) {
    console.log(isError);
  }

  return (
    <div>
      <h1 className="text-xl font-semibold">Trending People</h1>

      {isSuccess && <PeopleListing peoplelistings={people} />}
      {isError && <p>Error Loading Trending people</p>}
    </div>
  );
};

export default TrendingPeople;
