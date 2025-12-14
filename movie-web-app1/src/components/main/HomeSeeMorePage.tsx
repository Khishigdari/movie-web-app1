import { MovieCard } from "@/components/home/MovieCard";
import { movieResponseType, MovieType } from "../../../types";
import { getMoviesList } from "../../../utils/get-data";

type HomeSeeMorePageProps = {
  searchParams: {
    type?: string;
    title?: string;
    page?: string;
  };
};

export default async function HomeSeeMorePage({
  searchParams,
}: HomeSeeMorePageProps) {
  const type = searchParams.type ?? "popular";
  const title = searchParams.title ?? "Movies";
  const page = searchParams.page ?? "1";

  const movies: movieResponseType = await getMoviesList(type, page);

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">{title}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.results.map((movie: MovieType) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
