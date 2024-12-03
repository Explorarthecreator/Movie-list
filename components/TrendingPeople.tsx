"use client";
import React from "react";
import PeopleListing from "./PeopleListing";
import { useGetTrendingPeopleQuery } from "@/lib/features/trendings/trendingApiSlice";
import TrendingSkeleton from "./TrendingSkeleton";

const TrendingPeople = () => {
  const {
    data: people,
    isLoading,
    isSuccess,
    isError,
  } = useGetTrendingPeopleQuery();

  if (isLoading) {
    return <TrendingSkeleton />;
  }

  return (
    <div>
      <h1>Trending People</h1>

      {isSuccess && <PeopleListing peoplelistings={people} />}
      {isError && <p>Error Loading Trending people</p>}
    </div>
  );
};

export default TrendingPeople;
