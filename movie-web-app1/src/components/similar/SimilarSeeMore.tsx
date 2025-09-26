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
export const SimilarSeeMore = ({
  title,
  rating,
  image,
  id,
}: movieCardProps) => {
  return (
    <Link href={`/detail/${id}`}>
      <Card className="md:w-[230px] w-[157px] bg-secondary p-0 overflow-hidden gap-2 shadow-none border-0 flex">
        <CardContent className="p-0 md:w-[230px] w-[157px]">
          <div className=" border-0 bg-[#000000] h-[233px] md:h-[340px]">
            <Image
              src={`https://image.tmdb.org/t/p/original/${image}`}
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
            <p className="md:text-[14px] text-[12px] leading-[16px] font-[500] md:leading-5">
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
