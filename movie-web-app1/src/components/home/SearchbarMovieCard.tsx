import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type SearchovieCardProps = {
  title: string;
  rating: number;
  image: string;
  id: number;
};

export const SearchbarMovieCard = ({
  title,
  rating,
  image,
  id,
}: SearchovieCardProps) => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg  m-auto">
      {/* <Link href={`/detail/${id}`}> */}
      <Card className="  p-3 overflow-hidden gap-2 shadow-none border-0 flex rounded-none box-border">
        <div className="flex gap-4 items-start">
          <CardContent className="p-0 w-[67px]">
            <div className=" border-0 h-[100px] w-[67px] ">
              <Image
                src={`https://image.tmdb.org/t/p/original/${image}`}
                alt=""
                width={67}
                height={100}
                className="rounded-[6px]"
                // hover:opacity-50 hover:duration-[0.5s]
              ></Image>
            </div>
          </CardContent>
          <div className="w-[454px]">
            <div>
              <CardFooter className="flex flex-col items-start p-0">
                <CardTitle className="text-[20px] leading-7 font-[600] ">
                  {title}
                </CardTitle>
                <CardDescription className="flex gap-2 items-center">
                  <FaStar color="#FDE047" />
                  <p className="text-[14px] leading-5">
                    {rating}
                    <span className="text-[12px] text-[#71717A] leading-4">
                      /10
                    </span>
                  </p>
                </CardDescription>
              </CardFooter>
            </div>
            <div className="flex justify-between  mt-3 mr-4">
              <p>year</p>
              <a
                href={`/detail/${id}`}
                // href={"/homeSeeMore"}
                className="flex gap-2 items-center text-[14px] leading-5 font-[500]"
              >
                {" "}
                See more <FiArrowRight width={16} height={16} />
              </a>
            </div>
          </div>
        </div>
      </Card>
      <div className="w-[533px] h-[1px] bg-[#E4E4E7]"></div>
      {/* </Link> */}
    </div>
  );
};
