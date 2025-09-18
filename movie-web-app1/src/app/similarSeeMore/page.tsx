// import Image from "next/image";

// import { FaStar } from "react-icons/fa";
// import Link from "next/link";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardTitle,
// } from "@/components/ui/card";

// type movieCardProps = {
//   title: string;
//   rating: number;
//   image: string;
//   id: number;
// };

// export const SimilarSeeMorePage = ({
//   title,
//   rating,
//   image,
//   id,
// }: movieCardProps) => {
//   return (
//     <Link href={`/detail/${id}`}>
//       <Card className="w-[190px] bg-secondary p-0 overflow-hidden gap-2 shadow-none border-0 flex mt-8">
//         <CardContent className="p-0  ">
//           <div className=" border-0 bg-[#000000]">
//             <Image
//               src={`https://image.tmdb.org/t/p/w500/${image}`}
//               alt=""
//               width={230}
//               height={340}
//               className="hover:opacity-50 hover:duration-[0.5s]"
//             ></Image>
//           </div>
//         </CardContent>
//         <CardFooter className="flex flex-col items-start p-2">
//           <CardDescription className="flex gap-2 items-center">
//             <FaStar color="#FDE047" />
//             <p className="text-[14px] leading-5">
//               {rating}
//               <span className="text-[12px] text-[#71717A] leading-4">/10</span>
//             </p>
//           </CardDescription>
//           <CardTitle className="text-[18px] leading-7 font-normal ">
//             {title}
//           </CardTitle>
//         </CardFooter>
//       </Card>
//     </Link>
//   );
// };

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
