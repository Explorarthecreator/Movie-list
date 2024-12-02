import React from "react";
import { Skeleton } from "./ui/skeleton";

const TrendingSkeleton = () => {
  return (
    <div className="flex gap-4 lg:gap-7 overflow-x-auto overflow-y-hidden py-5">
      <Skeleton className="h-[125px] w-[250px] rounded-xl shrink-0" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl shrink-0" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl shrink-0" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl shrink-0" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl shrink-0" />
    </div>
  );
};

export default TrendingSkeleton;
