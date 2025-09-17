import { FiArrowRight } from "react-icons/fi";
import { MovieType } from "../../../types";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
import { Link2 } from "lucide-react";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
};

export const MoviesContainer = ({ movies, title }: MoviesContainerProps) => {
  return (
    <div>
      <div className="flex justify-between max-w-[1280px] m-auto mt-[52px] ">
        <h2 className="text-6 leading-8 font-[600]">{title}</h2>
        <Link
          href={`/homeSeeMore?title=${title}`}
          // href={"/homeSeeMore"}
          className="flex gap-2 items-center text-[14px] leading-5 font-[500]"
        >
          {" "}
          See more <FiArrowRight width={16} height={16} />
        </Link>
      </div>
      <div className="flex justify-between gap-[32px] mt-8 flex-wrap">
        {movies?.slice(0, 10).map((movie) => (
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
