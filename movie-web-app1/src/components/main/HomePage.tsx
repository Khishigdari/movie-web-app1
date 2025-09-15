import { MoviesContainer } from "@/components/home/MoviesContainer";
import { MovieCarousel } from "@/components/main/MovieCarousel";
import { movieResponseType } from "../../../types";
import { getMoviesList } from "../../../utils/get-data";

export async function HomePage() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );
  // console.log("movies", upcomingMovies);

  return (
    <div className="inter">
      <MovieCarousel movies={nowPlayingMovies.results} />
      <div className="max-w-[1280px] m-auto">
        <div className="inter flex gap-[32px] mt-8 flex-wrap justify-center">
          <MoviesContainer movies={upcomingMovies.results} title="Upcoming" />
          <MoviesContainer movies={popularMovies.results} title="Popular" />
          <MoviesContainer movies={topRatedMovies.results} title="Top Rated" />
        </div>
      </div>
    </div>
  );
}
