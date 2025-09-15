import { MovieCard } from "@/components";
import {
  GenreResponseType,
  GenreType,
  movieResponseType,
} from "../../../types";
import { getMovieGenres, getMoviesByGenreId } from "../../../utils/get-data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
type GenrePageProps = {
  searchParams: Promise<{ id: string[]; page: string; name: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const genresResponse: GenreResponseType = await getMovieGenres();
  const params = await searchParams;
  const id = params.id;
  const page = params.page;
  // const name = params.name;
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page || "1"
  );
  const genreName: GenreType = await getMovieGenres();
  return (
    <div className="mt-[52px] w-[1437px]  flex gap-10 justify-between m-auto">
      <div>
        <h2 className="mb-8 text-[30px] leading-9 font-[600]">Search filter</h2>
        <div className="mb-5">
          <h3 className="text-6 leading-8 font-[600] mb-1">Genres</h3>
          <p className="text-4 leading-6">See lists of movies by genre</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-3 w-[387px]">
          {genresResponse.genres?.map((genre) => (
            <Link href={`/genre?id=${genre.id}`} key={genre.id}>
              <Badge
                variant="outline"
                key={genre.id}
                className="cursor-pointer"
              >
                {genre.name}
                <ChevronRight />
              </Badge>
            </Link>
          ))}
        </div>
      </div>
      <div>
        {/* <h4 className="text-5 leading-7 font-[600] mb-8"> */}

        <h4 className="text-5 leading-7 font-[600] mb-8">
          {filteredMoviesResponse.results.length} titles in {genreName.name}
        </h4>
        {/* </h4> */}
        <div className="inter flex gap-[16px] mt-8 flex-wrap">
          {filteredMoviesResponse.results.slice(0, 12).map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
          <div className="my-8 flex justify-end">
            <Pagination className="mr-16 justify-end">
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
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
