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
        // <div key={tvlisting.id} className="shrink-0 py-5 space-y-2 ">
        //   <Card className="overflow-hidden">
        //     <div className="w-full h-24">
        //       <Image
        //         src={`${process.env.NEXT_SECURE_IMG_BASE}${tvlisting.backdrop_path}`}
        //         alt={tvlisting.name}
        //         width={100}
        //         height={100}
        //         className="w-full h-full "
        //       />
        //     </div>
        //   </Card>
        //   <p>{tvlisting.name}</p>
        // </div>
        <TrendingCard
          key={tvlisting.id}
          imgSrc={tvlisting.backdrop_path}
          name={tvlisting.name}
        />
      ))}
    </div>
  );
};

export default TvListing;
