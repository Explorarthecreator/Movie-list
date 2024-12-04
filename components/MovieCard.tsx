"use client";
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
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToFavorite } from "@/lib/features/movieState/movieSlice";

interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const { favorite } = useAppSelector((state) => state.movies);
  const handleClick = (singleMovie: Movie) => {
    // Checking if the Item is in the favourite array
    const checkFavorites = favorite.some(
      (movie) => movie.id === singleMovie.id
    );
    if (checkFavorites) {
      toast({
        description: "Already added to favorites",
      });
    } else {
      dispatch(addToFavorite(singleMovie));
      toast({
        description: "Added to favorites",
      });
    }
  };
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 relative">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title ? movie.title : "Random Actor"}
          width={100}
          height={100}
          className="w-full h-full "
        />
        <Heart
          color="#A32CC4"
          fill="#fff"
          className="absolute top-3 right-5"
          onClick={() => handleClick(movie)}
        />
        {/* {favorite.some((movieCheck) => movieCheck.id === movie.id) ? (
          <Trash2
            color="#A32CC4"
            fill="#fff"
            className="absolute top-3 right-5"
            onClick={() => handleClick(movie)}
          />
        ) : (
          <Heart
            color="#A32CC4"
            fill="#fff"
            className="absolute top-3 right-5"
            onClick={() => handleClick(movie)}
          />
        )} */}
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
