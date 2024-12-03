"use client";
import React from "react";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeTimeWindow } from "@/lib/features/trendingMovies/trendingMovieSlice";

const TrendingFilter = () => {
  const dispatch = useAppDispatch();
  const { time_window } = useAppSelector((state) => state.trendingMovies);

  const handleButtonClick = (time_window: string) => {
    dispatch(changeTimeWindow(time_window));
  };
  return (
    <div>
      <Button
        variant={time_window === "day" ? "default" : "outline"}
        onClick={() => handleButtonClick("day")}
      >
        Today
      </Button>
      <Button
        variant={time_window === "week" ? "default" : "outline"}
        onClick={() => handleButtonClick("week")}
      >
        This week
      </Button>
    </div>
  );
};

export default TrendingFilter;
