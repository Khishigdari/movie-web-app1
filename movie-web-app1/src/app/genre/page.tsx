import { MovieCard } from "@/components";
import { movieResponseType } from "../../../types";
import { getMoviesByGenreId } from "../../../utils/get-data";
import { Pagination } from "@/components/ui/pagination";

type GenrePageProps = {
  searchParams: Promise<{ id: string[] }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id
  );
  return (
    <div className="mt-[52px] w-[1437px] m-auto">
      <div className="inter flex gap-[32px] mt-8 flex-wrap justify-center">
        {filteredMoviesResponse.results.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Genre;
