import { SimilarSeeMore } from "@/components";
import React from "react";
import { getSimilarMovie } from "../../../utils/get-data";
import { MovieType } from "../../../types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type DetailDynamicPageProps = {
  searchParams: Promise<{ id: string }>;
};

const Home = async ({ searchParams }: DetailDynamicPageProps) => {
  const params = await searchParams;
  const id = params.id;
  const similar = await getSimilarMovie(id);
  console.log("similar", similar);

  return (
    <div className="max-w-[1280px] m-auto md:p-0 p-5">
      <p className="md:text-[30px] text-[24px] md:leading-[36px] leading-[32px] font-[600] mt-[32px] md:mt-[52px]">
        More like this
      </p>
      <div className="flex justify-between md:gap-[32px] gap-[20px] md:mt-8 mt-5 flex-wrap">
        {similar.results?.slice(0, 20).map((movie: MovieType) => (
          <SimilarSeeMore
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
      <div className="my-8 flex justify-end">
        <Pagination className=" justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Home;
