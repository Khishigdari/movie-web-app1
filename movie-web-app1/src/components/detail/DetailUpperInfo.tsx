import React from "react";
import { TrailerDialog } from "../trailer/TrailerDialog";
import { FaStar } from "react-icons/fa";
import { getMovieDetail, getMovieTrailers } from "../../../utils/get-data";
import { TrailerResponseType } from "../../../types";

type DetailDynamicPageProps = {
  id: string;
};

const DetailUpperInfo = async ({ id }: DetailDynamicPageProps) => {
  const detail = await getMovieDetail(id);
  console.log(detail, "detail");
  const trailerData: TrailerResponseType = await getMovieTrailers(id);
  const trailer = trailerData.results.find((item) => item.type === "Trailer");
  return (
    <div>
      <div className="flex justify-between items-center md:mb-[24px] mb-4 md:p-0 px-5">
        <div>
          <h1 className="text-[24px] leading-[32px] font-[600] md:text-[36px]  md:leading-[40px] mb-1  md:font-[700]">
            {detail.title}
          </h1>
          <p className="text-[14px] leading-5 md:text-[18px] md:leading-7">
            {detail.release_date} · {detail.runtime} min
          </p>
        </div>
        <div>
          <p className="hidden md:block text-[12px] leading-[16px] font-[500]">
            Rating
          </p>
          <div className="flex gap-1     items-center">
            <FaStar
              color="#FDE047"
              className="md:w-[28px] w-[24px] h-[24px] md:h-[28px]"
            />
            <div>
              <p className="md:text-[18px] md:leading-[28px] md:font-[600] text-[14px] leading-5 font-[700]">
                {detail.vote_average}
                <span className="md:text-[16px] md:leading-[24px] text-[14px] leading-5 font-[700]">
                  /10
                </span>
              </p>
              <p className="text-[12px] leading-[16px] text-[#71717A]">
                {detail.vote_count}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:gap-[32px] mb-[32px] ">
        <img
          src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
          className="w-[290px] h-[428px] hidden md:block bg-[#F4F4F5] rounded-lg"
        ></img>
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            className="w-[760px] h-[428px] bg-[#F4F4F5] md:rounded-lg "
          ></img>
          <div className="flex gap-3 absolute top-[364px] left-6 items-center text-white">
            <TrailerDialog youtubeKey={trailer?.key} />

            <p className="text-[16px] leading-[24px]">Play trailer</p>
            <p className="text-[16px] leading-[20px]">2:35</p>
          </div>
        </div>
        {/* <div className="px-5">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
            className="w-[100px] h-[148px] block md:hidden bg-[#F4F4F5] md:rounded-lg mt-8 "
          ></img>
        </div> */}
      </div>
    </div>
  );
};

export default DetailUpperInfo;
