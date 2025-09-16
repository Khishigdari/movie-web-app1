import { movieResponseType } from "../../../types";
import { getMoviesByGenreId } from "../../../utils/get-data";
import { MovieCard } from "./MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type GenrePageProps = {
  searchParams: Promise<{ id: string[]; page: string }>;
};

export async function GenrePage({ searchParams }: GenrePageProps) {
  const params = await searchParams;
  const id = params.id;
  const page = params.page;
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page || "1"
  );
  return (
    <div>
      <div className="inter flex gap-[32px] mt-8 flex-wrap justify-center">
        {filteredMoviesResponse.results.slice(0, 12).map((movie) => (
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
  );
}
