import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

interface Props {
  name: string;
  imgSrc: string | null;
  height: number;
  width: number;
}
const TrendingCard = ({ name, imgSrc, width, height }: Props) => {
  // const url = process.env.NEXT_SECURE_IMG_BASE;
  return (
    <div className="shrink-0 py-5 space-y-2 lg:w-48">
      <Card className="overflow-hidden">
        <div className={`w-${width} h-${height}`}>
          <Image
            src={`https://image.tmdb.org/t/p/original${imgSrc}`}
            alt={name ? name : "Random Actor"}
            width={100}
            height={100}
            className="w-full h-full "
          />
        </div>
      </Card>
      <p>{name}</p>
    </div>
  );
};

export default TrendingCard;
