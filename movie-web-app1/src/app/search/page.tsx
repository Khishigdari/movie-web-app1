import { SearchMovieCard } from "@/components";
import { GenreResponseType, movieResponseType } from "../../../types";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getMovieGenres, getSearchedMovies } from "../../../utils/get-data";

type SearchPageProps = {
  searchParams: Promise<{ value: string }>;
};

const Home = async ({ searchParams }: SearchPageProps) => {
  // console.log(searchResponse, "search");
  const genresResponse: GenreResponseType = await getMovieGenres();
  const params = await searchParams;
  const searchValue = params.value;
  const searchResponse: movieResponseType = await getSearchedMovies(
    searchValue
  );
  console.log("searchResponse", searchResponse);

  return (
    <div className="mt-[52px] m-auto flex flex-col justify-between max-w-[1280px]">
      <h2 className="text-[30px] leading-[36px] font-600 font-semibold">
        Search results
      </h2>
      <div className="flex justify-between">
        <div className="mt-[32px]">
          <p className="text-[20px] leading-[28px] font-600 font-semibold mb-[32px]">
            {searchResponse.total_results} result for "{searchValue}"
          </p>
          <div className="flex gap-[48px] flex-wrap max-w-[804px]">
            {searchResponse?.results.slice(0, 8).map((movie) => {
              // console.log(searchResponse.results, "movies");
              // console.log(searchValue, "search value");
              return (
                <SearchMovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  image={movie.poster_path}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className="mb-5">
            <h3 className="text-6 leading-8 font-[600] mb-1">
              Search by genre
            </h3>
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
      </div>
    </div>
  );
};
export default Home;
