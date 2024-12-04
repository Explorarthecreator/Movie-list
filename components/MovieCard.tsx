import { Movie } from "@/types";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title ? movie.title : "Random Actor"}
          width={100}
          height={100}
          className="w-full h-full "
        />
      </CardHeader>{" "}
      <CardContent className="p-4 space-y-2">
        <h1 className="text-xl font-semibold">{movie.title}</h1>
        {movie.overview.length > 100 ? (
          <p>
            {movie.overview.slice(0, 90)}{" "}
            <AlertDialog>
              <AlertDialogTrigger className="text-purple-600">
                view more
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle>{movie.title} overview</AlertDialogTitle>
                <AlertDialogDescription>
                  {movie.overview}
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </p>
        ) : (
          <p>{movie.overview.slice(0, 99)}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default MovieCard;
