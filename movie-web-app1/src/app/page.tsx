import { MoviesContainer } from "@/components/home/MoviesContainer";
import { movieResponseType } from "../../types";
import { getMoviesList } from "../../utils/get-data";
import { MovieCarousel } from "@/components/main/MovieCarousel";

export default async function Home() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  return (
    <div>
      <MovieCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer movies={upcomingMovies.results} title="Upcoming" />
      <MoviesContainer movies={popularMovies.results} title="Popular" />
      <MoviesContainer movies={topRatedMovies.results} title="Top Rated" />
    </div>
  );
}
