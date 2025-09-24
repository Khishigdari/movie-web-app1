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
    <div className="max-w-[1280px] m-auto">
      <p className="text-[30px] leading-[36px] font-[600] mt-[52px]">
        More like this
      </p>
      <div className="flex justify-between gap-[32px] mt-8 flex-wrap">
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
