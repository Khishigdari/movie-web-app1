import { MovieType, TrailerResponseType } from "../../../types";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import { FaStar } from "react-icons/fa";
import { CarouselItem } from "@/components/ui/carousel";
import { CarouselTrailerDialog } from "../trailer/CarouselTrailerDialog";
import { getMovieTrailers } from "../../../utils/get-data";

// type MovieCarouselProps = {
//   movie: MovieType[];
// };

export const MobileCarouselDesc = ({ movie }: { movie: MovieType }) => {
  // export const MobileCarouselDesc = ({ movie }: MovieCarouselProps) => {
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
    <div className="max-md:p-5">
      <div className="  left-[10%] top-[30%] ">
        <div className="max-md:flex max-md:justify-between max-md:items-end">
          <div className="max-md:flex-col">
            <p className="md:text-[16px] text-[14px] leading-5 md:leading-[24px] max-md:mt-5 ">
              Now Playing:
            </p>
            <span className="md:text-[36px] text-[24px] leading-[32px] md:leading-[40px] md:font-[700] font-[600] mb-[10px] ">
              {movie.title}
            </span>
          </div>
          <div className="flex items-center gap-[6px] mb-[26px]">
            <FaStar color="#FDE047" width={23} height={23} />
            <p className="text-[18px] flex items-center leading-[28px] font-[600] gap-0.5">
              {movie.vote_average}
              <span className="text-[16px] leading-[24px] text-[#71717A]">
                /10
              </span>
            </p>
          </div>
        </div>
        <p className="md:w-[302px] md:text-[12px] md:leading-[16px] text-[14px] leading-5 mb-[16px] max-md:mt-4">
          {movie.overview}
        </p>
        <CarouselTrailerDialog youtubeKey={trailerKey} />
      </div>
    </div>
  );
};
