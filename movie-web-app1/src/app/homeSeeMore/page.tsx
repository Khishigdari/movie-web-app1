// const trailer = await getMovieTrailer(id)

// import { HomeSeeMorePage } from "@/components";
import { getMoviesList } from "../../../utils/get-data";
import { movieResponseType, MovieType } from "../../../types";
import Link from "next/link";

type HomeSeeMorePageProps = {
  searchParams: Promise<{ movies: MovieType[]; title: string }>;
};

async function Home({ searchParams }: HomeSeeMorePageProps) {
  const homeSeeMoreParams: movieResponseType = await getMoviesList("upcoming");
  const params = await searchParams;
  const movies = params.movies;
  const title = params.title;

  return (
    <div>
      {/* <HomeSeeMorePage /> */}
      {homeSeeMoreParams.results.map((movie) => {})}
      {/* <Link href={`/homeSeeMore?id=${movies.id}`}></Link> */}
      <div>See More</div>
    </div>
  );
}
export default Home;
