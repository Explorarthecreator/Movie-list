import { PeopleResponse } from "@/types";
import React from "react";
import TrendingCard from "./TrendingCard";

interface Props {
  peoplelistings: PeopleResponse;
}

const PeopleListing = ({ peoplelistings }: Props) => {
  return (
    <div className="flex gap-4 lg:gap-7 overflow-x-auto">
      {peoplelistings.results.map((peopleListing) => (
        <TrendingCard
          key={peopleListing.id}
          imgSrc={peopleListing.profile_path}
          name={peopleListing.name}
          height={60}
          width={32}
        />
      ))}
    </div>
  );
};

export default PeopleListing;
