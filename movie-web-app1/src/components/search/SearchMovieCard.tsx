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

export const SearchMovieCard = ({
  title,
  rating,
  image,
  id,
}: movieCardProps) => {
  return (
    <Link href={`/detail/${id}`}>
      <Card className="md:w-[165px] w-[157px] bg-secondary p-0 overflow-hidden gap-2 shadow-none border-0 flex">
        <CardContent className="p-0  ">
          <div className=" border-0 bg-[#000000]">
            <Image
              src={`https://image.tmdb.org/t/p/original/${image}`}
              alt=""
              width={165}
              height={244}
              className="hover:opacity-50 hover:duration-[0.5s]"
            ></Image>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start p-2">
          <CardDescription className="flex gap-2 items-center">
            <FaStar color="#FDE047" />
            <p className="md:text-[14px] md:leading-5 text-[12px] leading-4">
              {rating}
              <span className="text-[12px] text-[#71717A] leading-4">/10</span>
            </p>
          </CardDescription>
          <CardTitle className="md:text-[18px] text-[14px] leading-[20px] md:leading-7 font-normal truncate">
            {title}
          </CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
