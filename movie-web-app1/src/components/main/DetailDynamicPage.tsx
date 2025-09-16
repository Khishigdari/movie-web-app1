import { FaStar } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { SimilarMovies } from "@/components";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  getMovieCrew,
  getMovieDetail,
  getMovieGenre,
  getSimilarMovie,
} from "../../../utils/get-data";
import { CrewResponseType, GenreResponseType, MovieType } from "../../../types";
import { Button } from "../ui/button";
import { PlayIcon } from "lucide-react";
import Image from "next/image";

type DetailDynamicPageProps = {
  id: string;
};

export const DetailDynamicPage = async ({ id }: DetailDynamicPageProps) => {
  const detail = await getMovieDetail(id);
  console.log(detail, "detail");

  const crew: CrewResponseType = await getMovieCrew(id);
  console.log(crew, "crew");

  const director = crew.crew.find((hun) => hun.job === "Director");

  const writer = crew.crew.find(
    (hun) => hun.known_for_department === "Writing"
  );

  const genres: GenreResponseType = await getMovieGenre(id);

  const similar = await getSimilarMovie(id);
  console.log("similar", similar);

  return (
    <div>
      <div className="mt-[52px] max-w-[1080px] m-auto">
        <div className="flex justify-between items-center mb-[24px]">
          <div>
            <h1 className="text-[36px] leading-[40px] mb-1 font-[700]">
              {detail.title}
            </h1>
            <p className="text-[18px] leading-7">
              {detail.release_date} · {detail.runtime} min
            </p>
          </div>
          <div>
            <p className="text-[12px] leading-[16px] font-[500]">Rating</p>
            <div className="flex gap-1     items-center">
              <FaStar color="#FDE047" className="w-[28px] h-[28px]" />
              <div>
                <p className="text-[18px] leading-[28px] font-[600]">
                  {detail.vote_average}
                  <span className="text-[16px] leading-[24px]">/10</span>
                </p>
                <p className="text-[12px] leading-[16px] text-[#71717A]">
                  {detail.vote_count}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[32px] mb-[32px] ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
            className="w-[290px] h-[428px] bg-[#F4F4F5] rounded-lg"
          ></img>
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`}
              className="w-[760px] h-[428px] bg-[#F4F4F5] rounded-lg "
            ></img>
            <div className="flex gap-3 absolute top-[364px] left-6 items-center text-white">
              <Button className=" rounded-full bg-white">
                <PlayIcon className="stroke-black hover:stroke-white" />
              </Button>
              <p className="text-[16px] leading-[24px]">Play trailer</p>
              <p className="text-[16px] leading-[20px]">2:35</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 ">
          {genres.genres?.map((genre) => (
            <Badge
              key={genre.id}
              className="rounded-full border border-[#E4E4E7] bg-transparent text-black"
            >
              <p>{genre.name}</p>
            </Badge>
          ))}
        </div>

        <div className="text-[16px] leading-[24px] mt-5">{detail.overview}</div>
        <div className=" mt-5 ">
          <div className="flex gap-[53px]">
            <div className="text-[16px] leading-[28px] font-[700]  w-16 ">
              Director
            </div>
            <p className="text-[16px] leading-[24px] font-[400] flex gap-4">
              {director?.name}
            </p>
          </div>
          <div className="w-full border border-[#E4E4E7] mt-2 mb-6"></div>
          <div className="flex gap-[53px]">
            <div className="text-[16px] leading-[28px] font-[700]  w-16 ">
              Writers
            </div>
            <p className="text-[16px] leading-[24px] font-[400] flex gap-4">
              {writer?.name}
            </p>
          </div>
          <div className="w-full border border-[#E4E4E7] mt-2 mb-6"></div>
          <div className="flex gap-[53px]">
            <div className="text-[16px] leading-[28px] font-[700]  w-16">
              Stars
            </div>
            <div className="text-[16px] leading-[24px] font-[400] flex gap-4">
              {crew.cast.slice(0, 5)?.map((cast) => (
                <div key={cast.id}>
                  <p>{cast.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border border-[#E4E4E7] mt-2 mb-8"></div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-[24px] leading-8 font-[600]">More like this</h3>
          <Link
            href={"/SeeMore"}
            className="flex gap-2 items-center text-[14px] leading-5 font-[500]"
          >
            {" "}
            See more <FiArrowRight width={16} height={16} />
          </Link>
        </div>
        <div className="flex justify-between gap-[32px] mt-8 flex-wrap">
          {similar.results?.slice(0, 5).map((movie: MovieType) => (
            <SimilarMovies
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
