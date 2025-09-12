"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "../../../types";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import { FiPlay } from "react-icons/fi";

type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-screen ">
        <CarouselContent>
          {movies?.slice(0, 5).map((movie) => (
            <CarouselItem key={movie.id}>
              <div className="relative">
                <Card className="border-0 p-0 shadow-none">
                  <CardContent className="flex aspect-video max-h-[600px] items-center justify-center overflow-hidden p-0">
                    <img
                      className="w-full object-cover"
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    />
                    <div className="absolute text-[#FAFAFA] left-[10%] top-[30%]">
                      <p className="text-[16px] leading-[24px]">Now Playing:</p>
                      <span className="text-[36px] leading-[40px] font-[700] mb-[10px]">
                        {movie.title}
                      </span>
                      <div className="flex items-center gap-[6px] mb-[26px]">
                        <FaStar color="#FDE047" width={23} height={23} />
                        <p className="text-[18px] flex items-center leading-[28px] font-[600] gap-0.5">
                          {movie.vote_average}
                          <span className="text-[16px] leading-[24px] text-[#71717A]">
                            /10
                          </span>
                        </p>
                      </div>
                      <p className="w-[302px] text-[12px] leading-[16px] mb-[16px]">
                        {movie.overview}
                      </p>
                      <Button className="px-[16px] bg-[#F4F4F5] text-[14px] leading-[20px] text-[#18181B] hover:text-[#FAFAFA]">
                        <FiPlay />
                        Watch Trailer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
      <div className="flex gap-2 absolute  bottom-5 left-1/2 -translate-y-1/2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`rounded-full size-2 ${
              index + 1 === current ? "bg-white" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
