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
            <h1 className="md:w-[211px] w-[133px] mb-1 h-[40px] rounded-full bg-[#F4F4F5]"></h1>
            <p className="md:w-[237px] w-[191px] h-[18px] mb-6 md:h-[28px] rounded-full bg-[#F4F4F5]"></p>
          </div>
          <div>
            <p className="md:block hidden text-[12px] leading-[16px] font-[500]">
              Rating
            </p>
            <p className="w-[83px] h-[20px] bg-[#F4F4F5] rounded-full mb-2 mt-1"></p>
            <p className="md:block hidden w-[83px] h-[20px] bg-[#F4F4F5] rounded-full"></p>
          </div>
        </div>
        <div className="flex gap-[32px] mb-[32px]">
          <div className="hidden md:block md:w-[290px] w-[100px] h-[148px] md:h-[428px] bg-[#F4F4F5] rounded-lg"></div>
          <div className="w-[760px] h-[428px] bg-[#F4F4F5] rounded-lg"></div>
        </div>
        <div className="flex gap-[34px]">
          <div className="block md:hidden w-[100px] h-[148px] bg-[#F4F4F5] rounded-lg"></div>{" "}
          <div className="flex flex-col">
            <div className="flex gap-3 h-[20px]">
              {genres.genres?.map((genre) => (
                <Badge
                  key={genre.id}
                  className="rounded-full border border-[#E4E4E7] bg-transparent text-black"
                >
                  <p>{genre.name}</p>
                </Badge>
              ))}
            </div>
            <div className="block md:hidden bg-[#F4F4F5] mt-5 rounded-full  w-[201px] h-[20px] "></div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-[#F4F4F5] mt-5 rounded-full md:w-[1080px] w-[201px] h-[20px] md:h-[22px]"></div>
          <div className="bg-[#F4F4F5] rounded-full w-[699px] h-[22px] mt-1"></div>
        </div>
        <div className="flex gap-[53px] mb-1 mt-5">
          <div className="w-16 h-7 bg-[#F4F4F5] rounded-full"></div>
          <div className="w-[137px] h-7 bg-[#F4F4F5] rounded-full"></div>
        </div>
        <div className="w-full border border-[#F4F4F5] mt-2 mb-8"></div>
        <div className="flex gap-[53px] mb-1 mt-5">
          <div className="w-16 h-7 bg-[#F4F4F5] rounded-full"></div>
          <div className="md:w-[360px] w-[218px] h-7 bg-[#F4F4F5] rounded-full"></div>
        </div>
        <div className="w-full border border-[#F4F4F5] mt-2 mb-8"></div>
        <div className="flex gap-[53px] mb-1 mt-5">
          <div className="w-16 h-7 bg-[#F4F4F5] rounded-full"></div>
          <div className="md:w-[360px] w-[218px] h-7 bg-[#F4F4F5] rounded-full"></div>
        </div>
        <div className="w-full border border-[#F4F4F5] mt-2 mb-8"></div>
        <div className="flex justify-between">
          <div className="md:w-[250px] w-[145px] h-8 rounded-full bg-[#F4F4F5] my-8"></div>
          <div className="md:w-[165px] w-[125px] h-8 rounded-full bg-[#F4F4F5] my-8"></div>
        </div>
        <div className="flex md:gap-8 gap-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton
              className="md:w-[190px] w-[157px] h-[309px] md:h-[372px] rounded-lg bg-[#F4F4F5] overflow-x-scroll"
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;
