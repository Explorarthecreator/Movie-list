"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updatePage } from "@/lib/features/movieState/movieSlice";

const MoviePagination = () => {
  const dispatch = useAppDispatch();

  const { page } = useAppSelector((state) => state.movies);

  const handleButtonClick = (pageNumber: number) => {
    dispatch(updatePage(pageNumber));
  };
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handleButtonClick(page - 1)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive className="border-2">
              {page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => handleButtonClick(page + 1)}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => handleButtonClick(page + 2)}
            >
              {page + 2}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handleButtonClick(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MoviePagination;
