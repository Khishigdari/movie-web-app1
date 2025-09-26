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
  const genresResponse: GenreResponseType = await getMovieGenres();
  const params = await searchParams;
  const searchValue = params.value;
  const searchResponse: movieResponseType = await getSearchedMovies(
    searchValue
  );
  console.log("searchResponse", searchResponse);

  return (
    <div className="md:mt-[52px] mt-[32px] m-auto flex flex-col justify-between max-w-[1280px] max-md:px-5">
      <h2 className="md:text-[30px] text-[24px] leading-[32px] md:leading-[36px] font-600 font-semibold">
        Search results
      </h2>
      <div className="flex justify-between  max-md:flex-col">
        <div className="mt-[32px]">
          <p className="text-[20px] leading-[28px] font-600 font-semibold mb-[32px]">
            {searchResponse.total_results} result for "{searchValue}"
          </p>
          <div className="flex md:gap-[48px] gap-5 flex-wrap max-w-[804px]">
            {searchResponse?.results.slice(0, 8).map((movie) => {
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
        <div className=" max-md:mt-[32px]">
          <div className="mb-5">
            <h3 className="md:text-6 md:leading-8 text-[20px] leading-7 font-[600] mb-1">
              Search by genre
            </h3>
            <p className="text-4 leading-6">See lists of movies by genre</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-3 md:w-[387px]">
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
