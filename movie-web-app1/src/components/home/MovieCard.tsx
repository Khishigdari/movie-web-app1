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

type movieCardProps = {
  title: string;
  rating: number;
  image: string;
};

export const MovieCard = ({ title, rating, image }: movieCardProps) => {
  return (
    <Card className="w-[230px] bg-secondary p-0 overflow-hidden gap-2 shadow-none border-0 flex">
      <CardContent className="p-0  ">
        <div className=" border-0 bg-[#000000]">
          {/* bg-[#000000] */}
          <Image
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            alt=""
            width={230}
            height={340}
            className="hover:opacity-50 hover:duration-[0.5s]"
          ></Image>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2">
        <CardDescription className="flex gap-2 items-center">
          <FaStar color="#FDE047" />
          <p className="text-[14px] leading-5">
            {/* text-[#09090B] */}
            {rating}
            <span className="text-[12px] text-[#71717A] leading-4">/10</span>
          </p>
        </CardDescription>
        <CardTitle className="text-[18px] leading-7 font-normal ">
          {/* text-[#09090B] */}
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
