import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

interface Props {
  name: string;
  imgSrc: string | null;
}
const TrendingCard = ({ name, imgSrc }: Props) => {
  return (
    <div className="shrink-0 py-5 space-y-2 lg:w-48">
      <Card className="overflow-hidden">
        <div className="w-full">
          <Image
            src={`${process.env.NEXT_SECURE_IMG_BASE}${imgSrc}`}
            alt={name}
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
