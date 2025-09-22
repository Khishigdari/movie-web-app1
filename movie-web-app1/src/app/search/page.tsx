import { SearchMovieCard } from "@/components";
import { MovieType } from "../../../types";

// type MoviesContainerProps = {
//   movies: MovieType[];
//   title: string;
//   // link: string;
// };

type SearchResultsProps = {
  foundMovies: MovieType[];
  searchValue: string;
};

const Home = ({ foundMovies, searchValue }: SearchResultsProps) => {
  return (
    <div>
      <h2>Search results</h2>
      <p>result for "{searchValue}"</p>
      <div>
        {foundMovies?.results.slice(0, 5).map((movie) => {
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
  );
};
console.log();
export default Home;
