import React from "react";
import { SimilarMovies } from "../home";
import { CrewResponseType, MovieType } from "../../../types";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import {
  getMovieCrew,
  getMovieDetail,
  getSimilarMovie,
} from "../../../utils/get-data";

type DetailDynamicPageProps = {
  id: string;
};

const DetailInfos = async ({ id }: DetailDynamicPageProps) => {
  const detail = await getMovieDetail(id);
  console.log(detail, "detail");

  const crew: CrewResponseType = await getMovieCrew(id);
  console.log(crew, "crew");

  const director = crew.crew.find((hun) => hun.job === "Director");

  const writer = crew.crew.find(
    (hun) => hun.known_for_department === "Writing"
  );

  const similar = await getSimilarMovie(id);
  console.log("similar", similar);
  return (
    <div>
      <div className="text-[16px] leading-[24px] hidden md:block mt-5 ">
        {detail.overview}
      </div>
      <div className=" mt-5 px-5 md:px-0">
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
      <div className="md:p-0 px-5">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-[24px] leading-8 font-[600]">More like this</h3>
          <Link
            href={`/similarSeeMore?id=${id}`}
            className="flex gap-2 items-center text-[14px] leading-5 font-[500]"
          >
            {" "}
            See more <FiArrowRight width={16} height={16} />
          </Link>
        </div>
        <div className="flex justify-between gap-[32px] mt-8 flex-wrap p-0">
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

export default DetailInfos;
