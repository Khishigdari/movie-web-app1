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
  params,
}: HomeSeeMorePageProps) => {
  // const { link } = await params;
  const dynamicRoute = await params;
  const link = dynamicRoute.link;

  const searchQuery = await searchParams;
  const title = searchQuery.title;
  const page = searchQuery.page || "1";

  const currentUrl = `/homeSeeMore?title=${title}&`;

  const moviesRes: movieResponseType = await getMoviesList(title, page);
  return (
    <div>
      <div className="flex justify-between max-w-[1280px] m-auto ">
        <h2 className="md:text-[30px] text-[24px] leading-[32px] md:leading-9 font-[600]">
          {title}
        </h2>
      </div>
      <div className="flex justify-between md:gap-[32px] gap-[20px] mt-[20px] md:mt-8 flex-wrap">
        {moviesRes.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
      <div className="my-8 flex justify-end"></div>
      <PaginationComp url={currentUrl} page={page} />
    </div>
  );
}
