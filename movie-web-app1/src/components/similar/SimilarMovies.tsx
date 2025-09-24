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

type movieCardProps = {
  title: string;
  rating: number;
  image: string;
  id: number;
};
export const SimilarMovies = ({ title, rating, image, id }: movieCardProps) => {
  return (
    <Link href={`/detail/${id}`}>
      <Card className="w-[190px] bg-secondary p-0 overflow-hidden gap-2 shadow-none border-0 flex mt-8">
        <CardContent className="p-0  ">
          <div className=" border-0 bg-[#000000] w-[190px] h-[280px]">
            <Image
              src={`https://image.tmdb.org/t/p/original/${image}`}
              alt=""
              width={190}
              height={281}
              className="hover:opacity-50 hover:duration-[0.5s]"
            ></Image>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start p-2">
          <CardDescription className="flex gap-2 items-center">
            <FaStar color="#FDE047" />
            <p className="text-[14px] leading-5">
              {rating}
              <span className="text-[12px] text-[#71717A] leading-4">/10</span>
            </p>
          </CardDescription>
          <CardTitle className="text-[18px] leading-7 font-normal truncate">
            {title}
          </CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
