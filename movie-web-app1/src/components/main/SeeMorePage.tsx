// // type SeeMorePageProps = {
// //     seeMoreParams: Promise<{}>
// // }

// import { MovieCard, MoviesContainer } from "@/components";
// import { movieResponseType, MovieType } from "../../../types";
// import { getMoviesList } from "../../../utils/get-data";

// type moviesTypeProps = {
//   movies: MovieType[];
//   title: string;
// };

// const SeeMorePage = async ({ movies, title }: moviesTypeProps) => {
//   const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
//   const popularMovies: movieResponseType = await getMoviesList("popular");
//   const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
//   //   async function movieFilter() {
//   //     if (title === "upcoming") {
//   //       const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
//   //     } else if (title === "popular") {
//   //       const popularMovies: movieResponseType = await getMoviesList("popular");
//   //     } else if (title === "top_rated") {
//   //       const topRatedMovies: movieResponseType = await getMoviesList(
//   //         "top_rated"
//   //       );
//   //     }
//   //   }

//   return (
//     <div>
//       <div className="flex justify-between max-w-[1280px] m-auto mt-[52px] ">
//         <h2 className="text-6 leading-8 font-[600]">{title}</h2>
//       </div>
//       <div className="flex justify-between gap-[32px] mt-8 flex-wrap">
//         {movies?.slice(0, 10).map((movie) => (
//           <MovieCard
//             key={movie.id}
//             title={movie.title}
//             rating={movie.vote_average}
//             image={movie.poster_path}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default SeeMorePage;
