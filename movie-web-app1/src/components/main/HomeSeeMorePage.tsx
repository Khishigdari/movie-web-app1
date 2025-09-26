import { movieResponseType, MovieType } from "../../../types";
import { getMoviesList } from "../../../utils/get-data";

import { MovieCard } from "../home";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
import SeeMorePagination from "../pagination/SeeMorePagination";
// type HomeSeeMorePageProps = {
//   searchParams: Promise<{ movies: MovieType[]; title: string; page: string }>;
// };

type HomeSeeMorePageProps = { movies: MovieType[]; title: string };

// type Props = {
//   searchParams: {
//     title: string;
//     movies: MovieType[];
//     // movies: movieResponseType
//     page: string;
//   };
// };

export const HomeSeeMorePage = async ({
  movies,
  title,
}: HomeSeeMorePageProps) => {
  // export const HomeSeeMorePage = async ({
  //   searchParams: { title, page, movies },
  // }: Props) => {

  // const params = await searchParams;
  // const title = params.title;
  // const movies = params.movies;
  // const page = params.page || "1";

  // const movieRes: movieResponseType = await getMoviesList(title, page);
  return (
    <div>
      <div className="flex justify-between max-w-[1280px] m-auto ">
        <h2 className="md:text-[30px] text-[24px] leading-[32px] md:leading-9 font-[600]">
          {title}
        </h2>
      </div>
      <div className="flex justify-between md:gap-[32px] gap-[20px] mt-[20px] md:mt-8 flex-wrap">
        {movies?.slice(0, 15).map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
      <div className="my-8 flex justify-end">
        {/* <SeeMorePagination title={title}></SeeMorePagination> */}
        {/* <Pagination className=" justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
      </div>
    </div>
  );
};
