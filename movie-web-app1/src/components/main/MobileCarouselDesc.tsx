import { MovieType, TrailerResponseType } from "../../../types";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import { FaStar } from "react-icons/fa";
import { CarouselItem } from "@/components/ui/carousel";
import { CarouselTrailerDialog } from "../trailer/CarouselTrailerDialog";
import { getMovieTrailers } from "../../../utils/get-data";

export const MobileCarouselDesc = ({ movie }: { movie: MovieType }) => {
  const [trailerKey, setTrailerKey] = React.useState("");

  const getTrailerData = async () => {
    const trailerData: TrailerResponseType = await getMovieTrailers(
      movie.id.toString()
    );
    const trailer = trailerData.results.find((item) => item.type === "Trailer");
    setTrailerKey(trailer?.key || "");
  };

  React.useEffect(() => {
    getTrailerData();
  }, []);

  return (
    <CarouselItem key={movie.id}>
      {/* <div className="relative"> */}
      <Card className="border-0 p-0 shadow-none">
        <CardContent className=" aspect-video max-h-[600px] items-center justify-center overflow-hidden p-0">
          <img
            className="w-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
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
            <CarouselTrailerDialog youtubeKey={trailerKey} />
          </div>
        </CardContent>
      </Card>
      {/* </div> */}
    </CarouselItem>
  );
};
