import { MovieType } from "../../../types";
import { getMovieTrailer } from "../../../utils/get-data";
import { MovieCard } from "../home";
import { Pagination } from "../ui/pagination";

type HomeSeeMorePageProps = {
  movies: MovieType[];
  title: string;
};
export const HomeSeeMorePage = ({ movies, title }: HomeSeeMorePageProps) => {
  return (
    <div>
      <div className="flex justify-between max-w-[1280px] m-auto mt-[52px] ">
        <h2 className="text-[30px] leading-9 font-[600]">{title}</h2>
      </div>
      <div className="flex justify-between gap-[32px] mt-8 flex-wrap">
        {movies?.slice(0, 15).map((movie) => (
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
