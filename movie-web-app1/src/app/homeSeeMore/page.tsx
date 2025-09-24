import { HomeSeeMorePage } from "@/components";
import { movieResponseType } from "../../../types";
import {
  getNOwPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../../utils/get-data";

interface Props {
  searchParams: {
    title: string;
  };
}

const SeeMorePage = async ({ searchParams: { title } }: Props) => {
  let movies: movieResponseType;

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
    <div className="flex justify-between max-w-[1280px] m-auto mt-[52px] ">
      <h2 className="text-6 leading-8 font-[600]"></h2>
      <div className="flex justify-between gap-[32px] mt-8 flex-wrap">
        <HomeSeeMorePage movies={movies!.results} title={title} />
      </div>
    </div>
  );
};

export default SeeMorePage;
