"use client";
import { useState } from "react";
// import { movieResponseType, MovieType } from "../../../types";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type SeeMorePaginationProps = {
  // movies: MovieType[];
  title: string;
  // currentPage: number;
};

// interface Props {
//   searchParams: {
//     title: string;
//     // movies: MovieType[];
//   };
// }

// // const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

// // const itemsPerPage = 10;

const SeeMorePagination = ({ title }: SeeMorePaginationProps) => {
  // currentPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  //   // const totalPages = Math.ceil(items.length / itemsPerPage);
  //   // const currenItems = items.slice(
  //   //   (currentPage - 1) * itemsPerPage,
  //   //   currentPage * itemsPerPage
  //   // );

  // if (title === "Now Playing") {
  //   movies = await getNOwPlayingMovies();
  // } else if (title === "Upcoming") {
  //   movies = await getUpcomingMovies();
  // } else if (title === "Top Rated") {
  //   movies = await getTopRatedMovies();
  // } else if (title === "Popular") {
  //   movies = await getPopularMovies();
  // }
  return (
    <div>
      <Pagination>
        <PaginationPrevious
          href={`/homeSeeMore?title=${title}&page=${currentPage}`}
          onClick={() => setCurrentPage((prev) => prev--)}
        />
        <PaginationNext
          href={`/homeSeeMore?title=${title}&page=${currentPage}`}
          onClick={() => setCurrentPage((prev) => prev++)}
        />
      </Pagination>
    </div>
  );
};

export default SeeMorePagination;
