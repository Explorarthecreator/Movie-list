"use client";
import React from "react";
import MovieListing from "./MovieListing";

import TrendingSkeleton from "./TrendingSkeleton";
import { useGetTrendingMoviesQuery } from "@/lib/features/trendings/trendingApiSlice";

const TrendingMovie = () => {
  // const emma: APIResponse = {
  //   page: 1,
  //   results: [
  //     {
  //       backdrop_path: "/tkRDTu9hyWgaBSSzfkYDCZYd1kV.jpg",
  //       id: 974576,
  //       title: "Conclave",
  //       original_title: "Conclave",
  //       overview:
  //         "After the unexpected death of the Pope, Cardinal Lawrence is tasked with managing the covert and ancient ritual of electing a new one. Sequestered in the Vatican with the Catholic Church’s most powerful leaders until the process is complete, Lawrence finds himself at the center of a conspiracy that could lead to its downfall.",
  //       poster_path: "/m5x8D0bZ3eKqIVWZ5y7TnZ2oTVg.jpg",
  //       media_type: "movie",
  //       adult: false,
  //       original_language: "en",
  //       genre_ids: [9648, 53, 18],
  //       popularity: 396.337,
  //       release_date: "2024-10-25",
  //       video: false,
  //       vote_average: 6.9,
  //       vote_count: 127,
  //     },
  //     {
  //       backdrop_path: "/tkRDTu9hyWgaBSSzfkYDCZYd1kV.jpg",
  //       id: 9776,
  //       title: "Conclave",
  //       original_title: "Conclave",
  //       overview:
  //         "After the unexpected death of the Pope, Cardinal Lawrence is tasked with managing the covert and ancient ritual of electing a new one. Sequestered in the Vatican with the Catholic Church’s most powerful leaders until the process is complete, Lawrence finds himself at the center of a conspiracy that could lead to its downfall.",
  //       poster_path: "/m5x8D0bZ3eKqIVWZ5y7TnZ2oTVg.jpg",
  //       media_type: "movie",
  //       adult: false,
  //       original_language: "en",
  //       genre_ids: [9648, 53, 18],
  //       popularity: 396.337,
  //       release_date: "2024-10-25",
  //       video: false,
  //       vote_average: 6.9,
  //       vote_count: 127,
  //     },
  //     {
  //       backdrop_path: "/tkRDTu9hyWgaBSSzfkYDCZYd1kV.jpg",
  //       id: 977,
  //       title: "Conclave",
  //       original_title: "Conclave",
  //       overview:
  //         "After the unexpected death of the Pope, Cardinal Lawrence is tasked with managing the covert and ancient ritual of electing a new one. Sequestered in the Vatican with the Catholic Church’s most powerful leaders until the process is complete, Lawrence finds himself at the center of a conspiracy that could lead to its downfall.",
  //       poster_path: "/m5x8D0bZ3eKqIVWZ5y7TnZ2oTVg.jpg",
  //       media_type: "movie",
  //       adult: false,
  //       original_language: "en",
  //       genre_ids: [9648, 53, 18],
  //       popularity: 396.337,
  //       release_date: "2024-10-25",
  //       video: false,
  //       vote_average: 6.9,
  //       vote_count: 127,
  //     },
  //   ],
  //   total_pages: 500,
  //   total_results: 10000,
  // };
  // const { loading } = useAppSelector((state) => state.trendingMovies);
  // const dispatch = useAppDispatch();

  const { data: movies, isLoading, isError } = useGetTrendingMoviesQuery({});

  // useEffect(() => {
  //   dispatch(reset());
  //   console.log("object");
  // }, [dispatch]);
  if (isError) {
    return <p>Error Fetching data</p>;
  }
  return (
    <div>
      <h1 className="text-xl font-semibold">Trending Movie</h1>
      {isLoading ? <TrendingSkeleton /> : <MovieListing results={movies} />}
    </div>
  );
};

export default TrendingMovie;
