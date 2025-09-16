import React from "react";
import { Badge } from "../ui/badge";
import { GenreResponseType } from "../../../types";
import { getMovieGenre } from "../../../utils/get-data";
import { Skeleton } from "../ui/skeleton";

type DetailSkeletonProps = {
  id: string;
};

const DetailPageSkeleton = async ({ id }: DetailSkeletonProps) => {
  const genres: GenreResponseType = await getMovieGenre(id);

  return (
    <div>
      <div className="mt-[52px] max-w-[1080px] m-auto">
        <div className="flex justify-between items-center mb-[24px]">
          <div>
            <h1 className="w-[211px] mb-1 h-[40px] rounded-full bg-[#F4F4F5]"></h1>
            <p className="w-[237px] mb-6 h-[28px] rounded-full bg-[#F4F4F5]"></p>
          </div>
          <div>
            <p className="text-[12px] leading-[16px] font-[500]">Rating</p>
            <p className="w-[83px] h-[20px] bg-[#F4F4F5] rounded-full mb-2 mt-1"></p>
            <p className="w-[83px] h-[20px] bg-[#F4F4F5] rounded-full"></p>
          </div>
        </div>
        <div className="flex gap-[32px] mb-[32px]">
          <div className="w-[290px] h-[428px] bg-[#F4F4F5] rounded-lg"></div>
          <div className="w-[760px] h-[428px] bg-[#F4F4F5] rounded-lg"></div>
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
        <div className="bg-[#F4F4F5] mt-5 rounded-full w-[1080px] h-[22px]"></div>
        <div className="bg-[#F4F4F5] rounded-full w-[699px] h-[22px] mt-1"></div>
        <div className="flex gap-[53px] mb-1 mt-5">
          <div className="w-16 h-7 bg-[#F4F4F5] rounded-full"></div>
          <div className="w-[137px] h-7 bg-[#F4F4F5] rounded-full"></div>
        </div>
        <div className="w-full border border-[#F4F4F5] mt-2 mb-8"></div>
        <div className="flex gap-[53px] mb-1 mt-5">
          <div className="w-16 h-7 bg-[#F4F4F5] rounded-full"></div>
          <div className="w-[360px] h-7 bg-[#F4F4F5] rounded-full"></div>
        </div>
        <div className="w-full border border-[#F4F4F5] mt-2 mb-8"></div>
        <div className="flex gap-[53px] mb-1 mt-5">
          <div className="w-16 h-7 bg-[#F4F4F5] rounded-full"></div>
          <div className="w-[360px] h-7 bg-[#F4F4F5] rounded-full"></div>
        </div>
        <div className="w-full border border-[#F4F4F5] mt-2 mb-8"></div>
        <div className="flex justify-between">
          <div className="w-[250px] h-8 rounded-full bg-[#F4F4F5] my-8"></div>
          <div className="w-[165px] h-8 rounded-full bg-[#F4F4F5] my-8"></div>
        </div>
        <div className="flex gap-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton
              className="w-[190px] h-[372px] rounded-lg bg-[#F4F4F5]"
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;
