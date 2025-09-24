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
          src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
          className="w-[290px] h-[428px] bg-[#F4F4F5] rounded-lg"
        ></img>
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            className="w-[760px] h-[428px] bg-[#F4F4F5] rounded-lg "
          ></img>
          <div className="flex gap-3 absolute top-[364px] left-6 items-center text-white">
            <TrailerDialog youtubeKey={trailer?.key} />

            <p className="text-[16px] leading-[24px]">Play trailer</p>
            <p className="text-[16px] leading-[20px]">2:35</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUpperInfo;
