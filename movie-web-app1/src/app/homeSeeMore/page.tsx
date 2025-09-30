import { HomeSeeMorePage } from "@/components";
import { movieResponseType, MovieType } from "../../../types";
import {
  getMoviesList,
  getNOwPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../../utils/get-data";

type Props = {
  searchParams: {
    title: string;
    // movies: movieResponseType
    // page: string;
  };
};

const SeeMorePage = async ({ searchParams: { title } }: Props) => {
  let movies: movieResponseType;
  // let movies: MovieType[];

  // const params = searchParams;
  // const title = params.title;
  // // const movies = params.movies;
  // const page = params.page || "1";

  // const movieRes: movieResponseType = await getMoviesList(title, page);

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
    <div className="flex justify-between max-w-[1280px] m-auto md:mt-[52px] mt-0 p-5 md:p-0 ">
      <h2 className="text-6 leading-8 font-[600]"></h2>
      <div className="flex justify-between gap-[32px] flex-wrap">
        <HomeSeeMorePage />
      </div>
    </div>
  );
};

export default SeeMorePage;
