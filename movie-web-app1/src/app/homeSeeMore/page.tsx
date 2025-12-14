import { movieResponseType } from "../../../types";
import {
  getNOwPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getPopularMovies,
} from "../../../utils/get-data";
import { MovieCard } from "@/components/home/MovieCard";

type Props = {
  searchParams: {
    title: string;
  };
};

const SeeMorePage = async ({ searchParams: { title } }: Props) => {
  let movies: movieResponseType = {
    results: [],
    page: 1,
    totalPages: 1,
    total_results: 0,
  };

  if (title === "Now Playing") {
    movies = await getNOwPlayingMovies();
  } else if (title === "Upcoming") {
    movies = await getUpcomingMovies();
  } else if (title === "Top Rated") {
    movies = await getTopRatedMovies();
  } else if (title === "Popular") {
    movies = await getPopularMovies();
  }

  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-0 py-8">
      <h1 className="text-2xl font-semibold mb-6">{title}</h1>

      <div className="flex flex-wrap gap-6 justify-between">
        {movies.results.map((movie) => (
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
};

export default SeeMorePage;
