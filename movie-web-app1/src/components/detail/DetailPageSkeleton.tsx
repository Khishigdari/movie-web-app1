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
      <div className="md:mt-[52px] mt-8 max-w-[1080px] m-auto">
        <div className="flex justify-between items-center md:mb-[24px] mb-4">
          <div>
            <Skeleton className="md:w-[211px] w-[133px] mb-1 h-[40px] rounded-full "></Skeleton>
            <Skeleton className="md:w-[237px] w-[191px] h-[18px] md:mb-6 md:h-[28px] rounded-full "></Skeleton>
          </div>
          <div>
            <p className="md:block hidden text-[12px] leading-[16px] font-[500]">
              Rating
            </p>
            <Skeleton className="w-[83px] h-[20px]  rounded-full mb-2 mt-1"></Skeleton>
            <Skeleton className="md:block hidden w-[83px] h-[20px]  rounded-full"></Skeleton>
          </div>
        </div>
        <div className="flex gap-[32px] mb-[32px]">
          <Skeleton className="hidden md:block md:w-[290px] w-[100px] h-[148px] md:h-[428px]  rounded-lg"></Skeleton>
          <Skeleton className="w-[760px] h-[428px]  rounded-lg"></Skeleton>
        </div>

        <div className="max-md:px-5">
          <div className="flex gap-[34px] ">
            <Skeleton className="block md:hidden w-[100px] h-[148px]  rounded-lg"></Skeleton>{" "}
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
              <Skeleton className="block md:hidden  mt-5 rounded-full  w-[201px] h-[20px] "></Skeleton>
            </div>
          </div>
          <div className="hidden md:block">
            <Skeleton className=" mt-5 rounded-full md:w-[1080px] w-[201px] h-[20px] md:h-[22px]"></Skeleton>
            <Skeleton className="hidden md:block rounded-full w-[699px] h-[22px] mt-1"></Skeleton>
          </div>
          <div className="flex gap-[53px] mb-1 mt-5">
            <Skeleton className="w-16 h-7  rounded-full"></Skeleton>
            <Skeleton className="w-[137px] h-7  rounded-full"></Skeleton>
          </div>
          <div className="w-full border border-[#F4F4F5] mt-2 mb-8"></div>
          <div className="flex gap-[53px] mb-1 mt-5">
            <Skeleton className="w-16 h-7  rounded-full"></Skeleton>
            <Skeleton className="md:w-[360px] w-[218px] h-7  rounded-full"></Skeleton>
          </div>
          <div className="w-full border border-[#F4F4F5] mt-2 mb-8"></div>
          <div className="flex gap-[53px] mb-1 mt-5">
            <Skeleton className="w-16 h-7  rounded-full"></Skeleton>
            <Skeleton className="md:w-[360px] w-[218px] h-7  rounded-full"></Skeleton>
          </div>
          <div className="w-full border border-[#F4F4F5] mt-2 mb-8"></div>
          <div className="flex justify-between">
            <Skeleton className="md:w-[250px] w-[145px] h-8 rounded-full  my-8"></Skeleton>
            <Skeleton className="md:w-[165px] w-[125px] h-8 rounded-full  my-8"></Skeleton>
          </div>
          <div className="flex md:gap-8 gap-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton
                className="md:w-[190px] w-[157px] h-[309px] md:h-[372px] rounded-lg  overflow-x-scroll"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;
