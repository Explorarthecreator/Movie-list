"use client";
import React from "react";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateStatus } from "@/lib/features/movieState/movieSlice";

const MovieFilter = () => {
  const buttonItems = [
    {
      label: "Now Playing",
      value: "now_playing",
    },
    {
      label: "Popular",
      value: "popular",
    },
    {
      label: "Top Rated",
      value: "top_rated",
    },
    {
      label: "Upcoming",
      value: "upcoming",
    },
  ];
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.movies);
  const handleButtonClick = (statusValue: string) => {
    dispatch(updateStatus(statusValue));
  };
  return (
    <div className="overflow-x-auto md:overflow-hidden space-x-4 flex py-4 md:flex-none">
      {buttonItems.map((buttonItem) => (
        <Button
          onClick={() => handleButtonClick(buttonItem.value)}
          key={buttonItem.value}
          variant={status === buttonItem.value ? "default" : "outline"}
        >
          {buttonItem.label}
        </Button>
      ))}
    </div>
  );
};

export default MovieFilter;
