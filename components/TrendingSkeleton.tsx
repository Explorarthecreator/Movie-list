import React from "react";
import { Skeleton } from "./ui/skeleton";

const TrendingSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  );
};

export default TrendingSkeleton;
